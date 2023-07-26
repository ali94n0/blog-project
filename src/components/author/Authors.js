import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Authors(props) {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  return (
    <Grid
      container
      sx={{
        boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
        borderRadius: 3,
      }}
    >
      {data.authors.map((author, index) => (
        <Link
          to={`/authors/${author.slug}`}
          key={author.id}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            padding={1}
          >
            <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </Link>
      ))}
    </Grid>
  );
}

export default Authors;
