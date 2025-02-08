import "./App.css";
import Prodect from "./Components/Prodect";

function App() {
  const Allproducts = [
    {
      id: 1,
      image: "../../public/Images/p1.webp",
      title: "Product 1",
      price: 23000,
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinction",
      count: 21,
    },
    {
      id: 2,
      image: "../../public/Images/p2.webp",
      title: "Product 2",
      price: 48000,
      details:
        "magni exercitationem quo quidem. Dolore repellat possimus obcaecatin",
      count: 21,
    },
    {
      id: 3,
      image: "../../public/Images/p3.webp",
      title: "Product 3",
      price: 96000,
      details: "exercitationem quae pariatur repellendus natus consequuntur.",
      count: 21,
    },
  ];

  return (
    <>
      <h1> Main Page</h1>
      <div className="cont">
        <Prodect {...Allproducts[0]} />
        <Prodect {...Allproducts[1]} />
        <Prodect {...Allproducts[2]} />
        <Prodect {...Allproducts[0]} />
        <Prodect {...Allproducts[1]} />
        <Prodect {...Allproducts[2]} />
        <Prodect {...Allproducts[0]} />
        <Prodect {...Allproducts[1]} />
        <Prodect {...Allproducts[2]} />
      </div>
    </>
  );
}

export default App;
