import { Center, Heading, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItem } from "../components/RecipeItem";

export const RecipeListPage = (/*{ recipes, clickFn }*/) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[2].recipe.label);
  /*return (
    <Flex gap={16} w="50%" flexWrap="wrap" justify={"center"}>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} clickFn={clickFn} />
      ))}
    </Flex>
  );
};*/
  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <div>
        <h1>Recipe List</h1>
        <ul>
          {data.map((recipe) => (
            <li key={recipe.label}>
              <h2>{recipe.label}</h2>
              <img
                src={recipe.image}
                alt={recipe.label}
                style={{ width: "200px", height: "auto" }}
              />
              {recipe.dietLabel && <p>Diet Label:{recipe.dietLabel}</p>}
              {recipe.cautions && <p>Cautions: {recipe.cautions.join(", ")}</p>}
              <p>Meal Type: {recipe.mealType}</p>
              <p>Dish Type:{recipe.dishType}</p>
              <div>
                Health Labels:
                <ul>
                  {recipe.healthLabels.includes("Vegan") && <li>Vegan</li>}
                  {recipe.healthLabels.includes("Vegetarian") && (
                    <li>Vegetarian</li>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Center>
  );
};
