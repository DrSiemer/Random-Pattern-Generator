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
    <style type="text/css">
      #main {
        position: relative;
        margin: auto;
        width: 1200px;
        padding-top: 25px;
      }
      #shortcuts {
        text-align: center;
      }
      #walker {
        position: absolute;
        display: none;
      }
      .hint {
        cursor: pointer;
      }
    </style>
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
        <div id="shortcuts">
          <p>Press <b>C</b> to <span class="hint" id="clear">clear the board</span> |
             Press <b>R</b> to toggle the <span class="hint" id="randomizer_state" title="Replaces random tiles">Randomizer</span> |
             Press <b>W</b> to start the <span class="hint" id="walker_state" title="Shows a blue ball exploring the maze">Walker</span> |
             Press <b>H</b> to toggle <span class="hint" id="history_state" title="The walker will avoid visited tiles" style="text-decoration: underline">History</span> |
             Press <b>D</b> to toggle <span class="hint" id="debug_state" title="Fade out visited tiles">Debugmode</span>
          </p>
        </div>
      </div>
    </div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
    <script src="js/main.js" type="text/javascript" /></script>
  </body>
</html>