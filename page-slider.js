(function( $ ) {
	var current = 0;
	var total = 0;
	var divs = null;
	var pages = [];
	var opts = null;
 
	$.fn.pageSlider = function( options ) {
		var body = $(document.body);
		
		/** Extend our default options with those provided **/
		opts = $.extend( {}, $.fn.pageSlider.defaults, options );
		
		this.hide();
		
		divs = this.find('.'+opts.pageClass);
		total = divs.length;
		
		var pageCounter = 0;
		divs.each(function(){
			var div = $(this);
			
			var visibility = opts.pageVisibleClass;
			switch(pageCounter) {
				case 0:
					visibility = opts.pageVisibleClass;
					break;
				default:
					visibility = opts.pageHiddenClass;
			}
			
			var page = createPage({
				content: div.html(),
				visibility: visibility,
				backgroundColor: getRandomColor(),
				width: opts.windowWidth,
				height: opts.windowHeight
			});
			page.appendTo(body);
			pages.push(page);
			pageCounter++;
		});
		
		events(opts);
	};
	
	var createPage = function(obj) {
		var div = $('<div />',{
			html: obj.content,
			class: 'pageSlider_page '+obj.visibility
		}).css({
			'background-color': obj.backgroundColor,
			'width': obj.width,
			'height': obj.height
		});
		
		return div;
	};
	
	var getRandomColor = function() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};
	
	var showNextPage = function() {
		moveAwayCurrent();
		
		current++;
		if(current > total - 1) {
			current = 0;
		}
		
		revealNext();
	};
	
	var moveAwayCurrent = function() {
		var top = -1 * opts.windowHeight;
		var me = $(pages[current]);
		me.css('z-index',2);
		me.animate({
			top: top
		},opts.slideDuration,'swing',function(){
			me.css({
				'z-index': 0,
				'top': '0px'
			});
			me.hide();
		});
	};
	
	var revealNext = function() {
		var me = $(pages[current]);
		me.css('z-index',1);
		me.show();
	};
	
	var events = function(opts) {
		$( window ).resize(function() {
			opts.windowWidth = window.innerWidth;
			opts.windowHeight = window.innerHeight;
		});
		
		$(window).click(showNextPage);
	};
	
	/** Default settings **/
	$.fn.pageSlider.defaults = {
		/** The default class name of each page **/
		pageClass: 'pageSliderPage',
		pageVisibleClass: 'pageSlider_visible',
		pageHiddenClass: 'pageSlider_hidden',
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight,
		slideDuration: 500
	};
 
}( jQuery ));