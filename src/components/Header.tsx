import { Flex, Text } from "@chakra-ui/react";
import SideDrawer from "./ui/SideDrawer";

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
      lgDown={{ paddingRight: "0px" }}
      paddingY={"12px"}
      position={"fixed"}
      zIndex={100}
      flex={1}
      width={"100%"}
    >
      <img
        src={"logo.png"}
        style={{
          width: "130px",
          height: "28px",
        }}
        alt="chronos logo"
      />
      <Flex gap={"24px"} align={"center"}>
        <Text color={"rgba(255, 255, 255, 0.50)"} fontSize={"12px"}>
          Kairos Login
        </Text>
        <Flex gap={"6px"} align={"center"}>
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
          <SideDrawer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
