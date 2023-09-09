// Built-in import
import React, { useContext } from "react";
// External import
import { Stack } from "@mui/material";
// Internal import
import { EditorContext } from "../../../context/EditorProvider";

const Result = () => {
  // Getting (HTML CSS JAVASCRIPT) codes
  const { html, css, js } = useContext(EditorContext);

  return (
    <Stack
      height="500px"
      sx={{
        background: html || css || js ? null : "#444857",
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
