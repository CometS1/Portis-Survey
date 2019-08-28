import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Include Portis Usage
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('30ea7db0-7aca-48cf-8231-5dce4c97e014', 'mainnet');
const web3 = new Web3(portis.provider);

/*web3.eth.getAccounts().then(accounts => {
  document.getElementById("app").innerHTML = `<p>Wallet Address: ${
    accounts[0]
  }</p>`;
});*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
