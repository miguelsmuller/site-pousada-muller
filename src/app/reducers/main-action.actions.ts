import { createAction, props } from '@ngrx/store';

export const loadMainActions = createAction('[MainAction] Load MainActions');
export const loadMainActionsSuccess = createAction('[MainAction] Load MainActions Success', props<{ data: any }>());
export const loadMainActionsFailure = createAction('[MainAction] Load MainActions Failure', props<{ error: any }>());
