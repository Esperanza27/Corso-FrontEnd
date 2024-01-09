import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
/* import FantasyBooks from "../data/fantasy.json";
import HistoryBooks from "../data/history.json";
import HorrorBooks from "../data/horror.json";
import RomanceBooks from "../data/romance.json";
import ScifiBooks from "../data/scifi.json"; */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Buttons from "./Buttons";

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
        {books.map((book) => {
          return (
            <Col xs={6} md={4} xxl={3} className="d-flex g-3">
              <Card style={{ width: "18rem" }} key={book.asin}>
                <Card.Img variant="top" src={book.img} style={{ width: "286px", height: "400px"}} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text> {book.price}</Card.Text>
                  <div className="text-end">
                    <Button variant="primary">
                    🛒
                  </Button>
                  </div>
                  
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
