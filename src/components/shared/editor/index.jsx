// css imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Stack, Typography } from "@mui/material";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ heading, language, value, onChange }) => {
  // handle change
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Stack height="100%" borderRight="2px solid #00000090">
      {/* header editor */}
      <Stack
        direction="row"
        justifyContent="space-between"
        color="#aaaebc"
        padding="10px"
        backgroundColor="#060606"
        spacing={"10px"}
      >
        <Typography variant="body1">{heading}</Typography>
      </Stack>
      {/* editor code */}
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Stack>
  );
};

export default Editor;
