import { useParams } from "react-router";
import MemeForm from "../../components/functionnal/MemeForm/MemeForm.store";
import FlexV1Grow from "../../components/layout/FlexV1Grow/FlexV1Grow";
import MemeSvgViewer from "../../components/ui/MemeSvgViewer/MemeSvgViewer.store";
import { useEffect } from "react";

const Editor: React.FC = () => {
  const param = useParams();
  useEffect(() => {
    console.log(param);
  }, [param]);
  return (
    <FlexV1Grow>
      <MemeSvgViewer basePath="" />

      <MemeForm />
    </FlexV1Grow>
  );
};

export default Editor;
