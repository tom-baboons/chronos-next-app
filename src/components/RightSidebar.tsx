"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {};

const trendingTags = [
  {
    types: ["Live", "Video", "Article"],
    tag: `Donald Trump`,
    count: 120069,
  },
  {
    types: ["Live", "Radio", "Article"],
    tag: `Election`,
    count: 69000,
  },
  {
    types: ["Live", "Video", "Article"],
    tag: `Imran Khan`,
    count: 120069,
  },
  {
    types: ["Live", "Radio", "Article"],
    tag: `Harris`,
    count: 99069,
  },
  {
    types: ["Live", "Radio"],
    tag: `Politics`,
    count: 120069,
  },
  {
    types: ["Video", "Radio"],
    tag: `Diddy`,
    count: 69000,
  },
  {
    types: ["Live", "Radio"],
    tag: `President`,
    count: 120069,
  },
  {
    types: ["Live", "Video", "Article"],
    tag: `Biden`,
    count: 99069,
  },
  {
    types: ["Live", "Video", "Article"],
    tag: `Victory`,
    count: 120069,
  },
  {
    types: ["Live", "Radio"],
    tag: `Kanye West`,
    count: 69000,
  },
];

const TagItem = ({
  tag,
  count,
  types,
}: {
  tag: string;
  count: number;
  types: string[];
}) => (
  <Flex
    direction={"column"}
    gap={"10px"}
    borderBottom={"1px solid #FFFFFF0D"}
    py={"18px"}
  >
    <Flex gap={"4px"}>
      {types.map((type) => (
        <Text fontSize={12} color={"#FFFFFF66"} key={type}>
          {type}
          {types.indexOf(type) === types.length - 1 ? "" : " - "}
        </Text>
      ))}
    </Flex>
    <Text fontSize={16} fontWeight={700}>
      {tag}
    </Text>
    <Flex justify={"space-between"} align={"center"}>
      <Text fontSize={12} color={"#FFFFFF66"}>
        {(count / 1000).toFixed(0)}k articles
      </Text>
      <Text cursor={"pointer"} fontSize={12}>
        View
      </Text>
    </Flex>
  </Flex>
);

const RightSidebar = (props: Props) => {
  const [tagsItem, setTagsItem] = useState(trendingTags.slice(0, 6));

  const onShowMore = () => {
    if (tagsItem.length === trendingTags.length) return;

    const isMoreItemGt3 = trendingTags.length - tagsItem.length > 3;

    if (isMoreItemGt3) {
      const moreItems = trendingTags.slice(
        tagsItem.length,
        tagsItem.length + 3,
      );
      setTagsItem([...tagsItem, ...moreItems]);
      return;
    }

    const moreItems = trendingTags.slice(tagsItem.length, trendingTags.length);
    setTagsItem([...tagsItem, ...moreItems]);
  };

  return (
    <Box
      position={"fixed"}
      right={0}
      bottom={0}
      overflowY={"auto"}
      height={"100%"}
      width={"324px"}
      backgroundColor={"#12171C"}
      borderLeft={"2px solid #FFFFFF0D"}
      top={"52px"}
      padding={"32px"}
      paddingBottom={"100px"}
      userSelect={"none"}
    >
      <Flex direction={"column"}>
        <Text fontSize={"22px"} fontWeight={700}>
          Trending Tags
        </Text>
        {tagsItem.map((tag) => (
          <TagItem {...tag} key={tag.tag} />
        ))}
        {tagsItem.length < trendingTags.length && (
          <Flex
            cursor={"pointer"}
            py={"16px"}
            align={"center"}
            onClick={onShowMore}
          >
            <img
              style={{ width: "24px", height: "24px" }}
              src="down-red-chev.png"
            />
            <Text fontWeight={700} color={"#F83C50"}>
              Show more
            </Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default RightSidebar;
