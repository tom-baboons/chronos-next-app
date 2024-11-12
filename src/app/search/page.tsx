"use client";
import Hero from "@/components/Hero";
import NewsFeed from "@/components/NewsFeed";
import { Flex } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [newsData, setNewsData] = useState<
    {
      key: string;
      channelName: string;
      tag: string;
      title: string;
      createdAt: string;
      thumbnail: string;
      isLive: boolean;
    }[]
  >(dummyNewsFeedSortTime);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      const filteredData = dummyNewsFeedSortTime.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setNewsData(filteredData);
    } else {
      setNewsData(dummyNewsFeedSortTime);
    }
  }, [searchParams]);

  return (
    <Flex direction={"column"} flex={1}>
      <Hero />
      <NewsFeed newsFeed={newsData} />
    </Flex>
  );
}

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
