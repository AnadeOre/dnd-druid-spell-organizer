import "./App.scss";
import { Cantrips } from "./Components/Cantrips";
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
    </div>
  );
}

export default App;
