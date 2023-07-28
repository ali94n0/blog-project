import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../../graphql/queries";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });
  if (loading || error) return null;
  console.log({ loading, data, error });
  return (
    <Grid
      container
      margin={3}
      sx={{
        boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12} padding={2}>
        <Typography
          component="p"
          variant="h6"
          fontWeight="bold"
          color={"primary.dark"}
          textAlign={"left"}
        >
          Comments:
        </Typography>
      </Grid>
      {data.comments.map((comment, index) => (
        <Grid
          item
          xs={12}
          key={comment.id}
          display={"flex"}
          flexDirection={"column"}
          margin={1}
          padding={1}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Avatar sx={{ marginRight: 2 }}>{comment.name[0]}</Avatar>
            <Typography component="p" variant="p" fontWeight="bold">
              {comment.name}
            </Typography>
          </Box>
          <Typography
            component="p"
            variant="p"
            fontWeight={"300"}
            fontSize={14}
            textAlign={"left"}
            padding={2}
          >
            {comment.body}
          </Typography>
          {index !== data.comments.length - 1 && <Divider variant="middle" />}
        </Grid>
      ))}
    </Grid>
  );
}

export default Comments;
