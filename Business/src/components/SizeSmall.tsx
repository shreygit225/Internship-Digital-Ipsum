import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SizeSmallType = {
  className?: string;
  namePrefix?: string;

  /** Style props */
  sizeSmallPosition?: CSSProperties["position"];
  sizeSmallTop?: CSSProperties["top"];
  sizeSmallLeft?: CSSProperties["left"];
  sizeSmallWidth?: CSSProperties["width"];
  sizeSmallHeight?: CSSProperties["height"];
  containerBackgroundColor?: CSSProperties["backgroundColor"];
  drLeft?: CSSProperties["left"];
  drTop?: CSSProperties["top"];
};

const SizeSmall: FunctionComponent<SizeSmallType> = ({
  className = "",
  namePrefix,
  sizeSmallPosition,
  sizeSmallTop,
  sizeSmallLeft,
  sizeSmallWidth,
  sizeSmallHeight,
  containerBackgroundColor,
  drLeft,
  drTop,
}) => {
  const sizeSmallStyle: CSSProperties = useMemo(() => {
    return {
      position: sizeSmallPosition,
      top: sizeSmallTop,
      left: sizeSmallLeft,
      width: sizeSmallWidth,
      height: sizeSmallHeight,
    };
  }, [
    sizeSmallPosition,
    sizeSmallTop,
    sizeSmallLeft,
    sizeSmallWidth,
    sizeSmallHeight,
  ]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: containerBackgroundColor,
    };
  }, [containerBackgroundColor]);

  const drStyle: CSSProperties = useMemo(() => {
    return {
      left: drLeft,
      top: drTop,
    };
  }, [drLeft, drTop]);

  return (
    <div
      className={`w-6 h-6 text-center text-xs text-text-white font-caption-12px-medium ${className}`}
      style={sizeSmallStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-base-wireframe-blue"
        style={containerStyle}
      />
      <div
        className="absolute top-[12.5%] left-[20.83%] leading-[150%] font-medium"
        style={drStyle}
      >
        {namePrefix}
      </div>
    </div>
  );
};

export default SizeSmall;
