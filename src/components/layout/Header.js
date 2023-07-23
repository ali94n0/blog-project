import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Toolbar, Typography } from "@mui/material";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import { Link } from "react-router-dom";

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
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              <BookRoundedIcon sx={{ textDecoration: "none" }} />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
