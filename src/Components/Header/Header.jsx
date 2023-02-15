import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';

const Header = () => {
    const {user,onClose} = useTelegram();
    console.log(user);
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>ssss{user?.username}</span>
        </div>
    );
};

export default Header;