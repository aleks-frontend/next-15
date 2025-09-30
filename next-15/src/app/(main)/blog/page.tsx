import React from "react";

const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div>Blog Page</div>;
};

export default Blog;
