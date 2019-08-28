import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";

import "./App.css";

import drizzleOptions from "./drizzleOptions";
import MyContainer from "./MyContainer";

//Include Portis Usage
/*import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('30ea7db0-7aca-48cf-8231-5dce4c97e014', 'mainnet');
const web3 = new Web3(portis.provider);*/

class App extends Component {

  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <MyContainer />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
