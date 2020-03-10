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
      <div className="doggoCard">
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from 
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <div className="cardTitle">
          <img
            className="delete"
            alt="delete"
            src="../img/delete.png"
            onClick={() => this.props.removeCard(this.props.breed)}
          ></img>
          <h2>{this.props.breed}</h2>
        </div>
        <img src={this.state.imgURL} className="doggoImage"></img>
      </div>
    );
  }
}
