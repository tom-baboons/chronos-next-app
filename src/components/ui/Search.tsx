"use client";
import { Box, Group, Input, InputAddon } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

const Search = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchString, setSearchString] = useState("");
  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchString(query);
    }
  }, [searchParams]);

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
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <InputAddon paddingRight={"0px"} backgroundColor={"transparent"}>
        <Box
          onClick={() => handleSearch(searchString)}
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
