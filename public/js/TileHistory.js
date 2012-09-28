function TileHistory($playfield)
{
  this.$playfield = $playfield;
  this.maxWidth = this.$playfield.data('maximum-x');
  this.maxHeight = this.$playfield.data('maximum-y');
  this.active = true;
  this.$toggler = $('[data-action="history"]');

  this.history = [];

  this.toggle = function() {
    if (this.active) {
      this.$toggler.removeClass('active');
    } else {
      this.$toggler.addClass('active');
    }

    this.active = !this.active;
  }.bind(this);

  this.isActive = function() {
    return this.active;
  }.bind(this);

  this.resetTile = function($tile) {
    // todo: check edge tiles
    if (typeof $tile.data('x') === 'undefined' || typeof $tile.data('y') === 'undefined') return;

    this.history[($tile.data('y') - 1)][($tile.data('x') - 1)] = 0;
  }.bind(this);

  this.updateTile = function($tile) {
    // todo: check edge tiles
    if (typeof $tile.data('x') === 'undefined' || typeof $tile.data('y') === 'undefined') return;

    this.history[($tile.data('y') - 1)][($tile.data('x') - 1)]++;
  }.bind(this);

  this.getNumberOfVisitsOfTile = function($tile) {
    return this.history[($tile.data('y') - 1)][($tile.data('x') - 1)];
  }.bind(this);

  this.reset = function() {
    this.initialize();
  }.bind(this);

  this.getLeastVisitedNeighboursFromTile = function($tile) {
    // generate maximum int javascript can handle as default least visited
    // if someone gets beyond this point he should really get a fucking job
    var leastNumberOfVisits = Math.pow(2,32) - 1;
    var neighbours = this.getNeighboursOfTile($tile);
    var leastVisited = [];

    for (var i = 0, numberOfNeighbours = neighbours.length; i < numberOfNeighbours; i++) {
      if (this.getNumberOfVisitsOfTile(neighbours[i]) < leastNumberOfVisits) {
        leastNumberOfVisits = this.getNumberOfVisitsOfTile(neighbours[i]);
        leastVisited = [neighbours[i]];
      } else if (this.getNumberOfVisitsOfTile(neighbours[i]) == leastNumberOfVisits) {
        leastVisited.push(neighbours[i]);
      }
    }

    return leastVisited;
  }.bind(this);

  this.getNeighboursOfTile = function($tile) {
    var neighbours = [];
    var directionsOfTile = this.getDirectionsOfTile($tile);

    if ($tile.data('x') > 1 && directionsOfTile.indexOf('l') != -1) {
      neighbours.push($('[data-x="' + ($tile.data('x') - 1) + '"][data-y="' + $tile.data('y') + '"]'));
    }

    if ($tile.data('y') > 1 && directionsOfTile.indexOf('t') != -1) {
      neighbours.push($('[data-x="' + $tile.data('x') + '"][data-y="' + ($tile.data('y') - 1) + '"]'));
    }

    if ($tile.data('x') < this.maxWidth && directionsOfTile.indexOf('r') != -1) {
      neighbours.push($('[data-x="' + ($tile.data('x') + 1) + '"][data-y="' + $tile.data('y') + '"]'));
    }

    if ($tile.data('y') < this.maxHeight && directionsOfTile.indexOf('b') != -1) {
      neighbours.push($('[data-x="' + $tile.data('x') + '"][data-y="' + ($tile.data('y') + 1) + '"]'));
    }

    return neighbours;
  }.bind(this);

  this.getDirectionsOfTile = function($tile) {
    return $tile.attr('src').match(/([\w]+)\.[\w]+/i)[1];
  }

  this.initialize = function () {
    this.history = [];

    // cache the initialized array to prevent looping when it is not needed
    var temp = [];
    for (var x = 1; x < this.maxWidth; x++) {
      temp.push(0);
    }

    for (var y = 1; y < this.maxHeight; y++) {
      this.history.push(temp);
    }
  }.bind(this);

  this.initialize();
}