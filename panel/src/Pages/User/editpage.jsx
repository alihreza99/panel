import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner";
import Form from "react-bootstrap/Form";
import Toast from "../../components/toast";
const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام جدید را وارد کنید"),
  price: yup.string().required("لطفا مبلغ جدید را وارد کنید"),
  email: yup
    .string()
    .email("متن وارد شده اشتباه است ")
    .required("لطفا ایمیل جدید را وارد کنید"),
});

const EditPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.entities);
  const [spinner, setSpinner] = useState(true);
  const [istoast, settoast] = useState(false);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 500);
  }, []);
  let [viewModelstate, setviewModelstate] = useState({
    username: "",
    id: useParams().id,
    img: "./App/Pics/profilepic.jpg",
    status: "active",
    transaction: "",
    email: "",
  });
  const payload = users.find((user) => user.id == viewModelstate.id);
  useEffect(() => {
    setviewModelstate({
      ...viewModelstate,
      username: payload.username,
      transaction: payload.transaction + "$",
      email: payload.email,
    });
  }, []);
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
  };
  const handleChangeemail = (event) => {
    setviewModelstate({ ...viewModelstate, email: event.target.value });
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
    settoast(true)
    setTimeout(() => settoast(false), 1500);

    reset();
  };
  return (
    <>
      {istoast && <Toast text="اطلاعات با موفقیت آپدیت شد"/>}
      {spinner && <Spinner />}
      {!spinner && (
        <div className="Log_form">
          <h2 className="formtitle">ویرایش کاربران</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <Form.Label className="editformlable">
                نام کاربری<sup className="errortext">*</sup>
              </Form.Label>
              <Form.Control
                {...register("firstname")}
                placeholder="نام"
                type="text"
                value={viewModelstate.username}
                onChange={handleChangename}
              />
              <p className="errortext">{errors.firstname?.message}</p>
            </div>
            <div className="form-control">
              <Form.Label className="editformlable">
                مبلغ ورود<sup className="errortext">*</sup>
              </Form.Label>
              <Form.Control
                {...register("price")}
                type="number"
                value={parseInt(viewModelstate.transaction)}
                onChange={handleChangeprice}
              />
              <p className="errortext">{errors.price?.message}</p>
            </div>

            <div className="form-control">
              <Form.Label className="editformlable">
                ایمیل<sup className="errortext">*</sup>
              </Form.Label>
              <Form.Control
                {...register("email")}
                placeholder="ایمیل"
                type="text"
                value={viewModelstate.email}
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
      )}
    </>
  );
};

export default EditPage;
