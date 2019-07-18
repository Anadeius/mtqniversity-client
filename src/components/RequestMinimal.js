import React, { Component, Fragment } from 'react';
import RoleIconMinimal from './RoleIconMinimal.js';

class Request extends Component {
  render() {
    const { role, twitchName, characterName, timestamp } = this.props;
      return (
        <Fragment>
            <div className="requestMinimal">
                <RoleIconMinimal role={role} />
                <p className="info">
                    <span className="twitchNameMinimal">{twitchName} &#183; </span>
                    <span className="characterNameMinimal">{characterName} &#183; </span>
                    <span className="timestampMinimal">{timestamp}</span>
                </p>
            </div>
            <hr className="requestDivider" />
        </Fragment>
      );
    }
}

export default Request;