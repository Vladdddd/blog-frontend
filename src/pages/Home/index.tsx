import s from "./Home.module.scss";
import { Features } from "./Features";
import { Welcome } from "./Welcome";
import { Comments } from "./Comments";
import { Teacher } from "./Teacher";

export const Home = () => {
  return (
    <div className={s.root}>
      <Welcome />
      <Features />
      <Teacher />
      <Comments />
    </div>
  );
};
