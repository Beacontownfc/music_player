// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './component/Main';
import SiderBar from './component/SiderBar';

export default class App extends React.Component<any, any> {
  Hello = () => {
    return <span>hello</span>;
  };

  render() {
    return (
      <HashRouter>
        <div className="bigBox">
          <SiderBar />
          <Main />
        </div>
      </HashRouter>
    );
  }
}
