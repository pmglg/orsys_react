import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

interface INavbarProps {
  children: React.ReactNode;
}

interface INavbarState {
  value?: undefined;
}
const Navbar: React.FC<INavbarProps> = ({
  children = "Template Name Composant",
}) => {
  const [state, setState] = useState<INavbarState>({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.Navbar} data-testid="Navbar">
      {children}
    </div>
  );
};

export default Navbar;
