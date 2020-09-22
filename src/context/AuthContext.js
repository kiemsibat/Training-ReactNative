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
        case 'signin':  
            return {errorMessage:'',token:action.payload}   
        case 'clear_error_message':
            return {...state,errorMessage:''}
        default:
            return state;
    }
};

const tryLocalSignin = dispatch =>async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type:'signin',payload:token});
        navigate('TrackList');
    }else{
        navigate('Signup');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type:'clear_error_message'})
}

const signup = dispatch => async ({email,password }) => {
        try{
            const response = await trackerApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type:'signup',payload:response.data.token})
            navigate('Signin');
        }catch(err) {
            dispatch({
            type:'add_error',
            payload:'Some thing went wrong'
        })
        }
    };


const signin = dispatch => async ({email,password}) => {

        try{
            const response = await trackerApi.post('/signin', {email,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token});
            navigate('TrackList');
        }catch(err) {
            dispatch({
            type:'add_error',
            payload:'Some thing went wrong'
        })
        }
};


export const {Provider,Context} = createDataContext(
    authReducer,
    {signup,signin,clearErrorMessage,tryLocalSignin},
    {token:null,errorMessage:''}
)