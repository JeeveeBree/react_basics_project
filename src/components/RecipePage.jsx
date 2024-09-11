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
    <Center bg="gray.500" height="100%">
      <Box bg="white" boxShadow="dark-lg" maxW="80em" height="full" p={10}>
        <Flex>
          <Button color="white" bg="black" onClick={() => clickFn()}>
            {"< Back"}
          </Button>

          <Spacer />

          <Heading>R-App-cipe</Heading>
        </Flex>

        <AspectRatio maxH="20em" ratio={4 / 2}>
          <Image
            marginTop={2}
            src={recipe.image}
            borderRadius={"lg"}
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
            <Text fontWeight={"350"}>Ingredients:</Text>
            {recipe.ingredientLines && (
              <Stack spacing={1} mt={2}>
                {recipe.ingredientLines.map((ingredient, index) => (
                  <Text key={index} fontWeight={"350"}>
                    {ingredient}
                  </Text>
                ))}
              </Stack>
            )}
          </Box>

          <Spacer />

          <Box m={2} maxW="50%">
            <label>Diet:</label>
            <Flex wrap="wrap" mt={2}>
              {recipe.dietLabels.map((label, index) => (
                <Box
                  key={index}
                  bg="green.400"
                  color="white"
                  p={1}
                  m={1}
                  borderRadius="md"
                >
                  {label}
                </Box>
              ))}
            </Flex>
            <label>Health labels:</label>
            <Flex wrap="wrap" mt={2}>
              {recipe.healthLabels.map((label, index) => (
                <Box
                  key={index}
                  bg="orange.400"
                  color="white"
                  p={1}
                  m={1}
                  borderRadius="md"
                >
                  {label}
                </Box>
              ))}
            </Flex>
            <label>Cautions:</label>
            <Flex wrap="wrap" mt={2}>
              {recipe.cautions.map((label, index) => (
                <Box
                  key={index}
                  bg="red.500"
                  color="white"
                  p={1}
                  m={1}
                  borderRadius="md"
                >
                  {label}
                </Box>
              ))}
            </Flex>
            <label>Total nutrients:</label>
            {recipe.totalNutrients && (
              <Stack m={1} spacing={1}>
                {["ENERC_KCAL", "PROCNT", "FAT", "CHOCDF", "CHOLE", "NA"].map(
                  (nutrientKey, index) => {
                    const nutrient = recipe.totalNutrients[nutrientKey];
                    if (nutrient) {
                      return (
                        <Text key={index} fontWeight={"350"}>
                          {nutrient.label}: {Math.round(nutrient.quantity)}{" "}
                          {nutrient.unit}
                        </Text>
                      );
                    }
                    return null;
                  }
                )}
              </Stack>
            )}
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
