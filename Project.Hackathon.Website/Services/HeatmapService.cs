using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Heatmap.Services
{
    public class HeatmapService
    {
        public XConnectService XConnectService { get; set; }
        public HeatmapService()
        {
            XConnectService = new XConnectService();
        }

        // Write interaction

        // read interactions with filtering


    }
}