define(['lib/window'], function() {
	var Opener = {
		get : function() { return window.opener },
		exists : (window.opener)
	};

	return Opener;
});
