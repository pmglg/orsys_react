import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

interface IHeaderProps {
  children: React.ReactNode;
}

interface IHeaderState {
  value?: undefined;
}
const Header: React.FC<IHeaderProps> = ({
  children = "Template Name Composant",
}) => {
  const [state, setState] = useState<IHeaderState>({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.Header} data-testid="Header">
      {children}
    </div>
  );
};

export default Header;
