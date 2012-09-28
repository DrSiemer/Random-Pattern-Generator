function Debugger() {
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
  };
}