import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

    return <RecipeListPage setRecipe={setSelectedRecipe/>;
};

/*

<RecipesPage setRecipe={setSelectedRecipe} />
const [selectedRecipe, setSelectedRecipe] = useState();
export const RecipeListPage = () => {
export const RecipeListPage = ({setRecipe}) => {

import { data } from '../utils/data';
const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits);
<SearchRecipes setResults={setSelectedRecipeList} />

<RecipesPage setRecipe={setSelectedRecipe} />
export const RecipeListPage = ({setRecipe}) => {

*/


App.jsx:
export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return <RecipeListPage setRecipe={setSelectedRecipe} />;
};
