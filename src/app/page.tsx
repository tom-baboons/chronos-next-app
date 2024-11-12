import Hero from "@/components/Hero";
import NewsFeed from "@/components/NewsFeed";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction={"column"} flex={1}>
      <Hero />
      <NewsFeed />
    </Flex>
  );
}
