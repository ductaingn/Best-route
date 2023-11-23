import React, { createContext, useContext } from "react";
import { Button } from "@mui/material";
import { useStore } from "../../store";
import RouteContext from "../../context/RouteContext";

export const dataContext = createContext();

const SearchButton = () => {
  const [state] = useStore();
  const { setRoute } = useContext(RouteContext)

  const handleFindWay = () => {
    console.log("find the way");

    // Create an array of positions from your state
    const positions = state.map((address) => address.position);

    // Send the positions array to Flask
    fetch("/send_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ positions }), // Send an object with positions
    })
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText); // Print Flask server response to the console
        setRoute(responseText); // Update the context with the responseText
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <Button variant="contained" onClick={handleFindWay}>
      Find the way
    </Button>
  );
};

export default SearchButton;
