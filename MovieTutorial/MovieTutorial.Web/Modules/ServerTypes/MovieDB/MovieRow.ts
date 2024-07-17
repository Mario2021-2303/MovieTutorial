import { fieldsProxy } from "@serenity-is/corelib";
import { MovieCastRow } from "./MovieCastRow";
import { MovieKind } from "./MovieKind";

export interface MovieRow {
    MovieId?: number;
    Title?: string;
    Description?: string;
    Storyline?: string;
    Year?: number;
    ReleaseDate?: string;
    Runtime?: number;
    Kind?: MovieKind;
    GenreList?: number[];
    CastList?: MovieCastRow[];
    PrimaryImage?: string;
    GalleryImages?: string;
}

export abstract class MovieRow {
    static readonly idProperty = 'MovieId';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'MovieDB.Movie';
    static readonly deletePermission = 'AdministrationGeneral';
    static readonly insertPermission = 'AdministrationGeneral';
    static readonly readPermission = 'AdministrationGeneral';
    static readonly updatePermission = 'AdministrationGeneral';

    static readonly Fields = fieldsProxy<MovieRow>();
}