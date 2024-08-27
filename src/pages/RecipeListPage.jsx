import { Center, Heading, Flex, ListItem, List } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItems } from "../components/RecipeItems";
import { RecipeSearch } from "../components/RecipeSearch";
import { useState } from "react";
import { RecipePage } from "../components/RecipePage";
//console.log(data);
//console.log(data.hits[0].recipe.ingredientLines);

export const RecipeListPage = ({ setRecipe }) => {
  const [selectedRecipe /*List*/, setSelectedRecipe /*list*/] = useState(
    data.hits
  );
  console.log("setRecipe", setRecipe);
  console.log("selectedRecipe", selectedRecipe);
  console.log("setSelectedRecipe", setSelectedRecipe);
  return (
    <Center bg="blue.500">
      {selectedRecipe && selectedRecipe.recipe ? (
        <RecipePage recipe={selectedRecipe.recipe} onClick={setRecipe} />
      ) : (
        <List>
          <Heading>Your Recipe App</Heading>
          <RecipeSearch
            setResults={setSelectedRecipe} /*onClick={setSelectedRecipe} */
          />

          <Flex
            gap={10}
            w={["full", "100%"]}
            flexWrap="wrap"
            justify="center"
            alignItems="center"
          >
            {selectedRecipe.map((recipe) => (
              <ListItem key={recipe}>
                <RecipeItems
                  recipe={recipe.recipe}
                  //onClick={setSelectedRecipe}
                />
              </ListItem>
            ))}
          </Flex>
        </List>
      )}
    </Center>
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

/*
RecipeListPage.jsx
export const RecipeListPage = ({setRecipe}) => {
    const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits)
    ...
    <RecipeSearch setResults={setSelectedRecipeList} />
*/
