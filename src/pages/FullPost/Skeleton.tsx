import s from "./FullPost.module.scss";
import Skeleton from "@mui/material/Skeleton";

export const FullPostSkeleton = () => {
  return (
    <div className={s.root_skeleton}>
      <Skeleton variant="rectangular" className={s.skeleton} />
    </div>
  );
};