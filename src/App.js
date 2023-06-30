import Bulbasaur from './Bulbasaur.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div>hi, i'm vince.</div>
        <div>✌️</div>
      </div>
    
      <header className="Bulbasaur">
        <img src={Bulbasaur} className="App-logo" alt="logo"/>
        <h1>Bulbasaur #0001</h1>
        <h2>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</h2>
      </header>


      <div className="Links">
        <p>a website made by <a href="http://www.linkedin.com/in/vlnce">vince ryan garcia</a></p>
      </div>
    </div>
  );
}

export default App;
