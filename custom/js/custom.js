javascript.load.push('custom_elfsight');
javascript.prototype.custom_elfsight = function() {
	var script_loaded = false;
	function load_script() {
		script_loaded = true;
		$.getScript('https://apps.elfsight.com/p/platform.js');
	}
	$(document).one('scroll', function() {
		if (script_loaded == false) {
			load_script();
		}
	});
	$(document).one('mousemove', function() {
		if (script_loaded == false) {
			load_script();
		}
	});
	$('section.content-section').one('click', function() {
		if (script_loaded == false) {
			load_script();
		}
	});
}