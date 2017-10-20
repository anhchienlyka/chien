

jQuery(document).ready(function() {
	jQuery("body").append("<div class='demo-settings'></div>");
	jQuery(".demo-settings").append("<a href='#show-settings' class='demo-button'><i class='fa fa-gear'></i>Settings</a>");
	jQuery(".demo-settings").append("<div class='demo-options'>"+
										"<div class='title'>Demo Settings</div>"+
										"<a href='#demo' rel='font-options' class='option'><img src='images/demo/image-1.png' class='demo-icon' alt='' /><span>Font Settings</span><font>Change Fonts</font></a>"+
										"<div class='option-box' rel='font-options'>"+
											"<div alt='font-options'>"+
												"<b class='sub-title'>Titles Font</b>"+
												"<a href='#' class='font-bulb active' style='font-family:\"Arvo\", serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Source Sans Pro\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Alegreya Sans SC\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Ruda\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Marvel\", sans-serif;'>Aa</a>"+
											"</div>"+
										"</div>"+
										"<div class='option-box sequal' rel='font-options'>"+
											"<div alt='font-options2'>"+
												"<b class='sub-title'>Paragraph &amp; Menu Font</b>"+
												"<a href='#' class='font-bulb active' style='font-family:\"Noto Sans\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Source Sans Pro\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Alegreya Sans SC\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Ruda\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Marvel\", sans-serif;'>Aa</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='color-options' class='option'><img src='images/demo/image-2.png' class='demo-icon' alt='' /><span>Color Options</span><font>Color schemes</font></a>"+
										"<div class='option-box' rel='color-options'>"+
											"<div alt='color-options'>"+
												"<b class='sub-title'>Main Color Scheme</b>"+
												"<a href='#' class='color-bulb active' style='background: #EB6435;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #EBC635;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #8EC028;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #1D97D7;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #AA5BC0;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<div class='option-box sequal' rel='color-options'>"+
											"<div alt='menu-colors'>"+
												"<b class='sub-title'>Main Menu &amp; Footer</b>"+
												"<a href='#' class='color-bulb active' style='background: #3c3c3c;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #2c3e50;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #5D6A6B;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #70516A;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #39643E;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='page-header' class='option'><img src='images/demo/image-6.png' class='demo-icon' alt='' /><span>Change Header</span><font>Choose Header Style</font></a>"+
										"<div class='option-box' rel='page-header'>"+
											"<div alt='menu-box'>"+
												"<b class='sub-title'>Menu Style</b>"+
												"<a href='#' class='option-bulb active' rel='double'>Double line</a>"+
												"<a href='#' class='option-bulb' rel='single'>Single line</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='background' class='option'><img src='images/demo/image-3.png' class='demo-icon' alt='' /><span>Background</span><font>Backgorund textures</font></a>"+
										"<div class='option-box' rel='background'>"+
											"<div alt='background'>"+
												"<b class='sub-title'>Background Texture</b>"+
												"<a href='#' class='color-bulb active' style='background: #efefef;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-3.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-1.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-2.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-4.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-5.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-1.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-2.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-3.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-4.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='page-width' class='option'><img src='images/demo/image-4.png' class='demo-icon' alt='' /><span>Change Width</span><font>Boxed or Full-Width</font></a>"+
										"<div class='option-box' rel='page-width'>"+
											"<div alt='option-box'>"+
												"<b class='sub-title'>Switch Page Width</b>"+
												"<a href='#' class='option-bulb active' rel='full'>Full width</a>"+
												"<a href='#' class='option-bulb' rel='boxed'>Boxed</a>"+
											"</div>"+
										"</div>"+
									"</div>");
	
	jQuery(".demo-settings a[href=#demo]").click(function(){
		var thiselem = jQuery(this);
		if(thiselem.parent().find("div[rel="+thiselem.attr("rel")+"]").hasClass("thisis") == false){
			thiselem.parent().find("div.thisis").removeClass("thisis").animate({
				height: 'toggle',
				paddingTop: 'toggle',
				opacity: 'toggle'
			}, 150);
		}
		thiselem.parent().find("div[rel="+thiselem.attr("rel")+"]").toggleClass("thisis").animate({
			height: 'toggle',
			paddingTop: 'toggle',
			opacity: 'toggle'
		}, 150);
		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background-color");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "color-options"){
			jQuery("head").append("<style> .photo-gallery-thumbs-inner .item.active { border: 3px solid "+newcolor+"; }</style>");
			jQuery("head").append("<style> .shortcode-content blockquote.blockquote-style-3.blockquote-reverse { border-right: 5px solid "+newcolor+"; }</style>");
			jQuery("head").append("<style> .shortcode-content blockquote.blockquote-style-3 { border-left: 5px solid "+newcolor+"; }</style>");
			jQuery("head").append("<style> .archive-blocks .item > h2 { border-bottom: 3px solid "+newcolor+"; }</style>");
			jQuery("head").append("<style> .archive-blocks .item .item-article.small > h3 .heading-comment, .archive-blocks .item > h2, .ot-breaking-news-body .ot-breaking-news-controls strong, a:hover, .full-width-articles > .item .item-content .category-link a, .header .header-main .header-main-logo h1 a, .shortcode-content blockquote.blockquote-style-3 p { color: "+newcolor+"; }</style>");
			jQuery("head").append("<style> .header .menu-search-thing button, .item .item-article .item-header a, .photo-gallery-blocks > .item .item-header a, .full-width-articles > .item .item-header a, .article-main-next-prev a:hover, .split-article-slide-right > .item .item-header a, .content-panel-body.article-list > .item .item-header a, .item .item-article .item-header:hover .comment-tag i:not(.fa), .photo-gallery-blocks > .item .item-header:hover .comment-tag i:not(.fa), .full-width-articles > .item .item-header:hover .comment-tag i:not(.fa), .split-article-slide-right > .item .item-header:hover .comment-tag i:not(.fa), .content-panel-body.article-list > .item .item-header:hover .comment-tag i:not(.fa), .item .item-article .item-header .read-more i, .photo-gallery-blocks > .item .item-header .read-more i, .full-width-articles > .item .item-header .read-more i, .split-article-slide-right > .item .item-header .read-more i, .content-panel-body.article-list > .item .item-header .read-more i, .item .item-article .item-header .comment-tag i:not(.fa), .photo-gallery-blocks > .item .item-header .comment-tag i:not(.fa), .full-width-articles > .item .item-header .comment-tag i:not(.fa), .split-article-slide-right > .item .item-header .comment-tag i:not(.fa), .content-panel-body.article-list > .item .item-header .comment-tag i:not(.fa), .pagination span.page-numbers, .op-jumplist .ot-jumplist-front a.launch-button:hover, input[type=submit].button, .shortcode-content .marker, .photo-gallery-nav-left, .photo-gallery-nav-right { background-color: "+newcolor+"; }</style>");
		}else
		if(thiselem.parent().attr("alt") == "menu-colors"){
			jQuery("head").append("<style> .sidebar .widget > h3, .op-jumplist .ot-jumplist-back, .op-jumplist .ot-jumplist-front a.launch-button, .header .main-menu .top-main-menu, .header .main-menu .top-main-menu ul.sub-menu, .footer, .sidebar .widget.widget-tabbed > h3 span { background-color: "+newcolor+"; }</style>");
		}

		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background-image");
		var newcolor_1 = thiselem.css("background-position");
		var newcolor_2 = thiselem.css("background-repeat");
		var newcolor_3 = thiselem.css("background-attachment");
		var newcolor_4 = thiselem.css("background-origin");
		var newcolor_5 = thiselem.css("background-clip");
		var newcolor_6 = thiselem.css("background-color");
		var newcolor_7 = thiselem.css("background-size");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "background"){
			jQuery(".dat-menu-container").css("background-image", newcolor).css("background-position", newcolor_1).css("background-repeat", newcolor_2).css("background-attachment", newcolor_3).css("background-origin", newcolor_4).css("background-clip", newcolor_5).css("background-color", newcolor_6).css("background-size", newcolor_7);
		}

		return false;
	});
	
	jQuery(".option-box div .font-bulb").click(function(){
		var thiselem = jQuery(this);
		var newfont = thiselem.css("font-family");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "font-options"){
			jQuery("head").append("<style> h1, h2, h3, h4, h5, .top-slider-content-wrap .item .item-header .comment-tag, .item .item-article .item-header .comment-tag, .photo-gallery-blocks > .item .item-header .comment-tag, .full-width-articles > .item .item-header .comment-tag, .split-article-slide-right > .item .item-header .comment-tag, .content-panel-body.article-list > .item .item-header .comment-tag, .big-social-link, .comment-block .comment-text .user-nick, .comment-block .comment-text .time-stam { font-family: "+newfont+"; }</style>");
		}else
		if(thiselem.parent().attr("alt") == "font-options2"){
			jQuery("head").append("<style> body, p, .header .header-main .header-main-logo h1, ul.ot-mega-menu .widget > h3, .content .content-block .content-panel-title h2, .article-header h2, .archive-blocks .item > h2, .sidebar .widget > h3, .footer .footer-widgets .widget h3 { font-family: "+newfont+"; }</style>");
		}

		return false;
	});
	
	jQuery(".option-box div .option-bulb").click(function(){
		var thiselem = jQuery(this);
		var newsize = thiselem.attr("rel");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "option-box"){
			if(newsize == "boxed"){
				jQuery(".boxed").addClass("active");
			}else
			if(newsize == "full"){
				jQuery(".boxed").removeClass("active");
			}
		}

		return false;
	});
	
	jQuery(".option-box div .header-bulb, .option-box div .option-bulb").click(function(){
		var thiselem = jQuery(this);
		var newsize = thiselem.attr("rel");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "menu-box"){
			if(newsize == "single"){
				jQuery(".header .main-menu .top-bottom-menu").fadeOut();
			}else
			if(newsize == "double"){
				jQuery(".header .main-menu .top-bottom-menu").fadeIn();
			}
		}

		return false;
	});

	var leavetime = '';
	
	jQuery(".demo-settings").mouseleave(function(){
		var thiselem = jQuery(this);
		leavetime = setTimeout(function(){
			thiselem.removeClass("active");
		}, 600);
		return false;
	});
	
	jQuery(".demo-settings").mouseover(function(){
		clearTimeout(leavetime);
		return false;
	});
	
	jQuery(".demo-settings .demo-button").click(function(){
		jQuery(".demo-settings").addClass("active");
		return false;
	});
});

