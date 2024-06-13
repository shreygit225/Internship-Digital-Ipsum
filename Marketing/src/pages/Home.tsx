import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import LatestNews from "../components/LatestNews";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import OurWorks from "../components/OurWorks";
import SEOGuide from "../components/SEOGuide";
import SEOTraffic from "../components/SEOTraffic";
import Featured from "../components/Featured";
import BusinessPower from "../components/BusinessPower";
import Header from "../components/Header";
import ContactUsForm from "../components/ContactUsForm";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-text-white h-[9304px] overflow-hidden">
      <Footer />
      <CTA />
      <LatestNews />
      <Testimonials editorFormatQuoteEditorFo="/editor--format-quote@2x.png" />
      <Pricing />
      <OurWorks />
      <SEOGuide />
      <SEOTraffic />
      <Featured makeYourSiteMoreVisibleTo="Make your site more visible to search engines." />
      <BusinessPower />
      <div className="absolute top-[980px] left-[155px] w-[1130px] h-[100px]">
        <img
          className="absolute top-[0px] left-[968px] w-[162px] h-[100px] object-cover"
          alt=""
          src="/logo-5@2x.png"
        />
        <img
          className="absolute top-[0px] left-[726px] w-[162px] h-[100px] object-cover"
          alt=""
          src="/logo-4@2x.png"
        />
        <img
          className="absolute top-[0px] left-[484px] w-[162px] h-[100px] object-cover"
          alt=""
          src="/logo-3@2x.png"
        />
        <img
          className="absolute top-[0px] left-[242px] w-[162px] h-[100px] object-cover"
          alt=""
          src="/logo-2@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[162px] h-[100px] object-cover"
          alt=""
          src="/logo-1@2x.png"
        />
      </div>
      <Header />
      <ContactUsForm />
    </div>
  );
};

export default Home;
