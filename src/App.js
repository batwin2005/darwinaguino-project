import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Darwin Aguino</code> Ejemplo React JS.
        </p>
        <div className="mini bg-light m-auto shadow-lg p-3 mb-5 bg-white rounded fw-bold">
        <div className="d-flex justify-content-center">
          <div className="p-3">
            <Todo />
          </div>
          </div>
        </div>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          2024
        </a>
      </header>
    </div>
  );
}

export default App;
