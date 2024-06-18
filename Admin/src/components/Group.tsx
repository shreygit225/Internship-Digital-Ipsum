import { FunctionComponent } from "react";

export type GroupType = {
  className?: string;
};

const Group: FunctionComponent<GroupType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[1px] w-[104px] h-[900px] text-center text-5xl text-white font-poppins ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[104px] h-[900px]">
        <div className="absolute top-[0px] left-[0px] bg-tomato-200 w-[104px] h-[900px]" />
        <b className="absolute top-[40px] left-[22px]">LogX</b>
        <div className="absolute top-[116px] left-[40px] w-6 h-[752px]">
          <div className="absolute top-[0px] left-[0px] w-6 h-[344px]">
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/frame-1.svg"
            />
            <img
              className="absolute top-[80px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/frame-2.svg"
            />
            <img
              className="absolute top-[160px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/frame-3.svg"
            />
            <img
              className="absolute top-[240px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/frame-4.svg"
            />
            <img
              className="absolute top-[320px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/frame-5.svg"
            />
          </div>
          <img
            className="absolute h-[3.19%] w-[93.33%] top-[96.81%] right-[4.17%] bottom-[0%] left-[2.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/leave.svg"
          />
          <img
            className="absolute top-[400px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/settings-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Group;
