(function( $ ) {
 
	$.fn.pageSlider = function( options ) {
		var body = $(document.body);
		
		/** Extend our default options with those provided **/
		var opts = $.extend( {}, $.fn.pageSlider.defaults, options );
		
		this.hide();
		
		var divs = this.find('.'+opts.pageClass);
		
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
				backgroundColor: getRandomColor()
			});
			page.appendTo(body);
			pageCounter++;
		});
		
		events(opts);
	};
	
	var createPage = function(obj) {
		var div = $('<div />',{
			html: obj.content,
			class: 'pageSlider_page '+obj.visibility
		}).css({
			'background-color': obj.backgroundColor
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
	
	var events = function(opts) {
		$( window ).resize(function() {
			opts.windowWidth = window.innerWidth;
			opts.windowHeight = window.innerHeight;
		});
	};
	
	/** Default settings **/
	$.fn.pageSlider.defaults = {
		/** The default class name of each page **/
		pageClass: 'pageSliderPage',
		pageVisibleClass: 'pageSlider_visible',
		pageHiddenClass: 'pageSlider_hidden',
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight
	};
 
}( jQuery ));