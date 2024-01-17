/* eslint-disable react/prop-types */
import { Component } from "react";
import { Button, Card, Col } from 'react-bootstrap'; 
import CommentList from "./CommentList";

class Book extends Component {
  state = {
    selected: false,
  }
  render(){
     return (
    <>
    <Col className="md-4">
     <Card
        style={{ width: "18rem",  border: this.state.selected ? '3px solid red' : 'none' }}
        className="my-2"
        key={this.props.book.asin}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          style={{ width: "286px", height: "400px" }}
          onClick={() => this.setState({selected:!this.state.selected})}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price}</Card.Text>
          <div className="text-end"> 
          <Button variant="primary">🛒</Button>
          </div>
        </Card.Body>
      </Card>
      {this.state.selected && <CommentList asin={this.props.book.asin}/>}
    </Col>
     
    </>
  );
  }
} 
export default Book;
