import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { POST_COMMENT } from "../../graphql/mutations";
// import { toast } from "react-toastify";
import Validation from "../shared/Validation";
import { toast } from "react-toastify";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [msg, setMsg] = useState("");

  const [postComment, { loading, data, error }] = useMutation(POST_COMMENT, {
    variables: {
      name,
      email,
      body,
      slug,
    },
  });
  const clickHandler = () => {
    if (name && body && email) {
      if (msg.email) {
        toast.warning(msg.email, { position: "top-center" });
      } else if (!msg.email) {
        postComment();
        toast.success(
          "your comment has been registered and is waiting confirmation!",
          { position: "top-center" }
        );
      }
    } else {
      toast.warning("Enter your data!", { position: "top-center" });
    }
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
        borderRadius: 3,
      }}
      margin={3}
    >
      <Grid item xs={12} padding={2}>
        <Typography
          component="p"
          variant="h6"
          fontWeight="bold"
          color={"primary.dark"}
          textAlign={"left"}
        >
          Comment Form:
        </Typography>
      </Grid>
      <Grid item xs={12} padding={2}>
        <TextField
          label="name"
          type="text"
          value={name}
          size="small"
          sx={{ margin: 1, width: "98%" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="email"
          type="text"
          value={email}
          size="small"
          sx={{ margin: 1, width: "98%" }}
          onChange={(e) => {
            setEmail(e.target.value);
            setMsg(Validation(e.target.value));
            console.log(msg.email);
          }}
        />
        <TextField
          label="comment"
          type="text"
          value={body}
          size="small"
          multiline
          minRows={4}
          sx={{ margin: 1, width: "98%" }}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} px={2}>
        {loading ? (
          <Button
            disabled
            variant="outlined"
            size="sm"
            sx={{ marginBottom: 2 }}
          >
            Submiting ...
          </Button>
        ) : (
          <Button
            variant="contained"
            size="sm"
            sx={{ marginBottom: 2 }}
            onClick={clickHandler}
          >
            Submit
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default CommentForm;
