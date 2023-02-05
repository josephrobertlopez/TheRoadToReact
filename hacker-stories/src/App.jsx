import * as React from 'react';

const list = [
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

function App() {
  return (
  <div>
  <h1>My Hacker Stories</h1>
  {/* create an instance of List component */}
  <List />
  {/* create another instance of List component */}
  <List />
  </div>
  );
}

function List() {
  return (
    <ul>
      {
        list.map(function(item){
          return (
            <li key = {item.objectID}>
              <span>
                <a href = {item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })
      }
    </ul>
  )
}
export default App;