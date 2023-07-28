import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3} mt={10}>
        <Grid item xs={12} md={3} mt={3}>
          <Typography
            component="h3"
            variant="h6"
            fontWeight="bold"
            mb={2}
            color={"primary.dark"}
          >
            Authors:
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={3}>
          <Typography
            component="h3"
            variant="h6"
            fontWeight="bold"
            mb={2}
            color={"primary.dark"}
          >
            Blogs:
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
