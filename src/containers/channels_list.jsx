import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions/index';

class ChannelsList extends PureComponent {
  handleClick = (e) => {
    const channel = e.target.textContent.substring(2);
    this.props.selectChannel(channel);
  }

  render() {
    const { channelsList, selectedChannel } = this.props;
    return (
      <div className="channels-list">
        <h2>Redux chat</h2>
        <ul>
          {channelsList.map(channel =>
            (<li key={channel} onClick={this.handleClick} className={channel === selectedChannel ? 'channel selected-channel-list' : 'channel'} ># {channel}</li>)
          )}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channelsList: state.channelsList,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);
