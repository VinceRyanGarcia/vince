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
      <marquee behavior="alternate">you should hire vince. you should hire vince. you shuold hire vince. you should hire vince.</marquee>
      </div>

      <header className="Bulbasaur">
     
        <img src={Bulbasaur} className="App-logo" alt="logo"/>
        <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
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
            <a href="http://www.twitter.com/vlnce">
            <img src={twitter} alt="twitter icon"/>
            </a>
          </p>

          <p>
            <a href="http://www.twitch.tv/vinceryan">
            <img src={twitch} alt="twitch icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
