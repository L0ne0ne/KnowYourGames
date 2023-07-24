import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import GetCroppedimageUrl from "../services/image-url";
import GenreListSkeleton from "./genreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;
  if (isLoading)
    return (
      <>
        {skeletons.map((skeleton) => (
          <GenreListSkeleton key={skeleton} />
        ))}
      </>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={2}>
              <Image
                objectFit="cover"
                key={genre.id}
                src={GetCroppedimageUrl(genre.image_background)}
                borderRadius={8}
                boxSize="35px"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
