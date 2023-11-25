import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

export default function NotFound() {
  const admin = useSelector((state) => state.log_control.admin);

  return (
    <div class="card-client">
      <div class="user-picture">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
        </svg>
      </div>
      <p class="name-client"> .ظاهرا گم شده اید</p>
      <p>لینک های سایت:</p>
      <div class="social-media">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <Link className="link" to="/">
              <HomeIcon />{" "}
            </Link>
          </svg>
          <span class="tooltip-social">خانه</span>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <Link className="link" to="/">
              <PersonIcon />{" "}
            </Link>
          </svg>
          <span class="tooltip-social"> کاربران</span>
        </a>
      </div>
    </div>
    // <div className="notfount">
    //   <h1>ظاهرا گم شده اید.</h1>
    //   <p>لینک های سایت:</p>
    //   <div className="notfoundlinks">
    //     <Link className="link" to="/">
    //       خانه
    //       <ArrowForwardIcon />
    //     </Link>
    //     <br />
    //     <Link className="link" to="/user">
    //       کاربران
    //       <ArrowForwardIcon />
    //     </Link>
    //   </div>
    // </div>
  );
}
