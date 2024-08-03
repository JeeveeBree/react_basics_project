import { useState } from "react";
import { TextInput } from "./ui/Textinput";
import { RecipeItems } from "./RecipeItems";
import { data } from "../utils/data";
/*
export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const matchedRecipes = [data].filter((label) => {
    return label.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <>
      <label>Search for recipes:</label>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
