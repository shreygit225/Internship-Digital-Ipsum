import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeSecondarySizeMediumI from "./TypeSecondarySizeMediumI";

export type CTA1Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const CTA1: FunctionComponent<CTA1Type> = ({ className = "", propTop }) => {
  const cTA1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[2910px] left-[104px] w-[1232px] h-[432px] text-center text-29xl text-text-white font-heading-bold-heading-2-64 ${className}`}
      style={cTA1Style}
    >
      <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[1232px] h-[432px]" />
      <b className="absolute top-[104px] left-[358px] leading-[63.98px] inline-block w-[536px]">
        Let us Help to Improve your Website
      </b>
      <TypeSecondarySizeMediumI
        medium="Contact Us"
        typeSecondarySizeMediumIBorder="unset"
        typeSecondarySizeMediumIPadding="16px 40px"
        typeSecondarySizeMediumIPosition="absolute"
        typeSecondarySizeMediumITop="272px"
        typeSecondarySizeMediumILeft="533px"
        typeSecondarySizeMediumIBackgroundColor="#fa6d24"
        mediumColor="#fff"
      />
    </div>
  );
};

export default CTA1;
