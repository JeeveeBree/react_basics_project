import { Center, Heading, Flex, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItem } from "../components/RecipeItem";
console.log(data);
console.log(data.hits[0].recipe.ingredientLines);

export const RecipeListPage = () => {
  console.log(data.hits[0].recipe.ingredientLines);
  console.log(data.hits);
  return (
    <div>
      <h1>Recipe List</h1>

      <ul>
        {[data].map((recipe) => (
          <li key={[recipe.hits]}>
            <h2>{[recipe.label]}</h2>

            <ul>
              {[recipe.hits].map((hits, index) => (
                <li key={index}>{hits}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

/*export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  //console.log(data.hits[0].recipe.label);

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
    </Center>
  );
};*/
