import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import store from "./../../components/Redux/store";
import { useDispatch } from "react-redux";
import { Userdatas } from "../../data";

const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام خود را وارد کنید"),
  price: yup.string().required("لطفا مبلغ  ورودی خود را وارد کنید"),
  email: yup.string().email().required("لطفا ایمیل خود را وارد کنید"),
});

const App = () => {
  const dispatch = useDispatch();
  const recaptcha = useRef();
  let [data, setdata] = useState({ Userdatas });

  let [viewModelstate, setviewModelstate] = useState({
    username: "",
    id: 5,
    img: "./App/Pics/profilepic.jpg",
    status: "active",
    transaction: "",
    email: "",
  });

  const handleChangename = (event) => {
    setviewModelstate({
      ...viewModelstate,
      username: event.target.value,
      id: viewModelstate.id + 1,
    });
    console.log("value is:", event.target.value);
  };
  const handleChangeemail = (event) => {
    setviewModelstate({ ...viewModelstate, email: event.target.value });

    console.log("value is:", event.target.value);
  };
  const handleChangeprice = (event) => {
    setviewModelstate({
      ...viewModelstate,
      transaction: event.target.value,
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

  const onSubmit = (event) => {
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
    } else {
      toast("Successfully created", {
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
      dispatch({
        type: "log",
        payload: viewModelstate,
      });
      reset();
    }
  };
  return (
    <>
      <div className="Log_form">
        <h2 className="formtitle">ورود</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              نام<sup>*</sup>
            </label>
            <input
              {...register("firstname")}
              placeholder="نام"
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
              placeholder="نام"
              type="number"
              onChange={handleChangeprice}
            />
            <p className="errortext">{errors.price?.message}</p>
          </div>
          <div className="form-control">
            <label>
              ایمیل<sup>*</sup>
            </label>
            <input
              {...register("email")}
              placeholder="ایمیل"
              type="email"
              onChange={handleChangeemail}
            />
            <p className="errortext">{errors.email?.message}</p>
          </div>
          <div className="form-control">
            <label></label>
            <button className="log-button" type="submit">
              ورود
            </button>
            <div>
              <button className="linktosign">
                <Link to="/sign" className="linktosigntext">
                  میخواهید اکانت بسازید ؟
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
      </div>
    </>
  );
};

export default App;
