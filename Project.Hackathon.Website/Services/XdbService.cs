using Project.Heatmap.Events;
using Sitecore.Analytics;
using Sitecore.Analytics.Data;
using Sitecore.Analytics.Tracking;
using Sitecore.DependencyInjection;
using Sitecore.Marketing.Definitions;
using Sitecore.Marketing.Definitions.PageEvents;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;


namespace Project.Heatmap
{
    public class XdbService
    {
        public Guid GetContactID()
        {
            var contactCookie = new Sitecore.Analytics.Web.ContactKeyCookie();
            return contactCookie.ContactId;
        }

        public Contact GetContact()
        {
            if (Sitecore.Analytics.Tracker.Current != null)
            {
                var contact = Sitecore.Analytics.Tracker.Current.Contact;
                return contact;
            }
            return null;
        }

        public void GetAllEvents()
        {
            var events = Tracker.MarketingDefinitions.PageEvents;
           
        } 

        

        public void AddEvent(int x, int y, int width)
        {
            PageEventDefinitionManager manager = (PageEventDefinitionManager)ServiceLocator.ServiceProvider.GetDefinitionManagerFactory().GetDefinitionManager<IPageEventDefinition>();

            CultureInfo eventCulture = new CultureInfo("en");
            var pageEventDefinition = manager.GetByAlias("Heatmap", eventCulture);

            if(pageEventDefinition == null)
            {
                // define
                Guid pageEventId = Guid.NewGuid(); // Page event ID
                CultureInfo pageEventCulture = new CultureInfo("en"); // Page event culture
                string pageEventName = "Heatmap"; // Page event name
                DateTime creationDate = DateTime.UtcNow; // Page event creation date
                string createdBy = "sitecore\admin"; // Page event creator

                pageEventDefinition = new PageEventDefinition(pageEventId, "Heatmap", pageEventCulture, pageEventName, creationDate, createdBy);

                pageEventDefinition.ShowInXfileAsLatestEvent = true;
                pageEventDefinition.ShowInXfileEventsList = true;
                pageEventDefinition.EngagementValuePoints = 20;

                //save
                ServiceLocator.ServiceProvider.GetDefinitionManagerFactory().GetDefinitionManager<IPageEventDefinition>();
                
                manager.SaveAsync(pageEventDefinition, true);
            }


            //pageEventDefinition.
            //Sitecore.Analytics.Tracker.Current.CurrentPage.RegisterPageEvent(pageEventDefinition);


            //var goalId = "63B813A6-C209-4870-A4A8-7CB07BBAB266"; // ID of goal
            //var goalDefinition = Sitecore.Analytics.Tracker.MarketingDefinitions.Goals[goalId];
            //Sitecore.Analytics.Tracker.Current.CurrentPage.RegisterGoal(goalDefinition);

            PageEventData pageEvent = new PageEventData("Heatmap")
            {
                Text = "test",
                Data = "test data"
            };
            Sitecore.Analytics.Tracker.Current.CurrentPage.Register(pageEvent);


            
            var pageEventData = new PageEventData(pageEventDefinition.Alias, pageEventDefinition.Id)
            {
                Data = "xyw",
                Text = "Sitecore installation guide", // Not mandatory
            };
            Tracker.Current.CurrentPage.Register(pageEventData);


            

            


            //var ev = Sitecore.Analytics.Tracker.MarketingDefinitions.PageEvents[HeatmapEvent.HeatmapId];


            //if (ev != null)
            //{
            //    var pageData = new Sitecore.Analytics.Data.PageEventData(ev.Alias, ev.Id);

            //    pageData.CustomValues.Add("X", x);
            //    pageData.CustomValues.Add("Y", y);
            //    pageData.CustomValues.Add("Width", width);

            //    Sitecore.Analytics.Tracker.Current.CurrentPage.Register(pageData);
            //}
        }

    }
}