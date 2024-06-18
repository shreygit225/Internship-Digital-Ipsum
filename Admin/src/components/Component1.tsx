import { FunctionComponent } from "react";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[496px] left-[1070px] w-[330px] h-[371px] text-left text-sm text-gray font-poppins ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-white" />
      <img
        className="absolute h-[37.47%] w-[0.3%] top-[23.18%] right-[90.3%] bottom-[39.35%] left-[9.39%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-17.svg"
      />
      <img
        className="absolute h-[18.87%] w-[0.3%] top-[59.3%] right-[90.3%] bottom-[21.83%] left-[9.39%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-18.svg"
      />
      <div className="absolute h-[12.13%] w-[38.48%] top-[23.18%] right-[45.15%] bottom-[64.69%] left-[16.36%]">
        <div className="absolute top-[0%] left-[0%]">Requested</div>
        <div className="absolute top-[53.33%] left-[0%] font-medium">
          20-02-21. 10.00PM
        </div>
      </div>
      <div className="absolute top-[41.78%] left-[16.36%]">Picked-Up</div>
      <div className="absolute top-[48.25%] left-[16.36%] font-medium">
        20-02-21. 10.00PM
      </div>
      <div className="absolute top-[60.38%] left-[16.36%]">In transit</div>
      <div className="absolute top-[66.85%] left-[16.36%] font-medium">
        20-02-21. 10.00PM
      </div>
      <div className="absolute top-[78.98%] left-[16.36%] text-lightslategray-100">
        Package delivered
      </div>
      <div className="absolute top-[85.44%] left-[16.36%] font-medium text-lightslategray-100">
        20-02-21. 10.00PM
      </div>
      <div className="absolute h-[3.77%] w-[4.24%] top-[24.26%] right-[86.06%] bottom-[71.97%] left-[9.7%] rounded-[50%] bg-tomato-100" />
      <div className="absolute h-[3.77%] w-[4.24%] top-[42.86%] right-[86.06%] bottom-[53.37%] left-[9.7%] rounded-[50%] bg-khaki" />
      <div className="absolute h-[3.77%] w-[4.24%] top-[61.46%] right-[86.06%] bottom-[34.77%] left-[9.7%] rounded-[50%] bg-springgreen" />
      <div className="absolute h-[3.77%] w-[4.24%] top-[80.05%] right-[86.06%] bottom-[16.17%] left-[9.7%] rounded-[50%] bg-white box-border border-[3px] border-solid border-silver" />
      <div className="absolute top-[8.63%] left-[9.7%] text-xl font-semibold">
        Package Status
      </div>
    </div>
  );
};

export default Component1;
