import {
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { type RootState } from '../store/config/types';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
