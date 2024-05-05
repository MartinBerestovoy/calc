import Display from "./display"
import ButtonPanel from "./buttonPanel"
import Button from "./button"
import { Component } from "react"

class App extends Component {

  state = {
    total: null,
    following: null,
    operator: null,
  }

  render() {
    return (
    <div>
      <Display value={this.state.following || this.state.total || "0"} />
      <ButtonPanel />
    </div>
  )
}
}

export default App;