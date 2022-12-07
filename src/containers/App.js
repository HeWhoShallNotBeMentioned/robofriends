import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App() {
  // constructor() {
  //   super();
  //   this.state = { robots: [], searchfield: '' };
  // }

  // async componentDidMount() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const users = await response.json();
  //   this.setState({ robots: users });
  // }

  const onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  const filteredRobots = this.state.robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(this.state.searchfield.toLowerCase());
  });

  if (!this.state.robots.length) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
