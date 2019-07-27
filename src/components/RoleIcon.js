import React, { Component, Fragment } from 'react';

import { ReactComponent as Healer } from '../img/healer.svg';
import { ReactComponent as Damage } from '../img/damage.svg';
import { ReactComponent as Tank } from '../img/tank.svg';

class RoleIcon extends Component {
    render() {
        const characterRole = this.props.characterRole;
        let icon;

        if (characterRole === 'healer'){
            icon = <Healer className="roleIcon healer" />;
        }
        else if (characterRole === 'damage'){
            icon = <Damage className="roleIcon damage" />;
        }
        else if (characterRole ==='tank'){
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