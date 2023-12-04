import React from "react";
import { Grid, Paper } from "@material-ui/core";

import Features from "./componets/Features/Features";
import MapComponent from "./componets/Map/MapComponent";

const App = () => {
  return (
    <div>
      <Grid container style={{ position: "relative" }}>
        <Grid
          item
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 40,
            width: "350px"
          }}
        >
          <Paper style={{padding: 10}}>
            <Features />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ position: "relative", zIndex: 0 }}>
          <MapComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
