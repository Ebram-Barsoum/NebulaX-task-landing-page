import { CiSearch } from "react-icons/ci";
import style from './Search.module.css';

export default function Search() {
    return (
        <form className={style.form}>
            <input type="text" placeholder="Tell us what you need to build..." className={style.input} />
            <button type="button" className={style.btn}><CiSearch /></button>
        </form>
    )
}
