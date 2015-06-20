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
				visibility: visibility
			});
			page.appendTo(body);
			pageCounter++;
		});
	};
	
	var createPage = function(obj) {
		var div = $('<div />',{
			html: obj.content,
			class: 'pageSlider_page '+obj.visibility
		});
		
		return div;
	};
	
	/** Default settings **/
	$.fn.pageSlider.defaults = {
		/** The default class name of each page **/
		pageClass: 'pageSliderPage',
		pageVisibleClass: 'pageSlider_visible',
		pageHiddenClass: 'pageSlider_hidden'
	};
 
}( jQuery ));