import { useState } from "react";
import Accordion from "../Components/Accordeon/Accordeon";
import Editable from "../Components/Editables/Editables";


function App() {
  return (
    <>
      <h1>This is a practice</h1>

      <Accordion title="Product Info" content="This is product info content" ></Accordion>
      <br />
      <Editable></Editable>
    </>
  );
}

export default App;
