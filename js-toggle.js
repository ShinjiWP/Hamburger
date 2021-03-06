// $(function () {
// 	if (window.matchMedia("(max-width:599.9px)").matches) {
// 		$(".p-header__box").on("click", function () {
// 			$(".c-shadow").fadeIn(600);
// 			// $("body").css("position", "fixed");
// 			$(".c-grid--sidebar").css({ transform: "translate(-86%, 0)", transition: "1s" });
// 		});
// 	} else if (window.matchMedia("(mix-width:600px)").matches) {
// 		$(".p-header__box").on("click", function () {
// 			$(".c-shadow").fadeIn(600);
// 			// $("body").css("position", "fixed");
// 			$(".c-grid--sidebar").css({ transform: "translate(-43%, 0)", transition: "1s" });
// 		});
// 	}
// 	// $(".p-header__box").on("click", function () {
// 	// 	$(".c-shadow").fadeIn(500);
// 	// 	// $("body").css("position", "fixed");
// 	// 	$(".c-grid--sidebar").css({ transform: "translate(-86%, 0)", transition: "1s" });
// 	// });
// 	$(".p-sidebar__x").on("click", function () {
// 		$(".c-shadow").fadeOut(500);
// 		$(".c-grid--sidebar").css({ transform: "translate(0%, 0)", transition: "1s" });
// 	});
// });

// $(function () {
// 	$(".p-header__box").on("click", function () {
// 		$(".c-shadow").fadeIn(600);
// 		// $("body").css("position", "fixed");
//         $(".p-sidebar").css({ "left": "-100%" ,"transition":"0.6s"});
// 	});

// 	$(".p-sidebar__x").on("click", function () {
// 		$(".c-shadow").fadeOut(500);
// 		$(".p-sidebar").css("left", "100%");
// 	});
// });


// $(function () {
// 	$(".p-header__box").on("click", function () {
// 		$(".c-shadow").fadeIn(600);
// 		// $("body").css("position", "fixed");
// 		$(".p-sidebar").css({ left: "-100%", transition: "0.6s" });
// 	});

// 	$(".p-sidebar__x").on("click", function () {
// 		$(".c-shadow").fadeOut(500);
// 		$(".p-sidebar").css("left", "100%");
// 	});
// });
const mediaQuery = window.matchMedia("(max-width: 599.9px)");

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
mediaQuery.addListener(handle);

function handle(mm) {
	if (mm.matches) {
		// ウィンドウサイズ768px以下のときの処理
		$(".p-header__box").on("click", function () {
			$(".c-shadow").fadeIn(500);
			$(".p-sidebar").css({ left: "14%", transition: "0.5s" });
		});
	} else {
		// それ以外の処理
		$(".p-header__box").on("click", function () {
			$(".c-shadow").fadeIn(500);
			$(".p-sidebar").css({ left: "57%", transition: "0.5s" });
		});
	}
	$(".p-sidebar__x").on("click", function () {
		$(".c-shadow").fadeOut(500);
		$(".p-sidebar").css({ left: "100%", transition: "0.5s" });
	});
}