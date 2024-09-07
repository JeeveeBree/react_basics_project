import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    // placeholder="Search for recipes or health labels:"
    variant="outline"
    htmlSize={4}
    width="300px"
    bg={"white"}
    onChange={onChange}
    {...props}
  />
);
