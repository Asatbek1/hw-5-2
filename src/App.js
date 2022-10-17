import "./App.css";
import Blocks from "./components/Blocks";

const blocks = [
  {
    id: "b1",
    block: "yellow",
  },
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
];

function App() {
  return (
    <div className="App">
      {blocks.map((el) => (
        <Blocks {...el} key={el.id} />
      ))}
    </div>
  );
}

export default App;
