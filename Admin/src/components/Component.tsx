import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ComponentType = {
  className?: string;
  vector10?: string;
  vector14?: string;
  vector15?: string;
  vector16?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propTop1?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propHeight2?: CSSProperties["height"];
  propBottom1?: CSSProperties["bottom"];
  propHeight3?: CSSProperties["height"];
  propBottom2?: CSSProperties["bottom"];
  propHeight4?: CSSProperties["height"];
  propTop2?: CSSProperties["top"];
  propBottom3?: CSSProperties["bottom"];
  propWidth1?: CSSProperties["width"];
  propTop3?: CSSProperties["top"];
  propBottom4?: CSSProperties["bottom"];
  propLeft1?: CSSProperties["left"];
  propTop4?: CSSProperties["top"];
  propTop5?: CSSProperties["top"];
  propLeft2?: CSSProperties["left"];
  propWidth2?: CSSProperties["width"];
  propLeft3?: CSSProperties["left"];
  propTop6?: CSSProperties["top"];
  propTop7?: CSSProperties["top"];
  propLeft4?: CSSProperties["left"];
  propTop8?: CSSProperties["top"];
  propWidth3?: CSSProperties["width"];
  propTop9?: CSSProperties["top"];
  propTop10?: CSSProperties["top"];
  propLeft5?: CSSProperties["left"];
  propBottom5?: CSSProperties["bottom"];
  propTop11?: CSSProperties["top"];
  propTop12?: CSSProperties["top"];
  propTop13?: CSSProperties["top"];
  propTop14?: CSSProperties["top"];
  propLeft6?: CSSProperties["left"];
};

const Component: FunctionComponent<ComponentType> = ({
  className = "",
  vector10,
  vector14,
  vector15,
  vector16,
  propTop,
  propWidth,
  propHeight,
  propHeight1,
  propTop1,
  propBottom,
  propLeft,
  propHeight2,
  propBottom1,
  propHeight3,
  propBottom2,
  propHeight4,
  propTop2,
  propBottom3,
  propWidth1,
  propTop3,
  propBottom4,
  propLeft1,
  propTop4,
  propTop5,
  propLeft2,
  propWidth2,
  propLeft3,
  propTop6,
  propTop7,
  propLeft4,
  propTop8,
  propWidth3,
  propTop9,
  propTop10,
  propLeft5,
  propBottom5,
  propTop11,
  propTop12,
  propTop13,
  propTop14,
  propLeft6,
}) => {
  const component3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
      height: propHeight,
    };
  }, [propTop, propWidth, propHeight]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      top: propTop1,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight1, propTop1, propBottom, propLeft]);

  const vectorIcon1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      bottom: propBottom1,
    };
  }, [propHeight2, propBottom1]);

  const vectorIcon2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight3,
      bottom: propBottom2,
    };
  }, [propHeight3, propBottom2]);

  const vectorIcon3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight4,
      top: propTop2,
      bottom: propBottom3,
    };
  }, [propHeight4, propTop2, propBottom3]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      top: propTop3,
      bottom: propBottom4,
    };
  }, [propWidth1, propTop3, propBottom4]);

  const deliveredStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const newYorkStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop4,
    };
  }, [propTop4]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop5,
    };
  }, [propTop5]);

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const delivered1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const newYork1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop6,
    };
  }, [propTop6]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop7,
    };
  }, [propTop7]);

  const status1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop8,
    };
  }, [propTop8]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      top: propTop9,
    };
  }, [propWidth3, propTop9]);

  const pendingStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop10,
      left: propLeft5,
    };
  }, [propTop10, propLeft5]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom5,
    };
  }, [propBottom5]);

  const newYork2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop11,
    };
  }, [propTop11]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop12,
    };
  }, [propTop12]);

  const londonStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop13,
    };
  }, [propTop13]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      top: propTop14,
    };
  }, [propTop14]);

  const status2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft6,
    };
  }, [propLeft6]);

  return (
    <div
      className={`absolute top-[232px] left-[145px] w-[331px] h-[636px] text-left text-sm text-lightslategray-200 font-poppins ${className}`}
      style={component3Style}
    >
      <div className="absolute top-[0.94%] left-[72.51%] text-base font-medium text-darkslategray">
        View all
      </div>
      <img
        className="absolute h-[0.79%] w-[3.02%] top-[2.52%] right-[0.91%] bottom-[96.7%] left-[96.07%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src={vector10}
        style={vectorIconStyle}
      />
      <div className="absolute top-[0%] left-[0%] text-5xl font-semibold text-gray">
        History
      </div>
      <div className="absolute h-[91.82%] w-[99.09%] top-[8.18%] right-[0%] bottom-[0%] left-[0.91%] rounded-mini bg-white" />
      <img
        className="absolute h-[0.31%] w-[89.43%] top-[37.11%] right-[4.83%] bottom-[62.58%] left-[5.74%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector14}
        style={vectorIcon1Style}
      />
      <img
        className="absolute h-[0.31%] w-[89.43%] top-[67.3%] right-[4.83%] bottom-[32.39%] left-[5.74%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector15}
        style={vectorIcon2Style}
      />
      <img
        className="absolute h-[0.31%] w-[89.43%] top-[97.48%] right-[4.83%] bottom-[2.2%] left-[5.74%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector16}
        style={vectorIcon3Style}
      />
      <div className="absolute top-[18.08%] left-[5.74%] text-base font-medium text-gray">
        #98095792354
      </div>
      <div
        className="absolute h-[3.93%] w-[22.36%] top-[17.77%] right-[4.83%] bottom-[78.3%] left-[72.81%] rounded-8xs bg-honeydew"
        style={rectangleDivStyle}
      />
      <div
        className="absolute top-[18.08%] left-[74.02%] text-mediumseagreen text-center"
        style={deliveredStyle}
      >
        Delivered
      </div>
      <div className="absolute h-[2.2%] w-[4.23%] top-[24.84%] right-[90.03%] bottom-[72.96%] left-[5.74%] rounded-[50%] bg-white box-border border-[4px] border-solid border-red" />
      <div
        className="absolute top-[24.21%] left-[12.39%] text-gray"
        style={newYorkStyle}
      >
        New York
      </div>
      <div className="absolute top-[24.21%] left-[76.13%]" style={divStyle}>
        34-09-21
      </div>
      <div className="absolute h-[2.2%] w-[4.23%] top-[30.66%] right-[90.03%] bottom-[67.14%] left-[5.74%] rounded-[50%] bg-white box-border border-[4px] border-solid border-gray" />
      <div className="absolute top-[30.03%] left-[12.39%] text-gray">
        London
      </div>
      <div className="absolute top-[30.03%] left-[76.13%]">34-09-21</div>
      <div className="absolute top-[10.69%] left-[5.74%]">Tracking number</div>
      <div
        className="absolute top-[10.69%] left-[81.57%] text-right"
        style={statusStyle}
      >
        Status
      </div>
      <div className="absolute top-[48.27%] left-[5.74%] text-base font-medium text-gray">
        #98095792354
      </div>
      <div
        className="absolute h-[3.93%] w-[22.36%] top-[47.96%] right-[4.83%] bottom-[48.11%] left-[72.81%] rounded-8xs bg-honeydew"
        style={rectangleDiv1Style}
      />
      <div
        className="absolute top-[48.27%] left-[74.02%] text-mediumseagreen text-center"
        style={delivered1Style}
      >
        Delivered
      </div>
      <div className="absolute h-[2.2%] w-[4.23%] top-[55.03%] right-[90.03%] bottom-[42.77%] left-[5.74%] rounded-[50%] bg-white box-border border-[4px] border-solid border-red" />
      <div
        className="absolute top-[54.4%] left-[12.39%] text-gray"
        style={newYork1Style}
      >
        New York
      </div>
      <div className="absolute top-[54.4%] left-[76.13%]" style={div1Style}>
        34-09-21
      </div>
      <div className="absolute h-[2.2%] w-[4.23%] top-[60.85%] right-[90.03%] bottom-[36.95%] left-[5.74%] rounded-[50%] bg-white box-border border-[4px] border-solid border-gray" />
      <div className="absolute top-[60.22%] left-[12.39%] text-gray">
        London
      </div>
      <div className="absolute top-[60.22%] left-[76.13%]">34-09-21</div>
      <div className="absolute top-[40.88%] left-[5.74%]">Tracking number</div>
      <div
        className="absolute top-[40.88%] left-[81.57%] text-right"
        style={status1Style}
      >
        Status
      </div>
      <div
        className="absolute top-[78.46%] left-[5.74%] text-base font-medium text-gray"
        style={div2Style}
      >
        #98095792354
      </div>
      <div
        className="absolute h-[3.93%] w-[22.36%] top-[78.14%] right-[4.83%] bottom-[17.92%] left-[72.81%] rounded-8xs bg-lightgoldenrodyellow"
        style={rectangleDiv2Style}
      />
      <div
        className="absolute top-[78.46%] left-[75.23%] text-gold text-center"
        style={pendingStyle}
      >
        Pending
      </div>
      <div
        className="absolute h-[2.2%] w-[4.23%] top-[85.22%] right-[90.03%] bottom-[12.58%] left-[5.74%] rounded-[50%] bg-white box-border border-[4px] border-solid border-red"
        style={ellipseDivStyle}
      />
      <div
        className="absolute top-[84.59%] left-[12.39%] text-gray"
        style={newYork2Style}
      >
        New York
      </div>
      <div className="absolute top-[84.59%] left-[76.13%]" style={div3Style}>
        34-09-21
      </div>
      <div className="absolute h-[2.2%] w-[4.23%] top-[91.04%] right-[90.03%] bottom-[6.76%] left-[5.74%] rounded-[50%] bg-white box-border border-[4px] border-solid border-gray" />
      <div
        className="absolute top-[90.41%] left-[12.39%] text-gray"
        style={londonStyle}
      >
        London
      </div>
      <div className="absolute top-[90.41%] left-[76.13%]" style={div4Style}>
        34-09-21
      </div>
      <div className="absolute top-[71.07%] left-[5.74%]">Tracking number</div>
      <div
        className="absolute top-[71.07%] left-[81.57%] text-right"
        style={status2Style}
      >
        Status
      </div>
    </div>
  );
};

export default Component;
