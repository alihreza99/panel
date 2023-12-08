import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Table } from "react-bootstrap";
import { store } from "../../redux/store.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner";
import Toast from "../../components/toast";

export default function UserIndex() {
  const dispatch = useDispatch();
  const [userdata, setuserdata] = useState(store.getState());
  const [show, setShow] = useState(false);
  const [itemid, setItemid] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [istoast, settoast] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 500);
  }, []);
  let currentPageRef = useRef(null);
  const [currentPage, setcurrentPage] = useState(1);
  const recordperPage = 7;
  const lastindex = recordperPage * currentPage;
  const firstindex = lastindex - recordperPage;
  const records = userdata.auth.entities?.slice(firstindex, lastindex);
  const npage = Math.ceil(userdata.auth.entities?.length / recordperPage);
  function prepage() {
    if (currentPage !== 1) {
      currentPageRef.current.style.animation = "prevPage .5s forwards";
      setcurrentPage(currentPage - 1);
    }
  }
  function nextpage() {
    if (currentPage !== npage) {
      currentPageRef.current.style.animation = "nextPage .5s forwards";
      setcurrentPage(currentPage + 1);
    }
  }

  function userdelete() {
    settoast(true);
    setTimeout(() => settoast(false), 1500);
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
    setItemid(event);
  }

  return (
    <>
      {istoast && <Toast text="کاربر با موفقیت حذف شد" />}
      
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
          میخواهید این کاربر را حذف کنید؟
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
      {spinner && <Spinner />}
      {!spinner && (
        <Table className="userstable" striped bordered hover variant="dark">
          <tbody
            ref={currentPageRef}
            onAnimationEnd={() => {
              if (currentPageRef.current) {
                currentPageRef.current.style.animation = "";
              }
            }}
          >
            <tr>
              <th>آیدی</th>
              <th> نام کاربری</th>
              <th>سرمایه</th>
              <th>ایمیل</th>
              <th></th>
            </tr>
            {userdata.auth.entities.length > 0 ? (
              records.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.transaction}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button variant="info" title="Edit user details">
                      <Link to={`/user/${user.id}`}>ویرایش</Link>
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleShow(user.id);
                      }}
                      title="Delete user"
                    >
                      حذف کاربر
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  هیچ کاربری وجود ندارد
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
      {!spinner && (
        <div>
          <button className="page-item1" onClick={prepage}>
            <a href="#" className="page-link">
              <i className="fa-solid fa-arrow-left"></i>
            </a>
          </button>
          <button className="page-item2" onClick={nextpage}>
            <a href="#" className="page-link">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </button>
        </div>
      )}
    </>
  );
}
