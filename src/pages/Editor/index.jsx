import "./styles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

export const MyEditor = ({text, setText}) => {

  const onChange = (data) => {
    setText(data);
  };

  return (
    <div>
      <CKEditor
        editor={Editor}
        data={text}
        onReady={(editor) => {
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
};
