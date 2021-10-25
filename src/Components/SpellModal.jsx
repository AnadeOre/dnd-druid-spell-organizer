import React from "react";
import "../Styles/Modal.scss";

const SpellModal = ({
  show,
  close,
  name,
  desc,
  material,
  higher_level,
  range,
  components,
  ritual,
  duration,
  castingTime,
  concentration,
  level,
  area_of_effect,
  damage,
  dc,
  heal_at_slot_level,
}) => {
  const typeBorder = `border lvl${level.toString()}`;
  const separatorColor = `separator lvl${level}`;
  console.log(damage);
  const levels = [
    "lvl1",
    "lvl2",
    "lvl3",
    "lvl4",
    "lvl5",
    "lvl6",
    "lvl7",
    "lvl8",
    "lvl9",
    "lvl10",
    "lvl11",
    "lvl12",
    "lvl13",
    "lvl14",
    "lvl15",
    "lvl16",
    "lvl17",
    "lvl18",
    "lvl19",
    "lvl20",
  ];
  let damageAtLevel;
  if (damage && damage.damage_at_character_level)
    damageAtLevel = damage.damage_at_character_level;
  else if (damage && damage.damage_at_slot_level)
    damageAtLevel = damage.damage_at_slot_level;
  return (
    <>
      {show ? (
        <div className='modalContainer' onClick={() => close()}>
          <div className={typeBorder}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
              <div className='top'></div>
              <h3 className='modal-title'>{name}</h3>
              <div className={separatorColor}></div>
              {ritual ? <div>Ritual</div> : null}
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
                  {material ? (
                    <li>
                      <span className='bold'>Materials: </span>
                      {material}
                    </li>
                  ) : null}
                  {area_of_effect ? (
                    <li>
                      <span className='bold'>Area: </span>
                      {`${area_of_effect.type} ${area_of_effect.size}`}
                    </li>
                  ) : null}
                </ul>
                <div className={separatorColor}></div>
                <div className='modal-description'>
                  <ul>
                    <h5 className='bold desctitle'>Description:</h5>
                    {desc.map((description) => (
                      <li key={Math.random()}>{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='savings'>
                {dc ? (
                  <div>
                    <div className={separatorColor}></div>

                    <h5 className='bold desctitle'>Saving throws</h5>
                    <ul>
                      <li>
                        <span className='bold'>DC type</span>: {dc.dc_type.name}
                      </li>
                      <li>
                        <span className='bold'>On success:</span>{" "}
                        {dc.dc_success !== "none" ? dc.dc_success : "Nothing"}
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
              {damage ? (
                <div>
                  <div className={separatorColor}></div>
                  <div className='damage'>
                    <div>
                      <h5 className='bold desctitle'>Damage</h5>
                      <ul>
                        <li>
                          <span className='bold'>Type</span>:{" "}
                          {damage.damage_type.name}
                        </li>
                        <li>
                          <span className='bold'>Casted at higher levels:</span>{" "}
                          {levels.map((level, index) => (
                            <div>
                              {damageAtLevel[level] ? (
                                <span className='damageHigherLevels'>
                                  Level {index + 1}: {damageAtLevel[level]}{" "}
                                </span>
                              ) : null}
                            </div>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className={separatorColor}></div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SpellModal;
