import { LookupEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface MovieCastForm {
    PersonId: LookupEditor;
    Character: StringEditor;
}

export class MovieCastForm extends PrefixedContext {
    static readonly formKey = 'MovieDB.MovieCast';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MovieCastForm.init)  {
            MovieCastForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;

            initFormType(MovieCastForm, [
                'PersonId', w0,
                'Character', w1
            ]);
        }
    }
}