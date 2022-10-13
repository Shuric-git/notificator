import {BellOutlined} from '@ant-design/icons'
import React, {FC} from 'react';
import './Header.scss'

const Header: FC<{counter: number, showModal: () => void}> = ({counter, showModal}) => {
    return (
        <div className={'header header__wrapper'}>
          <div className="header__bell">
            {!!counter && <div className="header__bell__counter">{counter}</div>}
            <BellOutlined style={{ fontSize: '50px' }} onClick={showModal}/>
          </div>
        </div>
    );
};

export default Header;