import { SearchEventData } from '../models/SearchEventData';
import { SearchPackageData } from '../models/SearchPackageData';
import {ActionTypes, SetEventDataAction, SetPackageDataAction, SetUserDataAction} from './types';
import {LoginResponse} from "../models/LoginResponse";

export const setEventData = (data: SearchEventData): SetEventDataAction => ({
  type: ActionTypes.SET_EVENT_DATA,
  payload: data
});

export const setPackageData = (data: SearchPackageData): SetPackageDataAction => ({
  type: ActionTypes.SET_PACKAGE_DATA,
  payload: data
});

export const setUserData = (data: LoginResponse): SetUserDataAction => ({
  type: ActionTypes.SET_USER_DATA,
  payload: data
});
