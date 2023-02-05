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
  const [searchTerm, setSearchTerm] = React.useState('React');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // A
  const handleSearch = (event) => {
    // D
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter((story) => (
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  ));
  return (
  <div>
    <h1>My Hacker Stories</h1>
    <Search search={searchTerm} onSearch={handleSearch}/>
    <hr />
    <List list={searchedStories}/>
  </div>
  );
};
const Search = (props) => (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text" 
        value={props.search}
        onChange={props.onSearch}
      />
    </div>
);
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