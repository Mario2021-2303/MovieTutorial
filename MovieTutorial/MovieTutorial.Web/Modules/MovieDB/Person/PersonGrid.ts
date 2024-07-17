import { PersonColumns, PersonRow, PersonService } from '@/ServerTypes/MovieDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonDialog } from './PersonDialog';

@Decorators.registerClass('MovieTutorial.MovieDB.PersonGrid')
export class PersonGrid extends EntityGrid<PersonRow> {
    protected getColumnsKey() { return PersonColumns.columnsKey; }
    protected getDialogType() { return PersonDialog; }
    protected getRowDefinition() { return PersonRow; }
    protected getService() { return PersonService.baseUrl; }
}