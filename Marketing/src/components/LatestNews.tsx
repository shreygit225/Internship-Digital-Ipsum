import { FunctionComponent } from "react";
import News from "./News";

export type LatestNewsType = {
  className?: string;
};

const LatestNews: FunctionComponent<LatestNewsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[7416px] left-[104px] w-[1232px] h-[793px] text-left text-base text-secondary-orange font-heading-bold-heading-2-64 ${className}`}
    >
      <News />
      <News propLeft="416px" />
      <News propLeft="0px" />
      <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] text-light-text-color-title">
        Our Latest News
      </b>
    </div>
  );
};

export default LatestNews;
