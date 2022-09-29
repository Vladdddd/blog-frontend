import s from "./Teacher.module.scss";
import teacher from "../../assets/teacher.jpg";

export const Teacher = () => {
  return (
    <div className={s.root}>
      <div className={s.photo}>
        <img src={teacher} alt="" />
      </div>
      <div className={s.details}>
        <div className={s.caption}>
          <h1>Liliia Lyshtvan</h1>
          <h2>Head of EnglishBlog</h2>
        </div>
        <div className={s.text}>
          <div className={s.tile}></div>
          <p>
            Hi there! Welcome to EnglishBlog! Thanks for visiting this website.
            I am Liliia, acting teacher and interpreter. And EnglishBlog is my
            brainchild.
            <br />
            <br />
            I would like to find a way to easily teach English to those in
            need of lessons. In order to fulfill her wish, Liliia sought out the
            help of English-teaching veterans. I have been teaching teens and
            adults for twelve years and have done a painstaking work of
            preparing the best way of teaching. If you want improve your
            English, use the resources of this website and let’s do it together!
            <br />
            <br />
            If you need any assistance, please mail me.
          </p>
        </div>
      </div>
    </div>
  );
};
