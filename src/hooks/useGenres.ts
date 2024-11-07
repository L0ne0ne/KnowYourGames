import genre from "../data/genre";

export interface Genre {
  id: number;
  // genre name
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

function useGenre() {
  return { data: genre, isLoading: false, error: null };
}
export default useGenre;
