import React from "react"
import photo from '../images/inn.jpg';

export default class ImageContent extends React.Component {
    render() {
      return (
        <div className="App">
            <header>
            <img src={photo} className="Photo border" alt="Old Faithful Inn"/>
            </header>
        </div>
      );
    }
}