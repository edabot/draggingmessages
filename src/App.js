import React, { Component } from 'react';
import MessageList from './components/MessageList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: ['hi', 'hey', 'how are you', 'great', 'so nice']
    };
  }

  updateMessages(idx_move, idx_target) {
    let insert = this.state.messages[idx_move],
      result = this.state.messages.slice()
      result[idx_move] = "empty"
    let first = result.slice(0,idx_target)
    let second = [insert]
    let last = result.slice(idx_target)
    let newMessages = first.concat(second, last).filter(text => text !== "empty")

    this.setState({messages: newMessages})
  }

  render() {
    return (
      <div className="App">
        <MessageList updateMessages={this.updateMessages.bind(this)} messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
