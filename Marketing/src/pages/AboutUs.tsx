import { FunctionComponent, useCallback } from "react";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import OurExperts from "../components/OurExperts";
import Featured from "../components/Featured";
import HowItWorks from "../components/HowItWorks";
import IncreaseBusiness from "../components/IncreaseBusiness";
import TypeSecondarySizeMediumI from "../components/TypeSecondarySizeMediumI";
import MainHeader from "../components/MainHeader";
import { useNavigate } from "react-router-dom";
import DummyLogo from "../components/DummyLogo";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPricingPlanTextClick = useCallback(() => {
    navigate("/pricing-plan");
  }, [navigate]);

  const onPortfolioTextClick = useCallback(() => {
    navigate("/our-works");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/service");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-text-white h-[6848px] overflow-hidden text-left text-base text-text-body font-heading-bold-heading-2-64">
      <Footer footerTop="6425px" />
      <Testimonials
        editorFormatQuoteEditorFo="/editor--format-quote@2x.png"
        testimonialsTop="5745px"
        testimonialsLeft="156px"
      />
      <OurExperts />
      <Featured
        makeYourSiteMoreVisibleTo="The best we will provide for your business"
        featuredTop="3233px"
      />
      <HowItWorks />
      <IncreaseBusiness />
      <div className="absolute top-[640px] left-[104px] w-[1264px] h-[610px]">
        <TypeSecondarySizeMediumI
          medium="Our Services"
          typeSecondarySizeMediumIBorder="unset"
          typeSecondarySizeMediumIPadding="16px 40px"
          typeSecondarySizeMediumIPosition="absolute"
          typeSecondarySizeMediumITop="473px"
          typeSecondarySizeMediumILeft="656px"
          typeSecondarySizeMediumIBackgroundColor="#fa6d24"
          mediumColor="#fff"
        />
        <div className="absolute top-[298px] left-[656px] leading-[27px] inline-block w-[504px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non viverra egestas ultrices in turpis. Vel in nulla porttitor pellentesque lacus ridiculus tellus enim, in. Dignissim elementum ac, consectetur nulla ultricies. Sed pellentesque lobortis nisi porttitor. Facilisis cursus iaculis quis amet magna pretium morbi. `}</div>
        <b className="absolute top-[82px] left-[656px] text-29xl leading-[63.98px] inline-block text-text-title w-[608px]">
          We are an Agency that Provides SEO Services for your Product
        </b>
        <div className="absolute top-[0px] left-[0px] w-[608px] h-[610px]">
          <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[608px] h-[610px]" />
        </div>
      </div>
      <MainHeader aboutUs="About Us" aboutUs1="About Us" />
      <div className="absolute top-[32px] left-[104px] w-[1232px] h-14 text-text-white">
        <TypeSecondarySizeMediumI
          medium="Contact Us"
          typeSecondarySizeMediumIBorder="unset"
          typeSecondarySizeMediumIPadding="12px 32px"
          typeSecondarySizeMediumIPosition="absolute"
          typeSecondarySizeMediumITop="5px"
          typeSecondarySizeMediumILeft="1081px"
          typeSecondarySizeMediumIBackgroundColor="#fa6d24"
          mediumColor="#fff"
        />
        <div className="absolute top-[10px] left-[217px] w-[453px] h-8">
          <b className="absolute top-[0px] left-[382px] leading-[32px] text-secondary-orange">{`About Us `}</b>
          <div
            className="absolute top-[5px] left-[265px] leading-[27px] cursor-pointer"
            onClick={onPricingPlanTextClick}
          >
            Pricing Plan
          </div>
          <div
            className="absolute top-[5px] left-[171px] leading-[27px] cursor-pointer"
            onClick={onPortfolioTextClick}
          >
            Portfolio
          </div>
          <div
            className="absolute top-[5px] left-[76px] leading-[27px] cursor-pointer"
            onClick={onServicesTextClick}
          >
            Services
          </div>
          <div
            className="absolute top-[5px] left-[0px] leading-[27px] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </div>
        </div>
        <DummyLogo
          dummyLogoDummyLogo02="/dummy-logo02.svg"
          dummyLogo02IconWidth="135px"
          dummyLogo02IconHeight="56px"
          dummyLogo02IconPosition="absolute"
          dummyLogo02IconTop="0px"
          dummyLogo02IconLeft="0px"
        />
      </div>
    </div>
  );
};

export default AboutUs;
