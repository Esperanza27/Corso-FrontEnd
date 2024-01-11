/* eslint-disable react/prop-types */
import { Container, Row } from 'react-bootstrap';
import MyJumbotron from './MyJumbotron';
import BooksList from './BooksList';

const Main = ({setPageTitle}) => {

    const retriveTitle = (newTitle) => {
        setPageTitle(newTitle)
    }

    return (
        <Container style={{ minHeight: '85vh' }}>
            <Row>
                <MyJumbotron />
            </Row>
            <Row>
                <BooksList retriveTitle={retriveTitle}/>
            </Row>
      </Container>
    )
}

export default Main