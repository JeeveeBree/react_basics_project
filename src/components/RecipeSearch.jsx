import { useState } from "react";
import { TextInput } from "./ui/Textinput";
import { RecipeItems } from "./RecipeItems";
import { data } from "../utils/data";

export const RecipeSearch = ({ setResults }) => {
  const [searchField, setSearchField] = useState("");
  const [selectedHealthLabel, setSelectedHealthLabel] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleHealthLabelChange = (event) => {
    setSelectedHealthLabel(event.target.value);
  };

  const matchedRecipes = Array.isArray(data.hits)
    ? data.hits.filter((recipe) => {
        return (
          recipe.label &&
          recipe.label.toLowerCase().includes(searchField.toLowerCase())
        );
      })
    : [];

  /*
  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.label.toLowercase().includes(searchField.toLowerCase());
  });
*/
  /*
  const matchedRecipes = data.filter((label) => {
    return label.toLowerCase().includes(searchField.toLowerCase());
  });
*/

  return (
    <>
      <label>Search for recipes or health labels:</label>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
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

RecipeSearch.jsx;
export const RecipeSearch = ({ setResults }) => {
  const handleChange = (event) => {
    const matchedRecipes = ["hallo", "test"];

    console.log("event.target.value:", event.target.value);
    console.log("matchedRecipes:", matchedRecipes);
    setResults(matchedRecipes);
  };
};
