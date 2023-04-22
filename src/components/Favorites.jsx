
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards, reset } from '../../src/Redux/actions';
import Card from './Card';
import './favorites.css';

export default function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavoritesCopy);
  const currentGenderFilter = useSelector((s) => s.genderFilter);

  const [orderValue, setOrderValue] = useState('DEFAULT');
  const [filterValue, setFilterValue] = useState('DEFAULT');

  function handleClick(e) {
    e.preventDefault();

    const { name, value } = e.target;

    if (name === 'filter') {
      setFilterValue(value);
      dispatch(filterCards(value));
    }

    if (name === 'order') {
      setOrderValue(value);
      dispatch(orderCards(value, currentGenderFilter));
    }
  }

  function handleReset() {
    setOrderValue('DEFAULT');
    setFilterValue('DEFAULT');
    dispatch(reset());
  }

  return (
    <>
      <div className='align1'>
        <div className='align3'>
          <div className='order'>
            <select name='order' value={orderValue} onChange={handleClick}>
              <option value='DEFAULT' disabled>Select order:</option>
              <option value='Ascendente'>Ascendente</option>
              <option value='Descendente'>Descendente</option>
            </select>
          </div>
          <div className='filter'>
            <select name='filter' value={filterValue} onChange={handleClick}>
              <option value='DEFAULT' disabled>Select filter:</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Genderless'>Genderless</option>
              <option value='unknown'>unknown</option>
            </select>
          </div>
          <div className='reset'>
            <button onClick={handleReset} className='btnreset'>RESET</button>
          </div>
        </div>
        <div className='align2'>
          {myFavorites?.map((c) => {
            return (
              <Card
                key={c.id}
                id={c.id}
                name={c.name}
                species={c.species}
                gender={c.gender}
                image={c.image}
                onClose={() => props.onClose(c.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
