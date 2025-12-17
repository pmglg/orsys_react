import MemeSVGViewer from "../components/ui/MemeSvgViewer/MemeSvgViewer.store.tsx";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.store.tsx";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      {/* la galère pour un commentaire */}
      <div className="App">
        <FlexH3Grow>
          <Header />
          <Navbar />
          <FlexV1Grow>
            <MemeSVGViewer  basePath=""/>

            <MemeForm />
          </FlexV1Grow>
          <Footer></Footer>
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
