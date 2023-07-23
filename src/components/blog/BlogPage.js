import React from "react";
import { useParams } from "react-router-dom";

function BlogPage() {
  const { slug } = useParams();
  return <div>{slug}</div>;
}

export default BlogPage;
