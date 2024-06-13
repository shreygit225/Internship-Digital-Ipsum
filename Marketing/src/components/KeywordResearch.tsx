import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type KeywordResearchType = {
  className?: string;
  keywordResearch?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const KeywordResearch: FunctionComponent<KeywordResearchType> = ({
  className = "",
  keywordResearch,
  propLeft,
  propBackgroundColor,
}) => {
  const keywordResearchStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`absolute top-[208px] left-[832px] w-[400px] h-[400px] text-left text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
      style={keywordResearchStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] bg-text-white w-[400px] h-[400px]"
        style={card1Style}
      />
      <div className="absolute top-[224px] left-[24px] leading-[27px] inline-block w-[352px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text. Lorem
        Ipsum has been the industry's standard dummy text.
      </div>
      <b className="absolute top-[168px] left-[24px] text-5xl leading-[32px] text-text-title">
        {keywordResearch}
      </b>
      <div className="absolute top-[64px] left-[24px] rounded-[50%] bg-darkslateblue w-16 h-16" />
    </div>
  );
};

export default KeywordResearch;
