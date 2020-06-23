import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService'
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {

    gotService = new GotService();

    state = {
        selectedBook: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                getData={this.gotService.getAllBooks}
                onItemSelected={this.onItemSelected}
                renderItem={({name}) => `${name}`}
            />
        );

        const bookDetails = (
            <ItemDetails 
                itemId={this.state.selectedBook}
                getData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );

        return(
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }

}