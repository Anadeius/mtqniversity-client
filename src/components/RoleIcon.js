import React, { Component, Fragment } from 'react';

import { ReactComponent as Healer } from '../img/healer.svg';
import { ReactComponent as Damage } from '../img/damage.svg';
import { ReactComponent as Tank } from '../img/tank.svg';

class RoleIcon extends Component {
    render() {
        const role = this.props.role;
        let icon;

        if (role === 'healer'){
            icon = <Healer className="roleIcon healer" />;
        }
        else if (role === 'damage'){
            icon = <Damage className="roleIcon damage" />;
        }
        else if (role ==='tank'){
            icon = <Tank className="roleIcon tank" />;
        }

        return (
            <Fragment>
                {icon}
            </Fragment>
        )
    };
}

export default RoleIcon;