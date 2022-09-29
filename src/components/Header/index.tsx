import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToAppOutlined";

import { initialUser, setCredentials } from "../../redux/authSlice";
import { HeaderMenu } from "./Menu";
import { grammarMenu, vocabularyMenu } from "./MenuItems";

const checkActive = (props: { isActive: boolean }) => {
  return props.isActive ? `${s.active}` : ``;
};

interface OwnProps {
  isAuth: boolean;
}

export const Header: React.FC<OwnProps> = ({ isAuth }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (window.confirm("Are you really want to logout?")) {
      dispatch(setCredentials({ user: initialUser }));
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={s.root}>
      <div className={s.blog}>
        <NavLink className={s.logo} to="/">
          <h1 className={s.first_title}>English</h1>
          <h1 className={s.second_title}>Blog</h1>
          <h1 className={s.dot}>.</h1>
        </NavLink>

        <div className={s.blog_items}>
          <NavLink className={checkActive} to="/">
            <Button className={s.item}>
              <HomeIcon className={s.icon} />
              Home
            </Button>
          </NavLink>
          <HeaderMenu menu={grammarMenu} />
          <HeaderMenu menu={vocabularyMenu} />
        </div>
      </div>
      <div className={s.buttons}>
        {isAuth ? (
          <>
            <NavLink to="/add-post">
              <Button className={s.create_btn} variant="outlined">
                Create article
              </Button>
            </NavLink>
            <Button
              onClick={handleLogout}
              className={s.logout_btn}
              variant="contained"
            >
              <ExitToAppIcon />
            </Button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <Button className={s.login} variant="contained">Login</Button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
