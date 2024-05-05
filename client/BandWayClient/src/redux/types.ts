import { SearchEventData } from "../models/SearchEventData";
import { SearchPackageData } from "../models/SearchPackageData";

export interface AppState {
    eventData: SearchEventData; 
    packageData: SearchPackageData;
  }
  
  export enum ActionTypes {
    SET_EVENT_DATA = 'SET_EVENT_DATA',
    SET_PACKAGE_DATA = 'SET_PACKAGE_DATA'
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
  
  export type AppAction = SetEventDataAction | SetPackageDataAction;
  