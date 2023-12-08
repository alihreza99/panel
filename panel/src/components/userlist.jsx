import React from "react";

import { Link } from "react-router-dom";

export default function userlist({
  user,
  id,
  transaction,
  status,
  email,
  deletehandler,
}) {
  return (
    <div className="user">
      <div className="image">
        
      </div>
      <div className="user__content">
        <div className="text">
          <span className="name">
            {" "}
            <b>{user}</b>
          </span>
          <p className="username">
            {" "}
            <p>{email}</p>
          </p>
        </div>
        <div className="usersbtns">
          <Link to={`/user/${id}`}>
            <button className="follow">ویرایش</button>
          </Link>
          <button
            className="deleteuser"
            onClick={() => {
              deletehandler({ id });
            }}
          >
          </button>
        </div>
      </div>
    </div>
  );
}
