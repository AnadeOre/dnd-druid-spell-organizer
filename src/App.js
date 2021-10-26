import "./App.scss";
import spellsLVL0 from "./Data/SpellsLVL0";
import spellsLVL1 from "./Data/SpellsLVL1";
import spellsLVL2 from "./Data/SpellsLVL2";
import spellsLVL3 from "./Data/SpellsLVL3";
import spellsLVL4 from "./Data/SpellsLVL4";
import spellsLVL5 from "./Data/SpellsLVL5";
import spellsLVL6 from "./Data/SpellsLVL6";
import spellsLVL7 from "./Data/SpellsLVL7";
import spellsLVL8 from "./Data/SpellsLVL8";
import spellsLVL9 from "./Data/SpellsLVL9";
import { ListSpells } from "./Components/ListSpells";

function App() {
  return (
    <div className='App'>
      <h2 className='main-title'>Choose the spells you have prepared</h2>
      <ListSpells
        levelStr='Level0'
        levelInt='0'
        spellData={spellsLVL0}
        title='Cantrips'
      />
      <ListSpells
        levelStr='Level1'
        levelInt='1'
        spellData={spellsLVL1}
        title='One'
      />
      <ListSpells
        levelStr='Level2'
        levelInt='2'
        spellData={spellsLVL2}
        title='Two'
      />
      <ListSpells
        levelStr='Level3'
        levelInt='3'
        spellData={spellsLVL3}
        title='Three'
      />
      <ListSpells
        levelStr='Level4'
        levelInt='4'
        spellData={spellsLVL4}
        title='Four'
      />
      <ListSpells
        levelStr='Level5'
        levelInt='5'
        spellData={spellsLVL5}
        title='Five'
      />
      <ListSpells
        levelStr='Level6'
        levelInt='6'
        spellData={spellsLVL6}
        title='Six'
      />
      <ListSpells
        levelStr='Level7'
        levelInt='7'
        spellData={spellsLVL7}
        title='Seven'
      />
      <ListSpells
        levelStr='Level8'
        levelInt='8'
        spellData={spellsLVL8}
        title='Eight'
      />
      <ListSpells
        levelStr='Level9'
        levelInt='9'
        spellData={spellsLVL9}
        title='Nine'
      />
    </div>
  );
}

export default App;
