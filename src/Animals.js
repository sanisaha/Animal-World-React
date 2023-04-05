import React from 'react';
import Card from './Card';
import Search from './Search';

const Animals = (props) => {
  const searchFilter = props.data.filter(animal => {
    return animal.name.includes(props.searchInput)
  })

  return (
    <div>
      <h2>Animals {props.data.length}</h2>
      <Search searchHandler={props.searchHandler} />
      {searchFilter.map((item) => <Card
        key={item.name}
        name={item.name}
        likes={item.likes}
        removeCard={() => props.removeHandler(item.name)}
        addLikes={() => props.likesHandler(item.name, 'add')}
        removeLikes={() => props.likesHandler(item.name, 'remove')} />)}
    </div>
  );
};

export default Animals;