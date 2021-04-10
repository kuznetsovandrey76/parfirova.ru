import { createSelector } from 'reselect';

const state = (state) => state;

const literatureState = createSelector([state], (state) => state.literature);

export const currentSubject = createSelector([literatureState], (literatureState) => literatureState.subject);
