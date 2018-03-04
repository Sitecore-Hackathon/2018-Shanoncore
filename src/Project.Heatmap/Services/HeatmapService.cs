using Project.Hackathon.Website.DataLayer;
using Project.Hackathon.Website.Models;
using Project.Hackathon.Website.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Heatmap.Services
{
    public class HeatmapService
    {
        private GenericRepository<HeatmapDatapoint> HeatmapRepo { get; set; }

        public HeatmapService()
        {
            HeatmapRepo = new GenericRepository<HeatmapDatapoint>();
        }

        public List<DatapointModel> GetDatapoints(string relativeUrl)
        {
            var result = new List<DatapointModel>();

            var rawDatapoints = HeatmapRepo.GetAll(h => h.RelativeUrl == relativeUrl);

            foreach(var point in rawDatapoints)
            {
                result.Add(new DatapointModel()
                {
                    X = point.X,
                    Y = point.Y,
                    Value = 1
                });
            }

            return result;
        }

        public void SaveDatapoint(string relativeUrl, int x, int y, int width)
        {
            var heatmapDatapoint = new HeatmapDatapoint()
            {
                DateTime = DateTime.UtcNow,
                RelativeUrl = relativeUrl,
                X = x,
                Y = y,
                Width = width
            };
            HeatmapRepo.Insert(heatmapDatapoint);
        }


    }
}