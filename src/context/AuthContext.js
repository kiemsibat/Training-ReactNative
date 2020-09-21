import createDataContext from '../context/createDataContext';
import trackerApi from '../api/tracker'
const authReducer = (state,action) => {
    switch (action.type) {
        case 'add_error' :
            return {...state,errorMessage:action.payload}
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({email,password }) => {
        try{
            const response = await trackerApi.post('/signup',{email,password});
            console.log(response.data,{isSignedIn:true});
        }catch(err) {
            dispatch({type:'add_error',payload:'Some thing went wrong'})
        }
    };
};

const signin = (dispatch) => {
    return({email,password}) => {
        //try to signin
        //handle success by updating state up
        //handle failure  by showing error message (some how)
    }
}

const signout = (dispatch) => {
    return () => {
        // somehow signout
    };
};

export const {Provider,Context} = createDataContext(
    authReducer,
    {signup,signin,signout},
    {isSignedIn:false}
)