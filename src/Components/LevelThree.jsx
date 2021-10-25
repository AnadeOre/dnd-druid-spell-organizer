import React from "react";
import spellsLVL3 from "../Data/SpellsLVL3";
import { Spell } from "./Spell";
import "../Styles/LevelThree.scss";

export const LevelThree = () => {
  return (
    <div className='spells-container '>
      <h2 className='Spells-Level3-title'>Level Three spells</h2>
      <div className='separator lvl3'></div>
      <div className='spells-content'>
        {spellsLVL3.map((lvl3spell) => (
          <div className='level3'>
            <Spell className='lvl3spell' props={lvl3spell} />
          </div>
        ))}
      </div>
    </div>
  );
};
