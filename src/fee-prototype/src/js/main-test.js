var isHeatMapMode = false;

//Add in the heatmap js if the querystring calls for it
if(window.location.search.includes('heatmap')){
    console.log('There is a querystring param named "heatmap" in the')
}


//Using a click on the logo to launch the heatmap overlay
function showHeatMap(){
  var heatmap = h337.create({
    container: document.documentElement
  });

  heatmap.setData({
    min: 0,
    max: 1,
    data: [{"x":322,"y":583,"value":1},{"x":426,"y":602,"value":1},{"x":370,"y":341,"value":1},{"x":242,"y":545,"value":1},{"x":266,"y":550,"value":1},{"x":421,"y":576,"value":1},{"x":422,"y":567,"value":1},{"x":403,"y":342,"value":1},{"x":384,"y":300,"value":1},{"x":384,"y":303,"value":1},{"x":297,"y":557,"value":1},{"x":417,"y":603,"value":1},{"x":335,"y":221,"value":1},{"x":41,"y":43,"value":1},{"x":463,"y":160,"value":1},{"x":464,"y":160,"value":1},{"x":464,"y":159,"value":1},{"x":464,"y":159,"value":1},{"x":464,"y":159,"value":1},{"x":464,"y":159,"value":1},{"x":464,"y":159,"value":1},{"x":464,"y":159,"value":1},{"x":644,"y":165,"value":1},{"x":644,"y":165,"value":1},{"x":644,"y":165,"value":1},{"x":644,"y":165,"value":1},{"x":644,"y":165,"value":1},{"x":644,"y":165,"value":1},{"x":570,"y":225,"value":1},{"x":570,"y":225,"value":1},{"x":570,"y":225,"value":1},{"x":570,"y":225,"value":1},{"x":570,"y":225,"value":1},{"x":570,"y":225,"value":1},{"x":459,"y":229,"value":1},{"x":470,"y":242,"value":1},{"x":472,"y":250,"value":1},{"x":483,"y":260,"value":1},{"x":492,"y":269,"value":1},{"x":500,"y":274,"value":1},{"x":515,"y":279,"value":1},{"x":533,"y":283,"value":1},{"x":549,"y":287,"value":1},{"x":591,"y":292,"value":1},{"x":603,"y":291,"value":1},{"x":630,"y":289,"value":1},{"x":638,"y":286,"value":1},{"x":654,"y":276,"value":1},{"x":670,"y":264,"value":1},{"x":685,"y":249,"value":1},{"x":690,"y":240,"value":1},{"x":692,"y":235,"value":1},{"x":701,"y":223,"value":1},{"x":703,"y":221,"value":1},{"x":45,"y":46,"value":1},{"x":62,"y":62,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":304,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":195,"y":303,"value":1},{"x":43,"y":46,"value":1}]
  });

  return false;
};