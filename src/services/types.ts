export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview?: string; 
  director?: string;
  providers?: { provider_name: string; logo_url: string; }[];
}