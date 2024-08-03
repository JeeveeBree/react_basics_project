import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";
import { useState } from "react";
//import { RecipeSearch } from "./components/RecipeSearch";
import { Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(RecipePage);

  return <RecipeListPage />;
};
