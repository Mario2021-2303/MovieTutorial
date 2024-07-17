import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { Gender } from "./Gender";
import { PersonRow } from "./PersonRow";

export interface PersonColumns {
    PersonId: Column<PersonRow>;
    FullName: Column<PersonRow>;
    BirthDate: Column<PersonRow>;
    BirthPlace: Column<PersonRow>;
    Height: Column<PersonRow>;
    Gender: Column<PersonRow>;
}

export class PersonColumns extends ColumnsBase<PersonRow> {
    static readonly columnsKey = 'MovieDB.Person';
    static readonly Fields = fieldsProxy<PersonColumns>();
}

[Gender]; // referenced types