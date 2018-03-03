using Project.Heatmap.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Heatmap.Services
{
    public class HeatmapService
    {
        private XConnectService XConnectService { get; set; }
        private XdbService XdbService { get; set; }

        public HeatmapService()
        {
            XConnectService = new XConnectService();
            XdbService = new XdbService();
        }

        public void GetEvents()
        {
            XdbService.GetAllEvents();
        }

        public void SaveDataPoint(int x, int y, int width)
        {
            // Get contact from Sitecore tracker
            //var contact = XdbService.GetContact();

            //// If the contact is null, don't go any further, xdb tracker is probably off
            //if (contact == null)
            //    return;

            XdbService.AddEvent(x, y, width);           

        }

        // read interactions with filtering


    }
}