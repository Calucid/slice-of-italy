import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, Textarea, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        
        {/* Contact Information */}
        <Box textAlign="center">
          <Text fontSize="3xl" fontWeight="bold" color="green.600">
            Contact Us
          </Text>
          <Text fontSize="lg" color="gray.600">
            Welcome to Slice of Italy where our customers are family! We look forward to welcoming you and your family for many years to come.
          </Text>
        </Box>

        <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
          <Box>
            <img 
              src="http://stock.calucid.com/fetch/calucid/slice-of-italy/location" 
              alt="Slice of Italy Location"
              width="400"
              height="300"
              style={{ borderRadius: "10px" }}
            />
          </Box>
          <VStack align="start">
            <Text fontSize="xl" fontWeight="bold" color="red.600">Our Location:</Text>
            <Text>5924 Tilghman St, Allentown, PA 18104, USA</Text>
            <Text fontSize="xl" fontWeight="bold" color="red.600">Phone:</Text>
            <Text>(610) 530-7070</Text>
            <Text fontSize="xl" fontWeight="bold" color="red.600">Email:</Text>
            <Text>info@sliceofitaly.com</Text>
          </VStack>
        </Stack>

        {/* Social Media Links */}
        <HStack spacing={4} justify="center">
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={8} color="blue.600" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={8} color="pink.600" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={8} color="blue.400" />
          </Link>
        </HStack>

        {/* Contact Form */}
        <Box p={6} boxShadow="lg" borderRadius="md" bg="gray.50">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="green.600">
            Get in Touch
          </Text>
          <VStack spacing={4} mt={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="red" width="full">
              Send Message
            </Button>
          </VStack>
        </Box>

        {/* Navigation Links */}
        <HStack spacing={6} justify="center" mt={6}>
          <RouterLink to="/">
            <Button variant="link" color="green.600">Home</Button>
          </RouterLink>
          <RouterLink to="/about">
            <Button variant="link" color="green.600">About</Button>
          </RouterLink>
          <RouterLink to="/menu">
            <Button variant="link" color="green.600">Menu</Button>
          </RouterLink>
          <RouterLink to="/visit">
            <Button variant="link" color="green.600">Visit</Button>
          </RouterLink>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Contact;