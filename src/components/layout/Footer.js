import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer style={{ marginTop: "30px" }}>
      <Typography
        component="p"
        variant="p"
        color="primary.main"
        bgcolor="secondary.light"
        padding={1}
      >
        Blog Project with GraphQl | ali94n0-2023
      </Typography>
    </footer>
  );
}

export default Footer;
