import CompaniesSection from "../ui/companies-section/CompaniesSection";
import ContactSection from "../ui/contact-section/ContactSection";
import CustomersSections from "../ui/customers-section/CustomersSections";
import FeaturesSection from "../ui/features-section/FeaturesSection";
import HeroSection from "../ui/hero-section/HeroSection";
import ProductsSection from "../ui/products-section/ProductsSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <CompaniesSection />
            <ProductsSection />
            <FeaturesSection />
            <CustomersSections />
            <ContactSection />
        </main>
    )
}
