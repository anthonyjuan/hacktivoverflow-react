import { LOGIN } from '../actions/constants';


const initialState = {
  token: '',
  shouldRedirectSignIn: false,
  warning: ''
}

const loginUser = (payload) => {
  if(payload.success) {
    const newState = {
      token: payload.token,
      shouldRedirectSignIn: true,
      warning: '',
    }
    return newState;
  } else {
    return {
      ...initialState,
      warning: 'username or password invalid',
    }
  }
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: return loginUser(action.payload);
    default: return state;
  }
}

export default userReducer;
