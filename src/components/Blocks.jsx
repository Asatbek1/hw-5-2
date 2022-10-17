import "./Blocks.css";
const Blocks = ({ block }) => {
  function Func() {
    if (block === "yellow") {
      return "yellow";
    } else if (block === "green") {
      return "green";
    } else if (block === "color") {
      return "lime";
    } else {
      return "red";
    }
  }
  let stil = {
    backgroundColor: Func(),
  };
  return <div className="Blocks" style={stil}></div>;
};
export default Blocks;
