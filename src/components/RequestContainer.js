import React, { Fragment, Component } from 'react';
import { ReactComponent as Loader } from '../img/loading.svg';
import Requests from './Requests';

class RequestContainer extends Component {
    render() {
        return (
			<Fragment>
				<Requests dataCenter="aether" />
				<Requests dataCenter="primal" />
			</Fragment>
        )
    }
}

export default RequestContainer;