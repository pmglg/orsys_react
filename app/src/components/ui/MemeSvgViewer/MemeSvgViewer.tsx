import React, { useEffect, useState } from "react";
import styles from "./MemeSvgViewer.module.css";

interface IMemeSvgViewerProps {
  children: React.ReactNode;
}

interface IMemeSvgViewerState {
  value?: undefined;
}
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = ({
  children = "Meme Svg Viewer Composant",
}) => {
  const [state, setState] = useState<IMemeSvgViewerState>({});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      {children}
    </div>
  );
};

export default MemeSvgViewer;
