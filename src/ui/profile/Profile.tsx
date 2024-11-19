import style from './Profile.module.css';

interface ProfileProps {
    image: string;
    name: string;
    job: string;
}

export default function Profile({ image, name, job }: ProfileProps) {
    return (
        <div className={style.profile}>
            <div className={style.imageBox}>
                <img src={image} alt="personal profile picture" className={style.img} />
            </div>
            <h4 className={style.name}>{name}</h4>
            <p className={style.job}>{job}</p>
        </div>
    )
}
