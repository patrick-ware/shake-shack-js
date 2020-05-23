function render() {
  console.log("--------adding data to chart")
  // Fetch the div from the page
  let chartDiv = document.querySelector(".BarChart");


  // Clear anything that might be in the div
  chartDiv.innerHTML = '';

  // Loop through data and assign heights
  for (const [key, value] of Object.entries(apiData)) {
    let mag = value.properties.mag
    let place = value.properties.place
    let time = value.properties.time
    let newBar = document.createElement('div');
    let barHeight = mag*10;
    newBar.textContent = mag.toFixed(1);   
    newBar.className = "BarChart-bar";
    newBar.style.height = barHeight +'%';
    newBar.onclick = function() { alert(mag+" | "+place+" | "+time); };
    
    // Add bar to div
    chartDiv.appendChild(newBar);
  }
}

let apiData = [];
function doFetch() {
  console.log("--------getting data from API");
  
  // Get magnitude value from dropdown menu
  value = document.querySelector("#magnitude").value;
  console.log("magnitude selected:",value);

  // Get current date
  let dateObj = new Date();
  
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  
  // Create variable to pass into api
  let today = year + "-" + month + "-" + day;
  console.log("today is:", today)  

  // Assign api url with variables
 api = "https://earthquake.usgs.gov/fdsnws/event/1/query? format=geojson&starttime=2020-01-01&endtime=" + today +"&minmagnitude=" + value + "&minlatitude=24.396308&minlongitude=-124.848974&maxlatitude=49.384358&maxlongitude=-66.885444";
  
  // Fetch data from API before rendering  
  fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log("fetch successful");
        console.log("this is data", data);
        apiData = data.features;
        render();
    });
}
