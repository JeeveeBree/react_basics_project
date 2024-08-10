import { Center, Heading, Flex, Text } from "@chakra-ui/react";
import { ListItem, List } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItems } from "../components/RecipeItems";
import { RecipeSearch } from "../components/RecipeSearch";
//console.log(data);
//console.log(data.hits[0].recipe.ingredientLines);

export const RecipeListPage = (setSelectedRecipe) => {
  return (
    <Center>
      <List>
        <Heading>Your Recipe App</Heading>
        <RecipeSearch onClick={setSelectedRecipe} />

        <Flex
          gap={16}
          w={["full", "75%"]}
          flexWrap="wrap"
          flexDir={["row", "column"]}
          justify="center"
          alignItems="center"
        >
          {data.hits.map((recipe) => (
            <ListItem key={recipe}>
              <RecipeItems recipe={recipe.recipe} />
            </ListItem>
          ))}
        </Flex>
      </List>
    </Center>
  );
};
