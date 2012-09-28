function Walker($playfield, speed, randomPatternGenerator, tileHistory, tileDebugger, typeWriter) {
  this.$playfield = $playfield;
  this.randomPatternGenerator = randomPatternGenerator;
  this.tileHistory = tileHistory;
  this.tileDebugger = tileDebugger;
  this.typeWriter = typeWriter;
  this.speed = speed;
  this.active = false;
  this.$toggler = $('[data-action="walker"]');
  this.$walker = $('#walker');

  this.$previousTile = null;
  this.$currentTile = null;

  this.stop = function() {
    if (this.active) {
      this.toggle();
    }
  }.bind(this);

  this.toggle = function() {
    // todo: improve this to check the grid without looping?
    var tileFound = false;
    $('img.tile', $playfield).each(function () {
      if ($(this).attr('src') != 'img/x.jpg') {
        tileFound = true;
        return true;
      }
    });

    if (!tileFound) {
      this.renderErrorMessage();
      return;
    }

    if (this.active) {
      this.$toggler.removeClass('active');
      this.hideWalker();
    } else {
      this.$toggler.addClass('active');
      var $randomTile = this.getRandomTile();
      this.moveWalkerToTile($randomTile);
      this.showWalker();
    }

    this.active = !this.active;
  }.bind(this);

  this.renderErrorMessage = function() {
    typeWriter.write('No', 15, 1);
    typeWriter.write('tiles', 12, 4);
    typeWriter.write('to', 15, 7);
    typeWriter.write('walk', 15, 10);
  };

  this.getRandomTile = function() {
    var $randomTile = this.randomPatternGenerator.getRandomTile();
    while ($randomTile.attr('src') == 'img/x.jpg') {
      $randomTile = this.randomPatternGenerator.getRandomTile();
    }

    return $randomTile;
  }.bind(this);

  this.showWalker = function() {
    this.$walker.show(250);
  }.bind(this);

  this.hideWalker = function() {
    this.$walker.hide(250);
  }.bind(this);

  this.moveWalkerToTile = function($tile) {
    this.$walker.animate({
      left: ($tile.data('x') * 30) - 19,
      top: ($tile.data('y') * 30) + 7
    }, this.speed, function() {
        this.$currentTile = $tile;
        this.tileHistory.updateTile($tile);
        this.tileDebugger.updateTile($tile);
        this.walk();
    }.bind(this));
  }.bind(this);

  this.walk = function() {
    if (!this.active) return;

    var possibilities = this.randomPatternGenerator.getDirectionsOfTile(this.$currentTile);

    // avoid going back
    if (possibilities.length > 1 && this.$previousTile !== null) {
      possibilities = possibilities.replace(this.getRelativeDirectionOfPreviousTile(), '');
    }

    this.$previousTile = this.$currentTile;

    var $newTilePosition;
    if (this.tileHistory.isActive() && possibilities.length > 1) {
      possibilities = this.tileHistory.getLeastVisitedNeighboursFromTile(this.$currentTile);
      $newTilePosition = possibilities[(Math.floor(Math.random() * possibilities.length))];
    } else {
      switch(possibilities[(Math.floor(Math.random() * possibilities.length))]) {
        case 't':
          $newTilePosition = $('[data-x="' + this.$currentTile.data('x') + '"][data-y="' + (this.$currentTile.data('y') - 1) + '"]');
          break;

        case 'r':
          $newTilePosition = $('[data-x="' + (this.$currentTile.data('x') + 1) + '"][data-y="' + this.$currentTile.data('y') + '"]');
          break;

        case 'b':
          $newTilePosition = $('[data-x="' + this.$currentTile.data('x') + '"][data-y="' + (this.$currentTile.data('y') + 1) + '"]');
          break;

        case 'l':
          $newTilePosition = $('[data-x="' + (this.$currentTile.data('x') - 1) + '"][data-y="' + this.$currentTile.data('y') + '"]');
          break;
      }
    }

    this.moveWalkerToTile($newTilePosition);
  }.bind(this);

  this.getRelativeDirectionOfPreviousTile = function() {
    switch(true) {
      case (this.$previousTile.data('y') - this.$currentTile.data('y') == -1):
        return 't';

      case (this.$previousTile.data('x') - this.$currentTile.data('x') == 1):
        return 'r';

      case (this.$previousTile.data('y') - this.$currentTile.data('y') == 1):
        return 'b';

      case (this.$previousTile.data('x') - this.$currentTile.data('x') == -1):
        return 'l';
    }
  }.bind(this);
}