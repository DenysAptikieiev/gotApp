import React, {useState, useEffect} from 'react';
import './randomChar.sass';
import GotService from '../../services/gotService.js';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const View = ({char}) => {
  let {name, gender, born, died, culture} = char;

  return (
    <>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  )
}

const RandomChar = ({interval}) => {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

 const gotService = new GotService();

  const updateChar = () => {
    const id = Math.floor(Math.random() * 200 + 25); //25 - 200
    gotService.getCharacter(id)
      .then(onCharLoaded)
      .catch(onError);
  }

  const onCharLoaded = char => {
    setLoading(false)
    setChar(char)
    setError(false)
  }

  const onError = () => {
    setError(true)
    setLoading(false)
  }

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, interval);
  }, [])



    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
      <div className="random-block rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
}

export default RandomChar;

