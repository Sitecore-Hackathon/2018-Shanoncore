using Newtonsoft.Json;
using Project.Heatmap.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Project.Heatmap.Controllers
{
    public class HeatmapController : Controller
    {
        private HeatmapService HeatmapService = new HeatmapService();

        [System.Web.Http.HttpGet]
        public string Get(string relativeUrl)
        {
            var datapoints = HeatmapService.GetDatapoints(relativeUrl);

            var jsonContent = JsonConvert.SerializeObject(datapoints);

            return jsonContent;
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage Push(string relativeUrl, int x, int y, int width)
        {
            HeatmapService.SaveDatapoint(relativeUrl, x, y, width);
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }
    }
}