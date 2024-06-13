import { FunctionComponent } from "react";
import ButtonPrimarySizeLargeTy from "./ButtonPrimarySizeLargeTy";
import DummyLogo from "./DummyLogo";

export type HomeContainerType = {
  className?: string;

  /** Action props */
  onHomeTextClick?: () => void;
  onAboutUsTextClick?: () => void;
  onServicesTextClick?: () => void;
  onBlogTextClick?: () => void;
  onContactUsTextClick?: () => void;
};

const HomeContainer: FunctionComponent<HomeContainerType> = ({
  className = "",
  onHomeTextClick,
  onAboutUsTextClick,
  onServicesTextClick,
  onBlogTextClick,
  onContactUsTextClick,
}) => {
  return (
    <div
      className={`absolute top-[72px] left-[0px] w-[1440px] h-[104px] text-left text-base text-text-body font-heading-bold-heading-6-16 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-secondary-light-green w-[1440px] h-[104px]" />
      <ButtonPrimarySizeLargeTy
        activeButton="Getting Started"
        buttonPrimarySizeLargeTyWidth="160px"
        buttonPrimarySizeLargeTyPosition="absolute"
        buttonPrimarySizeLargeTyTop="28px"
        buttonPrimarySizeLargeTyLeft="1176px"
        buttonPrimarySizeLargeTyBackgroundColor="#2abb64"
        buttonPrimarySizeLargeTyBorder="unset"
        activeButtonColor="#fff"
      />
      <div className="absolute top-[36px] left-[473px] flex flex-row items-center justify-start gap-[48px]">
        <b
          className="relative leading-[24px] text-text-title"
          onClick={onHomeTextClick}
        >
          Home
        </b>
        <div
          className="relative leading-[32px] cursor-pointer"
          onClick={onAboutUsTextClick}
        >
          About Us
        </div>
        <div
          className="relative leading-[32px] cursor-pointer"
          onClick={onServicesTextClick}
        >
          Services
        </div>
        <div
          className="relative leading-[32px] cursor-pointer"
          onClick={onBlogTextClick}
        >
          Blog
        </div>
        <div
          className="relative leading-[32px] cursor-pointer"
          onClick={onContactUsTextClick}
        >
          Contact Us
        </div>
      </div>
      <DummyLogo
        dummyLogoDummyLogo02="/dummy-logo02.svg"
        dummyLogo02IconWidth="136px"
        dummyLogo02IconHeight="56px"
        dummyLogo02IconPosition="absolute"
        dummyLogo02IconTop="24px"
        dummyLogo02IconLeft="104px"
      />
    </div>
  );
};

export default HomeContainer;
