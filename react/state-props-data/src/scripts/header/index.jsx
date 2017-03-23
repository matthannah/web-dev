import React from "react";

export default class Header extends React.Component {
  render() {
    console.log(this.props); // property title should be injected into this component
    return (
      <h1>
        this is the header
      </h1>
    );
  }
}
