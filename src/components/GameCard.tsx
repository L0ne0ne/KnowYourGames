import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { GamesArray } from "../hooks/useGames";
import GetCroppedimageUrl from "../services/image-url";
import GameCardContainer from "./GameCArdContainer";
import GameScore from "./GameScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: GamesArray;
}

function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Card>
        <Image src={GetCroppedimageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" paddingBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((plat) => plat.platform)}
            />

            <GameScore metacritic={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}

export default GameCard;
