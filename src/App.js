import NavBar from "./Components/NavBar";
// import nav bar
import PlayersList from "./Components/PlayersList";
// import playerlist fucntion
import "../src/App.css"
// import css

function App() {
  return (
    <div className="Hero">
      
      <NavBar />
      
      <PlayersList />
    </div>
  );
}

export default App;
// and put it into the div
//so i have [{object in array}] data
//and a card that take {object}
//and create a function that return the data  [for aech player .map]
//and each player have key and value {name,team, nationality, jerseyNumber, age, image}
