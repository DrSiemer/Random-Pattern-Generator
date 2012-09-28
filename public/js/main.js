var debugMode = false;

// Enable/disable debugMode
function toggleDebugMode()
{
  if (debugMode == false) { debugMode = true; $('#debug_state').css('text-decoration', 'underline'); }
  else { debugMode = false; $('#playfield img.tile').css({ opacity: 1 }); $('#debug_state').css('text-decoration', 'none'); }
}

(function($) {
  var $playfield = $('#playfield');
  var tileHistory = new TileHistory($playfield);
  var tileDebugger = new Debugger();
  var randomPatternGenerator = new RandomPatternGenerator($playfield, tileHistory, tileDebugger);

  var randomizer = new Randomizer(randomPatternGenerator, 1);

  var alphabet = new Alphabet();
  var typeWriter = new TypeWriter($playfield, alphabet);
  var walker = new Walker($playfield, 150, randomPatternGenerator, tileHistory, tileDebugger, typeWriter);

  $(document).on('clearGrid', function() {
    walker.stop();
  });

  $('#playfield img.tile').mouseover(function(){
    randomPatternGenerator.replaceTile($(this));
  });

  // Keyboard shortcuts
  $('body').keyup(function(e) {
    switch(e.keyCode) {
      case 67: // C
        randomPatternGenerator.clear();
        break;

      case 82: // R
        randomizer.toggle();
        break;

      case 87: // W
        walker.toggle();
        break;

      case 72: // H
        tileHistory.toggle();
        break;

      case 68: // D
        toggleDebugMode();
        break;
    }
  });

  // Buttons
  $('footer li a').click(function() {
    switch($(this).data('action')) {
      case 'clear':
        randomPatternGenerator.clear();
        break;

      case 'randomize':
        randomizer.toggle();
        break;

      case 'walker':
        walker.toggle();
        break;

      case 'history':
        tileHistory.toggle();
        break;

      case 'debug':
        toggleDebugMode();
        break;
    }

    return false;
  });
})(jQuery);