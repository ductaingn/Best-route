import React, { useState, useContext, createContext } from "react";
import { Button, Box } from "@mui/material";
import { useStore } from "../../store";
import MapComponent from "../Map/MapComponent";

export const dataContext = createContext();

const SearchButton = () => {
  const [state, dispatch] = useStore();
  const [responseText, setResponseText] = useState("");

  const handleFindWay = () => {
    console.log("find the way");

    // Create an array of positions from your state
    const positions = state.map((address) => address.position);

    // Send the positions array to Flask
    fetch('/send_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ positions }), // Send an object with positions
    })
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText); // Print Flask server response to the console
        setResponseText(responseText); // Update the context with the responseText
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <dataContext.Provider value={responseText}>
      <Box>
        <Button variant="contained" onClick={handleFindWay}>
          Find the way
        </Button>
      </Box>
      <MapComponent />
    </dataContext.Provider>
  );
};

export default SearchButton;
