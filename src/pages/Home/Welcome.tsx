import s from "./Welcome.module.scss";

import { Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className={s.root}>
      <div className={s.links}>
        <IconButton
          className={s.icon_btn}
          href="https://www.instagram.com/"
          target="_blank"
        >
          <InstagramIcon className={s.icon} />
        </IconButton>
        <IconButton
          className={s.icon_btn}
          href="https://www.gmail.com/"
          target="_blank"
        >
          <MailIcon className={s.icon} />
        </IconButton>
        <IconButton
          className={s.icon_btn}
          href="https://facebook.com/"
          target="_blank"
        >
          <FacebookIcon className={s.icon} />
        </IconButton>
      </div>
      <div className={s.background}></div>
      <div className={s.inner}>
        <div className={s.text}>
          <h1 className={s.title}>
            <span className={s.name}>English<span className={s.secondary}>Blog</span>.</span> is a free website for
            English learners
          </h1>
          <h1 className={s.explanation}>
            You can improve your English story, English vocabulary, English
            grammar, English speaking, English writing, English idioms
          </h1>
          <Button className={s.try_button} variant="contained">
            <Link to="/theme-posts/tenses">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
