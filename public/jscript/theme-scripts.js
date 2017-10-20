(function ($) {
    "use strict";

	Array.prototype.forEach2=function(a){ var l=this.length; for(var i=0;i<l;i++)a(this[i],i) };
    
	jQuery(document).on("ready", function() {

		// Sets retina images @2x
		var retina = window.devicePixelRatio > 1;
		if(retina) {
			jQuery(".retina-check", "body").toArray().forEach2(function(a){
				jQuery(a).addClass("go-retina");
			});
			var n = 0;
			jQuery("img[data-ot-retina]", "body").toArray().forEach2(function(a){
				var thisel = jQuery(a);
				var theImage = new Image();
				theImage.src = thisel.attr("src");
				jQuery(theImage).load(function(){
					var thisnew = jQuery(this);
					thisel.attr("src", generatePlaceholder(thisnew[0].width,thisnew[0].height));
					thisel.css({
						"background-image": "url('"+thisel.data("ot-retina")+"')",
						"background-size": "100% 100%",
						"background-repeat": "none"
					});
				});
			});
		}

		// Breaking slider main function
		function otBreakingSlide(item, direction, thisisbutton) {
			if(item.data("breaking-hover") == true && !thisisbutton){
				return false;
			}
			if(thisisbutton){
				clearInterval(item.data("breaking-function"));
			}
			if(direction == "right" && parseInt(item.data("breaking-current"), 10)+1 < parseInt(item.data("breaking-size"), 10)){
				item.find(".ot-breaking-news-content .item").eq(0).css("margin-left", "-"+(100*( parseInt(item.data("breaking-current"), 10) + 1 ))+"%");
				item.data("breaking-current", parseInt(item.data("breaking-current"), 10)+1);
			}else if(direction == "right"){
				item.find(".ot-breaking-news-content .item").eq(0).css("margin-left", "0px");
				item.data("breaking-current", "0");
			}
			if(direction == "left" && parseInt(item.data("breaking-current"), 10)-1 >= 0){
				item.find(".ot-breaking-news-content .item").eq(0).css("margin-left", "-"+(100*( parseInt(item.data("breaking-current"), 10) - 1 ))+"%");
				item.data("breaking-current", parseInt(item.data("breaking-current"), 10)-1);
			}else if(direction == "left"){
				item.find(".ot-breaking-news-content .item").eq(0).css("margin-left", "-"+(100*( parseInt(item.data("breaking-size"), 10)-1 ))+"%");
				item.data("breaking-current", parseInt(item.data("breaking-size"), 10)-1);
			}
		}

		jQuery("a[href='#top']", "body").on("click", function () {
			jQuery("body,html").animate({
				scrollTop: 0
			}, 500);
			return false;
		});

		jQuery(".ot-breaking-news-body", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a),
				thiscontrol = thisel.find(".ot-breaking-news-content .item").eq(0),
				slidetimeout = (thisel.data("breaking-timeout") && parseInt(thisel.data("breaking-timeout")) >= 1000)?parseInt(thisel.data("breaking-timeout")):2000;
			thisel.data("breaking-size", thisel.find(".ot-breaking-news-content .item").size()).data("breaking-current", "0");
			
			if(thisel.data("breaking-autostart") == true){
				thisel.data("breaking-function", setInterval(function(){
					otBreakingSlide(thisel, "right");
				}, slidetimeout));
			}
		});

		jQuery(".ot-breaking-news-body", ".content").on("mouseenter", function(){
			jQuery(this).addClass("mouseenter").data("breaking-hover", true);
		}).on("mouseleave", function(){
			jQuery(this).removeClass("mouseenter").data("breaking-hover", false);
		});

		jQuery("button[data-break-dir='right']", ".ot-breaking-news-controls").on("click", function(){
			otBreakingSlide(jQuery(this).parent().parent(), "right", true);
			return false;
		});

		jQuery("button[data-break-dir='left']", ".ot-breaking-news-controls").on("click", function(){
			otBreakingSlide(jQuery(this).parent().parent(), "left", true);
			return false;
		});



		// Set top slider colors
		jQuery("[data-color-top-slider]", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a),
				newcolor = thisel.data("color-top-slider");
			thisel.find(".item-header a, .item-header .read-more i, .item-header .comment-tag i:not(.fa)").css("background-color", newcolor);
			thisel.find(".category-link a").css("color", newcolor);
		});


		// Set top slider colors
		jQuery("[data-color-archive]", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a),
				newcolor = thisel.data("color-archive");
			thisel.find(".item-header a, .item-header .read-more i, .item-header .comment-tag i:not(.fa)").css("background-color", newcolor);
			thisel.children("h2").css({"color": newcolor, "border-bottom": "3px solid "+newcolor});
		});


		// Top slider script
		function otTopSlide(item, direction, thisisbutton) {
			var thisel = item.parent(),
				oldslide = parseInt(thisel.data("top-slider-current"), 10),
				newslide = 0;
			if(thisel.data("top-slider-hover") == true && !thisisbutton){
				return false;
			}
			if(thisisbutton){
				clearInterval(thisel.data("top-slider-function"));
			}

			if(direction == "right" && oldslide+1 < parseInt(thisel.data("top-slider-size"), 10)){
				newslide = oldslide+1;
			}else if(direction == "right"){
				newslide = 0;
			}

			if(direction == "left" && oldslide-1 >= 0){
				newslide = oldslide-1;
			}else if(direction == "left"){
				newslide = parseInt(thisel.data("top-slider-size"), 10)-1;
			}

			thisel.data("top-slider-current", newslide);

			item.find(".top-slider-content-wrap.active").removeClass("doesflow slider-slide-in type-right type-left").addClass("type-"+direction+" slider-slide-out");

			setTimeout(function(){
				item.find(".top-slider-content-wrap.slider-slide-out.active").removeClass("type-"+direction+" active slider-slide-out");
				item.find(".doesflow").removeClass("doesflow");
			}, 1240);
			setTimeout(function(){
				item.find(".top-slider-content-wrap").eq(newslide).addClass("type-"+direction+" active slider-slide-in doesflow");
			}, 100);
		}

		jQuery(".top-slider-body", ".content").on("mouseenter", function(){
			jQuery(this).addClass("mouseenter").data("top-slider-hover", true);
		}).on("mouseleave", function(){
			jQuery(this).removeClass("mouseenter").data("top-slider-hover", false);
		});

		jQuery(".top-slider-body", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a),
				slidetimeout = (thisel.data("top-slider-timeout") && parseInt(thisel.data("top-slider-timeout")) >= 1000)?parseInt(thisel.data("top-slider-timeout")):4000;
			
			thisel.data("top-slider-size", thisel.find(".top-slider-content-wrap").size()).data("top-slider-current", "0");

			if(thisel.data("top-slider-autostart") == true){
				thisel.data("top-slider-function", setInterval(function(){
					otTopSlide(thisel.find(".top-slider-content"), "right");
				}, slidetimeout));
			}
		});

		jQuery("button[data-top-slider-dir='right']", ".top-slider-controls").on("click", function(){
			otTopSlide(jQuery(this).parent().siblings(".top-slider-content"), "right", true);
			return false;
		});

		jQuery("button[data-top-slider-dir='left']", ".top-slider-controls").on("click", function(){
			otTopSlide(jQuery(this).parent().siblings(".top-slider-content"), "left", true);
			return false;
		});

		// Widget tabs
		jQuery(".widget-tabbed > h3 span", ".sidebar").on("click", function(){
			var thisel = jQuery(this);
			thisel.addClass("active").siblings(".active").removeClass("active").parent().siblings("div").eq(thisel.index()).addClass("active").siblings(".active").removeClass("active");
			return false;
		});

		// Label input focus and blur effects
		jQuery("input", ".label-input").on("focus", function(){
			jQuery(this).parent().addClass("focused");
		}).on("blur", function(){
			jQuery(this).parent().removeClass("focused");
		});


		// Jumplist script
		jQuery(".launch-button", ".ot-jumplist-front, .ot-jumplist-back").on("click", function(){
			jQuery(this).parent().parent().toggleClass("jumplist-show");
			return false;
		});


		// Menu search form show
		jQuery("button", ".menu-search-thing").on("click", function(){
			jQuery(this).parent().toggleClass("show-this");
			return false;
		});


		// Single article blurry background
		jQuery(".article-full-image > img", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a),
				size_x = parseInt(thisel.width()),
				size_y = parseInt(thisel.height());
			thisel.siblings(".wrapper").children(".article-header").append(thisel.clone());
			thisel.siblings(".wrapper").find("img").addClass("background-blurry").css({"width": size_x, "height": size_y});
			return false;
		});


		// Sets spacer color
		jQuery("[data-spacer-color]", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a);
			thisel.css({"color": thisel.data("spacer-color"), "background-color": thisel.data("spacer-color")});
		});


		// Sets button color
		jQuery("[data-set-button-color]", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a);
			thisel.css({"color": "#fff", "background-color": thisel.data("set-button-color")});
		});

		// Tabs shortcode
		jQuery(".short-tabs", ".content").toArray().forEach2(function(a){
			var thisel = jQuery(a);
			thisel.children("ul").children("li").eq(0).addClass("active");
			thisel.children("div").eq(0).addClass("active");
		})

		jQuery(".short-tabs > ul > li a", ".content").on("click", function () {
			var thisel = jQuery(this).parent();
			thisel.siblings(".active").removeClass("active");
			thisel.addClass("active");
			thisel.parent().siblings("div.active").removeClass("active");
			thisel.parent().siblings("div").eq(thisel.index()).addClass("active");
			return false;
		});

		// Accordion blocks
		jQuery(".accordion > div > a", ".content").on("click", function () {
			var thisel = jQuery(this).parent();
			if (thisel.hasClass("active")) {
				thisel.removeClass("active").children("div").animate({
					"height": "toggle",
					"opacity": "toggle",
					"padding-bottom": "toggle",
					"padding-top": "toggle"
				}, 300);
				return false;
			}
			thisel.siblings("div").toArray().forEach2(function (a) {
				var tz = jQuery(a);
				if (tz.hasClass("active")) {
					tz.removeClass("active").children("div").animate({
						"height": "toggle",
						"opacity": "toggle",
						"padding-bottom": "toggle",
						"padding-top": "toggle"
					}, 300);
				}
			});
			thisel.addClass("active").children("div").animate({
				"height": "toggle",
				"opacity": "toggle",
				"padding-bottom": "toggle",
				"padding-top": "toggle"
			}, 300);
			return false;
		});

		// Closing alert message
		jQuery(".close-alert", ".alert-message").on("click", function(){
			jQuery(this).parent().hide();
			return false;
		});


		// Photo Gallery thumbs navigation
		jQuery("button", ".photo-gallery-thumbs").on("click", function(){
			var thisel = jQuery(this),
				marginHandler = thisel.siblings(".photo-gallery-thumbs-inner").children(".item").eq(0),
				current = thisel.siblings(".photo-gallery-thumbs-inner").data("thumbs-start-from");

			if(thisel.hasClass("photo-gallery-nav-left")){
				if(current+216 >= 0){
					current = 0;
					thisel.siblings(".photo-gallery-thumbs-inner").removeClass("not-first").removeClass("is-last");
				}else{
					current = current+216;
					thisel.siblings(".photo-gallery-thumbs-inner").removeClass("is-last");
				}
			}else
			if(thisel.hasClass("photo-gallery-nav-right")){
				var maxsize = (thisel.siblings(".photo-gallery-thumbs-inner").children(".item").size()*(98+8))-parseInt(jQuery(".photo-gallery-thumbs-inner", ".photo-gallery-thumbs").width(), 10);
				
				if(current-216 <= (-1)*maxsize){
					if(maxsize > 0){
						current = (-1)*maxsize;
						thisel.siblings(".photo-gallery-thumbs-inner").addClass("is-last");
					}
				}else {
					current = current-216;
					thisel.siblings(".photo-gallery-thumbs-inner").addClass("not-first").removeClass("is-last");
				}
			}
			
			marginHandler.css("margin-left", current+"px");
			thisel.siblings(".photo-gallery-thumbs-inner").data("thumbs-start-from", current);
			return false;
		});
		
		refreshSidebarFixed();

	});

	var menuisfollowing = false;

	jQuery(window).on("scroll", function(){
		
		refreshSidebarFixed();

		// Refreshes fixed main menu position
		var wr = jQuery(".ot-menu-will-follow .main-menu-placeholder"),
			wrfollow = jQuery(".ot-menu-will-follow .main-menu-placeholder.is-now-following");

		if(wr.size() > 0 && jQuery(window).scrollTop() >= parseInt(wr.offset().top)+280){
			wr.addClass("smallify");
		}else if(wrfollow.size() > 0 && jQuery(window).scrollTop() < parseInt(wrfollow.offset().top)+280){
			wrfollow.removeClass("smallify");
		}

		if(wr.size() > 0 && jQuery(window).scrollTop() >= parseInt(wr.offset().top) && menuisfollowing == false){
			menuisfollowing = true;
			wr.css({"height": wr.children(".main-menu-wrapper").height()});
			wr.addClass("is-now-following");
		}else if(wrfollow.size() > 0 && jQuery(window).scrollTop() < parseInt(wrfollow.offset().top) && menuisfollowing == true){
			menuisfollowing = false;
			wrfollow.removeClass("is-now-following").css({"height": "auto"});
		}
	});

	jQuery(window).on("load resize", function(){
		if(jQuery(".content-block").hasClass("has-sidebar")){
			jQuery(".sidebar").toArray().forEach2(function(a){
				var thisel = jQuery(a);
				setTimeout(function() {
					thisel.css("height", "auto");
					thisel.css("height", parseInt(thisel.parent().height())+"px");
					refreshSidebarFixed();
				}, 500);
			});
		}
	});

	jQuery(".lightbox", "body").on("click", function () {
		var thisel = jQuery(this);
		thisel.css('overflow', 'hidden');
		jQuery("body").css('overflow', 'auto');
		thisel.find(".lightcontent").fadeOut('fast');
		thisel.fadeOut('slow');
	}).children().on("click", function (e) {
		return false;
	});

	// Generating retina placeholder image
	function generatePlaceholder(w, h){
		var canvas = document.createElement('CANVAS'),
			ctx = canvas.getContext('2d'),
			img = new Image;
		canvas.height = h;
		canvas.width = w;
		ctx.drawImage(img,0,0);
		setTimeout(function(){
			canvas = null;
		}, 10);
		return canvas.toDataURL('image/png');
	}

})(jQuery);

function lightboxclose() {
	var lightblock = jQuery(".lightbox", "body");
	lightblock.css('overflow', 'hidden');
	jQuery(".lightcontent", ".lightbox").fadeOut('fast');
	lightblock.fadeOut('slow');
	jQuery("body").css('overflow', 'auto');
}

// Sets position for fixed slider
function refreshSidebarFixed(){
	var fixedSidebars = jQuery(".sidebar-fixed", ".content");

	if(fixedSidebars.length){
		fixedSidebars.toArray().forEach2(function(a){
			var thisel = jQuery(a),
				fixedHeight = parseInt(thisel.height())+parseInt(thisel.offset().top),
				fixedH = parseInt(thisel.height()),
				fixedOffset = parseInt(thisel.offset().top),
				contentHeight = parseInt(thisel.parent().height()+thisel.parent().offset().top),
				scrollOffset = (jQuery("body").hasClass("admin-bar"))?parseInt(jQuery(window).scrollTop())+32+30:parseInt(jQuery(window).scrollTop())+30,
				scrollOffset = (jQuery("body").hasClass("ot-menu-will-follow"))?scrollOffset+66:scrollOffset;
			
			var dopadding = scrollOffset - fixedOffset;

			if(fixedHeight >= contentHeight){
				thisel.removeClass("is-now-fixed").css("paddingTop", "0px");
			}else if(fixedOffset <= scrollOffset){
				if(dopadding+fixedOffset+fixedH >= contentHeight){
					thisel.addClass("is-now-fixed").css("paddingTop", parseInt(contentHeight-fixedHeight)+"px");
				}else{
					thisel.addClass("is-now-fixed").css("paddingTop", parseInt(dopadding)+"px")
				}
			}else{
				thisel.removeClass("is-now-fixed").css("paddingTop", "0px");
			}
		});
	}
}