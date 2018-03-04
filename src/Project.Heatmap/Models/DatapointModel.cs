using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project.Hackathon.Website.Models
{
    public class DatapointModel
    {

        [JsonProperty(PropertyName = "x")]
        public int X { get; set; }
        [JsonProperty(PropertyName = "y")]
        public int Y { get; set; }
        [JsonProperty(PropertyName = "value")]
        public int Value { get; set; }
    }
}