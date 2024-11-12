import { Box, Group, Input, InputAddon } from "@chakra-ui/react";

type Props = {};

const Search = (props: Props) => {
  return (
    <Group
      attached
      style={{
        borderRadius: 100,
        maxWidth: 600,
        alignSelf: "center",
        width: "100%",
        padding: 4,
        background: "white",
        paddingLeft: 12,
        color: "#12171C",
      }}
    >
      <Input
        fontWeight={600}
        fontSize={14}
        focusRing={"none"}
        placeholder="Search"
      />
      <InputAddon paddingRight={"0px"} backgroundColor={"transparent"}>
        <Box
          cursor={"pointer"}
          style={{
            padding: 12,
            borderRadius: 100,
            background:
              "linear-gradient(90deg, #812FCB 0%, #D91F71 40%, #FF1445 70%, #ED7E65 100%)",
          }}
        >
          <img src="search.png" alt="search" width={20} height={20} />
        </Box>
      </InputAddon>
    </Group>
  );
};

export default Search;
