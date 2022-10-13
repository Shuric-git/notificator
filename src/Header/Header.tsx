import React, {FC} from 'react';
import './Header.scss'

const Header: FC<{counter: number}> = ({counter}) => {
    return (
        <div className={'header__wrapper'}>
            {counter}
        </div>
    );
};

export default Header;