import { Box, Text, Image, VStack, HStack, Link, Button, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box bg="white" color="black" p={4} maxW="1200px" mx="auto">
      <VStack spacing={6} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="green.600">
          Visit Slice of Italy
        </Text>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/slice-of-italy/restaurant-exterior" 
          alt="Slice of Italy Exterior" 
          width="100%" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Welcome to Slice of Italy where our customers are family! We pride ourselves on being a family-owned business in the Lehigh Valley. Here you will find a large selection of Pizza, Sandwiches, and Italian Cuisine to tempt all of your taste buds.
        </Text>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="red.600">
          Our Location
        </Text>
        <Text fontSize="lg">5924 Tilghman St, Allentown, PA 18104, USA</Text>
        <Box width="100%" height="300px">
          <iframe
            title="Google Maps"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=5924+Tilghman+St,Allentown,PA`}
          ></iframe>
        </Box>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="green.600">
          Hours of Operation
        </Text>
        <VStack spacing={2}>
          <Text fontSize="lg">Monday - Thursday: 11:00 AM - 9:00 PM</Text>
          <Text fontSize="lg">Friday - Saturday: 11:00 AM - 10:00 PM</Text>
          <Text fontSize="lg">Sunday: 12:00 PM - 8:00 PM</Text>
        </VStack>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="red.600">
          Contact Us
        </Text>
        <Text fontSize="lg">Phone: (610) 530-7070</Text>
        <Button as={RouterLink} to="/contact" colorScheme="green" size="lg">
          Contact Us
        </Button>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="green.600">
          Explore More
        </Text>
        <HStack spacing={4} justify="center" wrap="wrap">
          <Button as={RouterLink} to="/" colorScheme="red" size="lg">
            Home
          </Button>
          <Button as={RouterLink} to="/menu" colorScheme="green" size="lg">
            Menu
          </Button>
          <Button as={RouterLink} to="/about" colorScheme="red" size="lg">
            About Us
          </Button>
        </HStack>
      </VStack>

      <Divider my={6} />

      <VStack spacing={6} textAlign="center">
        <Image 
          src="http://stock.calucid.com/fetch/calucid/slice-of-italy/delicious-pizza" 
          alt="Delicious Pizza" 
          width="100%" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md"
        />
      </VStack>
    </Box>
  );
};

export default Visit;