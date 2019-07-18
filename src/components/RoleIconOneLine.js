import React, { Component, Fragment } from 'react';

import { ReactComponent as Healer } from '../img/healer.svg';
import { ReactComponent as Damage } from '../img/damage.svg';
import { ReactComponent as Tank } from '../img/tank.svg';

class RoleIconOneLine extends Component {
    render() {
        const role = this.props.role;
        let icon;

        if (role === 'Healer'){
            icon = <Healer className="roleIconOneLine healer" />;
        }
        else if (role === 'Damage'){
            icon = <Damage className="roleIconOneLine damage" />;
        }
        else if (role ==='Tank'){
            icon = <Tank className="roleIconOneLine tank" />;
        }

        return (
            <Fragment>
                {icon}
            </Fragment>
        )
    };
}

export default RoleIconOneLine;