import React from "react";

export default class Header extends React.Component {
  // Create a function than will handle the onChange event set off by the input
  handleChange(e) { // e is the event fired
    const title = e.target.value; // this is the value of the target
    this.props.changeTitle(title); // call the function change title!
  }

  // This design pattern is great for reusable code. Header doesn't care what
  // changeTitle does, it just knows to call it! changeTitle can be changed
  // to do whatever

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Here's an input:</p>
        {/*
          set the property of input to this.props.title to set the initial
          calue of the text field.
          set the property of onChange to call the handleChange method and bind
          this to it.
        */}
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
