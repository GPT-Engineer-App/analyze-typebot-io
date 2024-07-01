import React from "react";
import { Button, Card, CardBody, CardHeader, CardFooter, Tabs, TabList, TabPanels, Tab, TabPanel, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Tooltip, Avatar, AvatarBadge, AvatarGroup, Badge, Divider, Box, Heading, Text, VStack, HStack, Container, Flex, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Box as="header" w="full" bg="white" boxShadow="sm">
        <Container maxW="container.xl" py={6} px={4}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">Typebot.io Clone</Heading>
            <HStack spacing={4}>
              <Button variant="outline">Home</Button>
              <Button variant="outline">Features</Button>
              <Button variant="outline">Pricing</Button>
              <Button variant="outline">Contact</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container as="main" maxW="container.xl" py={10} px={4}>
        <VStack spacing={10}>
          <Box textAlign="center">
            <Heading as="h2" size="2xl" mb={4}>Welcome to Typebot.io Clone</Heading>
            <Text fontSize="lg" mb={6}>Create interactive conversational experiences with ease.</Text>
            <Button colorScheme="teal" size="lg">Get Started</Button>
          </Box>

          <Card>
            <CardHeader>
              <Heading size="md">Features</Heading>
            </CardHeader>
            <CardBody>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Feature 1</Tab>
                  <Tab>Feature 2</Tab>
                  <Tab>Feature 3</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Text>Feature 1 content goes here.</Text>
                  </TabPanel>
                  <TabPanel>
                    <Text>Feature 2 content goes here.</Text>
                  </TabPanel>
                  <TabPanel>
                    <Text>Feature 3 content goes here.</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </CardBody>
          </Card>

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Is it accessible?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Is it customizable?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Yes. You can customize it as per your needs.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Is it free to use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Yes. It is free for personal and commercial use.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Tooltip label="This is a tooltip content." aria-label="A tooltip">
            <Button variant="outline">Hover me</Button>
          </Tooltip>

          <HStack spacing={4}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Badge variant="outline">Badge</Badge>
          </HStack>

          <Divider />

          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
            <Text fontSize="lg" mb={6}>Feel free to reach out for any queries.</Text>
            <Button colorScheme="teal">Contact Support</Button>
          </Box>
        </VStack>
      </Container>

      <Box as="footer" w="full" bg="white" boxShadow="sm" py={6}>
        <Container maxW="container.xl" textAlign="center">
          <Text>&copy; 2023 Typebot.io Clone. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;