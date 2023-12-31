// Built-in import
import React, { useContext } from "react";
// External import
import { Grid, Stack } from "@mui/material";
// Internal import
import { EditorContext } from "../../../context/EditorProvider";
import Editor from "../../shared/editor";

const CodeEditors = () => {
  // Getting (Html Css Javascript) options
  const { html, css, js, setHtml, setCss, setJs } = useContext(EditorContext);

  return (
    <Stack direction="row" width="100%" maxWidth={"100%"} height="493px">
      <Grid container>
        {/* html editor */}
        <Grid item xs={4}>
          <Editor
            language="xml"
            heading="HTML"
            value={html}
            onChange={setHtml}
          />
        </Grid>
        {/* css editor */}
        <Grid item xs={4}>
          <Editor language="css" heading="CSS" value={css} onChange={setCss} />
        </Grid>
        {/* js editor */}
        <Grid item xs={4}>
          <Editor
            language="javascript"
            heading="JS"
            value={js}
            onChange={setJs}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CodeEditors;
