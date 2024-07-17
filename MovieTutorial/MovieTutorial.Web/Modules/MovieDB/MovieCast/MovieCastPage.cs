using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MovieTutorial.MovieDB.Pages;

[PageAuthorize(typeof(MovieCastRow))]
public class MovieCastPage : Controller
{
    [Route("MovieDB/MovieCast")]
    public ActionResult Index()
    {
        return this.GridPage("@/MovieDB/MovieCast/MovieCastPage",
            MovieCastRow.Fields.PageTitle());
    }
}