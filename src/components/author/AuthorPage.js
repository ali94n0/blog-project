import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Container, Divider, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardBlog from "../shared/CardBlog";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h4>Loading...</h4>;
  if (error) return <p>something went wrong...</p>;
  const {
    author: { name, field, avatar, description, posts },
  } = data;
  console.log(name);
  return (
    <Container maxWidth="lg">
      <Grid Container>
        <Grid
          item
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginTop={5}
          xs={12}
        >
          <Avatar src={avatar.url} sx={{ width: "150px", height: "150px" }} />
          <Typography component="h3" variant="h5" mt={2}>
            {name}
          </Typography>
          <Typography component="p" variant="p" mt={1} color={"text.secondary"}>
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12} marginTop={5}>
          <div
            style={{ textAlign: "left" }}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
        <Divider variant="middle" sx={{ margin: 4 }} />
        <Grid item xs={12} marginTop={4}>
          <Typography
            component="h4"
            variant="h6"
            fontWeight="bold"
            sx={{ textAlign: "left" }}
          >
            {name}'s Blogs:
          </Typography>
          <Grid container marginTop={1} spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardBlog
                  title={post.title}
                  image={post.image}
                  slug={post.slug}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
