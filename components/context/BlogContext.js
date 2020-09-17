import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case "del_blogpost":
      return state.filter((blogpost) => blogpost.id !== action.payload)
        
       
      
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const delBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "del_blogpost",payload:id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, delBlogPost},
  []
);
