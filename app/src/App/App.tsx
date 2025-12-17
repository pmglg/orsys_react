import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import MemeForm from "../components/functionnal/MemeForm/MemeForm";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import { useEffect, useState } from "react";
import { REST_API_RESSOURCES, REST_API_URL } from "../config/constantes";

const App: React.FC = () => {
  const [images, setImages] = useState<Array<ImageInterface>>([]);
  const [current, setCurrent] = useState(emptyMeme);

  useEffect(() => {
    fetch(`${REST_API_URL}${REST_API_RESSOURCES.images}`)
      .then((r) => r.json())
      .then((imgs) => setImages(imgs));
  }, []);

  return (
    <>
      {/* la galère pour un commentaire */}
      <div className="App">
        <FlexH3Grow>
          <Header />
          <Navbar />
          <FlexV1Grow>
            <MemeSVGViewer
              meme={current}
              image={images.find((item) => item.id === current.imageId)}
              basePath=""
            />

            <MemeForm
              meme={current}
              images={images}
              onMemeChange={(meme) => {
                setCurrent(meme);
              }}
            />
          </FlexV1Grow>
          <Footer></Footer>
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
