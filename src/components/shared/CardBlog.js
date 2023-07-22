import React from "react";
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  Card,
  Divider,
} from "@mui/material";

const CardBlog = ({ title, author, image, slug }) => {
  return (
    <Card
      sx={{
        boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
        borderRadius: 3,
      }}
    >
      <CardHeader
        avatar={<Avatar src={author.avatar.url} />}
        title={
          <Typography component="p" variant="p" color="secondary.main">
            {author.name}
          </Typography>
        }
      ></CardHeader>
      <CardMedia component="img" image={image.url} alt={title} />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={400}
        >
          {title.split(" ").length > 8
            ? `${title.split(" ").slice(0, 9).join(" ")} ...`
            : title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions sx={{ justifyContent: "center", marginBottom: 1 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ borderRadius: 3, width: "100%" }}
        >
          Read more...
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBlog;
