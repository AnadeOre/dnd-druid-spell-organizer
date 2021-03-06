import React, { useState } from 'react';
import SpellModal from './SpellModal';
import '../Styles/Spell.scss';

export const Spell = ({ props }) => {
  const {
    name,
    shortdesc,
    desc,
    casting_time,
    concentration,
    components,
    duration,
    range,
    level,
    higher_level,
    material,
    ritual,
    area_of_effect,
    damage,
    dc,
    heal_at_slot_level,
  } = props;
  const [modal, setModal] = useState(false);
  const [prep, setPrep] = useState(false);
  const buttonBorder = `spell-button lvl${level}`;

  const Toggle = () => setModal(!modal);

  const toggleCheck = () => {
    setPrep(!prep);
  };

  const classes = ['spell'];
  if (prep) classes.push('prepared');

  return (
    <div className={classes.join(' ')}>
      <div className='header' onClick={toggleCheck}>
        <h4 className='spell-name'>{name}</h4>
        <input checked={prep} type='checkbox' onClick={toggleCheck} />
      </div>
      <div className='spell-desc-container' onClick={toggleCheck}>
        <p className='spell-desc'>{shortdesc}</p>
      </div>
      <button className={buttonBorder} onClick={() => Toggle()}>
        More
      </button>
      <SpellModal
        show={modal}
        close={Toggle}
        name={name}
        desc={desc}
        higher_level={higher_level}
        material={material}
        ritual={ritual}
        castingTime={casting_time}
        area_of_effect={area_of_effect}
        dc={dc}
        damage={damage}
        heal_at_slot_level={heal_at_slot_level}
        concentration={concentration}
        components={components}
        duration={duration}
        range={range}
        level={level}
      />
    </div>
  );
};
