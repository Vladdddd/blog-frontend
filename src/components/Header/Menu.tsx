import s from "./Header.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type MenuItemType = {
  name: string;
  icon: any;
  url: string;
};

interface OwnProps {
  menu: {
    name: string;
    icon: any;
    menuItems: Array<MenuItemType>;
  };
}

export const HeaderMenu: React.FC<OwnProps> = ({ menu }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        className={s.item}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleClick}
        onClick={handleClick}
      >
        {menu.icon}
        {menu.name}
      </Button>

      <Menu
        id="basic-menu"
        className={s.dropdown}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        transitionDuration={300}
      >
        {menu.menuItems.map((item, index) => {
          return (
            <NavLink to={item.url} key={item.url + item.name}>
              <MenuItem
                className={s.dropdown_item}
                onClick={handleClose}
                key={item.name + item.url}
              >
                {item.icon}
                {item.name}
              </MenuItem>
            </NavLink>
          );
        })}
      </Menu>
    </div>
  );
};
