using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MovieTutorial.MovieDB.Pages;

[PageAuthorize(typeof(PersonRow))]
public class PersonPage : Controller
{
    [Route("MovieDB/Person")]
    public ActionResult Index()
    {
        return this.GridPage("@/MovieDB/Person/PersonPage",
            PersonRow.Fields.PageTitle());
    }
}