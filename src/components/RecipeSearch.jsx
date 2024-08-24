import { useState } from "react";
import { TextInput } from "./ui/Textinput";
import { RecipeItems } from "./RecipeItems";
import { data } from "../utils/data";

export const RecipeSearch = ({ setResults /*onClick*/ }) => {
  const [searchField, setSearchField] = useState("");
  const [selectedHealthLabel, setSelectedHealthLabel] = useState("");

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
    console.log(event.target.value);
  };

  const handleHealthLabelChange = (event) => {
    setSelectedHealthLabel(event.target.value);
    console.log(event.target.value);
  };

  const hardcodedSearchField = "chicken";

  const matchedRecipes = Array.isArray(data.hits)
    ? data.hits.filter((hit) => {
        const recipe = hit.recipe;
        //console.log("Recipe:", recipe);
        //console.log("Recipe label:", recipe.label);
        //console.log("Recipe health labels:", recipe.healthLabels);
        console.log("Search Field:", searchField);
        console.log("Selected Health Label:", selectedHealthLabel);

        const matchesLabel =
          recipe.label &&
          recipe.label.toLowerCase().includes(searchField.toLowerCase().trim());

        console.log("Matches Label:", matchesLabel);
        //console.log("Matches 'paleo' label:", matchesLabel);
        //console.log("Hardcoded search, matchesLabel:", matchesLabel);
        /*const matchesHealthLabel =
          !selectedHealthLabel ||
          recipe.healthLabels.includes(selectedHealthLabel.toLowerCase());
        console.log("Matches Health Label:", matchesHealthLabel);*/
        //setResults(matchedRecipes);
        return matchesLabel /*&& matchesHealthLabel*/;
      })
    : [];

  console.log("matchedRecipes", matchedRecipes);
  console.log("data.hits:", data.hits);
  console.log("First recipe:", data.hits[0]);

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
  /*
  return (
    <>
      <label>Search for recipes or health labels:</label>
      <TextInput
        onChange={handleChange || handleHealthLabelChange}
        w={200}
        mb={8}
      />
      <RecipeItems /*onClick={onClick}*/ /*recipes={matchedRecipes} />
    </>
  );
};
*/

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput
        onChange={handleSearchChange}
        value={searchField}
        w={200}
        mb={8}
      />

      <label>Filter by health label:</label>
      <TextInput
        onChange={handleHealthLabelChange}
        value={selectedHealthLabel}
        w={200}
        mb={8}
      />

      <RecipeItems /*onClick={onClick}*/ recipes={matchedRecipes} />
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

//export const RecipeSearch = ({ setResults, onClick }) => {
/* 
    const handleChange = (event) => {
    const matchedRecipes = ["hallo1", "test1"];

    console.log("event.target.value:", event.target.value);
    console.log("matchedRecipes:", matchedRecipes);
    setResults(matchedRecipes);
  };
  */
/*
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
*/
/*
  return (
    <>
      <label>Search for recipes or health labels:</label>
      <TextInput
        onChange={handleChange || handleHealthLabelChange}
        w={200}
        mb={8}
      />
      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
*/
