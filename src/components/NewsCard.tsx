"use client";
import { calcTimePassed } from "@/utils/common";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type Props = {
  channelName: string;
  tag: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  isLive: boolean;
};

const NewsCard = ({
  channelName,
  tag,
  createdAt,
  isLive,
  thumbnail,
  title,
}: Props) => {
  const router = useRouter();
  return (
    <Flex
      onClick={() => {
        router.push("/news/1");
      }}
      cursor={"pointer"}
      gap={"14px"}
      flexDirection={"column"}
      p={"14px"}
      borderRadius={"14px"}
      backgroundColor={"#12171C"}
      border={"2px solid #FFFFFF0D"}
      _hover={{
        border: "2px solid #D91F71",
        transform: "scale(1.02)",
      }}
      flexGrow={1}
      userSelect={"none"}
      style={{
        transition: "all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <Flex gap={"14px"} alignItems={"center"}>
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
            {tag}
          </Text>
        </Box>
        <Text fontSize={"12px"} fontWeight={600}>
          {channelName}
        </Text>
        {isLive && (
          <Flex align={"center"} ml={"auto"}>
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#FF1445",
                marginRight: "6px",
              }}
            ></div>
            <Text fontWeight={600} fontSize={"12px"} color={"#FFFFFF99"}>
              Live
            </Text>
          </Flex>
        )}
      </Flex>
      <img
        style={{
          minWidth: 286,
        }}
        src={thumbnail}
        width={"100%"}
        height={"154px"}
      />
      <Box maxWidth={"228.5px"}>
        <Text fontWeight={700} fontSize={15}>
          {title}
        </Text>
      </Box>

      <Flex gap={"8px"} mt={"auto"}>
        <img
          src={"time.png"}
          style={{
            width: "16px",
            height: "16px",
          }}
        />
        <Text color={"#FFFFFF80"} fontSize={"12px"} fontWeight={500}>
          {calcTimePassed(createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NewsCard;
