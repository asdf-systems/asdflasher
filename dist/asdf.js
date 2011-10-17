(function($) {
		function toggleLogo() {
			$("img").toggleClass("transparent");
		}
		setInterval(toggleLogo, 3000);
})(jQuery);
