import React from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';


const BooksItem = ({bookId}) =>  {
  const gotService = new GotService();

  return (
      <ItemDetails
        itemId={bookId}
        getData={gotService.getBook}
      >
        <Field field='numberOfPages' label='NumberOfPages'/>
        <Field field='publiser' label='Publiser'/>
        <Field field='released' label='Released'/>
      </ItemDetails>
    )
}


export default BooksItem;