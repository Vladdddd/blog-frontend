import { Link, NavLink } from "react-router-dom";
import { useDeletePostMutation } from "../../redux/postsApi";
import s from "./Post.module.scss";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import IconButton from "@mui/material/IconButton";
import { useMemo } from "react";

type OwnProps = {
  post: any;
  id: string | null;
};

const cutText = (caption: string) => {
  return caption.length > 20 ? caption.slice(0, 20) + "..." : caption;
};

export const Post: React.FC<OwnProps> = ({ post, id }) => {
  const [deletePost] = useDeletePostMutation();
  const postTitle = useMemo(() => cutText(post ? post.title : ""), [post]);

  const createdAt = post.createdAt.slice(0, 10);
  const isAuthor = id === post.user._id;
  const buttonsStyle = post.imageUrl ? "" : s.additional_buttons;

  const handleDeletePost = async () => {
    if (window.confirm("Are you really want to delete the post?")) {
      await deletePost(post._id);
    }
  };

  return (
    <div className={s.root}>
      {isAuthor ? (
        <div className={s.buttons + " " + buttonsStyle}>
          <NavLink className={s.edit_btn} to={`/posts/${post._id}/edit`}>
            <div>
              <IconButton className={s.icon}>
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
            </div>
          </NavLink>
          <div onClick={handleDeletePost}>
            <IconButton className={s.icon + " " + s.delete_btn}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        ""
      )}

      {post.imageUrl ? (
        <img src={`${process.env.REACT_APP_API_URL}${post.imageUrl}`} alt="" />
      ) : (
        ""
      )}

      <div className={s.description}>
        <Link to={`/posts/${post._id}`}>
          <h1 className={s.title}>{postTitle}</h1>
        </Link>
        <div className={s.user}>
          <p className={s.user_item}>
            <PersonOutlineOutlinedIcon className={s.text_icon} />
            <span className={s.text_item}>{post.user.fullName}</span>
          </p>
          <p className={s.user_item}>
            <AccessTimeOutlinedIcon className={s.text_icon} />
            <span className={s.text_item}>{createdAt}</span>
          </p>
        </div>

        <div className={s.border}></div>
      </div>

      <div className={s.bottom}>
        <p>Elementary - Upper Intermediate</p>
        <Link to={`/posts/${post._id}`}>
          <IconButton className={s.arrow_icon}>
            <EastOutlinedIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
