import {
  CardBody,
  Card,
  Box,
  Image,
  Text,
  AspectRatio,
  Stack,
  Heading,
  Flex,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe }) => {
  const filteredHealthLabels = (labels) => {
    const validLabels = ["Vegan", "Vegetarian"];
    return labels.filter((label) => validLabels.includes(label));
  };
  const healthLabels = filteredHealthLabels(recipe.healthLabels);

  return (
    <Card>
      <CardBody
        bg="white"
        borderRadius="lg"
        cursor="pointer"
        boxShadow="dark-lg"
      >
        <Box boxSize="sm">
          <AspectRatio maxW="400px" ratio={4 / 2}>
            <Image src={recipe.image} borderRadius={"lg"} alt={recipe.alt} />
          </AspectRatio>
          <Stack mt="1" spacing="1">
            <Text fontWeight={"350"}>{recipe.mealType}</Text>
            <Heading wrap="row" justifyContent="center" size="md">
              {recipe.label}
            </Heading>

            {recipe.dietLabels.length > 0 && (
              <Flex>
                {recipe.dietLabels.map((label, index) => (
                  <Box
                    key={index}
                    bg="green.200"
                    color="green.600"
                    p={1}
                    m={1}
                    borderRadius="md"
                  >
                    {label}
                  </Box>
                ))}
              </Flex>
            )}

            {healthLabels.length > 0 && (
              <Flex>
                {healthLabels.map((label, index) => (
                  <Box
                    key={index}
                    bg="orange.300"
                    color="orange.600"
                    p={1}
                    m={1}
                    boxShadow="2xl"
                    borderRadius="md"
                  >
                    {label}
                  </Box>
                ))}
              </Flex>
            )}

            {recipe.cautions.length > 0 && (
              <Flex>
                {recipe.cautions.map((caution, index) => (
                  <Box
                    key={index}
                    bg="red.300"
                    color="red.600"
                    p={1}
                    m={1}
                    borderRadius="md"
                  >
                    {caution}
                  </Box>
                ))}
              </Flex>
            )}
          </Stack>
        </Box>
      </CardBody>
    </Card>
  );
};
