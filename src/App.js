import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'; 
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// class components has state and access to lifecycle methods
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  // render for the first time
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
  }

   handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField) 
    )
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          placeholder="monster name"
          handleChange={ this.handleChange } 
        />
        <CardList 
          monsters={ filteredMonsters }>
        </CardList>
      </div>
    );
  }
}

export default App;