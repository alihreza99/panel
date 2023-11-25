import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import store from "./../components/Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function OffcanvasExample() {
  const admin = useSelector((state) => state.log_control.admin);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <div class="card">
              <i class="fa-solid fa-circle-user fa-2xl" id="img"></i>
              <span> {admin.username}</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
            className="nav_top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                لینک ها
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {admin && (
                  <>
                    <Link to="/" className="routlink">
                      <Nav.Link href="#action1">
                        <HomeIcon /> خانه
                      </Nav.Link>
                    </Link>
                    <Link to="/user" className="routlink">
                      <Nav.Link href="#action2">
                        <PersonIcon /> کاربران
                      </Nav.Link>
                    </Link>
                  </>
                )}

                {admin && (
                  <>
                    <Link to="/" className="routlink">
                      <Nav.Link
                        href="#action3"
                        onClick={() => {
                          dispatch({
                            type: "logout",
                          });
                        }}
                      >
                        <LogoutIcon /> خروج
                      </Nav.Link>
                    </Link>
                  </>
                )}
                {!admin && (
                  <>
                    <Link to="/" className="routlink">
                      <Nav.Link href="#action3">
                        <LoginIcon /> ورود
                      </Nav.Link>
                    </Link>
                    <Link to="/sign" className="routlink">
                      <Nav.Link href="#action4">
                        <LoginIcon /> ثبت نام
                      </Nav.Link>
                    </Link>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
