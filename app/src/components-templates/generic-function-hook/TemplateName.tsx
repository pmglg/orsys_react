import React, { useEffect, useState } from "react";
import styles from "./TemplateName.module.css";

interface ITemplateNameProps {
  children: React.ReactNode;
}

interface ITemplateNameState {
  value?: undefined;
}
const TemplateName: React.FC<ITemplateNameProps> = ({
  children = "Template Name Composant",
}) => {
  const [state, setState] = useState<ITemplateNameState>({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {children}
    </div>
  );
};

export default TemplateName;
