import './App.css';
import Bulbasaur from './Bulbasaur.webp';
import facebook from './facebook.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import twitch from './twitch.png'

function App() {
  return (
    <div className="App">
      <div className="Header">
      <div>yo! i'm vince.</div>
      <div>✌️</div>
      </div>

  

      <header className="Bulbasaur">
     
        <img src={Bulbasaur} className="App-logo" alt="logo"/>

        <div>A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.</div>
      </header>

      <div className="Links">
        {/* <p><img src={facebook} alt="facebook icon"/></p>
        <p><img src={twitter} alt="twitter icon"/></p> */}
        <div className="Icons">
          <p>
            <a href="http://www.facebook.com/lAMVlNCE">
            <img src={facebook} alt="facebook icon"/>
            </a>
          </p>

          <p>
            <a href="http://www.instagram.com/vlnce">
            <img src={instagram} alt="instagram icon"/>
            </a>
          </p>

          <p>
            <a href="http://www.linkedin.com/in/vlnce">
            <img src={linkedin} alt="linkedin icon"/>
            </a>
          </p>

          <p>
            <a href="http://www.twitch.tv/vinceryan">
            <img src={twitch} alt="twitch icon"/>
            </a>
          </p>

          <p>
            <a href="http://www.twitter.com/vlnce">
            <img src={twitter} alt="twitter icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
