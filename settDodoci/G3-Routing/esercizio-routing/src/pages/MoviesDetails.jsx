import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesDetails = ()=>{
 const {movieID = ""} = useParams();
  const [movie, setMovie]=useState();
  const [comments, setComments]=useState([]);

 useEffect( ()=>{
    const fetchMovie = async () => {
        const resp = await fetch(`http://www.omdbapi.com/?apikey=76c21120&i=${movieID}`) 
        const data = await resp.json()
        setMovie(data)
    }

    fetchMovie();
    const fetchComments = async () => {
        const resp = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieID}/comments `,
        { headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE",
          },
        }) 
        const data = await resp.json()
        setComments(data)
    }

    fetchComments();
 },[movieID]);

console.log(comments);
    return (
        <>
        <div style={{width: "100%", height:"50vh"}} className="text-center p-5">{movie?.Title}</div>
        {comments.length > 0 ? <ul>{comments.map((comment)=>(<li key={comment._id}>{comment.comment}</li>))}</ul> : null}
        </>
    )
}; 
export default MoviesDetails;