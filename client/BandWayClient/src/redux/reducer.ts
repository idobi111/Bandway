import { AppState, AppAction, ActionTypes } from './types';
import { SearchEventData } from '../models/SearchEventData';

const defaultEventData: SearchEventData = {
  performer: null,
  toCity: null,
  toCountry: null,
  fromCity: null,
  fromCountry: null,
  toCityId: null,
  fromCityId: null,
};

const initialState: AppState = {
  eventData: defaultEventData
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.SET_EVENT_DATA:
      return {
        ...state,
        eventData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
