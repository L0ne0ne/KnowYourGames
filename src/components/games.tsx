import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCArdContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function Games({ gameQuery }: Props) {
  const { data, error, isLoading } = useGame(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text> {error} </Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="5"
        padding="10"
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Games;
