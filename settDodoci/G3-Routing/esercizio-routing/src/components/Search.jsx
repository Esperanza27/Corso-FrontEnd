import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Search =()=>{
    const location = useLocation()
    const searchTerms = new URLSearchParams(location.search).get('cerca')
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
 
    const fetchData = async () => {
        const resp = await fetch(`http://www.omdbapi.com/?apikey=76c21120&s=${search}`) 
        const data = await resp.json()
        setMovies(data?.Search)

    }
  /*  useEffect (() => {
        if (searchTerms?.length > 2)
            setSearch(searchTerms)
    }, [])
*/
    useEffect(() => {
        if (search?.length > 2)
        fetchData()
    }, [search]) 
console.log(movies);
    return (
        <>
       {/*  <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value= ""
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onChange={(e)=> setSearch(e.target.value)}>Submit</Button>
          </Col>
        </Row>
      </Form> */}
        <input onChange={(e)=> setSearch(e.target.value)}/>
         <div style={{ minHeight: "50vh"}} className="my-5 text-center">
                <h1> Risultati ricerca </h1>
                <ul>
                {movies?.length > 0 && movies.map((movie) => 
                    <li key={movie.imdbID}>{movie.Title} - <Link to={`/details/${movie.imdbID}`}> Scheda Movie</Link></li> 
                    )
                }
                </ul>
            </div>
        </>
    )
}; 
export default Search;
