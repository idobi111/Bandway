import { SearchEventData } from "../models/SearchEventData";

export interface AppState {
    eventData: SearchEventData; 
  }
  
  export enum ActionTypes {
    SET_EVENT_DATA = 'SET_EVENT_DATA'
  }
  
  export interface SetEventDataAction {
    type: ActionTypes.SET_EVENT_DATA;
    payload: SearchEventData; 
    [key: string]: any;
  }
  
  export type AppAction = SetEventDataAction;
  