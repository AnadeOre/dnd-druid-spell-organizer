import React from "react";
import spellsLVL0 from "../Data/SpellsLVL1";
import { Spell } from "./Spell";
import "../Styles/LevelOne.scss";

export const LevelOne = () => {
  return (
    <div className='spells-container '>
      <h2 className='Spells-Level-title'>Level One spells</h2>
      <div className='separator lvl1'></div>
      <div className='spells-content'>
        {spellsLVL0.map((cantrip) => (
          <div className='level1'>
            <Spell className='lvl1spell' props={cantrip} />
          </div>
        ))}
      </div>
    </div>
  );
};
