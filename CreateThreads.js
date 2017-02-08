/**
 * Using:http://api.jquery.com/jquery.getjson/
 */


$(document).ready( function() {

	$.getJSON(
			"http://www.reddit.com/r/news/top.json?jsonp=?",
			function foo(data)
			{
				$.each(
						data.data.children.slice(0, 6),
						function (i, thread) {
							$("#features").append( 
									'<section>'+
									'<a href='+thread.data.url+' target="_blank"><span class="icon major fa-desktop"></span></a>'+
									'<h3 >'+thread.data.title+'</h3>'+
									'</section>'
							);
							console.log(thread.data.url);
						}
				)
			}
	)
});