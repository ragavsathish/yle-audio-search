import React from 'react';
import SearchAudio from '../containers/SearchAudio';
import ListAudioTitles from '../containers/ListAudioTitles';

import '../stylesheets/App.css';
import logo from '../images/bg-text.png';

const App = () => (
  <div>
    <div className="App-logo">
      <img src={logo} alt=""></img>
    </div>
    <SearchAudio />
    <ListAudioTitles />
  </div>
)

export default App
