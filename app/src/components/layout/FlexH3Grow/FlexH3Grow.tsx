import React, { useEffect, useState } from "react";
import styles from "./FlexH3Grow.module.css";

interface IFlexH3GrowProps {
  children: React.ReactNode;
}

interface IFlexH3GrowState {
  value?: undefined;
}
const FlexH3Grow: React.FC<IFlexH3GrowProps> = ({
  children = "Template Name Composant",
}) => {
  const [state, setState] = useState<IFlexH3GrowState>({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.FlexH3Grow} data-testid="FlexH3Grow">
      {children}
    </div>
  );
};

export default FlexH3Grow;
