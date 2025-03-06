import { Box, Heading, Text, Image, VStack, Link, Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box bg="white" color="black" p={4} maxW="1200px" mx="auto">
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl" color="green.600">
          About Slice of Italy
        </Heading>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/slice-of-italy/restaurant-exterior" 
          alt="Slice of Italy Exterior"
          width="100%" 
          maxW="800px" 
          height="auto" 
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Welcome to <strong>Slice of Italy</strong>, where our customers are family! We pride ourselves on being a family-owned business in the Lehigh Valley. 
          Here you will find a large selection of Pizza, Sandwiches, and Italian Cuisine to tempt all of your taste buds. 
          We look forward to welcoming you and your family for many years to come.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
          <Image 
            src="http://stock.calucid.com/fetch/calucid/slice-of-italy/pizza" 
            alt="Delicious Pizza"
            width="300px" 
            height="200px" 
            borderRadius="md"
          />
          <Image 
            src="http://stock.calucid.com/fetch/calucid/slice-of-italy/italian-cuisine" 
            alt="Italian Cuisine"
            width="300px" 
            height="200px" 
            borderRadius="md"
          />
        </Stack>
        <Box bg="green.600" color="white" p={4} borderRadius="md" maxW="800px">
          <Text fontSize="xl">
            Visit us at: <strong>5924 Tilghman St, Allentown, PA 18104, USA</strong>
          </Text>
          <Text fontSize="lg">Call us: <strong>(610) 530-7070</strong></Text>
        </Box>
        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <Button as={RouterLink} to="/" colorScheme="green">
            Home
          </Button>
          <Button as={RouterLink} to="/menu" colorScheme="red">
            View Menu
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="green">
            Visit Us
          </Button>
          <Button as={RouterLink} to="/contact" colorScheme="red">
            Contact Us
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export default About;