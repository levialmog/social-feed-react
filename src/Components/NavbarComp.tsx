import { Navbar, Button, Form, Nav } from "react-bootstrap";
import logo from "../Images/logo.png";
import homeIcon from "../Images/homeIcon.png";
import messagingIcon from "../Images/messagingIcon.png";
import notificationIcon from "../Images/notificationIcon.png";

function NavbarComp(): JSX.Element {
  return (
    <Navbar bg="light" expand="md" className="p-3">
      <Navbar.Brand href="#">
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Tedooo
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="me-auto">
          <Nav.Link href="#">
            <img
              alt="home"
              src={homeIcon}
              width="20"
              height="20"
              className="d-inline-block align-top"
            />{" "}
            Home
          </Nav.Link>
          <Nav.Link href="#">
            <img
              alt="messaging"
              src={messagingIcon}
              width="20"
              height="20"
              className="d-inline-block align-top"
            />{" "}
            Messaging
          </Nav.Link>
          <Nav.Link href="#">
            <img
              alt="notifications"
              src={notificationIcon}
              width="20"
              height="20"
              className="d-inline-block align-top"
            />{" "}
            Notifications
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavbarComp;
