import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonPrimarySizeLargeTy2Type = {
  className?: string;
  activeButton?: string;
  actionDone?: string;

  /** Style props */
  buttonPrimarySizeLargeTyPosition?: CSSProperties["position"];
  buttonPrimarySizeLargeTyTop?: CSSProperties["top"];
  buttonPrimarySizeLargeTyLeft?: CSSProperties["left"];
  actionDoneOverflow?: CSSProperties["overflow"];
};

const ButtonPrimarySizeLargeTy2: FunctionComponent<
  ButtonPrimarySizeLargeTy2Type
> = ({
  className = "",
  activeButton,
  actionDone,
  buttonPrimarySizeLargeTyPosition,
  buttonPrimarySizeLargeTyTop,
  buttonPrimarySizeLargeTyLeft,
  actionDoneOverflow,
}) => {
  const buttonPrimarySizeLargeTy1Style: CSSProperties = useMemo(() => {
    return {
      position: buttonPrimarySizeLargeTyPosition,
      top: buttonPrimarySizeLargeTyTop,
      left: buttonPrimarySizeLargeTyLeft,
    };
  }, [
    buttonPrimarySizeLargeTyPosition,
    buttonPrimarySizeLargeTyTop,
    buttonPrimarySizeLargeTyLeft,
  ]);

  const actionDoneStyle: CSSProperties = useMemo(() => {
    return {
      overflow: actionDoneOverflow,
    };
  }, [actionDoneOverflow]);

  return (
    <div
      className={`rounded-21xl bg-primary-green flex flex-col items-center justify-center py-3 px-[41.5px] text-left text-sm text-text-white font-heading-bold-heading-6-16 ${className}`}
      style={buttonPrimarySizeLargeTy1Style}
    >
      <div className="flex flex-row items-center justify-center gap-[8px]">
        <div className="relative leading-[24px]">{activeButton}</div>
        <img
          className="w-6 relative h-6"
          alt=""
          src={actionDone}
          style={actionDoneStyle}
        />
      </div>
    </div>
  );
};

export default ButtonPrimarySizeLargeTy2;
