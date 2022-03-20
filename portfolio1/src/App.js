import logo from './images/logo.png';
import './App.css';
import TextContent from "./components/text.js";
import ImageContent from "./components/image.js";
import ImageContent2 from "./components/image2";
import TitleContent from "./components/title.js";
import Disclaimer from "./components/disclaimer.js";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <img src={logo} className="App-logo" alt="UCF Pegasus Logo" />
        <h2>Welcome to Portfolio 1!</h2>
      </header>
      
      <div className="pageContent">
        <h2><b>Nathan Parrett</b><br/>
        <b>DIG 4639C - Mobile Development</b></h2>
      </div>


      <div className="SecondBox">
        
        <TitleContent/>
        <br/>
        <ImageContent/>
        <TextContent/>
        <ImageContent2/>
        <br/><br/>
      </div>
      <Disclaimer/>
    </div>
  );
}

export default App;
