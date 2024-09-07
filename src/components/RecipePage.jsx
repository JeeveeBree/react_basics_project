import {
  Center,
  Flex,
  Text,
  Box,
  AspectRatio,
  Image,
  Heading,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center bg="blue.500" height="100vh">
      <Flex>
        <Box bg="white" maxW="80em" height="100vh">
          <Flex>
            <Button color="black" m={1} onClick={() => clickFn()}>
              {"< Back"}
            </Button>
            <Spacer />
            <Heading m={2} alignItems="Center">
              R-App-cipe
            </Heading>
            <Spacer />
          </Flex>
          <AspectRatio maxH="20em" ratio={4 / 2}>
            <Image
              //objectFit={"cover"}
              //maxW={{ base: "100%" }}
              src={recipe.image}
              // borderRadius={"lg"}
              alt={recipe.alt}
            />
          </AspectRatio>
          <Flex>
            <Box m={2} maxW="50%">
              <Text fontWeight={"350"}>{recipe.mealType}</Text>
              <Heading size="md">{recipe.label}</Heading>

              <Text
                fontWeight={"350"}
              >{`Total cooking time: ${recipe.totalTime} minutes`}</Text>
              <Text fontWeight={"350"}>{`Servings: ${recipe.yield}`}</Text>
              <Text
                fontWeight={"350"}
              >{`Ingredients: ${recipe.ingredientLines}`}</Text>
            </Box>

            <Box m={2} maxW="50%">
              {/* <Stack mt="4" spacing="1"> */}
              <label>Health labels:</label>
              <Text fontWeight={"350"} bg="purple.400">
                {recipe.healthLabels}
              </Text>
              <label>Diet:</label>
              <Text fontWeight={"350"} bg="green.400">
                {recipe.dietLabels}
              </Text>
              {/* <Text fontWeight={"350"}>{`Dish: ${recipe.dishType}`}</Text> */}
              <label>Cautions:</label>
              <Text fontWeight={"350"} bg="red.500">
                {recipe.cautions}
              </Text>
              <label>Total nutrients:</label>
              <Text fontWeight={"350"}>{`${recipe.totalNutrients}`}</Text>
              {/* </Stack> */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Center>
  );
};
