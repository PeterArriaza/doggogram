import React from "react";
import { Link } from "react-router-dom";
import Doggo from "./Doggo";
import "../styles/ListDoggos.css";

export default function ListDoggos(props) {
  console.log(props.doggos);
  return (
    <div className="listContainer">
      <Link to="/search">
        <button>Search For Doggos</button>
      </Link>
      {props.doggos.length > 0 ? (
        <div>
          <p>DoggoList</p>
          <div className="list">
            {props.doggos.map((doggo, index) => (
              <Doggo
                breed={doggo}
                key={index}
                val={index}
                removeCard={props.removeCard}
              />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
