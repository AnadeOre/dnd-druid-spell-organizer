const spellsLVL2 = [
  {
    index: 'animal-messenger',
    name: 'Animal Messenger',
    url: '/api/spells/animal-messenger',
    shortdesc: 'Sends a tiny animal to deliver a message',
    desc: [
      'By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as "a man or woman dressed in the uniform of the town guard" or "a red-haired dwarf wearing a pointed hat." You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.',
      "When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell.",
    ],
    higher_level: [
      'If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.',
    ],
    range: '30 feet',
    components: ['V', 'S', 'M'],
    material: 'A morsel of food.',
    ritual: true,
    duration: '24 hours',
    concentration: false,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'barkskin',
    name: 'Barkskin',
    url: '/api/spells/barkskin',
    shortdesc: 'Gives a target barklike skin for up to an hour.',
    desc: [
      "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.",
    ],
    range: 'Touch',
    components: ['V', 'S', 'M'],
    material: 'A handful of oak bark.',
    ritual: false,
    duration: 'Up to 1 hour',
    concentration: true,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'darkvision',
    name: 'Darkvision',
    url: '/api/spells/darkvision',
    shortdesc: 'Grants a target Darkvision up to 60 ft',
    desc: [
      'You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.',
    ],
    range: 'Touch',
    components: ['V', 'S', 'M'],
    material: 'Either a pinch of dried carrot or an agate.',
    ritual: false,
    duration: '8 hours',
    concentration: false,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'enhance-ability',
    name: 'Enhance Ability',
    url: '/api/spells/enhance-ability',
    shortdesc: 'Choose one from the list',
    desc: [
      'You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.',
      "Bear's Endurance.",
      'The target has advantage on constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.',
      "Bull's Strength.",
      'The target has advantage on strength checks, and his or her carrying capacity doubles.',
      "Cat's Grace.",
      "The target has advantage on dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.",
      "Eagle's Splendor.",
      'The target has advantage on Charisma checks.',
      "Fox's Cunning.",
      'The target has advantage on intelligence checks.',
      "Owl's Wisdom.",
      'The target has advantage on wisdom checks.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.',
    ],
    range: 'Touch',
    components: ['V', 'S', 'M'],
    material: 'Fur or a feather from a beast.',
    ritual: false,
    duration: 'Up to 1 hour',
    concentration: true,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'find-traps',
    name: 'Find Traps',
    url: '/api/spells/find-traps',
    shortdesc:
      'You sense the presence of any trap within range that is within line of sight.',
    desc: [
      'You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.',
      "This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.",
    ],
    range: '120 feet',
    components: ['V', 'S'],
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'flame-blade',
    name: 'Flame Blade',
    url: '/api/spells/flame-blade',
    shortdesc:
      'Creates a fiery scimitar that deals 3d6 fire damage on a successful attack.',
    desc: [
      'You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.',
      'You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.',
      'The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd.',
    ],
    range: 'Self',
    components: ['V', 'S', 'M'],
    material: 'Leaf of sumac.',
    ritual: false,
    duration: 'Up to 10 minutes',
    concentration: true,
    casting_time: '1 bonus action',
    level: 2,
    damage: {
      damage_type: {
        index: 'fire',
        name: 'Fire',
        url: '/api/damage-types/fire',
      },
      damage_at_slot_level: {
        2: '3d6',
        4: '4d6',
        6: '5d6',
        8: '6d6',
      },
    },
  },
  {
    index: 'flaming-sphere',
    name: 'Flaming Sphere',
    url: '/api/spells/flaming-sphere',
    shortdesc: 'Creates rolling ball of fire, 2d6 damage on failed Dex save.',
    desc: [
      'A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.',
      "As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.",
      'When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.',
    ],
    range: '60 feet',
    components: ['V', 'S', 'M'],
    material:
      'A bit of tallow, a pinch of brimstone, and a dusting of powdered iron.',
    ritual: false,
    duration: 'Up to 1 minute',
    concentration: true,
    casting_time: '1 action',
    level: 2,
    damage: {
      damage_type: {
        index: 'fire',
        name: 'Fire',
        url: '/api/damage-types/fire',
      },
      damage_at_slot_level: {
        2: '2d6',
        3: '3d6',
        4: '4d6',
        5: '5d6',
        6: '6d6',
        7: '7d6',
        8: '8d6',
        9: '9d6',
      },
    },
  },
  {
    index: 'gust-of-wind',
    name: 'Gust of Wind',
    url: '/api/spells/gust-of-wind',
    shortdesc:
      'Creates a 60 ft long, 10 ft wide gust of strong wind. Creatures in it must take a Str saving throw.',
    desc: [
      "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a strength saving throw or be pushed 15 feet away from you in a direction following the line.",
      'Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.',
      'The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.',
      'As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.',
    ],
    range: 'Self',
    components: ['V', 'S', 'M'],
    material: 'A legume seed.',
    ritual: false,
    duration: 'Up to 1 minute',
    concentration: true,
    casting_time: '1 action',
    level: 2,
    dc: {
      dc_type: {
        index: 'str',
        name: 'STR',
        url: '/api/ability-scores/str',
      },
      dc_success: 'none',
    },
    area_of_effect: {
      type: 'line',
      size: 60,
    },
  },
  {
    index: 'heat-metal',
    name: 'Heat Metal',
    url: '/api/spells/heat-metal',
    shortdesc:
      'Heats a metal object to red hot and deals 2d8 to anyone holding it.',
    desc: [
      'Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.',
      "If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.",
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.',
    ],
    range: '60 feet',
    components: ['V', 'S', 'M'],
    material: 'A piece of iron and a flame.',
    ritual: false,
    duration: 'Up to 1 minute',
    concentration: true,
    casting_time: '1 action',
    level: 2,
    damage: {
      damage_type: {
        index: 'fire',
        name: 'Fire',
        url: '/api/damage-types/fire',
      },
      damage_at_slot_level: {
        2: '2d8',
        3: '3d8',
        4: '4d8',
        5: '5d8',
        6: '6d8',
        7: '7d8',
        8: '8d8',
        9: '9d8',
      },
    },
    dc: {
      dc_type: {
        index: 'con',
        name: 'CON',
        url: '/api/ability-scores/con',
      },
      dc_success: 'other',
      desc: 'Can choose to not drop the object',
    },
  },
  {
    index: 'hold-person',
    name: 'Hold Person',
    url: '/api/spells/hold-person',
    shortdesc: 'Paralyzes one humanoid on failed Wisdom save',
    desc: [
      'Choose a humanoid that you can see within range. The target must succeed on a wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another wisdom saving throw. On a success, the spell ends on the target.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.',
    ],
    range: '60 feet',
    components: ['V', 'S', 'M'],
    material: 'A small, straight piece of iron.',
    ritual: false,
    duration: 'Up to 1 minute',
    concentration: true,
    casting_time: '1 action',
    level: 2,
    dc: {
      dc_type: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis',
      },
      dc_success: 'none',
    },
  },
  {
    index: 'lesser-restoration',
    name: 'Lesser Restoration',
    url: '/api/spells/lesser-restoration',
    shortdesc:
      'You touch a creature and can  end either one disease or one condition afflicting it.',
    desc: [
      'You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.',
    ],
    range: 'Touch',
    components: ['V', 'S'],
    ritual: false,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'locate-animals-or-plants',
    name: 'Locate Animals or Plants',
    url: '/api/spells/locate-animals-or-plants',
    shortdesc: 'Find a specific beast or plant within 5 miles.',
    desc: [
      'Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.',
    ],
    range: 'Self',
    components: ['V', 'S', 'M'],
    material: 'A bit of fur from a bloodhound.',
    ritual: true,
    duration: 'Instantaneous',
    concentration: false,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'locate-object',
    name: 'Locate Object',
    url: '/api/spells/locate-object',
    shortdesc: 'You sense the direction to the object’s location.',
    desc: [
      "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.",
      'The spell can locate a specific object known to you, as long as you have seen it up close--within 30 feet--at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.',
      "This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.",
    ],
    range: 'Self',
    components: ['V', 'S', 'M'],
    material: 'A forked twig.',
    ritual: false,
    duration: 'Up to 10 minutes',
    concentration: true,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'moonbeam',
    name: 'Moonbeam',
    url: '/api/spells/moonbeam',
    shortdesc:
      'Creates a beam that deals 2d10 damage. You can move the beam 60 ft per turn.',
    desc: [
      'A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.',
      "When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.",
      "A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.",
      'On each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction.',
    ],
    higher_level: [
      'When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1dl0 for each slot level above 2nd.',
    ],
    range: '120 feet',
    components: ['V', 'S', 'M'],
    material:
      'Several seeds of any moonseed plant and a piece of opalescent feldspar.',
    ritual: false,
    duration: 'Up to 1 minute',
    concentration: true,
    casting_time: '1 action',
    level: 2,
    damage: {
      damage_type: {
        index: 'radiant',
        name: 'Radiant',
        url: '/api/damage-types/radiant',
      },
      damage_at_slot_level: {
        2: '2d10',
        3: '3d10',
        4: '4d10',
        5: '5d10',
        6: '6d10',
        7: '7d10',
        8: '8d10',
        9: '9d10',
      },
    },
    dc: {
      dc_type: {
        index: 'con',
        name: 'CON',
        url: '/api/ability-scores/con',
      },
      dc_success: 'half',
    },
    area_of_effect: {
      type: 'cylinder',
      size: 5,
    },
  },
  {
    index: 'pass-without-trace',
    name: 'Pass Without Trace',
    url: '/api/spells/pass-without-trace',
    shortdesc:
      'Each creature 30 ft from you and yourself gain +10 to Dex (stealth) checks',
    desc: [
      "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
    ],
    range: 'Self',
    components: ['V', 'S', 'M'],
    material: 'Ashes from a burned leaf of mistletoe and a sprig of spruce.',
    ritual: false,
    duration: 'Up to 1 hour',
    concentration: true,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'protection-from-poison',
    name: 'Protection from Poison',
    url: '/api/spells/protection-from-poison',
    shortdesc:
      'Gives target resistance and advantage against poison. Also cures any poison.',
    desc: [
      'You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.',
      'For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage.',
    ],
    range: 'Touch',
    components: ['V', 'S'],
    ritual: false,
    duration: '1 hour',
    concentration: false,
    casting_time: '1 action',
    level: 2,
  },
  {
    index: 'spike-growth',
    name: 'Spike Growth',
    url: '/api/spells/spike-growth',
    shortdesc: 'The ground twists and sprouts hard spikes and thorns.',
    desc: [
      'The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.',
      'The development of land is camouflaged to look natural. Any creature that does not see the area when the spell is spell casts must make a Wisdom (Perception) opposite the DD backup your fate or it does not recognize the dangerous nature of the ground before entering.',
    ],
    range: '150 feet',
    components: ['V', 'S', 'M'],
    material: 'Seven sharp spines or seven twigs cut peak.',
    ritual: false,
    duration: 'Up to 10 minutes',
    concentration: true,
    casting_time: '1 action',
    level: 2,
    area_of_effect: {
      type: 'cylinder',
      size: 20,
    },
  },
];

export default spellsLVL2;
