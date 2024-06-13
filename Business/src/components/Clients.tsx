import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ClientsType = {
  className?: string;
  logo4?: string;
  logo9?: string;
  logo6?: string;
  logo7?: string;
  logo8?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Clients: FunctionComponent<ClientsType> = ({
  className = "",
  logo4,
  logo9,
  logo6,
  logo7,
  logo8,
  propTop,
}) => {
  const clientsStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[2536px] left-[0px] w-[1440px] h-96 text-left text-29xl text-text-title font-heading-bold-heading-6-16 ${className}`}
      style={clientsStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-secondary-light-green w-[1440px] h-96" />
      <div className="absolute top-[184px] left-[107px] w-[1230px] h-[100px]">
        <img
          className="absolute top-[0px] left-[801px] w-[161px] h-[100px] object-cover"
          alt=""
          src={logo4}
        />
        <img
          className="absolute top-[0px] left-[1069px] w-[161px] h-[100px] object-cover"
          alt=""
          src={logo9}
        />
        <img
          className="absolute top-[0px] left-[534px] w-[161px] h-[100px] object-cover"
          alt=""
          src={logo6}
        />
        <img
          className="absolute top-[0px] left-[267px] w-[161px] h-[100px] object-cover"
          alt=""
          src={logo7}
        />
        <img
          className="absolute top-[0px] left-[0px] w-[161px] h-[100px] object-cover"
          alt=""
          src={logo8}
        />
      </div>
      <b className="absolute top-[80px] left-[104px] leading-[63.98px] inline-block w-[712px]">
        Our Clients
      </b>
    </div>
  );
};

export default Clients;
