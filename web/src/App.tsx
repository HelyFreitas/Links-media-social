import {
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "phosphor-react";
import "./App.scss";
import User from "./assets/user.jpg";

function App() {
  return (
    <div className="App-container">
      <div className="form">
        <div className="img-container">
          <img src={User} alt="" />
          <p>Helyel Freitas Eulaio</p>
        </div>
        <section className="links">
          <a className="first" href="">
            <GithubLogo className="logos" weight="fill" />
            Github
          </a>
          <a className="second" href="">
            <InstagramLogo className="logos" weight="fill" />
            Instagram
          </a>
          <a className="third" href="">
            <LinkedinLogo className="logos" weight="fill" />
            Linkedin
          </a>
          <a className="bedroom" href="">
            <DiscordLogo className="logos" weight="fill" />
            Discord
          </a>
          <a className="fifth" href="">
            <YoutubeLogo className="logos" weight="fill" />
            Youtube
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
