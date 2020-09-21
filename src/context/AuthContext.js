import createDataContext from '../context/createDataContext';

const authReducer = (state,action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const {Provider,Context} = createDataContext(
    authReducer,
    {},
    {isSignedIn:false}
)