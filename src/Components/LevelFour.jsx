import React from "react";
import spellsLVL4 from "../Data/SpellsLVL4";
import { Spell } from "./Spell";
import "../Styles/LevelFour.scss";

export const LevelFour = () => {
  return (
    <div className='spells-container '>
      <h2 className='Spells-Level4-title'>Level Four spells</h2>
      <div className='separator lvl4'></div>
      <div className='spells-content'>
        {spellsLVL4.map((lvl4spell) => (
          <div className='level4'>
            <Spell props={lvl4spell} />
          </div>
        ))}
      </div>
    </div>
  );
};
