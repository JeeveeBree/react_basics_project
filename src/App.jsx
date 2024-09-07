import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage setRecipe={setSelectedRecipe} />
      )}
    </Box>
  );
};
