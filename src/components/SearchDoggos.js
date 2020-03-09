import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchDoggos.css";

export default class SearchDoggos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breedList: null,
      breed: "affenpinscher"
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => this.setState({ breedList: data.message }));
  }

  handleChange = breed => {
    this.setState({ breed });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addDoggo(this.state.breed);
    this.props.history.push("/");
  };

  render() {
    console.log("breeds is", this.state.breed);
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
        <p>Search Doggos</p>
        <form>
          <label>Pick a breed:</label>
          <select id="breeds" onChange={e => this.handleChange(e.target.value)}>
            {breeds}
          </select>
          <div className="buttonRow">
            <Link to="/">
              <button>Cancel</button>
            </Link>
            <button
              type="submit"
              id="submitDoggo"
              onClick={e => this.handleSubmit(e)}
            >
              Add Breed
            </button>
          </div>
        </form>
      </div>
    );
  }
}
