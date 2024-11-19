import { IoMdArrowDropupCircle } from 'react-icons/io';
import { CustomerValues } from '../../lib/contants';
import style from './Customer.module.css';
import { formatCurrency } from '../../lib/utilities';

export default function Customer({ image, balance, revenue }: CustomerValues) {
    return (
        <div className={style.Customer}>
            <div className={style.imgBox}>
                <img src={image} alt='customer' className={style.img} />
            </div>

            <div className={style.infoBox}>
                <h3>
                    <span>{formatCurrency(balance)}</span>
                    <IoMdArrowDropupCircle />
                </h3>

                <p>
                    <span>total Revenue</span>
                    <span>+{formatCurrency(revenue)}</span>
                </p>
            </div>
        </div>
    )
}
