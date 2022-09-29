import s from "./Header.module.scss";

import ArticleIcon from "@mui/icons-material/ArticleOutlined";

import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import TravelExploreIcon from "@mui/icons-material/TravelExploreOutlined";
import SubjectIcon from "@mui/icons-material/SubjectOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumberedOutlined";

import AbcIcon from "@mui/icons-material/AbcOutlined";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import EngineeringIcon from "@mui/icons-material/EngineeringOutlined";
import PetsIcon from "@mui/icons-material/PetsOutlined";
import CheckroomIcon from "@mui/icons-material/CheckroomOutlined";
import Face6Icon from "@mui/icons-material/Face6Outlined";
import BlenderIcon from "@mui/icons-material/BlenderOutlined";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDiningOutlined";
import HouseIcon from "@mui/icons-material/HouseOutlined";
import BugReportIcon from "@mui/icons-material/BugReportOutlined";
import FastfoodIcon from "@mui/icons-material/FastfoodOutlined";

export const grammarMenu = {
  name: "Grammar",
  icon: <ArticleIcon className={s.icon} />,
  menuItems: [
    {
      name: "Tenses",
      icon: <AccessTimeIcon className={s.icon} />,
      url: "/theme-posts/tenses",
    },
    {
      name: "Prepositions",
      icon: <AutoAwesomeMotionIcon className={s.icon} />,
      url: "/theme-posts/prepositions",
    },
    {
      name: "Adjectives",
      icon: <SubjectIcon className={s.icon} />,
      url: "/theme-posts/adjectives",
    },
    {
      name: "Nouns",
      icon: <TravelExploreIcon className={s.icon} />,
      url: "/theme-posts/nouns",
    },
    {
      name: "Numerals",
      icon: <FormatListNumberedIcon className={s.icon} />,
      url: "/theme-posts/numerals",
    },
  ],
};

export const vocabularyMenu = {
  name: "Vocabulary",
  icon: <ArticleIcon className={s.icon} />,
  menuItems: [
    {
      name: "Most Useful",
      icon: <AbcIcon className={s.icon} />,
      url: "/theme-posts/most-useful",
    },
    {
      name: "Airport",
      icon: <AirplanemodeActiveIcon className={s.icon} />,
      url: "/theme-posts/airport",
    },
    {
      name: "Professions",
      icon: <EngineeringIcon className={s.icon} />,
      url: "/theme-posts/proffessions",
    },
    {
      name: "Animals",
      icon: <PetsIcon className={s.icon} />,
      url: "/theme-posts/animals",
    },
    {
      name: "Clothes",
      icon: <CheckroomIcon className={s.icon} />,
      url: "/theme-posts/clothes",
    },
    {
      name: "Appearance",
      icon: <Face6Icon className={s.icon} />,
      url: "/theme-posts/appearance",
    },
    {
      name: "Cookware",
      icon: <BlenderIcon className={s.icon} />,
      url: "/theme-posts/cookware",
    },
    {
      name: "Containers",
      icon: <TakeoutDiningIcon className={s.icon} />,
      url: "/theme-posts/containers",
    },
    {
      name: "Furniture and house",
      icon: <HouseIcon className={s.icon} />,
      url: "/theme-posts/furniture-and-house",
    },
    {
      name: "Birds and insects",
      icon: <BugReportIcon className={s.icon} />,
      url: "/theme-posts/birds-and-insects",
    },
    {
      name: "Food",
      icon: <FastfoodIcon className={s.icon} />,
      url: "/theme-posts/food",
    },
  ],
};