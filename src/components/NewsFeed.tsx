"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import NewsCard from "./NewsCard";
import { Switch } from "./ui/switch";

type Props = {
  newsFeed: {
    key: string;
    channelName: string;
    tag: string;
    title: string;
    createdAt: string;
    thumbnail: string;
    isLive: boolean;
  }[];
};

const newsFilter = ["All", "Live", "Video", "Radio", "Article"];

const NewsFeed = ({ newsFeed }: Props) => {
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
        {newsFeed.map((news) => (
          <NewsCard {...news} key={news.key} />
        ))}
      </Flex>
    </Flex>
  );
};

export default NewsFeed;
