import React from 'react';

import './App.css';
import Sidebar from './components/Siderbar';
import Player from './components/Player'
import { categories } from './data'
import store from "./store"
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...categories],
    };
  }
  render() {
    // console.log(categories);
    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar categories={this.state.categories} />
          <Player />
        </Provider>

      </div>
    );
  }
}

export default App;
