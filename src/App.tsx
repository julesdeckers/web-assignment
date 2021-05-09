import * as React from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import EditButton from "components/Button/EditButton";
import Button from "components/Button/Button";
import './App.css';

function App() {
  const cms = new TinaCMS({
    sidebar: true,
  });
  return (
    <TinaProvider cms={cms}>
              <header>
          <h1>Stampix free prints</h1>
          <div className="locale">
            <p>NL</p>
            <p>FR</p>
            <p>EN</p>
          </div>
        </header>
      <div className="App">
        <div className="card">
          <p>For consumers</p>
          <h2>Install the Stampix App and order prints in just a few clicks.</h2>
          <Button content="Start printing" />
        </div>
        <div className="card other">
        <p>For business</p>
        <h2>Build emotianal loyalty and brand engagement</h2>
          <Button content="Stampix for business" />
        </div>
      </div>
      {/* <EditButton /> */}
    </TinaProvider>
  );
}

export default App;
