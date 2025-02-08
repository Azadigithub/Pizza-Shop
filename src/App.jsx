import "./App.css";
import Prodect from "./Components/Prodect";

function App() {
  return (
    <>
      <h1> Main Page</h1>
      <div className="cont">
        <Prodect
          image="../../public/Images/p1.webp"
          title="Product 1"
          price={23000}
          details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinction"
        />
        <Prodect
          image="../../public/Images/p2.webp"
          title="Product 2"
          price={48000}
          details="        magni exercitationem quo quidem. Dolore repellat possimus obcaecati
        expedita! Reprehenderit eos numquam, praesentium aliquid deserunt"
        />
        <Prodect
          image="../../public/Images/p3.webp"
          title="Product 3"
          price={96000}
          details="exercitationem quae pariatur repellendus natus consequuntur."
        />
      </div>
    </>
  );
}

export default App;
