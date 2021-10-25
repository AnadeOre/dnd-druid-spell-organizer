import React from "react";
import spellsLVL0 from "../Data/SpellsLVL0";
import { Spell } from "./Spell";
import "../Styles/Cantrips.scss";

export const Cantrips = () => {
  return (
    <div className='cantripContainer'>
      <h2 className='cantrip-title'>Cantrips</h2>
      <div className='separator lvl0'></div>
      <div className='cantrip-content'>
        {spellsLVL0.map((cantrip) => (
          <div className='cantrip'>
            <Spell className='cantripSpell' props={cantrip} />
          </div>
        ))}
      </div>
    </div>
  );
};
