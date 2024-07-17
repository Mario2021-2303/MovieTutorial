using MyRequest = MovieTutorial.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.Administration.UserRow>;
using MyRow = MovieTutorial.Administration.UserRow;

namespace MovieTutorial.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}