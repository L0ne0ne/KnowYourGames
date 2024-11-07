import {
  List,
  ListItem,
  Skeleton,
  SkeletonText
} from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <>
      <List>
        <Skeleton height="20px" />
        <ListItem>
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          {/* <SkeletonCircle size="10" /> */}
        </ListItem>
      </List>
    </>
  );
}

export default GenreListSkeleton;
