import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue sur le créateur de Memes</h1>
      <p>
        Dans cette application illum eu aute officia cillum aliquip esse labore
        et ut velit pariatur cupidatat eiusmod excepteur.Qui adipisicing laboris 
        sunt aute cupidatat non eiusmod aliquip quis ea.Commodo reprehenderit 
        irure in sit veniam.
      </p>
      <p>Merci de choisir</p>
      <ul>
        <li>
          <Link to="/thumbnail">Thumbnail</Link>
        </li>
        <li>
          <Link to="/editor">New meme</Link>
        </li>

        <li>
          <Link to="/editor/2">Editor meme.id=2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
