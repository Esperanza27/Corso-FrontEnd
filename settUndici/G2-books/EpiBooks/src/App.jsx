/* import { useState } from 'react' */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/esm/Container';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import Main from './components/Main';
import { useEffect, useState } from 'react';

function App() {
  const [title, setTitle] = useState('Library EpiBooks!') 
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <>
    <Container fluid>
    <MyNav/>
    <MyJumbotron/>
    <Main setPageTitle={setTitle}/>
    <MyFooter/>
    </Container>
    </>
  )
}

export default App
