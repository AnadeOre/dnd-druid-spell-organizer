import React from "react";
import "../Styles/Modal.scss";

const SpellModal = ({
  show,
  close,
  name,
  desc,
  castingTime,
  concentration,
  components,
  duration,
  range,
  level,
}) => {
  const typeBorder = `border lvl${level.toString()}`;
  console.log(castingTime);
  return (
    <div className='modalContainer' onClick={() => close()}>
      <div className={typeBorder}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          <h3 className='modal-title'>{name}</h3>
          <div className='modal-content'>
            <ul className='modal-chars'>
              <li>
                <span className='bold'>Casting Time: </span>
                {castingTime}
              </li>
              {concentration ? (
                <li>
                  <span className='bold'>Concentration: </span>
                  Yes
                </li>
              ) : null}
              <li>
                <span className='bold'>Range: </span>
                {range}
              </li>
              <li>
                <span className='bold'>Duration: </span>
                {duration}
              </li>
              <li>
                <span className='bold'>Components: </span>
                {components}
              </li>
            </ul>
            <div className='modal-description'>
              <ul>
                <h5 className='bold desctitle'>Description:</h5>
                {desc.map((description) => (
                  <li key={Math.random()}>{description}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellModal;
