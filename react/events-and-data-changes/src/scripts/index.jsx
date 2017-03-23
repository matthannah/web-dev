import React from "react";
import ReactDOM from "react-dom";

import Footer from "./footer";
import Header from "./header";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "Welcome" };
  }

  // Lets create a function on this component that can change the title
  changeTitle(title) { // pass in a title
    this.setState({ title }); // call setState and set title equal to title
  }

  render() {
    return (
      <div>
        {/*
          Set header property "changeTitle" to the changeTitle function and
          bind "this" to it. "this" is the the instance of a layout component
        */}
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById("react"));
