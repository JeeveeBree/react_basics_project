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

import { Center, Image, Text, WrapItem } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickFn }) => {
  const filteredHealthLabels = (labels) => {
    const validLabels = ["Vegan", "Vegetarian"];
    return labels.filter((label) => validLabels.includes(label));
  };
  const healthLabels = filteredHealthLabels(recipe.healthLabels);

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
        <Text fontWeight={"350"}>
          {healthLabels.length > 0 ? healthLabels.join("", "") : ""}
        </Text>
      </Center>
    </WrapItem>
  );
};
