import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Header } from "./components";
import { AddPost, FullPost, Home, Login, Posts } from "./pages";

import { useMeQuery } from "./redux/authApi";
import { initialUser, selectIsAuth, setCredentials } from "./redux/authSlice";

const grammarThemes = [
  "tenses",
  "prepositions",
  "adjectives",
  "nouns",
  "numerals",
];

const vocabularyThemes = [
  "most-useful",
  "airport",
  "proffessions",
  "animals",
  "clothes",
  "appearance",
  "cookware",
  "containers",
  "furniture-and-house",
  "birds-and-insects",
  "food",
];

function App() {
  const { data: authUser } = useMeQuery("");
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const user = authUser ? authUser : initialUser;
    dispatch(setCredentials({ user }));
  }, [dispatch, authUser]);

  return (
    <>
      <Header isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:id" element={<FullPost />} />
        <Route path="posts/:id/edit" element={<AddPost />} />
        <Route path="/login" element={<Login isAuth={isAuth} />} />
        <Route path="/add-post" element={<AddPost />} />

        {grammarThemes.map((el, index) => {
          return (
            <Route path={`/theme-posts/${el}`} element={<Posts theme={el}/>} key={el} />
          );
        })}
        {vocabularyThemes.map((el, index) => {
          return (
            <Route path={`/theme-posts/${el}`} element={<Posts theme={el}/>} key={el} />
          );
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
