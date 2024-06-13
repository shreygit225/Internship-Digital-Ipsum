import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MissionType = {
  className?: string;
  ourMission?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
  propLeft3?: CSSProperties["left"];
  propLeft4?: CSSProperties["left"];
  propLeft5?: CSSProperties["left"];
  propLeft6?: CSSProperties["left"];
  propLeft7?: CSSProperties["left"];
};

const Mission: FunctionComponent<MissionType> = ({
  className = "",
  ourMission,
  propTop,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
  propLeft4,
  propLeft5,
  propLeft6,
  propLeft7,
}) => {
  const missionStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const imagePlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const valueStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const value1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const value2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const value3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  const value4Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft5,
    };
  }, [propLeft5]);

  const loremIpsumIsStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft6,
    };
  }, [propLeft6]);

  const ourMissionStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft7,
    };
  }, [propLeft7]);

  return (
    <div
      className={`absolute top-[624px] left-[104px] w-[1232px] h-[512px] text-left text-base text-text-title font-heading-bold-heading-6-16 ${className}`}
      style={missionStyle}
    >
      <div
        className="absolute top-[0px] left-[728px] rounded-3xl bg-other-image-placeholder w-[504px] h-[512px]"
        style={imagePlaceholderStyle}
      />
      <div
        className="absolute top-[480px] left-[0px] flex flex-row items-center justify-start gap-[8px]"
        style={valueStyle}
      >
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/checkmark.svg"
        />
        <div className="relative leading-[32px]">
          plan a business strategy that is better than competitors
        </div>
      </div>
      <div
        className="absolute top-[424px] left-[0px] flex flex-row items-center justify-start gap-[8px]"
        style={value1Style}
      >
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/checkmark.svg"
        />
        <div className="relative leading-[32px]">
          make the client satisfied and happy
        </div>
      </div>
      <div
        className="absolute top-[368px] left-[0px] flex flex-row items-center justify-start gap-[8px]"
        style={value2Style}
      >
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/checkmark.svg"
        />
        <div className="relative leading-[32px]">
          Analyze a small potential into a big one
        </div>
      </div>
      <div
        className="absolute top-[312px] left-[0px] flex flex-row items-center justify-start gap-[8px]"
        style={value3Style}
      >
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/checkmark.svg"
        />
        <div className="relative leading-[32px]">
          Good and efficient financial planning
        </div>
      </div>
      <div
        className="absolute top-[256px] left-[0px] flex flex-row items-center justify-start gap-[8px]"
        style={value4Style}
      >
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/checkmark.svg"
        />
        <div className="relative leading-[32px]">Help business development</div>
      </div>
      <div
        className="absolute top-[88px] left-[0px] leading-[32px] text-text-body inline-block w-[608px]"
        style={loremIpsumIsStyle}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <b
        className="absolute top-[0px] left-[0px] text-29xl leading-[63.98px] inline-block w-[608px]"
        style={ourMissionStyle}
      >
        {ourMission}
      </b>
    </div>
  );
};

export default Mission;
