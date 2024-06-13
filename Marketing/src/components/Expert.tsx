import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ExpertType = {
  className?: string;
  analytics?: string;
  georgeJordan?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const Expert: FunctionComponent<ExpertType> = ({
  className = "",
  analytics,
  georgeJordan,
  propLeft,
}) => {
  const expert4Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[792px] left-[832px] w-[400px] h-[584px] text-center text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
      style={expert4Style}
    >
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[400px] h-[584px]" />
      <b className="absolute top-[535px] left-[32px] leading-[32px] inline-block w-[336px] h-[33px]">
        {analytics}
      </b>
      <b className="absolute top-[480px] left-[24px] text-13xl leading-[48px] inline-block w-[352px] h-[47px]">
        {georgeJordan}
      </b>
      <img
        className="absolute top-[0px] left-[0px] w-[400px] h-[456px]"
        alt=""
        src="/image-placeholder.svg"
      />
    </div>
  );
};

export default Expert;
