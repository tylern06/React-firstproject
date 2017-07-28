import React from "react";
class Assignments extends React.Component {
  render() {
    return (
      <div id="assignments" className="col-lg-9 col-sm-9 col-xs-8 main-content">
        <h3>Assignments</h3>
        <h5>
          This is a list of all of the assignment that have to be completed by
          tomorrow.
        </h5>
      </div>
    );
  }
}
class Lectures extends React.Component {
  render() {
    return (
      <div id="lectures" className="col-lg-9 col-sm-9 col-xs-8 main-content">
        <h3>Lectures</h3>
        <h5>
          This is a list of all of the lecture material that has to be completed
          by tomorrow.
        </h5>
      </div>
    );
  }
}
class Events extends React.Component {
  render() {
    return (
      <div id="events" className="col-lg-9 col-sm-9 col-xs-8 main-content">
        <h3>Events</h3>
        <h5>
          This is a list of all of the events that we will be having this week.
        </h5>
      </div>
    );
  }
}
export { Assignments, Lectures, Events };
