import { FunctionComponent } from "react";
import SizeSmall from "./SizeSmall";

export type CEOType = {
  className?: string;
};

const CEO: FunctionComponent<CEOType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2792px] left-[104px] w-[1232px] h-96 text-left text-sm text-text-body font-heading-bold-heading-6-16 ${className}`}
    >
      <div className="absolute top-[352px] left-[624px] w-36 h-8">
        <SizeSmall
          namePrefix="Li"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="112px"
          sizeSmallWidth="32px"
          sizeSmallHeight="32px"
          containerBackgroundColor="#2abb64"
          drLeft="31.25%"
          drTop="21.88%"
        />
        <SizeSmall
          namePrefix="Be"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="56px"
          sizeSmallWidth="32px"
          sizeSmallHeight="32px"
          containerBackgroundColor="#2abb64"
          drLeft="25%"
          drTop="21.88%"
        />
        <SizeSmall
          namePrefix="Dr"
          sizeSmallPosition="absolute"
          sizeSmallTop="0px"
          sizeSmallLeft="0px"
          sizeSmallWidth="32px"
          sizeSmallHeight="32px"
          containerBackgroundColor="#2abb64"
          drLeft="28.13%"
          drTop="21.88%"
        />
      </div>
      <div className="absolute top-[304px] left-[624px] flex flex-row items-start justify-start gap-[24px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/mail.svg"
          />
          <div className="relative leading-[24px]">brotho@email.com</div>
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
      <div className="absolute top-[136px] left-[624px] text-base leading-[32px] inline-block w-[608px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="absolute top-[80px] left-[624px] text-5xl leading-[32px] inline-block w-[504px]">
        CEO
      </div>
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-other-image-placeholder w-[504px] h-96" />
    </div>
  );
};

export default CEO;
