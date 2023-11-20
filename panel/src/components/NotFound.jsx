import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function NotFound() {
  return (
    <div className="notfount">
      <h1>به نظر گم شده اید.</h1>
      <p>چند لینم برای کمک به شما:</p>
      <div className="notfoundlinks">
        <Link className="link" to="/">
          خانه
          <ArrowForwardIcon />
        </Link>
        <br />
        <Link className="link" to="/log">
          ورود
          <ArrowForwardIcon />
        </Link>
        <br />
        <Link className="link" to="/sign">
          ثبت نام
          <ArrowForwardIcon />
        </Link>
        <br />
        <Link className="link" to="/user">
          کاربران
          <ArrowForwardIcon />
        </Link>
      </div>
    </div>
  );
}
