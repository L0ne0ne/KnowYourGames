import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function GameScore({ metacritic }: Props) {
  return (
    <Badge
      fontSize="15"
      paddingX={3}
      borderRadius={6}
      colorScheme={metacritic >= 65 ? "green" : "red"}
    >
      {metacritic}
    </Badge>
  );
}

export default GameScore;
