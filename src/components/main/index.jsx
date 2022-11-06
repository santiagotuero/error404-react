import Scarecrow from "../../images/Scarecrow.png";

import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Main = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 60px)",
        height: "auto",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={5} xs={12}>
          <img src={Scarecrow} alt="" height="auto" width="100%" />
        </Grid>
        <Grid item lg={1} />
        <Grid item lg={6} xs={12}>
          <Typography
            component="h2"
            variant="h3"
            color="primary"
            paragraph
            sx={{
              fontWeight: 700,
              lineHeight: "4.5rem",
              letterSpacing: "-0.035em",
            }}
          >
            I have a bad news for you
          </Typography>
          <Typography
            color="primary"
            variant="h5"
            paragraph
            sx={{
              width: "400px",
              mb: 4,
              lineHeight: "2.5rem",
              letterSpacing: "-0.035em",
            }}
          >
            The page you are looking for might be removed or is temporarily
            unavailable
          </Typography>
          <Button
            variant="contained"
            component="a"
            href="https://www.youtube.com/watch?v=2mcPLwhS43Q"
            target="_blank"
            size="large"
            sx={{ borderRadius: "none" }}
          >
            Back to home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
