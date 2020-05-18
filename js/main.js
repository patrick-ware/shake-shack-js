function render() {
  console.log("render function invoked...")
}

function doFetch() {
  console.log("getting data from API...")
  
//  value = document.querySelector("#search").value;
  api = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
  fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log("fetch successful");
        console.log("this is data", data.data);
        apiGifData = data.data;
    });
}
