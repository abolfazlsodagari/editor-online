import { useContext } from "react";
import { EditorContext } from "../../../context/EditorProvider";
import { Stack } from "@mui/material";

const Result = () => {
  // Getting html, css and js codes
  const { html, css, js } = useContext(EditorContext);

  return (
    <Stack
      sx={{
        background: html || css || js ? null : "#444857",
        height: "500px",
      }}
    >
      <iframe
        srcDoc={`<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Stack>
  );
};

export default Result;
