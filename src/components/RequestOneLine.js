import React, { Component } from 'react';
import RoleIconOneLine from './RoleIconOneLine';

class RequestOneLine extends Component {
    render() {
        const { role, twitchName, characterName, timestamp } = this.props;

        return (
            <div className="requestOneLine">
                <RoleIconOneLine role={role} />
                <p className="info">
                    <span className="twitchNameOneLine">{twitchName} - <span className="characterNameOneLine">{characterName}</span></span>
                    <span className="timestampOneLine">{timestamp}</span>
                </p>
            </div>
        )
    };
}

export default RequestOneLine;
