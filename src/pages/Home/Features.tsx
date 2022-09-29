import s from "./Features.module.scss";

import studying from "../../assets/studying.svg";
import achievement from "../../assets/achievement.svg";
import success from "../../assets/success.svg";

export const Features = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Know about great online learning platform</h1>
      <div className={s.list}>
        <ul>
          <li>
            <h1 className={s.list_id}>01.</h1>
            <div className={s.list_text}>
              <h1>Free Resources for learning</h1>
              <p>
                The EnglishBlog has lots of free resources, including grammar,
                brief and full, vocabulary for different topics, reading for
                different levels.
              </p>
            </div>
          </li>
          <li>
            <h1 className={s.list_id}>02.</h1>
            <div className={s.list_text}>
              <h1>Learning for Everyone</h1>
              <p>
                By simplifying complex grammar subjects, EnglishBlog is a great
                teaching tool for both public and home-schooled students and
                anyone needing to refresh English grammar skills. By practicing
                language rules, any person able to read will be able to master
                English grammar.
              </p>
            </div>
          </li>
          <li>
            <h1 className={s.list_id}>03.</h1>
            <div className={s.list_text}>
              <h1>English is fun</h1>
              <p>
                As well EnglishBlog is a fun, convenient way to learn grammar.
              </p>
            </div>
          </li>
        </ul>
        <div className={s.illustrations}>
          <img src={studying} alt="" />
          <img src={achievement} alt="" />
          <img src={success} alt="" />
        </div>
      </div>
    </div>
  );
};
