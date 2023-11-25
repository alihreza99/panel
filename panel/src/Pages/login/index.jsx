import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { store } from "./../../components/Redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام خود را وارد کنید"),
  pass: yup.string().required("لطفا رمز خود را وارد کنید"),
});

const App = () => {
  const dispatch = useDispatch();
  const recaptcha = useRef();
  const users = useSelector((state) => state.log_control.entities);
  let [viewModelstate, setviewModelstate] = useState({
    username: "",
    pass: "",
  });

  const handleChangename = (event) => {
    setviewModelstate({
      ...viewModelstate,
      username: event.target.value,
    });
    console.log("value is:", users);
  };
  const handleChangepass = (event) => {
    setviewModelstate({
      ...viewModelstate,
      pass: event.target.value,
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (event) => {
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
            toast.error("Please verify the reCAPTCHA!");
    } else {
      toast("با موفقیت وارد شدید", {
        duration: 1000,
        position: "top-center",
        style: { background: "black", color: "white" },
        className: "",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      const payload = users.find(
        (user) => user.username === viewModelstate.username && user.pass == viewModelstate.pass
      );
      users.map((user)=>{
        console.log(user.pass);
      })
      dispatch({
        type: "log",
        payload: payload,
      });
      console.log(store.getState());
      window.grecaptcha.reset();
      reset();
    }
  };
  return (
    <>
      <div class="login-box">
        <p>Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="user-box">
            <input
              {...register("firstname")}
              type="text"
              onChange={handleChangename}
              autocomplete="off"
            />
            <label>
              نام کاربری<sup className="errortext">*</sup>
            </label>
            <p className="errortext">{errors.firstname?.message}</p>
          </div>
          <div class="user-box">
            <input
              {...register("pass")}
              type="password"
              onChange={handleChangepass}
            />
            <label>
              {" "}
              رمز ورود<sup className="errortext">*</sup>
            </label>
            <p className="errortext">{errors.pass?.message}</p>
          </div>
          <button className="log-button" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ورود
          </button>
        </form>
        <p>
          میخواهید اکانت بسازید ؟{" "}
          <Link to="/sign" className="linktosigntext">
            SIGN UP
          </Link>
          <div className="repacparent">
            <ReCAPTCHA
              ref={recaptcha}
              className="recap"
              sitekey="6Lf6KRQpAAAAAK0PHLUCqgyqHX_e8h2UsFMH7jyq"
            />
          </div>
        </p>
      </div>
      {/* <div className="Log_form">
        <h2 className="formtitle">ورود</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              نام<sup>*</sup>
            </label>
            <input
              {...register("firstname")}
              type="text"
              onChange={handleChangename}
            />
            <p className="errortext">{errors.firstname?.message}</p>
          </div>
          <div className="form-control">
            <label className="label">
              رمز ورود<sup>*</sup>
            </label>
            <input
              {...register("pass")}
              type="password"
              onChange={handleChangepass}
            />
            <p className="errortext">{errors.pass?.message}</p>
          </div>
          <div className="btn-control">
            <label></label>
            <button className="log-button" type="submit">
              ورود
            </button>
            <div>
              <Link to="/sign" className="linktosigntext">
                <button className="linktosign">میخواهید اکانت بسازید ؟</button>
              </Link>
            </div>
            <div className="repacparent">
              <ReCAPTCHA
                ref={recaptcha}
                className="recap"
                sitekey="6Lf6KRQpAAAAAK0PHLUCqgyqHX_e8h2UsFMH7jyq"
              />
            </div>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default App;
