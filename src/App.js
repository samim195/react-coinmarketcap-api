import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import { CardList } from './components/card-list/card-list.jsx';
import { CryptoPage } from './components/crypto/crypto.jsx'

import './App.css';

// const CryptoPage = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// );

class App extends Component {
  constructor() {
    super();

    this.state = {
      cryptos: []
    }
  }
    componentDidMount() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      fetch(proxyUrl + 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', 
      {
        method: "GET",
        qs: {
          'start' : '1',
          'limit' : '10',
          'convert' : 'USD'
        },
        headers: {
          'X-CMC_PRO_API_KEY': '',
          'content-type': 'application/json',
          'accept': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Vary': 'Origin',
          // 'mode': 'no-cors'
        },
        json: true,
        gzip: true
      })
      .then(response => response.json())
      .then(cryptoscurrency => this.setState({ cryptos: cryptoscurrency['data']}))
      // .then(crypto => Object.entries(this.state.cryptos).map(crypto => crypto.map(c => console.log(c.name))));
    }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/Home' component={CryptoPage}/>
        <Route exact path='/Crypto'>
            <CardList cryptos={this.state.cryptos.slice(0,8)}/>
          </Route>
      </Switch>
      </div>
    );
  }
}

export default App;
