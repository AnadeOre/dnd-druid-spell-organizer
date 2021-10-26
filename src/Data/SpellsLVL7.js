const spellsLVL7 = [
  {
    index: "fire-storm",
    name: "Fire Storm",
    url: "/api/spells/fire-storm",
    shortdesc:
      "Creates an up to 100ft storm of raining fire that deals 7d10 fire damage on a failed Dex save. (half on successful save)",
    desc: [
      "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.",
      "The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.",
    ],
    range: "150 feet",
    components: ["V", "S"],
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 7,
    damage: {
      damage_type: {
        index: "fire",
        name: "Fire",
        url: "/api/damage-types/fire",
      },
      damage_at_slot_level: {
        7: "7d10",
      },
    },
    dc: {
      dc_type: {
        index: "dex",
        name: "DEX",
        url: "/api/ability-scores/dex",
      },
      dc_success: "half",
    },
    area_of_effect: {
      type: "cube",
      size: 100,
    },
  },
  {
    index: "mirage-arcane",
    name: "Mirage Arcane",
    url: "/api/spells/mirage-arcane",
    shortdesc:
      "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain",
    desc: [
      "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.",
      "Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures.",
      "The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.",
      "Creatures with truesight can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion.",
    ],
    range: "Sight",
    components: ["V", "S"],
    ritual: false,
    duration: "10 days",
    concentration: false,
    casting_time: "10 minutes",
    level: 7,
    area_of_effect: {
      type: "cube",
      size: 5280,
    },
  },
  {
    index: "plane-shift",
    name: "Plane Shift",
    url: "/api/spells/plane-shift",
    shortdesc:
      "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence.",
    desc: [
      "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion.",
      "Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
      "You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.",
    ],
    range: "Touch",
    components: ["V", "S", "M"],
    material:
      "A forked, metal rod worth at least 250 gp, attuned to a particular plane of existence.",
    ritual: false,
    duration: "Instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 7,
    attack_type: "melee",
    dc: {
      dc_type: {
        index: "cha",
        name: "CHA",
        url: "/api/ability-scores/cha",
      },
      dc_success: "none",
      desc: "If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.",
    },
  },
  {
    index: "regenerate",
    name: "Regenerate",
    url: "/api/spells/regenerate",
    shortdesc:
      "Target heals 4d8 +15 HP and regains 1 HP at the start of each turn for 1 hour. Severed body members restored after two minutes.",
    desc: [
      "You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).",
      "The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump.",
    ],
    range: "Touch",
    components: ["V", "S", "M"],
    material: "A prayer wheel and holy water.",
    ritual: false,
    duration: "1 hour",
    concentration: false,
    casting_time: "1 minute",
    level: 7,
    heal_at_slot_level: {
      lvl7: "4d8 + 15",
    },
  },
  {
    index: "reverse-gravity",
    name: "Reverse Gravity",
    url: "/api/spells/reverse-gravity",
    shortdesc:
      "Reverses gravity in a 50-footradius, 100- foot high cylinder centered on a point within range",
    desc: [
      "This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.",
      "If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.",
      "At the end of the duration, affected objects and creatures fall back down.",
    ],
    range: "100 feet",
    components: ["V", "S", "M"],
    material: "A lodestone and iron filings.",
    ritual: false,
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 7,
    dc: {
      dc_type: {
        index: "dex",
        name: "DEX",
        url: "/api/ability-scores/dex",
      },
      dc_success: "other",
      desc: "A creature can make a dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.",
    },
    area_of_effect: {
      type: "cylinder",
      size: 50,
    },
  },
];

export default spellsLVL7;
