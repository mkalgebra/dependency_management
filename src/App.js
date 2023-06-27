import logo from './logo.svg';
import './App.css';
import randomstring from 'randomstring';

function App() {
  return (
    <div className="App">
      {randomstring.generate(5)}
    </div>
  );
}

export default App;
