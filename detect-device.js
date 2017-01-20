;(function(window, undefined){

	var device = {},
		userAgent = window ? window.navigator ? (window.navigator.userAgent ? window.navigator.userAgent : null) : null : null;

	if (!userAgent) {
		return;
	}

	if (userAgent.indexOf('Xbox') > -1 && userAgent.indexOf('Xbox One') > -1) {
		device.type = 'console';
		device.userAgent = 'Xbox One';
	} else if (userAgent.indexOf('Xbox') > -1) {
		device.type = 'console';
		device.userAgent = 'Xbox 360';
	} else if (userAgent.indexOf('Playstation 4') > -1) {
		device.type = 'console';
		device.userAgent = 'PlayStation 4';
	} else if (userAgent.indexOf('Playstation 3') > -1) {
		device.type = 'console';
		device.userAgent = 'PlayStation 3';
	} else if (userAgent.indexOf('Nintendo WiiU') > -1 ||
			   userAgent.indexOf('NintendoBrowser') > -1) {
		device.type = 'console';
		device.userAgent = 'Nintendo';
	} else if (userAgent.indexOf('SMART-TV') > -1 ||
			   userAgent.indexOf('SmartTV') > -1 ||
			   userAgent.indexOf('Opera TV Store') > -1 ||
			   userAgent.indexOf('Panasonic') > -1 ||
			   userAgent.indexOf('Philips') > -1) {
		device.type = 'tv';
		device.userAgent = 'Smart TV';
	} else if (userAgent.indexOf('GoogleTV') > -1) {
		device.type = 'tv';
		device.userAgent = 'Google TV';
	} else if (userAgent.indexOf('AppleTV') > -1) {
		device.type = 'tv';
		device.userAgent = 'Apple TV';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('SM-G900P') > -1) {
		device.type = 'smartphone';
		device.userAgent = 'Galaxy S5';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 5') > -1) {
		device.type = 'smartphone';
		device.userAgent = 'Nexus 5';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 6') > -1) {
		device.type = 'smartphone';
		device.userAgent = 'Nexus 6';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 7') > -1) {
		device.type = 'tablet';
		device.userAgent = 'Nexus 7';
	} else if (userAgent.indexOf('Android') > -1 && userAgent.indexOf('Nexus 10') > -1) {
		device.type = 'tablet';
		device.userAgent = 'Nexus 10';
	} else if (userAgent.indexOf('Android') > -1) {
		device.userAgent = 'Android';
	} else if (userAgent.indexOf('BlackBerry') > -1) {
		device.userAgent = 'BlackBerry';
	} else if (userAgent.indexOf('KFAPWI') > -1 || userAgent.indexOf('Kindle Fire') > -1) {
		device.type = 'tablet';
		device.userAgent = 'Kindle Fire';
	} else if (userAgent.indexOf('NOKIA') > -1 || userAgent.indexOf('NokiaBrowser') > -1) {
		device.userAgent = 'Nokia';
	} else if (userAgent.indexOf('Windows Phone') > -1) {
		device.type = 'smartphone';
		device.userAgent = 'Windows Phone';
	} else if (userAgent.indexOf('MSIE') > -1) {
		device.userAgent = 'Internet Explorer';
	} else if (userAgent.indexOf('Opera Mini') > -1) {
		device.userAgent = 'Opera Mini';
	} else if (userAgent.indexOf('iPhone') > -1) {
		device.type = 'smartphone';
		device.userAgent = 'iPhone';
	} else if (userAgent.indexOf('iPod') > -1) {
		device.type = 'portable media player';
		device.userAgent = 'iPod';
	} else if (userAgent.indexOf('iPad') > -1) {
		device.type = 'tablet';
		device.userAgent = 'iPad';
	} else {
		device.userAgent = 'Unknown';
	}
	
	console.log('device:', device);
	window.device = device;

})(window);
