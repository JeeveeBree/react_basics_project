import { Center, Heading, Flex, Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItems } from "../components/RecipeItems";
//console.log(data);
//console.log(data.hits[0].recipe.ingredientLines);

export const RecipeListPage = (setSelectedRecipe) => {
  return (
    <Center>
      <Heading>Your Recipe App</Heading>
      <UnorderedList>
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
      </UnorderedList>
    </Center>
  );
};
