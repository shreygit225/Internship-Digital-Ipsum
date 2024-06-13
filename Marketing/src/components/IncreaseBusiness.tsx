import { FunctionComponent } from "react";

export type IncreaseBusinessType = {
  className?: string;
};

const IncreaseBusiness: FunctionComponent<IncreaseBusinessType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[1410px] left-[104px] w-[1232px] h-[734px] text-right text-base text-text-title font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[0px] left-[624px] w-[608px] h-[734px]">
        <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[608px] h-[734px]" />
      </div>
      <div className="absolute top-[630px] left-[0px] w-[504px] h-[104px]">
        <div className="absolute top-[0px] left-[0px] bg-primary-light-blue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-20-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          Approach
        </b>
      </div>
      <div className="absolute top-[502px] left-[0px] w-[504px] h-[104px]">
        <div className="absolute top-[0px] left-[0px] bg-primary-light-blue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-20-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          Full Shipment
        </b>
      </div>
      <div className="absolute top-[374px] left-[0px] w-[504px] h-[104px] text-text-white">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-80-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-secondary-orange w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          Objective
        </b>
      </div>
      <div className="absolute top-[246px] left-[0px] w-[504px] h-[104px]">
        <div className="absolute top-[0px] left-[0px] bg-primary-light-blue w-[504px] h-[104px]" />
        <div className="absolute top-[64px] left-[24px] w-[456px] h-4">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary-20-blue w-[456px] h-4" />
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue w-[416px] h-4" />
        </div>
        <div className="absolute top-[24px] left-[446px] leading-[27px]">
          90%
        </div>
        <b className="absolute top-[24px] left-[24px] leading-[24px] text-left">
          Timeline Goals
        </b>
      </div>
      <div className="absolute top-[152px] left-[0px] leading-[27px] text-text-body text-left inline-block w-[504px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non viverra
        egestas ultrices in turpis.
      </div>
      <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-left w-[608px]">
        Increase your Business with us
      </b>
    </div>
  );
};

export default IncreaseBusiness;
