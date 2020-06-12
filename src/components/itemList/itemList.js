import React, {Component} from 'react';
import './itemList.sass';
import GotService from '../../services/gotService.js';
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( charList => {
                this.setState({
                    charList
                })
            });
    }


    renderItems(arr) {
        return arr.map((item, i) => {
            const {name, id} = item;
            return (
                <li 
                    key={id}
                    onClick={() => this.props.onCharSelected(id)}
                    className="list-group-item"
                >
                    {name}
                </li>
            );
        });
    };

    render() {
        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>;
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list">
                {items}
            </ul>
        );
    };
};