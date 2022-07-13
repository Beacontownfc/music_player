import { CHNAGELOGINSTATE } from './login_constant';

const initState = { isLogin: false };

function LoginReducer(preState = initState, action: { type: any; data: any }) {
  const { type, data } = action;
  if (preState === undefined) return initState;
  switch (type) {
    case CHNAGELOGINSTATE:
      preState.isLogin = data;
      return { ...preState };
    default:
      return initState;
  }
}

export default LoginReducer;
