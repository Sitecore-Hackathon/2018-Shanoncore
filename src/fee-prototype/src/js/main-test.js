var isHeatMapMode = false;

//Add in the heatmap js if the querystring calls for it
if(window.location.search.includes('heatmap')){
    console.log('There is a querystring param named "heatmap" in the querystring');
}


//Using a click on the logo to launch the heatmap overlay
function showHeatMap(){
    console.log('I was called from the experience editor!');
};