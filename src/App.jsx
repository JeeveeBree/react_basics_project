import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";

/*
export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

    return <RecipeListPage setRecipe={setSelectedRecipe}/>
};
*/

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

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return <RecipeListPage setRecipe={setSelectedRecipe} />;
};
