/* eslint-disable react/prop-types */
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const AddComment = ({ asin }) => {
  const [newComment, setComment] = useState({
    comment: "",
    rate: 0,
  });

  const postData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({ ...newComment, elementId: asin }),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE",
          },
        }
      );
      if (res.ok) {
        console.log("ok");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-2 border mt-2">
      <small>Leave a comment</small>
      <Form.Control
        type="text"
        placeholder="Write a comment"
        value={newComment.comment}
        onChange={(e) => setComment({ ...newComment, comment: e.target.value })}
      />
      <Form.Select
        aria-label="Default select example"
        value={newComment.rate}
        onChange={(e) => setComment({ ...newComment, rate: e.target.value })}
      >
        <option>Select the vote</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <div className="text-center">
      <Button
        variant="outline-primary"
        size="sm"
        className="mt-2 text-center"
        onClick={() => postData()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-send-plus"
          viewBox="0 0 16 16"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
        </svg>
      </Button>
      </div>
    </div>
  );
};

export default AddComment;
