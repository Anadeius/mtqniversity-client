import React, { Component, Fragment } from 'react';

import { ReactComponent as Healer } from '../img/healer.svg';
import { ReactComponent as Damage } from '../img/damage.svg';
import { ReactComponent as Tank } from '../img/tank.svg';

class RoleIconMinimal extends Component {
    render() {
        const role = this.props.role;
        let icon;

        if (role === 'Healer'){
            icon = <Healer className="roleIconMinimal healer" />;
        }
        else if (role === 'Damage'){
            icon = <Damage className="roleIconMinimal damage" />;
        }
        else if (role ==='Tank'){
            icon = <Tank className="roleIconMinimal tank" />;
        }

        return (
            <Fragment>
                {icon}
            </Fragment>
        )
    };
}

export default RoleIconMinimal;