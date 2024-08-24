import {
  Center,
  Flex,
  Text,
  Box,
  AspectRatio,
  Image,
  Heading,
  Stack,
} from "@chakra-ui/react";

export const RecipePage = (recipe, onClick) => {
  return (
    <Center>
      <Box boxSize="sm">
        <AspectRatio maxW="400px" ratio={4 / 2}>
          <Image
            //objectFit={"cover"}
            //maxW={{ base: "100%" }}
            src={recipe.image}
            borderRadius={"lg"}
            alt={recipe.alt}
          />
        </AspectRatio>

        <Stack mt="6" spacing="3">
          <Text fontWeight={"350"}>{recipe.mealType}</Text>
          <Heading size="md">{recipe.label}</Heading>
          <Text fontWeight={"350"} bg="purple.400">
            {healthLabels.length > 0 ? healthLabels.join("", "") : ""}
          </Text>
          <Text fontWeight={"350"} bg="green.400">
            {`${recipe.dietLabels}`}
          </Text>
          S<Text fontWeight={"350"}>{`Dish: ${recipe.dishType}`}</Text>
          <Text fontWeight={"350"} bg="red.500">
            {`Cautions: ${recipe.cautions}`}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
