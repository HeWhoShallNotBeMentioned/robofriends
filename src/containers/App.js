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

  const [robots, setRobot] = useState([]);
  const [searchfield, setSearchField] = useState('');

  // async componentDidMount() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const users = await response.json();
  //   this.setState({ robots: users });
  // }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      let users = await response.json();
      setRobot(users);
    };
    fetchData();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  let filteredRobots;
  if (robots) {
    filteredRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLowerCase());
    });
  }

  if (!robots.length) {
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
