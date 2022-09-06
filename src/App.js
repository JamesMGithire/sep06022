import './App.css';
import React from 'react';

function App() {
  const thingsArr=["Thing 1","Thing 2"];
  const things = thingsArr.map(thing=><p key={thing}>{thing}</p>)
  const [item,setItem] = React.useState(things);
  function addPar(arr){
    return ([...arr,<p key={`Thing ${arr.length + 1}`}>{`Thing ${arr.length + 1}`}</p>])
  }
  function addItem(){
    setItem(addPar);
  }
  return (
    <div className="App">
      <button className='button' onClick={addItem}>Add Item</button>
      {item}
    </div>
  );
}

export default App;
