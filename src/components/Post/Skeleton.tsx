import s from "./Post.module.scss";
import Skeleton from "@mui/material/Skeleton";

export const PostSkeleton = () => {
  return (
    <div className={s.root_skeleton}>
      <Skeleton variant="rectangular" className={s.skeleton} />
    </div>
  );
};
