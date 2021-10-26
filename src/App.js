import "./App.scss";
import { Cantrips } from "./Components/Cantrips";
import { LevelFour } from "./Components/LevelFour";
import { LevelOne } from "./Components/LevelOne";
import { LevelThree } from "./Components/LevelThree";
import { LevelTwo } from "./Components/LevelTwo";

function App() {
  return (
    <div className='App'>
      <h2 className='main-title'>Choose the spells you have prepared</h2>
      <Cantrips />
      <LevelOne />
      <LevelTwo />
      <LevelThree />
      <LevelFour />
    </div>
  );
}

export default App;
