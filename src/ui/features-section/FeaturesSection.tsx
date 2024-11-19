import { features } from "../../lib/contants";
import Feature from '../feature/Feature';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
    return (
        <div className={styles.FeaturesSection}>


            <div className={styles.container}>
                {
                    features.map((feature) => (
                        <Feature
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                        />
                    ))
                }
            </div>
        </div>
    )
}
