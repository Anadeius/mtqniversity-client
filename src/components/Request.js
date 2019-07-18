import React, { Component } from 'react';
import RoleIcon from './RoleIcon';

class Request extends Component {
  render() {
    const { role, twitchName, characterName, timestamp } = this.props;
      return (
          <div className="request">
            <RoleIcon role={role} />
            <p className="info">
              <span className="twitchName">{twitchName}</span>
              <span className="characterName">{characterName}</span>
              <span className="timestamp">{timestamp}</span>
            </p>
        </div>
      );
    }
}

export default Request;