import { customers } from '../../lib/contants'
import ButtonLink from '../button-link/ButtonLink'
import Customer from '../customer/Customer'
import style from './CustomersSection.module.css'

export default function CustomersSections() {
    return (
        <section className={style.CustomersSection}>
            <div className={style.container}>
                <div className={style.leftSide}>
                    {
                        customers.map((cutomer, index) => <Customer key={index} {...cutomer} />)
                    }
                </div>

                <div className={style.rightSide}>
                    <p>what we do</p>
                    <h2>increase our customers sales</h2>
                    <p>Our customers are seeing big results whithin the first three months.</p>

                    <ButtonLink href='#' text='more details' />
                </div>
            </div>
        </section>
    )
}
