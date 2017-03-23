import React from "react";
import ReactDOM from "react-dom";

import Footer from "./footer";
import Header from "./header";

class Layout extends React.Component {
  // We can set state in the contructor if we want
  constructor() {
    super(); // remember to call super, because we want to call our parents
             // (React.Component) contructor method!
    this.state = {
      name: "Goose",
      title: "States can be used as props!"
    };

    // This is the awesome thing about react... if we update this.state.name,
    // then it will compare its virtual DOM to the DOM, and ONLY update that
    // element that changed.
  }

  render() {
    // set a timeout to update the name!
    setTimeout(() => {
       // the setState method is used to update states of components
      this.setState({ name: "Only updated ME!" });
    }, 1000); // after 4 seconds the state will update

    // NOTE: This timeout will keep being set. That is because render() will be
    // called again once this.state.name is updated, causing setTimeout to be called
    // again. This is just for demonstration :)

    const footerTitle = "a property in footer" // can use the {} syntax as well

    return (
      <div>
        {this.state.name}
        <Header
          title = "this is a property that is injected into header"
        />
        <Footer
          title = {this.state.title}
        />
        <Footer
          title = {footerTitle}
        />
      </div>
    )
  }
}

ReactDOM.render(<Layout />, document.getElementById("react"));
