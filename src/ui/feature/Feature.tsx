import { FeatureValues } from "../../lib/contants";
import styles from './Feature.module.css';

export default function Feature({ title, description, image }: FeatureValues) {
    return (
        <div className={styles.Feature}>
            <img src={image} alt={description} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
