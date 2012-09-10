<!doctype html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Random Pattern Generator</title>
  <meta name="Random Pattern Generator" content="">

  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="css/style.css">
  
  <style type="text/css">
    #main {
      margin: auto;
      width: 1200px;
      padding-top: 25px;
    }
  </style>

</head>
<body>

  <div id="main">
  
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
          # A few dead ends and crossings
          $options = array('x', 't', 'r', 'b', 'l', 'trbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl');
          # Start empty
          // $options = array('x');
          
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
            $above = $parts[$v-1][$h];
            if (preg_match('/b/', $above)) { $options = requireDir($options, 't'); }
            else { $options = removeDir($options, 't'); }
          }
          
          # Place next part
          $part = $options[array_rand($options)];
          $left = $part;
          $parts[$v][$h] = $part;
          if ($part) { echo '<img id="v'.$v.'h'.$h.'" src="img/'.$part.'.jpg" width="30" height="30" alt="" />'; }
	        $h++;
	      }
        
        echo '<br/>';
        $h = 1;
        $v++;
      }
      
    ?>
    
    <p>Press 'R' to toggle the Randomizer</p>

  </div>
  
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
  <script src="js/main.js" type="text/javascript" /></script>

</body>
</html>