function render() {
  console.log("render function invoked...")
}

function doFetch() {
  console.log("getting data from API...")
  
//  value = document.querySelector("#search").value;
  api = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+value;
  fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log("fetch successful");
        console.log("this is data", data.data);
        apiGifData = data.data;
    });
}
