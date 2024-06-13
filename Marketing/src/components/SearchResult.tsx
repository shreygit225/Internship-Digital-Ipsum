import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SearchResultType = {
  className?: string;
  searchResult?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propLeft1?: CSSProperties["left"];
  propTextAlign?: CSSProperties["textAlign"];
};

const SearchResult: FunctionComponent<SearchResultType> = ({
  className = "",
  searchResult,
  propLeft,
  propBackgroundColor,
  propLeft1,
  propTextAlign,
}) => {
  const searchResultStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const cardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const searchResult1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      textAlign: propTextAlign,
    };
  }, [propLeft1, propTextAlign]);

  return (
    <div
      className={`absolute top-[278px] left-[1040px] w-[296px] h-[385px] text-center text-base text-text-white font-heading-bold-heading-2-64 ${className}`}
      style={searchResultStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] bg-darkslateblue w-[296px] h-[385px]"
        style={cardStyle}
      />
      <div className="absolute top-[256px] left-[28px] leading-[27px] inline-block w-60">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </div>
      <b
        className="absolute top-[208px] left-[69px] text-5xl leading-[32px]"
        style={searchResult1Style}
      >
        {searchResult}
      </b>
      <div className="absolute top-[48px] left-[88px] rounded-[50%] bg-primary-light-blue w-[120px] h-[120px]" />
    </div>
  );
};

export default SearchResult;
