import "../main/styles.css";
import { Grid, Typography } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <Grid container className="footer-container">
      <Grid item xs={12}>
        <Typography
          color="secondary"
          components="span"
          align="center"
          sx={{ fontSize: "0.8rem" }}
        >
          created by santiagotuero - devChallenges.io
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
