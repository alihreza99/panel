import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { store } from "./../../components/Redux/store";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام خود را وارد کنید"),
  price: yup.string().required("لطفا مبلغ  ورودی خود را وارد کنید"),
  pass: yup.string().required("لطفا رمز خود را وارد کنید"),
  email: yup.string().email().required("لطفا ایمیل خود را وارد کنید"),
});
const App = () => {
  const dispatch = useDispatch();
  const recaptcha = useRef();

  let [data, setdata] = useState(
    store.getState().log_control.entities[
      store.getState().log_control.entities.length - 1
    ].id
  );

  let [viewModelstate, setviewModelstate] = useState({
    username: "",
    id: +data + 1,
    img: "./App/Pics/profilepic.jpg",
    status: "active",
    transaction: "",
    pass: "",
    email: "",
  });

  const handleChangename = (event) => {
    setviewModelstate({
      ...viewModelstate,
      username: event.target.value,
    });
    console.log("value is:", viewModelstate.id);
  };
  const handleChangepass = (event) => {
    setviewModelstate({
      ...viewModelstate,
      pass: event.target.value,
    });
  };
  const handleChangeprice = (event) => {
    setviewModelstate({
      ...viewModelstate,
      transaction: event.target.value + "$",
    });
  };
  const handleChangeemail = (event) => {
    setviewModelstate({ ...viewModelstate, email: event.target.value });

    console.log("value is:", event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      toast.error("Please verify the reCAPTCHA!");
    } else {
      setviewModelstate({
        ...viewModelstate,
        id: viewModelstate.id + 1,
      });
      console.log("value is:", viewModelstate.id);

      dispatch({
        type: "sign",
        payload: viewModelstate,
      });
      console.log(store.getState());
      toast("اکانت با موفقیت ساخته شد", {
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
      window.grecaptcha.reset();
      reset();
    }
  };

  return (
    <>
      <div class="login-box login-box-sign">
        <p>Sign in</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="user-box">
            <input
              {...register("firstname")}
              type="text"
              onChange={handleChangename}
              autocomplete="off"
            />
            <label>
              نام کاربری<sup>*</sup>
            </label>
            <p className="errortext">{errors.firstname?.message}</p>
          </div>
          <div class="user-box">
            <input
              {...register("pass")}
              type="password"
              onChange={handleChangepass}
              autocomplete="off"
            />
            <label>
              رمز ورود<sup>*</sup>
            </label>
            <p className="errortext">{errors.pass?.message}</p>
          </div>
          <div class="user-box">
            <input
              {...register("price")}
              type="number"
              onChange={handleChangeprice}
              autocomplete="off"
            />
            <label>
              مبلغ ورود<sup>*</sup>
            </label>
            <p className="errortext">{errors.price?.message}</p>
          </div>
          <div class="user-box">
            <input
              {...register("email")}
              type="email"
              onChange={handleChangeemail}
              autocomplete="off"
            />
            <label>
              ایمیل<sup>*</sup>
            </label>
            <p className="errortext">{errors.email?.message}</p>
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
          اکانت دارید ؟{" "}
          <Link to="/" className="linktosigntext">
            LOGIN
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
        <h2 className="formtitle">ثبت نام</h2>
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
              مبلغ ورود<sup>*</sup>
            </label>
            <input
              {...register("price")}
              type="number"
              onChange={handleChangeprice}
            />
            <p className="errortext">{errors.price?.message}</p>
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
          <div className="form-control">
            <label>
              ایمیل<sup>*</sup>
            </label>
            <input
              {...register("email")}
              type="email"
              onChange={handleChangeemail}
            />
            <p className="errortext">{errors.email?.message}</p>
          </div>
          <div className="btn-control">
            <label></label>
            <button className="log-button" type="submit">
              ورود
            </button>
            <div>
              <button className="linktosign">
                <Link to="/" className="linktosigntext">
                  اکانت دارید ؟
                </Link>
              </button>
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
