import { Center, Heading, Flex, Text } from "@chakra-ui/react";
import { ListItem, List } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItems } from "../components/RecipeItems";
import { RecipeSearch } from "../components/RecipeSearch";
//console.log(data);
//console.log(data.hits[0].recipe.ingredientLines);

export const RecipeListPage = (setSelectedRecipe, onClick) => {
  return (
    <Center bg="blue.500">
      <List>
        <Heading>Your Recipe App</Heading>
        <RecipeSearch onClick={setSelectedRecipe} />

        <Flex
          gap={10}
          w={["full", "100%"]}
          flexWrap="wrap"
          justify="center"
          alignItems="center"
        >
          {data.hits.map((recipe) => (
            <ListItem key={recipe}>
              <RecipeItems recipe={recipe.recipe} /*onClick={onClick} */ />
            </ListItem>
          ))}
        </Flex>
      </List>
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
