import { FC, useState } from "react";
import Editor from "@monaco-editor/react";

interface ICodeEditor {
  code: string;
  onChange: (newCode: string) => void;
  onExecute: () => void;
}

const CodeEditor: FC<ICodeEditor> = ({ code, onChange, onExecute }: any) => {
  // theme state
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");
  // handle editor change
  const handleEditorChange = (value: string | undefined) => {
    onChange(value);
  };
  // handle change theme editor
  const changeTheme = () => {
    if (theme === "vs-dark") {
      setTheme("light");
    } else {
      setTheme("vs-dark");
    }
  };

  return (
    <div className="flex-grow h-[calc(100vh-75px)] relative">
      {/* run code button */}
      <button
        className="absolute top-2 left-3 z-10 bg-yellow-500 py-1 px-2 rounded"
        onClick={onExecute}
      >
        Run Code
      </button>
      {/* change theme editor */}
      <button
        className="absolute top-2 right-3 z-10 bg-yellow-500 py-1 px-2 rounded"
        onClick={changeTheme}
      >
        {theme === "vs-dark" ? "light" : "dark"}
      </button>
      {/* code editor */}
      <Editor
        className="[&_.monaco-editor]:pt-[75px]"
        language="javascript"
        theme={theme}
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
