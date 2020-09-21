import createDataContext from '../context/createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef'
const authReducer = (state,action) => {
    switch (action.type) {
        case 'add_error' :
            return {...state,errorMessage:action.payload}
        case 'signup':
            return{errorMessage:'',token:action.payload}    
        default:
            return state;
    }
};

const signup = dispatch => async ({email,password }) => {
        try{
            const response = await trackerApi.post('/signup',{email,password});
            // console.log(response.data,{isSignedIn:true});
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type:'signup',payload:response.data.token})
            navigate('Signin');
        }catch(err) {
            dispatch({type:'add_error',payload:'Some thing went wrong'})
        }
    };


const signin = ({email,password }) => {
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
    {token:null,errorMessage:''}
)