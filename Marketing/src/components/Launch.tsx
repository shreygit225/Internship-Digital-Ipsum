import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LaunchType = {
  className?: string;
  launch?: string;
  prop?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Launch: FunctionComponent<LaunchType> = ({
  className = "",
  launch,
  prop,
  propTop,
  propLeft,
}) => {
  const launchStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`absolute top-[413px] left-[312px] w-[296px] h-[316px] text-left text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
      style={launchStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-text-white w-[296px] h-[316px]" />
      <div className="absolute top-[176px] left-[24px] leading-[27px] inline-block w-[248px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
      <b className="absolute top-[136px] left-[24px] text-5xl leading-[32px] text-text-title">
        {launch}
      </b>
      <div className="absolute top-[56px] left-[24px] w-14 h-14">
        <div className="absolute top-[0px] left-[0px] bg-primary-light-blue w-14 h-14" />
      </div>
      <b className="absolute top-[52px] left-[207px] text-29xl leading-[63.98px] text-text-disable">
        {prop}
      </b>
    </div>
  );
};

export default Launch;
