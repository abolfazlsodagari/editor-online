import CodeEditors from "./code-editors";
import Result from "../../shared/result";

function HomeContent() {
  return (
    <div minWidth="1200px">
      {/* code editors */}
      <CodeEditors />
      {/* result codes */}
      <Result />
    </div>
  );
}

export default HomeContent;
