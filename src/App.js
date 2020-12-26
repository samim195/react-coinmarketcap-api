import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.jsx';

import './App.css';

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
          'X-CMC_PRO_API_KEY': '84a48385-9cb0-467f-9a63-09b640b2db75',
          'content-type': 'application/json',
          'accept': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Vary': 'Origin',
          'mode': 'no-cors'
        },
        json: true,
        gzip: true
      })
      .then(response => response.json())
      .then(cryptoscurrency => this.setState({ cryptos: cryptoscurrency['data']}))
      // .then(crypto => console.log(this.state.cryptos[0].name));
    }
  
  render() {
    return (
      <div className="App">
      <CardList name="Samim">
        {
          Object.entries(this.state.cryptos).map(crypto => crypto.map(c => <h1 key={c.id}>{c.name}</h1>))
        }
      </CardList>
      </div>
    );
  }
}

export default App;
