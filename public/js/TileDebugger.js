function TileDebugger() {
  this.active = false;
  this.$toggler = $('[data-action="debug"]');

  this.toggle = function() {
    if (this.active) {
      this.resetAllTiles();
      this.$toggler.removeClass('active');
    } else {
      this.$toggler.addClass('active');
    }

    this.active = !this.active;
  }.bind(this);

  this.resetAllTiles = function($playfield) {
    $('img.tile', $playfield).css({
      opacity: 1
    });
  };

  this.resetTile = function($tile) {
    $tile.css({
      opacity: 1
    });
  };

  this.updateTile = function($tile) {
    if (!this.active) return;

    var currentOpacity = $tile.css('opacity');

    if (currentOpacity > 0.14) {
      var newOpacity = Math.round((currentOpacity - 0.05) * 100) / 100;

      if (currentOpacity == 1) {
        newOpacity = 0.5;
      }

      $tile.css({
        opacity: newOpacity
      });
    }
  }.bind(this);
}