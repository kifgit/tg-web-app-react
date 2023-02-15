import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';

const Header = () => {
    const {tg,user,onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>user?.username</span>
        </div>
    );
};

export default Button;