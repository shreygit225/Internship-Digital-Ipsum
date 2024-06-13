import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SizeSmall from "./SizeSmall";

export type TeamCardType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
};

const TeamCard: FunctionComponent<TeamCardType> = ({
  className = "",
  propTop,
  propLeft,
  propBoxShadow,
}) => {
  const teamCardStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propTop, propLeft, propBoxShadow]);

  return (
    <div
      className={`absolute top-[104px] left-[832px] w-[400px] h-[496px] text-left text-sm text-text-body font-heading-bold-heading-6-16 ${className}`}
      style={teamCardStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-text-white w-[400px] h-[496px]" />
      <div className="absolute top-[432px] left-[24px] w-36 h-8">
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
      <div className="absolute top-[384px] left-[24px] flex flex-row items-start justify-start gap-[24px]">
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
      <div className="absolute top-[336px] left-[24px] text-5xl leading-[32px]">
        CEO
      </div>
      <b className="absolute top-[280px] left-[24px] text-13xl leading-[48px] text-text-title">
        Shoo Bro Tho
      </b>
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-other-image-placeholder w-[400px] h-64" />
    </div>
  );
};

export default TeamCard;
