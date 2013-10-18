$(document).ready(function()
{
	var source = $("#search-template").html();
	var searchTemplate = Handlebars.compile(source);
	$results = $('#results')
   
	$('#searchbox').on('keyup',function(e)
	{
		if(e.keyCode === 13)
		{
			var val = $(this).val();
			$.get("/search",{searchVal:val},function(str)
			{
              console.log("string:"+str);
              //print this with jquery to website
              $results.html(searchTemplate(str));
			});
		}
	});
});
