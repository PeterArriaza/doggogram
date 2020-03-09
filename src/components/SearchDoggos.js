import React from "react";
import { Link } from "react-router-dom";

export default function SearchDoggos() {
  return (
    <div>
      <p>SearchDoggos</p>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
}
