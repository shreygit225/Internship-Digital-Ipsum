import { FunctionComponent } from "react";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[180px] left-[209px] w-[1117px] h-[664px] text-center text-sm text-gray font-poppins ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-white" />
      <div className="absolute h-[63.22%] w-[33.32%] top-[19.11%] right-[58.47%] bottom-[17.67%] left-[8.21%] rounded-[50%] bg-springgreen" />
      <div className="absolute h-[63.22%] w-[33.32%] top-[19.11%] right-[58.47%] bottom-[17.67%] left-[8.21%] rounded-[50%] bg-khaki" />
      <div className="absolute h-[63.22%] w-[33.32%] top-[19.11%] right-[58.47%] bottom-[17.67%] left-[8.21%] rounded-[50%] bg-tomato-100" />
      <b className="absolute h-[13.3%] w-[15.9%] top-[39.22%] left-[16.57%] text-13xl inline-block font-ubuntu">
        100%
      </b>
      <div className="absolute h-[8.27%] w-[12.5%] top-[52.52%] left-[18.28%] text-xl font-ubuntu text-darkgray-200 inline-block">
        Overall
      </div>
      <div className="absolute h-[7.42%] w-[10.43%] top-[21.91%] left-[51.4%] inline-block">
        On time
      </div>
      <div className="absolute h-[7.42%] w-[5.59%] top-[21.91%] left-[86.97%] font-medium text-right inline-block">
        40%
      </div>
      <div className="absolute h-[7.42%] w-[5.4%] top-[46.3%] left-[86.97%] font-medium text-right inline-block">
        35%
      </div>
      <div className="absolute h-[7.42%] w-[5.4%] top-[70.68%] left-[87.15%] font-medium text-right inline-block">
        25%
      </div>
      <div className="absolute h-[7.42%] w-[14.52%] top-[46.3%] left-[51.4%] text-left inline-block">
        In progress
      </div>
      <div className="absolute h-[7.42%] w-[10.8%] top-[70.68%] left-[51.4%] text-left inline-block">
        Delayed
      </div>
      <img
        className="absolute h-[0.3%] w-[41.15%] top-[37.82%] right-[7.45%] bottom-[61.88%] left-[51.4%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-111.svg"
      />
      <img
        className="absolute h-[0.3%] w-[41.62%] top-[62.18%] right-[7.54%] bottom-[37.52%] left-[50.84%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-121.svg"
      />
      <div className="absolute h-[7.42%] w-[3.91%] top-[21.91%] right-[50.09%] bottom-[70.66%] left-[46%] rounded-[50%] bg-springgreen" />
      <div className="absolute h-[7.42%] w-[3.91%] top-[46.3%] right-[50.09%] bottom-[46.28%] left-[46%] rounded-[50%] bg-khaki" />
      <div className="absolute h-[7.42%] w-[3.91%] top-[70.68%] right-[50.09%] bottom-[21.9%] left-[46%] rounded-[50%] bg-tomato-100" />
    </div>
  );
};

export default Component1;
