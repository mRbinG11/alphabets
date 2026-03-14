import { useCallback, useEffect, useState } from "react";

import "./AlphaBtns.css";

export const AlphaBtns = () => {
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65),
  );

  const [inputText, setInputText] = useState("");

  const handleChangeFromKeyboard = useCallback((e) => {
    const isAlphabet = /^[a-zA-Z]$/.test(e.key);
    if (isAlphabet) setInputText((prev) => prev + e.key.toUpperCase());
    else if (e.key === "Backspace") setInputText((prev) => prev.slice(0, -1));
  }, []);

  const handleChangeFromButtons = (alphabet) => {
    setInputText((prev) => prev + alphabet);
  };

  const backspace = () => {
    setInputText((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleChangeFromKeyboard);
    return () => {
      window.removeEventListener("keydown", handleChangeFromKeyboard);
    };
  }, [handleChangeFromKeyboard]);

  return (
    <div className="card">
      <h1>Alphabet Buttons</h1>
      <p>Click letters (or use your keyboard) to build text.</p>
      <div className="output">{inputText}</div>
      <button id="backspaceBtn" onClick={backspace}>
        Backspace
      </button>
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
