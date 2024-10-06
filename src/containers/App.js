import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from '../components/Scroll'
import Loader from "../components/Loader";
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(result => result.json())
    .then(users => setRobots(users))

    console.log(count);
  }, [count])

  const handleOnClick = (event) => {
    setCount( count + 1 );
  }

  const onSearchChange = (event) => {
    setSearchText(event.target.value)
  }

  // const { robots, searchText } = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  })
  return !robots.length 
    ? <Loader /> 
    : <div className="tc">
        <h1>RoboFriends</h1>
        <button onClick={handleOnClick}>Click Here</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>

}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchText: ''
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then(result => result.json())
//       .then(users => this.setState({ robots: users }))
//     }, 2000)
//   }

//   onSearchChange = (event) => {
//     this.setState({
//       searchText: event.target.value
//     })

//     const filteredRobots = this.state.robots.filter(robot => {
//       return robot.name.includes(this.state.searchText)
//     })

//     console.log(filteredRobots)
//   }

//   render() {
//     const { robots, searchText } = this.state;
//     const filteredRobots = robots.filter(robot => {
//       return robot.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
//     })
//     return !robots.length 
//       ? <Loader /> 
//       : <div className="tc">
//           <h1>RoboFriends</h1>
//           <SearchBox searchChange={this.onSearchChange}/>
//           <Scroll>
//             <ErrorBoundry>
//               <CardList robots={filteredRobots} />
//             </ErrorBoundry>
//           </Scroll>
//         </div>
//   }
// }

export default App;