import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY='5px' width='100%'>
      <HStack>
        <Skeleton height='32px' width='20%' borderRadius={8} />
        <SkeletonText width='70%' />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
