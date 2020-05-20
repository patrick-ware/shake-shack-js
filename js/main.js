function render() {
  console.log("render function invoked...")
}

let apiData = [];
function doFetch() {
  console.log("getting data from API...");
  
  //value = document.querySelector("#search").value;
  api = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-05-07&minmagnitude=5&minlatitude=24.396308&minlongitude=-124.848974&maxlatitude=49.384358&maxlongitude=-66.885444";
  fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log("fetch successful");
        console.log("this is data", data);
        apiData = data.features;
    });
}

function loopData() {
  // Looping through an object called "apiData"
  // console.log("data is", apiData)
  for (const [key, value] of Object.entries(apiData)) {
      console.log('this is mag', value.properties.mag);
      console.log('this is place', value.properties.place);
  }
} 
