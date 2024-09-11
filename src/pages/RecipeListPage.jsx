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
        <footer>
          <Center>
            <Heading color="black" m={1}>
              R-App-cipe
            </Heading>
            <Text color="white" m={1}>
              An app for recipes
            </Text>
          </Center>
        </footer>
      </List>
    </Center>
  );
};
