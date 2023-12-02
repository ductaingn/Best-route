import React from "react";
import { Grid } from "@material-ui/core";

import Features from "./componets/Features/Features";
import MapComponent from "./componets/Map/MapComponent";

const App = () => {

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Features />
        </Grid>
        <Grid item xs={9}>
          <MapComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
