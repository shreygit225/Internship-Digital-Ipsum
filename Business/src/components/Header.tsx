import { FunctionComponent } from "react";
import SizeSmall from "./SizeSmall";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] h-[72px] text-left text-sm text-text-body font-heading-bold-heading-6-16 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-secondary-light-green w-[1440px] h-[72px]" />
      <div className="absolute top-[24px] left-[1184px] w-[152px] h-6">
        <SizeSmall
          namePrefix="Fb"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="128px"
          sizeSmallWidth="24px"
          sizeSmallHeight="24px"
          containerBackgroundColor="#2abb64"
          drLeft="16.67%"
          drTop="12.5%"
        />
        <SizeSmall
          namePrefix="Ig"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="96px"
          sizeSmallWidth="24px"
          sizeSmallHeight="24px"
          containerBackgroundColor="#2abb64"
          drLeft="25%"
          drTop="12.5%"
        />
        <SizeSmall
          namePrefix="Li"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="64px"
          sizeSmallWidth="24px"
          sizeSmallHeight="24px"
          containerBackgroundColor="#2abb64"
          drLeft="25%"
          drTop="12.5%"
        />
        <SizeSmall
          namePrefix="Be"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="32px"
          sizeSmallWidth="24px"
          sizeSmallHeight="24px"
          containerBackgroundColor="#2abb64"
          drLeft="16.67%"
          drTop="12.5%"
        />
        <SizeSmall
          namePrefix="Dr"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="0px"
          sizeSmallWidth="24px"
          sizeSmallHeight="24px"
          containerBackgroundColor="#2abb64"
          drLeft="20.83%"
          drTop="12.5%"
        />
      </div>
      <div className="absolute top-[24px] left-[104px] flex flex-row items-start justify-start gap-[40px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/clock-1.svg"
          />
          <div className="relative leading-[24px]">
            Monday - Friday 9 AM - 5 PM
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/location-map-marker-4.svg"
          />
          <div className="relative leading-[24px] whitespace-pre-wrap">
            2491 Daffodil Lane, LA
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/phone.svg"
          />
          <div className="relative leading-[24px]">(+1) 923 2341 22</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
