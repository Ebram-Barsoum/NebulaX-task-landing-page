import { products } from '../../lib/contants';
import ButtonLink from '../button-link/ButtonLink';
import Product from '../product/Product';
import style from './ProductsSection.module.css';

export default function ProductsSection() {
    return (
        <section className={style.productsSection}>
            <div className={style.container}>
                <div className={style.leftSide}>
                    <p>We help you</p>
                    <h2>sell stunning products</h2>
                    <p>We'll guide you through our unique 5-step brand-building framework.</p>

                    <ButtonLink href='#' text='more details' />
                </div>

                <div className={style.rightSide}>
                    {
                        products.map((product, index) => (
                            <Product key={index} image={product.image} name={product.name} price={product.price} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
