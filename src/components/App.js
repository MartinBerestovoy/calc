import Display from "./display";
import ButtonPanel from "./buttonPanel";
import { Component } from "react";
import Operations from "../logic/operations";

class App extends Component {
  state = {
    total: null,
    following: null,
    operator: null,
  };

  handleClick = (buttonName) => {
    this.setState(Operations(this.state, buttonName));
  };

  render() {
    return (
      <div>
        <Display value={this.state.following || this.state.total || "0"} />
        <ButtonPanel clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;
