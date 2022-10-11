import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import './App.css';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Provider store={store} >
        <MetaMaskProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </MetaMaskProvider>
      </Provider>
    </>
  );
}

export default App;
