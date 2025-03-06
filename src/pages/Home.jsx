import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white">
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/slice-of-italy/italian-pizza')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
      >
        <Box bg="rgba(0, 0, 0, 0.6)" p={6} borderRadius="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
            Welcome to Slice of Italy
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} mt={2}>
            Where our customers are family! Enjoy delicious pizza, sandwiches, and Italian cuisine.
          </Text>
          <Button as={Link} to="/menu" mt={4} colorScheme="red" size="lg">
            View Menu
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        py={12}
        px={6}
        bg="green.100"
      >
        <Image
          src="http://stock.calucid.com/fetch/calucid/slice-of-italy/restaurant-interior"
          alt="Restaurant Interior"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box ml={{ md: 6 }} mt={{ base: 6, md: 0 }} textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="2xl" color="green.800">
            About Us
          </Heading>
          <Text mt={2} fontSize="md">
            We are a family-owned business in the Lehigh Valley, serving authentic Italian cuisine.
          </Text>
          <Button as={Link} to="/about" mt={4} colorScheme="green">
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Menu Preview Section */}
      <Box py={12} px={6} textAlign="center">
        <Heading fontSize="2xl" color="red.800">
          Our Favorites
        </Heading>
        <Flex
          mt={6}
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          gap={6}
        >
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/slice-of-italy/margherita-pizza"
              alt="Margherita Pizza"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Margherita Pizza
            </Text>
          </Box>
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/slice-of-italy/italian-sub"
              alt="Italian Sub"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Italian Sub
            </Text>
          </Box>
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/slice-of-italy/pasta-dish"
              alt="Pasta Dish"
              width="300px"
              height="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Classic Pasta
            </Text>
          </Box>
        </Flex>
        <Button as={Link} to="/menu" mt={6} colorScheme="red">
          View Full Menu
        </Button>
      </Box>

      {/* Visit Us Section */}
      <Box py={12} px={6} bg="gray.100" textAlign="center">
        <Heading fontSize="2xl" color="gray.800">
          Visit Us
        </Heading>
        <Text mt={2} fontSize="md">
          5924 Tilghman St, Allentown, PA 18104, USA
        </Text>
        <Text fontSize="md">(610) 530-7070</Text>
        <Button as={Link} to="/visit" mt={4} colorScheme="blue">
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default Home;