import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BasicCardType = {
  className?: string;
  notification?: string;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const BasicCard: FunctionComponent<BasicCardType> = ({
  className = "",
  notification,
  loremIpsumDolorSitAmetCon,
  propLeft,
  propBoxShadow,
  propBackgroundColor,
}) => {
  const basicCard1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBoxShadow]);

  const iconPlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`absolute top-[240px] left-[936px] rounded-2xl bg-text-white w-[296px] h-[328px] flex flex-col items-start justify-start p-6 box-border gap-[33px] text-left text-5xl text-text-title font-heading-bold-heading-6-16 ${className}`}
      style={basicCard1Style}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px]">
        <div
          className="rounded-2xl bg-secondary-light-blue flex flex-row items-start justify-start p-5"
          style={iconPlaceholderStyle}
        >
          <img
            className="w-6 relative h-6 object-cover"
            alt=""
            src={notification}
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
          <b className="self-stretch relative leading-[32px]">
            {loremIpsumDolorSitAmetCon}
          </b>
          <div className="self-stretch flex-1 relative text-base leading-[32px] text-text-body">{`Lorem Ipsum is simply dummy text of the printing and type setting industry. `}</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[6px] text-base text-primary-green">
        <div className="relative leading-[24px] font-semibold">Learn More</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrow-chevron-right.svg"
        />
      </div>
    </div>
  );
};

export default BasicCard;
