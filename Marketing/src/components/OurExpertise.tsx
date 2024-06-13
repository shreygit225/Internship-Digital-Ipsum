import { FunctionComponent } from "react";

export type OurExpertiseType = {
  className?: string;
};

const OurExpertise: FunctionComponent<OurExpertiseType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[4911px] left-[104px] w-[1232px] h-[488px] text-right text-base text-text-title font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[384px] left-[728px] w-[504px] h-[104px]">
        <div className="absolute top-[0px] left-[0px] bg-primary-light-blue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-20-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          Content Marketing
        </b>
      </div>
      <div className="absolute top-[256px] left-[728px] w-[504px] h-[104px]">
        <div className="absolute top-[0px] left-[0px] bg-primary-light-blue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-20-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          Email Marketing
        </b>
      </div>
      <div className="absolute top-[128px] left-[728px] w-[504px] h-[104px]">
        <div className="absolute top-[0px] left-[0px] bg-primary-light-blue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-20-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          PPC Advertising
        </b>
      </div>
      <div className="absolute top-[0px] left-[728px] w-[504px] h-[104px] text-text-white">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-80-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-secondary-orange w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          SEO Keyword
        </b>
      </div>
      <div className="absolute top-[182px] left-[0px] w-[624px] h-[306px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[624px] h-[306px]" />
      </div>
      <div className="absolute top-[88px] left-[0px] leading-[27px] text-text-body text-left inline-block w-[624px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </div>
      <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-left w-[504px]">
        Our Expertise
      </b>
    </div>
  );
};

export default OurExpertise;
