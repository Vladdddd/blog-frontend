import s from "./Posts.module.scss";
import { useSelector } from "react-redux";

import { useGetThemePostsQuery } from "../../redux/postsApi";
import { Post } from "../../components";
import { RootState } from "../../redux/store";
import { IUser } from "../../redux/authSlice";
import no_data from "../../assets/empty.svg";
import { PostSkeleton } from "../../components/Post/Skeleton";
import Skeleton from "@mui/material/Skeleton";

type PostType = {
  createdAt: string;
  imageUrl: string;
  tags: Array<string>;
  text: string;
  title: string;
  updatedAt: string;
  user: IUser;
  viewsCount: number;
  _v: number;
  _id: string;
};

interface OwnProps {
  theme: string;
}

export const Posts: React.FC<OwnProps> = ({ theme }) => {
  const { data: posts = [], isLoading } = useGetThemePostsQuery({ theme });
  const id = useSelector((state: RootState) => state.auth.user._id);
  //const isLoading = true;
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <h1 className={s.title}>
          {isLoading ? (
            <Skeleton variant="text" width={120} height={60} />
          ) : (
            theme + " (" + posts.length + ")"
          )}
        </h1>

        {isLoading ? (
          <div className={s.skeleton}>
            {[...Array(6)].map((el, index) => {
              return <PostSkeleton key={index} />;
            })}
          </div>
        ) : posts.length ? (
          <div className={s.posts}>
            {posts.map((post: PostType) => {
              return <Post key={post._id} post={post} id={id} />;
            })}
          </div>
        ) : (
          <div className={s.no_data}>
            {isLoading ? "" : <img src={no_data} alt="" />}
          </div>
        )}
      </div>
    </div>
  );
};
