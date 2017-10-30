/**
 * Using:http://api.jquery.com/jquery.getjson/
 */
var url="";
function submitFunct() {
 document.getElementById("features").innerHTML ="";
 var field=document.getElementById("subredditField");
 var nameOfSubreddit=field.value;
 url="http://www.reddit.com/r/"+nameOfSubreddit+"/top.json?jsonp=?";
 
 $.getJSON(
			url,
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
 
 document.getElementById("VISIT").href="https://www.reddit.com/r/"+nameOfSubreddit+"/top/"; 
 document.getElementById("VISIT").innerHTML="Visit r/"+nameOfSubreddit;
}
 
$(document).ready( function() {

	$.getJSON(
			"http://www.reddit.com/r/news/top.json?jsonp=?",
			function foo(data)
			{
				$.each(
						data.data.children.slice(0, 6),
						function (i, thread) {
							$("#featuresNews").append( 
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
