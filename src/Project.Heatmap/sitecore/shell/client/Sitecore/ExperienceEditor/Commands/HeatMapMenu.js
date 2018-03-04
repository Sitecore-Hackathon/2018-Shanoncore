define(["sitecore"], function (Sitecore) {
  Sitecore.Commands.HeatMap =
  {
    canExecute: function (context) {
      // Determines whether command is disabled or enabled.
      return true;
    },

    execute: function (context) {	
		window.parent.location.href += "&heatmap";
    }
  };
})