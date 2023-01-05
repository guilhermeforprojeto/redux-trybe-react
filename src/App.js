import React from 'react';

import './App.css';
import Sidebar from './components/Siderbar';
import Player from './components/Player'
import store from "./store"
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar />
          <Player />
        </Provider>

      </div>
    );
  }
}

export default App;
