import { useState } from "react";
import "./App.css";
import useCopy from "./useCopy";

function App() {
  const [text, setText] = useState('');
  const [copiedText, copy] = useCopy();

  const handleCopy = () => {
    copy(text);
  };

  return (
    <div>
      <h2>Copy to Clipboard</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to copy"
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleCopy}>Copy Text</button>
      {copiedText && <p>Copied: {copiedText}</p>}
    </div>
  );
}

export default App;
