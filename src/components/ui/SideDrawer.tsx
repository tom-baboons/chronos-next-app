import { Box } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { SidebarContent } from "../RightSidebar";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "./drawer";

const SideDrawer = () => {
  return (
    <DrawerRoot size={["full", "full", "xs"]}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Box cursor={"pointer"} p={"12px"} pr={"30px"} hideFrom={"lg"}>
          <CiMenuBurger />
        </Box>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerActionTrigger
          focusRing={"none"}
          focusVisibleRing={"none"}
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
          }}
        >
          <Box
            style={{
              padding: "24px",
            }}
            hideFrom={"lg"}
          >
            <AiOutlineClose />
          </Box>
        </DrawerActionTrigger>
        <SidebarContent />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SideDrawer;
