import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import CardBlog from "../shared/CardBlog";
import { Grid } from "@mui/material";
import Loader from "../shared/Loader";

function Blogs(props) {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, error });
  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <Grid container spacing={2}>
        {data.posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CardBlog {...post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Blogs;
