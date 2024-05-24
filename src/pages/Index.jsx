import { Box, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    // Mock financial data
    setFinancialData([
      { name: "S&P 500", value: "4,500.50", change: "+0.50%" },
      { name: "Dow Jones", value: "35,000.00", change: "-0.30%" },
      { name: "NASDAQ", value: "14,000.00", change: "+1.20%" },
    ]);
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Markets</Link>
          <Link href="#">World</Link>
          <Link href="#">Opinion</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading size="md" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading size="sm">News Headline 1</Heading>
                <Text mt={2}>Summary of the news article goes here. This is a brief description of the news content.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading size="sm">News Headline 2</Heading>
                <Text mt={2}>Summary of the news article goes here. This is a brief description of the news content.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.50" borderLeftWidth={{ md: "1px" }} mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            {financialData.map((data, index) => (
              <Box key={index} p={4} bg="white" borderWidth="1px" borderRadius="lg">
                <Text fontWeight="bold">{data.name}</Text>
                <Text>{data.value}</Text>
                <Text color={data.change.startsWith("+") ? "green.500" : "red.500"}>{data.change}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;