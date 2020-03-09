import React from "react";
import { Link } from "react-router-dom";

export default function ListDoggos() {
  return (
    <div>
      <p>DoggoList</p>
      <Link to="/search">
        <button>Search For Doggos</button>
      </Link>
    </div>
  );
}
