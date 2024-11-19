import { ReactNode } from 'react';
import style from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    action?: () => void;
}

export default function Button({ children, action }: ButtonProps) {
    return (
        <button onClick={action} className={style.Button}>{children}</button>
    )
}
