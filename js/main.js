function render() {
  console.log("--------adding data to chart")
  // Fetch the div from the page
  let chartDiv = document.querySelector(".BarChart");


  // Clear anything that might be in the div
  chartDiv.innerHTML = '';

  // Loop through data and assign heights
  for (const [key, value] of Object.entries(apiData)) {
    let mag = value.properties.mag
    let newBar = document.createElement('div');
    let barHeight = mag*10;
    newBar.textContent = mag.toFixed(1);   
    newBar.className = "BarChart-bar";
    newBar.style.height = barHeight +'%';
    
    // Add bar to div
    chartDiv.appendChild(newBar);
  }
}

let apiData = [];
async function doFetch() {
  console.log("--------getting data from API");
  
  // Get magnitude value from dropdown menu
  value = document.querySelector("#magnitude").value;
  console.log("magnitude selected:",value);
  api = "https://earthquake.usgs.gov/fdsnws/event/1/query? format=geojson&starttime=2020-01-01&endtime=2020-05-19&minmagnitude=" + value + "&minlatitude=24.396308&minlongitude=-124.848974&maxlatitude=49.384358&maxlongitude=-66.885444";
  
  // Fetch data from API before rendering  
  await fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log("fetch successful");
        console.log("this is data", data);
        apiData = data.features;
    });

  // Render data from API in bar chart
  render();
}
