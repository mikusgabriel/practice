import { useState } from "react";

function App() {
  const [a, setA] = useState(1);

  let [Name, setString] = useState("unactive");
  
  function handle(b: number) {
    setA((prev) => prev + 1);
  }
  function yazzir() {
    console.log("yes");
    setString("active");
    setTimeout(() => setString("unactive"), 4000);
    console.log("non");
  }

  return (
    <>
      <div className={Name}>div</div>
      <h1 id="titre1" >
        Titre
      </h1>
      <h2>h3</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        magnam ex id, temporibus libero a corrupti quia quisquam. Enim
        consectetur ab placeat odit? Esse eveniet quaerat at, eligendi
        distinctio alias!
      </span>
      <p>{a}</p>
      <p id="okay">p</p>
      <a href="sdcwevfv">lien</a>
      <button onClick={() => handle(a)}>click</button>
      <input type="text" />
      <button id="button1" onClick={() => yazzir()}>
        FadeOut
      </button>
    </>
  );
}

export default App;
