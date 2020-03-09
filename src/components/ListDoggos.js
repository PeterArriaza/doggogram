import React from "react";
import { Link } from "react-router-dom";
import Doggo from "./Doggo";

export default function ListDoggos(props) {
  console.log(props.doggos);
  return (
    <div>
      <Link to="/search">
        <button>Search For Doggos</button>
      </Link>
      {props.doggos.length > 0 ? (
        <div>
          <p>DoggoList</p>
          <div className="list">
            {props.doggos.map((doggo, index) => (
              <Doggo breed={doggo} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
