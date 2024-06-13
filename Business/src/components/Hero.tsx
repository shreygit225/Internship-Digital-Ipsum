import { FunctionComponent } from "react";
import ButtonPrimarySizeLargeTy from "./ButtonPrimarySizeLargeTy";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[176px] left-[0px] w-[1440px] h-[600px] text-left text-base text-text-title font-heading-bold-heading-6-16 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-secondary-light-green w-[1440px] h-[600px]" />
      <img
        className="absolute top-[41px] left-[40px] w-[1352px] h-[510.6px]"
        alt=""
        src="/elements1.svg"
      />
      <div className="absolute top-[40px] left-[936px] rounded-3xl bg-other-image-placeholder w-[400px] h-[440px]" />
      <div className="absolute top-[264px] left-[832px] shadow-[40px_40px_80px_rgba(0,_0,_0,_0.2)] w-[296px] h-44">
        <div className="absolute top-[0px] left-[0px] rounded-3xl bg-text-white w-[296px] h-44" />
        <div className="absolute top-[120px] left-[32px] leading-[24px] font-semibold inline-block w-56">
          Mas Yhanto
        </div>
        <div className="absolute top-[32px] left-[32px] text-sm leading-[24px] inline-block w-56">
          The Lorem Ipsum Company has been an integral part of our content
          marketing success.
        </div>
      </div>
      <ButtonPrimarySizeLargeTy
        activeButton="Getting Started"
        buttonPrimarySizeLargeTyWidth="160px"
        buttonPrimarySizeLargeTyPosition="absolute"
        buttonPrimarySizeLargeTyTop="432px"
        buttonPrimarySizeLargeTyLeft="104px"
        buttonPrimarySizeLargeTyBackgroundColor="#2abb64"
        buttonPrimarySizeLargeTyBorder="unset"
        activeButtonColor="#fff"
      />
      <div className="absolute top-[328px] left-[104px] leading-[32px] text-text-body inline-block w-[608px]">
        We help you to grow your business and offer some of the best services
        provided so that your business can grow in the future
      </div>
      <b className="absolute top-[40px] left-[104px] text-45xl leading-[88px] inline-block w-[816px]">
        Start Empowering Your Business with Efficient Increments
      </b>
    </div>
  );
};

export default Hero;
