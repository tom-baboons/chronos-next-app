import { Flex, Text } from "@chakra-ui/react";
import Search from "./ui/Search";

type Props = {};

const trendingTags = [
  "Donald Trump",
  "Election",
  "Harris",
  "Victory",
  "President",
  "Politics",
];

const Hero = (props: Props) => {
  return (
    <Flex
      flex={1}
      flexDirection={"column"}
      paddingY={"50px"}
      paddingX={"24px"}
      gap={"24px"}
      borderRadius={"14px"}
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "linear-gradient(90deg, rgba(129, 47, 203, 0.86) 0%, rgba(217, 31, 113, 0.86) 40%, rgba(255, 20, 69, 0.86) 70%, rgba(237, 126, 101, 0.86) 100%), url(hero-bg.png)",
        backgroundPosition: "center",
      }}
    >
      <Search />
      <Flex justify={"center"} gap={"10px"}>
        <Text fontSize={"14px"} fontWeight={700}>
          Trending:
        </Text>
        {trendingTags.map((tag) => (
          <Text key={tag} fontSize={"14px"} color={"##FFFFFFCC"}>
            {tag}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Hero;
