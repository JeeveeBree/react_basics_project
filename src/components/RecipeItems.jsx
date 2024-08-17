import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipe, onClick }) => {
  //console.log(recipe);
  if (!recipe) return null;
  return (
    <Flex
    //gap={16}
    //w={["full", "75%"]}
    //flexWrap="wrap"
    //flexDir={["column", "row"]}
    //justify="center"
    //alignItems="center"
    >
      {[recipe].map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} /*onClick={onClick} */ />
      ))}
    </Flex>
  );
};
