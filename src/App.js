import './App.css';
import {useState, useEffect } from 'react';
import CardList from "./component/CardList/CardList";
import SearchBox from "./component/SearchBox/SearchBox";

function App() {

  let [monsters, setMonsters] = useState([]);
  let [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setMonsters([...users]))
  }, [])
  
  const filteredMonster =  monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    
    )

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeHolder="Search Monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
