import * as React from 'react';

const title = 'React';

const myArray = {
  arr : [100, 9, 25],
  op: Math.sqrt,
}

function getTitle(title){
  return title;
}

function App() {
  return (
    <div>
    <h1>{myArray.arr.map(myArray.op)}</h1>
    </div>
  )
}
export default App;