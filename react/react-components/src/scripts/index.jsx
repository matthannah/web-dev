// Importing the react and react dom libraries to use react.
import React from "react";
import ReactDOM from "react-dom";

// Import our header and footer components
import Footer from "./footer";
import Header from "./header";

// A react component must implement the render() method. Then method returns
// what is to be rendered on the DOM. In the instance of our component below,
// we are rendering the components we build; Header and Footer
class Layout extends React.Component {
  render() {
    // return what to render
    // React components must be wrapped in some div tags!!
    // return ( <Header /> ); WILL NOT WORK!
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

// This is our virtual DOM in react, we pass in our Layout component and
// pass in the DOM element "react". This element is in our html file a
// directory up.
ReactDOM.render(<Layout />, document.getElementById("react"));
