import { SearchEventData } from "../models/SearchEventData";


export class EventService {

    public createSearchQueryParams(searchEventData: SearchEventData): string {
        const performerQueryParam = `performer=${searchEventData.performer}`;
        const fromCityQueryParam = `fromCity=${searchEventData.fromCity}`;
        const fromCountryQueryParam = `fromCountry=${searchEventData.fromCountry}`;
        const toCityQueryParam = `toCity=${searchEventData.toCity}`;
        const toCountryQueryParam = `toCountry=${searchEventData.toCountry}`;
        const fromCityIdQueryParam = `fromCityId=${searchEventData.fromCityId}`;
        const toCityIdQueryParam = `toCityId=${searchEventData.toCityId}`;
        return ([performerQueryParam, fromCityQueryParam, fromCountryQueryParam, toCityQueryParam, toCountryQueryParam, fromCityIdQueryParam, toCityIdQueryParam].filter(param => !!param).join('&'));
    }

    public getSearchQueryParams(queryParams: URLSearchParams): SearchEventData {

        const searchEventData: SearchEventData = {
            performer: queryParams.get('performer'),
            toCity: queryParams.get('toCity'),
            toCountry: queryParams.get('toCountry'),
            fromCity: queryParams.get('fromCity'),
            fromCountry: queryParams.get('fromCountry'),
            toCityId: queryParams.get('toCityId'),
            fromCityId: queryParams.get('fromCityId')
        }
        return searchEventData;
    }




}




