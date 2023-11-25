import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import {store} from "./../components/Redux/store";
import { useParams } from "react-router-dom";


const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام خود را وارد کنید"),
  price: yup.string().required("لطفا مبلغ  ورودی خود را وارد کنید"),
  email: yup.string().email().required("لطفا ایمیل خود را وارد کنید"),
});

const App = () => {
  const dispatch = useDispatch();

  let [viewModelstate, setviewModelstate] = useState({
    username: "",
    id: useParams().id,
    img: "./App/Pics/profilepic.jpg",
    status: "active",
    transaction: "",
    email: "",
  });

  const handleChangename = (event) => {
    setviewModelstate({
      ...viewModelstate,
      username: event.target.value,
    });
  };
  const handleChangeprice = (event) => {
    setviewModelstate({
      ...viewModelstate,
      transaction: event.target.value + "$",
    });
    console.log(viewModelstate);
  };
  const handleChangeemail = (event) => {
    setviewModelstate({ ...viewModelstate, email: event.target.value });

    console.log("value is:", viewModelstate);
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
    dispatch({
      type: "edit",
      payload: viewModelstate,
    });
    toast("مشخصات آپدیت شد", {
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

    reset();
  };
  return (
    <>
      <div className="Log_form">
        <h2 className="formtitle">ویرایش کاربران</h2>
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
              تغییر
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
