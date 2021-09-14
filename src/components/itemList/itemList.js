import React, {useState, useEffect} from 'react';
import './itemList.sass';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


const ItemList = ({getData, onItemSelected, renderItem}) => {
  
  const [error, setError] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getData()
      .then(data => setItemList(data))
      .catch(error => setError(true));
  }, [])


  const renderItems = arr => {
    return arr.map((item) => {
      const {id} = item;
      const label = renderItem(item)
      return (
        <li
          key={id}
          onClick={() => onItemSelected(id)}
          className="list-group-item"
        >
          {label}
        </li>
      );
    });
  };
  if (!itemList) {
    return <Spinner/>;
  }

  const items = !error ? renderItems(itemList) : <ErrorMessage/>;

  return (
    <ul className="item-list">
      {items}
    </ul>
  );
};

export default ItemList;