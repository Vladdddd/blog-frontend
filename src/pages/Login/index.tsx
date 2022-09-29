import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import s from "./Login.module.scss";
import { useAuthMutation } from "../../redux/authApi";
import { selectIsAuth, setCredentials } from "../../redux/authSlice";
import { useEffect } from "react";

interface OwnProps {
  isAuth: boolean
}

export const Login: React.FC<OwnProps> = ({isAuth}) => {
  const [auth] = useAuthMutation();
  const dispatch = useDispatch();
  const isAuth2 = useSelector(selectIsAuth);
  let navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: any) => {
    try {
      const user = await auth(values).unwrap();
      dispatch(setCredentials({ user }));
      if ("token" in user) {
        window.localStorage.setItem("token", user.token);
        // res.cookie("token", user.token, { httpOnly: true });
      } else {
        alert("Failed to login!");
      }
    } catch (err) {
      throw new Error("Something wrong");
    }
  };

  useEffect(() => {
    if(isAuth2) {
      navigate("/");
    }
  }, [isAuth2, navigate])

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className={s.title}>Login</h1>
        <input
          type="email"
          placeholder="E-Mail"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};
