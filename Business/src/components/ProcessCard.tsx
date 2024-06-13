import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ProcessCardType = {
  className?: string;
  prop?: string;
  planning?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
};

const ProcessCard: FunctionComponent<ProcessCardType> = ({
  className = "",
  prop,
  planning,
  propLeft,
  propLeft1,
}) => {
  const processCardStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className={`absolute top-[208px] left-[0px] w-[400px] h-[360px] text-left text-53xl text-text-disable font-heading-bold-heading-6-16 ${className}`}
      style={processCardStyle}
    >
      <div className="absolute top-[0px] left-[0px] box-border w-[400px] h-[360px] border-[1px] border-solid border-text-in-field" />
      <b
        className="absolute top-[256px] left-[307px] leading-[96px] text-right"
        style={bStyle}
      >
        {prop}
      </b>
      <div className="absolute top-[104px] left-[40px] text-base leading-[32px] text-text-body inline-block w-80">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta phasellus tempus, malesuada massa. Tortor mattis a lectus egestas eget donec quis ligula eget. In habitant risus nisi, venenatis. `}</div>
      <b className="absolute top-[40px] left-[40px] text-13xl leading-[48px] inline-block text-text-title w-80">
        {planning}
      </b>
    </div>
  );
};

export default ProcessCard;
