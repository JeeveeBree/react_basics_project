import { Box } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";
import { useState } from "react";

export const App = () => {
  // const [selectedRecipeList, setSelectedRecipeList] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // const testFunction = (a, b) => {
  //   return a + b;
  // };

  //  return testResult(testFunction);
  return (
    <Box>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} />
      ) : (
        <RecipeListPage setRecipe={setSelectedRecipe} />
      )}
    </Box>
  );
};

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

// export const App = () => {
//   const [selectedRecipeList, setSelectedRecipeList] = useState();
//     const [selectedRecipe, setSelectedRecipe] = useState();
//       return {
//         <Box>
//         {selectedRecipe ? ( <RecipePage recipe={selectedRecipe} />) : (<RecipeListPage setRecipe={setSelectedRecipeList} />)}
//      }
//      </Box>

//   //return <RecipeListPage setRecipe={setSelectedRecipeList} />;
// };
