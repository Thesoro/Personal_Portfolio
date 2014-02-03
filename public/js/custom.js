var ef=jQuery;
	ef.noConflict();
	
	ef(document).foundation();
	
	/*-------------------------------------------------------*/
	/*------------------- Main Variables --------------------*/
	/*-------------------------------------------------------*/
	
	/* Revolution Fullwidth Slider (on the homepage) */
	var $mainSlider = ef('.fullwidthbanner');
	
	/* Revolution Slider (on other pages) */	
	var $commonSlider = ef('.fullwidthbanner1');
		
	/* Isotope Portfolio setup */
	var $ajaxPages = 2; /* Change this value to 7 if you have 7 pages portfolio-items-[x].html for example*/
	var $pageName = 'portfolio-items-'; /* Change if your pages were named differently */
	
	var $icontainer = ef('.ef-portfolio-wrap');
	var	$portfolioFilteritem = ef('.ef-portfolio-filter a');
	var	$portfolioFilterli = ef('.ef-portfolio-filter li');
	var	$currentClass = ef('.ef-currentclass');
	var $addItems = ef('#ef-addnewitems');
	
	/* Latest Works Carousel class*/
	var $autoPlay1 = false;
	var $worksCarousel = ef(".ef-carousel");
	var $easing1 = 'easeInOutExpo'; /* See Easing examples here: http://jqueryui.com/resources/demos/effect/easing.html */
	
	/* Clients Carousel class */
	var $autoPlay2 = false;
	var $clientsCarousel = ef(".ef-clients-carousel");
	var $easing2 = 'easeInOutExpo'; /* See Easing examples here: http://jqueryui.com/resources/demos/effect/easing.html */
	
	/* Latest From The Blog carousel */
	var $autoPlay3 = false;
	var $blogCarousel = ef(".ef-simple-carousel");
	var $easing3 = 'easeInOutExpo'; /* See Easing examples here: http://jqueryui.com/resources/demos/effect/easing.html */
	
	/* Blog Post carousel */
	var $autoPlay5 = false;
	var $blogPostCarousel = ef(".ef-blogpost-carousel");
	var $easing5 = 'easeInOutExpo'; /* See Easing examples here: http://jqueryui.com/resources/demos/effect/easing.html */
	
	/* Simple Carousel With Fade Effect */
	var $autoPlay4 = {pauseOnHover: 'resume'};	/*Change {...} to false if you do not need autoplay*/
	var $fadeCarousel = ef(".ef-simple-carousel-2");
	var $easing4 = 'linear'; /* See Easing examples here: http://jqueryui.com/resources/demos/effect/easing.html */
	
	/* Equal Height */
	var $colHeight = ef(".ef-services > .columns");
	
	/* Lightbox Class */
	var $lightB = ef("a[data-gal^='lb']");
	
	/*Flickr widget options*/
	var $flickr = ef('.jflickr');
	var $amount = 6;
	var $flickrId = '36587311@N08'; /* Put your Flickr ID here or get it using http://idgettr.com/  */
	
	/* Twitter Panel Options */
	var $username = "evgenyfireform"; 	/* Change to your Twitter username */
	var $tweetCount = 1; 				/* Change if you need more then 1 Tweet on the bottom */
	var $twt = ef(".ef-twitter");
	
	/* Twitter widget Options */
	var $username1 = "evgenyfireform"; 	/* Change to your Twitter username */
	var $tweetCount1 = 3; 				/* Change if you need more tweets */
	var $twt1 = ef(".ef-twitter-widget1");
	
	/* Accordion Class */
	var $accClass = ef( ".ef-uiaccordion" );
	
	/* Toggle Panels Class */
	var $toggleClass = ef(".ef-toggle");
	
	/* Tipsy (tooltips) in the Social Bar on top */
	var $tipsySocial = ef('a.ef-tipsy-n');
	
	/* Tipsy for any content */
	var $tipsyContent = ef('a.ef-tipsy-s');
	
	/* Progressbars class */
	var $progressB = ef('.ef-progress-bar div');
	
	/* Contact Form Validation Classes */
	var $formVal = ef(".ef-form");
	var $nameField = '.ef-name';
	var $emailField = '.ef-email';
	var $messageField = '.ef-message';
	
	/* Setting Up The Map */
	var $zoomLevel = 15;	
	var markers = [
		{'position': '59.32893000000001,18.064910000000054', 'title': '1st Location: Stockholm, Sweden' },
		{'position': '35.6894875,139.69170639999993', 'title': '2d Location: Tokyo, Japan' },
		{'position': '13.7234186, 100.47623190000002', 'title': '3d Location: Bangkok, Thailand' },
		{'position': '51.508129,-0.12800500000003012', 'title': '4th Location: London, Great Britain' },
		{'position': '40.7143528,-74.0059731', 'title': '5th Location: New York, USA' },
		{'position': '48.856614,2.3522219000000177', 'title': '6th Location: Paris, France' },
		{'position': '34.0522342,-118.2436849', 'title': '7th Location: Los Angeles, USA' },
		{'position': '55.75,37.616666699999996', 'title': '8th Location: Moskow, Russia' }
	];
	
	/* To top */
	var $totop = true;
	
	/*-------------------------------------------------------*/
	/*-------------------------------------------------------*/
	/*-------------------------------------------------------*/
	

ef(document).ready(function() {
	
	if (ef.fn.cssOriginal!=undefined)
	ef.fn.css = ef.fn.cssOriginal;
	
	/*Main slider settings*/	
	$mainSlider.revolution({
	
		delay:						5500,
		startwidth:					1171,
		startheight:				376,
	
		onHoverStop:				"on",						// Stop Banner Timet at Hover on Slide on/off
		
		touchenabled:				"on",
	
		thumbWidth:					100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		thumbHeight:				50,
		thumbAmount:				5,
	
		hideThumbs:					1,
		navigationArrows:			"solo",				// nexttobullets, solo (old name verticalcentered), none
		
		navigationHAlign:			"center",				// Vertical Align top,center,bottom
		soloArrowLeftValign:		"center",
		soloArrowRightValign:		"center",
	
		touchenabled:				"on",						// Enable Swipe Function : on/off
			
		stopAtSlide:				-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:				-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
	
		hideCaptionAtLimit:			0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit:		0,				// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit:			0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
			
		fullWidth:					"on"
	
	});
	
	/*Slider on pages*/
	$commonSlider.revolution({
	
		delay:						5500,
		startwidth:					1149,
		startheight:				195,
	
		onHoverStop:				"on",						// Stop Banner Timet at Hover on Slide on/off
		
		touchenabled:				"on",
	
		hideThumbs:					1,
		navigationArrows:			"solo",				// nexttobullets, solo (old name verticalcentered), none
		
		navigationType:				"none",
		
		navigationHAlign:			"center",				// Vertical Align top,center,bottom
		soloArrowLeftValign:		"center",
		soloArrowRightValign:		"center",
		
		soloArrowLeftHOffset:		-8,
		soloArrowRightHOffset:		-8,
	
		touchenabled:				"on",						// Enable Swipe Function : on/off
			
		stopAtSlide:				-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:				-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
	
		hideCaptionAtLimit:			0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit:		0,				// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit:			0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
			
		fullWidth:					"off",
		shadow:						0
	
	});
	
	
	
	/* Placeholders */
	ef('input, textarea').placeholder();
	
	
	
	/* Replace *.svg to *.png in browsers that doesn't support svg */
	if(!Modernizr.svg) {ef('img[src*="svg"]').attr('src', function() {
			return ef(this).attr('src').replace('.svg', '.png');
		});
	}
	
	
	
	
	/*Clients carousel*/
	$clientsCarousel.carouFredSel({
		width		: 	'100%',
		transition	:	true,
		height		: 	'variable',
		scroll		: 	{
							duration: 800,
							timeoutDuration: 600,
							easing: $easing2
		},
		auto		: 	$autoPlay2,
		prev		: 	"#ef-prev1",
		next		: 	"#ef-next1",		
		swipe		: 	{
							onTouch	: true
						}
	});
	
	
	
	/*Latest From The Blog carousel*/
	$blogCarousel.carouFredSel({
		responsive	: 	true,
		transition	:	true,
		height		: 	'variable',
		circular	: 	false,
		auto		: 	$autoPlay3,
		scroll		: 	{
							duration  : 800,
							timeoutDuration	: 600,
							easing: $easing3
		},
		swipe		: 	{
							onTouch	: true
						},
		pagination 	: 	{
							container	: ".carousel-pagintation-1"
						},
		item		:	{
							height	:	"auto"
						}
	});
	
	
	
	/*Blog Post carousel*/
	$blogPostCarousel.carouFredSel({
		responsive	: 	true,
		transition	:	true,
		prev		:	'.post-slider-prev',
		next		:	'.post-slider-next',
		scroll		:	{	fx	: 'crossfade',
							duration  : 500,
							timeoutDuration	: 3000,
							easing	: $easing4
						},
		circular	: 	false,
		infinite	: 	true,
		auto		: 	$autoPlay5,	
		swipe		: 	{
							onTouch	: true
						},
		items		:	{
							height	:	'variable'
						}
	});

	
	
	/*Clients say carousel*/
	$fadeCarousel.carouFredSel({
		responsive	: 	true,
		transition	:	true,
		scroll		:	{	fx	: 'crossfade',
							duration  : 500,
							timeoutDuration	: 3000,
							easing	: $easing4
						},
		circular	: 	false,
		infinite	: 	true,
		auto		: 	$autoPlay4,	
		swipe		: 	{
							onTouch	: true
						},
		pagination 	: 	{
							container	: ".carousel-pagintation-2"
						},
		items		:	{
							height	:	'variable'
						}
	});
	
	
	
	/*rLightbox*/
	$lightB.prettyPhoto({
		hook: 'data-gal',
		counter_separator_label: ' of ',
		overlay_gallery: false,
		social_tools: false
	});
	
	
	
	/*Twitter*/
	$twt.tweet({
	    count: $tweetCount,
	    username: $username,
	    loading_text: "Loading tweets",
	    refresh_interval: 60
	}).bind("loaded", function() {
	    ef(this).find("a").attr("target", "_blank");
	});
	
	
	
	/*Twitter widget*/
	$twt1.tweet({
	    count: $tweetCount1,
	    username: $username1,
	    page: 1,
	    template: "{text}<br />{time}<br />{retweet_action} &#x2794;",
	    loading_text: "Loading tweets",
	    refresh_interval: 60
	}).bind("loaded", function() {
	    ef(this).find("a").attr("target", "_blank");
	    $(this).find("a.tweet_action").click(function(ev) {
          window.open(this.href, "Retweet",
                      'menubar=0,resizable=0,width=550,height=420,top=200,left=400');
          ev.preventDefault();
        });
	});
	
	
	
	/*jFlickfeed*/
	$flickr.jflickrfeed({
	    limit: $amount,
	    qstrings: {
	        id: $flickrId
	    },
	    itemTemplate: '<li>' + '<a data-gal="lb[gallery]" href="{{image}}" title="{{title}}">' + '<img src="{{image_q}}" alt="{{title}}" />' + '<span class="ef-loader"><span></span></span>' + '</a>' + '</li>'
	}, function(data){
		ef(this).waitForImages(function() {
		    ef(this).find('.ef-loader').fadeOut(1000);
		});
		ef(this).find('a').prettyPhoto({
			hook: 'data-gal',
			counter_separator_label: ' of ',
			overlay_gallery: false,
			social_tools: false
		});
	});
	
	
	
	
	/*jQuery UI Accordion*/
	$accClass.accordion({
		heightStyle: "content"
	});
	
	
	
	/*Toggles*/
	$toggleClass.addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
  	.find("h4")
    .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
    .prepend('<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>')
    .click(function() {
      ef(this)
        .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
        .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end()
        .next().toggleClass("ui-accordion-content-active").slideToggle();
      return false;
    })
    .next()
    .addClass("ui-accordion-content  ui-helper-reset ui-widget-content ui-corner-bottom")
    .hide();
	
	
	
	/*jQuery UI Tabs*/
	    ef('.ef-tabs').tabs({
	    	heightStyle: 'content',
	    	active: 0
	    });
	    
	    
	
	/*Sticky Footer*/
	function changeHeight() {
		ef('#ef-content').css('min-height', '');
		var sigma = ef(window).height() - ef('body').height();
		if (sigma > 0) ef('#ef-content').css('min-height', ef('#ef-content').height() + sigma - ef('html').offset().top);
	}
	
	function SGaddEvent( obj, type, fn ){
		if (obj.addEventListener){obj.addEventListener( type, fn, false );}
		else if (obj.attachEvent){
		obj["e"+type+fn] = fn;obj[type+fn] = function(){obj["e"+type+fn]( window.event );}
		obj.attachEvent( "on"+type, obj[type+fn] );}
	}
	SGaddEvent(window, 'load', changeHeight);
	SGaddEvent(window, 'resize', changeHeight);
	
	
	
	/*Wait for images (main script is included in the Revolution Slider plugin)*/
	ef('.ef-proj-img').waitForImages(function() {
	    ef(this).find('.ef-loader').fadeOut(1000);
	});
	
	
	/*Tipsy for the Social profiles on top*/
	$tipsySocial.tipsy({
		fade: true,
		opacity: 1,
		gravity: 'n',
		delayIn: 200,
		delayOut: 0,
		offset: -4,
	});
	
	$tipsyContent.tipsy({
		fade: true,
		opacity: 1,
		gravity: 's',
		delayIn: 200,
		delayOut: 0,
		offset: 5,
	});
	
	
	
	/*Skill graphs*/
	$progressB.each(function() {		
		var pc = ef(this).attr('data-id') + '%';
		ef(this).append('<span><span></span></span>')
		ef(this).prev().append(' - ' + pc);
		ef(this).children().animate({ 'width' : pc }, 1500, 'easeOutExpo');		
	});
	
	
	
	/*Contact Form init*/
	$formVal.efValidate({
		name    		: $nameField,
		email   		: $emailField,
		message   		: $messageField,
		sliderInput		: '.ef-contact-slider',
		formAlert		: '.ef-form-alert'
	});
	
	
	
	/*gMap Settings*/
	if (markers.length > 1) {
		ef.extend(ef.ui.gmap.prototype, {
			pagination: function(prop) {
				var $el = ef("<div id='ef-map-pag' class='ef-map-pag'><div class='btn back-btn'></div><div class='ef-place'></div><div class='btn fwd-btn'></div></div>");
				var self = this, i = 0, prop = prop || 'title';
				self.set('pagination', function(a, b) {
					if (a) {
						i = i + b;
						$el.find('.ef-place').text(self.get('markers')[i][prop]);
						self.get('map').panTo(self.get('markers')[i].getPosition());
					}
				});
				self.get('pagination')(true, 0);
				$el.find('.back-btn').click(function() {
					self.get('pagination')((i > 0), -1, this);
				});
				$el.find('.fwd-btn').click(function() {
					self.get('pagination')((i < self.get('markers').length - 1), 1, this);
				});
				self.addControl($el, google.maps.ControlPosition.BOTTOM_LEFT);
			}
		});	
	}
	
	ef('#map_canvas').gmap({
	
		'zoom': $zoomLevel, 			/* Change Zoom Level if needed */
		
		'scrollwheel': false, 	/* Disabling Mouse Wheel to avoid stuck when scroll */
		
		'styles': [{stylers:[{ 	/* Delete these 5 lines if you need default styling */
			lightness: 3	   	/*--*/
			},{				   	/*--*/
			saturation: -100   	/*--*/
		}]}],				   	/*--*/
		
		'callback' : function() {
		var self = this;
		ef.each(markers, function(i, marker) {
			self.addMarker(marker).click(function() {
				if (markers.length == 1) {
					self.openInfoWindow({'content': this.title}, this);
				}
			});
		});
	}}).gmap('pagination', 'title');
	
	/* To top script*/

	if (!$totop==false) {
		ef(function () {
			ef('body').append('<div id="to-top"></div>')
			ef(window).scroll(function () {
				if (ef(this).scrollTop() > 200) {
					ef('#to-top').fadeIn();
				} else {
					ef('#to-top').fadeOut();
				}
			});
	
			ef('#to-top').click(function () {
				ef('body,html').animate({
					scrollTop: 0
				}, 1200);
				return false;
			});
		});
	}
	
});

ef(window).load(function () {	

	/*Latest Works carousel*/
	$worksCarousel.carouFredSel({
		responsive	: 	true,
		transition	:	true,
		circular	: 	false,
		scroll		:	{	
							items : 1,
							duration : 800,
							timeoutDuration : 600,
							easing  : $easing1
						},
		prev		: 	{
							button: '#ef-prev',
							key: "left"			
						},
		next		: 	{
							button: '#ef-next',
							key: "right"			
						},
		auto		: 	$autoPlay1,
		items		: 	{
							height: 'variable',
							visible	:	{
											min	: 1,
											max	: 4
										}
						},
		swipe		: 	{
							onTouch	: true
						}
	});
	
	
	
	
	/*Isotope Portfolio*/
	$icontainer.isotope({
		layoutMode : 'fitRows'
	});
	
	$currentClass.trigger("click");
	
	$portfolioFilteritem.click(function(e){
		e.preventDefault();
		var selector = ef(this).attr('data-option-value');
		$icontainer.isotope({ filter: selector });
		$portfolioFilterli.removeClass();
		ef(this).parent('li').addClass('ef-currentclass');
	});
    
    var t = 1;    
	$addItems.click(function(e){
		e.preventDefault();
		var $selff = ef(this);
		$selff.find('.ef-loader').css({display: 'block'});
	    var q = $pageName + t + '.html';
	    
	    return ef.ajax({
			cache: false,
			url: q,
			success: function($newItems){
				var $newElems = ef($newItems);	             
				$newElems.imagesLoaded(function(){	             
					$icontainer.isotope('insert', $newElems);
					ef('.ef-proj-img').find('.ef-loader').hide();	               
					ef("a[data-gal^='lb']").prettyPhoto({
						hook: 'data-gal',						
						counter_separator_label: ' of ',
						overlay_gallery: false,
						social_tools: false
					});
					if (t==$ajaxPages) {$selff.hide()} else {t++}					
					$selff.find('.ef-loader').hide();	               
				});
			}
		});
		
	});
	
	
	/*Equal height*/
	ef.fn.equalHeight = function() {
		var group = this;
		ef(window).bind('resize', function() {
			var tallest = 0;
			ef(group).height('auto').each(function() {
				tallest = Math.max(tallest, ef(this).height());
			}).height(tallest);
		}).trigger('resize');
		
	};
	$colHeight.equalHeight();
	
	/*Equal height and line-height (for the image centering) in the pseudo tables*/
	ef.fn.equalHeight = function() {
		var group = this;
		ef(window).bind('resize', function() {
			var tallest = 0;
			ef(group).height('auto').each(function() {
				tallest = Math.max(tallest, ef(this).height());
			}).height(tallest).css({lineHeight:tallest+'px'});
		}).trigger('resize');
		
	};
	ef(".ef-pseudo-table > li li").equalHeight();
})