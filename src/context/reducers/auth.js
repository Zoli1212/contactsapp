import authInitialState from "../initialstate/authInitialState";

const auth = (state, { payload, type}) => {

    switch(type){

        case 'REGISTER_LOADING':
        case 'LOGIN_LOADING':
            return {...state, auth: {

                ...state.auth,
                error: false,
                loading: true

            }}

        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
                  return {
                    ...state,
                    auth: {
                      ...state.auth,
                      loading: false,
                      data: payload,
                    },
                  };
        case 'REGISTER_ERROR':
        case 'LOGIN_ERROR':
            return {...state,
                auth: {

                    ...state.auth,
                    loading: false,
                    error: payload

                }

            }
        case 'LOGOUT_USER': {
            console.log('logging out')
            return { ...state, ...authInitialState}
        }
    


        default : return state;

    }

}

export default auth;