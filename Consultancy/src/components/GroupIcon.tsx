import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupIcon.module.css";

export type GroupIconType = {
  className?: string;
  group104?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
};

const GroupIcon: FunctionComponent<GroupIconType> = ({
  className = "",
  group104,
  propWidth,
  propTop,
  propLeft,
  propHeight,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propWidth, propTop, propLeft, propHeight]);

  return (
    <img
      className={[styles.frameChild, className].join(" ")}
      alt=""
      src={group104}
      style={groupIconStyle}
    />
  );
};

export default GroupIcon;
