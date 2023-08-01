import { FC } from "react";
import Editor from "@monaco-editor/react";

interface ICodeEditor {
  code: string;
  onChange: (newCode: string) => void;
  onExecute: () => void;
}

const CodeEditor: FC<ICodeEditor> = ({ code, onChange, onExecute }: any) => {
  const handleEditorChange = (value: string | undefined) => {
    onChange(value);
  };

  return (
    <div className="flex-grow">
      {/* run code button */}
      <button
        className="absolute top-2 left-3 z-10 bg-yellow-300 py-1 px-2 rounded"
        onClick={onExecute}
      >
        run Code
      </button>
      {/* code editor */}
      <Editor
        className="[&_.monaco-editor]:pt-[75px]"
        height="100vh"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
