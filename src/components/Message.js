import React, { Component } from 'react';

class Message extends Component {

  onDragStart(e) {
    e.dataTransfer.setData("text/plain", this.props.idx);
    console.log(this.props.message)
  }

  onDrop(e) {
    e.preventDefault()
    var idx = parseInt(e.dataTransfer.getData("text"));
    this.props.updateMessages(idx, this.props.idx)
  }

  onDragOver(e) {
    e.preventDefault()
    console.log('dragging')
  }

  render() {
    return (
      <div draggable='true' onDrop={this.onDrop.bind(this)} onDragOver={this.onDragOver} className="message"
      onDragStart={this.onDragStart.bind(this)}>
        {this.props.message}
      </div>
    );
  }
}

export default Message;
