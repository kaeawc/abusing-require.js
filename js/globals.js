define([
	'config',
	'lib/window',
	'underscore'
], function(config, window) {
	window.appName = 'Abusing Require.js for Globals';
	window.staticSetting  = 'Static Setting';
	_.extend(window, config);
});