import Blogs from './components/Home/NewsSection';
import Companies from './components/Home/CompaniesSection';
import EmpoweringSection from './components/Home/EmpoweringSection';
import ExploreSection from './components/Home/ExploreSection';
import InquirySection from './components/Home/InquirySection';
import Partners from './components/Home/PartnersSection';
import Services from './components/Home/ServicesSection';
import SuccessStories from './components/Home/SuccessStoriesSection';
import TitleSection from './components/Home/TitleSection';
export default function Home() {
  return (
    <>
      <TitleSection />
      <ExploreSection />
      <EmpoweringSection />
      <Services />
      <SuccessStories />
      <Companies />
      <Blogs />
      <InquirySection />
      <Partners />
    </>
  );
}
