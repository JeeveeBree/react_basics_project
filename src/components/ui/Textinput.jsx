import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    variant="outline"
    htmlSize={4}
    width="300px"
    bg={"white"}
    onChange={onChange}
    {...props}
  />
);
