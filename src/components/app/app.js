import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/characterPage';
import HousesPage from '../pages/housesPage';
import BooksPage from '../pages/booksPage';
import GotService from '../../services/gotService.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';

import './app.sass';

export default class App extends Component {
    
    gotService = new GotService();

    state = {
        showRandomChar: true,
        error: false,
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            const { showRandomChar } = state
            return {
                showRandomChar: !showRandomChar,
            }
        });
    }
    
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar/> : null
        
        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <Button color="primary" onClick={this.toggleRandomChar}>
                                    Toggle random character
                                </Button>
                            </Col>
                        </Row>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' component={BooksPage}/>
                    </Container>
                </div>
            </Router>
        )
    }
};
