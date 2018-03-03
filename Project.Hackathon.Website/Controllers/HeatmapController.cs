using Project.Heatmap.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Project.Heatmap.Controllers
{
    public class HeatmapController : Controller
    {
        private HeatmapService HeatmapService = new HeatmapService();

        [System.Web.Http.HttpGet]
        public HttpResponseMessage Get()
        {
            HeatmapService.GetEvents();

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage Push(int x, int y, int width)
        {
            HeatmapService.SaveDataPoint(x, y, width);
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }
    }
}