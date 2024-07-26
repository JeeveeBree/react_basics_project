import { Center, Heading, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItem } from "../components/RecipeItem";
//console.log(data);

export const RecipeListPage = (/*{ recipesb, clickFn }*/) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[2].recipe.label);
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
            </li>
          ))}
        </ul>
      </div>
    </Center>
  );
};
