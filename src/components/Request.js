import React, { Component, Fragment } from 'react';
import RoleIcon from './RoleIcon';
import { MdDeleteForever } from 'react-icons/md';

class Request extends Component {
  render() {
    const { characterRole, twitchName, characterName, timestamp } = this.props;
      return (
        <Fragment>
            <div className="request">
                <RoleIcon characterRole={characterRole} />
                <p className="info">
                    <span className="twitchName">{twitchName} &#183; </span>
                    <span className="characterName">{characterName} &#183; </span>
                    <span className="timestamp">{timestamp} </span>
                </p>
				<MdDeleteForever className="delete" size={35} />
            </div>
            <hr className="requestDivider" />
			
        </Fragment>
      );
    }
}

export default Request;