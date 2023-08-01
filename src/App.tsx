import { useEffect, useState } from "react";
import { CodeEditor } from "./components/shared";
import CustomConsole from "./components/shared/custom-console";
// "document.getElementById('output-box').innerHTML = `<p>hello, welcome to code editor online megajs website</p>`"

const App = () => {
  // code state
  const [code, setCode] = useState<string>("");
  // output state
  const [output, setOutput] = useState("");
  // handle code change fc
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  // handle code execute
  const handleCodeExecute = () => {
    try {
      setOutput(eval?.(code));
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex">
      {/* code editor */}
      <CodeEditor
        code={code}
        onChange={handleCodeChange}
        onExecute={handleCodeExecute}
      />
      {/* output code */}
      <div className=" min-w-[400px] flex flex-col items-center flex-wrap gap-3 px-5">
        <div>
          <p>:خروجی</p>
          <div className="whitespace-pre-wrap" id="output-box">
            {output ? output : "#output-box"}
          </div>
        </div>

        <CustomConsole />
      </div>
    </div>
  );
};

export default App;
