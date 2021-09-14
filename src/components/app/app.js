import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
// import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/characterPage';
import HousesPage from '../pages/housesPage';
import BooksPage from '../pages/booksPage';
import BooksItem from '../pages/booksItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.sass';

const App = () => {

  const [showRandomChar, setShowRandomChar] = useState(true);

  const toggleRandomChar = () => {
    setShowRandomChar(!showRandomChar)
  }

    // if (error) {
    //   return <ErrorMessage/>
    // }

    const char = showRandomChar ? <RandomChar interval={15000}/> : null
    return (
      <Router>
        <div className="app">
          <Container>
            <Header/>
          </Container>
          <Container>
            <Row>
              <Col lg={{size: 5, offset: 0}}>
                {char}
                <Button color="primary" onClick={toggleRandomChar}>
                  Toggle random character
                </Button>
              </Col>
            </Row>
            <Route path='/'/>
            <Route path='/characters' component={CharacterPage}/>
            <Route path='/houses' component={HousesPage}/>
            <Route path='/books' exact component={BooksPage}/>
            <Route path='/books/:id' render={({match}) =>{
              const {id} = match.params;
              return <BooksItem bookId={id}/>
            }}/>
          </Container>
        </div>
      </Router>
    )
};

export default App;
