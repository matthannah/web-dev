import React from "react";

export default class Footer extends React.Component {
  render() {
    // we can refer to props in the render return too!
    return (
      <h3>
        {this.props.title}
      </h3>
    );
  }
}
