import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeSecondarySizeMediumI from "./TypeSecondarySizeMediumI";

export type DeluxeType = {
  className?: string;
  container?: string;
  prop?: string;
  deluxe?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propLeft1?: CSSProperties["left"];
  propColor6?: CSSProperties["color"];
  propLeft2?: CSSProperties["left"];
  propColor7?: CSSProperties["color"];
};

const Deluxe: FunctionComponent<DeluxeType> = ({
  className = "",
  container,
  prop,
  deluxe,
  propLeft,
  propBorder,
  propBackgroundColor,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propLeft1,
  propColor6,
  propLeft2,
  propColor7,
}) => {
  const deluxeStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const typeSecondarySizeMediumIStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const mediumStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const pPCManagementStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const siteOptimizationStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const keywordAnalyticsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const sEOMarketingStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const unlimitedTasksStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      color: propColor6,
    };
  }, [propLeft1, propColor6]);

  const deluxe1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
      color: propColor7,
    };
  }, [propLeft2, propColor7]);

  return (
    <div
      className={`absolute top-[266px] left-[936px] w-[296px] h-[559px] text-center text-base text-text-body font-heading-bold-heading-2-64 ${className}`}
      style={deluxeStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[296px] h-[559px]"
        alt=""
        src={container}
      />
      <TypeSecondarySizeMediumI
        medium="Buy Package"
        typeSecondarySizeMediumIBorder="1px solid #fa6d24"
        typeSecondarySizeMediumIPadding="12px 32px"
        typeSecondarySizeMediumIPosition="absolute"
        typeSecondarySizeMediumITop="471px"
        typeSecondarySizeMediumILeft="67px"
        typeSecondarySizeMediumIBackgroundColor="unset"
        mediumColor="#fa6d24"
      />
      <div className="absolute top-[272px] left-[60px] w-[169px] h-[167px] text-left">
        <div className="absolute top-[140px] left-[0px] w-[169px] h-[27px]">
          <div
            className="absolute top-[0px] left-[32px] leading-[27px] inline-block w-[137px]"
            style={pPCManagementStyle}
          >
            PPC Management
          </div>
          <img
            className="absolute top-[2px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/checkmark-circle.svg"
          />
        </div>
        <div className="absolute top-[105px] left-[0px] w-[169px] h-[27px]">
          <div
            className="absolute top-[0px] left-[32px] leading-[27px] inline-block w-[137px]"
            style={siteOptimizationStyle}
          >
            Site Optimization
          </div>
          <img
            className="absolute top-[2px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/checkmark-circle.svg"
          />
        </div>
        <div className="absolute top-[70px] left-[0px] w-[169px] h-[27px]">
          <div
            className="absolute top-[0px] left-[32px] leading-[27px] inline-block w-[137px]"
            style={keywordAnalyticsStyle}
          >
            Keyword Analytics
          </div>
          <img
            className="absolute top-[2px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/checkmark-circle.svg"
          />
        </div>
        <div className="absolute top-[35px] left-[0px] w-[150px] h-[27px]">
          <div
            className="absolute top-[0px] left-[32px] leading-[27px] inline-block w-[118px]"
            style={sEOMarketingStyle}
          >
            SEO Marketing
          </div>
          <img
            className="absolute top-[2px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/checkmark-circle.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[150px] h-[27px]">
          <div
            className="absolute top-[0px] left-[32px] leading-[27px] inline-block w-[118px]"
            style={unlimitedTasksStyle}
          >
            Unlimited Tasks
          </div>
          <img
            className="absolute top-[2px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/checkmark-circle.svg"
          />
        </div>
      </div>
      <b
        className="absolute top-[192px] left-[90px] text-29xl leading-[63.98px] text-darkslateblue"
        style={bStyle}
      >
        {prop}
      </b>
      <b
        className="absolute top-[144px] left-[107px] text-5xl leading-[32px]"
        style={deluxe1Style}
      >
        {deluxe}
      </b>
      <div className="absolute top-[40px] left-[108px] bg-primary-light-blue w-20 h-20" />
    </div>
  );
};

export default Deluxe;
