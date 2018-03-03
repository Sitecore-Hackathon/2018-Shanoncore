using Sitecore.Analytics.Model;
using Sitecore.Analytics.XConnect.DataAccess.Pipelines.ConvertToXConnectEventPipeline;
using Sitecore.Framework.Conditions;
using Sitecore.XConnect;
using System;

namespace Project.Heatmap.Events
{
    public class ConvertHeatmapEvent : ConvertPageEventDataToEventBase
    {
        protected override bool CanProcessPageEventData(PageEventData pageEventData)
        {
            Condition.Requires(pageEventData, nameof(pageEventData)).IsNotNull();

            if (pageEventData.PageEventDefinitionId == HeatmapEvent.HeatmapId)
            {
                return true;
            }

            return false;
        }

        // Create new HeatmapEvent from pageEventData
        // All base Event properties are mapped automatically
        protected override Event CreateEvent(PageEventData pageEventData)
        {
            HeatmapEvent heatmapEvent = new HeatmapEvent(pageEventData.DateTime);

            // Store 'X' as a constant somewhere and use when triggering event
            heatmapEvent.X = Convert.ToInt32(pageEventData.CustomValues["X"]);
            heatmapEvent.Y = Convert.ToInt32(pageEventData.CustomValues["Y"]);
            heatmapEvent.Width = Convert.ToInt32(pageEventData.CustomValues["Width"]);

            return heatmapEvent;
        }
    }
}