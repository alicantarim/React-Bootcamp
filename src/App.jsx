import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  //props ... Veri aktarma.
  return (
    <>
      <Text number="1" name={"React"} />
      <Text number="2" name={"Reactt"} />
      <Text number="3" name={"Reacttt"} />
      <Button name={"Artır"} />
      <Button name={"Azalt"} />
    </>
  );
}

export default App;
