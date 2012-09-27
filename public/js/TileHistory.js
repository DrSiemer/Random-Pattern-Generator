function TileHistory($playfield)
{
  this.$playfield = $playfield;
  this.maxWidth = this.$playfield.data('maximum-x');
  this.maxHeight = this.$playfield.data('maximum-y');

  this.history = [];

  this.resetTile = function($tile) {
    // todo: check edge tiles
    if (typeof $tile.data('x') === 'undefined' || typeof $tile.data('y') === 'undefined') return;

    this.history[($tile.data('y') - 1)][($tile.data('x') - 1)] = 0;
  }.bind(this);

  this.reset = function() {
    this.initialize();
  }.bind(this);

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