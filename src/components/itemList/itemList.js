import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/fetch.js';
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( charList => {
                this.setState({
                    charList
                })
            })
    }

    render() {

        const {charList} = this.state;

        if(!charList) {
            return (
                <Spinner/>
            )
        }

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}