String.prototype.shuffle=function(){var a=this.split(""),e=(a.length-1),d,b,c;for(d=e;d>0;d--){b=Math.floor(Math.random()*(d+1));c=a[d];a[d]=a[b];a[b]=c}return a.join("")};function setupVisited(){var a=[];for(var c=1;c<maxHeight;c++){a["v"+c]=[];for(var b=1;b<maxWidth;b++){a["v"+c]["h"+b]=0}}return a}var debugMode=false;var maxWidth=41;var maxHeight=21;var options=["x","t","r","b","l","trbl","tr","tb","tl","rb","rl","bl","trb","trl","tbl","rbl","tr","tb","tl","rb","rl","bl","tr","tb","tl","rb","rl","bl","trb","trl","tbl","rbl","tr","tb","tl","rb","rl","bl","trb","trl","tbl","rbl","tr","tb","tl","rb","rl","bl"];var randomizer;var randomizer_active=false;var randomizer_speed=1;var walker;var walker_active=false;var walker_speed=150;var wloc=[];var camefrom;var history=true;var visited=setupVisited();function requireDir(a,b){var d=new Array();for(var c=0;c<a.length;c++){if(a[c].indexOf(b)!=-1){d.push(a[c])}}return d}function removeDir(a,b){var d=new Array();for(var c=0;c<a.length;c++){if(a[c].indexOf(b)==-1){d.push(a[c])}}return d}function getSource(b){var a=$(b).attr("src").match(/[-_\w]+[.][\w]+$/i)[0];var a=a.substring(0,a.length-4);return a}function fixEdges(a,c,b){if(c==1){b=removeDir(b,"l")}if(a==1){b=removeDir(b,"t")}if(c==(maxWidth-1)){b=removeDir(b,"r")}if(a==(maxHeight-1)){b=removeDir(b,"b")}return b}function fixBlock(b,d){var c=options.slice(0);c=fixEdges(b,d,c);if(b>1){var e=getSource("#v"+(b-1)+"h"+d);if(e.indexOf("b")!=-1){c=requireDir(c,"t")}else{c=removeDir(c,"t")}}if(d<(maxWidth-1)){var e=getSource("#v"+b+"h"+(d+1));if(e.indexOf("l")!=-1){c=requireDir(c,"r")}else{c=removeDir(c,"r")}}if(b<(maxHeight-1)){var e=getSource("#v"+(b+1)+"h"+d);if(e.indexOf("t")!=-1){c=requireDir(c,"b")}else{c=removeDir(c,"b")}}if(d>1){var e=getSource("#v"+b+"h"+(d-1));if(e.indexOf("r")!=-1){c=requireDir(c,"l")}else{c=removeDir(c,"l")}}var f="#v"+b+"h"+d;var a=Math.floor(Math.random()*c.length);$(f).attr("src","img/"+c[a]+".jpg");if(history){visited["v"+b]["h"+d]=0}if(debugMode){$(f).css({opacity:1})}}function getRandomTile(){var a=Math.floor(Math.random()*(maxHeight-1))+1;var b=Math.floor(Math.random()*(maxWidth-1))+1;var c="#v"+a+"h"+b;return{v:a,h:b,id:c}}function replaceTile(e){if(!e){e=getRandomTile()}if(e.id!=wloc.id){var a=e.v;var c=e.h;var b=options.slice(0);b=fixEdges(a,c,b);var d=b[Math.floor(Math.random()*b.length)];$(e.id).attr("src","img/"+d+".jpg");if(history){visited["v"+e.v]["h"+e.h]=0}if(debugMode){$(e.id).css({opacity:1})}if(a>1){fixBlock(a-1,c)}if(c<(maxWidth-1)){fixBlock(a,c+1)}if(a<(maxHeight-1)){fixBlock(a+1,c)}if(c>1){fixBlock(a,c-1)}}}function setWalker(){var c=$(wloc.id).attr("src");if(c!="img/x.jpg"){$("#walker").animate({left:(wloc.h*30)-19,top:(wloc.v*30)+7},walker_speed,function(){if(walker_active){walk()}});if(history){visited["v"+wloc.v]["h"+wloc.h]++}if(debugMode){var a=$(wloc.id).css("opacity");if(a>0.14){var b=Math.round((a-0.05)*100)/100;if(a==1){b=0.5}$(wloc.id).css({opacity:b})}}}else{startWalker()}}function startWalker(){wloc=getRandomTile();while($(wloc.id).attr("src")=="img/x.jpg"){wloc=getRandomTile()}setWalker();$("#walker").show(250)}function removeVisited(c,a){if(a=="t"){v=(wloc.v-1);h=wloc.h}if(a=="r"){v=wloc.v;h=(wloc.h+1)}if(a=="b"){v=(wloc.v+1);h=wloc.h}if(a=="l"){v=wloc.v;h=(wloc.h-1)}if(c.length>1){if(c.indexOf(a)!=-1){if(visited["v"+v]["h"+h]>0){var b=new RegExp(a,"g");c=c.replace(b,"")}}}return c}function walk(){var e=$(wloc.id).attr("src");var d=e.substring(4,e.length-4);if(d.length>1){var c=new RegExp(camefrom,"g");d=d.replace(c,"")}if(history&&d.length>1){var b;var f=[];if(d.indexOf("t")!=-1&&wloc.v>1){f.t=visited["v"+(wloc.v-1)]["h"+wloc.h]}else{f.t=99999}b=f.t;if(d.indexOf("r")!=-1&&wloc.h<(maxWidth-1)){f.r=visited["v"+wloc.v]["h"+(wloc.h+1)]}else{f.r=99999}if(f.r<b){b=f.r}if(d.indexOf("b")!=-1&&wloc.v<(maxHeight-1)){f.b=visited["v"+(wloc.v+1)]["h"+wloc.h]}else{f.b=99999}if(f.b<b){b=f.b}if(d.indexOf("l")!=-1&&wloc.h>1){f.l=visited["v"+wloc.v]["h"+(wloc.h-1)]}else{f.l=99999}if(f.l<b){b=f.l}d="";if(f.t==b){d="t"}if(f.r==b){d=d+"r"}if(f.b==b){d=d+"b"}if(f.l==b){d=d+"l"}}var a=d[(Math.floor(Math.random()*(d.length)))];if(a=="t"){wloc.v--;camefrom="b"}if(a=="r"){wloc.h++;camefrom="l"}if(a=="b"){wloc.v++;camefrom="t"}if(a=="l"){wloc.h--;camefrom="r"}wloc.id="#v"+wloc.v+"h"+wloc.h;setWalker()}function clearBoard(){if(walker_active==true){disableWalker()}$("#playfield img.tile").attr("src","img/x.jpg");visited=setupVisited()}function toggleRandomizer(){if(randomizer_active==true){clearInterval(randomizer);randomizer_active=false;$("#randomizer_state").css("text-decoration","none")}else{randomizer=setInterval(replaceTile,randomizer_speed);randomizer_active=true;$("#randomizer_state").css("text-decoration","underline")}}function enableWalker(){startWalker();walker_active=true;$("#walker_state").css("text-decoration","underline")}function disableWalker(){$("#walker").hide(250);walker_active=false;$("#walker_state").css("text-decoration","none")}function toggleWalker(){var a=false;$("#playfield img.tile").each(function(){if($(this).attr("src")!="img/x.jpg"){a=true}});if(a==true){if(walker_active==true){disableWalker()}else{enableWalker()}}else{alert("No tiles to walk... :(")}}function toggleHistory(){if(history==false){history=true;$("#history_state").css("text-decoration","underline")}else{history=false;$("#history_state").css("text-decoration","none")}}function toggleDebugMode(){if(debugMode==false){debugMode=true;$("#debug_state").css("text-decoration","underline")}else{debugMode=false;$("#playfield img.tile").css({opacity:1});$("#debug_state").css("text-decoration","none")}}(function(a){a("#playfield img.tile").mouseover(function(){var e="#"+a(this).attr("id");var d=e.match(/\d+/g);var b=Number(d[0]);var c=Number(d[1]);replaceTile({v:b,h:c,id:e})});a("body").keyup(function(b){switch(b.keyCode){case 67:clearBoard();break;case 82:toggleRandomizer();break;case 87:toggleWalker();break;case 72:toggleHistory();break;case 68:toggleDebugMode();break}});a("footer li a").click(function(){switch(a(this).data("action")){case"clear":clearBoard();break;case"randomize":toggleRandomizer();break;case"walker":toggleWalker();break;case"history":toggleHistory();break;case"debug":toggleDebugMode();break}return false})})(jQuery);