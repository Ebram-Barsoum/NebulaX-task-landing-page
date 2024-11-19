import { logos } from "../../lib/contants";
import style from './CompanyList.module.css';

export default function CompanyList() {
    return (
        <div>
            {logos.map((logo, index) => (
                <img src={logo.image} alt={logo.description} key={index} className={style.logo} />
            ))}
        </div>
    )
}
