import { FunctionComponent } from "react";
import Deluxe from "./Deluxe";

export type Pricing1Type = {
  className?: string;
};

const Pricing1: FunctionComponent<Pricing1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1644px] left-[104px] w-[1232px] h-[825px] text-center text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <Deluxe container="/container.svg" prop="$100" deluxe="Deluxe" />
      <Deluxe
        container="/container1.svg"
        prop="$100"
        deluxe="Premium"
        propLeft="624px"
        propBorder="unset"
        propBackgroundColor="#fa6d24"
        propColor="#fff"
        propColor1="#fff"
        propColor2="#fff"
        propColor3="#fff"
        propColor4="#fff"
        propColor5="#fff"
        propLeft1="90px"
        propColor6="#fa6d24"
        propLeft2="95px"
        propColor7="#fff"
      />
      <Deluxe
        container="/container.svg"
        prop="$50"
        deluxe="Standard"
        propLeft="312px"
        propBorder="1px solid #fa6d24"
        propBackgroundColor="unset"
        propColor="#fa6d24"
        propColor1="#808080"
        propColor2="#808080"
        propColor3="#808080"
        propColor4="#808080"
        propColor5="#808080"
        propLeft1="101px"
        propColor6="#1f2a6b"
        propLeft2="93px"
        propColor7="#808080"
      />
      <Deluxe
        container="/container.svg"
        prop="FREE"
        deluxe="Basic"
        propLeft="0px"
        propBorder="1px solid #fa6d24"
        propBackgroundColor="unset"
        propColor="#fa6d24"
        propColor1="#808080"
        propColor2="#808080"
        propColor3="#808080"
        propColor4="#808080"
        propColor5="#808080"
        propLeft1="91px"
        propColor6="#1f2a6b"
        propLeft2="116px"
        propColor7="#808080"
      />
      <div className="absolute top-[162px] left-[495px] w-[238px] h-10 text-left text-darkslateblue">
        <b className="absolute top-[4px] left-[184px] leading-[32px]">Annual</b>
        <div className="absolute top-[0px] left-[88px] w-[72px] h-10">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-darkslateblue w-[72px] h-10" />
          <div className="absolute top-[0px] left-[32px] shadow-[0px_2px_13px_-5px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-text-white w-10 h-10" />
        </div>
        <b className="absolute top-[4px] left-[0px] leading-[32px] text-text-body text-right">
          Monthly
        </b>
      </div>
      <div className="absolute top-[82px] left-[312px] leading-[27px] inline-block w-[608px]">
        <p className="m-0">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</p>
        <p className="m-0">{`Lorem Ipsum has been the `}</p>
      </div>
      <b className="absolute top-[0px] left-[479px] text-29xl leading-[63.98px] text-text-title">
        Best Pricing
      </b>
    </div>
  );
};

export default Pricing1;
