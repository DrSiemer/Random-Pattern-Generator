var randomizer;
var randomizer_active = false;
var randomizer_speed = 1;
var maxWidth = 41;
var maxHeight = 21;
// var options = ['x', 't', 'r', 'b', 'l', 'trbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl'];
var options = ['x', 't', 'r', 'b', 'l', 'trbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl'];


function requireDir(arr, dir)
{
  var f = new Array();
  for (var i=0; i<arr.length; i++)
  {
    if(arr[i].indexOf(dir) != -1) { f.push(arr[i]); }
  }
  return f;
}


function removeDir(arr, dir)
{
  var f = new Array();
  for (var i=0; i<arr.length; i++)
  {
    if(arr[i].indexOf(dir) == -1) { f.push(arr[i]); }
  }
  return f;
}


function getSource(id)
{
  var src = $(id).attr('src').match(/[-_\w]+[.][\w]+$/i)[0];
  var src = src.substring(0, src.length - 4);
  return src;
}


function fixEdges(v, h, dir)
{
  if (h == 1) { dir = removeDir(dir, 'l'); }
  if (v == 1) { dir = removeDir(dir, 't'); }
  if (h == (maxWidth-1)) { dir = removeDir(dir, 'r'); }
  if (v == (maxHeight-1)) { dir = removeDir(dir, 'b'); }
  return dir;
}


function fixBlock(v, h)
{
  var dir = options.slice(0);
  dir = fixEdges(v, h, dir);

  // Check top
  if (v > 1) {
    var src = getSource('#v'+(v-1)+'h'+h);
    if(src.indexOf('b') != -1) { dir = requireDir(dir, 't'); }
    else { dir = removeDir(dir, 't'); }
  }
  
  // Check right
  if (h < (maxWidth-1)) {
    var src = getSource('#v'+v+'h'+(h+1));
    if(src.indexOf('l') != -1) { dir = requireDir(dir, 'r'); }
    else { dir = removeDir(dir, 'r'); }
  }
  
  // Check bottom
  if (v < (maxHeight-1)) {
    var src = getSource('#v'+(v+1)+'h'+h);
    if(src.indexOf('t') != -1) { dir = requireDir(dir, 'b'); }
    else { dir = removeDir(dir, 'b'); }
  }
  
  // Check left
  if (h > 1) {
    var src = getSource('#v'+v+'h'+(h-1));
    if(src.indexOf('r') != -1) { dir = requireDir(dir, 'l'); }
    else { dir = removeDir(dir, 'l'); }
  }
  
  // Replace part
  var temp = Math.floor(Math.random()*dir.length);
  $('#v'+v+'h'+h).attr('src', 'img/'+dir[temp]+'.jpg');
}


function replacePart(part)
{
  // Get position + location
  var pos = part.match(/\d+/g);
  var v = Number(pos[0]);
  var h = Number(pos[1]);
  var trbl = new Array(3);
    trbl[0] = v-1;
    trbl[1] = h+1;
    trbl[2] = v+1;
    trbl[3] = h-1;
  
  // Set new random part
  var dir = options.slice(0);
  dir = fixEdges(v, h, dir);
  var randompart = dir[Math.floor(Math.random()*dir.length)];
  if (!randompart) { console.log('De fuque...'); }
  $('#'+part).attr('src', 'img/'+randompart+'.jpg');
  
  // Fix neighbours
  if (trbl[0] > 0) { fixBlock(v-1, h); }
  if (trbl[1] < maxWidth) { fixBlock(v, h+1); }
  if (trbl[2] < maxHeight) { fixBlock(v+1, h); }
  if (trbl[3] > 0) { fixBlock(v, h-1); }
}


function replaceRandomPart()
{
  replacePart('v'+((Math.floor(Math.random()*(maxHeight-1))+1))+'h'+((Math.floor(Math.random()*(maxWidth-1)))+1));
}


// Document ready
$(document).ready(function() 
{
  $('#main img').mouseover(function() {
    replacePart($(this).attr('id'));
  });
  
  $('body').keyup(function(e){
    if(e.keyCode == 82){
      if (randomizer_active == true) { clearInterval(randomizer); randomizer_active = false; }
      else { randomizer = setInterval(replaceRandomPart, randomizer_speed); randomizer_active = true; }
    }
  });
  
});

