export interface EventResponse {
  id: string;
  performer: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketUrl: string;
  images: string[];
  externalLinks: {
    youtube: { url: string }[];
    twitter: { url: string }[];
    itunes: { url: string }[];
    wiki: { url: string }[];
    facebook: { url: string }[];
    spotify: { url: string }[];
    musicbrainz: { url: string }[];
    instagram: { url: string }[];
    homepage: { url: string }[];
  };
  minPrice: number;
  maxPrice: number;
}