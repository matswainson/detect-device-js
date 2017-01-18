;(function(window, undefined){

	var userAgent = window ? window.navigator ? (window.navigator.userAgent ? window.navigator.userAgent : null) : null : null;

	if (!userAgent) {
		return;
	}

	if (userAgent.indexOf('Xbox') > -1 && userAgent.indexOf('Xbox One') > -1) {
		userAgent = 'Xbox';
	} else if (userAgent.indexOf('Xbox') > -1) {
		userAgent = 'Xbox 360';
	} else if (userAgent.indexOf('Playstation 4') > -1) {
		userAgent = 'PlayStation 4';
	} else if (userAgent.indexOf('Playstation 3') > -1) {
		userAgent = 'PlayStation 3';
	} else if (userAgent.indexOf('Nintendo WiiU') > -1 ||
			   userAgent.indexOf('NintendoBrowser') > -1) {
		userAgent = 'Nintendo';
	} else if (userAgent.indexOf('SMART-TV') > -1 ||
			   userAgent.indexOf('SmartTV') > -1 ||
			   userAgent.indexOf('Opera TV Store') > -1 ||
			   userAgent.indexOf('PhilipsTV') > -1) {
		userAgent = 'Smart TV';
	} else if (userAgent.indexOf('GoogleTV') > -1) {
		userAgent = 'Google TV';
	} else if (userAgent.indexOf('AppleTV') > -1) {
		userAgent = 'Apple TV';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('SM-G900P') > -1) {
		userAgent = 'Galaxy S5';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 5') > -1) {
		userAgent = 'Nexus 5';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 6') > -1) {
		userAgent = 'Nexus 6';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 7') > -1) {
		userAgent = 'Nexus 7';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 10') > -1) {
		userAgent = 'Nexus 10';
	} else if (userAgent.indexOf('Android') > -1) {
		userAgent = 'Android';
	} else if (userAgent.indexOf('BlackBerry') > -1) {
		userAgent = 'BlackBerry';
	} else if (userAgent.indexOf('KFAPWI') > -1) {
		userAgent = 'Kindle Fire';
	} else if (userAgent.indexOf('NOKIA') > -1 || userAgent.indexOf('NokiaBrowser') > -1) {
		userAgent = 'Nokia';
	} else if (userAgent.indexOf('Windows Phone') > -1) {
		userAgent = 'Windows Phone';
	} else if (userAgent.indexOf('MSIE') > -1) {
		userAgent = 'Internet Explorer';
	} else if (userAgent.indexOf('Opera Mini') > -1) {
		userAgent = 'Opera Mini';
	} else if (userAgent.indexOf('iPhone') > -1) {
		userAgent = 'iPhone';
	} else if (userAgent.indexOf('iPod') > -1) {
		userAgent = 'iPod';
	} else if (userAgent.indexOf('iPad') > -1) {
		userAgent = 'iPad';
	} else {
		userAgent = 'Unknown';
	}
	
	console.log('device:', userAgent);
	window.device = userAgent;

})(window);
