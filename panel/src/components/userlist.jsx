import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function userlist({ user, id, transaction, status, email, deletehandler }) {
  return (
    <tbody>
      <tr className="useritem">
        <td>
          <a href="#">
            <div class="table-item">
              <div class="table-item-name">
                <div>
                  <PersonIcon />
                  <b>{user}</b>
                </div>
                <p>{id}</p>
              </div>
            </div>
          </a>
        </td>
        <td>
          <div class="table-item">
            <div class="table-item-change">
              <p>{email}</p>
            </div>
          </div>
        </td>
        <td>
          <div class="table-item">
            <div class="table-item-change">
              <p>{status}</p>
            </div>
          </div>
        </td>
        <td>
          <div class="table-item">
            <div class="table-item-price">
              <p>{transaction}</p>
            </div>
          </div>
        </td>
        <td>
          <div class="table-item">
            <div>
              <a>
                <Link to={`/user/${id}`}>
                  <button className="edituser">
                    <p>ویرایش</p>
                  </button>
                </Link>
                <DeleteOutlineIcon
                  onClick={() => {
                    deletehandler({id});
                  }}
                  className="deleteuser"
                />
              </a>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
