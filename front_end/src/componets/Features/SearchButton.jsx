import React from "react";
import { Button, Box } from "@mui/material";
import { useStore } from "../../store";

const SearchButton = () => {
  const [state, dispatch] = useStore();

  const handleFindWay = () => {
    console.log("find the way");
    state.map((address) => {
      console.log(address.position);
    });
  };
  return (
    <Box>
      <Button variant="contained" onClick={handleFindWay}>
        Find the way
      </Button>
    </Box>
  );
};

export default SearchButton;
