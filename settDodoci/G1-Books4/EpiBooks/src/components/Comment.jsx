/* eslint-disable react/prop-types */
const Comment = ({ comment,  deleteData }) => {
  
  return (
    <div className="d-flex justify-content-between">
      <div>
        <small className="me-2">({comment.rate})</small>
        <small>{comment.comment}</small>
      </div>
      <div>
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteData(comment._id)}
        ></i>
      </div>
    </div>
  );
};
export default Comment;
