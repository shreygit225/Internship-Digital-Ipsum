import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FormType = {
  className?: string;
  inputYourSubjectInHere?: string;
  subject?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const Form: FunctionComponent<FormType> = ({
  className = "",
  inputYourSubjectInHere,
  subject,
  propLeft,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const formStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const form1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const container1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className={`absolute top-[328px] left-[552px] w-[264px] h-28 text-left text-base text-text-in-field font-heading-bold-heading-6-16 ${className}`}
      style={formStyle}
    >
      <div
        className="absolute top-[48px] left-[0px] w-[264px] h-16"
        style={form1Style}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-2xl bg-text-white box-border w-[264px] h-16 border-[1px] border-solid border-text-disable"
          style={container1Style}
        />
        <div className="absolute top-[16px] left-[16px] leading-[32px]">
          {inputYourSubjectInHere}
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] leading-[32px] text-text-body">
        {subject}
      </div>
    </div>
  );
};

export default Form;
