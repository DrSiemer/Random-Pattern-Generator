var debugMode = false;
var randomizer;
var randomizer_active = false;
var randomizer_speed = 1;
var walker;
var walker_active = false;
var walker_speed = 150;
var wloc = [];
var camefrom;
var history = true;

// Update walker position
function setWalker()
{
  /* if (debugMode) { console.log('Walker set to: '+wloc.id); } */
  var src = $(wloc.id).attr('src');
  if (src != 'img/x.jpg')
  {
    $('#walker').animate({ left: (wloc.h*30)-19, top: (wloc.v*30)+7 }, walker_speed, function() { if (walker_active) { walk(); } });
    if (history) { visited['v'+wloc.v]['h'+wloc.h]++; }
    if (debugMode) {
      var opa = $(wloc.id).css("opacity");
      if (opa > 0.14) {
        var newAlpha = Math.round((opa-0.05)*100)/100;
        if (opa == 1) { newAlpha = 0.5; }
        $(wloc.id).css({ opacity: newAlpha });
      }
    }
  }
  else { startWalker(); }
}

// Start the walker
function startWalker()
{
  wloc = getRandomTile();
  while ($(wloc.id).attr('src') == 'img/x.jpg') { wloc = getRandomTile(); }
  setWalker();
  $('#walker').show(250);
}

// Remove previously visited directions
function removeVisited(dirs, dir)
{
  if (dir == 't') { v = (wloc.v-1); h = wloc.h; }
  if (dir == 'r') { v = wloc.v; h = (wloc.h+1); }
  if (dir == 'b') { v = (wloc.v+1); h = wloc.h; }
  if (dir == 'l') { v = wloc.v; h = (wloc.h-1); }

  if (dirs.length > 1) {
    if (dirs.indexOf(dir) != -1) {
      if (visited['v'+v]['h'+h] > 0) {
        var re = new RegExp(dir, 'g'); dirs = dirs.replace(re, '');
      }
    }
  }
  return dirs;
}

// Walker logic
function walk()
{
  // Get possible directions
  var src = $(wloc.id).attr('src');
  var dirs = src.substring(4, src.length-4);

  // Avoid going back
  if (dirs.length > 1) {
    var re = new RegExp(camefrom, 'g');
    dirs = dirs.replace(re, '');
  }

  // Avoid previously visited positions
  if (history && dirs.length > 1)
  {
    var least;
    var vSum = [];
    if (dirs.indexOf('t') != -1 && wloc.v > 1) { vSum['t'] = visited['v'+(wloc.v-1)]['h'+wloc.h]; } else { vSum['t'] = 99999; }
    least = vSum['t'];
    if (dirs.indexOf('r') != -1 && wloc.h < (maxWidth-1)) { vSum['r'] = visited['v'+wloc.v]['h'+(wloc.h+1)]; } else { vSum['r'] = 99999; }
    if (vSum['r'] < least) { least = vSum['r']; }
    if (dirs.indexOf('b') != -1 && wloc.v < (maxHeight-1)) { vSum['b'] = visited['v'+(wloc.v+1)]['h'+wloc.h]; } else { vSum['b'] = 99999; }
    if (vSum['b'] < least) { least = vSum['b']; }
    if (dirs.indexOf('l') != -1 && wloc.h > 1) { vSum['l'] = visited['v'+wloc.v]['h'+(wloc.h-1)]; } else { vSum['l'] = 99999; }
    if (vSum['l'] < least) { least = vSum['l']; }

    /* if (debugMode) { console.log('T: '+vSum['t']+', R: '+vSum['r']+', B: '+vSum['b']+', L: '+vSum['l']+' / least: '+ least ); } */

    dirs = '';
    if (vSum['t'] == least) { dirs = 't'; }
    if (vSum['r'] == least) { dirs = dirs + 'r'; }
    if (vSum['b'] == least) { dirs = dirs + 'b'; }
    if (vSum['l'] == least) { dirs = dirs + 'l'; }
  }

  // Select random direction from available directions
  var dir = dirs[(Math.floor(Math.random()*(dirs.length)))];

  // Move walker
  if (dir == 't') { wloc.v--; camefrom = 'b'; }
  if (dir == 'r') { wloc.h++; camefrom = 'l'; }
  if (dir == 'b') { wloc.v++; camefrom = 't'; }
  if (dir == 'l') { wloc.h--; camefrom = 'r'; }
  wloc.id = '#v'+wloc.v+'h'+wloc.h;
  setWalker();
}


// Place all empty tiles
function clearBoard()
{
  if (walker_active == true) { disableWalker(); }
  $('#playfield img.tile').attr('src', 'img/x.jpg');
  visited = setupVisited();
}

// Enable/disable randomizer
function toggleRandomizer()
{
  if (randomizer_active == true) { clearInterval(randomizer); randomizer_active = false; $('#randomizer_state').css('text-decoration', 'none'); }
  else { randomizer = setInterval(replaceTile, randomizer_speed); randomizer_active = true; $('#randomizer_state').css('text-decoration', 'underline'); }
}

// Enable/disable walker
function enableWalker() { startWalker(); walker_active = true; $('#walker_state').css('text-decoration', 'underline'); }
function disableWalker() { $('#walker').hide(250); walker_active = false; $('#walker_state').css('text-decoration', 'none'); }
function toggleWalker()
{
  var tileFound = false;
  $('#playfield img.tile').each(function () {
    if ($(this).attr('src') != 'img/x.jpg') { tileFound = true; }
  });
  if (tileFound == true) {
    if (walker_active == true) { disableWalker(); } else { enableWalker(); }
  }
  else { alert('No tiles to walk... :('); }
}

// Enable/disable walker history
function toggleHistory()
{
  if (history == false) { history = true; $('#history_state').css('text-decoration', 'underline'); }
  else { history = false; $('#history_state').css('text-decoration', 'none'); }
}

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

  // Mouse interaction
  $('#playfield img.tile').mouseover(function(){
    randomPatternGenerator.replaceTile($(this));
  });

  // Keyboard shortcuts
  $('body').keyup(function(e) {
    switch(e.keyCode) {
      case 67: // C
        clearBoard();
        break;

      case 82: // R
        toggleRandomizer();
        break;

      case 87: // W
        toggleWalker();
        break;

      case 72: // H
        toggleHistory();
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
        clearBoard();
        break;

      case 'randomize':
        toggleRandomizer();
        break;

      case 'walker':
        toggleWalker();
        break;

      case 'history':
        toggleHistory();
        break;

      case 'debug':
        toggleDebugMode();
        break;
    }

    return false;
  });
})(jQuery);