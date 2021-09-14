import React from 'react';
import ItemList from '../itemList';
import GotService from '../../services/gotService'
import {withRouter} from 'react-router-dom';

const BooksPage = ({history}) => {
  const gotService = new GotService();

    return (
      <ItemList
        getData={gotService.getAllBooks}
        onItemSelected={(itemId) => {
          history.push(`/books/${itemId}`)
        }}
        renderItem={({name}) => `${name}`}
      />
    )
}

export default withRouter(BooksPage)