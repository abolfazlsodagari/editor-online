import { createContext, useState } from "react";

// Editor Context
export const EditorContext = createContext(null);
// Editor Provider
const EditorProvider = ({ children }) => {
  // HTML State
  const [html, setHtml] = useState("");
  // JS State
  const [js, setJs] = useState("");
  // CSS State
  const [css, setCss] = useState("");

  return (
    <EditorContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
