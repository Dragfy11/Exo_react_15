import React, {useState} from 'react';
import Article from './Components/Articles';

function App() {
  const [title, setTitle] = useState([{titre: "Iron Man"}, {titre: "The Avengers"}, {titre: "Thor: Marvel"}]);
  return (
    <div className="App">
      <h1>Exercice 15</h1>
      <Article titre={title}/>
    </div>
  );
};

export default App;