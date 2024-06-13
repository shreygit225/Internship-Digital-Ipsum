import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CTAType = {
  className?: string;

  /** Style props */
  cTATop?: CSSProperties["top"];
};

const CTA: FunctionComponent<CTAType> = ({ className = "", cTATop }) => {
  const cTAStyle: CSSProperties = useMemo(() => {
    return {
      top: cTATop,
    };
  }, [cTATop]);

  return (
    <div
      className={`absolute top-[8369px] left-[104px] w-[1232px] h-[432px] text-center text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
      style={cTAStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[1232px] h-[432px]" />
      <div className="absolute top-[307px] left-[328px] w-[576px] h-14 text-left text-text-in-field font-paragraph-regular-16">
        <img
          className="absolute top-[0px] left-[520px] w-14 h-14"
          alt=""
          src="/send-button.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-[504px] h-14">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-text-white box-border w-[504px] h-14 border-[1px] border-solid border-primary-light-blue" />
          <div className="absolute top-[16px] left-[16px] leading-[150%] inline-block w-[270px]">
            Input your email address in here
          </div>
        </div>
      </div>
      <div className="absolute top-[216px] left-[320px] leading-[27px] inline-block w-[604px]">
        Get the latest articles to your inbox
      </div>
      <b className="absolute top-[64px] left-[358px] text-29xl leading-[63.98px] inline-block w-[536px]">
        Sign Up for Our Newsletters
      </b>
    </div>
  );
};

export default CTA;
