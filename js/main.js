function render() {
  let chartDiv = document.querySelector(".BarChart");
  console.log("--------adding data to chart")
  // Clear anything that might be in the div
  chartDiv.innerHTML = '';
  for (const [key, value] of Object.entries(apiData)) {
    let mag = value.properties.mag
    let newBar = document.createElement('div');
    let barHeight = mag*10;
    newBar.textContent = mag.toFixed(1);   
    newBar.className = "BarChart-bar";
    newBar.style.height = barHeight +'%';
    
    chartDiv.appendChild(newBar);
  }
}

let apiData = [];
async function doFetch() {
  console.log("getting data from API...");
  
  //value = document.querySelector("#search").value;
  api = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-05-19&minmagnitude=5&minlatitude=24.396308&minlongitude=-124.848974&maxlatitude=49.384358&maxlongitude=-66.885444";
  await fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log("fetch successful");
        console.log("this is data", data);
        apiData = data.features;
    });

  console.log("now render please");
  render();
}
