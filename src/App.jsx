import logo from './logo.svg';
import './App.css';
import {Todos} from "./components/Todo"

function App() {
  return (
    <div className="App">
      <marquee>Add Todo Here</marquee>
      < Todos />
    </div>
  );
}

export default App;
