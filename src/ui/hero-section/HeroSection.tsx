import style from './HeroSection.module.css';
import Search from '../search/Search';
import Profile from '../profile/Profile';

export default function HeroSection() {
    return (
        <section className={style.heroSection}>
            <div className={style.links}>
                <a href="#">Get Started Now</a>
                <a href="#" className={style.loginBtn}> Login</a>
            </div>

            <div className={style.content}>
                <div className={style.leftSide}>
                    <Profile image='../../../public/profile.png' name='james bruno' job='digital marketer' />
                </div>

                <div className={style.rightSide}>
                    <h1 className={style.heading}>We help you build & grow an online buisiness</h1>
                    <Search />
                </div>
            </div>
        </section>
    )
}
