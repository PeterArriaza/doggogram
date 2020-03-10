import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListDoggos from "./components/ListDoggos";
import SearchDoggos from "./components/SearchDoggos";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
  }

  addDoggoToCollection = doggo => {
    this.state.collection.includes(doggo)
      ? alert("That doggo is already in your collection!")
      : this.setState({ collection: [...this.state.collection, doggo] });
    console.log(this.state.collection);
  };

  handleRemoveCard = card => {
    const currentState = [...this.state.collection];
    const newState = currentState.filter(breed => breed !== card);
    this.setState({ collection: newState });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="App-body">
            <Route
              exact
              path="/"
              render={() => (
                <ListDoggos
                  doggos={this.state.collection}
                  removeCard={card => this.handleRemoveCard(card)}
                />
              )}
            />
            <Route
              exact
              path="/search"
              render={props => (
                <SearchDoggos
                  {...props}
                  addDoggo={doggo => this.addDoggoToCollection(doggo)}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
