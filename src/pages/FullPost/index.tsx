import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import { useGetPostQuery } from "../../redux/postsApi";
import s from "./FullPost.module.scss";
import "./styles.css";
import { FullPostSkeleton } from "./Skeleton";

export const FullPost = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError } = useGetPostQuery(id ? id : "");

  if (isLoading) {
    return <FullPostSkeleton />;
  }

  if (isError) {
    return <b>Something wrong</b>;
  }

  const createdAt = post.createdAt.slice(0, 10);
  
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <img src={post.imageUrl ? `${process.env.REACT_APP_API_URL}${post.imageUrl}` : ""} alt="" />
        <div className={s.text}>
          <p className={s.date}>{createdAt}</p>
          <h1 className={s.title}>{post.title}</h1>
          <div className="ck-content">{parse(post.text)}</div>
        </div>
      </div>
    </div>
  );
};
