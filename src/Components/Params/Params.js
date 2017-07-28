import React from "react";
import { Link } from "react-router-dom";

import "./Params.css";
class Params extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          <Link to="/params/Barney">Barney</Link>
        </p>
        <p>
          <Link to="/params/Frank">Frank</Link>
        </p>
        <p>
          <Link to="/params/Goose">Goose</Link>
        </p>
        <h1>
          Params Component | Name: {this.props.match.params.name}
        </h1>
      </div>
    );
  }
}
export default Params;
