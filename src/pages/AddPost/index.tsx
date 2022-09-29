import s from "./AddPost.module.scss";
import { useEffect, useRef, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";

import {
  useAddImageMutation,
  useAddPostMutation,
  useDeleteImageMutation,
  useEditPostMutation,
  useGetPostQuery,
} from "../../redux/postsApi";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { MyEditor } from "../Editor";
import { FullPostSkeleton } from "../FullPost/Skeleton";

export const AddPost: React.FC = () => {
  const { id: postId }: Readonly<Params<string>> = useParams();
  const navigate = useNavigate();
  const [addImage] = useAddImageMutation();
  const [deleteImage] = useDeleteImageMutation();
  const [addPost] = useAddPostMutation();
  const [editPost] = useEditPostMutation();
  const { data, isLoading } = useGetPostQuery(postId, {
    skip: postId ? false : true,
  });

  // one state = fields
  const [theme, setTheme] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  const inputFileRef: any = useRef();

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        imageUrl,
        theme: theme.toLowerCase(),
        text,
      };
      console.log(fields);
      const { data }: any = postId
        ? await editPost({ fields, id: postId })
        : await addPost(fields);
      const id = postId ? postId : data._id;
      navigate(`/posts/${id}`);
    } catch (err) {
      console.warn(err);
      alert("Failed to create an article");
    }
  };

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data }: any = await addImage(formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Failed to load file");
    }
  };

  const handleDeleteFile = async () => {
    try {
      const url = imageUrl.split("/");
      await deleteImage({ name: url[url.length - 1] });
      setImageUrl("");
    } catch (err) {
      console.warn(err);
      alert("Failed to load file");
    }
  };

  useEffect(() => {
    try {
      if (postId && !isLoading) {
        const dataForEditing = data;
        setTheme(dataForEditing.theme);
        setTitle(dataForEditing.title);
        setText(dataForEditing.text);
        setImageUrl(dataForEditing.imageUrl);
      }
    } catch (err) {
      console.warn("Failed to get post", err);
    }
  }, [isLoading, postId, data]);

  if (isLoading) {
    return <FullPostSkeleton />;
  }

  return (
    <div className={s.root}>
      {imageUrl ? (
        <>
          <Button
            variant="contained"
            className={s.upload_btn}
            startIcon={<DeleteIcon />}
            onClick={handleDeleteFile}
          >
            Delete
          </Button>
          <img src={`${process.env.REACT_APP_API_URL}${imageUrl}`} alt="" />
        </>
      ) : (
        <Button
          variant="contained"
          className={s.upload_btn}
          endIcon={<PhotoCamera />}
          onClick={() => inputFileRef.current.click()}
        >
          Upload
        </Button>
      )}
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden
      />
      <input
        type="text"
        placeholder="Theme"
        value={theme}
        onChange={(e: any) => setTheme(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <MyEditor text={text} setText={setText} />
      <Button variant="contained" className={s.submit_btn} onClick={onSubmit}>
        {postId ? "Save" : "Create"}
      </Button>
    </div>
  );
};
