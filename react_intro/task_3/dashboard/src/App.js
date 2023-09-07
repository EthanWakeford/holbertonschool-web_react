import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header className='App-header'>
        <div className='App-logo'></div>
        <h1>School dashboard</h1>
      </header>
      <main className='App-body'>
        <p>Login to access the full dashboard</p>
        <label for='email'>Email</label>
        <input type='email' name='email'></input>
        <label for='password'>Password</label>
        <input type='password' name='password'></input>
        <button>OK</button>
      </main>
      <footer className='App-footer'>
        <p>
          <i>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </i>
        </p>
      </footer>
    </>
  );
}

export default App;
