/* eslint-disable @typescript-eslint/no-unused-vars */

import { Action, createReducer, on } from '@ngrx/store';

import * as MainAction from './main-action.actions';

export const mainStateFeatureKey = 'MainState';

export interface State {
  teste: string;
}

export const initialState: State = {
  teste: 'miguel',
};

export const reducer = createReducer(
  initialState,
  on(MainAction.loadMainActions, (state, action) => {
    return { ...state };
  })
);
