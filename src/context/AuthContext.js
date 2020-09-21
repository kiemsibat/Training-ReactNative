import createDataContext from '../context/createDataContext';
import trackerApi from '../api/tracker'
const authReducer = (state,action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({email,password }) => {
        try{
            const response = await trackerApi.post('/signup',{email,password});
            console.log(response.data);
        }catch(err) {
            console.log(err.message);
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