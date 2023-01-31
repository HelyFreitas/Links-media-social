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
            <GithubLogo className="logo-git" size={30} weight="fill" />
            Github
          </a>
          <a className="second" href="">
            <InstagramLogo className="logo-insta" size={30} weight="fill" />
            Instagram
          </a>
          <a className="third" href="">
            <LinkedinLogo className="logo-link" size={30} weight="fill" />
            Linkedin
          </a>
          <a className="bedroom" href="">
            <DiscordLogo className="logo-dc" size={30} weight="fill" />
            Discord
          </a>
          <a className="fifth" href="">
            <YoutubeLogo className="logo-yt" size={30} weight="fill" />
            Youtube
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
