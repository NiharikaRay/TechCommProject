	var sec = 0;
	var min = 0;
	var hour = 0;
	var theResult = "";

	function stopwatch(text) {
   		sec++;
  		if (sec == 60) {
   			sec = 0;
   			min = min + 1; }
  		else {
   			min = min; }
  		if (min == 60) {
   			min = 0; 
   			hour += 1; }

		if (sec<=9) { sec = "0" + sec; }
   			document.clock.stwa.value = ((hour<=9) ? "0"+hour : hour) + " : " + ((min<=9) ? "0" + min : min) + " : " + sec;

  		if (text == "Start") { document.clock.theButton.value = "Stop "; }
  		if (text == "Stop ") { document.clock.theButton.value = "Start"; sec = sec-1;}

 		if (document.clock.theButton.value == "Start") {
   			return true; }
		SD=window.setTimeout("stopwatch();", 1000);

 		theResult = document.clock.stwa.value;
	}

	function resetIt() {
  		sec = 0;
  		min = 0;
  		hour = 0;
  		if (document.clock.theButton.value == "Stop ") {
  			document.clock.theButton.value = "Start"; }
  		window.clearTimeout(SD);
 	}

	function saveIt() {
 		if (document.clock.saver.value == "Save Comment 1") {
   			document.clock.saver.value = "Save Comment 2";
 			document.getElementById('comment01').innerHTML = "<b>Comment 1 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
		}
		
		if (document.clock.saver.value == "Save Comment 2") {
   			document.clock.saver.value = "Save Comment 3";
 			document.getElementById('comment02').innerHTML = "<b>Comment 2 =</b> " + document.clock.stwa.value + 
 																	"     " +document.clock.comment.value + "<br />";
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 3") {
   			document.clock.saver.value = "Save Comment 4";
 			document.getElementById('comment03').innerHTML = "<b>Comment 3 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 4") {
   			document.clock.saver.value = "Save Comment 5";
 			document.getElementById('comment04').innerHTML = "<b>Comment 4 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 	
 		if (document.clock.saver.value == "Save Comment 5") {
   			document.clock.saver.value = "Save Comment 6";
 			document.getElementById('comment05').innerHTML = "<b>Comment 5 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 6") {
   			document.clock.saver.value = "Save Comment 7";
 			document.getElementById('comment06').innerHTML = "<b>Comment 6 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 7") {
   			document.clock.saver.value = "Save Comment 8";
 			document.getElementById('comment07').innerHTML = "<b>Comment 7 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 8") {
   			document.clock.saver.value = "Save Comment 9";
 			document.getElementById('comment08').innerHTML = "<b>Comment 8 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 9") {
   			document.clock.saver.value = "Save Comment 10";
 			document.getElementById('comment09').innerHTML = "<b>Comment 9 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />" ;
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 10") {
   			document.clock.saver.value = "Save Comment 11";
 			document.getElementById('comment10').innerHTML = "<b>Comment 10 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 		
 		if (document.clock.saver.value == "Save Comment 11") {
   			document.clock.saver.value = "Reset Times!";
 			document.getElementById('comment11').innerHTML = "<b>Comment 11 =</b> " + document.clock.stwa.value + 
 																	"     " + document.clock.comment.value + "<br />";
 			return;
 		}
 		if (document.clock.saver.value == "Reset Times!") {
  			document.getElementById('comment01').innerHTML = "";
  			document.getElementById('comment02').innerHTML = "";
  			document.getElementById('comment03').innerHTML = "";
  			document.getElementById('comment04').innerHTML = "";
  			document.getElementById('comment05').innerHTML = "";
  			document.getElementById('comment06').innerHTML = "";
  			document.getElementById('comment07').innerHTML = "";
  			document.getElementById('comment08').innerHTML = "";
  			document.getElementById('comment09').innerHTML = "";
  			document.getElementById('comment10').innerHTML = "";
  			document.getElementById('comment11').innerHTML = "";
  			document.clock.saver.value = "Save Comment 1";
 		}
	}
