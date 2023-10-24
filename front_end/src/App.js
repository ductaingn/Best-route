import React from "react";
import { Grid } from "@material-ui/core";

import Features from "./componets/Features/Features";
import MapComponent from "./componets/Map/MapComponent";
import PlaceDetails from "./componets/PlaceDetails/PlaceDetails";

const App = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3} >
          <Features />
          <PlaceDetails />
        </Grid>
        <Grid item xs={9} >
          <MapComponent />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
