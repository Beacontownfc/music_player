import react from 'react';
import { connect } from 'react-redux';
import Style from './style.Module.css';
import createChangeLoginStateAction from '../../../../store/login/login_action';
import { login } from '../../../../request/requests/userRequest';

class LoginDialog extends react.Component<any, any> {
  handleClick = (data: any) => {
    const { changeLoginState } = this.props;
    changeLoginState(data);
  };

  handleLoginClick = () => {
    login(this.state.userName, this.state.password)
      .then((value) => {
        console.log(value);
        return 'success';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  state = { userName: '', password: '' };

  handleInputBlur = (type: any, value: any) => {
    this.setState({ [type]: value });
  };

  render() {
    const { isLogin } = this.props;

    return (
      <div>
        {isLogin ? (
          <div className={Style.dialog}>
            <div className={Style.dialogBox}>
              <div className={Style.desc}>请输入账号：</div>
              <input
                className={Style.dialogInput}
                type="text"
                onBlur={(event) => {
                  this.handleInputBlur('userName', event.target.value);
                }}
              />
              <div className={Style.desc}>请输入密码：</div>
              <input
                className={Style.dialogInput}
                type="password"
                onBlur={(event) => {
                  this.handleInputBlur('password', event.target.value);
                }}
              />
              {/* eslint-disable-next-line react/button-has-type */}
              <button className={Style.btn1} onClick={this.handleLoginClick}>
                登录
              </button>
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                className={Style.btn2}
                onClick={() => {
                  this.handleClick(false);
                }}
              >
                取消
              </button>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { isLogin: state.login_reducer.isLogin };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeLoginState(data: any) {
      dispatch(createChangeLoginStateAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
