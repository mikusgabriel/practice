import { useToggle } from "../../hooks/useToggle";
import { useState } from "react";

const Editable = () => {
  const [inputValue, setInputValue] = useState("");
  const { status: editable, toggleStatus: toggleEditable } = useToggle();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="alignCenter">
      {editable ? (
        <label>
          Title
          <input type="text" value={inputValue} onChange={handleInputValue} />
        </label>
      ) : (
        <>Title {inputValue}</>
      )}
      <br />
      <button onClick={toggleEditable}>
        {editable ? <div>Submit</div> : <div>Edit</div>}
      </button>
    </div>
  );
};
export default Editable;
