import { FunctionComponent } from "react";
import KeywordResearch from "./KeywordResearch";

export type BusinessPowerType = {
  className?: string;
};

const BusinessPower: FunctionComponent<BusinessPowerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[1200px] left-[104px] w-[1232px] h-[608px] text-left text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
    >
      <KeywordResearch keywordResearch="Keyword Research" />
      <KeywordResearch
        keywordResearch="Traffic Result"
        propLeft="416px"
        propBackgroundColor="#fff"
      />
      <KeywordResearch
        keywordResearch="SEO Magic Keyword"
        propLeft="0px"
        propBackgroundColor="#f9fafe"
      />
      <b className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block text-text-title w-[578px]">
        <p className="m-0">{`Boost your Business `}</p>
        <p className="m-0">with the Power of SEO.</p>
      </b>
    </div>
  );
};

export default BusinessPower;
