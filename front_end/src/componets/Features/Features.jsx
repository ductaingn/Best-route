import React from "react";
import { Container } from "@mui/material";

import SearchField from "./Search/SearchField";
import AddressList from "./AddressList";
import SearchButton from "./SearchButton";

const Features = () => {
  return (
    <div style={{display:"flex",flexDirection: 'column', alignItems: "center"}}>
      <SearchField />
      <AddressList />
      <SearchButton />
    </div>
  );
};

export default Features;
