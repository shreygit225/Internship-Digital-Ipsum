import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DummyLogoType = {
  className?: string;
  dummyLogoDummyLogo02?: string;

  /** Style props */
  dummyLogo02IconWidth?: CSSProperties["width"];
  dummyLogo02IconHeight?: CSSProperties["height"];
  dummyLogo02IconPosition?: CSSProperties["position"];
  dummyLogo02IconTop?: CSSProperties["top"];
  dummyLogo02IconLeft?: CSSProperties["left"];
};

const DummyLogo: FunctionComponent<DummyLogoType> = ({
  className = "",
  dummyLogoDummyLogo02,
  dummyLogo02IconWidth,
  dummyLogo02IconHeight,
  dummyLogo02IconPosition,
  dummyLogo02IconTop,
  dummyLogo02IconLeft,
}) => {
  const dummyLogo02IconStyle: CSSProperties = useMemo(() => {
    return {
      width: dummyLogo02IconWidth,
      height: dummyLogo02IconHeight,
      position: dummyLogo02IconPosition,
      top: dummyLogo02IconTop,
      left: dummyLogo02IconLeft,
    };
  }, [
    dummyLogo02IconWidth,
    dummyLogo02IconHeight,
    dummyLogo02IconPosition,
    dummyLogo02IconTop,
    dummyLogo02IconLeft,
  ]);

  return (
    <img
      className={`w-48 max-w-full overflow-hidden h-20 ${className}`}
      alt=""
      src={dummyLogoDummyLogo02}
      style={dummyLogo02IconStyle}
    />
  );
};

export default DummyLogo;
