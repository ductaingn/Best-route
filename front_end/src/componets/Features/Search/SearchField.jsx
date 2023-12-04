import React, { useState } from "react";
import { useStore } from "../../../store";
import {
  TextField,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "./SearchField.css";

const SearchField = () => {
  const [state, dispatch] = useStore();

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addressesData = require("./data.json");

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Grid>
          <TextField
            label="Search Field"
            variant="outlined"
            value={input}
            style={{width: 300, marginTop: 5}}
            onChange={(e) => {
              setInput(e.target.value);
              const searchString = e.target.value.toLowerCase();
              setSearchResults(
                addressesData.filter((address) => {
                  return `${address.properties["name"]} ${address.properties["addr:housenumber"]} ${address.properties["addr:street"]}`
                    .toLowerCase()
                    .includes(searchString);
                })
              );
            }}
          />
        </Grid>
        <Grid item>
          <List className="result-list">
            {searchResults.map((result) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      setInput("");
                      const address = result.properties["name"]
                        ? `${result.properties["name"]} ${result.properties["addr:housenumber"]} ${result.properties["addr:street"]}`
                        : `${result.properties["addr:housenumber"]} ${result.properties["addr:street"]}`;
                      dispatch({
                        type: "ADD_POS_BY_SEARCH",
                        name: address,
                        position: result.geometry.coordinates,
                      });
                      setSearchResults([]);
                    }}
                  >
                    <ListItemText
                      primary={
                        result.properties["name"]
                          ? `${result.properties["name"]} ${result.properties["addr:housenumber"]} ${result.properties["addr:street"]}`
                          : `${result.properties["addr:housenumber"]} ${result.properties["addr:street"]}`
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchField;
