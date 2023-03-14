import React, { PureComponent } from 'react';

class Message extends PureComponent {
  render() {
    const { author, created_at, content } = this.props.message;
    return (
      <div className="message">
        <h4>{author} - { created_at }</h4>
        <p>{content}</p>
      </div>
    );
  }
}

export default Message;
