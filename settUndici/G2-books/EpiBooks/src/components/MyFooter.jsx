import Container from "react-bootstrap/esm/Container";

const MyFooter = ()=>{
    return (
        <Container fluid sticky="bottom" className="bg-dark" >
             <footer>
            <div className="text-white">
                <h1 className="text-center p-3"> EPICODE </h1>
            </div>
        </footer>
        </Container>
       
    )
};
export default MyFooter;