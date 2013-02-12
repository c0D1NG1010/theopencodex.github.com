$(function() {
	$("<select />").appendTo("nav#main-nav");
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
	}).appendTo("nav select");
	$("nav#main-nav a").each(function() {
		var el = $(this);
		$("<option />", {
		"value"   : el.attr("href"),
		"text"    : el.text()
		}).appendTo("nav#main-nav select");
	});
	$("nav#main-nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
});