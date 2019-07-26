import React, { Component, Fragment } from 'react';
import { FaRegFrown } from 'react-icons/fa';

class NoRequests extends Component {
  render() {
      return (
        <div className="noRequests">
			<FaRegFrown className="frown" size={150} />
			<span className="noRequestsText">No Requests</span>
		</div>
      );
    }
}

export default NoRequests;