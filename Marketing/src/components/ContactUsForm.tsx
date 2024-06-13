import { FunctionComponent, useCallback } from "react";
import TypeSecondarySizeLargeIc from "./TypeSecondarySizeLargeIc";
import { useNavigate } from "react-router-dom";
import DummyLogo from "./DummyLogo";

export type ContactUsFormType = {
  className?: string;
};

const ContactUsForm: FunctionComponent<ContactUsFormType> = ({
  className = "",
}) => {
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

  const onServicesTextClick = useCallback(() => {
    navigate("/service");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[32px] left-[104px] w-[1232px] h-14 text-left text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
    >
      <TypeSecondarySizeLargeIc
        large="Contact Us"
        typeSecondarySizeLargeIcBorder="unset"
        typeSecondarySizeLargeIcPadding="12px 32px"
        typeSecondarySizeLargeIcPosition="absolute"
        typeSecondarySizeLargeIcTop="5px"
        typeSecondarySizeLargeIcLeft="1081px"
        typeSecondarySizeLargeIcBackgroundColor="#fa6d24"
        largeColor="#fff"
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
        <div
          className="absolute top-[2px] left-[78px] leading-[27px] cursor-pointer"
          onClick={onServicesTextClick}
        >
          Services
        </div>
        <b className="absolute top-[0px] left-[0px] leading-[32px] text-secondary-orange">
          Home
        </b>
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
  );
};

export default ContactUsForm;
