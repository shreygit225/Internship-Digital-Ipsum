import { FunctionComponent } from "react";
import SearchResult from "./SearchResult";

export type SEOGuideType = {
  className?: string;
};

const SEOGuide: FunctionComponent<SEOGuideType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3894px] left-[0px] w-[1440px] h-[743px] text-center text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue w-[1440px] h-[743px]" />
      <SearchResult searchResult="Search Result" />
      <SearchResult
        searchResult="PPC Management"
        propLeft="728px"
        propBackgroundColor="#1f2a6b"
        propLeft1="45px"
        propTextAlign="center"
      />
      <SearchResult
        searchResult="SEO Optimization"
        propLeft="416px"
        propBackgroundColor="#1f2a6b"
        propLeft1="46px"
        propTextAlign="center"
      />
      <SearchResult
        searchResult="Competitive Analysis"
        propLeft="104px"
        propBackgroundColor="#3b4790"
        propLeft1="24px"
        propTextAlign="left"
      />
      <div className="absolute top-[168px] left-[418px] leading-[27px] inline-block w-[605px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </div>
      <b className="absolute top-[80px] left-[438px] text-29xl leading-[63.98px]">
        The Ultimate SEO Guide.
      </b>
    </div>
  );
};

export default SEOGuide;
