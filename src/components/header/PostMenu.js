import { Button } from "@chakra-ui/button"
import { EditIcon } from "@chakra-ui/icons"

// 本番環境で必要かわからない（投稿ボタンをどこに表示するか決まっていない）
export const PostMenu = () => {
  return (
    <Button leftIcon={<EditIcon />} colorScheme="teal" variant="solid">
    POST
    </Button>
  );
};