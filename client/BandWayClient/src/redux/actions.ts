import { SearchEventData } from '../models/SearchEventData';
import { ActionTypes, SetEventDataAction } from './types';

export const setEventData = (data: SearchEventData): SetEventDataAction => ({
  type: ActionTypes.SET_EVENT_DATA,
  payload: data
});
