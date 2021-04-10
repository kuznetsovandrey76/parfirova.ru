// Actions ---------------------------------------------------------------------

const TOGGLE_FEATURES_TOUR = 'dash/literature/TOGGLE_FEATURES_TOUR';

export function setUser() {
  return {
    type: TOGGLE_FEATURES_TOUR,
  };
}

// Reducer ---------------------------------------------------------------------
const initialState = {
  subject: 'Literature',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_FEATURES_TOUR:
      return { ...state, isFetching: true };
    default:
      return state;
  }
}
