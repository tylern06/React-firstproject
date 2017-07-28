import React from "react";
import "./Nested.css";
import { Route, Link } from "react-router-dom";
import { Assignments, Lectures, Events } from "./nestedComponents.js";
class Nested extends React.Component {
  render() {
    console.log("lectures", Lectures);
    return (
      <div>
        {/* Side Menu */}
        <div id="sub-menu" className="col-lg-3 col-sm-3 col-xs-4">
          <h2>React Course</h2>
          <h4>Nested Routes</h4>
          <hr />
          <p>
            <Link to={`${this.props.match.url}`}>Assignments</Link>
          </p>
          <p>
            <Link to={`${this.props.match.url}/Lectures`}>Lectures</Link>
          </p>
          <p>
            <Link to={`${this.props.match.url}/Events`}>Events</Link>
          </p>
        </div>

        {/* Main menu triggered from the route */}
        {/* create sub-routes you'll have to use an approach like we've shown below. */}
        <Route exact path={`${this.props.match.url}`} component={Assignments} />
        <Route path={`${this.props.match.url}/Lectures`} component={Lectures} />
        <Route path={`${this.props.match.url}/Events`} component={Events} />
      </div>
    );
  }
}
export default Nested;
