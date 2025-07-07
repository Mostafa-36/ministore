import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import useProductStore from "../store/product.js";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });

  const toast = useToast();

  const { createProduct } = useProductStore();
  const navigation = useNavigate();

  async function handleSubmitForm(body) {
    const { success, message } = await createProduct(body);

    if (success) {
      toast({
        status: "success",
        title: "Success",
        description: message,
        isClosable: true,
        duration: 3000,
      });
      navigation("/");
    } else {
      toast({
        status: "error",
        title: "Success",
        description: message,
        duration: 3000,
      });
    }
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.img}
              onChange={(e) =>
                setNewProduct({ ...newProduct, img: e.target.value })
              }
            />

            <Button
              colorScheme="blue"
              onClick={() => handleSubmitForm(newProduct)}
              w="full"
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreateProduct;
