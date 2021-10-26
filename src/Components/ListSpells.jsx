import React from "react";
import { Spell } from "./Spell";
import "../Styles/ListSpells.scss";

export const ListSpells = ({ levelStr, levelInt, spellData, title }) => {
  const titleClass = `Spells-title ${levelStr}`;
  const separatorClass = `separator lvl${levelInt}`;
  const spellContainerClass = `spellsContainer level${levelInt}`;
  let sectionTitle = `Level ${title} spells`;
  if (title === "Cantrips") sectionTitle = title;

  return (
    <div className='spells-container '>
      <h2 className={titleClass}>{sectionTitle}</h2>
      <div className={separatorClass}></div>
      <div className='spells-content'>
        {spellData.map((spellInfo) => (
          <div className={spellContainerClass}>
            <Spell props={spellInfo} />
          </div>
        ))}
      </div>
    </div>
  );
};
