;(function(window, undefined){

	var userAgent = window.navigator ? (window.navigator.userAgent ? window.navigator.userAgent : null) : null;
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
	} else {
		userAgent = 'Unknown';
	}
	
	console.log('device:', userAgent);
	window.device = userAgent;

})(window);
