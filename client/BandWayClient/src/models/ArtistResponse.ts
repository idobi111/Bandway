export interface ArtistResponse {
    artist_name: string;
    artist_id: string;
    spotify_link: string;
    genres: string[];
    images: { height: number; url: string; width: number }[];
    popularity: number;
}