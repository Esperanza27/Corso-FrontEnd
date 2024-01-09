import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Buttons from "./Buttons";
import Cards from "./Cards";

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);
  return (
    <Container>
        <Row>
            <Col >
            <Buttons setBooks={setBooks}/>
            </Col>
        </Row>
        <Row>
            <Col >
           <Cards books={books}/>
            </Col>
        </Row>

    </Container>
  );
};
export default AllTheBooks;
