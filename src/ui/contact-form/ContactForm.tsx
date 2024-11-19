import { MdOutlineMail, MdOutlineMessage } from 'react-icons/md';
import style from './ContactForm.module.css';
import Button from '../button/Button';

export default function ContactForm() {
    return (
        <form className={style.ContactForm}>
            <h3>Write us</h3>

            <div className={style.inputGroup}>
                <input type="email" placeholder="Enter your email" className={style.input} name='email' required />
                <MdOutlineMail className={style.inputIcon} />
            </div>

            <div className={style.inputGroup}>
                <textarea placeholder="Enter your message" className={style.input} name='message' required />
                <MdOutlineMessage className={style.inputIcon} />
            </div>

            <Button>send your message</Button>
        </form>
    )
}
