
// Select the DOM element that we wish to append to
var articleContainer = $('#article-container')
var loader = $('.loader')
loader.hide()


// Changing sections 
function changeSection(event) {
	console.log(event.value)
	// Set the container to have blank contents as we're requesting new data
	articleContainer.html('');
	loadData(event.value)
}

// load data from the Api
function loadData(section) {
	loader.show()
	var url = `https://api.nytimes.com/svc/topstories/v2/${section}.json`;
url += '?' + $.param({
  'api-key': "0751ffff01d7a70710354972fa0ad4a9"
});

$.ajax({
  url: url,
  method: 'GET',
  dataType: 'json'
}).done(function(data) {
  loader.hide()
	// append the result
	// loop through result
	data.results.forEach(result => {

		var item = `<div>
			<a href="${result.url}">
			<div class="article" style= "background: url(${result.multimedia[0] && result.multimedia[0].url})"/>
			<p>${result.abstract}</p>
			</div>
			</a>
			</div>`
			
		articleContainer.append(item);
	})

}).fail(function(err) {
  throw err;
  loader.hide()
});
}

loadData('sports')





