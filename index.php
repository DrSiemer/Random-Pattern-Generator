<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Random Pattern Generator</title>
    <meta name="Random Pattern Generator" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="/favicon.ico">
    <script>
      if (window!=top){top.location.href=location.href;}
      document.createElement('header');
      document.createElement('nav');
      document.createElement('section');
      document.createElement('article');
      document.createElement('aside');
      document.createElement('footer');
      document.createElement('time');
    </script>
  </head>
  <body>
    <div id="main">
      <div id="playfield">
        <?php
        function requireDir($arr, $dir)
        {
          foreach($arr as $key => $val) {
            if(strpos($val, $dir) === false) { unset($arr[$key]); }
          }
          return $arr;
        }

        function removeDir($arr, $dir)
        {
          foreach($arr as $key => $val) {
            if(strpos($val, $dir) !== false) { unset($arr[$key]); }
          }
          return $arr;
        }

        $v=1;
        $h=1;
        $maxHeight = 21;
        $maxWidth = 41;

        while ($v < $maxHeight)
        {
          while ($h < $maxWidth)
          {
            # Tile set with double entries to restrain dead ends and crossings
            $options = array('x', 't', 'r', 'b', 'l', 'trbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl');

            # Fix edges
            if ($h == 1) { $options = removeDir($options, 'l'); }
            if ($v == 1) { $options = removeDir($options, 't'); }
            if ($h == ($maxWidth-1)) { $options = removeDir($options, 'r'); }
            if ($v == ($maxHeight-1)) { $options = removeDir($options, 'b'); }

            # Check left
            if (preg_match('/r/', $left)) { $options = requireDir($options, 'l'); }
            else { $options = removeDir($options, 'l'); }

            # Check up
            if ($v != 1) {
              $above = $tiles[$v-1][$h];
              if (preg_match('/b/', $above)) { $options = requireDir($options, 't'); }
              else { $options = removeDir($options, 't'); }
            }

            # Place next tile
            $tile = $options[array_rand($options)];
            $left = $tile;
            $tiles[$v][$h] = $tile;
            if ($tile) { echo '<img class="tile" id="v'.$v.'h'.$h.'" src="img/'.$tile.'.jpg" width="30" height="30" alt="" />'; }
            $h++;
          }

          echo '<br/>';
          $h = 1;
          $v++;
        }
        ?>
        <img id="walker" src="img/walker.png" width="8" height="8" />
      </div>
    </div>
    <footer>
      <ul class="shortcuts">
        <li>Press <strong>C</strong> to <a href="#" class="hint" title="Clear the board" data-action="clear">clear the board</a></li>
        <li>Press <strong>R</strong> to toggle the <a href="#" class="hint" title="Replaces random tiles" data-action="randomize">Randomizer</a></li>
        <li>Press <strong>W</strong> to start the <a href="#" class="hint" title="Shows a blue ball exploring the maze" data-action="walker">Walker</a></li>
        <li>Press <strong>H</strong> to toggle <a href="#" class="hint active" title="The walker will avoid visited tiles" data-action="history">History</a></li>
        <li>Press <strong>D</strong> to toggle <a href="#" class="hint" title="Fade out visited tiles" data-action="debugmode">Debugmode</a></li>
      </ul>
    </footer>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
    <script src="js/main.js" type="text/javascript" /></script>
  </body>
</html>