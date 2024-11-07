import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { GameHeading } from "./components/GameHeading";
import PlatformSelector from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";
import Games from "./components/games";
import GenreList from "./components/genreList";
import NavBar from "./components/navBar";
import { platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <VStack paddingBottom={5}>
            <GameHeading gameQuery={gameQuery} />
          </VStack>

          <HStack spacing={5} paddingLeft={10} marginBottom={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />

            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>

          <Games gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
