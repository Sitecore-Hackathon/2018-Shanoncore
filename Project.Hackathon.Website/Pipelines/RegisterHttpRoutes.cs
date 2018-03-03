using Sitecore.Pipelines;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Project.Hackathon.Website.Pipelines
{
    public class RegisterHttpRoutes
    {
        public void Process(PipelineArgs args)
        {
            GlobalConfiguration.Configure(Configure);
        }
        protected void Configure(HttpConfiguration configuration)
        {
            var routes = configuration.Routes;
            routes.MapHttpRoute("TrackAPi", "sitecore/api/track/", new
            {
                controller = "Track",
                action = "Get"
            });
        }
    }
}