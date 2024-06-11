import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property from "./Property";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  companyBranchesInVariousC?: string;
  frame170?: string;
  frame177?: string;
  frame176?: string;

  /** Style props */
  component2BorderRadius?: CSSProperties["borderRadius"];
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

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  prop,
  companyBranchesInVariousC,
  frame170,
  frame177,
  frame176,
  component2BorderRadius,
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
      borderRadius: component2BorderRadius,
    };
  }, [component2BorderRadius]);

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
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.parent}>
        <b className={styles.b}>{prop}</b>
        <div className={styles.companyBranchesIn}>
          {companyBranchesInVariousC}
        </div>
      </div>
      <Property
        frame170="/frame-170@2x.png"
        frame177="/frame-177@2x.png"
        frame176="/frame-176@2x.png"
        property11Position="relative"
        property11BorderRadius="unset"
        rectangleDivTop="47px"
        frameIconTop="92.5px"
        frameIconLeft="169.5px"
        frameIconBorderRadius="23px"
        frameIconWidth="152.3px"
        frameIconHeight="152.3px"
        frameIconTop1="77.4px"
        frameIconLeft1="93.4px"
        frameIconBorderRadius1="23px"
        frameIconWidth1="143.8px"
        frameIconHeight1="143.8px"
        frameIconTop2="12.7px"
        frameIconLeft2="-12.3px"
        frameIconBorderRadius2="32px"
        frameIconWidth2="168.2px"
        frameIconHeight2="168.2px"
      />
    </div>
  );
};

export default FrameComponent;
