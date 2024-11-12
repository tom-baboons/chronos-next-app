"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import NewsCard from "./NewsCard";
import { Switch } from "./ui/switch";

type Props = {};

const newsFilter = ["All", "Live", "Video", "Radio", "Article"];

const NewsFeed = (props: Props) => {
  const [selectedNewsFilter, setSelectedNewsFilter] = useState("All");
  return (
    <Flex flexDirection="column" marginY={"12px"} gap={"12px"}>
      <Flex align={"center"} py={"12px"}>
        <Text fontSize={22} fontWeight={700}>
          Recent News
        </Text>
        <Flex gap={"12px"} ml={"auto"}>
          {newsFilter.map((filter) => (
            <Box
              key={filter}
              as={"button"}
              onClick={() => setSelectedNewsFilter(filter)}
              userSelect={"none"}
              cursor={"pointer"}
              py={"12px"}
              px={"24px"}
              style={{
                background:
                  selectedNewsFilter === filter
                    ? "linear-gradient(90deg, #812FCB 0%, #D91F71 40%, #FF1445 70%, #ED7E65 100%)"
                    : "#12171C",
                borderRadius: "60px",
                border: "1px solid #FFFFFF0D",
                transition: "all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <Text key={filter} fontSize={"14px"} fontWeight={700}>
                {filter}
              </Text>
            </Box>
          ))}
          <Flex gap={"8px"} align={"center"}>
            <Text fontWeight={700} fontSize={"14px"}>
              Auto
            </Text>
            <Switch size={"md"} colorPalette={"pink"} />
          </Flex>
        </Flex>
      </Flex>
      <Flex gapX={"14px"} gapY={"16px"} flexWrap={"wrap"}>
        {dummyNewsFeedSortTime.map((news) => (
          <NewsCard {...news} key={news.key} />
        ))}
      </Flex>
    </Flex>
  );
};

export default NewsFeed;

const dummyNewsFeed = [
  {
    key: "1",
    channelName: "Euronews",
    tag: "Election",
    title: "Campaign Promise: End War in Ukraine Effortlessly",
    createdAt: "2021-10-10T12:00:00Z",
    thumbnail: "thumbnail1.png",
    isLive: true,
  },
  {
    key: "2",
    channelName: "Sky News",
    tag: "Election",
    title: "Election in Mozambique prompts caution for South Africans",
    createdAt: "2022-10-28T12:00:00Z",
    thumbnail: "thumbnail2.png",
    isLive: false,
  },
  {
    key: "3",
    channelName: "RT",
    tag: "Election",
    title:
      "Potential Mediator Emerges as Bridge between Europe Trump Relationship.",
    createdAt: "2021-11-10T12:00:00Z",
    thumbnail: "thumbnail3.png",
    isLive: false,
  },
  {
    key: "4",
    channelName: "Euronews",
    tag: "Election",
    title: "Campaign Promise: End War in Ukraine Effortlessly",
    createdAt: "2023-10-10T12:00:00Z",
    thumbnail: "thumbnail1.png",
    isLive: false,
  },
  {
    key: "5",
    channelName: "Sky News",
    tag: "Election",
    title: "Election in Mozambique prompts caution for South Africans",
    createdAt: "2024-10-28T12:00:00Z",
    thumbnail: "thumbnail2.png",
    isLive: false,
  },
  {
    key: "6",
    channelName: "RT",
    tag: "Election",
    title:
      "Potential Mediator Emerges as Bridge between Europe Trump Relationship.",
    createdAt: "2021-11-10T12:00:00Z",
    thumbnail: "thumbnail3.png",
    isLive: false,
  },
  {
    key: "7",
    channelName: "Euronews",
    tag: "Election",
    title: "Campaign Promise: End War in Ukraine Effortlessly",
    createdAt: "2024-11-10T12:00:00Z",
    thumbnail: "thumbnail1.png",
    isLive: false,
  },
  {
    key: "8",
    channelName: "Sky News",
    tag: "Election",
    title: "Election in Mozambique prompts caution for South Africans",
    createdAt: "2024-08-28T12:24:00Z",
    thumbnail: "thumbnail2.png",
    isLive: false,
  },
];

const dummyNewsFeedSortTime = dummyNewsFeed.sort((a, b) => {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
});
