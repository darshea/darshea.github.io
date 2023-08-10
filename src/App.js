import { Link } from "react-router-dom";
import './App.css';
import ItemButton from '/Users/danbikim/Desktop/artelier/src/components/ItemButton';
import resume from './Resume.pdf';

function App() {
  return (
    <div>
      <div className='nav'>
        <Link to="/">
          <ItemButton text="Danbi Kim" to="/"/>
        </Link>
      </div>
      <div className='sndnav'>
        <p className='dfont'>find me.</p>
        <p className='dfont'>work.</p>
        <p className='dfont'>work; provide under request.</p>
      </div>
      <div className="container">
        <div>
          <a href={resume} target="_blank" rel="noreferrer">
            <ItemButton text="Resume" to="/resume"/> 
          </a>
          <Link to="/biography">
            <ItemButton text="Biography" to="/biography" />
          </Link>
          <ItemButton text="GitHub" to="https://github.com/darshea" />
          <ItemButton text="LinkedIn" to="https://www.linkedin.com/in/danbi-kim-b97833191" />
          <Link to="/contactme">
            <ItemButton text="Contact Me" to="/contactme" />
          </Link>
        </div>
        <div>
          <Link to="/toggle_intro">
            <ItemButton text="Toggle" to="/toggle_intro"/>
          </Link>
          <Link to="/rubberduck_intro">
            <ItemButton text="Rubber Duck" to="/rubberduck_intro" />
          </Link>
          <Link to="/">
            <ItemButton text="Portfolio" to="/" />
          </Link>
        </div>
        <div>
          <ItemButton text="Storybook" to="https://github.com/darshea/CMPT-276-Group-13" />
          <ItemButton text="Minutebook Generator" to="/construction" />
        </div>
      </div>
      <div className='bottomline'>
        <p>John 8:32</p>
      </div>
    </div>
  );
}

export default App;