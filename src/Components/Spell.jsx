import React, { useState } from "react";
import SpellModal from "./SpellModal";
import "../Styles/Spell.scss";

export const Spell = ({ props }) => {
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);
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
  } = props;
  return (
    <div className='spell'>
      <h4 className='spell-name'>{name}</h4>
      <div className='spell-desc-container'>
        <p className='spell-desc'>{shortdesc}</p>
      </div>
      <button className='spell-button' onClick={() => Toggle()}>
        more
      </button>
      {modal ? (
        <SpellModal
          show={modal}
          close={Toggle}
          name={name}
          desc={desc}
          castingTime={casting_time}
          concentration={concentration}
          components={components}
          duration={duration}
          range={range}
          level={level}
        />
      ) : null}
    </div>
  );
};
