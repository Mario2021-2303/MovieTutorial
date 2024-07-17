using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.MovieDB.GenreRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.MovieDB.GenreRow;

namespace MovieTutorial.MovieDB;

public interface IGenreSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class GenreSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreSaveHandler
{
    public GenreSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}