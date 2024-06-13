import { FunctionComponent } from "react";
import TypeSecondarySizeMediumI from "./TypeSecondarySizeMediumI";

export type CaseStudiesType = {
  className?: string;
};

const CaseStudies: FunctionComponent<CaseStudiesType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[640px] left-[104px] w-[1232px] h-[2070px] text-left text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <TypeSecondarySizeMediumI
        medium="Load More"
        typeSecondarySizeMediumIBorder="unset"
        typeSecondarySizeMediumIPadding="16px 40px"
        typeSecondarySizeMediumIPosition="absolute"
        typeSecondarySizeMediumITop="2014px"
        typeSecondarySizeMediumILeft="535px"
        typeSecondarySizeMediumIBackgroundColor="#fa6d24"
        mediumColor="#fff"
      />
      <div className="absolute top-[1534px] left-[0px] w-[816px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[816px] h-[400px]" />
      </div>
      <div className="absolute top-[1118px] left-[832px] w-[400px] h-[816px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[816px]" />
      </div>
      <div className="absolute top-[1118px] left-[416px] w-[400px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[400px]" />
      </div>
      <div className="absolute top-[1118px] left-[0px] w-[400px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[400px]" />
      </div>
      <div className="absolute top-[702px] left-[416px] w-[816px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[816px] h-[400px]" />
      </div>
      <div className="absolute top-[286px] left-[832px] w-[400px] h-[400px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[400px]" />
      </div>
      <div className="absolute top-[286px] left-[416px] w-[400px] h-[400px] text-text-white">
        <div className="absolute top-[0px] left-[0px] w-[400px] h-[400px]">
          <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[400px]" />
        </div>
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[400px] h-[400px] opacity-[0.8]" />
        <b className="absolute top-[218px] left-[40px] leading-[24px] opacity-[0.6]">
          Site Optimization
        </b>
        <b className="absolute top-[258px] left-[40px] text-5xl leading-[32px]">
          Traffic Site - Grewco
        </b>
        <div className="absolute top-[306px] left-[40px] leading-[27px] inline-block w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
      </div>
      <div className="absolute top-[286px] left-[0px] w-[400px] h-[816px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[816px]" />
      </div>
      <div className="absolute top-[190px] left-[297px] w-[639px] h-10">
        <b className="absolute top-[0px] left-[444px] leading-[24px]">
          Marketing
        </b>
        <b className="absolute top-[0px] left-[586px] leading-[24px]">Design</b>
        <b className="absolute top-[0px] left-[312px] leading-[24px]">
          Keyword
        </b>
        <b className="absolute top-[0px] left-[216px] leading-[24px]">PPC</b>
        <b className="absolute top-[0px] left-[120px] leading-[24px]">SEO</b>
        <div className="absolute top-[0px] left-[0px] w-14 h-10 text-darkslateblue">
          <div className="absolute top-[36px] left-[0px] bg-darkslateblue w-14 h-1" />
          <b className="absolute top-[0px] left-[18px] leading-[24px]">All</b>
        </div>
      </div>
      <div className="absolute top-[88px] left-[235px] leading-[27px] text-center">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <p className="m-0">
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation.
        </p>
      </div>
      <b className="absolute top-[0px] left-[108px] text-29xl leading-[63.98px] text-text-title text-center">
        Latest Results of Our Different Case Studies
      </b>
    </div>
  );
};

export default CaseStudies;
