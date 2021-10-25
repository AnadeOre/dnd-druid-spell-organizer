import React from "react";
import spellsLVL2 from "../Data/SpellsLVL2";
import { Spell } from "./Spell";
import "../Styles/LevelTwo.scss";

export const LevelTwo = () => {
  return (
    <div className='spells-container '>
      <h2 className='Spells-Level2-title'>Level Two spells</h2>
      <div className='separator lvl2'></div>
      <div className='spells-content'>
        {spellsLVL2.map((lvl2spell) => (
          <div className='level2'>
            <Spell className='lvl2spell' props={lvl2spell} />
          </div>
        ))}
      </div>
    </div>
  );
};
