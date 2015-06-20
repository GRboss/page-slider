(function( $ ) {
 
	$.fn.pageSlider = function( options ) {
		var body = $(document.body);
		
		/** Extend our default options with those provided **/
		var opts = $.extend( {}, $.fn.pageSlider.defaults, options );
		
		this.hide();
		
		var divs = this.find('.'+opts.pageClass);
		
		divs.each(function(){
			var div = $(this);
			var page = createPage(div.html());
			page.appendTo(body);
		});
	};
	
	var createPage = function(content) {
		var div = $('<div />',{
			html: content,
			class: 'pageSlider_page'
		});
		
		return div;
	};
	
	/** Default settings **/
	$.fn.pageSlider.defaults = {
		/** The default class name of each page **/
		pageClass: 'pageSliderPage'
	};
 
}( jQuery ));