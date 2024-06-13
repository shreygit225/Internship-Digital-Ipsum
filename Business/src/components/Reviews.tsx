import { FunctionComponent } from "react";
import BasicCard1 from "./BasicCard1";

export type ReviewsType = {
  className?: string;
};

const Reviews: FunctionComponent<ReviewsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3040px] left-[104px] w-[1232px] h-[416px] text-left text-base text-text-body font-heading-bold-heading-6-16 ${className}`}
    >
      <BasicCard1 loremIpsumDolorSitAmetCon="Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again." />
      <BasicCard1
        loremIpsumDolorSitAmetCon="My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing."
        propLeft="0px"
        propBoxShadow="0px 24px 160px rgba(0, 0, 0, 0.1)"
      />
      <div className="absolute top-[96px] left-[1112px] w-[120px] h-10">
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
          alt=""
          src="/arrow-left.svg"
        />
        <img
          className="absolute top-[0px] left-[80px] w-10 h-10 overflow-hidden"
          alt=""
          src="/arrow-right.svg"
        />
      </div>
      <div className="absolute top-[88px] left-[0px] leading-[32px] inline-block w-[608px]">
        I am very helped in making a website and business development that makes
        the product that I have to have a quality for use by the user
      </div>
      <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[712px]">
        What Our Customer says
      </b>
    </div>
  );
};

export default Reviews;
