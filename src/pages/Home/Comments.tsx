import s from "./Comments.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/Facebook";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const userMessages = [
  {
    name: "Liliia",
    position: "Head of EnglishBLog",
    text: `Message for new students about education on website EnglishBlog. 
    Some usefull and practical advices for you`,
  },
  {
    name: "Liliia",
    position: "Head of EnglishBLog",
    text: `Message for new students about education on website EnglishBlog. 
    Some usefull and practical advices for you`,
  },
  {
    name: "Liliia",
    position: "Head of EnglishBLog",
    text: `Message for new students about education on website EnglishBlog. 
    Some usefull and practical advices for you`,
  },
];

const margin = (index: number) => {
  return index !== 0 ? s.comment_margin : "";
};

export const Comments = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>What I have to say</h1>
      <div className={s.list}>
        {userMessages.map((mess, index) => {
          return (
            <div className={s.comment + " " + margin(index)} key={index}>
              <div className={s.user}>
                <AccountCircleOutlinedIcon className={s.icon} />
                <div className={s.user_info}>
                  <h1>{mess.name}</h1>
                  <p>{mess.position}</p>
                </div>
                <FacebookOutlinedIcon className={s.icon + " " + s.facebook} />
              </div>
              <p>{mess.text}</p>
            </div>
          );
        })}
      </div>

      <div className={s.caption}>
        <h1>Website is available for free</h1>
        <div>
          <Button className={s.grammar_btn}>
            <Link to="/theme-posts/tenses">Grammar</Link>
          </Button>
          <Button className={s.vocabulary_btn}>
            <Link to="/theme-posts/most-useful">Vocabulary</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
