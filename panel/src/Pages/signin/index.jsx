import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Userdatas } from "../../data";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import store from "./../../components/Redux/store";

const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام خود را وارد کنید"),
  lastname: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  county: yup.string().required("لطفا شهر خود را وارد کنید"),
  phonenumber: yup.string().required("لطفا شماره تلفن خود را وارد کنید"),
  personalid: yup.string().required("لطفا کد ملی خود را وارد کنید"),
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
       alert("Please verify the reCAPTCHA!");
     } else {
       dispatch({
         type: "sign",
         payload: viewModelstate,
       });
       console.log(store.getState());
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
       reset();
     }
  };

  return (
    <>
      <div className="Log_form">
        <h2 className="formtitle">ثبت نام</h2>
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
            <label>
              نام خانوادگی<sup>*</sup>
            </label>
            <input
              {...register("lastname")}
              placeholder="نام خانوادگی"
              type="text"
            />
            <p className="errortext">{errors.lastname?.message}</p>
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
              شهر<sup>*</sup>
            </label>
            <input {...register("county")} placeholder="شهر" type="text" />
            <p className="errortext">{errors.county?.message}</p>
          </div>
          <div className="form-control">
            <label>
              شماره تلفن<sup>*</sup>
            </label>
            <input
              {...register("phonenumber")}
              placeholder="شماره تلفن"
              type="number"
            />
            <p className="errortext">{errors.phonenumber?.message}</p>
          </div>
          <div className="form-control">
            <label>
              کد ملی<sup>*</sup>
            </label>
            <input
              {...register("personalid")}
              placeholder="کد ملی"
              type="number"
            />
            <p className="errortext">{errors.personalid?.message}</p>
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
