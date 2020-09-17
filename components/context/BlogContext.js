import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "del_blogpost":
      return state.filter((blogpost) => blogpost.id !== action.payload);
    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      })
    
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content,callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title: title, content: content }, 
    });
    callback();
  };
};

const delBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "del_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id,title, content) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id,title, content}, 
    });
  
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, delBlogPost,editBlogPost },
  []
);
