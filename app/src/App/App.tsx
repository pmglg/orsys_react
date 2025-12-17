import MemeSVGViewer from "../components/ui/MemeSvgViewer/MemeSvgViewer.store.tsx";
import MemeForm from "../components/functionnal/MemeForm/MemeForm.store.tsx";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home.tsx";
import Editor from "../pages/Editor/Editor.tsx";
import Thumbnail from "../pages/Thumbnail/Thumbnail.tsx";

const App: React.FC = () => {
  return (
    <>
      {/* la galère pour un commentaire */}
      <div className="App">
        <FlexH3Grow>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/editor" Component={Editor} />
            <Route path="/thumbnail" Component={Thumbnail} />
            <Route path="/editor/:id" Component={Editor} />
          </Routes>
          <Footer />
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
