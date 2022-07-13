import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Style from './style.Module.css';
// import { login } from '../../../request/requests/userRequest';
import Playing from './Playing';
import createChangeLoginStateAction from '../../../store/login/login_action';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

class Main extends React.Component<any, any> {
  /* constructor(props: any) {
    super(props);
    this.state = { width: 0 };
  } */

  handleClick = () => {
    const { changeLoginState } = this.props;
    changeLoginState(true);
  };

  handleClickMax = (type: string) => {
    window.electron.ipcRenderer.sendMessage(type, []);
  };

  render() {
    return (
      <div className={Style.main}>
        <Routes>
          <Route
            path="/recommend"
            element={
              <div>
                <Header />
                <MainBody />
              </div>
            }
          />
          <Route
            path="/playing"
            element={
              <div>
                <Header />
                <Playing />
              </div>
            }
          />
        </Routes>
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
