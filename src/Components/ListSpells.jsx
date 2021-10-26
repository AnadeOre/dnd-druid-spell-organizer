import React, { useState } from "react";
import { Spell } from "./Spell";
import "../Styles/ListSpells.scss";

export const ListSpells = ({ levelStr, levelInt, spellData, title }) => {
  const titleClass = `Spells-title ${levelStr}`;
  const separatorClass = `separator lvl${levelInt}`;
  const spellContainerClass = `spellsContainer level${levelInt}`;
  const arrowClass = `arrow arrlvl${levelInt}`;
  let sectionTitle = `Level ${title} spells`;
  if (title === "Cantrips") sectionTitle = title;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className='spells-container '>
      <h2 className={titleClass}>
        {sectionTitle} <i className={arrowClass} onClick={toggleOpen}></i>
      </h2>

      <div className={separatorClass}></div>
      {open ? (
        <div className='spells-content'>
          {spellData.map((spellInfo) => (
            <div className={spellContainerClass}>
              <Spell props={spellInfo} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
