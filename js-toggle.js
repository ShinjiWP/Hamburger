$(function () {
	if (window.matchMedia("(max-width:599.9px)").matches) {
		$(".p-header__box").on("click", function () {
			$(".c-shadow").fadeIn(500);
			// $("body").css("position", "fixed");
			$(".c-grid--sidebar").css({ transform: "translate(-86%, 0)", transition: "1s" });
		});
	} else {
		$(".p-header__box").on("click", function () {
			$(".c-shadow").fadeIn(500);
			// $("body").css("position", "fixed");
			$(".c-grid--sidebar").css({ transform: "translate(-43%, 0)", transition: "1s" });
		});
	}
	// $(".p-header__box").on("click", function () {
	// 	$(".c-shadow").fadeIn(500);
	// 	// $("body").css("position", "fixed");
	// 	$(".c-grid--sidebar").css({ transform: "translate(-86%, 0)", transition: "1s" });
	// });
	$(".p-sidebar__x").on("click", function () {
		$(".c-shadow").fadeOut(500);
		$(".c-grid--sidebar").css({ transform: "translate(0%, 0)", transition: "1s" });
	});
});
