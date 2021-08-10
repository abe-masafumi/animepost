import { Button } from "@chakra-ui/button"
import { EditIcon } from "@chakra-ui/icons"


export const PostMenu = () => {
  return (
    <Button leftIcon={<EditIcon />} colorScheme="teal" variant="solid">
    POST
    </Button>
  );
};