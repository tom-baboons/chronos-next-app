import { Flex, Text } from "@chakra-ui/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Flex
      height={"52px"}
      borderBottomWidth={2}
      borderColor={"#FFFFFF0D"}
      backgroundColor={"#12171C"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={"24px"}
      paddingY={"12px"}
      position={"fixed"}
      zIndex={100}
      width={"100%"}
    >
      <img src={"logo.png"} width={130} height={28} alt="chronos logo" />
      <Flex gap={"24px"}>
        <Text color={"rgba(255, 255, 255, 0.50)"} fontSize={"12px"}>
          Kairos Login
        </Text>
        <Flex gap={"6px"}>
          <img
            src="website.png"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <Text fontSize={"14px"} fontWeight={500}>
            EN
          </Text>
          {/*
           <Icon>
            <Text>{`>`}</Text>
          </Icon>
          */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
