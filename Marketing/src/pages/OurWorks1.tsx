import { FunctionComponent, useCallback } from "react";
import Footer from "../components/Footer";
import CTA1 from "../components/CTA1";
import CaseStudies from "../components/CaseStudies";
import MainHeader from "../components/MainHeader";
import TypeSecondarySizeMediumI from "../components/TypeSecondarySizeMediumI";
import { useNavigate } from "react-router-dom";
import DummyLogo from "../components/DummyLogo";

const OurWorks1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onPricingPlanTextClick = useCallback(() => {
    navigate("/pricing-plan");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/service");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-text-white h-[3925px] overflow-hidden text-left text-base text-text-white font-heading-bold-heading-2-64">
      <Footer footerTop="3502px" />
      <CTA1 />
      <CaseStudies />
      <MainHeader
        aboutUs="Our Works"
        aboutUs1="Case Studies"
        propWidth="177px"
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
          <div className="absolute top-[2px] left-[173px] leading-[27px] text-secondary-orange">
            Portfolio
          </div>
          <b
            className="absolute top-[0px] left-[78px] leading-[32px] text-primary-light-blue cursor-pointer"
            onClick={onServicesTextClick}
          >
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

export default OurWorks1;
