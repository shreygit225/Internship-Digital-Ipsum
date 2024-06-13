import { FunctionComponent, useCallback } from "react";
import Footer from "../components/Footer";
import OurExpertise from "../components/OurExpertise";
import CTA1 from "../components/CTA1";
import HowItWorks1 from "../components/HowItWorks1";
import SEOService from "../components/SEOService";
import MainHeader from "../components/MainHeader";
import TypeSecondarySizeMediumI from "../components/TypeSecondarySizeMediumI";
import { useNavigate } from "react-router-dom";
import DummyLogo from "../components/DummyLogo";

const Service: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onPricingPlanTextClick = useCallback(() => {
    navigate("/pricing-plan");
  }, [navigate]);

  const onPortfolioTextClick = useCallback(() => {
    navigate("/our-works");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-text-white h-[5982px] overflow-hidden text-left text-base text-text-white font-heading-bold-heading-2-64">
      <Footer footerTop="5559px" />
      <OurExpertise />
      <div className="absolute top-[4008px] left-[0px] w-[1440px] h-[743px] text-center">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[1440px] h-[743px]" />
        <div className="absolute top-[278px] left-[1040px] w-[296px] h-[385px]">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[296px] h-[385px]" />
          <div className="absolute top-[256px] left-[28px] leading-[27px] inline-block w-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <b className="absolute top-[208px] left-[69px] text-5xl leading-[32px]">
            Search Result
          </b>
          <div className="absolute top-[48px] left-[88px] rounded-[50%] bg-primary-light-blue w-[120px] h-[120px]" />
        </div>
        <div className="absolute top-[278px] left-[728px] w-[296px] h-[385px]">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[296px] h-[385px]" />
          <div className="absolute top-[256px] left-[28px] leading-[27px] inline-block w-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <b className="absolute top-[208px] left-[45px] text-5xl leading-[32px]">
            PPC Management
          </b>
          <div className="absolute top-[48px] left-[88px] rounded-[50%] bg-primary-light-blue w-[120px] h-[120px]" />
        </div>
        <div className="absolute top-[278px] left-[416px] w-[296px] h-[385px]">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[296px] h-[385px]" />
          <div className="absolute top-[256px] left-[28px] leading-[27px] inline-block w-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <b className="absolute top-[208px] left-[46px] text-5xl leading-[32px]">
            SEO Optimization
          </b>
          <div className="absolute top-[48px] left-[88px] rounded-[50%] bg-primary-light-blue w-[120px] h-[120px]" />
        </div>
        <div className="absolute top-[278px] left-[104px] w-[296px] h-[385px]">
          <div className="absolute top-[0px] left-[0px] bg-primary-80-blue w-[296px] h-[385px]" />
          <div className="absolute top-[256px] left-[28px] leading-[27px] inline-block w-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
          <b className="absolute top-[208px] left-[24px] text-5xl leading-[32px] text-left">
            Competitive Analysis
          </b>
          <div className="absolute top-[48px] left-[88px] rounded-[50%] bg-primary-light-blue w-[120px] h-[120px]" />
        </div>
        <div className="absolute top-[168px] left-[418px] leading-[27px] inline-block w-[605px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </div>
        <b className="absolute top-[80px] left-[438px] text-29xl leading-[63.98px]">
          The Ultimate SEO Guide.
        </b>
      </div>
      <CTA1 propTop="3416px" />
      <HowItWorks1 />
      <div className="absolute top-[1410px] left-[104px] w-[1232px] h-[608px] text-text-body">
        <div className="absolute top-[208px] left-[832px] w-[400px] h-[400px]">
          <div className="absolute top-[0px] left-[0px] bg-text-white w-[400px] h-[400px]" />
          <div className="absolute top-[224px] left-[24px] leading-[27px] inline-block w-[352px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <b className="absolute top-[168px] left-[24px] text-5xl leading-[32px] text-text-title">
            Keyword Research
          </b>
          <div className="absolute top-[64px] left-[24px] rounded-[50%] bg-darkslateblue w-16 h-16" />
        </div>
        <div className="absolute top-[208px] left-[416px] w-[400px] h-[400px]">
          <div className="absolute top-[0px] left-[0px] bg-text-white w-[400px] h-[400px]" />
          <div className="absolute top-[224px] left-[24px] leading-[27px] inline-block w-[352px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <b className="absolute top-[168px] left-[24px] text-5xl leading-[32px] text-text-title">
            Traffic Result
          </b>
          <div className="absolute top-[64px] left-[24px] rounded-[50%] bg-darkslateblue w-16 h-16" />
        </div>
        <div className="absolute top-[208px] left-[0px] w-[400px] h-[400px]">
          <div className="absolute top-[0px] left-[0px] bg-other-blue-light w-[400px] h-[400px]" />
          <div className="absolute top-[224px] left-[24px] leading-[27px] inline-block w-[352px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <b className="absolute top-[168px] left-[24px] text-5xl leading-[32px] text-text-title">
            SEO Magic Keyword
          </b>
          <div className="absolute top-[64px] left-[24px] rounded-[50%] bg-darkslateblue w-16 h-16" />
        </div>
        <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[578px]">
          <p className="m-0">{`Boost your Business `}</p>
          <p className="m-0">with the Power of SEO.</p>
        </b>
      </div>
      <SEOService />
      <MainHeader
        aboutUs="SEO Expert Services"
        aboutUs1="Service"
        propWidth="134px"
      />
      <div className="absolute top-[32px] left-[104px] w-[1232px] h-14">
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
        <div className="absolute top-[13px] left-[215px] w-[453px] h-8">
          <div
            className="absolute top-[2px] left-[384px] leading-[27px] cursor-pointer"
            onClick={onAboutUsTextClick}
          >{`About Us `}</div>
          <div
            className="absolute top-[2px] left-[267px] leading-[27px] cursor-pointer"
            onClick={onPricingPlanTextClick}
          >
            Pricing Plan
          </div>
          <div
            className="absolute top-[2px] left-[173px] leading-[27px] cursor-pointer"
            onClick={onPortfolioTextClick}
          >
            Portfolio
          </div>
          <b className="absolute top-[0px] left-[78px] leading-[32px] text-secondary-orange">
            Services
          </b>
          <div
            className="absolute top-[2px] left-[0px] leading-[27px] cursor-pointer"
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

export default Service;
