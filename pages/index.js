import HeroSection from "../components/HeroSection";
import HeroService from "../components/HeroService";
import HeroBenefit from "../components/HeroBenefit";
import HeroLocation from "../components/HeroLocation";
import HeroCustomer from "../components/HeroCustomer";
import MainLayout from "../layouts/MainLayout";
import HeroMobile from "../components/HeroMobile";
export default function Home() {

  return (
    <>
      <MainLayout>
        <HeroSection />
        <HeroMobile />
        <HeroService />
        <HeroBenefit />
        <HeroLocation />
        <HeroCustomer />
      </MainLayout>
    </>
  );
}
