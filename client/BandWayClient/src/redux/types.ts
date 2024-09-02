import { SearchEventData } from "../models/SearchEventData";
import { SearchPackageData } from "../models/SearchPackageData";
import {LoginResponse} from "../models/LoginResponse";

export interface AppState {
    eventData: SearchEventData; 
    packageData: SearchPackageData;
    userData: LoginResponse;
  }
  
  export enum ActionTypes {
    SET_EVENT_DATA = 'SET_EVENT_DATA',
    SET_PACKAGE_DATA = 'SET_PACKAGE_DATA',
    SET_USER_DATA = 'SET_USER_DATA'
  }
  
  export interface SetEventDataAction {
    type: ActionTypes.SET_EVENT_DATA;
    payload: SearchEventData; 
    [key: string]: any;
  }

  export interface SetPackageDataAction {
    type: ActionTypes.SET_PACKAGE_DATA;
    payload: SearchPackageData; 
    [key: string]: any;
  }

  export interface SetUserDataAction {
    type: ActionTypes.SET_USER_DATA;
    payload: LoginResponse;
    [key: string]: any;
  }
  
  export type AppAction = SetEventDataAction | SetPackageDataAction | SetUserDataAction;
  