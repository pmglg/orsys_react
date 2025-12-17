import MemeThumbnail from "../../components/layout/MemeThumbnail/MemeThumbnail";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Link } from "react-router";
import { MemeSVGViewer } from "orsys-tjs-meme";

const Thumbnail: React.FC = () => {
  const ressources = useSelector((s: RootState) => s.ressources);

  return (
    <MemeThumbnail>
      {ressources.memes.map((item) => (
        <Link key={item.id} to={"/editor/" + item.id}>
          {item.titre}
          <MemeSVGViewer basePath="" meme={item} image={ressources.images.find((img)=> img.id === item.imageId)} />
        </Link>
      ))}
    </MemeThumbnail>
  );
};
//basePath="/"
export default Thumbnail;
