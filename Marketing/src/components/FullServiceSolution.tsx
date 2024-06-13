import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FullServiceSolutionType = {
  className?: string;
  fullServiceSolution?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const FullServiceSolution: FunctionComponent<FullServiceSolutionType> = ({
  className = "",
  fullServiceSolution,
  propLeft,
}) => {
  const fullServiceSolutionStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[273px] left-[936px] w-[296px] h-[337px] text-left text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
      style={fullServiceSolutionStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-text-white w-[296px] h-[337px]" />
      <div className="absolute top-[208px] left-[32px] leading-[27px] inline-block w-[229px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <b className="absolute top-[152px] left-[32px] text-5xl leading-[32px] text-text-title">
        {fullServiceSolution}
      </b>
      <div className="absolute top-[48px] left-[32px] rounded-[50%] bg-darkslateblue w-16 h-16" />
    </div>
  );
};

export default FullServiceSolution;
