import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDefaultReducers from './main-state.reducer';

export interface State {
  [fromDefaultReducers.mainStateFeatureKey]: fromDefaultReducers.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromDefaultReducers.mainStateFeatureKey]: fromDefaultReducers.reducer,
};
