import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {


  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, idx) => <Message
          updateMessages={this.props.updateMessages}
          message={message}
          idx={idx}
          key={message + idx}/>)}
      </div>
    );
  }
}

export default MessageList;
