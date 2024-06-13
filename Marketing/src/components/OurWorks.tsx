import { FunctionComponent } from "react";
import TypeSecondarySizeLargeIc from "./TypeSecondarySizeLargeIc";

export type OurWorksType = {
  className?: string;
};

const OurWorks: FunctionComponent<OurWorksType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4797px] left-[104px] w-[1232px] h-[816px] text-left text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[416px] left-[832px] w-[400px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[400px]" />
      </div>
      <div className="absolute top-[416px] left-[416px] w-[400px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[400px]" />
      </div>
      <div className="absolute top-[416px] left-[0px] w-[400px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[400px]" />
      </div>
      <div className="absolute top-[0px] left-[416px] w-[816px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] w-[816px] h-[400px]">
          <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[816px] h-[400px]" />
        </div>
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[816px] h-[400px] opacity-[0.8]" />
        <div className="absolute top-[341px] left-[32px] w-[108px] h-[27px]">
          <img
            className="absolute top-[0px] left-[84px] w-6 h-6"
            alt=""
            src="/navigation-.svg"
          />
          <div className="absolute top-[0px] left-[0px] leading-[27px]">
            See More
          </div>
        </div>
        <b className="absolute top-[293px] left-[32px] text-5xl leading-[32px]">
          Traffic site - Grew.Co
        </b>
      </div>
      <TypeSecondarySizeLargeIc
        large="Get Started"
        typeSecondarySizeLargeIcBorder="unset"
        typeSecondarySizeLargeIcPadding="16px 40px"
        typeSecondarySizeLargeIcPosition="absolute"
        typeSecondarySizeLargeIcTop="281px"
        typeSecondarySizeLargeIcLeft="0px"
        typeSecondarySizeLargeIcBackgroundColor="#fa6d24"
        largeColor="#fff"
      />
      <div className="absolute top-[168px] left-[0px] leading-[27px] text-text-body">
        <p className="m-0">Lorem ipsum dolor sit amet, consectetur</p>
        <p className="m-0">adipiscing elit, sed do eiusmod tempor</p>
        <p className="m-0">incididunt ut labore et dolore.</p>
      </div>
      <b className="absolute top-[80px] left-[0px] text-29xl leading-[63.98px] text-text-title">
        Our Works
      </b>
    </div>
  );
};

export default OurWorks;
