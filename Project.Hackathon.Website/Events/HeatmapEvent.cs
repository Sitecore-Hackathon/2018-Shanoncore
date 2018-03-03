using Sitecore.XConnect;
using System;

namespace Project.Heatmap.Events
{
    public class HeatmapEvent : Event
    {
        public static Guid HeatmapId = Guid.Parse("{A386C5F2-F7F1-4980-AEDE-72A5B84B7F45}");
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }

        public HeatmapEvent(DateTime timestamp) : base(HeatmapId, timestamp) { }
    }
}