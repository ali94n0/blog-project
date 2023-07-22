import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Toolbar, Typography } from "@mui/material";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

function Header() {
  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
              flex={1}
              textAlign="Left"
            >
              React Blog Website
            </Typography>
            <BookRoundedIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
