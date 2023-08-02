import { useState, FC } from "react";
import { CodeEditor, CustomConsole } from "../../shared";

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
  // code state
  const [code, setCode] = useState<string>(
    `document.getElementById("output-box").innerHTML = "<p style='color:red; font-size:32px;'>tag p</p>"`
  );
  // handle code change fc
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  // handle on execute
  const handleOnExecute = () => {
    try {
      eval(code);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      {/* code editor */}
      <CodeEditor
        code={code}
        onChange={handleCodeChange}
        onExecute={handleOnExecute}
      />
      {/* output code and console */}
      <div className="w-[500px] h-[100vh] px-5 pt-5" dir="ltr">
        {/* console */}
        <div className="min-h-[50%]">
          <CustomConsole />
        </div>
        {/* output */}
        <div className="min-h-[50%] min-w-[250px] flex flex-col gap-4">
          <div className="flex justify-between">
            <p>output:</p>
            <span>id: #output-box</span>
          </div>
          <pre className="whitespace-pre-wrap" id="output-box"></pre>
        </div>
      </div>
    </>
  );
};

export default HomePage;
