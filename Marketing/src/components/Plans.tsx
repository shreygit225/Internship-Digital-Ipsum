import { FunctionComponent } from "react";
import TypeSecondarySizeMediumI from "./TypeSecondarySizeMediumI";

export type PlansType = {
  className?: string;
};

const Plans: FunctionComponent<PlansType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[640px] left-[104px] w-[1232px] h-[804px] text-center text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[222px] left-[832px] w-[400px] h-[582px]">
        <div className="absolute top-[0px] left-[0px] bg-text-white w-[400px] h-[582px]" />
        <div className="absolute top-[384px] left-[32px] leading-[27px] inline-block w-[336px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <TypeSecondarySizeMediumI
          medium="Purchase"
          typeSecondarySizeMediumIBorder="1px solid #fa6d24"
          typeSecondarySizeMediumIPadding="12px 32px"
          typeSecondarySizeMediumIPosition="absolute"
          typeSecondarySizeMediumITop="470px"
          typeSecondarySizeMediumILeft="132px"
          typeSecondarySizeMediumIBackgroundColor="unset"
          mediumColor="#fa6d24"
        />
        <b className="absolute top-[296px] left-[133px] text-29xl leading-[63.98px] inline-block text-text-title w-[133px]">
          $195
        </b>
        <b className="absolute top-[256px] left-[134px] text-5xl leading-[32px] inline-block w-[133px]">
          Premium
        </b>
        <div className="absolute top-[40px] left-[104px] bg-primary-light-blue w-48 h-48" />
      </div>
      <div className="absolute top-[222px] left-[416px] w-[400px] h-[582px] text-text-white">
        <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[400px] h-[582px]" />
        <div className="absolute top-[384px] left-[32px] leading-[27px] inline-block w-[336px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <TypeSecondarySizeMediumI
          medium="Purchase"
          typeSecondarySizeMediumIBorder="unset"
          typeSecondarySizeMediumIPadding="12px 32px"
          typeSecondarySizeMediumIPosition="absolute"
          typeSecondarySizeMediumITop="470px"
          typeSecondarySizeMediumILeft="132px"
          typeSecondarySizeMediumIBackgroundColor="#fa6d24"
          mediumColor="#fff"
        />
        <b className="absolute top-[296px] left-[133px] text-29xl leading-[63.98px] inline-block text-secondary-orange w-[133px]">
          $75
        </b>
        <b className="absolute top-[256px] left-[134px] text-5xl leading-[32px] inline-block w-[133px]">
          Standard
        </b>
        <div className="absolute top-[40px] left-[104px] bg-primary-light-blue w-48 h-48" />
      </div>
      <div className="absolute top-[222px] left-[0px] w-[400px] h-[582px]">
        <div className="absolute top-[0px] left-[0px] bg-text-white w-[400px] h-[582px]" />
        <div className="absolute top-[384px] left-[32px] leading-[27px] inline-block w-[336px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <TypeSecondarySizeMediumI
          medium="Purchase"
          typeSecondarySizeMediumIBorder="1px solid #fa6d24"
          typeSecondarySizeMediumIPadding="12px 32px"
          typeSecondarySizeMediumIPosition="absolute"
          typeSecondarySizeMediumITop="470px"
          typeSecondarySizeMediumILeft="132px"
          typeSecondarySizeMediumIBackgroundColor="unset"
          mediumColor="#fa6d24"
        />
        <b className="absolute top-[296px] left-[133px] text-29xl leading-[63.98px] inline-block text-text-title w-[133px]">
          $25
        </b>
        <b className="absolute top-[256px] left-[134px] text-5xl leading-[32px] inline-block w-[133px]">
          Basic
        </b>
        <div className="absolute top-[40px] left-[104px] bg-primary-light-blue w-48 h-48" />
      </div>
      <div className="absolute top-[88px] left-[336px] leading-[27px]">
        <p className="m-0">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}</p>
        <p className="m-0">{`Lorem Ipsum has been the `}</p>
      </div>
      <b className="absolute top-[0px] left-[402px] text-29xl leading-[63.98px] text-text-title">
        Choose your Plans
      </b>
    </div>
  );
};

export default Plans;
