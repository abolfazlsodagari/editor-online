import CodeEditors from "./components/pages/home/code-editors";
import Result from "./components/shared/result";
import "./App.css";

function App() {
  return (
    <div minWidth="1200px">
      {/* code editors (html-css-js) */}
      <CodeEditors />
      {/* result codes */}
      <Result />
    </div>
  );
}

export default App;
