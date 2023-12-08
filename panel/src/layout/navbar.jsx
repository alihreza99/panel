import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function NavbarIndex({ Admin }) {
  const admin = useSelector((state) => state.auth.admin);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" key={false} id="basic-navbar-nav">
        <Container inverse fluid>
          <Navbar.Brand href="#home">
            <NavDropdown
              id="basic-nav-dropdown"
              title={<i className="fa-solid fa-user-large"></i>}
            >
              <NavDropdown.Item href={`/profile/${Admin.id}`}>
                <Link className="linktoprofile" to={`/profile/${Admin.id}`}>
                  پروفایل
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  dispatch({
                    type: "logout",
                  });
                }}
              >
                <Nav.Link
                  className="routlinktextdelete"
                  href="#action3"
                  onClick={() => {
                    dispatch({
                      type: "logout",
                    });
                  }}
                >
                  خروج<i className="fa-solid fa-right-from-bracket"></i>
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
          <Nav className="ml-auto">
            {!admin && (
              <>
                <Link to="/" className="routlink">
                  <Nav.Link className="routlinktext" href="#action3">
                    ورود
                  </Nav.Link>
                </Link>
                <Link to="/sign" className="routlink">
                  <Nav.Link className="routlinktext" href="#action4">
                    ثبت نام
                  </Nav.Link>
                </Link>
              </>
            )}

            {admin && (
              <>
                <Link to="/" className="routlink">
                  <Nav.Link
                    className="routlinktextdelete"
                    href="#action3"
                    onClick={() => {
                      dispatch({
                        type: "logout",
                      });
                    }}
                  >
                    خروج<i className="fa-solid fa-right-from-bracket"></i>
                  </Nav.Link>
                </Link>
              </>
            )}
            {admin && (
              <>
                <Link to="/user" className="routlink">
                  <Nav.Link className="routlinktext" href="#action2">
                    کاربران<i className="fa-solid fa-users"></i>
                  </Nav.Link>
                </Link>
                <Link to="/" className="routlink">
                  <Nav.Link className="routlinktext" href="#action1">
                    خانه<i className="fa-solid fa-house"></i>
                  </Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarIndex;
