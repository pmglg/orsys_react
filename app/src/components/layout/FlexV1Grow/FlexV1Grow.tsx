import React, { useEffect, useState } from "react";
import styles from "./FlexV1Grow.module.css";

interface IFlexV1GrowProps {
  children: React.ReactNode;
}

interface IFlexV1GrowState {
  value?: undefined;
}
const FlexV1Grow: React.FC<IFlexV1GrowProps> = ({
  children = "Template Name Composant",
}) => {
  const [state, setState] = useState<IFlexV1GrowState>({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.FlexV1Grow} data-testid="FlexV1Grow">
      {children}
    </div>
  );
};

export default FlexV1Grow;
