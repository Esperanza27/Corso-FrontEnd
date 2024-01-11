import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const MyNav =()=>{
    return (
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
 export default MyNav;

 /* activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} */