import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BasicExample() {
  const users = useSelector((state) => state.auth.entities);
  const [spinner, setSpinner] = useState(true);
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
    setTimeout(() => setSpinner(false), 500);
  }, []);
  return (
    <div className="moreinfoparent">
      <Card className="moreinfo" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{payload.username}</Card.Title>
          <Card.Text className="Text">{payload.email}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="moreinfo" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{payload.username}</Card.Title>
          <Card.Subtitle id="text" className=" mb-2 ">
            {payload.email}
          </Card.Subtitle>
          <Card.Text className="Text">
            کاربر سایت با سرمایه ای برابر با {payload.transaction} و{" "}
            {payload.status} <br />
            آیا میخواهید تغییری در کاربر ایجاد کنید؟
          </Card.Text>{" "}
          <Link className="profilepagelink" to={`/user/${payload.id}`}>
            ویرایش
          </Link>{" "}
          <Link className="profilepagelink" to={`/`}>
            خانه
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
