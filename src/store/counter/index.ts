import { type State, type Action, ActionTypes } from './types';

export const INITIAL_SATATE: State = {
  count: 50,
};

export default (state: State = INITIAL_SATATE, action: Action): State => {
  switch (action.type) {
    case ActionTypes.INC_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ActionTypes.DEC_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
