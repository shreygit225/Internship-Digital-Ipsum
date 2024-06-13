import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonPrimarySizeLargeTyType = {
  className?: string;
  activeButton?: string;

  /** Style props */
  buttonPrimarySizeLargeTyWidth?: CSSProperties["width"];
  buttonPrimarySizeLargeTyPosition?: CSSProperties["position"];
  buttonPrimarySizeLargeTyTop?: CSSProperties["top"];
  buttonPrimarySizeLargeTyLeft?: CSSProperties["left"];
  buttonPrimarySizeLargeTyBackgroundColor?: CSSProperties["backgroundColor"];
  buttonPrimarySizeLargeTyBorder?: CSSProperties["border"];
  activeButtonColor?: CSSProperties["color"];
};

const ButtonPrimarySizeLargeTy: FunctionComponent<
  ButtonPrimarySizeLargeTyType
> = ({
  className = "",
  activeButton,
  buttonPrimarySizeLargeTyWidth,
  buttonPrimarySizeLargeTyPosition,
  buttonPrimarySizeLargeTyTop,
  buttonPrimarySizeLargeTyLeft,
  buttonPrimarySizeLargeTyBackgroundColor,
  buttonPrimarySizeLargeTyBorder,
  activeButtonColor,
}) => {
  const buttonPrimarySizeLargeTyStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonPrimarySizeLargeTyWidth,
      position: buttonPrimarySizeLargeTyPosition,
      top: buttonPrimarySizeLargeTyTop,
      left: buttonPrimarySizeLargeTyLeft,
      backgroundColor: buttonPrimarySizeLargeTyBackgroundColor,
      border: buttonPrimarySizeLargeTyBorder,
    };
  }, [
    buttonPrimarySizeLargeTyWidth,
    buttonPrimarySizeLargeTyPosition,
    buttonPrimarySizeLargeTyTop,
    buttonPrimarySizeLargeTyLeft,
    buttonPrimarySizeLargeTyBackgroundColor,
    buttonPrimarySizeLargeTyBorder,
  ]);

  const activeButtonStyle: CSSProperties = useMemo(() => {
    return {
      color: activeButtonColor,
    };
  }, [activeButtonColor]);

  return (
    <div
      className={`w-[120px] rounded-21xl bg-primary-green flex flex-row items-center justify-center p-3 box-border text-left text-sm text-text-white font-heading-bold-heading-6-16 ${className}`}
      style={buttonPrimarySizeLargeTyStyle}
    >
      <div className="relative leading-[24px]" style={activeButtonStyle}>
        {activeButton}
      </div>
    </div>
  );
};

export default ButtonPrimarySizeLargeTy;
