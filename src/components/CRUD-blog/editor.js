import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const getHtmlOutput = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Rich Text Editor</h2>
      <div style={{ border: "1px solid #ccc", minHeight: "300px", padding: "10px" }}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder="Start typing..."
        />
      </div>
      
      {/* <h3>HTML Output:</h3>
      <textarea
        readOnly
        value={getHtmlOutput()}
        style={{ width: "100%", height: "200px", marginTop: "20px" }}
      /> */}
    </div>
  );
};

export default RichTextEditor;
