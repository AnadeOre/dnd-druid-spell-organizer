const spellsLVL9 = [
  {
    index: 'foresight',
    name: 'Foresight',
    url: '/api/spells/foresight',
    shortdesc:
      'A creature gains advantage on attack rolls, ability checks, saving throws.',
    desc: [
      "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.",
      'This spell immediately ends if you cast it again before its duration ends.',
    ],
    range: 'Touch',
    components: ['V', 'S', 'M'],
    material: 'A hummingbird feather.',
    ritual: false,
    duration: '8 hours',
    concentration: false,
    casting_time: '1 minute',
    level: 9,
  },
  {
    index: 'shapechange',
    name: 'Shapechange',
    url: '/api/spells/shapechange',
    shortdesc: 'You assume the form o f a different creature for up to an hour',
    desc: [
      "You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.",
      "Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.",
      "You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.",
      "When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.",
      "During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value.",
    ],
    range: 'Self',
    components: ['V', 'S', 'M'],
    material:
      'A jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell.',
    ritual: false,
    duration: 'Up to 1 hour',
    concentration: true,
    casting_time: '1 action',
    level: 9,
  },
  {
    index: 'storm-of-vengeance',
    name: 'Storm of Vengeance',
    url: '/api/spells/storm-of-vengeance',
    shortdesc:
      'Creates a storm cloud.The longer you focus on the spell, the following happens:',
    desc: [
      'A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.',
      'Each round you maintain concentration on this spell, the storm produces additional effects on your turn.',
      'Round 2.',
      'Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage.',
      'Round 3.',
      "You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.",
      'Round 4.',
      'Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage.',
      'Round 5-10.',
      'Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.',
    ],
    range: 'Sight',
    components: ['V', 'S'],
    ritual: false,
    duration: 'Up to 1 minute',
    concentration: true,
    casting_time: '1 action',
    level: 9,
    damage: {
      damage_type: {
        index: 'thunder',
        name: 'Thunder',
        url: '/api/damage-types/thunder',
      },
      damage_at_slot_level: {
        9: '2d6',
      },
    },
    dc: {
      dc_type: {
        index: 'con',
        name: 'CON',
        url: '/api/ability-scores/con',
      },
      dc_success: 'none',
      desc: 'On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.',
    },
    area_of_effect: {
      type: 'sphere',
      size: 360,
    },
  },
  {
    index: 'true-resurrection',
    name: 'True Resurrection',
    url: '/api/spells/true-resurrection',
    shortdesc: 'Brings someone back to life and full HP.',
    desc: [
      "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points.",
      'This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs.',
      "The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
    ],
    range: 'Touch',
    components: ['V', 'S', 'M'],
    material:
      'A sprinkle of holy water and diamonds worth at least 25,000gp, which the spell consumes.',
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 hour',
    level: 9,
  },
];

export default spellsLVL9;
