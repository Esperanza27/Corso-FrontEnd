/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentList = ({ asin }) => {
  const [comments, setComments] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isError, setError] = useState(false);
  
  const postData = async (newComment) => {
    setLoading(true)
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
        fetchData()
      } else {
        console.log("error");
        setLoading(false)
        setError(true)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
    }
  };

  const deleteData = async (commentId) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE",
          },
        }
      );
      if (res.ok) {
        console.log("ok");
        fetchData();
      } else {
        console.log("error");
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      setLoading(true);
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/books/" +
          asin +
          "/comments",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setComments(data);
        setLoading(false);
      } else {
        console.log("error");
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ width: "280px" }}
      className="rounded mx-auto border border-2 border-black p-2"
    >
      <h3>Comments</h3>
      {isLoading && <Loading />}
      {comments?.length > 0 ? (
        comments.map((comment, index) => (
          <Comment deleteData={deleteData} comment={comment} key={index} />
        ))
      ) : (
        <p>No comments</p>
      )}
      <AddComment postData={postData} />
    </div>
  );
};

export default CommentList;
