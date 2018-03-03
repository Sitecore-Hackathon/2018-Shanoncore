const HEAT_MAP_POINT_KEY = 'heatMapPoints';
const DEV_MODE = false;
var points = [];

//Add in the heatmap js if the querystring calls for it
if(window.location.search.includes('heatmap')){
  //Pull in the heatmap script
  var heatMapScript = document.createElement('script');
  heatMapScript.onload = function () {
    showHeatMap();
  };
  heatMapScript.src = 'heatmap.min.js';
  document.head.appendChild(heatMapScript);
}

//global click event handler
document.addEventListener('click', function(event){
  var x = event.clientX,
      y = event.clientY,
      width = window.innerWidth,
      relativeUrl = window.location.pathname,
      points = [];

      //In dev mode, also save the values to a dataset in sessionStorage for testing
     if(DEV_MODE){
      var point = {
        x: x,
        y: y,
        value: 1
      };
      if(sessionStorage.getItem(HEAT_MAP_POINT_KEY)){
        points = JSON.parse(sessionStorage.getItem(HEAT_MAP_POINT_KEY));
      }
      points.push(point);
      sessionStorage.setItem(HEAT_MAP_POINT_KEY, JSON.stringify(points));
    }

    //But we mostly just send this pixel tracking request
    (new Image()).src = `api/sitecore/heatmap/push?relativeUrl=${encodeURIComponent(relativeUrl)}&x=${x}&y=${y}&width=${width}`;
}, false);

//Displays the heatmap overlay
function showHeatMap(){
  var heatmap = h337.create({
    container: document.documentElement
  });

  //Get the points first from the external source
  fetch(`api/sitecore/heatmap/get?relativeUrl${encodeURIComponent(window.location.pathname)}`).then(function(response){
    return response.json();
  }).then(function(pointData) {
    console.log(pointData);
    //Display the overlay with the points data from XDB
    heatmap.setData({
      min: 0,
      max: 1,
      data: pointData
    });
  });
}

// //Using a click on the logo to launch the heatmap overlay
// document.getElementsByClassName('header__logo')[0].addEventListener('click', function(e){
//   this.showHeatMap();
//   return false;
// });