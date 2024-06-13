import { FunctionComponent, useMemo, type CSSProperties } from "react";
import DummyLogo from "./DummyLogo";

export type FooterType = {
  className?: string;

  /** Style props */
  footerTop?: CSSProperties["top"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  footerTop,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: footerTop,
    };
  }, [footerTop]);

  return (
    <div
      className={`absolute top-[8881px] left-[0px] w-[1440px] h-[423px] text-left text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
      style={footerStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[1440px] h-[423px]" />
      <div className="absolute top-[356px] left-[104px] leading-[27px]">
        Copyright Tanah Air Studio
      </div>
      <img
        className="absolute top-[332px] left-[104px] w-[1232px] h-0"
        alt=""
        src="/divider.svg"
      />
      <div className="absolute top-[143px] left-[1184px] w-[152px] h-10">
        <div className="absolute top-[0px] left-[112px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-secondary-orange w-10 h-10" />
          <b className="absolute top-[10px] left-[13px] tracking-[0.01em] leading-[120%]">
            Ig
          </b>
        </div>
        <div className="absolute top-[0px] left-[56px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-secondary-orange w-10 h-10" />
          <b className="absolute top-[10px] left-[10px] tracking-[0.01em] leading-[120%]">
            Be
          </b>
        </div>
        <div className="absolute top-[0px] left-[0px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-secondary-orange w-10 h-10" />
          <b className="absolute top-[10px] left-[11px] tracking-[0.01em] leading-[120%]">
            Dr
          </b>
        </div>
      </div>
      <div className="absolute top-[144px] left-[104px] leading-[27px]">
        <p className="m-0">OurStudio is a digital agency</p>
        <p className="m-0">UI / UX Design and Website</p>
        <p className="m-0">Development located in Ohio,</p>
        <p className="m-0">United States of America</p>
      </div>
      <div className="absolute top-[144px] left-[416px] flex flex-col items-start justify-start">
        <div className="w-[455px] relative h-8">
          <b className="absolute top-[0px] left-[384px] leading-[32px]">{`About Us `}</b>
          <b className="absolute top-[0px] left-[267px] leading-[32px]">
            Pricing Plan
          </b>
          <b className="absolute top-[0px] left-[173px] leading-[32px]">
            Portfolio
          </b>
          <b className="absolute top-[0px] left-[78px] leading-[32px]">
            Services
          </b>
          <b className="absolute top-[0px] left-[0px] leading-[32px]">Home</b>
        </div>
      </div>
      <DummyLogo
        dummyLogoDummyLogo02="/dummy-logo02.svg"
        dummyLogo02IconWidth="135px"
        dummyLogo02IconHeight="56px"
        dummyLogo02IconPosition="absolute"
        dummyLogo02IconTop="64px"
        dummyLogo02IconLeft="104px"
      />
    </div>
  );
};

export default Footer;
