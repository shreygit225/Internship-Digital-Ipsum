import { FunctionComponent } from "react";
import PlatformMobileTypeCircle from "./PlatformMobileTypeCircle";
import ItemTextStateParagraph from "./ItemTextStateParagraph";

export type SEOTrafficType = {
  className?: string;
};

const SEOTraffic: FunctionComponent<SEOTrafficType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2944px] left-[104px] w-[1232px] h-[774px] text-left text-base text-text-title font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[466px] left-[728px] w-[236px] h-16">
        <div className="absolute top-[8px] left-[117px] leading-[24px] font-medium">
          <p className="m-0">{`Increase traffic `}</p>
          <p className="m-0">Mobile view</p>
        </div>
        <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] text-secondary-green text-center">
          35%
        </b>
      </div>
      <div className="absolute top-[318px] left-[728px] leading-[27px] text-text-body inline-block w-[504px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div>
      <b className="absolute top-[158px] left-[728px] text-29xl leading-[63.98px] inline-block w-[504px]">
        <p className="m-0">{`Grow your traffic `}</p>
        <p className="m-0">with SEO.</p>
      </b>
      <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[608px] h-[688px]" />
      <div className="absolute top-[334px] left-[264px] w-[360px] h-[440px] text-center text-text-white">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue w-[360px] h-[440px]" />
        <b className="absolute top-[120px] left-[78px] text-5xl leading-[32px] text-left">
          Ramadan Kareem
        </b>
        <div className="absolute top-[157px] left-[111px] leading-[24px]">
          Executive Comitee
        </div>
        <img
          className="absolute top-[315px] left-[0px] w-[360px] h-[125px]"
          alt=""
          src="/chartcontent.svg"
        />
        <img
          className="absolute top-[315px] left-[1px] w-[358px] h-[84px]"
          alt=""
          src="/chartoutilne.svg"
        />
        <PlatformMobileTypeCircle
          platformMobileTypeCircleOverflow="unset"
          platformMobileTypeCirclePosition="absolute"
          platformMobileTypeCircleTop="24px"
          platformMobileTypeCircleLeft="140px"
        />
        <div className="absolute top-[200px] left-[40px] w-[280px] h-10 text-light-primary-color-50">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-light-other-color-info w-[280px] h-10" />
          <div className="absolute top-[5px] left-[13px] leading-[27px]">
            Executive Comitee
          </div>
          <div className="absolute top-[5px] left-[176px] leading-[27px]">
            Exp: 2 years
          </div>
          <div className="absolute top-[16px] left-[159px] rounded-[50%] bg-light-primary-color-50 w-2 h-2" />
        </div>
        <div className="absolute top-[319px] left-[165px] [background:linear-gradient(180deg,_#5541d7,_rgba(255,_255,_255,_0))] w-4 h-[121px]" />
        <img
          className="absolute top-[311px] left-[165px] w-4 h-4"
          alt=""
          src="/point.svg"
        />
        <ItemTextStateParagraph
          placeTextHere="June - October 2020"
          placeTextHere1="Growth : 88%"
          itemTextStateParagraphPosition="absolute"
          itemTextStateParagraphTop="267px"
          itemTextStateParagraphLeft="121px"
          placeTextHereLeft="5.83%"
          placeTextHereFontFamily="'DM Sans'"
          placeTextHereLeft1="11.65%"
          placeTextHereLetterSpacing="unset"
          placeTextHereLineHeight="24px"
          placeTextHereFontFamily1="'DM Sans'"
        />
      </div>
    </div>
  );
};

export default SEOTraffic;
