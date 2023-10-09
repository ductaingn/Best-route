import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import "./SearchField.css";

// -------------------
const SearchField = ({
  handleField,
  index,
  handleAddLocation,
  handleRemoveLocation,
  locationList,
}) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  // -------------------------------

  const addressesData = require("./data.json");

  return (
    <>
      <Grid container alignItems="center" justifyContent="center" spacing={0.5}>
        <Grid item md={10}>
          <TextField
            label="Search Field"
            variant="outlined"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);

              const searchString = e.target.value.toLowerCase();
              setResults(
                addressesData.filter((address) => {
                  return `${address.properties["name"]} ${address.properties["addr:housenumber"]} ${address.properties["addr:street"]}`
                    .toLowerCase()
                    .includes(searchString);
                })
              );
            }}
            fullWidth
          />
        </Grid>
        <Grid item md="auto">
          {index ? (
            <IconButton
              onClick={() => {
                handleField(index);
                handleRemoveLocation(index);
                setInput(locationList[index + 1]);
              }}
            >
              <DeleteRoundedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                handleField(index);
              }}
            >
              <AddLocationAltRoundedIcon />
            </IconButton>
          )}
        </Grid>
        <Grid item>
          <List className="result-list">
            {results.map((result) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      const add = `${result.properties["name"]} ${result.properties["addr:housenumber"]} ${result.properties["addr:street"]}`;
                      setInput(add);
                      handleAddLocation(add);
                      setResults([]);
                    }}
                  >
                    <ListItemText
                      primary={
                        result.properties.name +
                        " " +
                        result.properties["addr:housenumber"] +
                        " " +
                        result.properties["addr:street"]
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchField;
