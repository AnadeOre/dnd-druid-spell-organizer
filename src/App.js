import "./App.scss";
import { Cantrips } from "./Components/Cantrips";

function App() {
  return (
    <div className='App'>
      <h2 className='main-title'>Choose the spells you have prepared</h2>
      <Cantrips />
    </div>
  );
}

export default App;
