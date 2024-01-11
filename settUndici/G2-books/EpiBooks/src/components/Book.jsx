/* eslint-disable react/prop-types */
import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class Book extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={6} md={4} xxl={3} className="d-flex g-3">
        <Card
          style={{ border: this.state.selected ? "4px solid red" : "none" }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ width: "286px", height: "400px" }}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default Book;

/*
import { useState } from "react";
import { Card } from 'react-bootstrap'; 

const Book = ({ book }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
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
    </>
  );
}; */
