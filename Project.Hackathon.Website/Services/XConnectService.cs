using Project.Heatmap.Events;
using Sitecore.XConnect;
using Sitecore.XConnect.Client;
using Sitecore.XConnect.Collection.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Project.Heatmap.Services
{
    public class XConnectService
    {

        public void GetAllEvents()
        {

            using (XConnectClient client = Sitecore.XConnect.Client.Configuration.SitecoreXConnectClientConfiguration.GetClient())
            {

                //var eventGuid = Guid.Parse("c91ce6eb-c346-447e-b65d-1f0f90b520e5"); // Replace with the ID of a real event definition item

                //var e = interaction.Events.OfType<Event>().Where(x => x.DefinitionId == eventGuid);
                
                try
                {
                    IAsyncQueryable<Sitecore.XConnect.Interaction> queryable = client.Interactions;

                    var enumerable = queryable.GetBatchEnumeratorSync(20);

                    while (enumerable.MoveNext())
                    {
                        var interactionBatch = enumerable.Current; // Batch of <= 20 interactions

                        foreach (var interaction in interactionBatch)
                        {
                            var all = interaction.Events;

                            var matchingGoals = interaction.Events.OfType<Goal>();
                        }
                    }

                }
                catch (XdbExecutionException ex)
                {
                    // Handle exception
                }

                try
                {
                    IAsyncQueryable<Sitecore.XConnect.Contact> queryable = client.Contacts;

                    var enumerable = queryable.GetBatchEnumeratorSync(20);

                    while (enumerable.MoveNext())
                    {
                        var contacts = enumerable.Current; // Batch of <= 20 interactions

                        foreach (var contact in contacts)
                        {
                            
                        }
                    }

                }
                catch (XdbExecutionException ex)
                {
                    // Handle exception
                }
            }


            


            using (XConnectClient client = Sitecore.XConnect.Client.Configuration.SitecoreXConnectClientConfiguration.GetClient())
            {

                



                //var interactions = client.Interactions.Take(50).ToSearchResults().Result;

                //var contacts = client.Contacts.Take(50).ToSearchResults().Result;


                //var queryable = client.Interactions.Where(c => c.Interactions.Any(x => x.StartDateTime > DateTime.UtcNow.AddDays(-30))).WithExpandOptions(new ContactExpandOptions("Personal"));

                //var results = queryable.ToSearchResults();
                //var contacts = results.Select(x => x.Item).ToList();
                //foreach (var contact in contacts)
                //{
                //    Console.WriteLine($&quot;
                //    { contact.Personal().FirstName}
                //    { contact.Personal().LastName}
                //    &quot;);
                //}
            }
        }

     
        public void GetInteractions()
        {

        }

        //private Contact GetContact(Guid contactId)
        //{
        //    using (Sitecore.XConnect.Client.XConnectClient client = Sitecore.XConnect.Client.Configuration.SitecoreXConnectClientConfiguration.GetClient())
        //    {
        //        var firstContact = new Sitecore.XConnect.Contact();
        //        client.AddContact(firstContact); // Extension found in Sitecore.XConnect.Operations

        //        // Submits the batch, which contains two operations
        //        client.Submit();

        //    }
                
        //}


    }
}