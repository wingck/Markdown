import { useState } from "react";

import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

import "./App.css";

function App() {
  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const [markdown, setMarkdown] = useState<string>(`# Hello World`);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <div className="wrapper">
        <MarkdownInput
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        />
        <MarkdownOutput markdown={markdown} />
      </div>
    </>
  );
}

export default App;