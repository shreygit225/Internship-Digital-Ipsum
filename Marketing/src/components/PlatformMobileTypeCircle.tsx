import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type PlatformMobileTypeCircleType = {
  className?: string;

  /** Style props */
  platformMobileTypeCircleOverflow?: CSSProperties["overflow"];
  platformMobileTypeCirclePosition?: CSSProperties["position"];
  platformMobileTypeCircleTop?: CSSProperties["top"];
  platformMobileTypeCircleLeft?: CSSProperties["left"];
};

const PlatformMobileTypeCircle: FunctionComponent<
  PlatformMobileTypeCircleType
> = ({
  className = "",
  platformMobileTypeCircleOverflow,
  platformMobileTypeCirclePosition,
  platformMobileTypeCircleTop,
  platformMobileTypeCircleLeft,
}) => {
  const platformMobileTypeCircleStyle: CSSProperties = useMemo(() => {
    return {
      overflow: platformMobileTypeCircleOverflow,
      position: platformMobileTypeCirclePosition,
      top: platformMobileTypeCircleTop,
      left: platformMobileTypeCircleLeft,
    };
  }, [
    platformMobileTypeCircleOverflow,
    platformMobileTypeCirclePosition,
    platformMobileTypeCircleTop,
    platformMobileTypeCircleLeft,
  ]);

  return (
    <img
      className={`w-20 max-w-full overflow-hidden h-20 object-cover ${className}`}
      alt=""
      src="/avatar@2x.png"
      style={platformMobileTypeCircleStyle}
    />
  );
};

export default PlatformMobileTypeCircle;
