import CompanyList from "../company-list/CompanyList";
import style from './CompaniesSection.module.css';

export default function CompaniesSection() {
    return (
        <section className={style.companiesSection}>
            <div className={style.container}>
                <p className={style.text}>Companies we've helped build</p>
                <CompanyList />
            </div>
        </section>
    )
}
