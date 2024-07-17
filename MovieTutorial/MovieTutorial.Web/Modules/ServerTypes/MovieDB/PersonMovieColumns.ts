import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MovieCastRow } from "./MovieCastRow";

export interface PersonMovieColumns {
    MovieTitle: Column<MovieCastRow>;
    Character: Column<MovieCastRow>;
}

export class PersonMovieColumns extends ColumnsBase<MovieCastRow> {
    static readonly columnsKey = 'MovieTutorial.MovieDB.Columns.PersonMovieColumns';
    static readonly Fields = fieldsProxy<PersonMovieColumns>();
}