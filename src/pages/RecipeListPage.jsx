import { Center, Heading, Flex, ListItem, List, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItems } from "../components/RecipeItems";
import { RecipeSearch } from "../components/RecipeSearch";
import { useState } from "react";

export const RecipeListPage = ({ setRecipe }) => {
  const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits);

  const handleRecipeClick = (recipe) => {
    setRecipe(recipe);
  };

  return (
    <Center bg="gray.500" minH="100vh" p={2}>
      <List spacing={4}>
        <center>
          <Heading color="black" m={1}>
            R-App-cipe
          </Heading>
          <Text color="white" m={1}>
            An app for recipes
          </Text>
          <RecipeSearch setResults={setSelectedRecipeList} />
        </center>

        <Flex
          gap={10}
          w={["full", "100%"]}
          flexWrap="wrap"
          justify="center"
          alignItems="center"
        >
          {selectedRecipeList.map(({ recipe }) => (
            <ListItem
              key={recipe.label}
              cursor="pointer"
              onClick={() => handleRecipeClick(recipe)}
            >
              <RecipeItems recipe={recipe} />
            </ListItem>
          ))}
        </Flex>
      </List>
    </Center>
  );
};

// import { Center, Heading, Flex, ListItem, List } from "@chakra-ui/react";
// import { data } from "../utils/data";
// import { RecipeItems } from "../components/RecipeItems";
// import { RecipeSearch } from "../components/RecipeSearch";
// import { useState } from "react";
// import { RecipePage } from "../components/RecipePage";
// //console.log(data);
// //console.log(data.hits[0].recipe.ingredientLines);

// export const RecipeListPage = ({ setRecipe }) => {
//   const [selectedRecipeList, setSelectedRecipelist] = useState(data.hits);
//   const handleRecipeClick = (recipe) => {
//     setRecipe(recipe);
//   };
//   console.log("setRecipe", setRecipe);
//   console.log("selectedRecipeList", selectedRecipeList);
//   console.log("setSelectedRecipeList", setSelectedRecipelist);

//   return (
//     <Center bg="blue.500">
//       <List>
//         <Heading>Your Recipe App</Heading>
//         <RecipeSearch
//           setResults={
//             setSelectedRecipelist
//           } /*onClick={setSelectedRecipeList} */
//         />

//         <Flex
//           gap={10}
//           w={["full", "100%"]}
//           flexWrap="wrap"
//           justify="center"
//           alignItems="center"
//         >
//           {selectedRecipeList.map((recipe) => (
//             <ListItem key={recipe}>
//               <RecipeItems
//                 recipe={recipe.recipe}
//                 onClick={() => handleRecipeClick(recipe)}
//               />
//               {recipe.name}
//             </ListItem>
//           ))}
//         </Flex>
//       </List>
//     </Center>
//   );
// };

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
