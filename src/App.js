import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers([
      {name: 'Bravo'},
      {name: 'Tango'},
      {name: 'Siera'},
      {name: 'Kukaracha'},
    ])
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            users.map((u, i) => (
              <div key={`${u.name}-${i}`}>
                <p>{u.name}</p>
              </div>
            ))
          }
        </a>
        <p>hghghghghghdf</p>
      </header>
    </div>
  );
}

export default App;
