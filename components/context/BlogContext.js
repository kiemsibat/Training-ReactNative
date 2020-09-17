import React from "react";
const BlogContext = React.createContext();

export const Provider = BlogContext.Provider;

export const BlogProvider = ({children}) => {
  const blogPosts = [
    {
      title: "customer #1",
    },
    {
      title: "customer #2",
    },
    {
      title: "customer #3",
    },
  ];
  return(
      <Provider value={blogPosts}>{children}</Provider>
  )
};

export default BlogContext;
