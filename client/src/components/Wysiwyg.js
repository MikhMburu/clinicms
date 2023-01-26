import React, { Component } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToMarkdown from "draftjs-to-markdown";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class Wysiwyg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    
    console.log(draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
  };
  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}
