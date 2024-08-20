export interface SearchPackageData {
  checkIn: string | null;
  checkOut: string | null;
  rooms: number | null;
  adults: number | null;
  children: number | null;
  maxPrice: number | null;
  minPrice: number | null;
  fromCity: string | null;
  fromCountry: string | null;
  toCity: string | null;
  toCountry: string | null;
  toCityId: string | null;
  fromCityId: string | null;
}
