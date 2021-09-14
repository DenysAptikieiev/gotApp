import React, {useEffect, useState} from 'react';
import './itemDetails.sass';

const Field = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )

}

export {
  Field
}

const ItemDetails = ({itemId, getData, children}) => {

  const [item, setItem] = useState(null);



  useEffect(() => {
    updateItem()
  }, [])


  const updateItem = () => {

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(item => setItem({item}));
  }

    if (!item) {
      return <span className='select-error'>Place select a character</span>
    }


    const {name} = item

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, ({child}) => {
              return React.cloneElement(child, {item})
            })
          }
        </ul>
      </div>
    );
}

export default ItemDetails;