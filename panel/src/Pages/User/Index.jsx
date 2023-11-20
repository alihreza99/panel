import React, { useState } from "react";
import { Userdatas } from "../../data";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserList from ".././../components/userlist"
import store from "./../../components/Redux/store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Index() {
  const dispatch = useDispatch();

  const [userdata, setuserdata] = useState(store.getState());
  const [show, setShow] = useState(false);
  const [itemid, setItemid] = useState("");


  function userdelete(){
    dispatch({
      type: "log_out",
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
      <table class="table-pedar">
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
      </table>
    </>
  );
}
