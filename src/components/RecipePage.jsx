import {
  Center,
  Flex,
  Text,
  Box,
  AspectRatio,
  Image,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import { App } from "../App";

export const RecipePage = ({ recipe }) => {
  return (
    <Box>
      <AspectRatio maxW="400px" ratio={4 / 2}>
        <Image
          //objectFit={"cover"}
          //maxW={{ base: "100%" }}
          src={recipe.image}
          borderRadius={"lg"}
          alt={recipe.alt}
        />
      </AspectRatio>
      <Text>Bla bla</Text>
      <Button colorScheme="blue" onClick={App}>
        Back
      </Button>
    </Box>
  );
};
