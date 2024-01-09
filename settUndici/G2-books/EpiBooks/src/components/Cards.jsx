import { Button, Card, Container, Row, Col } from "react-bootstrap";
const Cards = ({books})=> {
  return (
    <Container>
      <Row>
        {books?.map((book) => {
          return (
            <Col xs={6} md={4} xxl={3} className="d-flex g-3" key={book.asin}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ width: "286px", height: "400px" }}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text> {book.price}</Card.Text>
                  <div className="text-end">
                    <Button variant="primary">🛒</Button>
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
export default Cards;
