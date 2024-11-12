"use client";
import { calcTimePassed } from "@/utils/common";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

const dummyNewsItem = {
  id: "1",
  channelName: "Euronews",
  tag: "Election",
  title: "Campaign Promise: End War in Ukraine Effortlessly",
  content: `In a bold campaign move, presidential candidates have made sweeping promises about ending the ongoing conflict in Ukraine, drawing both support and skepticism from international observers. The complex geopolitical situation continues to evolve as diplomatic channels remain active despite challenging circumstances.

Multiple European leaders have expressed their concerns about oversimplified solutions to what remains a deeply complex international crisis. Military experts and diplomatic sources suggest that any resolution would require careful negotiation and consideration of multiple stakeholders' interests.

Meanwhile, Ukrainian officials maintain their position on territorial integrity and sovereignty, while international support continues to play a crucial role in the ongoing situation. Economic implications of various proposed solutions are being carefully analyzed by policy experts.`,
  createdAt: "2024-02-10T12:00:00Z",
  thumbnail: "/thumbnail1.png",
  isLive: true,
  relatedTags: ["Politics", "Ukraine", "International", "Diplomacy"],
};

export default function NewsPage() {
  return (
    <Container maxW="1200px" mt="80px">
      <Flex direction="column" gap="6">
        <Box>
          <Flex gap="4" align="center" mb="4">
            <Box
              py={"4px"}
              px={"6px"}
              style={{
                background:
                  "linear-gradient(90deg, #812FCB 0%, #D91F71 40%, #FF1445 70%, #ED7E65 100%)",
                borderRadius: "4px",
              }}
            >
              <Text fontSize={"12px"} fontWeight={600}>
                {dummyNewsItem.tag}
              </Text>
            </Box>
            <Text fontSize="sm" fontWeight="600">
              {dummyNewsItem.channelName}
            </Text>
            {dummyNewsItem.isLive && (
              <Flex align="center" ml="auto">
                <Box w="5px" h="5px" borderRadius="full" bg="#FF1445" mr="2" />
                <Text fontWeight="600" fontSize="sm" color="whiteAlpha.600">
                  Live
                </Text>
              </Flex>
            )}
          </Flex>
          <Text fontSize="3xl" fontWeight="700" mb="6">
            {dummyNewsItem.title}
          </Text>
        </Box>

        <Box
          position="relative"
          width="100%"
          height="400px"
          borderRadius="xl"
          overflow="hidden"
          mb="6"
        >
          <img
            src={dummyNewsItem.thumbnail}
            alt={dummyNewsItem.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Flex gap="3" align="center" mb="6">
          <img
            src="/time.png"
            style={{
              width: "16px",
              height: "16px",
            }}
          />
          <Text color="whiteAlpha.600" fontSize="sm">
            {calcTimePassed(dummyNewsItem.createdAt)}
          </Text>
        </Flex>

        <Box
          bg="#12171C"
          p="8"
          borderRadius="xl"
          border="2px solid"
          borderColor="whiteAlpha.50"
        >
          <Text fontSize="lg" lineHeight="tall" whiteSpace="pre-wrap">
            {dummyNewsItem.content}
          </Text>
        </Box>

        <Box mt="8">
          <Text fontSize="xl" fontWeight="700" mb="4">
            Related Tags
          </Text>
          <Flex gap="3" flexWrap="wrap">
            {dummyNewsItem.relatedTags.map((tag) => (
              <Box
                key={tag}
                py={"4px"}
                px={"6px"}
                style={{
                  background:
                    "linear-gradient(90deg, #812FCB 0%, #D91F71 40%, #FF1445 70%, #ED7E65 100%)",
                  borderRadius: "4px",
                }}
              >
                <Text fontSize={"12px"} fontWeight={600}>
                  {tag}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
