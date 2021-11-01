const spellsLVL6 = [
  {
    index: 'conjure-fey',
    name: 'Conjure Fey',
    url: '/api/spells/conjure-fey',
    shortdesc:
      'Conjures a fey creature/beast sprit of CR 6 or lower for up to an hour',
    desc: [
      'You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.',
      "The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.",
      "If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.",
      "The DM has the fey creature's statistics.",
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th.',
    ],
    range: '90 feet',
    components: ['V', 'S'],
    ritual: false,
    duration: 'Up to 1 hour',
    concentration: true,
    casting_time: '1 minute',
    level: 6,
  },
  {
    index: 'heal',
    name: 'Heal',
    url: '/api/spells/heal',
    shortdesc:
      'Target heals 70 HP and is cured of all disease, blindness, and deafness. ',
    desc: [
      'Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.',
    ],
    range: '60 feet',
    components: ['V', 'S'],
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 action',
    level: 6,
    heal_at_slot_level: {
      lvl6: '70',
      lvl7: '80',
      lvl8: '90',
      lvl9: '100',
    },
  },
  {
    index: 'heroes-feast',
    name: "Heroes' Feast",
    url: '/api/spells/heroes-feast',
    shortdesc:
      'In 10 minutes, a grand feast is summoned that up to 12 creatures can partake in',
    desc: [
      "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast.",
      'A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours.',
    ],
    range: '30 feet',
    components: ['V', 'S', 'M'],
    material:
      'A gem-encrusted bowl worth at least 1,000gp, which the spell consumes.',
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '10 minutes',
    level: 6,
  },
  {
    index: 'move-earth',
    name: 'Move Earth',
    url: '/api/spells/move-earth',
    shortdesc:
      'Reshape an area of 40 feet or less of earthen terrain for up to 2 hours.',
    desc: [
      "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.",
      'At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.',
      "Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.",
      "This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.",
      "Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.",
    ],
    range: '120 feet',
    components: ['V', 'S', 'M'],
    material:
      'An iron blade and a small bag containing a mixture of soils--clay, loam, and sand.',
    ritual: false,
    duration: 'Up to 2 hours',
    concentration: true,
    casting_time: '1 action',
    level: 6,
    area_of_effect: {
      type: 'cone',
      size: 40,
    },
  },
  {
    index: 'sunbeam',
    name: 'Sunbeam',
    url: '/api/spells/sunbeam',
    shortdesc:
      'Creates a beam of light from your hand that deals damage and blinds creatures.',
    desc: [
      "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
      'You can create a new line of radiance as your action on any turn until the spell ends.',
      'For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.',
    ],
    range: 'Self',
    components: ['V', 'S', 'M'],
    material: 'A magnifying glass.',
    ritual: false,
    duration: 'Up to 1 minute',
    concentration: true,
    casting_time: '1 action',
    level: 6,
    damage: {
      damage_type: {
        index: 'radiant',
        name: 'Radiant',
        url: '/api/damage-types/radiant',
      },
      damage_at_slot_level: {
        6: '6d8',
      },
    },
    dc: {
      dc_type: {
        index: 'con',
        name: 'CON',
        url: '/api/ability-scores/con',
      },
      dc_success: 'half',
      desc: "On a failed save, the creature is blinded until your next turn. On a successful save, it isn't blinded by this spell.",
    },
    area_of_effect: {
      type: 'line',
      size: 60,
    },
  },
  {
    index: 'transport-via-plants',
    name: 'Transport via Plants',
    url: '/api/spells/transport-via-plants',
    shortdesc:
      'Creates a link between large plants that any creature can travel through',
    desc: [
      'This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.',
    ],
    range: '10 feet',
    components: ['V', 'S'],
    ritual: false,
    duration: '1 round',
    concentration: false,
    casting_time: '1 action',
    level: 6,
  },
  {
    index: 'wall-of-thorns',
    name: 'Wall of Thorns',
    url: '/api/spells/wall-of-thorns',
    shortdesc: 'Creates a wall of thorns',
    desc: [
      'You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.',
      'When the wall appears, each creature within its area must make a dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save.',
      'A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th.',
    ],
    range: '120 feet',
    components: ['V', 'S', 'M'],
    material: 'A handful of thorns.',
    ritual: false,
    duration: 'Up to 10 minutes',
    concentration: true,
    casting_time: '1 action',
    level: 6,
    damage: {
      damage_type: {
        index: 'piercing',
        name: 'Piercing',
        url: '/api/damage-types/piercing',
      },
      damage_at_slot_level: {
        lvl6: '7d8',
        lvl7: '8d8',
        lvl8: '9d8',
        lvl9: '10d8',
      },
    },
    dc: {
      dc_type: {
        index: 'dex',
        name: 'DEX',
        url: '/api/ability-scores/dex',
      },
      dc_success: 'half',
    },
    area_of_effect: {
      type: 'line',
      size: 60,
    },
  },
  {
    index: 'wind-walk',
    name: 'Wind Walk',
    url: '/api/spells/wind-walk',
    shortdesc: 'You and 10 creatures become gaseous forms.',
    desc: [
      "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.",
      "If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance.",
    ],
    range: '30 feet',
    components: ['V', 'S', 'M'],
    material: 'Fire and holy water.',
    ritual: false,
    duration: '8 hours',
    concentration: false,
    casting_time: '1 minute',
    level: 6,
  },
];

export default spellsLVL6;
