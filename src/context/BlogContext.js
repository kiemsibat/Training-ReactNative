import createDataContext from "./createDataContext";
import jsonSever from '../api/jsonSever'
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':{
      return action.payload
    }
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

const getBlogPosts = dispatch =>{
  return async () => {
    const response = await jsonSever.get('/blogposts')
    dispatch({type:'get_blogposts',payload:response.data})
  }
}

const addBlogPost = (dispatch) => {
  return async (title,content,callback) => {
    await jsonSever.post('/blogposts',{title:title,content:content})
    if(callback){
      callback();
    }
  }
};

const delBlogPost = (dispatch) => {

  return async (id) => {
    await jsonSever.delete(`/blogposts/${id}`)
    dispatch({type:'del_blogpost',payload:id})
  }
};

const editBlogPost = (dispatch) => {
  return async (id,title,content) => {
    await jsonSever.put(`/blogposts/${id}`,{title, content})
    dispatch({
      type: "edit_blogpost",
      payload: {id,title, content}, 
    });
  }
  // return (id,title, content) => {
  //   dispatch({
  //     type: "edit_blogpost",
  //     payload: { id,title, content}, 
  //   });
  
  // };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, delBlogPost,editBlogPost,getBlogPosts },
  []
);
