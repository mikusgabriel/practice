import { useState } from "react";

function App() {
  const [a, setA] = useState(1);
  console.log(a);

  function handle(b: number) {
    setA((prev) => prev + 1);
  }

  return (
    <>
      <div>div</div>
      <h1>TItre</h1>
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
    </>
  );
}

export default App;
