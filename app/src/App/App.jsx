import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      Bonjour Paul
      <br />
      <Button
        bgColor="grey"
        onButtonClick={(param) => {
          console.log("J'ai clique sur ", param);
        }}
      >
        OK
      </Button>
      <Button
        bgColor="green"
        onButtonClick={(param) => {
          console.log("J'ai clique sur ", param);
        }}
      >
        <div>Cancel</div>
      </Button>
      <Button>
        <div>3eme </div>
        <div>bouton</div>
      </Button>
    </div>
  );
}

export default App;
