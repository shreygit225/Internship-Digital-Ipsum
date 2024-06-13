import { FunctionComponent, useCallback } from "react";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Plans from "../components/Plans";
import Pricing1 from "../components/Pricing1";
import MainHeader from "../components/MainHeader";
import TypeSecondarySizeMediumI from "../components/TypeSecondarySizeMediumI";
import { useNavigate } from "react-router-dom";
import DummyLogo from "../components/DummyLogo";

const PricingPlan: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
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
    <div className="w-full relative bg-text-white h-[3684px] overflow-hidden text-left text-base text-text-white font-heading-bold-heading-2-64">
      <Footer footerTop="3261px" />
      <CTA cTATop="2669px" />
      <Plans />
      <Pricing1 />
      <MainHeader
        aboutUs="Pricing Plan"
        aboutUs1="Pricing Plan"
        propWidth="165px"
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
        <div className="absolute top-[13px] left-[217px] w-[456px] h-8">
          <div
            className="absolute top-[2px] left-[387px] leading-[27px] cursor-pointer"
            onClick={onAboutUsTextClick}
          >{`About Us `}</div>
          <b className="absolute top-[0px] left-[265px] leading-[32px] text-secondary-orange">
            Pricing Plan
          </b>
          <div
            className="absolute top-[2px] left-[171px] leading-[27px] cursor-pointer"
            onClick={onPortfolioTextClick}
          >
            Portfolio
          </div>
          <div
            className="absolute top-[2px] left-[76px] leading-[27px] cursor-pointer"
            onClick={onServicesTextClick}
          >
            Services
          </div>
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

export default PricingPlan;
