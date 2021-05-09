import React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import EditButton from "components/Button/EditButton"
import logo from './logo.svg';
import './App.css';

function App() {
  const cms = new TinaCMS({
    sidebar: true,
  });
  return (
    <TinaProvider cms={cms}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <EditButton />
    </TinaProvider>
  );
}

export default App;
