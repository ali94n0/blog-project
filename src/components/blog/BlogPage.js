import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import Loader from "../shared/Loader";
import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  const navigate = useNavigate();
  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  const {
    post: { title, author, image, content, dateCreatedAt },
  } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginBottom={3}
        >
          <Typography
            component="h1"
            variant="h5"
            color="primary.dark"
            padding={2}
            fontWeight={"bold"}
          >
            {title}
          </Typography>
          <Button
            padding={"5px"}
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackRoundedIcon
              style={{ color: "#424242", rotate: "180deg" }}
            />
          </Button>
        </Grid>
        <Grid item xs={12} marginBottom={3}>
          <img
            src={image.url}
            alt={title}
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginBottom={3}
        >
          <Box component="div" display={"flex"} alignItems={"center"}>
            <Avatar src={author.avatar.url} sx={{ marginRight: "10px" }} />
            <Link
              to={`/authors/${author.slug}`}
              style={{ textDecoration: "none", color: "#37474f" }}
            >
              <Box
                component="div"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
              >
                <Typography component="p" variant="p" fontWeight={"bold"}>
                  {author.name}
                </Typography>
                <Typography component="p" variant="p" fontSize={13}>
                  {author.field}
                </Typography>
              </Box>
            </Link>
          </Box>
          <Typography component="span" variant="p" fontSize={12}>
            Created At: {dateCreatedAt}
          </Typography>
        </Grid>
        <Grid item xs={12} marginBottom={3}>
          <div
            dangerouslySetInnerHTML={{ __html: content.html }}
            style={{
              textAlign: "left",
              textDecoration: "none",
              lineHeight: "30px",
            }}
          ></div>
        </Grid>
        <Divider variant="middle" />
        <CommentForm slug={slug} />
        <Divider variant="middle" />
        <Comments slug={slug} />
      </Grid>
    </Container>
  );
}

export default BlogPage;
