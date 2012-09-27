function RandomPatternGenerator($playfield, tileHistory, tileDebugger)
{
  this.$playfield = $playfield;
  this.maxWidth = this.$playfield.data('maximum-x');
  this.maxHeight = this.$playfield.data('maximum-y');

  this.options = [];
  this.debugMode = false;
  this.tileHistory = tileHistory;
  this.tileDebugger = tileDebugger;

  // initializes everything for the class
  this.initialize = function () {
    this.options = [
      'x', 't', 'r', 'b', 'l', 'trbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl',
      'rb', 'rl', 'bl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl',
      'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl'
    ];
  }.bind(this);

  // Place all empty tiles
  this.clear = function() {
    $('#playfield img.tile').attr('src', 'img/x.jpg');
    this.tileHistory.reset();
  }

  // replaces a tile from the grid and fixes the neighbours
  this.replaceTile = function($tile) {
    // get all possible valid tiles
    var possibilities = this.options.slice(0);
    possibilities = this.removeDirectionsForEdges($tile, possibilities);

    // get and place random tile
    var randomTile = possibilities[Math.floor(Math.random() * possibilities.length)];
    $tile.attr('src', '/img/' + randomTile + '.jpg');
    this.tileHistory.resetTile($tile);
    this.tileDebugger.resetTile($tile);

    // fix neighbours
    if ($tile.data('x') > 1) {
      this.fixTileConnectionsByPosition($tile.data('x') - 1, $tile.data('y'));
    }
    if ($tile.data('y') > 1) {
      this.fixTileConnectionsByPosition($tile.data('x'), $tile.data('y') - 1);
    }
    if ($tile.data('x') < (this.maxWidth - 1)) {
      this.fixTileConnectionsByPosition($tile.data('x') + 1, $tile.data('y'));
    }
    if ($tile.data('y') < (this.maxHeight - 1)) {
      this.fixTileConnectionsByPosition($tile.data('x'), $tile.data('y') + 1);
    }
  }.bind(this);

  // removes tiles from the possibilities to fix the edges
  this.removeDirectionsForEdges = function($tile, possibilities) {
    if ($tile.data('x') == 1) {
      possibilities = this.removeDirectionFromPossibilities(possibilities, 'l');
    }
    if ($tile.data('y') == 1) {
      possibilities = this.removeDirectionFromPossibilities(possibilities, 't');
    }
    if ($tile.data('x') == (this.maxWidth - 1)) {
      possibilities = this.removeDirectionFromPossibilities(possibilities, 'r');
    }
    if ($tile.data('y') == (this.maxHeight - 1)) {
       possibilities = this.removeDirectionFromPossibilities(possibilities, 'b');
    }

    return possibilities;
  }.bind(this);

  // Remove all options with a specific direction
  this.removeDirectionFromPossibilities = function(possibilities, direction) {
    var validPossibilities = [];
    for (var i = 0, numberOfDirections = possibilities.length; i < numberOfDirections; i++) {
      if (possibilities[i].indexOf(direction) == -1) {
        validPossibilities.push(possibilities[i]);
      }
    }
    return validPossibilities;
  }

  // Remove all options without a specific direction
  this.requireDirectionFromPossibilities = function(possibilities, direction) {
    var validPossibilities = [];
    for (var i = 0, numberOfDirections = possibilities.length; i < numberOfDirections; i++) {
      if(possibilities[i].indexOf(direction) != -1) {
        validPossibilities.push(possibilities[i]);
      }
    }
    return validPossibilities;
  }

  // fix tile connections
  this.fixTileConnectionsByPosition = function(x, y) {
    var $tile = $('[data-x="' + x + '"][data-y="' + y + '"]');

    var possibilities = this.options.slice(0);
    possibilities = this.removeDirectionsForEdges($tile, possibilities);

    // Check top
    if (y > 1) {
      var $neighbourTile = $('[data-x="' + x + '"][data-y="' + (y - 1) + '"]');
      if (this.getDirectionsOfTile($neighbourTile).indexOf('b') != -1) {
        possibilities = this.requireDirectionFromPossibilities(possibilities, 't');
      } else {
        possibilities = this.removeDirectionFromPossibilities(possibilities, 't');
      }
    }

    // Check right
    if (x < (this.maxWidth-1)) {
      var $neighbourTile = $('[data-x="' + (x + 1) + '"][data-y="' + y + '"]');
      if (this.getDirectionsOfTile($neighbourTile).indexOf('l') != -1) {
        possibilities = this.requireDirectionFromPossibilities(possibilities, 'r');
      } else {
        possibilities = this.removeDirectionFromPossibilities(possibilities, 'r');
      }
    }

    // Check bottom
    if (y < (this.maxHeight-1)) {
      var $neighbourTile = $('[data-x="' + x + '"][data-y="' + (y + 1) + '"]');
      if(this.getDirectionsOfTile($neighbourTile).indexOf('t') != -1) {
        possibilities = this.requireDirectionFromPossibilities(possibilities, 'b');
      } else {
        possibilities = this.removeDirectionFromPossibilities(possibilities, 'b');
      }
    }

    // Check left
    if (x > 1) {
      var $neighbourTile = $('[data-x="' + (x - 1) + '"][data-y="' + y + '"]');
      if(this.getDirectionsOfTile($neighbourTile).indexOf('r') != -1) {
        possibilities = this.requireDirectionFromPossibilities(possibilities, 'l');
      } else {
        possibilities = this.removeDirectionFromPossibilities(possibilities, 'l');
      }
    }

    // Replace tile
    var randomTile = possibilities[Math.floor(Math.random() * possibilities.length)];
    //console.log(possibilities);
    $tile.attr('src', 'img/' + randomTile + '.jpg');
    this.tileHistory.resetTile($tile);
    this.tileDebugger.resetTile($tile);
  }.bind(this);

  this.getDirectionsOfTile = function($tile) {
    return $tile.attr('src').match(/([\w]+)\.[\w]+/i)[1];
  }

  // gets a random tile from the grid
  this.getRandomTile = function() {
    var x = Math.floor(Math.random() * this.maxWidth + 1);
    var y = Math.floor(Math.random() * this.maxHeight + 1);

    return $('[data-x="' + x + '"][data-y="' + y + '"]');
  }.bind(this);

  this.initialize();
}