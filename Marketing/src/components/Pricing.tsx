import { FunctionComponent } from "react";
import TypeSecondarySizeLargeIc from "./TypeSecondarySizeLargeIc";

export type PricingType = {
  className?: string;
};

const Pricing: FunctionComponent<PricingType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[5773px] left-[104px] w-[1232px] h-[803px] text-center text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[266px] left-[832px] w-[400px] h-[537px]">
        <img
          className="absolute top-[0px] left-[0px] w-[400px] h-[537px]"
          alt=""
          src="/card.svg"
        />
        <TypeSecondarySizeLargeIc
          large="Purchase"
          typeSecondarySizeLargeIcBorder="1px solid #fa6d24"
          typeSecondarySizeLargeIcPadding="16px 40px"
          typeSecondarySizeLargeIcPosition="absolute"
          typeSecondarySizeLargeIcTop="441px"
          typeSecondarySizeLargeIcLeft="123px"
          typeSecondarySizeLargeIcBackgroundColor="unset"
          largeColor="#fa6d24"
        />
        <div className="absolute top-[280px] left-[32px] leading-[27px] inline-block w-[336px]">
          The best choice for your company when you want to build a website that
          will increase sales of the product or service to be sold
        </div>
        <b className="absolute top-[192px] left-[146px] text-29xl leading-[63.98px] text-darkslateblue">
          $199
        </b>
        <b className="absolute top-[144px] left-[147px] text-5xl leading-[32px]">
          Premium
        </b>
        <div className="absolute top-[40px] left-[160px] rounded-[50%] bg-primary-light-blue w-20 h-20" />
      </div>
      <div className="absolute top-[266px] left-[416px] w-[400px] h-[537px] text-text-white">
        <img
          className="absolute top-[0px] left-[0px] w-[400px] h-[537px]"
          alt=""
          src="/card1.svg"
        />
        <TypeSecondarySizeLargeIc
          large="Purchase"
          typeSecondarySizeLargeIcBorder="unset"
          typeSecondarySizeLargeIcPadding="16px 40px"
          typeSecondarySizeLargeIcPosition="absolute"
          typeSecondarySizeLargeIcTop="441px"
          typeSecondarySizeLargeIcLeft="123px"
          typeSecondarySizeLargeIcBackgroundColor="#fa6d24"
          largeColor="#fff"
        />
        <div className="absolute top-[280px] left-[32px] leading-[27px] inline-block w-[336px]">
          The best choice for your company when you want to build a website that
          will increase sales of the product or service to be sold
        </div>
        <b className="absolute top-[192px] left-[157px] text-29xl leading-[63.98px]">
          $79
        </b>
        <b className="absolute top-[144px] left-[145px] text-5xl leading-[32px]">
          Standard
        </b>
        <div className="absolute top-[40px] left-[160px] rounded-[50%] bg-other-blue-light w-20 h-20" />
      </div>
      <div className="absolute top-[266px] left-[0px] w-[400px] h-[537px]">
        <img
          className="absolute top-[0px] left-[0px] w-[400px] h-[537px]"
          alt=""
          src="/card.svg"
        />
        <TypeSecondarySizeLargeIc
          large="Purchase"
          typeSecondarySizeLargeIcBorder="1px solid #fa6d24"
          typeSecondarySizeLargeIcPadding="16px 40px"
          typeSecondarySizeLargeIcPosition="absolute"
          typeSecondarySizeLargeIcTop="441px"
          typeSecondarySizeLargeIcLeft="123px"
          typeSecondarySizeLargeIcBackgroundColor="unset"
          largeColor="#fa6d24"
        />
        <div className="absolute top-[280px] left-[32px] leading-[27px] inline-block w-[336px]">
          The best choice for your company when you want to build a website that
          will increase sales of the product or service to be sold
        </div>
        <b className="absolute top-[192px] left-[156px] text-29xl leading-[63.98px] text-darkslateblue">
          $29
        </b>
        <b className="absolute top-[144px] left-[168px] text-5xl leading-[32px]">
          Basic
        </b>
        <div className="absolute top-[40px] left-[160px] rounded-[50%] bg-primary-light-blue w-20 h-20" />
      </div>
      <div className="absolute top-[166px] left-[499px] w-[231px] h-10 text-left text-darkslateblue">
        <div className="absolute top-[10px] left-[180px] leading-[27px]">
          Annual
        </div>
        <div className="absolute top-[0px] left-[84px] w-[72px] h-10">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-darkslateblue w-[72px] h-10" />
          <div className="absolute top-[0px] left-[32px] shadow-[0px_2px_13px_-5px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-text-white w-10 h-10" />
        </div>
        <div className="absolute top-[10px] left-[0px] leading-[27px] text-text-body text-right">
          Monthly
        </div>
      </div>
      <div className="absolute top-[80px] left-[312px] leading-[27px] inline-block w-[608px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the `}</div>
      <b className="absolute top-[0px] left-[469px] text-29xl leading-[63.98px] text-text-title">
        Pricing Plans
      </b>
    </div>
  );
};

export default Pricing;
