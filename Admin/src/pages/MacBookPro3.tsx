import { FunctionComponent } from "react";
import Group from "../components/Group";
import Component1 from "../components/Component1";

const MacBookPro3: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-ghostwhite h-[900px] overflow-hidden text-left text-base text-darkgray-100 font-poppins">
      <Group />
      <div className="absolute top-[-342px] left-[-769px] w-[2682.6px] h-[1764.4px]">
        <div className="absolute top-[374px] left-[914px] w-[1255px] h-[52px]">
          <div className="absolute top-[0px] left-[0px] w-[1255px] h-[52px]">
            <div className="absolute top-[0px] left-[0px] w-[814px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] rounded-7xl bg-white w-[814px] h-[52px]" />
              <img
                className="absolute top-[19px] left-[24px] w-6 h-6 overflow-hidden"
                alt=""
                src="/search-2.svg"
              />
              <div className="absolute top-[17px] left-[64px]">Search</div>
              <div className="absolute h-[34.62%] w-[7.89%] top-[40.38%] right-[2.95%] bottom-[25%] left-[89.16%] text-xs">
                <img
                  className="absolute h-[97.22%] w-[29.91%] top-[2.78%] right-[70.09%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group.svg"
                />
                <div className="absolute top-[0px] left-[35.2px]">Filter</div>
              </div>
            </div>
            <img
              className="absolute top-[10px] left-[1223px] w-8 h-8 overflow-hidden"
              alt=""
              src="/frame.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[2682.6px] h-[1764.4px] text-5xl text-gray">
          <img
            className="absolute top-[559px] left-[1309px] w-[183px] h-[183px]"
            alt=""
          />
          <div className="absolute top-[522px] left-[1206px] w-6 h-6">
            <div className="absolute top-[0px] left-[0px] w-6 h-6">
              <div className="absolute top-[0px] left-[0px] w-6 h-6">
                <div className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden" />
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[2682.6px] h-[1764.4px]">
            <img
              className="absolute top-[0px] left-[0px] w-[2682.6px] h-[1764.4px]"
              alt=""
            />
            <div className="absolute top-[450px] left-[914px] font-semibold">
              Deliveries
            </div>
          </div>
          <div className="absolute top-[707.8px] left-[1826px] w-[329px] h-[98.2px] hidden text-xs text-darkgray-100">
            <div className="absolute top-[2.2px] left-[0px] w-[79px] h-24">
              <img
                className="absolute top-[0px] left-[22px] w-[18px] h-[18px]"
                alt=""
                src="/group-1689.svg"
              />
              <div className="absolute top-[42px] left-[0px] w-[79px] h-[54px]">
                <div className="absolute top-[0px] left-[0px]">
                  Time Outside
                </div>
                <div className="absolute top-[18px] left-[0px] text-5xl font-medium text-black">
                  109 h
                </div>
              </div>
            </div>
            <div className="absolute h-full w-[22.8%] top-[0%] right-[39.21%] bottom-[0%] left-[37.99%]">
              <img
                className="absolute h-[22.2%] w-[27.33%] top-[0%] right-[45.47%] bottom-[77.8%] left-[27.2%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector.svg"
              />
              <div className="absolute top-[44.2px] left-[0px] w-[75px] h-[54px]">
                <div className="absolute top-[0px] left-[0px]">Distance</div>
                <div className="absolute top-[18px] left-[0px] text-5xl font-medium text-black">
                  89 km
                </div>
              </div>
            </div>
            <div className="absolute top-[0.2px] left-[246px] w-[83px] h-24">
              <img
                className="absolute top-[0px] left-[22px] w-[18px] h-[18px]"
                alt=""
                src="/group-16892.svg"
              />
              <div className="absolute top-[42px] left-[0px] w-[83px] h-[54px]">
                <div className="absolute top-[0px] left-[0px] whitespace-pre-wrap">{`Goals       `}</div>
                <div className="absolute top-[18px] left-[0px] text-5xl font-medium text-black">
                  182 km
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[924px] left-[1870px] max-w-full overflow-hidden h-[204px]"
            alt=""
            src="/group7.svg"
          />
        </div>
      </div>
      <Component1 />
    </div>
  );
};

export default MacBookPro3;
