import React from "react"
import photo2 from '../images/1904.jpg';

export default class ImageContent2 extends React.Component {
    render() {
      return (
        <div className="App">
            <header>
            <img src={photo2} className="Photo2 border" alt="Old Faithful Inn in 1904"/>
            </header>
        </div>
      );
    }
}