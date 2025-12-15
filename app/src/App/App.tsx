import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      Bonjour Paul
      <br />
      <Button
        bgColor="grey"
        onButtonClick={() => {
          console.log("J'ai clique sur OK");
        }}
      >
        OK
      </Button>
      <Button
        bgColor="green"
        onButtonClick={() => {
          console.log("J'ai clique sur Cancel");
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
