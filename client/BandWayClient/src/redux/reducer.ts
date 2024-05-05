import { AppState, AppAction, ActionTypes } from './types';
import { SearchEventData } from '../models/SearchEventData';
import { SearchPackageData } from '../models/SearchPackageData';

const defaultEventData: SearchEventData = {
  performer: null,
  toCity: null,
  toCountry: null,
  fromCity: null,
  fromCountry: null,
  toCityId: null,
  fromCityId: null,
  venue: null,
  checkIn: null
};


const defaultPackageData: SearchPackageData = {
  checkIn: null,
  checkOut: null,
  rooms: null,
  adults:  null,
  children:  null,
  maxPrice: null,
  minPrice:  null,
  fromCity:  null,
  fromCountry:  null,
  toCity: null,
  toCountry: null
};

const initialState: AppState = {
  eventData: defaultEventData,
  packageData: defaultPackageData
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.SET_EVENT_DATA:
      return {
        ...state,
        eventData: action.payload
      };
      case ActionTypes.SET_PACKAGE_DATA:
      return {
        ...state,
        packageData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
