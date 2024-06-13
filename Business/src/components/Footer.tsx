import { FunctionComponent, useMemo, type CSSProperties } from "react";
import DummyLogo from "./DummyLogo";

export type FooterType = {
  className?: string;

  /** Style props */
  backgroundTop?: CSSProperties["top"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  backgroundTop,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: backgroundTop,
    };
  }, [backgroundTop]);

  return (
    <div
      className={`absolute top-[4704px] left-[0px] w-[1440px] h-[480px] text-left text-base text-text-body font-heading-bold-heading-6-16 ${className}`}
      style={footerStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-text-white w-[1440px] h-[480px]" />
      <div className="absolute top-[368px] left-[784px] leading-[32px]">
        Terms and Condition
      </div>
      <div className="absolute top-[368px] left-[624px] leading-[32px]">
        Privacy Policy
      </div>
      <div className="absolute top-[368px] left-[104px] leading-[32px] inline-block w-[400px]">
        @2020 TanahAir Studio. All rights reserved.
      </div>
      <div className="absolute top-[80px] left-[1040px] w-[130px] h-48">
        <div className="absolute top-[160px] left-[0px] leading-[32px]">
          Code of Conduct
        </div>
        <div className="absolute top-[104px] left-[0px] leading-[32px]">
          Terms of Service
        </div>
        <div className="absolute top-[48px] left-[0px] leading-[32px]">
          Privacy Policy
        </div>
        <b className="absolute top-[0px] left-[0px] leading-[24px] text-text-title">
          Support
        </b>
      </div>
      <div className="absolute top-[80px] left-[832px] w-[97px] h-48">
        <div className="absolute top-[160px] left-[0px] leading-[32px]">
          Contact Us
        </div>
        <div className="absolute top-[104px] left-[0px] leading-[32px]">
          Our Services
        </div>
        <div className="absolute top-[48px] left-[0px] leading-[32px]">
          About Us
        </div>
        <b className="absolute top-[0px] left-[0px] leading-[24px] text-text-title">
          Company
        </b>
      </div>
      <div className="absolute top-[80px] left-[624px] w-[152px] h-[248px]">
        <div className="absolute top-[216px] left-[0px] leading-[32px]">
          Strategy Business
        </div>
        <div className="absolute top-[160px] left-[0px] leading-[32px]">
          Business Plan
        </div>
        <div className="absolute top-[104px] left-[0px] leading-[32px]">
          Human Resource
        </div>
        <div className="absolute top-[48px] left-[0px] leading-[32px]">
          Financial Consulting
        </div>
        <b className="absolute top-[0px] left-[0px] leading-[24px] text-text-title">
          Services
        </b>
      </div>
      <div className="absolute top-[80px] left-[104px] w-[400px] h-60">
        <div className="absolute top-[80px] left-[0px] leading-[32px] inline-block w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque,
          mauris eu quis ultricies viverra dui venenatis. Eu odio sit tincidunt
          elementum a. Vulputate egestas sed gravida ut purus id tristique. Eu
          feugiat aliquam egestas convallis ultrices tellus.
        </div>
        <DummyLogo
          dummyLogoDummyLogo02="/dummy-logo02.svg"
          dummyLogo02IconWidth="136px"
          dummyLogo02IconHeight="56px"
          dummyLogo02IconPosition="absolute"
          dummyLogo02IconTop="0px"
          dummyLogo02IconLeft="0px"
        />
      </div>
    </div>
  );
};

export default Footer;
