import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BasicCard1Type = {
  className?: string;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
};

const BasicCard1: FunctionComponent<BasicCard1Type> = ({
  className = "",
  loremIpsumDolorSitAmetCon,
  propLeft,
  propBoxShadow,
}) => {
  const basicCardStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBoxShadow]);

  return (
    <div
      className={`absolute top-[192px] left-[624px] rounded-2xl bg-text-white w-[608px] h-56 flex flex-col items-start justify-start p-6 box-border gap-[16px] text-left text-base text-text-body font-heading-bold-heading-6-16 ${className}`}
      style={basicCardStyle}
    >
      <div className="self-stretch flex-1 relative leading-[32px]">
        {loremIpsumDolorSitAmetCon}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-text-title">
        <img className="w-10 relative h-10" alt="" src="/avatar.svg" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="w-[296px] relative leading-[24px] font-semibold inline-block">
            Mas Yanto
          </div>
          <div className="w-[296px] relative text-xs leading-[24px] text-text-body inline-block">
            Kang Bakso
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCard1;
