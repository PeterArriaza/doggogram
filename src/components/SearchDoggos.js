import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchDoggos.css";

export default class SearchDoggos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breedList: null
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => this.setState({ breedList: data.message }));
  }

  render() {
    console.log("breeds are", this.state.breedList);
    let breeds;
    this.state.breedList === null
      ? (breeds = "")
      : (breeds = Object.keys(this.state.breedList).map((breed, index) => (
          <option value={breed} key={index}>
            {breed}
          </option>
        )));

    return (
      <div>
        <p>SearchDoggos</p>
        <form>
          <label>Pick a breed:</label>
          <select id="breeds">{breeds}</select>
        </form>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
