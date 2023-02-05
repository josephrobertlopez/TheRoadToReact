import * as React from 'react';



const App = () => {
  console.log('App renders');
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      points: 5,
      objectID: 1
    },
  ]
  // A
  const handleSearch = (event) => {
    // D
    console.log(event.target.value);
  }
  return (
  <div>
    <h1>My Hacker Stories</h1>
    {/* // B */}
    <Search onSearch={handleSearch}/>
    <hr />
    <List list={stories}/>
  </div>
  );
};
const Search = (props) => {
  console.log('Search renders');
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // C
    props.onSearch(event);
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};
const List = (props) => {
  console.log('List renders');
  return(
    <ul>
      {
        props.list.map((item) => (
          <Item key={item.objectID} item={item} />
      ))}
    </ul>
    );
};
const Item = (props) => {
  console.log('Item renders');
  return (  
    <li>
      <span>
        <a href = {props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
};
export default App;