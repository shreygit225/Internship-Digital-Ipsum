import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Hero1Type = {
  className?: string;
  helloGetInTouchWithUs?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const Hero1: FunctionComponent<Hero1Type> = ({
  className = "",
  helloGetInTouchWithUs,
  propLeft,
  propWidth,
}) => {
  const helloGetInStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div
      className={`absolute top-[176px] left-[0px] w-[1440px] h-[328px] text-center text-45xl text-text-title font-heading-bold-heading-6-16 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-secondary-light-green w-[1440px] h-[328px]" />
      <div className="absolute top-[71px] left-[213px] w-[887.6px] h-[204.6px]">
        <div className="absolute top-[93.3px] left-[0px] rounded bg-primary-orange w-4 h-4 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
        <div className="absolute top-[193.3px] left-[576px] rounded bg-primary-yellow w-4 h-4 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
        <div className="absolute top-[11.3px] left-[865px] rounded bg-primary-green w-4 h-4 [transform:_rotate(-45deg)] [transform-origin:0_0]" />
      </div>
      <b
        className="absolute top-[120px] left-[208px] leading-[88px] inline-block w-[1024px]"
        style={helloGetInStyle}
      >
        {helloGetInTouchWithUs}
      </b>
    </div>
  );
};

export default Hero1;
