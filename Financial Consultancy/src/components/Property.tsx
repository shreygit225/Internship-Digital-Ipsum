import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property.module.css";

export type PropertyType = {
  className?: string;
  frame170?: string;
  frame177?: string;
  frame176?: string;

  /** Style props */
  property11Position?: CSSProperties["position"];
  property11BorderRadius?: CSSProperties["borderRadius"];
  rectangleDivTop?: CSSProperties["top"];
  frameIconTop?: CSSProperties["top"];
  frameIconLeft?: CSSProperties["left"];
  frameIconBorderRadius?: CSSProperties["borderRadius"];
  frameIconWidth?: CSSProperties["width"];
  frameIconHeight?: CSSProperties["height"];
  frameIconTop1?: CSSProperties["top"];
  frameIconLeft1?: CSSProperties["left"];
  frameIconBorderRadius1?: CSSProperties["borderRadius"];
  frameIconWidth1?: CSSProperties["width"];
  frameIconHeight1?: CSSProperties["height"];
  frameIconTop2?: CSSProperties["top"];
  frameIconLeft2?: CSSProperties["left"];
  frameIconBorderRadius2?: CSSProperties["borderRadius"];
  frameIconWidth2?: CSSProperties["width"];
  frameIconHeight2?: CSSProperties["height"];
};

const Property: FunctionComponent<PropertyType> = ({
  className = "",
  frame170,
  frame177,
  frame176,
  property11Position,
  property11BorderRadius,
  rectangleDivTop,
  frameIconTop,
  frameIconLeft,
  frameIconBorderRadius,
  frameIconWidth,
  frameIconHeight,
  frameIconTop1,
  frameIconLeft1,
  frameIconBorderRadius1,
  frameIconWidth1,
  frameIconHeight1,
  frameIconTop2,
  frameIconLeft2,
  frameIconBorderRadius2,
  frameIconWidth2,
  frameIconHeight2,
}) => {
  const property11Style: CSSProperties = useMemo(() => {
    return {
      position: property11Position,
      borderRadius: property11BorderRadius,
    };
  }, [property11Position, property11BorderRadius]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
    };
  }, [rectangleDivTop]);

  const frameIconStyle: CSSProperties = useMemo(() => {
    return {
      top: frameIconTop,
      left: frameIconLeft,
      borderRadius: frameIconBorderRadius,
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [
    frameIconTop,
    frameIconLeft,
    frameIconBorderRadius,
    frameIconWidth,
    frameIconHeight,
  ]);

  const frameIcon1Style: CSSProperties = useMemo(() => {
    return {
      top: frameIconTop1,
      left: frameIconLeft1,
      borderRadius: frameIconBorderRadius1,
      width: frameIconWidth1,
      height: frameIconHeight1,
    };
  }, [
    frameIconTop1,
    frameIconLeft1,
    frameIconBorderRadius1,
    frameIconWidth1,
    frameIconHeight1,
  ]);

  const frameIcon2Style: CSSProperties = useMemo(() => {
    return {
      top: frameIconTop2,
      left: frameIconLeft2,
      borderRadius: frameIconBorderRadius2,
      width: frameIconWidth2,
      height: frameIconHeight2,
    };
  }, [
    frameIconTop2,
    frameIconLeft2,
    frameIconBorderRadius2,
    frameIconWidth2,
    frameIconHeight2,
  ]);

  return (
    <div
      className={[styles.property11, className].join(" ")}
      style={property11Style}
    >
      <div className={styles.property11Child} style={rectangleDivStyle} />
      <img
        className={styles.property11Item}
        alt=""
        src={frame170}
        style={frameIconStyle}
      />
      <img
        className={styles.property11Inner}
        alt=""
        src={frame177}
        style={frameIcon1Style}
      />
      <img
        className={styles.frameIcon}
        alt=""
        src={frame176}
        style={frameIcon2Style}
      />
    </div>
  );
};

export default Property;
