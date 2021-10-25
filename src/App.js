import "./App.scss";
import { Cantrips } from "./Components/Cantrips";
import { LevelOne } from "./Components/LevelOne";
import { LevelTwo } from "./Components/LevelTwo";

function App() {
  return (
    <div className='App'>
      <h2 className='main-title'>Choose the spells you have prepared</h2>
      <Cantrips />
      <LevelOne />
      <LevelTwo />
    </div>
  );
}

export default App;
