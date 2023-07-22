import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={3}>
          <Typography component="h3" variant="h6" fontWeight="bold" mb={2}>
            Athurs:
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={3}>
          <Typography omponent="h3" variant="h6" fontWeight="bold" mb={2}>
            Blogs:
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
