import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ButtonPrimarySizeLargeTy2 from "./ButtonPrimarySizeLargeTy2";

export type CTAType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const CTA: FunctionComponent<CTAType> = ({ className = "", propTop }) => {
  const cTAStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[5280px] left-[0px] w-[1440px] h-[424px] text-center text-45xl text-text-title font-heading-bold-heading-6-16 ${className}`}
      style={cTAStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-secondary-light-green w-[1440px] h-[424px]" />
      <img
        className="absolute top-[64px] left-[122px] w-[1197px] h-[287px]"
        alt=""
        src="/elements.svg"
      />
      <ButtonPrimarySizeLargeTy2
        activeButton="Get in Touch"
        actionDone="/arrow-chevron-right2.svg"
        buttonPrimarySizeLargeTyPosition="absolute"
        buttonPrimarySizeLargeTyTop="296px"
        buttonPrimarySizeLargeTyLeft="640px"
        actionDoneOverflow="hidden"
      />
      <b className="absolute top-[80px] left-[312px] leading-[88px] inline-block w-[816px]">
        Try your experience working with us
      </b>
    </div>
  );
};

export default CTA;
