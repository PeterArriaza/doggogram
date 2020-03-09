import React from "react";
import "../styles/Doggo.css";

export default class ListDoggos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgURL: "" };
  }
  componentDidMount() {
    fetch(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => this.setState({ imgURL: data.message }));
  }

  render() {
    return (
      <div>
        <h2>{this.props.breed}</h2>
        <img src={this.state.imgURL} className="doggoImage"></img>
      </div>
    );
  }
}
