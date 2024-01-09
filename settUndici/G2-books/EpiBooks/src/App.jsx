/* import { useState } from 'react' */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/esm/Container';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
    <Container fluid>
    <MyNav/>
    <MyJumbotron/>
    <AllTheBooks/>
    <MyFooter/>
    </Container>
    </>
  )
}

export default App
