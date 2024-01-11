/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Col } from 'react-bootstrap'; 

const Book = ({ book }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
    <Col className="md-4">
     <Card
        style={{ width: "18rem", border: selected && "4px solid red" }}
        className="my-2"
        key={book.asin}
      >
        <Card.Img
          variant="top"
          src={book.img}
          style={{ width: "286px", height: "400px" }}
          onClick={() => setSelected(!selected)}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
          <div className="text-end"> 
          <Button variant="primary">🛒</Button>
          </div>
        </Card.Body>
      </Card>
      {selected && <CommentSection asin={book.asin}/>}
    </Col>
     
    </>
  );
}; 
export default Book;
