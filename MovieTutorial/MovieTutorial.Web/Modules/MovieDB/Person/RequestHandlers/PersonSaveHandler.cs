using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.MovieDB.PersonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.MovieDB.PersonRow;

namespace MovieTutorial.MovieDB;

public interface IPersonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonSaveHandler
{
    public PersonSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}