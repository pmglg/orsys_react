import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      Bonjour Paul
      <br />
      <Button
        title={"Benjamin"}
        bgColor="grey"
        onButtonClick={(param) => {
          console.log("J'ai clique sur ", param);
        }}
      />
      <Button
        title={"Benjamin"}
        bgColor="bluesky"
        onButtonClick={(param) => {
          console.log("J'ai clique sur ", param);
        }}
      />
      <Button
        title="Rouge"
        bgColor="green"
        onButtonClick={(param) => {
          console.log("J'ai clique sur ", param);
        }}
      />
      <Button title="ok" />
      <Button title="cancel" />
    </div>
  );
}

export default App;
