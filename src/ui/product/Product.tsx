import { MdShoppingCart } from "react-icons/md";
import style from './Product.module.css';
import { formatCurrency } from "../../lib/utilities";

interface ProductProps {
    image: string;
    name: string;
    price: number;
}

export default function Product({ image, name, price }: ProductProps) {
    return (
        <div className={style.Product}>
            <div className={style.shape}></div>
            <div className={style.imgBox}>
                <img src={image} alt={name} className={style.img} />
            </div>

            <div className={style.content}>
                <h3>{name}</h3>
                <p className="price">
                    <span>{formatCurrency(price, 2)}</span>
                    <MdShoppingCart />
                </p>
            </div>
        </div>
    )
}
