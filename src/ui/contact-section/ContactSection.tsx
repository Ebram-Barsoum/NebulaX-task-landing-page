import ContactForm from '../contact-form/ContactForm';
import style from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section className={style.ContactSection}>

            <div className={style.container}>
                <div className={style.leftSide}>
                    <ContactForm />
                </div>
                <div className={style.rightSide}>
                    <img src="../../../public/contact-img.png" alt="personal contact image" />
                </div>
            </div>
        </section>
    )
}
