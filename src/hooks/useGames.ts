import { GameQuery } from "../App";
import useData from "./useData";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface GamesArray {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: platform }[];
}

function useGame(gameQuery?: GameQuery) {
  return useData<GamesArray>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );
}

export default useGame;
