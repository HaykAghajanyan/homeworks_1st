import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-body">
            <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
