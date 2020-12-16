import './App.css';
import Avatar from './Avatar/Avatar';
import {Component} from "react";


class App extends Component {
  render() {
    return (
      <div className="App">
     <Avatar url="https://cataas.com/cat" width={400 + "px"} shape="circle" />
      </div>
    );
  }

}

export default App;