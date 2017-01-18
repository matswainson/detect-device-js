;(function(window, undefined){

	var userAgent = window ? window.navigator ? (window.navigator.userAgent ? window.navigator.userAgent : null) : null : null;

	if (!userAgent) {
		return;
	}

	if (userAgent.indexOf('Xbox') > -1) {
		userAgent = 'Xbox';
	} else if (userAgent.indexOf('Playstation') > -1) {
		userAgent = 'PlayStation';
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
	} else if (userAgent.indexOf('MSIE') > -1) {
		userAgent = 'Internet Explorer';
	} else if (userAgent.indexOf('NOKIA') > -1) {
		userAgent = 'Nokia';
	} else if (userAgent.indexOf('Opera Mini') > -1) {
		userAgent = 'Opera Mini';
	} else if (/iphone|ipod|ipad/.test(userAgent.toLowerCase())) {
		userAgent = 'iOS';
	} else {
		userAgent = 'Unknown';
	}
	
	console.log('device:', userAgent);
	window.device = userAgent;

})(window);
