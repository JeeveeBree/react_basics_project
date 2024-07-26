import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(RecipePage);

  return <RecipeListPage />;
};
