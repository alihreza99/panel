import React, { useState } from "react";
import { Userdatas } from "../../data";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserList from ".././../components/userlist";
import { store } from "./../../components/Redux/store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Index() {
  const dispatch = useDispatch();

  const [userdata, setuserdata] = useState(store.getState());
  const [show, setShow] = useState(false);
  const [itemid, setItemid] = useState("");

  function userdelete() {
    toast("کاربر حذف شد", {
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
      type: "delete",
      payload: itemid,
    });
    setuserdata(store.getState());

    setShow(false);
  }

  const handleClose = () => setShow(false);

  function handleShow(event) {
    setShow(true);
    setItemid(event.id);
  }

  return (
    <>
      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="bg-dark text-white">
          <Modal.Title>اخطار</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          میخواهید این ایتم را حذف کنید؟
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button onClick={handleClose} variant="secondary">
            خیر
          </Button>
          <Button onClick={userdelete} variant="primary">
            بله
          </Button>
        </Modal.Footer>
      </Modal>
      <div class="cardform">
        <p class="title">
          <b>لیست کاربران</b>
        </p>
        <div class="user__container">
          {userdata.log_control.entities.map((user, index) => {
            return (
              <UserList
                user={user.username}
                id={user.id}
                transaction={user.transaction}
                status={user.status}
                email={user.email}
                key={index}
                deletehandler={handleShow}
              />
            );
          })}
        </div>
      </div>
      {/* <table class="table-pedar">
        <thead>
          <tr>
            <td>
              <p>کاربر</p>
            </td>
            <td>
              <p>ایمیل</p>
            </td>
            <td>
              <p>وضعیت</p>
            </td>
            <td>
              <p>تراکنش</p>
            </td>
            <td>
              <p>ویرایش/حذف</p>
            </td>
          </tr>
        </thead>
        {userdata.log_control.entities.map((user, index) => {
          return (
            <UserList
              user={user.username}
              id={user.id}
              transaction={user.transaction}
              status={user.status}
              email={user.email}
              key={index}
              deletehandler={handleShow}
            />
          );
        })}
      </table> */}
    </>
  );
}
