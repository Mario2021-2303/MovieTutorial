using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace MovieTutorial.MovieDB.Columns;

[ColumnsScript("MovieDB.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int PersonId { get; set; }
    [EditLink]
   // public string FirstName { get; set; }
    //Si explota es por esto:
   // public string LastName { get; set; }

    public string FullName { get; set; }
    public DateTime BirthDate { get; set; }
    public string BirthPlace { get; set; }
    [DisplayName("Height (Cm)"), Width(150)]
    public int Height { get; set; }

    public Gender Gender{ get; set; }
  
}