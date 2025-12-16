import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

interface IFooterProps {
  children: React.ReactNode;
}

interface IFooterState {
  value?: undefined;
}
const Footer: React.FC<IFooterProps> = ({
  children = "Template Name Composant",
}) => {
  const [state, setState] = useState<IFooterState>({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.Footer} data-testid="Footer">
      {children}
    </div>
  );
};

export default Footer;
