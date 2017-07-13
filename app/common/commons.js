/*
 * Common utility functions.
 */

export default class Commons {

	static reqpar(name) {
	    let url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	static api() {
		//return '/api/admin/do';	// DEV
		return '/admin/do';	// PROD
	}

	static host() {
		//return 'http://localhost:8080';		// DEV
		return 'https://www.e-act.nl';	// PROD
	}

}