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
  Center,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickFn }) => {
  const filteredHealthLabels = (labels) => {
    const validLabels = ["Vegan", "Vegetarian"];
    return labels.filter((label) => validLabels.includes(label));
  };
  const healthLabels = filteredHealthLabels(recipe.healthLabels);

  return (
    <Card /*maxw="sm"*/>
      <CardBody
        bg="whiteAlpha.700"
        borderRadius="lg"
        cursor="pointer"
        boxShadow="dark-lg"
        //onClick={() => clickFn(recipe)}
      >
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
          {/* <Center> */}
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
          {/* </Center> */}
        </Box>
      </CardBody>
    </Card>
  );
};

/*

import { Center, Image, Text, WrapItem } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickFn }) => {
  return (
    <WrapItem>
      <Center gap={8} cursor={"pointer"} onClick={() => clickFn(recipe)}>
        <Image
          src={recipe.image}
          w={50}
          h={50}
          borderRadius={"xl"}
          alt={recipe.alt}
        />
        <Text fontWeight={"550"}>{recipe.label}</Text>
        <Text fontWeight={"350"}>{recipe.dietLabels}</Text>
        <Text fontWeight={"350"}>{recipe.cautions}</Text>
        <Text fontWeight={"350"}>{recipe.mealType}</Text>
        <Text fontWeight={"350"}>{recipe.dishType}</Text>
        <Text fontWeight={"350"}>{recipe.healthLabels}</Text>
        <Text fontWeight={"350"}></Text>
      </Center>
    </WrapItem>
  );
};


  const filteredHealthLabels = (labels) => {
    return labels.filter((label) => {
      const labels = label.data.hits.healthLabels || [];
      console.log([data.hits.healthLabels]);
      return labels.includes("Vegan") || labels.includes("Vegetarian");
    });
  };


*/
/*
const {filteredHealthLabels && (
  <Badges list={filteredHealthLabels} />
)}

label === 'Vegan' || label === 'Vegetarian'
recipe.healthLabels.filter

*/
