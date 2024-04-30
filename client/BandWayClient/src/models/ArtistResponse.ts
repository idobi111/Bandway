export interface ArtistResponse {
    artistName: string;
    artistId: string;
    spotifyLink: string;
    genres: string[];
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    popularity: number;
  }