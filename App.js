import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;
