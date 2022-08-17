import { Grid } from "@mui/material";
import React from "react";
import Reusableimage from "../Reuseable/Reusableimage";

const Forgetpage: React.FC = () => {
  return (
    <div>
      <Grid container>
        <Grid item lg={4}></Grid>
        <Grid item lg={8}>
          <Reusableimage />
        </Grid>
      </Grid>
    </div>
  );
};
export default Forgetpage;
