import { LiaAngleRightSolid } from "react-icons/lia";
import style from './ButtonLink.module.css';

interface ButtonLinkProps {
    text: string;
    href: string;
}

export default function ButtonLink({ text, href }: ButtonLinkProps) {
    return (
        <a href={href} className={style.buttonLink}>
            <span>
                {text}
            </span>
            <LiaAngleRightSolid />
        </a>
    )
}
