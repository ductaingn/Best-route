import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import SearchField from "./Search/SearchField";

const Features = () => {
  const [locationList, setLocationList] = useState([]);
  const [val, setVal] = useState([0]);

  const handleAddField = () => {
    setVal([...val, []]);
  };
  const handleRemoveField = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
  };

  const handleAddLocation = (newLocation) => {
    setLocationList([...locationList, newLocation]);
  };
  const handleRemoveLocation = (i) => {
    console.log(i + " dad");
    const deleteVal = [...locationList];
    deleteVal.splice(i, 1);
    setLocationList(deleteVal);
  };

  const handleSubmit = () => {
    console.log("let's go");
    console.log(locationList);
  };
  return (
    <>
      <Grid container justifyContent="center">
        {val.map((data, index) => {
          return (
            <Grid container>
              <SearchField
                key={index}
                index={index}
                handleField={index ? handleRemoveField : handleAddField}
                handleAddLocation={handleAddLocation}
                handleRemoveLocation={handleRemoveLocation}
                locationList={locationList}
              />
            </Grid>
          );
        })}
        <Button variant="contained" onClick={() => handleSubmit()}>
          Let's go
        </Button>
      </Grid>
    </>
  );
};

export default Features;
