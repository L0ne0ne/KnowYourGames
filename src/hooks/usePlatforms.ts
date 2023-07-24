import useData from "./useData";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatform() {
  return useData<platform>("https://api.rawg.io/api/platforms/lists/parents");
}

export default usePlatform;
