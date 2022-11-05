import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import React from "react";

const HeaderTitle = styled(Typography)`
  display: flex;
  justify-content: flex-start;

  font-family: "Inconsolata";
  font-weight: 700;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  line-height: 32px;
  padding: 32px;
`;

const Header = () => {
  return (
    <Grid item xs={12}>
      <HeaderTitle component="h1" variant="h6" color="primary">
        404 not found
      </HeaderTitle>
    </Grid>
  );
};

export default Header;
