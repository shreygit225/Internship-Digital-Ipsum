import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1primary.module.css";

export type Property1primaryType = {
  className?: string;
  contactUs?: string;
  fiberManualRecord?: string;
  leading?: boolean;
  trailing?: boolean;

  /** Style props */
  property1primaryBackgroundColor?: CSSProperties["backgroundColor"];
  contactUsColor?: CSSProperties["color"];
};

const Property1primary: FunctionComponent<Property1primaryType> = ({
  className = "",
  contactUs,
  fiberManualRecord,
  leading = true,
  trailing = true,
  property1primaryBackgroundColor,
  contactUsColor,
}) => {
  const property1primaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property1primaryBackgroundColor,
    };
  }, [property1primaryBackgroundColor]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      color: contactUsColor,
    };
  }, [contactUsColor]);

  return (
    <div
      className={[styles.property1primary, className].join(" ")}
      style={property1primaryStyle}
    >
      {leading && (
        <img
          className={styles.fiberManualRecordIcon}
          alt=""
          src="/fiber-manual-record.svg"
        />
      )}
      <div className={styles.contactUs} style={contactUsStyle}>
        {contactUs}
      </div>
      {trailing && (
        <img
          className={styles.fiberManualRecordIcon}
          alt=""
          src={fiberManualRecord}
        />
      )}
    </div>
  );
};

export default Property1primary;
