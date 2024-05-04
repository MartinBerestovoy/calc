import Display from "./Display"
import ButtonPanel from "./ButtonPanel"
import Button from "./Button"
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