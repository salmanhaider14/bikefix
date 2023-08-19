import MainLayout from '../layouts/MainLayout'
import AboutHeroSection from '../components/AboutHeroSection'
import AboutBrand from '../components/AboutBrand'

const About = () => {
  return (
    <>
      <MainLayout>
        <AboutHeroSection/>
        <AboutBrand />
      </MainLayout>
    </>
  );
};


export default About;