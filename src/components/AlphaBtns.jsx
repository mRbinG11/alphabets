import { useState } from "react";

import "./AlphaBtns.css";

export const AlphaBtns = () => {
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65),
  );

  const [inputText, setInputText] = useState("");

  const handleChangeFromKeyboard = (e) => {
    setInputText(e.target.value.toUpperCase());
  };

  const handleChangeFromButtons = (alphabet) => {
    setInputText((prev) => prev + alphabet);
  };

  const backspace = () => {
    setInputText((prev) => prev.slice(0, -1));
  };

  return (
    <div className="card">
      <h1>Alphabet Buttons</h1>
      <p>Click letters (or use your keyboard) to build text.</p>
      <div className="output">
        <input
          type="text"
          name="inputText"
          placeholder="Your text will appear here..."
          value={inputText}
          onChange={handleChangeFromKeyboard}
          autoFocus
        />
        <button onClick={backspace}>Backspace</button>
      </div>
      <div className="buttons">
        {alphabets.map((alphabet) => {
          return (
            <button
              key={alphabet}
              className="key"
              onClick={() => handleChangeFromButtons(alphabet)}
            >
              {alphabet}
            </button>
          );
        })}
      </div>
    </div>
  );
};
