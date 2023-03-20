import React, { PureComponent } from 'react';

function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}
class Message extends PureComponent {
  render() {
    const { author, created_at, content } = this.props.message;
    const createdAt = this.props.message.created_at.slice(11, 16);
    return (
      <div className="message">
        <h3><span style={{ color: stringToColor(author) }}>{author}</span></h3>
        <div className="content">{content}</div>
        <p>{ createdAt }</p>
      </div>
    );
  }
}

export default Message;
