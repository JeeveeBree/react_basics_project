import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipe, onClick }) => {
  return (
    <Flex>
      <RecipeItem key={recipe.id} recipe={recipe} onClick={onClick} />
    </Flex>
  );
};
