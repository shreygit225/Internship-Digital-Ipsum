import { FunctionComponent } from "react";
import Group from "../components/Group";

const MacBookPro2: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-ghostwhite h-[900px] overflow-hidden text-left text-base text-darkgray-100 font-poppins">
      <Group />
      <div className="absolute top-[-332px] left-[-769px] w-[2682.6px] h-[1764.4px]">
        <div className="absolute top-[363.9px] left-[913.6px] w-[1255px] h-[52px]">
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
            className="absolute top-[548.9px] left-[1308.6px] w-[183px] h-[183px]"
            alt=""
          />
          <div className="absolute top-[511.9px] left-[1205.6px] w-6 h-6">
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
            <div className="absolute top-[439.9px] left-[913.6px] font-semibold">
              Profile
            </div>
          </div>
          <div className="absolute top-[552px] left-[914px] rounded-mini bg-white w-[1255px] h-[624px]" />
          <div className="absolute top-[782px] left-[1239px] w-[613px] h-[312px] text-center">
            <img
              className="absolute top-[0px] left-[253px] w-[120px] h-[120px] object-contain"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="absolute top-[186px] left-[0px] font-semibold inline-block w-[613px] h-[63px]">
              Irene BaeBae
            </div>
            <div className="absolute top-[276px] left-[217px] text-sm text-lightslategray-200 inline-block w-[175px] h-9">
              Admin
            </div>
          </div>
          <div className="absolute top-[697.7px] left-[1825.6px] w-[329px] h-[98.2px] hidden text-xs text-darkgray-100">
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
            className="absolute top-[1047.9px] left-[1869.6px] max-w-full overflow-hidden h-[70px]"
            alt=""
            src="/group5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro2;
