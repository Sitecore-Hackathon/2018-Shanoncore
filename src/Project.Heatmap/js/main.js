const HEAT_MAP_POINT_KEY = 'heatMapPoints';
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
      points = [];

      //In dev mode, also save the values to a dataset in sessionStorage
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

    //But we mostly just send this pixel tracking request
    (new Image()).src = 'trackingpixel/pixel.png?x=' + x + '&y=' + y + '&width=' + width;
}, false);

//Displays the heatmap overlay
function showHeatMap(){
  var heatmap = h337.create({
    container: document.documentElement
  });

  //Get the points first from the external source
  fetch('datapoints.js').then(function(response){
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

