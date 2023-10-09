import React from "react";
import { Grid } from "@material-ui/core";
import { Container } from "@mui/material";

import Features from "./componets/Features/Features";
import Map from "./componets/Map/Map";
import PlaceDetails from "./componets/PlaceDetails/PlaceDetails";

const App = () => {
  return (
    <>
      <Container style={{marginTop: 30}} >
        <Grid container spacing={1}>
          <Grid item xs={4} md={4} >
            <Features />
            <PlaceDetails />
          </Grid>
          <Grid item xs={8} md={8}>
            <Map />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
