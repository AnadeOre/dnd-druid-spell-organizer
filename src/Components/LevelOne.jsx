import React from "react";
import spellsLVL1 from "../Data/SpellsLVL1";
import { Spell } from "./Spell";
import "../Styles/LevelOne.scss";

export const LevelOne = () => {
  return (
    <div className='spells-container '>
      <h2 className='Spells-Level-title'>Level One spells</h2>
      <div className='separator lvl1'></div>
      <div className='spells-content'>
        {spellsLVL1.map((lvl1spell) => (
          <div className='level1'>
            <Spell className='lvl1spell' props={lvl1spell} />
          </div>
        ))}
      </div>
    </div>
  );
};
