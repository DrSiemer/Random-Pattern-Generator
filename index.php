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
      width: 900px;
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
      $num_v = 21;
      $num_h = 31;
      
      while ($v < $num_v)
      {
      	while ($h < $num_h)
	      {
          # All options in equal amount
        	// $options = array('t', 'r', 'b', 'l', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'trbl');
          
          # No dead ends
          // $options = array('tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'trbl');
          
          # A few dead ends and crossings
          $options = array('t', 'r', 'b', 'l', 'trbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl', 'trb', 'trl', 'tbl', 'rbl', 'tr', 'tb', 'tl', 'rb', 'rl', 'bl');
          
          # Fix edges
          if ($h == 1) { $options = removeDir($options, 'l'); }
          if ($v == 1) { $options = removeDir($options, 't'); }
          if ($h == ($num_h-1)) { $options = removeDir($options, 'r'); }
          if ($v == ($num_v-1)) { $options = removeDir($options, 'b'); }
          
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
          $randompartkey = array_rand($options);
          $part = $options[$randompartkey];
          $left = $part;
          $parts[$v][$h] = $part;
          if ($part) { echo '<img src="img/'.$part.'.jpg" width="30" height="30" alt="" />'; }
	        $h++;
	      }
        
        echo '<br/>';
        $h = 1;
        $v++;
      }
      
    ?>

  </div>

</body>
</html>