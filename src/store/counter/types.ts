export interface State {
  count: number;
}

export enum ActionTypes {
  INC_COUNT = 'INC_COUNT/counter',
  DEC_COUNT = 'DEC_COUNT/counter',
}

export interface IncCountActionType {
  type: ActionTypes.INC_COUNT;
  payload: number;
}

export interface DecCountActionType {
  type: ActionTypes.DEC_COUNT;
  payload: number;
}

export type Action = IncCountActionType | DecCountActionType;
