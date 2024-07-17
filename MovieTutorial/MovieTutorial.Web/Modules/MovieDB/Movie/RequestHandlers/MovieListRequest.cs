namespace MovieTutorial.MovieDB;
using MyRequest = MovieTutorial.MovieDB.MovieListRequest;


public class MovieListRequest : ListRequest
{
    public List<int> Genres { get; set; }


}