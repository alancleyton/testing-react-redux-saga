import { type Action, ActionTypes } from './types';

export const incrementCounter = (inc: number): Action => ({
  type: ActionTypes.INC_COUNT,
  payload: inc,
});

export const decrementCounter = (dec: number): Action => ({
  type: ActionTypes.DEC_COUNT,
  payload: dec,
});
