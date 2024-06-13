import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NewsType = {
  className?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const News: FunctionComponent<NewsType> = ({ className = "", propLeft }) => {
  const news3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[112px] left-[832px] w-[400px] h-[681px] text-left text-base text-secondary-orange font-heading-bold-heading-2-64 ${className}`}
      style={news3Style}
    >
      <b className="absolute top-[657px] left-[0px] leading-[24px]">
        Explore More
      </b>
      <div className="absolute top-[552px] left-[0px] leading-[27px] text-light-text-color-body-1 inline-block w-[400px]">{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. `}</div>
      <div className="absolute top-[520px] left-[0px] w-32 h-4 text-sm text-text-body">
        <div className="absolute top-[0px] left-[77px] leading-[16px]">
          Animals
        </div>
        <div className="absolute top-[6px] left-[57px] rounded-[50%] bg-text-body w-1 h-1" />
        <div className="absolute top-[0px] left-[0px] leading-[16px]">
          14 Feb
        </div>
      </div>
      <b className="absolute top-[440px] left-[0px] text-5xl leading-[32px] inline-block text-text-title w-[332px]">
        Reverse-Engineering Google’s Algorithm
      </b>
      <div className="absolute top-[0px] left-[0px] bg-other-image-placeholder w-[400px] h-[416px]" />
    </div>
  );
};

export default News;
