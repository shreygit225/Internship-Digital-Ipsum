import { FunctionComponent, useMemo, type CSSProperties } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;
  rectangle181?: string;
  freeConsultant?: string;
  leading?: boolean;
  trailing?: boolean;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
};

const Component: FunctionComponent<ComponentType> = ({
  className = "",
  rectangle181,
  freeConsultant,
  propBorderRadius,
  leading,
  trailing,
}) => {
  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={[styles.div, className].join(" ")}>
      <img
        className={styles.child}
        alt=""
        src={rectangle181}
        style={rectangleIconStyle}
      />
      <FrameComponent1
        freeConsultant="Free Consultant"
        frameDivFlex="1"
        frameDivAlignSelf="stretch"
      />
    </div>
  );
};

export default Component;
