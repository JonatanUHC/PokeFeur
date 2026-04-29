
// ── LUMINESCENT PLATINUM DATA ──────────────────────────────────────────────────
const LUMI_RAW = [[1,"Bulbasaur",45,49,49,65,65,45,"Grass","Poison","Chlorophyll","Overgrow","Grassy Surge"],[2,"Ivysaur",60,62,63,80,80,60,"Grass","Poison","Chlorophyll","Overgrow","Grassy Surge"],[3,"Venusaur",80,82,83,110,100,80,"Grass","Poison","Chlorophyll","Thick Fat","Grassy Surge"],[4,"Charmander",39,52,43,60,50,65,"Fire","Fire","Solar Power","Blaze","Drought"],[5,"Charmeleon",58,64,58,80,65,80,"Fire","Fire","Solar Power","Blaze","Drought"],[6,"Charizard",78,84,78,110,85,100,"Fire","Dragon","Levitate","Blaze","Drought"],[7,"Squirtle",44,48,65,50,64,43,"Water","Water","Rain Dish","Torrent","Drizzle"],[8,"Wartortle",59,63,80,65,80,58,"Water","Water","Rain Dish","Torrent","Drizzle"],[9,"Blastoise",79,83,100,90,105,78,"Water","Steel","Mega Launcher","Torrent","Drizzle"],[10,"Caterpie",45,30,35,20,20,45,"Bug","Bug","Shield Dust","Run Away","Stench"],[11,"Metapod",50,20,55,25,25,30,"Bug","Bug","Shed Skin","Shed Skin","Shed Skin"],[12,"Butterfree",60,45,45,110,100,90,"Bug","Flying","Tinted Lens","Compound Eyes","Effect Spore"],[13,"Weedle",40,35,30,20,20,50,"Bug","Poison","Shield Dust","Run Away","Poison Point"],[14,"Kakuna",45,25,50,25,25,35,"Bug","Poison","Shed Skin","Shed Skin","Shed Skin"],[15,"Beedrill",65,115,40,40,95,95,"Bug","Poison","Adaptability","Sniper","Poison Touch"],[16,"Pidgey",40,35,35,50,35,56,"Normal","Flying","Keen Eye","Tangled Feet","Big Pecks"],[17,"Pidgeotto",63,50,50,65,50,71,"Normal","Flying","Keen Eye","Tangled Feet","Big Pecks"],[18,"Pidgeot",83,60,70,115,70,101,"Normal","Flying","No Guard","Tangled Feet","Big Pecks"],[19,"Rattata",30,56,35,25,35,72,"Normal","Normal","Hustle","Guts","Technician"],[20,"Raticate",55,97,70,45,70,113,"Normal","Normal","Hustle","Guts","Technician"],[21,"Spearow",40,60,30,31,31,70,"Normal","Flying","Keen Eye","Sniper","Intimidate"],[22,"Fearow",65,110,65,61,61,100,"Normal","Flying","Keen Eye","Sniper","Intimidate"],[23,"Ekans",35,60,44,40,54,55,"Poison","Poison","Intimidate","Shed Skin","Merciless"],[24,"Arbok",60,110,70,55,80,80,"Poison","Poison","Intimidate","Shed Skin","Merciless"],[25,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Lightning Rod","Galvanize"],[26,"Raichu",60,95,55,95,80,110,"Electric","Electric","Static","Lightning Rod","Galvanize"],[27,"Sandshrew",50,75,85,20,30,40,"Ground","Ground","Sand Veil","Sand Force","Sand Rush"],[28,"Sandslash",75,100,110,45,55,65,"Ground","Ground","Sand Veil","Sand Force","Sand Rush"],[29,"Nidoran\u2640",55,47,52,40,40,41,"Poison","Poison","Poison Point","Rivalry","Hustle"],[30,"Nidorina",70,62,67,55,55,56,"Poison","Poison","Poison Point","Rivalry","Hustle"],[31,"Nidoqueen",90,92,87,75,85,81,"Poison","Ground","Poison Point","Mold Breaker","Sheer Force"],[32,"Nidoran\u2642",46,57,40,40,40,50,"Poison","Poison","Poison Point","Rivalry","Hustle"],[33,"Nidorino",61,72,57,55,55,65,"Poison","Poison","Poison Point","Rivalry","Hustle"],[34,"Nidoking",81,102,77,90,75,85,"Poison","Ground","Poison Point","Mold Breaker","Sheer Force"],[35,"Clefairy",70,45,48,60,65,35,"Fairy","Fairy","Cute Charm","Magic Guard","Friend Guard"],[36,"Clefable",92,70,73,95,90,60,"Fairy","Fairy","Cute Charm","Magic Guard","Unaware"],[37,"Vulpix",38,41,40,50,65,65,"Fire","Fire","Drought","Flash Fire","Cursed Body"],[38,"Ninetales",73,67,75,81,100,109,"Fire","Fairy","Drought","Flash Fire","Cursed Body"],[39,"Jigglypuff",115,55,30,55,35,30,"Normal","Fairy","Magic Guard","Competitive","Misty Surge"],[40,"Wigglytuff",140,80,55,95,60,55,"Normal","Fairy","Magic Guard","Competitive","Misty Surge"],[41,"Zubat",40,45,35,30,40,55,"Poison","Flying","Inner Focus","Frisk","Infiltrator"],[42,"Golbat",75,80,70,65,75,90,"Poison","Flying","Inner Focus","Frisk","Infiltrator"],[43,"Oddish",45,50,55,75,65,30,"Grass","Poison","Chlorophyll","Run Away","Aroma Veil"],[44,"Gloom",60,65,70,85,75,40,"Grass","Poison","Chlorophyll","Stench","Aroma Veil"],[45,"Vileplume",75,80,85,110,90,50,"Grass","Poison","Chlorophyll","Effect Spore","Aroma Veil"],[46,"Paras",35,70,55,45,55,25,"Bug","Grass","Effect Spore","Damp","Oblivious"],[47,"Parasect",60,115,100,55,90,30,"Bug","Grass","Effect Spore","Damp","Tough Claws"],[48,"Venonat",60,55,50,40,55,45,"Bug","Poison","Tinted Lens","Compound Eyes","Run Away"],[49,"Venomoth",70,55,60,100,75,90,"Bug","Poison","Tinted Lens","Compound Eyes","Wonder Skin"],[50,"Diglett",10,55,25,35,45,95,"Ground","Ground","Sand Veil","Arena Trap","Sand Force"],[51,"Dugtrio",35,100,50,50,70,120,"Ground","Ground","Sand Veil","Arena Trap","Sand Force"],[52,"Meowth",40,45,35,40,40,90,"Normal","Normal","Technician","Pickup","Super Luck"],[53,"Persian",65,80,60,80,65,115,"Normal","Normal","Technician","Limber","Super Luck"],[54,"Psyduck",50,52,48,65,50,55,"Water","Water","Damp","Cloud Nine","Swift Swim"],[55,"Golduck",80,82,78,95,80,85,"Water","Psychic","Hydration","Cloud Nine","Swift Swim"],[56,"Mankey",40,80,35,35,35,80,"Fighting","Fighting","Vital Spirit","Anger Point","Defiant"],[57,"Primeape",65,105,60,60,60,105,"Fighting","Fighting","Vital Spirit","Anger Point","Defiant"],[58,"Growlithe",55,70,45,70,50,60,"Fire","Fire","Intimidate","Flash Fire","Ball Fetch"],[59,"Arcanine",90,110,80,100,80,95,"Fire","Fire","Intimidate","Flash Fire","Defiant"],[60,"Poliwag",40,50,40,40,40,90,"Water","Water","Swift Swim","Damp","Water Absorb"],[61,"Poliwhirl",65,65,65,50,50,90,"Water","Water","Swift Swim","Damp","Water Absorb"],[62,"Poliwrath",90,95,95,70,90,70,"Water","Fighting","Swift Swim","Iron Fist","Water Absorb"],[63,"Abra",25,20,15,105,55,90,"Psychic","Psychic","Magic Guard","Synchronize","Download"],[64,"Kadabra",40,35,30,120,70,105,"Psychic","Psychic","Magic Guard","Synchronize","Download"],[65,"Alakazam",55,50,45,135,95,120,"Psychic","Psychic","Magic Guard","Synchronize","Download"],[66,"Machop",70,80,50,35,35,35,"Fighting","Fighting","Guts","No Guard","Steadfast"],[67,"Machoke",80,100,70,50,60,45,"Fighting","Fighting","Guts","No Guard","Steadfast"],[68,"Machamp",90,130,80,65,85,55,"Fighting","Fighting","Guts","No Guard","Steadfast"],[69,"Bellsprout",50,75,35,70,30,40,"Grass","Poison","Chlorophyll","Gluttony","Corrosion"],[70,"Weepinbell",65,90,50,85,45,55,"Grass","Poison","Chlorophyll","Gluttony","Corrosion"],[71,"Victreebel",80,105,65,100,70,70,"Grass","Poison","Chlorophyll","Gluttony","Corrosion"],[72,"Tentacool",40,40,35,50,100,70,"Water","Poison","Liquid Ooze","Rain Dish","Merciless"],[73,"Tentacruel",80,70,65,80,120,100,"Water","Poison","Liquid Ooze","Rain Dish","Merciless"],[74,"Geodude",40,80,100,30,30,20,"Rock","Ground","Rock Head","Sturdy","Sand Force"],[75,"Graveler",55,95,115,45,45,35,"Rock","Ground","Rock Head","Sturdy","Sand Force"],[76,"Golem",80,120,130,55,65,45,"Rock","Ground","Rock Head","Sturdy","Sand Force"],[77,"Ponyta",50,85,55,65,65,90,"Fire","Fire","Flame Body","Flash Fire","Reckless"],[78,"Rapidash",65,100,70,80,80,105,"Fire","Fire","Flame Body","Flash Fire","Reckless"],[79,"Slowpoke",90,65,65,40,40,15,"Water","Psychic","Oblivious","Own Tempo","Regenerator"],[80,"Slowbro",95,75,110,100,80,30,"Water","Psychic","Oblivious","Own Tempo","Regenerator"],[81,"Magnemite",25,35,70,95,55,45,"Electric","Steel","Magnet Pull","Sturdy","Analytic"],[82,"Magneton",50,60,95,120,70,70,"Electric","Steel","Magnet Pull","Sturdy","Analytic"],[83,"Farfetch\u2019d",55,110,60,55,60,110,"Fighting","Flying","Super Luck","Keen Eye","Defiant"],[84,"Doduo",35,85,45,35,35,75,"Normal","Flying","Tangled Feet","Unburden","Moxie"],[85,"Dodrio",60,110,70,60,60,110,"Normal","Flying","Tangled Feet","Unburden","Moxie"],[86,"Seel",65,45,55,45,70,45,"Water","Water","Thick Fat","Swift Swim","Ice Body"],[87,"Dewgong",90,80,80,80,95,70,"Water","Ice","Thick Fat","Swift Swim","Snow Warning"],[88,"Grimer",80,80,50,40,50,25,"Poison","Poison","Stench","Gooey","Poison Touch"],[89,"Muk",105,105,75,65,100,50,"Poison","Poison","Stench","Gooey","Poison Touch"],[90,"Shellder",30,65,100,45,25,40,"Water","Water","Skill Link","Shell Armor","Ice Body"],[91,"Cloyster",50,95,180,85,45,70,"Water","Ice","Skill Link","Shell Armor","Ice Body"],[92,"Gastly",30,35,30,100,35,80,"Ghost","Poison","Levitate","Cursed Body","Merciless"],[93,"Haunter",45,50,45,115,55,95,"Ghost","Poison","Levitate","Cursed Body","Merciless"],[94,"Gengar",60,65,60,130,75,110,"Ghost","Poison","Levitate","Cursed Body","Merciless"],[95,"Onix",35,75,160,30,45,80,"Rock","Ground","Rock Head","Sturdy","Weak Armor"],[96,"Drowzee",60,48,45,43,90,42,"Psychic","Psychic","Insomnia","No Guard","Psychic Surge"],[97,"Hypno",85,73,70,73,115,67,"Psychic","Psychic","Insomnia","No Guard","Psychic Surge"],[98,"Krabby",30,105,90,25,25,50,"Water","Water","Hyper Cutter","Tough Claws","Sheer Force"],[99,"Kingler",55,130,115,50,50,75,"Water","Water","Hyper Cutter","Tough Claws","Sheer Force"],[100,"Voltorb",40,30,50,55,55,100,"Electric","Electric","Soundproof","Aftermath","Electric Surge"],[101,"Electrode",60,50,70,80,80,150,"Electric","Electric","Soundproof","Aftermath","Electric Surge"],[102,"Exeggcute",60,40,80,60,45,40,"Grass","Psychic","Chlorophyll","Harvest","Ripen"],[103,"Exeggutor",95,95,85,125,75,55,"Grass","Psychic","Chlorophyll","Harvest","Ripen"],[104,"Cubone",50,50,95,40,50,35,"Ground","Ground","Rock Head","Battle Armor","Rattled"],[105,"Marowak",60,80,110,50,80,45,"Ground","Ground","Rock Head","Battle Armor","Technician"],[106,"Hitmonlee",50,120,53,35,110,87,"Fighting","Fighting","Reckless","Limber","Unburden"],[107,"Hitmonchan",50,105,79,35,110,76,"Fighting","Fighting","Iron Fist","Keen Eye","Inner Focus"],[108,"Lickitung",90,55,75,60,75,30,"Normal","Normal","Oblivious","Gluttony","Cloud Nine"],[109,"Koffing",40,65,95,60,45,35,"Poison","Poison","Levitate","Neutralizing Gas","Stench"],[110,"Weezing",65,90,120,85,70,60,"Poison","Poison","Levitate","Neutralizing Gas","Stench"],[111,"Rhyhorn",80,85,95,30,30,25,"Ground","Rock","Rock Head","Reckless","Sheer Force"],[112,"Rhydon",105,130,120,45,45,40,"Ground","Rock","Rock Head","Reckless","Sheer Force"],[113,"Chansey",250,5,5,35,105,50,"Normal","Normal","Serene Grace","Natural Cure","Healer"],[114,"Tangela",65,55,115,100,40,60,"Grass","Grass","Chlorophyll","Leaf Guard","Regenerator"],[115,"Kangaskhan",105,95,80,40,80,90,"Normal","Normal","Scrappy","Early Bird","Parental Bond"],[116,"Horsea",30,40,70,70,25,60,"Water","Water","Swift Swim","Sniper","Damp"],[117,"Seadra",55,65,95,95,45,85,"Water","Water","Poison Point","Sniper","Damp"],[118,"Goldeen",45,55,55,62,40,73,"Water","Water","Swift Swim","Water Veil","Lightning Rod"],[119,"Seaking",80,75,75,102,75,78,"Water","Water","Swift Swim","Water Absorb","Lightning Rod"],[120,"Staryu",30,45,55,70,55,85,"Water","Water","Natural Cure","Analytic","Regenerator"],[121,"Starmie",60,75,85,100,85,115,"Water","Psychic","Natural Cure","Analytic","Regenerator"],[122,"Mr. Mime",50,35,65,110,120,95,"Psychic","Fairy","Filter","Technician","Misty Surge"],[123,"Scyther",70,110,80,55,80,105,"Bug","Flying","Technician","Swarm","Hyper Cutter"],[124,"Jynx",75,40,35,125,95,95,"Ice","Psychic","Dry Skin","Forewarn","Dazzling"],[125,"Electabuzz",65,83,57,95,85,105,"Electric","Electric","Static","Vital Spirit","Iron Fist"],[126,"Magmar",65,95,57,100,85,93,"Fire","Fire","Flame Body","Flash Fire","Vital Spirit"],[127,"Pinsir",65,125,100,55,70,85,"Bug","Bug","Guts","Mold Breaker","Moxie"],[128,"Tauros",75,100,95,70,70,110,"Normal","Normal","Intimidate","Anger Point","Sheer Force"],[129,"Magikarp",20,10,55,15,20,80,"Water","Water","Swift Swim","Swift Swim","Rattled"],[130,"Gyarados",95,125,79,60,100,81,"Water","Flying","Intimidate","Intimidate","Moxie"],[131,"Lapras",130,85,80,85,95,60,"Water","Ice","Water Absorb","Shell Armor","Hydration"],[132,"Ditto",48,48,48,48,48,48,"Normal","Normal","Imposter","Imposter","Imposter"],[133,"Eevee",55,55,50,45,65,55,"Normal","Normal","Run Away","Adaptability","Cloud Nine"],[134,"Vaporeon",130,65,60,110,95,65,"Water","Water","Water Absorb","Hydration","Rain Dish"],[135,"Jolteon",65,65,60,110,95,130,"Electric","Electric","Volt Absorb","Battery","Competitive"],[136,"Flareon",110,130,60,65,65,95,"Fire","Fire","Flash Fire","Guts","Quick Feet"],[137,"Porygon",65,60,70,85,75,40,"Normal","Normal","Trace","Download","Analytic"],[138,"Omanyte",35,40,100,90,55,35,"Rock","Water","Swift Swim","Shell Armor","Weak Armor"],[139,"Omastar",70,60,125,115,70,55,"Rock","Water","Swift Swim","Shell Armor","Weak Armor"],[140,"Kabuto",30,80,90,55,45,55,"Rock","Water","Swift Swim","Battle Armor","Weak Armor"],[141,"Kabutops",60,115,105,65,70,80,"Rock","Water","Swift Swim","Battle Armor","Weak Armor"],[142,"Aerodactyl",80,105,65,60,75,130,"Rock","Flying","Rock Head","Pressure","Strong Jaw"],[143,"Snorlax",160,110,65,65,110,30,"Normal","Normal","Thick Fat","Immunity","Gluttony"],[144,"Articuno",90,75,100,95,125,95,"Ice","Flying","Pressure","Ice Body","Snow Warning"],[145,"Zapdos",90,90,85,125,90,100,"Electric","Flying","Pressure","Static","Lightning Rod"],[146,"Moltres",90,100,90,125,85,90,"Fire","Flying","Pressure","Flame Body","Competitive"],[147,"Dratini",41,64,45,50,50,50,"Dragon","Dragon","Marvel Scale","Shed Skin","Multiscale"],[148,"Dragonair",61,84,65,70,70,70,"Dragon","Dragon","Marvel Scale","Shed Skin","Multiscale"],[149,"Dragonite",91,134,95,100,100,80,"Dragon","Flying","Marvel Scale","Shed Skin","Multiscale"],[150,"Mewtwo",106,110,90,154,90,130,"Psychic","Psychic","Pressure","Pressure","Unnerve"],[151,"Mew",100,100,100,100,100,100,"Psychic","Psychic","Synchronize","Synchronize","Trace"],[152,"Chikorita",45,49,65,49,65,45,"Grass","Grass","Serene Grace","Overgrow","Leaf Guard"],[153,"Bayleef",60,62,80,63,80,60,"Grass","Grass","Serene Grace","Overgrow","Leaf Guard"],[154,"Meganium",80,82,100,93,100,80,"Grass","Fairy","Serene Grace","Overgrow","Triage"],[155,"Charmander",39,52,43,60,50,65,"Fire","Fire","Adaptability","Blaze","Flash Fire"],[156,"Charmeleon",58,64,58,80,65,80,"Fire","Fire","Adaptability","Blaze","Flash Fire"],[157,"Typhlosion",78,79,73,124,80,101,"Fire","Fire","Adaptability","Blaze","Flash Fire"],[158,"Totodile",50,65,64,44,48,43,"Water","Water","Strong Jaw","Torrent","Sheer Force"],[159,"Croconaw",65,80,80,59,63,58,"Water","Dark","Strong Jaw","Torrent","Sheer Force"],[160,"Feraligatr",85,110,100,79,83,78,"Water","Dark","Strong Jaw","Torrent","Sheer Force"],[161,"Sentret",45,45,35,35,45,40,"Normal","Normal","Run Away","Keen Eye","Frisk"],[162,"Furret",95,85,65,45,70,105,"Normal","Normal","Scrappy","Fur Coat","Frisk"],[163,"Hoothoot",60,30,30,36,56,50,"Normal","Flying","Tinted Lens","Insomnia","Intimidate"],[164,"Noctowl",100,40,50,106,116,60,"Psychic","Flying","Tinted Lens","Insomnia","Intimidate"],[165,"Ledyba",40,50,30,20,80,55,"Bug","Fighting","Technician","Iron Fist","Defiant"],[166,"Ledian",65,105,50,35,110,85,"Bug","Fighting","Technician","Iron Fist","Defiant"],[167,"Spinarak",40,70,40,40,40,45,"Bug","Poison","Insomnia","Sniper","Merciless"],[168,"Ariados",70,110,70,50,70,80,"Bug","Poison","Insomnia","Sniper","Merciless"],[169,"Crobat",85,90,80,70,80,130,"Poison","Flying","Inner Focus","Frisk","Infiltrator"],[170,"Chinchou",75,38,38,56,56,67,"Water","Electric","Volt Absorb","Water Absorb","Hydration"],[171,"Lanturn",125,58,70,76,76,67,"Water","Electric","Volt Absorb","Water Absorb","Hydration"],[172,"Pichu",20,40,15,35,35,60,"Electric","Electric","Static","Lightning Rod","Galvanize"],[173,"Cleffa",50,25,28,45,55,15,"Fairy","Fairy","Cute Charm","Magic Guard","Friend Guard"],[174,"Igglybuff",90,30,15,40,20,15,"Normal","Fairy","Magic Guard","Competitive","Cute Charm"],[175,"Togepi",35,20,65,40,65,20,"Fairy","Fairy","Super Luck","Serene Grace","Pixilate"],[176,"Togetic",55,40,85,80,105,40,"Fairy","Flying","Super Luck","Serene Grace","Pixilate"],[177,"Natu",40,50,45,70,45,70,"Psychic","Flying","Synchronize","Early Bird","Magic Bounce"],[178,"Xatu",80,75,70,95,70,95,"Psychic","Flying","Synchronize","Early Bird","Magic Bounce"],[179,"Mareep",55,40,40,65,45,35,"Electric","Electric","Static","Fluffy","Battery"],[180,"Flaaffy",70,55,55,80,60,45,"Electric","Electric","Static","Fluffy","Battery"],[181,"Ampharos",90,75,85,115,90,55,"Electric","Dragon","Static","Mold Breaker","Battery"],[182,"Bellossom",75,80,95,90,100,50,"Grass","Grass","Chlorophyll","Own Tempo","Dancer"],[183,"Marill",70,20,50,40,50,40,"Water","Fairy","Huge Power","Thick Fat","Sap Sipper"],[184,"Azumarill",110,50,80,80,80,50,"Water","Fairy","Huge Power","Thick Fat","Sap Sipper"],[185,"Sudowoodo",90,115,125,30,75,30,"Rock","Rock","Rock Head","Sturdy","Rattled"],[186,"Politoed",90,75,75,90,100,70,"Water","Water","Drizzle","Damp","Water Absorb"],[187,"Hoppip",35,35,40,45,55,50,"Grass","Flying","Chlorophyll","Infiltrator","Leaf Guard"],[188,"Skiploom",55,45,50,65,65,80,"Grass","Flying","Chlorophyll","Infiltrator","Leaf Guard"],[189,"Jumpluff",75,55,70,85,95,110,"Grass","Flying","Chlorophyll","Infiltrator","Cotton Down"],[190,"Aipom",55,70,55,40,55,85,"Normal","Normal","Run Away","Pickup","Skill Link"],[191,"Sunkern",30,30,30,30,30,30,"Grass","Grass","Chlorophyll","Solar Power","Early Bird"],[192,"Sunflora",85,55,85,125,95,30,"Grass","Grass","Chlorophyll","Solar Power","Grassy Surge"],[193,"Yanma",65,65,45,75,45,95,"Bug","Flying","Speed Boost","Compound Eyes","Frisk"],[194,"Wooper",55,55,55,25,25,15,"Water","Ground","Water Absorb","Unaware","Simple"],[195,"Quagsire",95,95,95,65,65,35,"Water","Ground","Water Absorb","Unaware","Simple"],[196,"Espeon",65,65,60,130,95,110,"Psychic","Psychic","Synchronize","Telepathy","Magic Bounce"],[197,"Umbreon",95,65,110,60,130,65,"Dark","Dark","Synchronize","Inner Focus","Immunity"],[198,"Murkrow",60,85,42,85,42,91,"Dark","Flying","Super Luck","Insomnia","Prankster"],[199,"Slowking",95,75,80,100,110,30,"Water","Psychic","Oblivious","Own Tempo","Regenerator"],[200,"Misdreavus",60,60,60,85,85,85,"Ghost","Fairy","Levitate","Levitate","Prankster"],[201,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[202,"Wobbuffet",190,33,58,33,58,33,"Psychic","Psychic","Shadow Tag","Shadow Tag","Telepathy"],[203,"Girafarig",70,80,65,90,65,85,"Normal","Psychic","Inner Focus","Contrary","Sap Sipper"],[204,"Pineco",50,65,90,35,35,15,"Bug","Bug","Sturdy","Aftermath","Overcoat"],[205,"Forretress",75,90,140,60,60,40,"Bug","Steel","Sturdy","Sand Spit","Overcoat"],[206,"Dunsparce",105,95,95,55,55,45,"Normal","Dragon","Serene Grace","Rattled","Wimp Out"],[207,"Gligar",65,75,105,35,65,85,"Ground","Flying","Immunity","Hyper Cutter","Sand Veil"],[208,"Steelix",75,105,200,45,65,30,"Steel","Ground","Sand Force","Sturdy","Sheer Force"],[209,"Snubbull",60,80,50,40,40,30,"Fairy","Fairy","Intimidate","Run Away","Rattled"],[210,"Granbull",90,120,75,60,75,45,"Fairy","Fairy","Intimidate","Quick Feet","Strong Jaw"],[211,"Qwilfish",65,95,95,45,65,95,"Water","Poison","Poison Point","Swift Swim","Intimidate"],[212,"Scizor",70,130,100,55,80,65,"Bug","Steel","Technician","Swarm","Hyper Cutter"],[213,"Shuckle",20,10,230,10,230,5,"Bug","Rock","Sturdy","Gluttony","Contrary"],[214,"Heracross",80,125,75,40,95,85,"Bug","Fighting","Guts","Skill Link","Moxie"],[215,"Sneasel",55,95,55,35,75,115,"Dark","Ice","Technician","Inner Focus","Pickpocket"],[216,"Teddiursa",60,80,50,50,50,40,"Normal","Normal","Pickup","Quick Feet","Honey Gather"],[217,"Ursaring",90,130,75,75,75,55,"Ground","Normal","Guts","Quick Feet","Unnerve"],[218,"Slugma",50,50,50,90,50,20,"Fire","Fire","Magma Armor","Flame Body","Weak Armor"],[219,"Magcargo",60,50,150,110,100,30,"Fire","Rock","Solid Rock","Flame Body","Weak Armor"],[220,"Swinub",50,50,40,30,30,50,"Ice","Ground","Thick Fat","Oblivious","Quick Feet"],[221,"Piloswine",100,100,80,60,60,50,"Ice","Ground","Thick Fat","Oblivious","Quick Feet"],[222,"Corsola",65,45,115,90,115,35,"Water","Rock","Hustle","Natural Cure","Regenerator"],[223,"Remoraid",35,65,35,65,35,65,"Water","Water","Quick Draw","Sniper","Moody"],[224,"Octillery",75,105,75,105,75,45,"Water","Water","Quick Draw","Sniper","Moody"],[225,"Delibird",45,85,50,110,50,110,"Ice","Flying","Technician","Hustle","Prankster"],[226,"Mantine",85,40,70,90,140,70,"Water","Flying","Swift Swim","Water Absorb","Water Veil"],[227,"Skarmory",65,80,140,40,70,70,"Steel","Flying","Keen Eye","Sturdy","Mirror Armor"],[228,"Houndour",45,60,30,80,50,65,"Dark","Fire","Intimidate","Flash Fire","Ball Fetch"],[229,"Houndoom",75,100,50,110,80,95,"Dark","Fire","Intimidate","Flash Fire","Adaptability"],[230,"Kingdra",75,95,95,95,95,85,"Water","Dragon","Swift Swim","Sniper","Damp"],[231,"Phanpy",90,60,60,40,40,40,"Ground","Ground","Sand Veil","Pickup","Technician"],[232,"Donphan",90,120,120,60,60,50,"Ground","Ground","Sand Veil","Sturdy","Technician"],[233,"Porygon2",85,80,90,105,95,60,"Normal","Normal","Trace","Download","Analytic"],[234,"Stantler",73,105,62,75,65,85,"Normal","Normal","Intimidate","Frisk","Sap Sipper"],[235,"Smeargle",55,20,35,20,45,75,"Normal","Normal","Technician","Own Tempo","Moody"],[236,"Tyrogue",35,35,35,35,35,35,"Fighting","Fighting","Steadfast","Guts","Vital Spirit"],[237,"Hitmontop",50,95,95,35,110,70,"Fighting","Fighting","Technician","Intimidate","Contrary"],[238,"Smoochum",45,30,15,95,65,65,"Ice","Psychic","Hydration","Forewarn","Dazzling"],[239,"Elekid",45,63,37,65,55,95,"Electric","Electric","Static","Vital Spirit","Iron Fist"],[240,"Magby",45,75,37,70,55,83,"Fire","Fire","Flame Body","Flash Fire","Vital Spirit"],[241,"Miltank",95,80,105,40,70,100,"Normal","Normal","Thick Fat","Scrappy","Sap Sipper"],[242,"Blissey",255,10,10,75,135,55,"Normal","Normal","Serene Grace","Natural Cure","Healer"],[243,"Raikou",90,85,75,115,100,115,"Electric","Electric","Pressure","Inner Focus","Volt Absorb"],[244,"Entei",115,115,85,90,75,100,"Fire","Fire","Pressure","Inner Focus","Flash Fire"],[245,"Suicune",100,75,115,90,115,85,"Water","Water","Pressure","Inner Focus","Water Absorb"],[246,"Larvitar",50,64,50,45,50,41,"Rock","Ground","Guts","Guts","Intimidate"],[247,"Pupitar",70,84,70,65,70,51,"Rock","Ground","Shed Skin","Shed Skin","Intimidate"],[248,"Tyranitar",100,134,110,95,100,61,"Rock","Dark","Sand Stream","Sand Stream","Intimidate"],[249,"Lugia",106,90,130,90,154,110,"Psychic","Flying","Pressure","Pressure","Multiscale"],[250,"Ho-Oh",106,130,90,110,154,90,"Fire","Flying","Pressure","Pressure","Regenerator"],[251,"Mew",100,100,100,100,100,100,"Psychic","Grass","Natural Cure","Natural Cure","Natural Cure"],[252,"Treecko",40,45,35,65,55,70,"Grass","Grass","Unburden","Technician","Suction Cups"],[253,"Grovyle",50,65,45,85,65,95,"Grass","Grass","Unburden","Technician","Suction Cups"],[254,"Sceptile",70,95,65,105,80,120,"Grass","Dragon","Unburden","Technician","Lightning Rod"],[255,"Torchic",45,60,40,70,50,45,"Fire","Fire","Speed Boost","Blaze","Keen Eye"],[256,"Combusken",60,85,60,85,60,55,"Fire","Fighting","Speed Boost","Blaze","Keen Eye"],[257,"Blaziken",80,120,75,110,70,80,"Fire","Fighting","Speed Boost","Blaze","Reckless"],[258,"Mudkip",50,70,50,50,50,40,"Water","Water","Torrent","Damp","Swift Swim"],[259,"Marshtomp",70,85,70,60,70,50,"Water","Ground","Torrent","Damp","Swift Swim"],[260,"Swampert",100,110,90,85,90,60,"Water","Ground","Torrent","Damp","Swift Swim"],[261,"Poochyena",35,75,35,30,30,65,"Dark","Dark","Run Away","Strong Jaw","Rattled"],[262,"Mightyena",70,110,70,60,60,100,"Dark","Dark","Intimidate","Strong Jaw","Moxie"],[263,"Zigzagoon",38,40,41,30,41,60,"Normal","Normal","Pickup","Gluttony","Quick Feet"],[264,"Linoone",85,85,70,50,70,110,"Normal","Normal","Pickup","Gluttony","Quick Feet"],[265,"Wurmple",45,45,35,20,30,20,"Bug","Bug","Shield Dust","Run Away","Compound Eyes"],[266,"Silcoon",50,35,55,25,25,15,"Bug","Bug","Shed Skin","Shed Skin","Shed Skin"],[267,"Beautifly",60,70,60,125,60,75,"Bug","Flying","Swarm","Merciless","Competitive"],[268,"Silcoon",50,35,55,25,25,15,"Bug","Bug","Shed Skin","Shed Skin","Shed Skin"],[269,"Dustox",60,50,75,75,115,75,"Bug","Poison","Shield Dust","Compound Eyes","Effect Spore"],[270,"Lotad",40,30,30,40,50,30,"Water","Grass","Swift Swim","Rain Dish","Own Tempo"],[271,"Lombre",60,50,50,60,70,50,"Water","Grass","Swift Swim","Rain Dish","Own Tempo"],[272,"Ludicolo",80,70,70,90,100,70,"Water","Grass","Swift Swim","Rain Dish","Own Tempo"],[273,"Seedot",40,40,50,30,30,30,"Grass","Grass","Chlorophyll","Pickpocket","Early Bird"],[274,"Nuzleaf",70,70,40,60,40,60,"Grass","Dark","Chlorophyll","Pickpocket","Unburden"],[275,"Shiftry",90,100,60,90,60,80,"Grass","Dark","Chlorophyll","Pickpocket","Unburden"],[276,"Taillow",40,55,30,30,30,85,"Normal","Flying","Guts","Scrappy","Big Pecks"],[277,"Swellow",60,90,60,80,50,125,"Normal","Flying","Guts","Scrappy","Gale Wings"],[278,"Wingull",40,30,30,55,30,85,"Water","Flying","Hydration","Keen Eye","Rain Dish"],[279,"Pelipper",60,50,110,95,80,65,"Water","Flying","Drizzle","Keen Eye","Rain Dish"],[280,"Ralts",28,25,25,65,55,40,"Psychic","Fairy","Synchronize","Trace","Telepathy"],[281,"Kirlia",38,35,35,95,85,50,"Psychic","Fairy","Synchronize","Trace","Telepathy"],[282,"Gardevoir",68,65,65,125,115,80,"Psychic","Fairy","Synchronize","Trace","Pixilate"],[283,"Surskit",40,30,30,55,55,65,"Bug","Water","Swift Swim","Swift Swim","Rain Dish"],[284,"Masquerain",70,50,50,110,100,100,"Bug","Water","Intimidate","Intimidate","Unnerve"],[285,"Shroomish",60,40,60,40,60,35,"Grass","Grass","Technician","Poison Heal","Quick Feet"],[286,"Breloom",60,130,80,60,60,70,"Grass","Fighting","Technician","Poison Heal","Quick Feet"],[287,"Slakoth",60,60,60,35,35,30,"Normal","Normal","Truant","Truant","Slow Start"],[288,"Vigoroth",80,80,80,55,55,90,"Normal","Normal","Vital Spirit","Vital Spirit","Anger Point"],[289,"Slaking",150,160,100,95,65,100,"Normal","Normal","Truant","Truant","Slow Start"],[290,"Nincada",31,45,90,30,30,40,"Bug","Ground","Compound Eyes","Compound Eyes","Run Away"],[291,"Ninjask",61,90,45,50,50,160,"Bug","Flying","Speed Boost","Speed Boost","Infiltrator"],[292,"Shedinja",1,90,45,30,30,40,"Bug","Ghost","Wonder Guard","Wonder Guard","Wonder Guard"],[293,"Whismur",64,51,23,51,23,28,"Normal","Normal","Soundproof","Scrappy","Rattled"],[294,"Loudred",84,71,43,71,43,48,"Normal","Normal","Soundproof","Scrappy","Punk Rock"],[295,"Exploud",104,91,63,91,73,68,"Normal","Normal","Soundproof","Scrappy","Punk Rock"],[296,"Makuhita",72,60,30,20,30,25,"Fighting","Fighting","Thick Fat","Guts","Sheer Force"],[297,"Hariyama",144,120,60,40,60,50,"Fighting","Fighting","Thick Fat","Guts","Sheer Force"],[298,"Azurill",50,20,40,40,40,20,"Normal","Fairy","Huge Power","Thick Fat","Sap Sipper"],[299,"Nosepass",30,35,135,55,90,30,"Rock","Rock","Sturdy","Magnet Pull","Power Spot"],[300,"Skitty",50,50,50,40,40,60,"Normal","Normal","Cute Charm","Normalize","Wonder Skin"],[301,"Delcatty",70,75,80,75,80,95,"Normal","Normal","Cute Charm","Normalize","Wonder Skin"],[302,"Sableye",60,75,100,75,100,50,"Dark","Ghost","Magic Bounce","Stall","Prankster"],[303,"Mawile",60,95,115,55,85,50,"Steel","Fairy","Huge Power","Intimidate","Sheer Force"],[304,"Aron",50,70,100,40,40,30,"Steel","Steel","Rock Head","Sturdy","Heavy Metal"],[305,"Lairon",60,90,140,50,50,40,"Steel","Steel","Rock Head","Sturdy","Heavy Metal"],[306,"Aggron",70,110,180,60,60,50,"Steel","Steel","Rock Head","Sturdy","Heavy Metal"],[307,"Meditite",30,40,55,60,55,60,"Fighting","Psychic","Pure Power","Pure Power","Telepathy"],[308,"Medicham",60,60,80,80,80,90,"Fighting","Psychic","Pure Power","Pure Power","Telepathy"],[309,"Electrike",40,45,40,65,40,65,"Electric","Electric","Static","Lightning Rod","Intimidate"],[310,"Manectric",70,75,60,105,60,105,"Electric","Electric","Static","Lightning Rod","Intimidate"],[311,"Plusle",60,50,50,95,85,110,"Electric","Electric","Plus","Prankster","Battery"],[312,"Minun",60,85,50,50,95,110,"Electric","Electric","Minus","Galvanize","Friend Guard"],[313,"Volbeat",65,33,75,107,85,100,"Bug","Electric","Swarm","Dazzling","Prankster"],[314,"Illumise",65,33,85,97,85,100,"Bug","Fairy","Tinted Lens","Oblivious","Prankster"],[315,"Roselia",50,60,45,100,80,65,"Grass","Poison","Poison Point","Natural Cure","Leaf Guard"],[316,"Gulpin",70,43,53,43,53,40,"Poison","Poison","Liquid Ooze","Gluttony","Corrosion"],[317,"Swalot",100,73,83,73,83,55,"Poison","Poison","Liquid Ooze","Gluttony","Corrosion"],[318,"Carvanha",45,90,20,65,20,65,"Water","Dark","Speed Boost","Rough Skin","Swift Swim"],[319,"Sharpedo",70,120,40,95,40,95,"Water","Dark","Speed Boost","Rough Skin","Swift Swim"],[320,"Wailmer",130,70,35,70,35,60,"Water","Water","Oblivious","Pressure","Sheer Force"],[321,"Wailord",170,90,45,90,45,60,"Water","Water","Oblivious","Pressure","Sheer Force"],[322,"Numel",60,60,40,65,45,35,"Fire","Ground","Simple","Drought","Own Tempo"],[323,"Camerupt",70,100,70,105,75,40,"Fire","Ground","Solid Rock","Drought","Sheer Force"],[324,"Torkoal",70,85,140,85,70,20,"Fire","Fire","Drought","White Smoke","Shell Armor"],[325,"Spoink",60,25,35,70,80,60,"Psychic","Psychic","Thick Fat","Own Tempo","Gluttony"],[326,"Grumpig",80,45,65,90,110,80,"Psychic","Psychic","Thick Fat","Prankster","Gluttony"],[327,"Spinda",75,75,75,75,75,75,"Normal","Normal","Own Tempo","Tangled Feet","Contrary"],[328,"Trapinch",55,100,45,45,45,10,"Bug","Ground","Hyper Cutter","Arena Trap","Sheer Force"],[329,"Vibrava",60,80,55,90,55,70,"Bug","Dragon","Compound Eyes","Levitate","Overcoat"],[330,"Flygon",90,110,85,130,85,100,"Bug","Dragon","Compound Eyes","Levitate","Overcoat"],[331,"Cacnea",50,85,40,85,40,35,"Grass","Grass","Water Absorb","Sand Veil","Sand Rush"],[332,"Cacturne",70,115,60,115,60,55,"Grass","Dark","Water Absorb","Sand Veil","Sand Rush"],[333,"Swablu",45,60,60,60,75,50,"Fairy","Flying","Cloud Nine","Natural Cure","Pixilate"],[334,"Altaria",75,90,90,90,105,80,"Dragon","Fairy","Cloud Nine","Natural Cure","Pixilate"],[335,"Zangoose",75,115,60,60,60,100,"Normal","Normal","Immunity","Scrappy","Toxic Boost"],[336,"Seviper",75,115,60,80,60,80,"Poison","Dark","Shed Skin","Intimidate","Infiltrator"],[337,"Lunatone",90,55,65,100,85,70,"Rock","Psychic","Levitate","Levitate","Levitate"],[338,"Solrock",90,100,85,55,65,70,"Rock","Psychic","Levitate","Levitate","Levitate"],[339,"Barboach",50,48,43,46,41,60,"Water","Ground","Oblivious","Hydration","Simple"],[340,"Whiscash",110,78,73,76,71,60,"Water","Ground","Oblivious","Hydration","Simple"],[341,"Corphish",43,80,65,50,35,35,"Water","Water","Adaptability","Hyper Cutter","Intimidate"],[342,"Crawdaunt",63,120,85,90,55,67,"Water","Dark","Adaptability","Hyper Cutter","Intimidate"],[343,"Baltoy",40,40,55,40,70,55,"Ground","Psychic","Levitate","Levitate","Psychic Surge"],[344,"Claydol",60,70,105,70,120,75,"Ground","Psychic","Levitate","Levitate","Psychic Surge"],[345,"Lileep",66,41,77,61,87,23,"Rock","Grass","Suction Cups","Storm Drain","Regenerator"],[346,"Cradily",86,81,97,86,107,43,"Rock","Grass","Suction Cups","Storm Drain","Regenerator"],[347,"Anorith",45,95,50,40,50,75,"Rock","Bug","Battle Armor","Swift Swim","Tough Claws"],[348,"Armaldo",75,125,100,70,80,50,"Rock","Bug","Battle Armor","Swift Swim","Tough Claws"],[349,"Feebas",20,15,20,10,55,80,"Water","Water","Swift Swim","Oblivious","Adaptability"],[350,"Milotic",95,60,79,100,125,81,"Water","Fairy","Marvel Scale","Competitive","Wonder Skin"],[351,"Castform",60,60,60,105,70,95,"Normal","Normal","Forecast","Forecast","Forecast"],[352,"Kecleon",60,100,70,60,120,40,"Normal","Normal","Color Change","Mimicry","Protean"],[353,"Shuppet",44,75,35,63,33,45,"Ghost","Ghost","Frisk","Cursed Body","Prankster"],[354,"Banette",64,125,65,93,63,70,"Ghost","Normal","Frisk","Cursed Body","Prankster"],[355,"Duskull",20,40,90,30,90,25,"Ghost","Ghost","Levitate","Frisk","Regenerator"],[356,"Dusclops",40,70,130,60,130,25,"Ghost","Ghost","Levitate","Pressure","Regenerator"],[357,"Tropius",110,95,95,95,95,45,"Grass","Flying","Chlorophyll","Solar Power","Harvest"],[358,"Chimecho",75,40,80,110,100,65,"Psychic","Psychic","Levitate","Magic Guard","Symbiosis"],[359,"Absol",75,130,60,85,60,90,"Dark","Dark","Super Luck","Justified","Magic Bounce"],[360,"Wynaut",95,23,48,23,48,23,"Psychic","Psychic","Shadow Tag","Shadow Tag","Telepathy"],[361,"Snorunt",50,50,50,50,50,50,"Ice","Ice","Inner Focus","Ice Body","Moody"],[362,"Glalie",80,110,110,60,60,80,"Ice","Rock","Levitate","Refrigerate","Moody"],[363,"Spheal",70,40,50,55,50,25,"Ice","Water","Thick Fat","Ice Body","Slush Rush"],[364,"Sealeo",90,60,70,75,70,45,"Ice","Water","Thick Fat","Ice Body","Slush Rush"],[365,"Walrein",110,80,90,95,90,65,"Ice","Water","Thick Fat","Ice Body","Slush Rush"],[366,"Clamperl",35,64,85,74,55,32,"Water","Water","Shell Armor","Battle Armor","Rattled"],[367,"Huntail",55,94,105,75,104,52,"Water","Water","Swift Swim","Water Veil","Strong Jaw"],[368,"Gorebyss",55,84,105,114,75,52,"Water","Water","Swift Swim","Hydration","Storm Drain"],[369,"Relicanth",100,90,130,45,65,55,"Water","Rock","Rock Head","Swift Swim","Sturdy"],[370,"Luvdisc",50,30,75,95,75,125,"Water","Fairy","Swift Swim","Hydration","Marvel Scale"],[371,"Bagon",45,75,60,40,30,50,"Dragon","Dragon","Rock Head","Hyper Cutter","Sheer Force"],[372,"Shelgon",65,95,100,60,50,50,"Dragon","Dragon","Rock Head","Battle Armor","Overcoat"],[373,"Salamence",95,135,80,110,80,100,"Dragon","Flying","Intimidate","Moxie","Aerilate"],[374,"Beldum",40,55,80,35,60,30,"Steel","Psychic","Rock Head","Clear Body","Light Metal"],[375,"Metang",60,75,100,55,80,50,"Steel","Psychic","Iron Fist","Clear Body","Light Metal"],[376,"Metagross",80,135,130,95,90,70,"Steel","Psychic","Iron Fist","Clear Body","Light Metal"],[377,"Regirock",80,100,200,50,100,50,"Rock","Rock","Clear Body","Solid Rock","Sturdy"],[378,"Regice",80,50,100,100,200,50,"Ice","Ice","Clear Body","Heatproof","Filter"],[379,"Registeel",80,75,150,75,150,50,"Steel","Steel","Clear Body","Filter","Heavy Metal"],[380,"Latias",80,80,90,110,130,110,"Dragon","Psychic","Levitate","Levitate","Levitate"],[381,"Latios",80,90,80,130,110,110,"Dragon","Psychic","Levitate","Levitate","Levitate"],[382,"Kyogre",100,100,90,150,140,90,"Water","Water","Drizzle","Drizzle","Primordial Sea"],[383,"Groudon",100,150,140,100,90,90,"Ground","Ground","Drought","Drought","Desolate Land"],[384,"Rayquaza",105,150,90,150,90,95,"Dragon","Flying","Air Lock","Air Lock","Delta Stream"],[385,"Mew",100,100,100,100,100,100,"Steel","Psychic","Serene Grace","Serene Grace","Serene Grace"],[386,"Deoxys",50,150,50,150,50,150,"Psychic","Psychic","Pressure","Pressure","Pressure"],[387,"Turtwig",55,68,64,45,55,31,"Grass","Grass","Overgrow","Shell Armor","Solid Rock"],[388,"Grotle",75,89,85,55,65,36,"Grass","Grass","Overgrow","Shell Armor","Solid Rock"],[389,"Torterra",95,114,110,75,85,56,"Grass","Ground","Overgrow","Shell Armor","Solid Rock"],[390,"Chimchar",44,58,44,58,44,61,"Fire","Fire","Iron Fist","Blaze","Unburden"],[391,"Monferno",64,78,52,78,52,81,"Fire","Fighting","Iron Fist","Blaze","Unburden"],[392,"Infernape",76,104,71,104,71,109,"Fire","Fighting","Iron Fist","Blaze","Unburden"],[393,"Piplup",53,51,53,61,56,40,"Water","Water","Torrent","Competitive","Klutz"],[394,"Prinplup",64,66,68,81,76,50,"Water","Water","Torrent","Competitive","Klutz"],[395,"Empoleon",84,86,88,116,101,60,"Water","Steel","Torrent","Competitive","Slush Rush"],[396,"Starly",40,55,30,30,30,60,"Normal","Flying","Reckless","Keen Eye","Defiant"],[397,"Staravia",55,75,50,40,40,80,"Normal","Flying","Reckless","Intimidate","Defiant"],[398,"Staraptor",85,120,70,50,60,100,"Normal","Flying","Reckless","Intimidate","Defiant"],[399,"Bidoof",59,45,40,35,40,31,"Normal","Normal","Simple","Unaware","Moody"],[400,"Bibarel",94,100,65,55,65,71,"Normal","Water","Simple","Unaware","Moody"],[401,"Kricketot",37,35,41,35,41,25,"Bug","Bug","Run Away","Shed Skin","Compound Eyes"],[402,"Kricketune",80,115,70,40,70,75,"Bug","Bug","Technician","Swarm","Compound Eyes"],[403,"Shinx",45,65,34,40,34,45,"Electric","Electric","Intimidate","Guts","Quick Feet"],[404,"Luxio",60,85,49,60,49,60,"Electric","Electric","Intimidate","Guts","Quick Feet"],[405,"Luxray",80,120,79,95,79,70,"Electric","Dark","Intimidate","Guts","Quick Feet"],[406,"Budew",40,30,35,50,70,55,"Grass","Poison","Poison Point","Natural Cure","Leaf Guard"],[407,"Roserade",60,70,65,125,105,90,"Grass","Poison","Technician","Natural Cure","Dazzling"],[408,"Cranidos",67,125,40,30,30,58,"Rock","Rock","Rock Head","Mold Breaker","Sheer Force"],[409,"Rampardos",97,155,90,35,90,33,"Rock","Rock","Rock Head","Mold Breaker","Sheer Force"],[410,"Shieldon",30,22,118,62,88,30,"Rock","Steel","Sturdy","Soundproof","Filter"],[411,"Bastiodon",60,27,168,77,138,30,"Rock","Steel","Sturdy","Soundproof","Filter"],[412,"Burmy",40,20,45,45,45,30,"Bug","Bug","Battle Armor","Shed Skin","Overcoat"],[413,"Wormadam",60,50,90,110,110,30,"Bug","Grass","Battle Armor","Anticipation","Overcoat"],[414,"Mothim",70,70,50,110,50,100,"Bug","Flying","Tinted Lens","Swarm","Sweet Veil"],[415,"Combee",30,30,42,30,42,70,"Bug","Flying","Hustle","Honey Gather","Rattled"],[416,"Vespiquen",96,80,102,80,102,40,"Bug","Flying","Intimidate","Pressure","Queenly Majesty"],[417,"Pachirisu",60,45,80,80,90,95,"Electric","Electric","Volt Absorb","Prankster","Electric Surge"],[418,"Buizel",55,65,35,60,30,85,"Water","Water","Swift Swim","Water Veil","Propeller Tail"],[419,"Floatzel",85,105,55,85,50,115,"Water","Water","Swift Swim","Water Veil","Propeller Tail"],[420,"Cherubi",45,35,45,62,53,35,"Grass","Grass","Chlorophyll","Chlorophyll","Chlorophyll"],[421,"Cherrim",70,45,70,107,83,90,"Grass","Grass","Flower Gift","Flower Gift","Flower Gift"],[422,"Shellos",76,48,48,57,62,34,"Water","Water","Sticky Hold","Storm Drain","Sand Force"],[423,"Gastrodon",111,83,68,92,82,39,"Water","Ground","Sticky Hold","Storm Drain","Sand Force"],[424,"Ambipom",75,100,66,90,66,115,"Normal","Normal","Technician","Pickup","Skill Link"],[425,"Drifloon",90,50,34,60,44,70,"Ghost","Flying","Unburden","Aftermath","Flare Boost"],[426,"Drifblim",150,80,54,90,54,80,"Ghost","Flying","Unburden","Aftermath","Flare Boost"],[427,"Buneary",55,66,44,44,56,85,"Normal","Normal","Limber","Run Away","Adaptability"],[428,"Pokemon #428",65,106,84,44,96,105,"Normal","Fighting","Scrappy","Cute Charm","Adaptability"],[429,"Mismagius",60,60,60,105,105,105,"Ghost","Fairy","Levitate","Levitate","Prankster"],[430,"Honchkrow",100,125,52,115,52,71,"Dark","Flying","Super Luck","Insomnia","Moxie"],[431,"Glameow",50,65,45,45,40,90,"Normal","Normal","Limber","Keen Eye","Cute Charm"],[432,"Purugly",90,95,70,80,60,115,"Normal","Normal","Thick Fat","Defiant","Fur Coat"],[433,"Chingling",45,50,50,80,60,45,"Psychic","Psychic","Levitate","Magic Guard","Symbiosis"],[434,"Stunky",65,65,50,40,40,75,"Poison","Dark","Aftermath","Stench","Flare Boost"],[435,"Skuntank",115,95,70,85,60,85,"Poison","Dark","Aftermath","Stench","Flare Boost"],[436,"Bronzor",57,24,86,24,86,23,"Steel","Psychic","Levitate","Heatproof","Heavy Metal"],[437,"Bronzong",69,89,116,79,116,33,"Steel","Psychic","Levitate","Heatproof","Heavy Metal"],[438,"Bonsly",60,85,95,10,55,10,"Rock","Rock","Rock Head","Sturdy","Rattled"],[439,"Mime Jr.",20,15,45,90,65,65,"Psychic","Fairy","Filter","Technician","Misty Surge"],[440,"Happiny",100,5,5,15,65,30,"Normal","Normal","Serene Grace","Natural Cure","Friend Guard"],[441,"Chatot",75,45,55,110,55,110,"Normal","Flying","Soundproof","Tangled Feet","Big Pecks"],[442,"Spiritomb",50,92,108,92,108,35,"Ghost","Dark","Pressure","Cursed Body","Infiltrator"],[443,"Gible",58,70,45,40,45,42,"Dragon","Ground","Rough Skin","Sand Veil","Pressure"],[444,"Gabite",68,90,65,50,55,82,"Dragon","Ground","Rough Skin","Sand Veil","Pressure"],[445,"Garchomp",108,130,95,80,85,102,"Dragon","Ground","Rough Skin","Sand Veil","Pressure"],[446,"Munchlax",135,85,40,40,85,5,"Normal","Normal","Thick Fat","Pickup","Gluttony"],[447,"Riolu",40,70,40,35,40,60,"Fighting","Fighting","Steadfast","Inner Focus","Prankster"],[448,"Lucario",70,110,70,115,70,90,"Fighting","Steel","Adaptability","Inner Focus","Justified"],[449,"Hippopotas",68,72,78,38,42,32,"Ground","Ground","Sand Stream","Sand Force","Strong Jaw"],[450,"Hippowdon",108,112,118,68,72,47,"Ground","Ground","Sand Stream","Sand Force","Strong Jaw"],[451,"Skorupi",40,50,90,30,55,65,"Poison","Bug","Battle Armor","Sniper","Keen Eye"],[452,"Drapion",70,90,110,60,85,95,"Poison","Dark","Battle Armor","Sniper","Merciless"],[453,"Croagunk",48,61,40,61,40,50,"Poison","Fighting","Dry Skin","Anticipation","Poison Touch"],[454,"Toxicroak",83,106,65,86,65,98,"Poison","Fighting","Dry Skin","Anticipation","Poison Touch"],[455,"Carnivine",74,110,72,100,72,36,"Grass","Steel","Levitate","Tangled Feet","Technician"],[456,"Finneon",50,30,60,60,60,70,"Water","Water","Swift Swim","Storm Drain","Hydration"],[457,"Lumineon",70,40,75,105,90,105,"Water","Water","Swift Swim","Storm Drain","Hydration"],[458,"Mantyke",45,20,50,60,120,50,"Water","Flying","Swift Swim","Water Absorb","Water Veil"],[459,"Snover",60,62,50,62,60,40,"Grass","Ice","Snow Warning","Soundproof","Thick Fat"],[460,"Abomasnow",90,92,75,92,85,60,"Grass","Ice","Snow Warning","Soundproof","Thick Fat"],[461,"Weavile",70,120,65,45,85,125,"Dark","Ice","Technician","Pressure","Pickpocket"],[462,"Magnezone",70,70,115,130,90,60,"Electric","Steel","Magnet Pull","Levitate","Analytic"],[463,"Lickilicky",110,100,95,80,95,50,"Normal","Normal","Oblivious","Gluttony","Cloud Nine"],[464,"Rhyperior",115,140,130,55,55,40,"Ground","Rock","Solid Rock","Reckless","Sheer Force"],[465,"Tangrowth",100,100,125,110,50,50,"Grass","Grass","Chlorophyll","Leaf Guard","Regenerator"],[466,"Electivire",75,123,67,95,85,95,"Electric","Fighting","Motor Drive","Vital Spirit","Iron Fist"],[467,"Magmortar",75,95,67,125,95,83,"Fire","Fire","Flame Body","Flash Fire","Mega Launcher"],[468,"Togekiss",85,50,95,120,115,80,"Fairy","Flying","Super Luck","Serene Grace","Pixilate"],[469,"Yanmega",86,76,86,116,76,95,"Bug","Flying","Speed Boost","Tinted Lens","Frisk"],[470,"Leafeon",65,110,130,60,65,95,"Grass","Grass","Leaf Guard","Chlorophyll","Grass Pelt"],[471,"Glaceon",65,60,110,130,65,95,"Ice","Ice","Snow Cloak","Ice Body","Slush Rush"],[472,"Gliscor",75,95,125,45,75,95,"Ground","Flying","Poison Heal","Hyper Cutter","Sand Veil"],[473,"Mamoswine",110,130,80,70,60,80,"Ice","Ground","Thick Fat","Oblivious","Quick Feet"],[474,"Porygon-Z",85,76,70,135,70,99,"Normal","Normal","Adaptability","Download","Analytic"],[475,"Gallade",68,125,65,65,115,80,"Psychic","Fighting","Steadfast","Justified","Inner Focus"],[476,"Probopass",60,45,145,85,150,40,"Rock","Steel","Sturdy","Magnet Pull","Power Spot"],[477,"Dusknoir",45,100,135,65,135,45,"Ghost","Ghost","Iron Fist","Pressure","Regenerator"],[478,"Froslass",70,70,70,110,70,110,"Ice","Ghost","Levitate","Snow Cloak","Cursed Body"],[479,"Rotom",50,50,77,95,77,101,"Electric","Ghost","Levitate","Levitate","Levitate"],[480,"Uxie",75,75,130,75,130,95,"Psychic","Fairy","Levitate","Levitate","Analytic"],[481,"Mesprit",80,105,105,105,105,80,"Psychic","Fairy","Levitate","Levitate","Friend Guard"],[482,"Azelf",75,125,70,125,70,115,"Psychic","Fairy","Levitate","Levitate","Competitive"],[483,"Dialga",100,120,120,150,100,90,"Steel","Dragon","Pressure","Full Metal Body","Telepathy"],[484,"Palkia",90,120,100,150,120,100,"Water","Dragon","Pressure","Clear Body","Telepathy"],[485,"Heatran",91,90,106,130,106,77,"Fire","Steel","Flash Fire","Flame Body","Shell Armor"],[486,"Regigigas",110,160,110,80,110,100,"Normal","Normal","Friend Guard","Defeatist","Normalize"],[487,"Giratina",150,100,120,100,120,90,"Ghost","Dragon","Pressure","Cursed Body","Telepathy"],[488,"Cresselia",120,70,120,75,130,85,"Psychic","Psychic","Levitate","Levitate","Levitate"],[489,"Phione",80,80,80,80,80,80,"Water","Water","Hydration","Hydration","Hydration"],[490,"Mew",100,100,100,100,100,100,"Water","Water","Hydration","Hydration","Hydration"],[491,"Darkrai",70,90,90,135,90,125,"Dark","Dark","Bad Dreams","Bad Dreams","Bad Dreams"],[492,"Mew",100,100,100,100,100,100,"Grass","Grass","Natural Cure","Natural Cure","Natural Cure"],[493,"Arceus",120,120,120,120,120,120,"Normal","Normal","Multitype","Multitype","Multitype"],[607,"Litwick",50,30,55,65,55,20,"Ghost","Fire","Flash Fire","Flame Body","Infiltrator"],[608,"Lampent",60,40,60,95,60,55,"Ghost","Fire","Flash Fire","Flame Body","Infiltrator"],[609,"Chandelure",60,55,90,145,90,80,"Ghost","Fire","Flash Fire","Flame Body","Infiltrator"],[700,"Sylveon",95,65,65,110,130,60,"Fairy","Fairy","Cute Charm","Cute Charm","Pixilate"],[731,"Pikipek",35,75,30,30,30,65,"Normal","Flying","Keen Eye","Skill Link","Pickup"],[732,"Trumbeak",55,85,50,40,50,75,"Normal","Flying","Keen Eye","Skill Link","Pickup"],[733,"Pokemon #733",80,120,85,70,85,60,"Normal","Flying","Keen Eye","Skill Link","Sheer Force"],[862,"Obstagoon",93,110,101,40,81,95,"Dark","Normal","Reckless","Guts","Defiant"],[863,"Perrserker",85,110,100,50,80,50,"Steel","Steel","Battle Armor","Tough Claws","Steely Spirit"],[864,"Cursola",60,60,85,145,130,30,"Ghost","Ghost","Weak Armor","Weak Armor","Perish Body"],[865,"Sirfetch'd",62,135,95,60,90,65,"Fighting","Fighting","Steadfast","Super Luck","Scrappy"],[866,"Mr. Rime",80,65,75,110,100,100,"Ice","Psychic","Tangled Feet","Screen Cleaner","Ice Body"],[899,"Wyrdeer",103,105,72,75,75,95,"Normal","Psychic","Intimidate","Frisk","Sap Sipper"],[900,"Kleavor",70,135,95,45,70,85,"Bug","Rock","Sheer Force","Technician","Steadfast"],[901,"Ursaluna",130,140,105,45,80,50,"Ground","Normal","Guts","Bulletproof","Unnerve"],[903,"Sneasler",80,130,60,40,80,120,"Fighting","Poison","Pressure","Poison Touch","Technician"],[904,"Overqwil",85,115,95,65,65,85,"Dark","Poison","Poison Point","Swift Swim","Intimidate"],[957,"Pokemon #957",50,60,45,35,64,58,"Fairy","Steel","Mold Breaker","Own Tempo","Pickpocket"],[958,"Pokemon #958",65,70,55,45,82,78,"Fairy","Steel","Mold Breaker","Own Tempo","Pickpocket"],[959,"Pokemon #959",85,90,77,70,105,94,"Fairy","Steel","Mold Breaker","Own Tempo","Pickpocket"],[1013,"Venusaur",80,82,83,110,100,80,"Grass","Poison","Chlorophyll","Thick Fat","Grassy Surge"],[1017,"Charizard",78,84,78,110,85,100,"Fire","Dragon","Levitate","Blaze","Drought"],[1020,"Blastoise",79,83,100,90,105,78,"Water","Steel","Mega Launcher","Torrent","Drizzle"],[1024,"Rattata",30,56,35,25,35,72,"Normal","Dark","Run Away","Guts","Hustle"],[1025,"Alolan Raticate",80,78,80,40,90,82,"Normal","Dark","Run Away","Guts","Hustle"],[1027,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Static","Lightning Rod"],[1028,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Static","Lightning Rod"],[1029,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Static","Lightning Rod"],[1030,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Static","Lightning Rod"],[1031,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Static","Lightning Rod"],[1032,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Static","Lightning Rod"],[1043,"Pikachu",35,55,40,50,50,90,"Electric","Electric","Static","Lightning Rod","Galvanize"],[1044,"Alolan Raichu",60,85,50,105,85,110,"Electric","Psychic","Surge Surfer","Surge Surfer","Surge Surfer"],[1045,"Alolan Sandshrew",50,75,90,10,35,40,"Ice","Steel","Snow Cloak","Tough Claws","Slush Rush"],[1046,"Alolan Sandslash",75,100,120,25,65,65,"Ice","Steel","Snow Cloak","Tough Claws","Slush Rush"],[1047,"Vulpix",38,41,40,50,65,65,"Ice","Ice","Snow Cloak","Snow Cloak","Snow Warning"],[1048,"Ninetales",73,67,75,81,100,109,"Ice","Fairy","Snow Cloak","Snow Cloak","Snow Warning"],[1049,"Alolan Diglett",10,55,30,35,45,90,"Ground","Steel","Tangling Hair","Technician","Sand Force"],[1050,"Alolan Dugtrio",35,100,60,50,70,110,"Ground","Steel","Tangling Hair","Technician","Sand Force"],[1051,"Alolan Meowth",40,35,35,50,40,90,"Dark","Dark","Pickup","Technician","Prankster"],[1052,"Galarian Meowth",50,65,55,40,40,40,"Steel","Steel","Pickup","Tough Claws","Unnerve"],[1054,"Alolan Persian",65,70,60,90,65,115,"Dark","Dark","Fur Coat","Technician","Prankster"],[1055,"Hisuian Growlithe",60,75,45,65,50,55,"Fire","Rock","Intimidate","Rock Head","Justified"],[1056,"Hisuian Arcanine",95,120,85,95,85,90,"Fire","Rock","Intimidate","Rock Head","Defiant"],[1059,"Geodude",40,80,100,30,30,20,"Rock","Electric","Magnet Pull","Sturdy","Galvanize"],[1060,"Graveler",55,95,115,45,45,35,"Rock","Electric","Magnet Pull","Sturdy","Galvanize"],[1061,"Golem",80,120,130,55,65,45,"Rock","Electric","Magnet Pull","Sturdy","Galvanize"],[1062,"Ponyta",50,85,55,65,65,90,"Fairy","Fairy","Run Away","Pastel Veil","Magic Guard"],[1063,"Galarian Rapidash",65,90,70,90,80,105,"Fairy","Fire","Run Away","Pastel Veil","Magic Guard"],[1064,"Slowpoke",90,65,65,40,40,15,"Psychic","Psychic","Gluttony","Own Tempo","Regenerator"],[1066,"Galarian Slowbro",95,100,95,100,70,30,"Poison","Psychic","Quick Draw","Own Tempo","Regenerator"],[1067,"Galarian Farfetch'd",52,95,55,58,62,55,"Fighting","Fighting","Steadfast","Super Luck","Scrappy"],[1069,"Grimer",80,80,50,40,50,25,"Poison","Dark","Poison Touch","Gluttony","Power of Alchemy"],[1070,"Muk",105,105,75,65,100,50,"Poison","Dark","Poison Touch","Gluttony","Power of Alchemy"],[1073,"Gengar",60,65,60,130,75,110,"Ghost","Poison","Levitate","Cursed Body","Merciless"],[1074,"Pokemon #95",55,92,45,108,75,100,"Rock","Ice","Filter","Clear Body","Weak Armor"],[1076,"Voltorb",40,30,50,55,55,100,"Electric","Grass","Soundproof","Static","Grassy Surge"],[1077,"Electrode",60,50,70,80,80,150,"Electric","Grass","Soundproof","Static","Grassy Surge"],[1078,"Alolan Exeggutor",95,125,85,105,75,45,"Grass","Dragon","Frisk","Harvest","Rock Head"],[1079,"Marowak",60,80,110,50,80,45,"Ghost","Fire","Cursed Body","Lightning Rod","Rock Head"],[1081,"Galarian Weezing",65,80,120,95,70,60,"Poison","Fairy","Levitate","Neutralizing Gas","Misty Surge"],[1083,"Galarian Mr. Mime",50,65,65,90,90,100,"Psychic","Ice","Vital Spirit","Screen Cleaner","Ice Body"],[1090,"Pokemon #133",65,75,70,75,85,80,"Normal","Normal","Run Away","Adaptability","Protean"],[1092,"Pokemon #133",65,85,70,85,85,90,"Normal","Normal","Run Away","Adaptability","Libero"],[1100,"Mewtwo",106,110,90,154,90,130,"Psychic","Psychic","Pressure","Pressure","Unnerve"],[1101,"Mewtwo",106,110,90,154,90,130,"Psychic","Psychic","Pressure","Pressure","Unnerve"],[1102,"Hisuian Typhlosion",73,84,78,120,85,95,"Fire","Ghost","Cursed Body","Blaze","Flash Fire"],[1103,"Pichu",20,40,15,35,35,60,"Electric","Electric","Static","Lightning Rod","Galvanize"],[1106,"Galarian Slowking",95,65,80,110,110,30,"Poison","Psychic","Curious Medicine","Own Tempo","Regenerator"],[1107,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1108,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1109,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1110,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1111,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1112,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1113,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1114,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1115,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1116,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1117,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1118,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1119,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1120,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1121,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1122,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1123,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1124,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1125,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1126,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1127,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1128,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1129,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1130,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1131,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1132,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1133,"Unown",54,108,54,108,54,54,"Psychic","Psychic","Levitate","Levitate","Levitate"],[1135,"Hisuian Qwilfish",65,95,85,55,75,85,"Dark","Poison","Poison Point","Swift Swim","Intimidate"],[1138,"Sneasel",55,95,55,35,75,115,"Fighting","Poison","Inner Focus","Poison Touch","Technician"],[1139,"Galarian Corsola",60,55,100,65,100,30,"Ghost","Ghost","Weak Armor","Weak Armor","Cursed Body"],[1145,"Galarian Zigzagoon",38,30,41,30,41,60,"Normal","Dark","Pickup","Gluttony","Quick Feet"],[1146,"Galarian Linoone",78,70,61,50,61,100,"Normal","Dark","Pickup","Gluttony","Quick Feet"],[1156,"Castform",60,60,60,105,70,95,"Fire","Fire","Forecast","Forecast","Forecast"],[1157,"Castform",60,60,60,105,70,95,"Water","Water","Forecast","Forecast","Forecast"],[1158,"Castform",60,60,60,105,70,95,"Ice","Ice","Forecast","Forecast","Forecast"],[1169,"Attack Forme",50,180,20,180,20,150,"Psychic","Psychic","Pressure","Pressure","Pressure"],[1170,"Defense Forme",50,70,160,70,160,90,"Psychic","Psychic","Pressure","Pressure","Pressure"],[1171,"Speed Forme",50,95,90,95,90,180,"Psychic","Psychic","Pressure","Pressure","Pressure"],[1172,"Burmy",40,20,45,45,45,30,"Bug","Bug","Battle Armor","Shed Skin","Overcoat"],[1173,"Burmy",40,20,45,45,45,30,"Bug","Bug","Battle Armor","Shed Skin","Overcoat"],[1174,"Sandy Cloak",60,79,105,59,85,36,"Bug","Ground","Battle Armor","Anticipation","Overcoat"],[1175,"Trash Cloak",60,69,95,69,95,36,"Bug","Steel","Battle Armor","Anticipation","Overcoat"],[1176,"Cherrim",70,45,70,107,83,90,"Grass","Fire","Flower Gift","Flower Gift","Flower Gift"],[1177,"Shellos",76,48,48,57,62,34,"Water","Water","Sticky Hold","Storm Drain","Sand Force"],[1178,"Gastrodon",111,83,68,92,82,39,"Water","Ground","Sticky Hold","Storm Drain","Sand Force"],[1184,"Heat Rotom",50,65,107,105,107,86,"Electric","Fire","Levitate","Levitate","Levitate"],[1185,"Heat Rotom",50,65,107,105,107,86,"Electric","Water","Levitate","Levitate","Levitate"],[1186,"Heat Rotom",50,65,107,105,107,86,"Electric","Ice","Levitate","Levitate","Levitate"],[1187,"Heat Rotom",50,65,107,105,107,86,"Electric","Flying","Motor Drive","Motor Drive","Motor Drive"],[1188,"Heat Rotom",50,65,107,105,107,86,"Electric","Grass","Levitate","Levitate","Levitate"],[1191,"Origin Forme",150,120,100,120,100,90,"Ghost","Dragon","Levitate","Levitate","Levitate"],[1192,"Sky Forme",100,103,75,120,75,127,"Grass","Flying","Serene Grace","Serene Grace","Serene Grace"],[1193,"Arceus",120,120,120,120,120,120,"Fighting","Fighting","Multitype","Multitype","Multitype"],[1194,"Arceus",120,120,120,120,120,120,"Flying","Flying","Multitype","Multitype","Multitype"],[1195,"Arceus",120,120,120,120,120,120,"Poison","Poison","Multitype","Multitype","Multitype"],[1196,"Arceus",120,120,120,120,120,120,"Ground","Ground","Multitype","Multitype","Multitype"],[1197,"Arceus",120,120,120,120,120,120,"Rock","Rock","Multitype","Multitype","Multitype"],[1198,"Arceus",120,120,120,120,120,120,"Bug","Bug","Multitype","Multitype","Multitype"],[1199,"Arceus",120,120,120,120,120,120,"Ghost","Ghost","Multitype","Multitype","Multitype"],[1200,"Arceus",120,120,120,120,120,120,"Steel","Steel","Multitype","Multitype","Multitype"],[1201,"Arceus",120,120,120,120,120,120,"Fire","Fire","Multitype","Multitype","Multitype"],[1202,"Arceus",120,120,120,120,120,120,"Water","Water","Multitype","Multitype","Multitype"],[1203,"Arceus",120,120,120,120,120,120,"Grass","Grass","Multitype","Multitype","Multitype"],[1204,"Arceus",120,120,120,120,120,120,"Electric","Electric","Multitype","Multitype","Multitype"],[1205,"Arceus",120,120,120,120,120,120,"Psychic","Psychic","Multitype","Multitype","Multitype"],[1206,"Arceus",120,120,120,120,120,120,"Ice","Ice","Multitype","Multitype","Multitype"],[1207,"Arceus",120,120,120,120,120,120,"Dragon","Dragon","Multitype","Multitype","Multitype"],[1208,"Arceus",120,120,120,120,120,120,"Dark","Dark","Multitype","Multitype","Multitype"],[1209,"Arceus",120,120,120,120,120,120,"Fairy","Fairy","Multitype","Multitype","Multitype"]]
;

// Parse LUMI_RAW into a fast lookup: name.toLowerCase() → stats object
const LUMI_DB = {};
for (const row of LUMI_RAW) {
  const [id, name, hp, atk, def, spAtk, spDef, spd, type1, type2, ab1, ab2, abH] = row;
  const key = name.toLowerCase();
  LUMI_DB[key] = { id, name, hp, atk, def, spAtk, spDef, spd, type1, type2, ability1: ab1, ability2: ab2, hiddenAbility: abH };
}

// Is this a Luminescent Platinum file?
let isLumiRom = false;
let detectedVersionInfo = { name: 'Pokémon', gen: 4, spriteGen: 'platinum' };
let detectedGen = null;
let detectedVersionMeta = null;

// LUMI detection: look for Cynthia's team composition known in Lumi
// Cynthia in vanilla has 6 pokes: Spiritomb/Roserade/Togekiss/Lucario/Milotic/Garchomp
// In Lumi her stats are different. We detect by checking if any trainer labeled TR_CHAMPION_01
// has Garchomp at level 62 (early Cynthia) or 78 (final).
// More reliable: check if json has a "version" or "luminescent" key, OR if multiple Cynthia teams exist
function detectLumi(data) {
  if (!data || !data.length) return false;
  const raw = JSON.stringify(data).toLowerCase();
  if (raw.includes('luminescent')) return true;
  // Check Cynthia's team count — in Lumi she appears many times
  const cynthiaEntries = data.filter(t => {
    const label = (t.nameLabel || '').toLowerCase();
    const name = (t.readOnly?.name || '').toLowerCase();
    const trainerName = String(t?.name || '').toLowerCase();
    return label.includes('tr_champion') || name === 'cynthia' || trainerName.includes('cynthia');
  });
  const cynthiaPartyCount = cynthiaEntries.reduce((sum, entry) => sum + ((entry?.party || []).filter(Boolean).length || 0), 0);
  const hasModdedSpecies = data.some(t => (t.party || []).some(p => {
    const species = String(p?.species || '').toLowerCase();
    return ['kleavor','wyrdeer','ursaluna','sneasler','overqwil','basculegion','enamorus'].includes(species);
  }));
  const hasTmItems = data.some(t => (t.party || []).some(p => /\b(?:tm|tr)\s?\d+/i.test(String(p?.heldItem || ''))));
  // Normal BDSP can have several Cynthia teams, but Lumi tends to have many more plus modded species/items.
  if (cynthiaEntries.length >= 8) return true;
  if (cynthiaEntries.length >= 5 && cynthiaPartyCount >= 24) return true;
  if (cynthiaEntries.length >= 4 && (hasModdedSpecies || hasTmItems)) return true;
  return false;
}

// Get lumi stats for a pokemon by name (with slug normalization)
function getLumiStats(speciesName) {
  if (!isLumiRom) return null;
  const key = speciesName.toLowerCase().replace(/-/g,' ').trim();
  // direct
  if (LUMI_DB[key]) return LUMI_DB[key];
  // try slug variants
  const slug = key.replace(/\s+/g,'-');
  for (const [k, v] of Object.entries(LUMI_DB)) {
    if (k === slug || k.replace(/\s+/g,'-') === slug) return v;
  }
  return null;
}

// ── STATE ─────────────────────────────────────────────────────────────────────
let groupedTrainers = {};
let currentLang = 'en';
let selectedName = null, selectedVersion = 0;
let detailPokeSearchQuery = '';
let detailPokeSearchTimer = null;
let trainerSearchQuery = '';
let pokemonSearchQuery = '';
let sidebarTrainerIndex = [];
let sidebarRenderDebounceTimer = null;
let trainerDisplayCacheVersion = 0;
const trainerDisplayCache = new Map();
let learnsetEnabled = false;
let showIVs = true, showEVs = true, showStats = true, useAppliedStats = true;
const cache = { pokemon: {}, moves: {}, abilities: {}, items: {}, learnset: {} };
const pendingCache = { pokemon: {}, moves: {}, abilities: {}, items: {}, learnset: {} };
const trainerPrefetchCache = new Set();
const datasetHydrationState = { loading: false, progress: 0, total: 0, done: 0, stage: '' };
const translationCache = { pokemonNamesPromise: null, moveNamesPromise: null, pokemonDisplayPromise: null, moveDisplayPromise: null, wikiSearches: {} };
const STORAGE_KEYS = {
  lang: 'trainerViewer.lang',
  spriteMode: 'trainerViewer.spriteMode',
  teamLayout: 'trainerViewer.teamLayout.v2',
};
const TEAM_LAYOUT_VERTICAL = 'vertical';
const TEAM_LAYOUT_HORIZONTAL = 'horizontal';
let teamLayout = safeLocalStorageGet(STORAGE_KEYS.teamLayout) || TEAM_LAYOUT_HORIZONTAL;
if (![TEAM_LAYOUT_VERTICAL, TEAM_LAYOUT_HORIZONTAL].includes(teamLayout)) teamLayout = TEAM_LAYOUT_VERTICAL;
// Local offline dex data generated from CSV + Showdown resources.
// Priority order in the viewer stays: ROM/log runtime -> local dex -> web APIs.
const LOCAL_DEX = window.LOCAL_DEX_DATA || { pokemon: {}, moves: {}, items: {}, abilities: {}, spriteBasePath: '' };
const LOCAL_DEX_INDEXES = { pokemon: null, moves: null, items: null, abilities: null };
const SPRITE_MODE_AUTO = 'auto';
const SPRITE_MODE_VERSION = 'version';
const SPRITE_MODE_SHOWDOWN_ANIMATED = 'showdown-animated';
const SPRITE_MODE_MODERN_3D = 'modern-3d';
const SPRITE_MODE_LAST_GEN_ANIMATED = 'last-gen-animated';
const SPRITE_MODE_STATIC = 'static';
let spriteMode = safeLocalStorageGet(STORAGE_KEYS.spriteMode) || SPRITE_MODE_AUTO;
if (spriteMode === SPRITE_MODE_STATIC) spriteMode = SPRITE_MODE_VERSION;
if (spriteMode === SPRITE_MODE_LAST_GEN_ANIMATED) spriteMode = SPRITE_MODE_SHOWDOWN_ANIMATED;
if (spriteMode === SPRITE_MODE_MODERN_3D) spriteMode = SPRITE_MODE_AUTO;
if (![SPRITE_MODE_AUTO, SPRITE_MODE_VERSION, SPRITE_MODE_SHOWDOWN_ANIMATED].includes(spriteMode)) {
  spriteMode = SPRITE_MODE_AUTO;
}

function getLocalDexCollection(kind) {
  return LOCAL_DEX[kind] || {};
}

function buildLocalDexIndex(kind) {
  if (LOCAL_DEX_INDEXES[kind]) return LOCAL_DEX_INDEXES[kind];
  const index = new Map();
  const collection = getLocalDexCollection(kind);
  Object.entries(collection).forEach(([slug, entry]) => {
    uniqueNonEmpty([
      String(entry?.id || ''),
      slug,
      entry?.slug,
      entry?.nameFr,
      entry?.nameEn,
      formatPokemonDisplayName(entry?.nameEn || ''),
      titleCaseFrench(entry?.nameFr || ''),
    ]).flatMap(v => buildLooseLookupKeys(v)).forEach(key => {
      if (!index.has(key)) index.set(key, slug);
    });
  });
  LOCAL_DEX_INDEXES[kind] = index;
  return index;
}

function getLocalDexEntry(kind, identifier) {
  if (!identifier) return null;
  const collection = getLocalDexCollection(kind);
  const index = buildLocalDexIndex(kind);
  const candidates = buildLooseLookupKeys(identifier);
  for (const key of candidates) {
    const slug = index.get(key);
    if (slug && collection[slug]) return collection[slug];
  }
  if (kind === 'moves') {
    const canonical = getCanonicalMoveMeta(identifier);
    for (const candidate of uniqueNonEmpty([canonical.slug, ...(canonical.slugCandidates || [])])) {
      if (collection[candidate]) return collection[candidate];
    }
  }
  if (kind === 'items') {
    const canonical = getCanonicalItemMeta(identifier);
    for (const candidate of uniqueNonEmpty(canonical.slugCandidates || [])) {
      if (collection[candidate]) return collection[candidate];
    }
  }
  if (kind === 'pokemon') {
    for (const candidate of uniqueNonEmpty(getPokemonSlugCandidates(identifier))) {
      if (collection[candidate]) return collection[candidate];
    }
  }
  return null;
}

function getLocalPokemonEntry(identifier) {
  return getLocalDexEntry('pokemon', identifier);
}

function getLocalMoveEntry(identifier) {
  return getLocalDexEntry('moves', identifier);
}

function getLocalItemEntry(identifier) {
  return getLocalDexEntry('items', identifier);
}

function getLocalAbilityEntry(identifier) {
  return getLocalDexEntry('abilities', identifier);
}

function getSpriteBasePath() {
  return LOCAL_DEX.spriteBasePath || './assets/sprites/local-dex';
}

function getEffectiveSpriteMode(modeOverride = spriteMode) {
  if (modeOverride === SPRITE_MODE_SHOWDOWN_ANIMATED) return SPRITE_MODE_SHOWDOWN_ANIMATED;
  if (modeOverride === SPRITE_MODE_VERSION) return SPRITE_MODE_VERSION;
  const gen = Number(detectedVersionInfo?.gen || 4);
  return gen >= 7 ? SPRITE_MODE_SHOWDOWN_ANIMATED : SPRITE_MODE_VERSION;
}

function isAnimatedSpriteMode() {
  return getEffectiveSpriteMode() === SPRITE_MODE_SHOWDOWN_ANIMATED;
}

function isModern3DSpriteMode() {
  return false;
}

function isStaticSpriteMode() {
  return getEffectiveSpriteMode() === SPRITE_MODE_VERSION;
}

function getVersionSpriteProfile(modeOverride = spriteMode) {
  // The offline local pack only ships animated Gen 5 battle sprites.
  // In Showdown mode we still keep those as an extra local fallback.
  if (getEffectiveSpriteMode(modeOverride) === SPRITE_MODE_SHOWDOWN_ANIMATED) {
    return { generationFolder: 'generation-v', versionFolder: 'black-white', animated: true };
  }
  const sg = String(detectedVersionInfo?.spriteGen || '').toLowerCase();
  if (sg === 'diamond-pearl') return { generationFolder: 'generation-iv', versionFolder: 'diamond-pearl', animated: false };
  if (sg === 'platinum') return { generationFolder: 'generation-iv', versionFolder: 'platinum', animated: false };
  if (sg === 'heartgold-soulsilver') return { generationFolder: 'generation-iv', versionFolder: 'heartgold-soulsilver', animated: false };
  if (sg === 'black-white' || sg === 'black-white-2') return { generationFolder: 'generation-v', versionFolder: 'black-white', animated: false };
  if (sg === 'x-y') return { generationFolder: 'generation-vi', versionFolder: 'x-y', animated: false };
  if (sg === 'omegaruby-alphasapphire') return { generationFolder: 'generation-vi', versionFolder: 'omegaruby-alphasapphire', animated: false };
  if (sg === 'ultra-sun-ultra-moon') return { generationFolder: 'generation-vii', versionFolder: 'ultra-sun-ultra-moon', animated: false };
  const gen = Number(detectedVersionInfo?.gen || 4);
  if (gen >= 7) return { generationFolder: 'generation-vii', versionFolder: 'ultra-sun-ultra-moon', animated: false };
  if (gen === 6) return { generationFolder: 'generation-vi', versionFolder: 'x-y', animated: false };
  if (gen === 5) return { generationFolder: 'generation-v', versionFolder: 'black-white', animated: false };
  return { generationFolder: 'generation-iv', versionFolder: 'platinum', animated: false };
}

function getSpriteFormSuffixes(identifier, formId = 0) {
  const raw = stripDiacritics(String(identifier || '')).toLowerCase();
  const compact = raw.replace(/[^a-z0-9]+/g, ' ').trim();
  const suffixes = [];
  const push = (value) => { if (value && !suffixes.includes(value)) suffixes.push(value); };
  if (/\balola\b|\b-a\b/.test(compact) || /alola/.test(raw)) push('alola');
  if (/\bgalar\b|\b-g\b/.test(compact) || /galar/.test(raw)) push('galar');
  if (/\bhisui\b|\bhisuian\b|\b-h\b/.test(compact) || /hisui/.test(raw)) push('hisui');
  if (/\bpaldea\b|\b-p\b/.test(compact) || /paldea/.test(raw)) push('paldea');
  if (/\btotem\b/.test(compact)) push('totem');
  if (/\bmega\b/.test(compact)) push('mega');
  if (Number(formId) > 0) {
    // Regional forms in Gen 7 most commonly use "-alola" in the local pack.
    if (!suffixes.length && (detectedVersionInfo?.gen || 0) >= 7) push('alola');
  }
  return suffixes;
}

function resolveLocalPokemonSpriteCandidates(spriteId, shiny = false, identifier = '', formId = 0, modeOverride = spriteMode) {
  const id = Number(spriteId);
  if (!Number.isFinite(id) || id <= 0) return [];
  const base = getSpriteBasePath();
  const profile = getVersionSpriteProfile(modeOverride);
  const suffix = profile.animated ? 'gif' : 'png';
  const shinyFolder = shiny ? '/shiny' : '';
  const versionRoot = `${base}/pokemon/versions/${profile.generationFolder}/${profile.versionFolder}`;
  const candidates = [];
  const formSuffixes = getSpriteFormSuffixes(identifier, formId);
  if (profile.animated) {
    candidates.push(`${versionRoot}/animated${shinyFolder}/${id}.${suffix}`);
  }
  formSuffixes.forEach(formSuffix => {
    candidates.push(`${versionRoot}${shinyFolder}/${id}-${formSuffix}.png`);
  });
  candidates.push(`${versionRoot}${shinyFolder}/${id}.png`);
  formSuffixes.forEach(formSuffix => {
    candidates.push(`${base}/pokemon/${id}-${formSuffix}.png`);
  });
  candidates.push(`${base}/pokemon/${id}.png`);
  return uniqueNonEmpty(candidates);
}

function resolveLocalPokemonModern3DCandidates(spriteId, shiny = false, identifier = '', formId = 0) {
  const id = Number(spriteId);
  if (!Number.isFinite(id) || id <= 0) return [];
  const base = getSpriteBasePath();
  const formSuffixes = getSpriteFormSuffixes(identifier, formId);
  const candidates = [];
  formSuffixes.forEach(formSuffix => {
    candidates.push(`${base}/pokemon/model/${id}-${formSuffix}.png`);
  });
  candidates.push(`${base}/pokemon/model/${id}.png`);
  formSuffixes.forEach(formSuffix => {
    candidates.push(`${base}/pokemon/other/official-artwork/${id}-${formSuffix}.png`);
  });
  candidates.push(`${base}/pokemon/other/official-artwork/${id}.png`);
  if (shiny) {
    formSuffixes.forEach(formSuffix => {
      candidates.push(`${base}/pokemon/shiny/${id}-${formSuffix}.png`);
    });
    candidates.push(`${base}/pokemon/shiny/${id}.png`);
  }
  return uniqueNonEmpty(candidates);
}

function resolveLocalShowdownSpriteCandidates(spriteId, shiny = false) {
  const id = Number(spriteId);
  if (!Number.isFinite(id) || id <= 0) return [];
  const base = './assets/sprites/showdown';
  const folder = shiny ? `${base}/shiny` : base;
  return uniqueNonEmpty([
    `${folder}/${id}.gif`,
  ]);
}

function expandAnimeLibrarySlugAliases(value) {
  const normalized = moveSlug(value);
  const prefixedRegional = normalized.match(/^(alolan|galarian|hisuian|paldean)-(.+)$/);
  const regionMap = {
    alolan: 'alola',
    galarian: 'galar',
    hisuian: 'hisui',
    paldean: 'paldea',
  };
  const regionalSuffix = prefixedRegional
    ? `${prefixedRegional[2]}-${regionMap[prefixedRegional[1]] || prefixedRegional[1]}`
    : '';
  const aliases = uniqueNonEmpty([
    normalized,
    normalized.replace(/-a$/i, '-alola'),
    normalized.replace(/-g$/i, '-galar'),
    normalized.replace(/-h$/i, '-hisui'),
    normalized.replace(/-p$/i, '-paldea'),
    /^alolan-/.test(normalized) ? normalized.replace(/^alolan-/, '') + '-alola' : '',
    /^galarian-/.test(normalized) ? normalized.replace(/^galarian-/, '') + '-galar' : '',
    /^hisuian-/.test(normalized) ? normalized.replace(/^hisuian-/, '') + '-hisui' : '',
    /^paldean-/.test(normalized) ? normalized.replace(/^paldean-/, '') + '-paldea' : '',
    regionalSuffix,
  ]).filter(name => !/-$/.test(name));
  return uniqueNonEmpty([
    ...aliases,
    ...aliases.map(name => name.replace(/-/g, '')),
  ]);
}

function resolveLocalAnimeLibrarySpriteCandidates(identifier = '', shiny = false) {
  const localPokemon = getLocalPokemonEntry(identifier);
  const sourceNames = uniqueNonEmpty([
    identifier,
    localPokemon?.slug,
    localPokemon?.nameEn,
    localPokemon?.nameFr,
  ]);
  const slugCandidates = uniqueNonEmpty(sourceNames.flatMap(name => {
    const rawCandidates = uniqueNonEmpty([
      ...getPokemonSlugCandidates(name),
      moveSlug(name),
    ]);
    return rawCandidates.flatMap(expandAnimeLibrarySlugAliases);
  }));
  const base = './spritespokemonanime';
  const normalUrls = slugCandidates.map(slug => `${base}/${slug}.gif`);
  if (!shiny) return uniqueNonEmpty(normalUrls);
  const shinyUrls = slugCandidates.map(slug => `${base}/${slug}-shiny.gif`);
  return uniqueNonEmpty([
    ...shinyUrls,
    ...normalUrls,
  ]);
}

function getCustomVersionSpritePackPath() {
  const gen = Number(detectedVersionInfo?.gen || 0);
  if (gen >= 4 && gen <= 6) return `./gen${gen}`;
  return '';
}

function resolveCustomVersionSpriteCandidates(identifier = '', shiny = false) {
  const base = getCustomVersionSpritePackPath();
  if (!base || !identifier) return [];
  const gen = Number(detectedVersionInfo?.gen || 0);
  const localPokemon = getLocalPokemonEntry(identifier);
  const sourceNames = uniqueNonEmpty([
    identifier,
    localPokemon?.slug,
    localPokemon?.nameEn,
    localPokemon?.nameFr,
  ]);
  const slugCandidates = uniqueNonEmpty(sourceNames.flatMap(name => {
    const rawCandidates = uniqueNonEmpty([
      ...getPokemonSlugCandidates(name),
      moveSlug(name),
    ]);
    return rawCandidates.flatMap(expandAnimeLibrarySlugAliases);
  }));
  const candidates = [];
  const extensions = gen === 5 ? ['gif', 'png'] : ['png', 'gif'];
  slugCandidates.forEach(slug => {
    extensions.forEach(ext => {
      if (shiny) candidates.push(`${base}/${slug}-shiny.${ext}`);
      candidates.push(`${base}/${slug}.${ext}`);
    });
  });
  return uniqueNonEmpty(candidates);
}

function getSpriteLookupId(spriteId, slugOrIdentifier = '') {
  const directId = Number(spriteId);
  if (Number.isFinite(directId) && directId > 0) return directId;
  const localEntry = getLocalPokemonEntry(slugOrIdentifier);
  const localId = Number(localEntry?.id || 0);
  return Number.isFinite(localId) && localId > 0 ? localId : null;
}

function buildPokemonSpriteCandidateUrls({
  spriteId = null,
  slug = '',
  identifier = '',
  shiny = false,
  formId = 0,
  remoteSpriteUrls = []
} = {}) {
  const baseIdentifier = slug || identifier || '';
  const resolvedId = getSpriteLookupId(spriteId, baseIdentifier);
  const versionPackUrls = baseIdentifier
    ? resolveCustomVersionSpriteCandidates(baseIdentifier, shiny)
    : [];
  const staticUrls = resolvedId
    ? resolveLocalPokemonSpriteCandidates(resolvedId, shiny, baseIdentifier, formId, SPRITE_MODE_VERSION)
    : [];
  const modern3dUrls = resolvedId
    ? resolveLocalPokemonModern3DCandidates(resolvedId, shiny, baseIdentifier, formId)
    : [];
  const animeLibraryUrls = baseIdentifier
    ? resolveLocalAnimeLibrarySpriteCandidates(baseIdentifier, shiny)
    : [];
  const remoteUrls = Array.isArray(remoteSpriteUrls)
    ? uniqueNonEmpty(remoteSpriteUrls)
    : uniqueNonEmpty([remoteSpriteUrls]);
  if (isModern3DSpriteMode()) {
    return uniqueNonEmpty([
      ...modern3dUrls,
      ...versionPackUrls,
      ...staticUrls,
      ...remoteUrls,
      ...animeLibraryUrls,
    ]);
  }
  if (isStaticSpriteMode()) {
    return uniqueNonEmpty([
      ...versionPackUrls,
      ...staticUrls,
      ...modern3dUrls,
      ...remoteUrls,
      ...animeLibraryUrls,
    ]);
  }
  const animatedUrls = baseIdentifier ? getAnimatedSpriteCandidates(baseIdentifier, shiny) : [];
  return uniqueNonEmpty([
    ...animatedUrls,
    ...versionPackUrls,
    ...staticUrls,
    ...modern3dUrls,
    ...remoteUrls,
    ...animeLibraryUrls,
  ]);
}

function resolveLocalItemSpriteCandidates(identifier) {
  const entry = getLocalItemEntry(identifier);
  const canonical = getCanonicalItemMeta(identifier);
  const candidates = uniqueNonEmpty([
    entry?.sprite,
    ...(canonical?.slugCandidates || []).map(key => `${getSpriteBasePath()}/items/${key}.png`),
  ]);
  return candidates;
}

function setSpriteMode(mode) {
  const nextMode = [SPRITE_MODE_AUTO, SPRITE_MODE_VERSION, SPRITE_MODE_SHOWDOWN_ANIMATED].includes(mode)
    ? mode
    : SPRITE_MODE_AUTO;
  spriteMode = nextMode;
  safeLocalStorageSet(STORAGE_KEYS.spriteMode, spriteMode);
  if (selectedName) renderDetail(selectedName, groupedTrainers[selectedName], selectedVersion);
  syncSpriteModeToggle();
}

function toggleSpriteMode() {
  return setSpriteMode(isAnimatedSpriteMode() ? SPRITE_MODE_VERSION : SPRITE_MODE_SHOWDOWN_ANIMATED);
}

function syncSpriteModeToggle() {
  const spriteCheck = document.getElementById('sprite-mode-check');
  if (spriteCheck) spriteCheck.className = 'dd-check ' + (isAnimatedSpriteMode() ? 'on' : 'off');
}

function setTeamLayout(layout) {
  teamLayout = layout === TEAM_LAYOUT_HORIZONTAL ? TEAM_LAYOUT_HORIZONTAL : TEAM_LAYOUT_VERTICAL;
  safeLocalStorageSet(STORAGE_KEYS.teamLayout, teamLayout);
  syncTeamLayoutToggle();
  if (selectedName) renderDetail(selectedName, groupedTrainers[selectedName], selectedVersion);
}

function toggleTeamLayout() {
  setTeamLayout(teamLayout === TEAM_LAYOUT_HORIZONTAL ? TEAM_LAYOUT_VERTICAL : TEAM_LAYOUT_HORIZONTAL);
}

function syncTeamLayoutToggle() {
  const layoutCheck = document.getElementById('toggle-team-layout');
  if (layoutCheck) layoutCheck.className = 'dd-check ' + (teamLayout === TEAM_LAYOUT_HORIZONTAL ? 'on' : 'off');
}
const UI_TEXT = {
  fr: {
    emptyStats: 'Aucun fichier chargé',
    emptyList: '',
    emptyDetail: 'Sélectionne un<br>dresseur pour voir<br>son équipe',
    noResults: 'Aucun résultat',
    noParty: '⚠️ Aucun Pokémon dans cette équipe',
    pokeSearchPlaceholder: 'Chercher un Pokémon dans les équipes de ce dresseur…',
    pokeSearchNone: 'Aucune équipe correspondante',
    teamLabel: 'Équipe',
    teamCount: 'équipes',
    trainerCount: 'dresseurs',
    attacks: 'Attaques',
    estimatedMoves: '⚡ 4 dernières attaques par niveau',
    realStats: 'Stats',
    weaknesses: 'Faiblesses',
    resistances: 'Résistances',
    immunities: 'Immunités',
    probableAbility: 'Talents probables',
  },
  en: {
    emptyStats: 'No file loaded',
    emptyList: '',
    emptyDetail: 'Select a<br>trainer to view<br>their team',
    noResults: 'No results',
    noParty: '⚠️ No Pokémon in this team',
    pokeSearchPlaceholder: 'Search a Pokémon across this trainer’s teams…',
    pokeSearchNone: 'No matching team',
    teamLabel: 'Team',
    teamCount: 'teams',
    trainerCount: 'trainers',
    attacks: 'Moves',
    estimatedMoves: '⚡ 4 latest level-up moves',
    realStats: 'Stats',
    weaknesses: 'Weaknesses',
    resistances: 'Resistances',
    immunities: 'Immunities',
    probableAbility: 'Likely abilities',
  },
};
function t(key) {
  return UI_TEXT[currentLang]?.[key] || UI_TEXT.fr[key] || key;
}
function safeLocalStorageGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeLocalStorageSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) {}
}
function asciiFromBytes(bytes) {
  return Array.from(bytes || []).map(b => (b >= 32 && b <= 126) ? String.fromCharCode(b) : '').join('').replace(/\0/g, '').trim();
}
function detectRegionFromRomFilename(filename = '') {
  const upper = String(filename || '').toUpperCase();
  if (/\bFRANCE\b|\(F\)|\bFRA\b|VERSION /i.test(filename)) return 'fr';
  if (/\bUSA\b|\(U\)/i.test(filename)) return 'usa';
  if (/\bEUROPE\b|\(E\)/i.test(filename)) return 'eu';
  return 'unknown';
}
function pickBestVanillaEntryForRom(idCode, filename = '') {
  const code = String(idCode || '').toUpperCase();
  if (!code) return null;
  const regionHint = detectRegionFromRomFilename(filename);
  const all = getVanillaManifest().filter(row => String(row.idCode || '').toUpperCase() === code);
  if (!all.length) return null;
  const byRegion = all.filter(row => (row.regions || []).includes(regionHint));
  if (byRegion.length) return byRegion[0];
  const byLang = regionHint === 'fr'
    ? all.filter(row => row.language === 'fr')
    : all.filter(row => row.language === 'en');
  if (byLang.length) return byLang[0];
  return all[0];
}
function bytesToHexLE(bytes) {
  return Array.from(bytes || []).reverse().map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
}
function read3DSRomMeta(buffer, filename = '') {
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 0x120) return null;
  const magicAt100 = asciiFromBytes(bytes.slice(0x100, 0x104));
  // .3ds files are NCSD containers whose first game partition usually starts at 0x4000.
  // .cxi files are direct NCCH images, and their magic sits at 0x100 from the file start.
  const cxiOffset = magicAt100 === 'NCSD' ? 0x4000 : (magicAt100 === 'NCCH' ? 0 : -1);
  if (cxiOffset < 0 || bytes.length < cxiOffset + 0x160) return null;
  const ncchMagic = asciiFromBytes(bytes.slice(cxiOffset + 0x100, cxiOffset + 0x104));
  if (ncchMagic !== 'NCCH') return null;
  const productCode = asciiFromBytes(bytes.slice(cxiOffset + 0x150, cxiOffset + 0x160)).replace(/\0/g, '').trim().toUpperCase();
  const titleId = bytesToHexLE(bytes.slice(cxiOffset + 0x118, cxiOffset + 0x120));
  return { productCode, titleId, cxiOffset };
}
function pickBestVanilla3DSEntryForRom(productCode, titleId, filename = '') {
  const code = String(productCode || '').toUpperCase().trim();
  const tid = String(titleId || '').toUpperCase().trim();
  const regionHint = detectRegionFromRomFilename(filename);
  let all = getVanillaManifest().filter(row =>
    (code && String(row.productCode || row.idCode || '').toUpperCase() === code) ||
    (tid && String(row.titleId || '').toUpperCase() === tid)
  );
  if (!all.length) return null;
  const byRegion = all.filter(row => (row.regions || []).includes(regionHint));
  if (byRegion.length) all = byRegion;
  const byLang = regionHint === 'fr'
    ? all.filter(row => row.language === 'fr')
    : all.filter(row => row.language === 'en');
  if (byLang.length) all = byLang;
  return all[0] || null;
}
const VANILLA_GAME_ORDER = ['diamond','pearl','platinum','heartgold','soulsilver','black','white','black2','white2','x','y','omegaruby','alphasapphire','sun','moon','ultrasun','ultramoon','sword','shield','brilliantdiamond','shiningpearl','luminescentdiamond','scarlet','violet'];
const VANILLA_REGION_ORDER = ['fr','eu','usa','global','bd','sp','unknown'];
const VANILLA_UI_GAME_ALIAS = {
  luminescentpearl: 'luminescentdiamond',
};
const VANILLA_GAME_LABELS = {
  diamond: { fr: 'Pokémon Diamant', en: 'Pokémon Diamond', icon: '💎' },
  pearl: { fr: 'Pokémon Perle', en: 'Pokémon Pearl', icon: '🫧' },
  platinum: { fr: 'Pokémon Platine', en: 'Pokémon Platinum', icon: '✨' },
  heartgold: { fr: 'Pokémon Or HeartGold', en: 'Pokémon HeartGold', icon: '🟡' },
  soulsilver: { fr: 'Pokémon Argent SoulSilver', en: 'Pokémon SoulSilver', icon: '⚪' },
  black: { fr: 'Pokémon Noir', en: 'Pokémon Black', icon: '⚫' },
  white: { fr: 'Pokémon Blanc', en: 'Pokémon White', icon: '⚪' },
  black2: { fr: 'Pokémon Noir 2', en: 'Pokémon Black 2', icon: '⬛' },
  white2: { fr: 'Pokémon Blanc 2', en: 'Pokémon White 2', icon: '⬜' },
  x: { fr: 'Pokémon X', en: 'Pokémon X', icon: '❎' },
  y: { fr: 'Pokémon Y', en: 'Pokémon Y', icon: '🇾' },
  omegaruby: { fr: 'Pokémon Rubis Oméga', en: 'Pokémon Omega Ruby', icon: '🔴' },
  alphasapphire: { fr: 'Pokémon Saphir Alpha', en: 'Pokémon Alpha Sapphire', icon: '🔵' },
  sun: { fr: 'Pokémon Soleil', en: 'Pokémon Sun', icon: '☀️' },
  moon: { fr: 'Pokémon Lune', en: 'Pokémon Moon', icon: '🌙' },
  ultrasun: { fr: 'Pokémon Ultra-Soleil', en: 'Pokémon Ultra Sun', icon: '🌞' },
  ultramoon: { fr: 'Pokémon Ultra-Lune', en: 'Pokémon Ultra Moon', icon: '🌚' },
  sword: { fr: 'Pokémon Épée', en: 'Pokémon Sword', icon: '🗡️' },
  shield: { fr: 'Pokémon Bouclier', en: 'Pokémon Shield', icon: '🛡️' },
  brilliantdiamond: { fr: 'Pokémon Diamant Étincelant', en: 'Pokémon Brilliant Diamond', icon: '💠' },
  shiningpearl: { fr: 'Pokémon Perle Scintillante', en: 'Pokémon Shining Pearl', icon: '🪩' },
  luminescentdiamond: { fr: 'Pokémon Luminescent', en: 'Pokémon Luminescent', icon: '✨' },
  luminescentpearl: { fr: 'Pokémon Luminescent', en: 'Pokémon Luminescent', icon: '✨' },
  scarlet: { fr: 'Pokémon Écarlate', en: 'Pokémon Scarlet', icon: '🔺' },
  violet: { fr: 'Pokémon Violet', en: 'Pokémon Violet', icon: '🟣' },
};
let vanillaMenuGame = '';

function getVanillaUiGameKey(game) {
  const key = String(game || '').toLowerCase();
  return VANILLA_UI_GAME_ALIAS[key] || key;
}

function getVanillaManifest() {
  const manifest = Array.isArray(window.VANILLA_MANIFEST) ? window.VANILLA_MANIFEST : [];
  if (manifest.length) return manifest;
  return Array.isArray(window.__FALLBACK_VANILLA_MANIFEST) ? window.__FALLBACK_VANILLA_MANIFEST : [];
}

let vanillaManifestHydrationPromise = null;
async function ensureVanillaManifestHydrated() {
  if (vanillaManifestHydrationPromise) return vanillaManifestHydrationPromise;
  vanillaManifestHydrationPromise = (async () => {
    try {
      const response = await fetch('./vanilla_exports/manifest.json', { cache: 'no-store' });
      if (!response.ok) throw new Error(`manifest.json ${response.status}`);
      const fetched = await response.json();
      if (!Array.isArray(fetched) || !fetched.length) return getVanillaManifest();
      const current = Array.isArray(window.VANILLA_MANIFEST) ? window.VANILLA_MANIFEST : [];
      const merged = [...current];
      const seen = new Set(current.map(row => String(row?.slug || '')));
      for (const row of fetched) {
        const slug = String(row?.slug || '');
        if (!slug || seen.has(slug)) continue;
        merged.push(row);
        seen.add(slug);
      }
      window.__FALLBACK_VANILLA_MANIFEST = merged;
      return merged;
    } catch (error) {
      window.__FALLBACK_VANILLA_MANIFEST = Array.isArray(window.VANILLA_MANIFEST) ? window.VANILLA_MANIFEST : [];
      return window.__FALLBACK_VANILLA_MANIFEST;
    }
  })();
  return vanillaManifestHydrationPromise;
}
function getVanillaGameLabel(game) {
  return VANILLA_GAME_LABELS[game]?.[currentLang] || VANILLA_GAME_LABELS[game]?.fr || game;
}
function getVanillaRegionLabel(region) {
  const labels = {
    fr: { fr: 'FR', en: 'FR' },
    eu: { fr: 'EU', en: 'EU' },
    usa: { fr: 'USA', en: 'USA' },
    global: { fr: 'Global', en: 'Global' },
    bd: { fr: 'BD', en: 'BD' },
    sp: { fr: 'SP', en: 'SP' },
    unknown: { fr: 'Autre', en: 'Other' },
  };
  return labels[region]?.[currentLang] || region.toUpperCase();
}
function getVanillaCatalog() {
  const grouped = {};
  for (const row of getVanillaManifest()) {
    const rawGame = String(row.game || '').toLowerCase();
    if (rawGame === 'luminescentpearl') continue;
    const game = getVanillaUiGameKey(rawGame);
    if (!game) continue;
    (grouped[game] ||= []).push(row);
  }
  for (const game of Object.keys(grouped)) {
    grouped[game].sort((a, b) => {
      const ra = Math.min(...(a.regions || ['unknown']).map(r => {
        const idx = VANILLA_REGION_ORDER.indexOf(String(r).toLowerCase());
        return idx >= 0 ? idx : 99;
      }));
      const rb = Math.min(...(b.regions || ['unknown']).map(r => {
        const idx = VANILLA_REGION_ORDER.indexOf(String(r).toLowerCase());
        return idx >= 0 ? idx : 99;
      }));
      if (ra !== rb) return ra - rb;
      if ((a.language || '') !== (b.language || '')) {
        return String(a.language || 'zz').localeCompare(String(b.language || 'zz'));
      }
      return String(a.slug || '').localeCompare(String(b.slug || ''));
    });
  }
  return grouped;
}
function renderVanillaOptionsMenu() {
  const slot = document.getElementById('vanilla-options-slot');
  if (!slot) return;
  const catalog = getVanillaCatalog();
  const games = VANILLA_GAME_ORDER.filter(g => catalog[g]?.length);
  slot.innerHTML = games.map(game => {
    const active = vanillaMenuGame === game;
    return `<button class="dd-file-btn" style="font-size:10px;padding:8px 10px;margin-bottom:6px;${active?'border-color:var(--accent);box-shadow:0 0 12px var(--glow);':''}" onclick="showVanillaBrowser('${game}')">${VANILLA_GAME_LABELS[game]?.icon || '📘'} ${getVanillaGameLabel(game)}</button>`;
  }).join('');
}

function builtInVanillaButtonsHtml() {
  const catalog = getVanillaCatalog();
  const games = VANILLA_GAME_ORDER.filter(g => catalog[g]?.length);
  const gameButtons = games.map(game => {
    const active = vanillaMenuGame === game;
    return `<button class="dd-file-btn" style="font-size:10px;padding:8px 10px;width:100%;${active?'border-color:var(--accent);box-shadow:0 0 12px var(--glow);':''}" onclick="showVanillaBrowser('${game}')">${VANILLA_GAME_LABELS[game]?.icon || '📘'} ${getVanillaGameLabel(game)}</button>`;
  }).join('');
  const selectedEntries = vanillaMenuGame && catalog[vanillaMenuGame] ? catalog[vanillaMenuGame] : [];
  const regionButtons = selectedEntries.flatMap(row => (row.regions || ['unknown']).map(region =>
    `<button class="dd-file-btn" style="font-size:10px;padding:8px 10px" onclick="loadBuiltInVanilla('${row.slug}::${region}')">${getVanillaRegionLabel(region)} · ${row.trainerCount} ${currentLang === 'fr' ? 'dresseurs' : 'trainers'}</button>`
  )).join('');
  return `<div style="display:grid;grid-template-columns:repeat(2,minmax(180px,1fr));gap:8px;justify-content:center;align-items:stretch;margin-top:12px;width:min(760px,100%)">${gameButtons}</div>${regionButtons ? `<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:10px">${regionButtons}</div>` : ''}`;
}

function renderUsageGuide() {
  const copy = currentLang === 'fr'
    ? {
        eyebrow: 'Comment utiliser le site',
        title: 'PokéFeur',
        intro: 'Bienvenue sur PokéFeur, un viewer de dresseurs Pokémon pensé pour charger des logs, des ROMs vanilla ou randomisées, et visualiser rapidement les équipes, niveaux, sprites et infos utiles avant une run.',
        sections: [
          {
            title: 'Jeux pris en charge',
            items: [
              'Jeux principaux DS: Diamant, Perle, Platine, HeartGold, SoulSilver, Noir, Blanc, Noir 2, Blanc 2.',
              'Jeux principaux 3DS: X, Y, Rubis Oméga, Saphir Alpha, Soleil, Lune, Ultra-Soleil, Ultra-Lune.',
              'Jeux principaux Switch: Diamant Étincelant, Perle Scintillante, Épée, Bouclier, Écarlate, Violet.',
              'Luminescent est aussi pris en charge côté BDSP.',
            ],
          },
          {
            title: 'Roms DS / 3DS',
            items: [
              `Utilise en priorité <a href="https://github.com/Ajarmar/universal-pokemon-randomizer-zx/releases" target="_blank" rel="noreferrer">Universal Pokémon Randomizer ZX</a>.`,
              'Tu peux charger un .log, un .nds, un .3ds ou un .cxi. Je conseille de tester le log et la ROM: selon les paramètres du randomizer, l’un ou l’autre sera mieux pris en charge.',
              'L’option Better Movesets est recommandée.',
              'En général, le viewer gère les Pokémon randomisés, les types randomisés et les types d’attaques randomisés. La puissance et les PP randomisés restent à vérifier selon les cas.',
            ],
          },
          {
            title: 'Roms Switch',
            items: [
              `BDSP / Luminescent: <a href="https://github.com/Nifyr/Imposters-Ordeal" target="_blank" rel="noreferrer">Imposters Ordeal</a>.`,
              `Épée / Bouclier: base de référence <a href="https://gamebanana.com/mods/51349" target="_blank" rel="noreferrer">GameBanana mod</a>. D’autres randomizers devraient aussi fonctionner tant que tu importes un romfs.`,
              `Écarlate / Violet: <a href="https://github.com/Gonzalooo/Pokemon-Randomizer" target="_blank" rel="noreferrer">Pokemon-Randomizer</a>.`,
              'Tu peux charger un dossier ou un .rar avec les romfs dedans, tant que tu sélectionnes le bon jeu.',
            ],
          },
          {
            title: 'Conseils',
            items: [
              'Tu peux importer tes propres ROMs vanilla, mais la page Vanilla est généralement plus pratique pour ça.',
              'La recherche dresseur attend surtout le nom du dresseur. Les préfixes et classes ne marchent pas toujours.',
              'La recherche Pokémon accepte aussi le niveau: par exemple Pikachu 50 montre les Pikachu niveau 50 dans les équipes.',
              'Si un dresseur a un nom ou un portrait raté, essaye une recherche Pokémon + niveau pour le retrouver.',
              'Les portraits sont souvent plutôt accurate, mais il peut rester des erreurs. N’hésite pas à les signaler.',
            ],
          },
        ],
        warning: 'Ne te fie pas à tout à 100 %. Il peut rester des erreurs, donc prudence pour vos Nuzlockes.',
        footer: `<span>Bugs, retours et recommandations: <a href="https://discord.gg/qp4U6Hb6sM" target="_blank" rel="noreferrer">rejoins le Discord</a>.</span><span>Made with love par Jonatan, stop the war ❤️</span>`,
      }
    : {
        eyebrow: 'How to use the site',
        title: 'PokéFeur',
        intro: 'Welcome to PokéFeur, a Pokémon trainer viewer built to load logs, vanilla or randomized ROMs, and quickly inspect trainer teams, levels, sprites, and useful data before a run.',
        sections: [
          {
            title: 'Supported games',
            items: [
              'Mainline DS games: Diamond, Pearl, Platinum, HeartGold, SoulSilver, Black, White, Black 2, White 2.',
              'Mainline 3DS games: X, Y, Omega Ruby, Alpha Sapphire, Sun, Moon, Ultra Sun, Ultra Moon.',
              'Mainline Switch games: Brilliant Diamond, Shining Pearl, Sword, Shield, Scarlet, Violet.',
              'Luminescent is also supported on the BDSP side.',
            ],
          },
          {
            title: 'DS / 3DS roms',
            items: [
              `Use <a href="https://github.com/Ajarmar/universal-pokemon-randomizer-zx/releases" target="_blank" rel="noreferrer">Universal Pokémon Randomizer ZX</a> first.`,
              'You can load a .log, .nds, .3ds, or .cxi. I recommend testing both the log and the ROM, because support depends on the randomizer settings that were used.',
              'Better Movesets is recommended.',
              'In most cases the viewer handles randomized Pokémon, randomized types, and randomized move types. Randomized move power and PP still need case-by-case checking.',
            ],
          },
          {
            title: 'Switch roms',
            items: [
              `BDSP / Luminescent: <a href="https://github.com/Nifyr/Imposters-Ordeal" target="_blank" rel="noreferrer">Imposters Ordeal</a>.`,
              `Sword / Shield: reference base on <a href="https://gamebanana.com/mods/51349" target="_blank" rel="noreferrer">GameBanana mod</a>. Other randomizers should also work as long as you import a romfs.`,
              `Scarlet / Violet: <a href="https://github.com/Gonzalooo/Pokemon-Randomizer" target="_blank" rel="noreferrer">Pokemon-Randomizer</a>.`,
              'You can load a folder or a .rar containing romfs files, as long as you select the correct game.',
            ],
          },
          {
            title: 'Tips',
            items: [
              'You can import your own vanilla ROMs, but the Vanilla page is usually the better place for that.',
              'Trainer search mostly expects the trainer name. Prefixes and trainer classes do not always work.',
              'Pokémon search also supports a level, for example Pikachu 50 to find every level 50 Pikachu in teams.',
              'If a trainer has a wrong name or portrait, try a Pokémon + level search to find the team anyway.',
              'Trainer portraits are usually fairly accurate, but some mistakes can still happen. Please report them if you spot any.',
            ],
          },
        ],
        warning: 'Do not trust everything blindly. Mistakes can still exist, so be careful with your Nuzlockes.',
        footer: `<span>Bug reports and recommendations: <a href="https://discord.gg/qp4U6Hb6sM" target="_blank" rel="noreferrer">join the Discord</a>.</span><span>Made with love by Jonatan, stop the war ❤️</span>`,
      };
  const sectionsHtml = copy.sections.map(section => `
    <section class="guide-section">
      <h3>${section.title}</h3>
      <ul class="guide-list">${section.items.map(item => `<li>${item}</li>`).join('')}</ul>
    </section>
  `).join('');
  return `
    <div class="guide-panel">
      <div class="guide-eyebrow">${copy.eyebrow}</div>
      <h2>${copy.title}</h2>
      <p class="guide-intro">${copy.intro}</p>
      <div class="guide-columns">${sectionsHtml}</div>
      <div class="guide-warning">${copy.warning}</div>
      <div class="guide-footer">${copy.footer}</div>
    </div>
  `;
}

function renderEmptyDetail() {
  if (document.body.dataset.startView === 'vanilla') {
    return `<div class="empty"><div class="ball">📚</div><p>${currentLang === 'fr' ? 'Choisis un jeu vanilla<br>puis une version' : 'Choose a vanilla game<br>then a version'}</p></div>`;
  }
  return renderUsageGuide();
}

function renderEmptyTrainerList() {
  return `<div style="height:200px"></div>`;
}
function saveLastLoadedFile(text, filename) {
  return;
}

function saveLastBuiltInSource(key) {
  return;
}

// ── UI HELPERS ────────────────────────────────────────────────────────────────
function toggleDropdown() {
  const dd = document.getElementById('options-dropdown');
  dd.classList.toggle('open');
}
function withLangQuery(url, lang = currentLang) {
  const target = new URL(url, window.location.href);
  target.searchParams.set('lang', lang === 'fr' ? 'fr' : 'en');
  return `${target.pathname}${target.search}`;
}
function navigateWithCurrentLang(url) {
  window.location.href = withLangQuery(url, currentLang);
}
function syncSidebarLoadersVisibility() {
  const sidebarTools = document.getElementById('sidebar-tools');
  if (!sidebarTools) return;
  sidebarTools.classList.toggle('hidden', Object.keys(groupedTrainers || {}).length > 0);
}
document.addEventListener('click', e => {
  const dd = document.getElementById('options-dropdown');
  if (dd && !dd.contains(e.target)) dd.classList.remove('open');
});

function resetAll() {
  groupedTrainers = {}; selectedName = null; selectedVersion = 0;
  detectedGen = null; isLumiRom = false;
  detectedVersionInfo = { name: 'Pokémon', gen: 4, spriteGen: 'platinum' };
  detectedVersionMeta = null;
  resetTrainerDisplayCaches();
  clearTimeout(sidebarRenderDebounceTimer);
  trainerPrefetchCache.clear();
  trainerSearchQuery = '';
  pokemonSearchQuery = '';
  resetRomRuntimeLookups();
  document.getElementById('search-input').value = '';
  const pokemonSearchEl = document.getElementById('search-pokemon-input');
  const trainerSearchLabel = document.getElementById('search-trainer-label');
  const pokemonSearchLabel = document.getElementById('search-pokemon-label');
  if (pokemonSearchEl) pokemonSearchEl.value = '';
  document.getElementById('search-input').placeholder = currentLang === 'fr' ? 'Rechercher un dresseur…' : 'Search a trainer…';
  if (pokemonSearchEl) pokemonSearchEl.placeholder = currentLang === 'fr' ? 'Rechercher un Pokémon…' : 'Search a Pokémon…';
  if (trainerSearchLabel) trainerSearchLabel.textContent = currentLang === 'fr' ? 'Dresseur' : 'Trainer';
  if (pokemonSearchLabel) pokemonSearchLabel.textContent = currentLang === 'fr' ? 'Pokémon' : 'Pokémon';
  document.getElementById('stats-text').innerHTML = t('emptyStats');
  document.getElementById('trainer-list').innerHTML = renderEmptyTrainerList();
  document.getElementById('detail').innerHTML = renderEmptyDetail();
  const genBadge = document.getElementById('gen-badge');
  if (genBadge) { genBadge.textContent = ''; genBadge.style.display = 'none'; }
  renderVanillaOptionsMenu();
  syncSpriteModeToggle();
  syncTeamLayoutToggle();
  syncSidebarLoadersVisibility();
  hideGlobalLoading();
}

function resetCurrentView() {
  resetAll();
  if (document.body.dataset.startView === 'vanilla') {
    showVanillaBrowser(vanillaMenuGame || undefined);
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function showGlobalLoading(title = '', subtitle = '') {
  const overlay = document.getElementById('global-loading');
  const titleEl = document.getElementById('global-loading-title');
  const subEl = document.getElementById('global-loading-sub');
  const stageEl = document.getElementById('global-loading-stage');
  if (titleEl) titleEl.textContent = title || (currentLang === 'fr' ? 'Chargement' : 'Loading');
  if (subEl) subEl.textContent = subtitle || (currentLang === 'fr' ? 'Préparation des données…' : 'Preparing data…');
  if (stageEl) stageEl.textContent = '';
  setGlobalLoadingProgress(0, '');
  if (overlay) overlay.classList.add('show');
}

function setGlobalLoadingProgress(percent = 0, stage = '') {
  const fill = document.getElementById('global-loading-progress-fill');
  const text = document.getElementById('global-loading-progress-text');
  const stageEl = document.getElementById('global-loading-stage');
  const safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
  if (fill) fill.style.width = `${safePercent}%`;
  if (text) text.textContent = `${Math.round(safePercent)}%`;
  if (stageEl) stageEl.textContent = stage || '';
}

function hideGlobalLoading() {
  const overlay = document.getElementById('global-loading');
  if (overlay) overlay.classList.remove('show');
}

function waitForLoadingFrame() {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      setTimeout(resolve, 0);
    });
  });
}

function setLang(lang) {
  currentLang = lang;
  document.body.className = 'lang-' + lang;
  document.documentElement.lang = lang;
  document.getElementById('btn-fr').className = 'dd-toggle' + (lang==='fr'?' active':'');
  document.getElementById('btn-en').className = 'dd-toggle' + (lang==='en'?' active':'');
  safeLocalStorageSet(STORAGE_KEYS.lang, lang);
  try {
    window.history.replaceState({}, '', withLangQuery(window.location.pathname + window.location.search, lang));
  } catch (e) {}
  document.getElementById('search-input').placeholder = lang === 'fr' ? 'Rechercher un dresseur…' : 'Search a trainer…';
  const pokemonSearchEl = document.getElementById('search-pokemon-input');
  const trainerSearchLabel = document.getElementById('search-trainer-label');
  const pokemonSearchLabel = document.getElementById('search-pokemon-label');
  if (pokemonSearchEl) pokemonSearchEl.placeholder = lang === 'fr' ? 'Rechercher un Pokémon…' : 'Search a Pokémon…';
  if (trainerSearchLabel) trainerSearchLabel.textContent = lang === 'fr' ? 'Dresseur' : 'Trainer';
  if (pokemonSearchLabel) pokemonSearchLabel.textContent = lang === 'fr' ? 'Pokémon' : 'Pokémon';
  const loadingVisible = document.getElementById('global-loading')?.classList.contains('show');
  if (!Object.keys(groupedTrainers).length && !loadingVisible) {
    resetCurrentView();
    return;
  }
  renderVanillaOptionsMenu();
  syncSpriteModeToggle();
  syncTeamLayoutToggle();
  resetTrainerDisplayCaches();
  if (Object.keys(groupedTrainers).length) buildSidebarTrainerIndex();
  renderList();
  if (selectedName) renderDetail(selectedName, groupedTrainers[selectedName], selectedVersion);
}

function toggleLearnset() {
  learnsetEnabled = !learnsetEnabled;
  const check = document.getElementById('learnset-check');
  if (check) check.className = 'dd-check ' + (learnsetEnabled ? 'on' : 'off');
  if (selectedName) renderDetail(selectedName, groupedTrainers[selectedName], selectedVersion);
}

function toggleLumiLearnsetFallback() {
  toggleLearnset();
}

function toggleSection(section) {
  if (section === 'ivs') showIVs = !showIVs;
  if (section === 'evs') showEVs = !showEVs;
  if (section === 'stats') showStats = !showStats;
  const on = section === 'ivs' ? showIVs : section === 'evs' ? showEVs : showStats;
  const check = document.getElementById(`toggle-${section}`);
  if (check) check.className = 'dd-check ' + (on ? 'on' : 'off');
  document.querySelectorAll(`.section-${section}`).forEach(el => { el.style.display = on ? '' : 'none'; });
}

function toggleAppliedStatsMode() {
  // Checked = include IVs/EVs in the displayed stat calculation.
  // Unchecked = show the same stats without IV/EV contribution.
  useAppliedStats = !useAppliedStats;
  const check = document.getElementById('toggle-applied-stats');
  if (check) check.className = 'dd-check ' + (useAppliedStats ? 'on' : 'off');
  if (selectedName) renderDetail(selectedName, groupedTrainers[selectedName], selectedVersion);
}

// ── CALC PANEL ────────────────────────────────────────────────────────────────
let calcOpen = false;
function toggleCalc() {
  calcOpen = !calcOpen;
  document.getElementById('calc-panel').classList.toggle('open', calcOpen);
  // Update version badge in calc
  const vb = document.getElementById('calc-version-info');
  if (vb) {
    if (isLumiRom) { vb.textContent = '⭐ Luminescent Platinum — stats modifiées actives'; vb.style.display = 'inline-block'; }
    else if (detectedGen) { vb.textContent = '📍 ' + detectedGen; vb.style.display = 'inline-block'; }
    else vb.style.display = 'none';
  }
}

// Calc pokemon data cache
const calcCache = {};
async function getCalcPokemon(name) {
  const key = name.toLowerCase().trim();
  if (calcCache[key]) return calcCache[key];
  // 1. Lumi DB
  const lumiData = getLumiStats(name);
  if (lumiData) {
    const vanilla = await fetchPokemonData(name);
    calcCache[key] = { ...vanilla, baseStats: { hp: lumiData.hp, atk: lumiData.atk, def: lumiData.def, spAtk: lumiData.spAtk, spDef: lumiData.spDef, spd: lumiData.spd }, types: [lumiData.type1, lumiData.type2].filter(Boolean), _fromLumi: true };
    return calcCache[key];
  }
  // 2. PokeAPI
  const data = await fetchPokemonData(name);
  calcCache[key] = data;
  return data;
}

async function onAtkPokemonChange() {
  const name = document.getElementById('atk-pokemon').value.trim();
  if (name.length < 3) return;
  await updateCalcStats('atk');
}
async function onDefPokemonChange() {
  const name = document.getElementById('def-pokemon').value.trim();
  if (name.length < 3) return;
  await updateCalcStats('def');
}

let calcDebounce = {};
async function updateCalcStats(side) {
  clearTimeout(calcDebounce[side]);
  calcDebounce[side] = setTimeout(async () => {
    const pokeEl = document.getElementById(`${side}-pokemon`);
    if (!pokeEl) return;
    const name = pokeEl.value.trim();
    if (!name) return;
    const data = await getCalcPokemon(name);
    if (!data || !data.baseStats) return;

    const nature = document.getElementById(`${side}-nature`).value;
    const level = parseInt(document.getElementById(`${side}-level`).value) || 100;

    if (side === 'atk') {
      const iv = parseInt(document.getElementById('atk-iv').value) || 31;
      const ev = parseInt(document.getElementById('atk-ev').value) || 0;
      const atkStat = calcOneStat(data.baseStats.atk || data.baseStats.attack || 0, iv, ev, nature, 'atk', level);
      document.getElementById('atk-stat-display').value = atkStat;
      // Show preview
      showStatPreview('atk', data, nature, level, { atk: parseInt(document.getElementById('atk-iv').value)||31 }, { atk: parseInt(document.getElementById('atk-ev').value)||0 });
    } else {
      const iv = parseInt(document.getElementById('def-iv').value) || 31;
      const ev = parseInt(document.getElementById('def-ev').value) || 0;
      const hpIv = parseInt(document.getElementById('def-hp-iv').value) || 31;
      const hpEv = parseInt(document.getElementById('def-hp-ev').value) || 0;
      const movecat = document.getElementById('move-category').value;
      const defKey = movecat === 'special' ? 'spDef' : 'def';
      const defStat = calcOneStat(data.baseStats[defKey] || 0, iv, ev, nature, defKey, level);
      const hpStat = calcHp(data.baseStats.hp || 0, hpIv, hpEv, level);
      document.getElementById('def-stat-display').value = defStat;
      document.getElementById('def-hp-display').value = hpStat;
      showStatPreview('def', data, nature, level, { def: iv, hp: hpIv }, { def: ev, hp: hpEv });
    }
    // Auto type effectiveness
    autoTypeEffectiveness();
  }, 400);
}

function showStatPreview(side, data, nature, level, ivs, evs) {
  const el = document.getElementById(`${side}-stats-preview`);
  if (!el || !data.baseStats) return;
  const bs = data.baseStats;
  const lumiData = isLumiRom ? getLumiStats(document.getElementById(`${side}-pokemon`).value) : null;
  const LABELS = { hp:'HP', atk:'ATK', def:'DEF', spAtk:'SpA', spDef:'SpD', spd:'SPD' };
  let html = `<div style="font-size:9px;color:var(--muted);margin-bottom:4px;font-family:'Exo 2',sans-serif;font-weight:800;">${isLumiRom && lumiData ? '⭐ Stats Lumi' : '📊 Bases'}</div>`;
  html += Object.entries(LABELS).map(([k, lbl]) => {
    const base = bs[k] || 0;
    const vanilla = VANILLA_STATS[data.nameEn?.toLowerCase()]?.[k] || null;
    const changed = lumiData && vanilla && base !== vanilla;
    return `<div class="calc-stat-row" style="${smogonStatStyle(base)}">
      <span class="calc-stat-name">${lbl}</span>
      <div class="calc-stat-bar-bg"><div class="calc-stat-bar-fill stat-bar-fill" style="width:var(--stat-width)"></div></div>
      <span class="calc-stat-val${changed?' lumi-changed':''}">${base}</span>
    </div>`;
  }).join('');
  el.innerHTML = html;
  el.style.display = 'block';
}

function autoTypeEffectiveness() {
  const moveType = document.getElementById('move-type').value;
  const defName = document.getElementById('def-pokemon').value.trim();
  if (!defName) return;
  const data = getCalcPokemon(defName); // might be promise
  if (data && data.then) {
    data.then(d => {
      if (d && d.types) document.getElementById('type-effectiveness').value = getTypeEffStr(moveType, d.types);
    });
  } else if (data && data.types) {
    document.getElementById('type-effectiveness').value = getTypeEffStr(moveType, data.types);
  }
}

function getTypeEffStr(moveType, defTypes) {
  const eff = getTypeEffectiveness(moveType, defTypes);
  if (eff === 0) return '×0 (Immunité)';
  if (eff === 0.25) return '×¼ (Super résistant)';
  if (eff === 0.5) return '×½ (Pas très efficace)';
  if (eff === 1) return '×1 (Normal)';
  if (eff === 2) return '×2 (Super efficace!)';
  if (eff === 4) return '×4 (Très super efficace!)';
  return `×${eff}`;
}

async function onMoveChange() {
  const moveName = document.getElementById('move-name').value.trim();
  if (moveName.length < 3) return;
  clearTimeout(calcDebounce.move);
  calcDebounce.move = setTimeout(async () => {
    const moveData = await fetchMoveData(moveName);
    if (moveData.power) document.getElementById('move-power').value = moveData.power;
    if (moveData.damageClass) document.getElementById('move-category').value = moveData.damageClass === 'physical' ? 'physical' : 'special';
    // Try to detect move type from API — not directly available, but set what we have
    await updateCalcStats('atk');
    await updateCalcStats('def');
    autoTypeEffectiveness();
  }, 400);
}

// ── DAMAGE CALCULATION (Gen IV formula) ───────────────────────────────────────
// Reference: https://bulbapedia.bulbagarden.net/wiki/Damage
function calcOneStat(base, iv, ev, nature, statKey, level) {
  const NATURE_MODS = {
    Hardy:{},Docile:{},Serious:{},Bashful:{},Quirky:{},
    Lonely:{atk:1.1,def:0.9}, Brave:{atk:1.1,spd:0.9}, Adamant:{atk:1.1,spAtk:0.9}, Naughty:{atk:1.1,spDef:0.9},
    Bold:{def:1.1,atk:0.9}, Relaxed:{def:1.1,spd:0.9}, Impish:{def:1.1,spAtk:0.9}, Lax:{def:1.1,spDef:0.9},
    Timid:{spd:1.1,atk:0.9}, Hasty:{spd:1.1,def:0.9}, Jolly:{spd:1.1,spAtk:0.9}, Naive:{spd:1.1,spDef:0.9},
    Modest:{spAtk:1.1,atk:0.9}, Mild:{spAtk:1.1,def:0.9}, Quiet:{spAtk:1.1,spd:0.9}, Rash:{spAtk:1.1,spDef:0.9},
    Calm:{spDef:1.1,atk:0.9}, Gentle:{spDef:1.1,def:0.9}, Sassy:{spDef:1.1,spd:0.9}, Careful:{spDef:1.1,spAtk:0.9},
  };
  const mods = NATURE_MODS[nature] || {};
  const raw = Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5;
  return Math.floor(raw * (mods[statKey] || 1));
}

function calcHp(base, iv, ev, level) {
  return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + level + 10;
}

// Stage boosts
function applyBoost(stat, stage) {
  const stages = [1, 1, 1.5, 2, 2.5, 3, 3.5, 4];
  if (stage >= 0) return Math.floor(stat * (2 + stage) / 2);
  return Math.floor(stat * 2 / (2 + Math.abs(stage)));
}

// Type effectiveness chart by generation bucket
const TYPE_CHART_PRE6 = {
  Normal:   { Rock:0.5, Ghost:0, Steel:0.5 },
  Fire:     { Fire:0.5, Water:0.5, Rock:0.5, Dragon:0.5, Grass:2, Ice:2, Bug:2, Steel:2 },
  Water:    { Water:0.5, Grass:0.5, Dragon:0.5, Fire:2, Ground:2, Rock:2 },
  Electric: { Electric:0.5, Grass:0.5, Dragon:0.5, Ground:0, Flying:2, Water:2 },
  Grass:    { Fire:0.5, Grass:0.5, Poison:0.5, Flying:0.5, Bug:0.5, Dragon:0.5, Steel:0.5, Water:2, Ground:2, Rock:2 },
  Ice:      { Water:0.5, Ice:0.5, Fire:0.5, Steel:0.5, Grass:2, Ground:2, Flying:2, Dragon:2 },
  Fighting: { Poison:0.5, Bug:0.5, Psychic:0.5, Flying:0.5, Ghost:0, Normal:2, Ice:2, Rock:2, Dark:2, Steel:2 },
  Poison:   { Poison:0.5, Ground:0.5, Rock:0.5, Ghost:0.5, Steel:0, Grass:2 },
  Ground:   { Grass:0.5, Bug:0.5, Flying:0, Fire:2, Electric:2, Poison:2, Rock:2, Steel:2 },
  Flying:   { Electric:0.5, Rock:0.5, Steel:0.5, Grass:2, Fighting:2, Bug:2 },
  Psychic:  { Psychic:0.5, Steel:0.5, Dark:0, Fighting:2, Poison:2 },
  Bug:      { Fire:0.5, Fighting:0.5, Flying:0.5, Ghost:0.5, Steel:0.5, Grass:2, Psychic:2, Dark:2 },
  Rock:     { Fighting:0.5, Ground:0.5, Steel:0.5, Fire:2, Ice:2, Flying:2, Bug:2 },
  Ghost:    { Normal:0, Dark:0.5, Steel:0.5, Ghost:2, Psychic:2 },
  Dragon:   { Steel:0.5, Dragon:2 },
  Dark:     { Fighting:0.5, Dark:0.5, Steel:0.5, Ghost:2, Psychic:2 },
  Steel:    { Fire:0.5, Water:0.5, Electric:0.5, Steel:0.5, Ice:2, Rock:2 },
};

const TYPE_CHART_POST6 = {
  ...TYPE_CHART_PRE6,
  Fighting: { Poison:0.5, Bug:0.5, Psychic:0.5, Flying:0.5, Fairy:0.5, Ghost:0, Normal:2, Ice:2, Rock:2, Dark:2, Steel:2 },
  Poison:   { Poison:0.5, Ground:0.5, Rock:0.5, Ghost:0.5, Steel:0, Grass:2, Fairy:2 },
  Bug:      { Fire:0.5, Fighting:0.5, Flying:0.5, Ghost:0.5, Steel:0.5, Fairy:0.5, Grass:2, Psychic:2, Dark:2 },
  Ghost:    { Normal:0, Dark:0.5, Ghost:2, Psychic:2 },
  Dragon:   { Steel:0.5, Fairy:0, Dragon:2 },
  Dark:     { Fighting:0.5, Dark:0.5, Fairy:0.5, Ghost:2, Psychic:2 },
  Steel:    { Fire:0.5, Water:0.5, Electric:0.5, Steel:0.5, Ice:2, Rock:2, Fairy:2 },
  Fairy:    { Fire:0.5, Poison:0.5, Steel:0.5, Fighting:2, Dragon:2, Dark:2 },
};

function getTypeChartForCurrentVersion() {
  return (detectedVersionInfo?.gen || 4) >= 6 ? TYPE_CHART_POST6 : TYPE_CHART_PRE6;
}

function normalizeTypesForCurrentVersion(types) {
  const gen = detectedVersionInfo?.gen || 4;
  return [...new Set((types || []).filter(Boolean).map(t => String(t).charAt(0).toUpperCase() + String(t).slice(1)).filter(t => gen >= 6 || t !== 'Fairy'))];
}

function normalizeAbilityKey(name) {
  return stripDiacritics(String(name || '')).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function getAbilityTypeImmunities(abilityNames) {
  const keys = (abilityNames || []).map(normalizeAbilityKey);
  const immune = [];
  const add = type => { if (type && !immune.includes(type)) immune.push(type); };
  if (keys.some(k => ['levitate', 'levitation'].includes(k))) add('Ground');
  if (keys.some(k => ['flash fire', 'torche'].includes(k))) add('Fire');
  if (keys.some(k => ['water absorb', 'absorb eau', 'dry skin', 'peau seche', 'storm drain', 'lavabo'].includes(k))) add('Water');
  if (keys.some(k => ['volt absorb', 'paratonnerre', 'lightning rod', 'motor drive', 'motorise'].includes(k))) add('Electric');
  if (keys.some(k => ['sap sipper', 'herbivore'].includes(k))) add('Grass');
  return immune;
}

function getTypeEffectiveness(moveType, defTypes, abilityNames = []) {
  let eff = 1;
  const typeChart = getTypeChartForCurrentVersion();
  const normalizedTypes = normalizeTypesForCurrentVersion(defTypes);
  const abilityImmunities = getAbilityTypeImmunities(abilityNames);
  if (abilityImmunities.includes(moveType)) return 0;
  for (const t of normalizedTypes) {
    if (!t) continue;
    const chart = typeChart[moveType] || {};
    eff *= (chart[t] !== undefined ? chart[t] : 1);
  }
  return eff;
}

function summarizeTypeMatchups(defTypes, abilityNames = []) {
  const chart = getTypeChartForCurrentVersion();
  const allTypes = Object.keys(chart);
  const weak = [], resist = [], immune = [];
  for (const atkType of allTypes) {
    const eff = getTypeEffectiveness(atkType, defTypes, abilityNames);
    if (eff === 0) immune.push(atkType);
    else if (eff > 1) weak.push({ type: atkType, mult: eff });
    else if (eff < 1) resist.push({ type: atkType, mult: eff });
  }
  return { weak, resist, immune };
}

function renderTypeMatchupSection(defTypes, abilityNames = []) {
  const normalizedTypes = normalizeTypesForCurrentVersion(defTypes);
  if (!normalizedTypes?.length) return '';
  const data = summarizeTypeMatchups(normalizedTypes, abilityNames);
  const renderList = (items, kind) => {
    if (!items.length) return `<span class="matchup-empty">—</span>`;
    return items.map(entry => {
      const t = entry.type || entry;
      const mult = entry.mult ? ` ×${entry.mult}` : '';
      return `<span class="matchup-badge matchup-${kind} type-${typeClass(t)}"><span class="fr-only">${formatTypeLabelFr(t)}${mult}</span><span class="en-only">${t}${mult}</span></span>`;
    }).join('');
  };
  return `<div class="type-matchups">
    <div class="matchup-row"><span class="matchup-label"><span class="fr-only">${t('weaknesses')}</span><span class="en-only">${t('weaknesses')}</span></span><div class="matchup-list">${renderList(data.weak, 'weak')}</div></div>
    <div class="matchup-row"><span class="matchup-label"><span class="fr-only">${t('resistances')}</span><span class="en-only">${t('resistances')}</span></span><div class="matchup-list">${renderList(data.resist, 'resist')}</div></div>
    <div class="matchup-row"><span class="matchup-label"><span class="fr-only">${t('immunities')}</span><span class="en-only">${t('immunities')}</span></span><div class="matchup-list">${renderList(data.immune, 'immune')}</div></div>
  </div>`;
}

async function calculateDamage() {
  const atkName = document.getElementById('atk-pokemon').value.trim();
  const defName = document.getElementById('def-pokemon').value.trim();
  const movePower = parseInt(document.getElementById('move-power').value) || 0;
  const moveCategory = document.getElementById('move-category').value;
  const moveType = document.getElementById('move-type').value;
  const atkLevel = parseInt(document.getElementById('atk-level').value) || 100;
  const defLevel = parseInt(document.getElementById('def-level').value) || 100;
  const atkNature = document.getElementById('atk-nature').value;
  const defNature = document.getElementById('def-nature').value;
  const atkIv = parseInt(document.getElementById('atk-iv').value) || 31;
  const atkEv = parseInt(document.getElementById('atk-ev').value) || 0;
  const defIv = parseInt(document.getElementById('def-iv').value) || 31;
  const defEv = parseInt(document.getElementById('def-ev').value) || 0;
  const defHpIv = parseInt(document.getElementById('def-hp-iv').value) || 31;
  const defHpEv = parseInt(document.getElementById('def-hp-ev').value) || 0;
  const atkBoost = parseInt(document.getElementById('atk-boost').value) || 0;
  const defBoost = parseInt(document.getElementById('def-boost').value) || 0;
  const stab = document.getElementById('field-stab').checked;
  const burn = document.getElementById('field-burn').checked;
  const reflect = document.getElementById('field-reflect').checked;
  const lightscreen = document.getElementById('field-lightscreen').checked;
  const crit = document.getElementById('field-crit').checked;

  if (!atkName || !defName || !movePower) {
    showToast('❌ Remplis les champs Pokémon et Puissance');
    return;
  }

  const [atkData, defData] = await Promise.all([
    getCalcPokemon(atkName), getCalcPokemon(defName)
  ]);

  const atkKey = moveCategory === 'physical' ? 'atk' : 'spAtk';
  const defKey = moveCategory === 'physical' ? 'def' : 'spDef';
  const atkBase = atkData?.baseStats?.[atkKey] || atkData?.baseStats?.atk || 80;
  const defBase = defData?.baseStats?.[defKey] || defData?.baseStats?.def || 80;
  const hpBase = defData?.baseStats?.hp || 80;

  let atkStat = calcOneStat(atkBase, atkIv, atkEv, atkNature, atkKey, atkLevel);
  let defStat = calcOneStat(defBase, defIv, defEv, defNature, defKey, defLevel);
  const hpStat = calcHp(hpBase, defHpIv, defHpEv, defLevel);

  atkStat = applyBoost(atkStat, crit ? Math.max(0, atkBoost) : atkBoost);
  defStat = applyBoost(defStat, crit ? Math.min(0, defBoost) : defBoost);

  if (burn && moveCategory === 'physical') atkStat = Math.floor(atkStat / 2);

  // Gen IV base damage formula
  let baseDmg = Math.floor(Math.floor((Math.floor(2 * atkLevel / 5 + 2) * movePower * atkStat / defStat) / 50) + 2);

  // Modifiers
  const screenMult = (reflect && moveCategory === 'physical') ? 0.5 : (lightscreen && moveCategory === 'special') ? 0.5 : 1;
  baseDmg = Math.floor(baseDmg * screenMult);

  const critMult = crit ? 2 : 1;
  baseDmg = Math.floor(baseDmg * critMult);

  const stabMult = stab ? 1.5 : 1;
  baseDmg = Math.floor(baseDmg * stabMult);

  const typeEff = getTypeEffectiveness(moveType, defData?.types || ['Normal']);
  baseDmg = Math.floor(baseDmg * typeEff);
  document.getElementById('type-effectiveness').value = getTypeEffStr(moveType, defData?.types || ['Normal']);

  // Roll range (85% to 100%)
  const minDmg = Math.floor(baseDmg * 85 / 100);
  const maxDmg = baseDmg;
  const avgDmg = Math.floor((minDmg + maxDmg) / 2);

  const minPct = Math.round(minDmg / hpStat * 1000) / 10;
  const maxPct = Math.round(maxDmg / hpStat * 1000) / 10;
  const avgPct = Math.round((minPct + maxPct) / 2 * 10) / 10;

  const avgPct2 = Math.round((minPct + maxPct) / 2 * 10) / 10;

  // Show result
  document.getElementById('calc-result').style.display = 'block';
  document.getElementById('calc-dmg-pct').textContent = `${minPct}% — ${maxPct}%`;
  document.getElementById('calc-dmg-range').textContent = `${minDmg} — ${maxDmg} dégâts (HP cible: ${hpStat})`;

  const barFill = document.getElementById('calc-bar-fill');
  const barPct = Math.min(100, maxPct);
  barFill.style.width = barPct + '%';
  barFill.className = 'calc-result-bar-fill' + (maxPct >= 100 ? ' danger' : maxPct >= 50 ? ' warning' : '');

  const ohkoEl = document.getElementById('calc-ohko-label');
  if (minPct >= 100) { ohkoEl.textContent = '💀 OHKO garanti !'; ohkoEl.className = 'calc-result-ohko ohko1'; }
  else if (maxPct >= 100) { ohkoEl.textContent = `⚡ OHKO possible (${Math.round((maxDmg-hpStat)/maxDmg*100)}% des rolls)`; ohkoEl.className = 'calc-result-ohko ohko2'; }
  else if (maxPct >= 50) { ohkoEl.textContent = `🔥 2KO possible — ${maxPct}% max`; ohkoEl.className = 'calc-result-ohko ohko2'; }
  else { ohkoEl.textContent = '✅ Cible survit confortablement'; ohkoEl.className = 'calc-result-ohko safe'; }

  let desc = `${atkStat} Atk${atkBoost ? ` (×${atkBoost})` : ''} × ${movePower} vs ${defStat} Déf${defBoost ? ` (×${defBoost})` : ''}`;
  if (stab) desc += ' + STAB';
  if (typeEff !== 1) desc += ` × ${typeEff} type`;
  if (isLumiRom && (atkData?._fromLumi || defData?._fromLumi)) desc += ' · ⭐ Stats Lumi';
  document.getElementById('calc-formula-desc').textContent = desc;

  // Update stat displays
  document.getElementById('atk-stat-display').value = atkStat;
  document.getElementById('def-stat-display').value = defStat;
  document.getElementById('def-hp-display').value = hpStat;
}

function swapPokemon() {
  const atkPoke = document.getElementById('atk-pokemon').value;
  const defPoke = document.getElementById('def-pokemon').value;
  const atkLevel = document.getElementById('atk-level').value;
  const defLevel = document.getElementById('def-level').value;
  document.getElementById('atk-pokemon').value = defPoke;
  document.getElementById('def-pokemon').value = atkPoke;
  document.getElementById('atk-level').value = defLevel;
  document.getElementById('def-level').value = atkLevel;
  updateCalcStats('atk');
  updateCalcStats('def');
}

// ── VANILLA STATS (used for comparison with Lumi) ────────────────────────────
// We'll load these lazily from PokeAPI
const VANILLA_STATS = {};

// ── TRAINER PORTRAITS ─────────────────────────────────────────────────────────
function bulbaUrl(path) {
  return `https://wsrv.nl/?url=https%3A%2F%2Farchives.bulbagarden.net%2Fmedia%2Fupload%2F${encodeURIComponent(path)}`;
}
function bulba(p) { return bulbaUrl(p); }

const TRAINER_PORTRAITS = {
  'TR_CHAMPION_01': bulba('5/5b/Spr_Pt_Cynthia.png'),
  'TR_LEADER1_01': bulba('c/c2/Spr_Pt_Roark.png'),
  'TR_LEADER2_01': bulba('6/62/Spr_Pt_Gardenia.png'),
  'TR_LEADER3_01': bulba('8/8a/Spr_Pt_Fantina.png'),
  'TR_LEADER4_01': bulba('9/9d/Spr_Pt_Maylene.png'),
  'TR_LEADER5_01': bulba('5/5d/Spr_Pt_Crasher_Wake.png'),
  'TR_LEADER6_01': bulba('9/9f/Spr_Pt_Byron.png'),
  'TR_LEADER7_01': bulba('d/d5/Spr_Pt_Candice.png'),
  'TR_LEADER8_01': bulba('e/e9/Spr_Pt_Volkner.png'),
  'TR_SITENNOU1_01': bulba('b/b3/Spr_Pt_Aaron.png'),
  'TR_SITENNOU2_01': bulba('5/59/Spr_Pt_Bertha.png'),
  'TR_SITENNOU3_01': bulba('1/17/Spr_Pt_Flint.png'),
  'TR_SITENNOU4_01': bulba('9/9a/Spr_Pt_Lucian.png'),
  'TR_BOSS_01': bulba('f/f5/Spr_Pt_Cyrus.png'),
  'TR_ROCKET1_01': bulba('e/e0/Spr_Pt_Mars.png'),
  'TR_ROCKET2_01': bulba('9/99/Spr_Pt_Jupiter.png'),
  'TR_ROCKET3_01': bulba('d/dc/Spr_Pt_Saturn.png'),
  'TR_RIVAL_01': bulba('3/3e/Spr_Pt_Barry.png'),
};

// Gen-aware portrait helpers
function getGen5Portrait(cls) {
  const G5 = {
    'Youngster': bulba('0/06/Spr_B2W2_Youngster.png'),
    'Lass': bulba('2/24/Spr_B2W2_Lass.png'),
    'School Kid': bulba('a/a2/Spr_B2W2_School_Kid_M.png'),
    'Preschooler': bulba('3/37/Spr_B2W2_Preschooler_M.png'),
    'Twins': bulba('c/c1/Spr_B2W2_Twins.png'),
    'Hiker': bulba('7/78/Spr_B2W2_Hiker.png'),
    'Worker': bulba('e/e9/Spr_B2W2_Worker.png'),
    'Backpacker': bulba('2/2b/Spr_B2W2_Backpacker_M.png'),
    'Ace Trainer': bulba('c/c3/Spr_B2W2_Ace_Trainer_M.png'),
    'Black Belt': bulba('5/55/Spr_B2W2_Black_Belt.png'),
    'Battle Girl': bulba('a/a8/Spr_B2W2_Battle_Girl.png'),
    'Scientist': bulba('2/2a/Spr_B2W2_Scientist.png'),
    'Psychic': bulba('5/53/Spr_B2W2_Psychic_M.png'),
    'Fisherman': bulba('9/91/Spr_B2W2_Fisherman.png'),
    'Artist': bulba('4/40/Spr_B2W2_Artist.png'),
    'Waiter': bulba('f/f1/Spr_B2W2_Waiter.png'),
    'Waitress': bulba('4/44/Spr_B2W2_Waitress.png'),
    'Nurse': bulba('b/b5/Spr_B2W2_Nurse.png'),
    'Doctor': bulba('c/c6/Spr_B2W2_Doctor.png'),
    'Beauty': bulba('7/79/Spr_B2W2_Beauty.png'),
    'Veteran': bulba('a/a5/Spr_B2W2_Veteran_M.png'),
    'Clerk': bulba('b/b4/Spr_B2W2_Clerk_M.png'),
    'Team Plasma': bulba('4/4c/Spr_B2W2_Team_Plasma_Grunt_M.png'),
    'Leader': bulba('9/90/Spr_B2W2_Leader_Cheren.png'),
  };
  return G5[cls] || null;
}

const TRAINER_CLASS_PORTRAITS = {
  'Youngster': bulba('6/67/Spr_Pt_Youngster.png'), 'Lass': bulba('5/56/Spr_Pt_Lass.png'),
  'Bug Catcher': bulba('4/44/Spr_Pt_Bug_Catcher.png'), 'Hiker': bulba('6/63/Spr_Pt_Hiker.png'),
  'Beauty': bulba('b/b8/Spr_Pt_Beauty.png'), 'Gentleman': bulba('9/98/Spr_Pt_Gentleman.png'),
  'Scientist': bulba('2/2c/Spr_Pt_Scientist.png'), 'Ace Trainer': bulba('0/0c/Spr_Pt_Ace_Trainer_M.png'),
  'Fisherman': bulba('2/25/Spr_Pt_Fisherman.png'), 'Sailor': bulba('a/a8/Spr_Pt_Sailor.png'),
  'Black Belt': bulba('7/72/Spr_Pt_Black_Belt.png'), 'Battle Girl': bulba('e/e8/Spr_Pt_Battle_Girl.png'),
  'Ninja Boy': bulba('5/55/Spr_Pt_Ninja_Boy.png'), 'Psychic': bulba('a/a9/Spr_Pt_Psychic_M.png'),
  'Galactic Grunt': bulba('1/15/Spr_Pt_Galactic_Grunt_M.png'), 'Veteran': bulba('d/d4/Spr_Pt_Veteran_M.png'),
  'Cyclist': bulba('0/06/Spr_Pt_Cyclist_M.png'), 'Worker': bulba('e/e4/Spr_Pt_Worker.png'),
  'School Kid': bulba('5/58/Spr_Pt_School_Kid_M.png'), 'Pokéfan': bulba('1/1e/Spr_Pt_Pok%C3%A9fan_M.png'),
  'Camper': bulba('d/df/Spr_Pt_Camper.png'), 'Picnicker': bulba('3/3d/Spr_Pt_Picnicker.png'),
  'Collector': bulba('0/07/Spr_Pt_Collector.png'), 'Ruin Maniac': bulba('2/22/Spr_Pt_Ruin_Maniac.png'),
  'Champion': bulba('5/5b/Spr_Pt_Cynthia.png'), 'Elite Four': bulba('b/b3/Spr_Pt_Aaron.png'),
};

// Trainer class name → French translation
const TRAINER_CLASS_FR = {
  'Youngster':'Gamin','Lass':'Fillette','Bug Catcher':'Attrape-Insecte','Hiker':'Randonneur',
  'Beauty':'Beauté','Gentleman':'Gentleman','Scientist':'Scientifique','Ace Trainer':'As Dresseur',
  'Fisherman':'Pêcheur','Fisher':'Pêcheur','Sailor':'Marin','Black Belt':'Ceinture Noire','Battle Girl':'Fille de Combat',
  'Ninja Boy':'Ninja','Psychic':'Médium','Galactic Grunt':'Sbire Galaxie','Grunt':'Sbire','Veteran':'Vétéran',
  'Cyclist':'Cycliste','Worker':'Ouvrier','School Kid':'Écolier','Pokéfan':'Poképassionné',
  'Camper':'Campeur','Picnicker':'Pique-niqueuse','Collector':'Collectionneur',
  'Ruin Maniac':'Fouilleur de Ruines','Champion':'Champion','Elite Four':'Quartet d\'Élite',
  'Preschooler':'Bambin','Twins':'Jumelles','Waiter':'Serveur','Waitress':'Serveuse',
  'Nurse':'Infirmière','Doctor':'Docteur','Artist':'Artiste','Backpacker':'Randonneur',
  'Team Plasma':'Sbire Plasma','Leader':'Champion d\'Arène','Roughneck':'Dur à Cuire',
  'Smasher':'Tenniswoman','Linebacker':'Quarterback','Hoopster':'Basketteur','Striker':'Footballeur',
  'Pilot':'Pilote','Clerk':'Employé','Parasol Lady':'Dame au Parasol','Dancer':'Danseur',
  'Musician':'Musicien','Harlequin':'Arlequin','Baker':'Boulangère','Rich Boy':'Fils à Papa',
  'Lady':'Lady','Battle Chatelaine':'Châtelaine','Aroma Lady':'Aromathérapeute',
  'Pokémon Ranger':'Ranger Pokémon','Ranger':'Ranger Pokémon','Rater':'Évaluateur','Pokéfan':'Poképassionné',
  'Juggler':'Jongleur','Tamer':'Dompteur','Biker':'Motard','Burglar':'Cambrioleur',
  'Cooltrainer':'As Dresseur','Super Nerd':'Supernerd','Gambler':'Parieur',
  'Firebreather':'Cracheur de Feu','Sage':'Sage','Medium':'Médium',
  'Battle Legend':'Légende du Combat','Veteran':'Vétéran',
  'Breeder':'Éleveur','Bird Keeper':'Gardien d\'Oiseaux','Cameraman':'Caméraman',
  'Swimmer':'Nageur','Swimmer F':'Nageuse','Tuber':'Tubeur',
  'Triathlete':'Triathlète','Expert':'Expert','Interviewer':'Journaliste',
  'Dragon Tamer':'Dompteur de Dragon','Kindler':'Pyromane',
  'Winstrate':'Champion','Hex Maniac':'Maléfiquette','Lady':'Lady',
  'Pokemon Ranger':'Ranger Pokémon','Ranger M':'Ranger Pokémon',
  'Channeler':'Médium','Painter':'Peintre','Guitarist':'Guitariste',
  'Motorcyclist':'Motocycliste','Clown':'Clown','Kimono Girl':'Danseuse Kimono',
  'Duke':'Duc','Duchess':'Duchesse','Earl':'Comte','Countess':'Comtesse',
  'Marquis':'Marquis','Marchioness':'Marquise','Viscount':'Vicomte','Viscountess':'Vicomtesse',
  'Fairy Tale Girl':'Conteuse','Sky Trainer':'Dresseur Céleste','Schoolgirl':'Écolière',
  'Schoolboy':'Écolier','Punk Girl':'Punk','Butler':'Majordome','Baron':'Baron','Baroness':'Baronne',
  // Gen 7
  'Aether Foundation Employee':'Employé Aether','Aether Foundation':'Fondation Aether',
  'Aether Branch Chief':'Chef de Branche Aether','Aether President':'Présidente Aether',
  'Team Skull Grunt':'Sbire Team Skull','Team Skull Boss':'Chef Team Skull',
  'Backpacker':'Randonneur','Kahuna':'Kahuna','Captain':'Capitaine',
  'Island Kahuna':'Grand Kahuna','Trial Captain':'Capitaine',
  'Gym Leader':'Champion d\'Arène','Pokemon Trainer':'Dresseur Pokémon','Pokémon Trainer':'Dresseur Pokémon',
  'Galactic Commander':'Admin Team Galaxie','Galactic Boss':'Boss Team Galaxie',
  'Young Couple':'Jeune Couple','Pokéfan Family':'Famille Poképassion',
  'Cowgirl':'Cow-girl','Idol':'Idole','Madam':'Madame','Tower Tycoon':'Magnat de la Tour',
  // Gen 8 / extra vanilla-derived classes
  'Backers':'Supporters','Ball Guy':'Ball Masqué','Boss Trainer':'Boss','Cabbie':'Chauffeur de Taxi',
  'Café Master':'Barista','Depot Agent':'Contrôleur','Dojo Master':'Maître du Dojo',
  'Dojo Matron':'Patronne','Gym Challenger':'Challenger','Gym Trainer':'Dresseur d\'Arène',
  'Hooligans':'Loubards','Infielder':'Baseballeur','Janitor':'Nettoyeur','League Staff':'Employé de la Ligue',
  'League Club':'Club de Ligue','Macro Cosmos':'Macro Cosmos','Macro Cosmos’s':'Macro Cosmos','Maid':'Gouvernante','Master Dojo':'Dojo de la Maîtrise',
  'Model':'Top Model','Nursery Aide':'Maîtresse','Office Worker':'Employé','Police Officer':'Policier','Poké Kid':'Poké Enfant',
  'Postman':'Facteur','Rail Staff':'Cheminot','Student':'Élève','Team Star':'Team Star',
};

const TRAINER_CLASS_ALIASES = {
  'fisher': 'Fisherman',
  'fisherman': 'Fisherman',
  'pecheur': 'Fisherman',
  'pêcheur': 'Fisherman',
  'acetrainer': 'Ace Trainer',
  'topdresseur': 'Ace Trainer',
  'acetrainer': 'Ace Trainer',
  'blackbelt': 'Black Belt',
  'battlegirl': 'Battle Girl',
  'battlegirl': 'Battle Girl',
  'schoolkid': 'School Kid',
  'schoolboy': 'Schoolboy',
  'schoolgirl': 'Schoolgirl',
  'bugcatcher': 'Bug Catcher',
  'birdkeeper': 'Bird Keeper',
  'clerk female': 'Clerk',
  'clerk male': 'Clerk',
  'pokemonranger': 'Pokemon Ranger',
  'pokemon ranger': 'Pokemon Ranger',
  'pokémon ranger': 'Pokemon Ranger',
  'pokemonbreeder': 'Pokemon Breeder',
  'pokemon breeder': 'Pokemon Breeder',
  'pokémon breeder': 'Pokemon Breeder',
  'pokefan': 'Pokéfan',
  'pokefan': 'Pokéfan',
  'richboy': 'Rich Boy',
  'rich boy': 'Rich Boy',
  'ninjaboy': 'Ninja Boy',
  'ninja boy': 'Ninja Boy',
  'ninjafan': 'Ninja Boy',
  'ruinmaniac': 'Ruin Maniac',
  'aromalady': 'Aroma Lady',
  'aroma': 'Aroma Lady',
  'aromatherapeute': 'Aroma Lady',
  'aromathérapeute': 'Aroma Lady',
  'youngcouple': 'Young Couple',
  'young couple': 'Young Couple',
  'gym leader': 'Leader',
  'the riches': 'The Riches',
  'the-riches': 'The Riches',
  'colay monthe': 'The Riches',
  'colay-monthe': 'The Riches',
  'famille colay monthe': 'The Riches',
  'famille colay-monthe': 'The Riches',
  'champion darene': 'Leader',
  'champion d arene': 'Leader',
  'champion d\'arene': 'Leader',
  'champion d’arene': 'Leader',
  'champion d arène': 'Leader',
  'champion d’arène': 'Leader',
  'championne d arene': 'Leader',
  'championne d’arene': 'Leader',
  'championne d arène': 'Leader',
  'championne d’arène': 'Leader',
  'leader': 'Leader',
  'pokemon trainer': 'Pokemon Trainer',
  'pokémon trainer': 'Pokemon Trainer',
  'pokemontrainer': 'Pokemon Trainer',
  'pokémontrainer': 'Pokemon Trainer',
  'dresseur pokemon': 'Pokemon Trainer',
  'dresseuse pokemon': 'Pokemon Trainer',
  'dresseur': 'Pokemon Trainer',
  'dresseuse': 'Pokemon Trainer',
  'as dresseur': 'Ace Trainer',
  'randonneur': 'Hiker',
  'randonneuse': 'Backpacker',
  'montagnard': 'Hiker',
  'gamin': 'Youngster',
  'fillette': 'Lass',
  'combattante': 'Battle Girl',
  'karateka': 'Black Belt',
  'ouvrier': 'Worker',
  'scientifique': 'Scientist',
  'campeur': 'Camper',
  'pique nique': 'Picnicker',
  'pique-nique': 'Picnicker',
  'picnicker': 'Picnicker',
  'eleve': 'School Kid',
  'élève': 'School Kid',
  'ecolier': 'Schoolboy',
  'écolier': 'Schoolboy',
  'ecoliere': 'Schoolgirl',
  'écolière': 'Schoolgirl',
  'flotteur': 'Swimmer',
  'ornithologue': 'Bird Keeper',
  'dracologue': 'Dragon Tamer',
  'dragontamer': 'Dragon Tamer',
  'dragon tamer': 'Dragon Tamer',
  'richard': 'Rich Boy',
  'mondaine': 'Lady',
  'mademoiselle': 'Lady',
  'serveuse': 'Waitress',
  'serveur': 'Waiter',
  'agent': 'Policeman',
  'policier': 'Police Officer',
  'cycliste': 'Cyclist',
  'motard': 'Biker',
  'swimmer female': 'Swimmer F',
  'swimmer male': 'Swimmer',
  'kinesiste': 'Psychic',
  'kinésiste': 'Psychic',
  'venerable': 'Veteran',
  'vénérable': 'Veteran',
  'jumelles': 'Twins',
  'scout': 'Camper',
  'pokeenfant': 'PokéKid',
  'pokéenfant': 'PokéKid',
  'bouffon': 'Clown',
  'galactic': 'Galactic Grunt',
  'galaxie': 'Galactic Grunt',
  'teamrocket': 'Grunt',
  'motorcyclist': 'Biker',
  'rocket': 'Grunt',
  'beaute': 'Beauty',
  'beaute': 'Beauty',
  'beauté': 'Beauty',
  'ruinophile': 'Ruin Maniac',
  'ruinemaniac': 'Ruin Maniac',
  'collec': 'Collector',
  'fouilleur de ruines': 'Ruin Maniac',
  'arlequin': 'Harlequin',
  'clown': 'Clown',
  'supporters': 'Backers',
  'pompom girls': 'Backers',
  'quarterback': 'Linebacker',
  'basketteur': 'Hoopster',
  'footballeur': 'Striker',
  'baseballeur': 'Infielder',
  'controleur': 'Depot Agent',
  'contrôleur': 'Depot Agent',
  'nettoyeur': 'Janitor',
  'cleaning staff': 'Janitor',
  'infirmier': 'Doctor',
  'taxi driver': 'Cabbie',
  'preschool girl': 'Preschooler',
  'preschool boy': 'Preschooler',
  'researcher': 'Scientist',
  'chef': 'Cook',
  'sisandbro': 'Twins',
  'belle pa': 'Young Couple',
  'belle&pa': 'Young Couple',
  'game freak': 'GAME FREAK',
  'game freak s': 'GAME FREAK',
  'canon': 'Beauty',
  'maitresse': 'Nursery Aide',
  'maîtresse': 'Nursery Aide',
  'petit': 'Preschooler',
  'petite': 'Preschooler',
  'soeur parasol': 'Parasol Lady',
  'sœur parasol': 'Parasol Lady',
  'tenniswoman': 'Smasher',
  'loubards': 'Hooligans',
  'employe': 'Clerk',
  'employée': 'Clerk',
  'barista': 'Café Master',
  'businessman': 'Office Worker',
  'cheminot': 'Rail Staff',
  'chauffeur de taxi': 'Cabbie',
  'club de ligue': 'League Club',
  'collegien': 'Student',
  'collégien': 'Student',
  'collegienne': 'Student',
  'collégienne': 'Student',
  'ball masque': 'Ball Guy',
  'ball masqué': 'Ball Guy',
  'challenger': 'Gym Challenger',
  'courier': 'Courier',
  'dresseur d arene': 'Gym Trainer',
  'dresseur d’arene': 'Gym Trainer',
  'dresseur d arène': 'Gym Trainer',
  'dresseur d’arène': 'Gym Trainer',
  'dresseuse d arene': 'Gym Trainer',
  'dresseuse d’arene': 'Gym Trainer',
  'dresseuse d arène': 'Gym Trainer',
  'dresseuse d’arène': 'Gym Trainer',
  'dompteur dragon': 'Dragon Tamer',
  'homme d affaires': 'Office Worker',
  'homme d\'affaires': 'Office Worker',
  'league club': 'League Club',
  'livreur': 'Courier',
  'lyceen': 'Student',
  'lycéen': 'Student',
  'lyceenne': 'Student',
  'lycéenne': 'Student',
  'macro cosmos': 'Macro Cosmos',
  'macro cosmos s': 'Macro Cosmos',
  'employe de la ligue': 'League Staff',
  'employée de la ligue': 'League Staff',
  'mannequin': 'Model',
  'maniaque': 'Pokemaniac',
  'pokemaniac': 'Pokemaniac',
  'pokémaniac': 'Pokemaniac',
  'top model': 'Model',
  'maitre du dojo': 'Dojo Master',
  'maître du dojo': 'Dojo Master',
  'dojo de la maitrise': 'Master Dojo',
  'dojo de la maîtrise': 'Master Dojo',
  'patronne': 'Dojo Matron',
  'petit eleve': 'Student',
  'petite eleve': 'Student',
  'young student': 'Student',
  'poke enfant': 'Poké Kid',
  'poke maniac': 'Pokemaniac',
  'poké maniac': 'Pokemaniac',
  'kimonogirl': 'Kimono Girl',
  'kimono girl': 'Kimono Girl',
  'danseuse kimono': 'Kimono Girl',
  'star f': 'Team Star',
  'star m': 'Team Star',
  'star m sub': 'Team Star',
  'sbire': 'Grunt',
  'sbire galaxie': 'Galactic Grunt',
  'team star': 'Team Star',
  'team star grunt': 'Team Star',
  'team galaxie': 'Galactic Grunt',
  'team plasma': 'Team Plasma',
  'team yell': 'Team Yell',
  'journalistes': 'Interviewer',
  'crache feu': 'Firebreather',
  'crache-feu': 'Firebreather',
  'bbleague': 'League Club',
  'bbleague f': 'League Club',
  'bbleague strong': 'League Club',
  'bbleague strong f': 'League Club',
  'capitaine depreuve': 'Trial Captain',
  'capitaine d epreuve': 'Trial Captain',
  'capitaine d\'epreuve': 'Trial Captain',
  'capitaine d’épreuve': 'Trial Captain',
};

const TRAINER_GENERIC_CLASS_KEYS = new Set([
  'Pokemon Trainer',
  'Pokémon Trainer',
  'Trainer',
  'Dresseur',
  'Dresseuse',
]);

const TRAINER_LABEL_FR = {
  'TR_RIVAL_01':'Pierrick','TR_CHAMPION_01':'Cynthia','TR_LEADER1_01':'Pierre',
  'TR_LEADER2_01':'Germaine','TR_LEADER3_01':'Fantina','TR_LEADER4_01':'Mélina',
  'TR_LEADER5_01':'Corsèque','TR_LEADER6_01':'Gabin','TR_LEADER7_01':'Gladys',
  'TR_LEADER8_01':'Tanguy','TR_SITENNOU1_01':'Adrien','TR_SITENNOU2_01':'Bertha',
  'TR_SITENNOU3_01':'Victor','TR_SITENNOU4_01':'Lucio','TR_BOSS_01':'Cyrus',
  'TR_ROCKET1_01':'Mars','TR_ROCKET2_01':'Jupiter','TR_ROCKET3_01':'Saturne',
};

const BDSP_TRAINER_LABEL_CLASS_MAP = {
  NONE: { en: '', fr: '' },
  TANPAN: { en: 'Youngster', fr: 'Gamin' },
  MINI: { en: 'Lass', fr: 'Fillette' },
  CAMPB: { en: 'Camper', fr: 'Campeur' },
  PICNICG: { en: 'Picnicker', fr: 'Pique-niqueuse' },
  FUTAGO: { en: 'Twins', fr: 'Jumelles' },
  LOVELOVE: { en: 'Young Couple', fr: 'Jeune Couple' },
  FAMILY: { en: 'Pokéfan Family', fr: 'Famille Poképassion' },
  MOUNT: { en: 'Hiker', fr: 'Randonneur' },
  FISHING: { en: 'Fisherman', fr: 'Pêcheur' },
  COWGIRL: { en: 'Cowgirl', fr: 'Cow-girl' },
  KARATE: { en: 'Black Belt', fr: 'Ceinture Noire' },
  ELITEM: { en: 'Ace Trainer', fr: 'As Dresseur' },
  ELITEW: { en: 'Ace Trainer', fr: 'As Dresseur' },
  PRINCE: { en: 'Rich Boy', fr: 'Fils à Papa' },
  PRINCESS: { en: 'Lady', fr: 'Lady' },
  GENTLE: { en: 'Gentleman', fr: 'Gentleman' },
  BIRD: { en: 'Bird Keeper', fr: 'Gardien d\'Oiseaux' },
  DRAGON: { en: 'Dragon Tamer', fr: 'Dompteur de Dragon' },
  SHINOBI: { en: 'Ninja Boy', fr: 'Ninja' },
  ESPM: { en: 'Psychic', fr: 'Médium' },
  ESPW: { en: 'Psychic', fr: 'Médium' },
  DAISUKIM: { en: 'Pokéfan', fr: 'Poképassionné' },
  DAISUKIW: { en: 'Pokéfan', fr: 'Poképassionnée' },
  SWIMMERM: { en: 'Swimmer', fr: 'Nageur' },
  SWIMMERW: { en: 'Swimmer F', fr: 'Nageuse' },
  SAILOR: { en: 'Sailor', fr: 'Marin' },
  COLLECTOR: { en: 'Collector', fr: 'Collectionneur' },
  WORKER: { en: 'Worker', fr: 'Ouvrier' },
  BREEDERM: { en: 'Breeder', fr: 'Éleveur' },
  BREEDERW: { en: 'Breeder', fr: 'Éleveuse' },
  SCHOOLB: { en: 'Schoolboy', fr: 'Écolier' },
  SCHOOLG: { en: 'Schoolgirl', fr: 'Écolière' },
  VETERAN: { en: 'Veteran', fr: 'Vétéran' },
  PARASOL: { en: 'Parasol Lady', fr: 'Dame au Parasol' },
  WAITRESS: { en: 'Waitress', fr: 'Serveuse' },
  IDOL: { en: 'Idol', fr: 'Idole' },
  FARMER: { en: 'Farmer', fr: 'Fermier' },
  CAMERAMAN: { en: 'Cameraman', fr: 'Caméraman' },
  REPORTER: { en: 'Reporter', fr: 'Journaliste' },
  INTERVIEW: { en: 'Interviewer', fr: 'Intervieweur' },
  PIERROT: { en: 'Clown', fr: 'Clown' },
  GAMBLER: { en: 'Gambler', fr: 'Parieur' },
  MADAM: { en: 'Madam', fr: 'Madame' },
  GINGAM: { en: 'Galactic Grunt', fr: 'Sbire Galaxie' },
  GINGAW: { en: 'Galactic Grunt', fr: 'Sbire Galaxie' },
  GINGALEADER1: { en: 'Galactic Commander', fr: 'Admin Team Galaxie' },
  GINGALEADER2: { en: 'Galactic Commander', fr: 'Admin Team Galaxie' },
  GINGALEADER3: { en: 'Galactic Commander', fr: 'Admin Team Galaxie' },
  GINGALBOSS: { en: 'Galactic Boss', fr: 'Boss Team Galaxie' },
  BIGFOUR1: { en: 'Elite Four', fr: 'Quartet d\'Élite' },
  BIGFOUR2: { en: 'Elite Four', fr: 'Quartet d\'Élite' },
  BIGFOUR3: { en: 'Elite Four', fr: 'Quartet d\'Élite' },
  BIGFOUR4: { en: 'Elite Four', fr: 'Quartet d\'Élite' },
  CHAMPION: { en: 'Champion', fr: 'Maître de la Ligue' },
  LEADER1: { en: 'Leader', fr: 'Champion d\'Arène' },
  LEADER2: { en: 'Leader', fr: 'Champion d\'Arène' },
  LEADER3: { en: 'Leader', fr: 'Champion d\'Arène' },
  LEADER4: { en: 'Leader', fr: 'Champion d\'Arène' },
  LEADER5: { en: 'Leader', fr: 'Champion d\'Arène' },
  LEADER6: { en: 'Leader', fr: 'Champion d\'Arène' },
  LEADER7: { en: 'Leader', fr: 'Champion d\'Arène' },
  LEADER8: { en: 'Leader', fr: 'Champion d\'Arène' },
  HERO: { en: 'Pokemon Trainer', fr: 'Dresseur Pokémon' },
  HEROINE: { en: 'Pokemon Trainer', fr: 'Dresseuse Pokémon' },
  RIVAL: { en: 'Pokemon Trainer', fr: 'Dresseur Pokémon' },
  BTFIVE1: { en: 'Pokemon Trainer', fr: 'Dresseur Pokémon' },
  BTFIVE2: { en: 'Pokemon Trainer', fr: 'Dresseur Pokémon' },
  BTFIVE3: { en: 'Pokemon Trainer', fr: 'Dresseur Pokémon' },
  BTFIVE4: { en: 'Pokemon Trainer', fr: 'Dresseur Pokémon' },
  BTFIVE5: { en: 'Pokemon Trainer', fr: 'Dresseur Pokémon' },
  KUROTUGU: { en: 'Tower Tycoon', fr: 'Magnat de la Tour' },
  MORIMOTO: { en: 'Game Freak', fr: 'Game Freak' },
};

function getTrainerNameLabel(trainer) {
  return cleanTrainerName(
    trainer?.nameLabel ||
    trainer?.readOnly?.nameLabel ||
    trainer?._vanillaMeta?.nameLabel ||
    ''
  );
}

function extractBdspTrainerLabelKey(rawLabel = '') {
  const label = String(rawLabel || '').trim();
  if (!label) return '';
  const match = label.match(/DP_Trainers_Name_TR_([^_]+(?:LEADER\d|FOUR\d|FIVE\d)?)/i);
  if (match) return String(match[1] || '').toUpperCase();
  const fallback = label.match(/TR_([^_]+)/i);
  return fallback ? String(fallback[1] || '').toUpperCase() : '';
}

function getBdspTrainerIdentityFromLabel(trainer) {
  const label = getTrainerNameLabel(trainer);
  const labelKey = extractBdspTrainerLabelKey(label);
  const mapped = BDSP_TRAINER_LABEL_CLASS_MAP[labelKey];
  if (!mapped) return null;
  const baseNameRaw = cleanTrainerName(trainer?.readOnly?.name || trainer?.name || '');
  const strippedEn = stripTrainerClassPrefix(baseNameRaw, mapped.en);
  const strippedFr = stripTrainerClassPrefix(baseNameRaw, mapped.fr);
  const baseName = cleanTrainerName(strippedFr || strippedEn || baseNameRaw);
  const shouldHidePrefix = shouldHideGenericTrainerPrefix(mapped.en, mapped.fr, mapped.en);
  const fullNameEn = shouldHidePrefix || !mapped.en
    ? baseName
    : [mapped.en, baseName].filter(Boolean).join(' ').trim();
  const fullNameFr = shouldHidePrefix || !mapped.fr
    ? baseName
    : [mapped.fr, baseName].filter(Boolean).join(' ').trim();
  return {
    labelKey,
    trainerClassEn: mapped.en || '',
    trainerClassFr: mapped.fr || '',
    baseNameEn: baseName,
    baseNameFr: baseName,
    fullNameEn,
    fullNameFr,
  };
}

function resetTrainerDisplayCaches() {
  sidebarTrainerIndex = [];
  trainerDisplayCache.clear();
  trainerDisplayCacheVersion++;
}

const NATURE_FR = {
  Hardy:'Hardi',Lonely:'Solitaire',Brave:'Courageux',Adamant:'Rigide',Naughty:'Mauvais',
  Bold:'Assuré',Docile:'Docile',Relaxed:'Relax',Impish:'Malin',Lax:'Lâche',
  Timid:'Timide',Hasty:'Pressé',Serious:'Sérieux',Jolly:'Jovial',Naive:'Naïf',
  Modest:'Modeste',Mild:'Doux',Quiet:'Discret',Bashful:'Pudique',Rash:'Foufou',
  Calm:'Calme',Gentle:'Gentil',Sassy:'Effronté',Careful:'Prudent',Quirky:'Bizarre',
};

function resolveNatureNames(rawNature) {
  const raw = String(rawNature || '').trim();
  if (!raw) return { fr: '', en: '' };
  for (const [en, fr] of Object.entries(NATURE_FR)) {
    const keys = buildLooseLookupKeys(raw);
    if (keys.includes(normalizeLookupKey(en)) || keys.includes(normalizeLookupKey(fr))) {
      return { fr, en };
    }
  }
  return { fr: titleCaseFrench(raw), en: formatPokemonDisplayName(raw) };
}

const EMOJIS = ['🧑','👦','👧','👩','🧔','🧒','🧑‍💼','👮','🧙','🏋️','🧑‍🔬','🥷','🎩','👑','🤠','🕵️','🧝','🧛','🧜','🧚'];
function emoji(name) {
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return EMOJIS[h % EMOJIS.length];
}

const TRAINER_PORTRAIT_CLASS_KEYS = {
  'Schoolboy': 'schoolboy',
  'Schoolgirl': 'schoolgirl',
  'School Kid': 'school-kid',
  'Pokemon Ranger': 'pokemon-ranger',
  'Pokémon Ranger': 'pokemon-ranger',
  'Ace Trainer': 'ace-trainer',
  'Battle Girl': 'battle-girl',
  'Black Belt': 'black-belt',
  'Fairy Tale Girl': 'fairy-tale-girl',
  'Aroma Lady': 'aroma-lady',
  'Café Master': 'cafe-master',
  'Hex Maniac': 'hex-maniac',
  'League Club': 'league-club',
  'Macro Cosmos': 'macro-cosmos',
  'Master Dojo': 'master-dojo',
  'Ninja Boy': 'ninja-boy',
  'Rich Boy': 'rich-boy',
  'Student': 'student',
  'Street Thug': 'street-thug',
  'Team Flare': 'team-flare',
  'Team Flare Boss': 'team-flare',
  'Team Aqua': 'team-aqua',
  'Aqua Admin': 'team-aqua',
  'Aqua Leader': 'team-aqua',
  'Team Magma': 'team-magma',
  'Magma Admin': 'team-magma',
  'Magma Leader': 'team-magma',
  'Team Star': 'team-star',
  'Team Yell': 'team-yell',
};

const TRAINER_IDENTITY_PORTRAITS = {
  'cynthia': bulba('5/5b/Spr_Pt_Cynthia.png'),
  'roark': bulba('c/c2/Spr_Pt_Roark.png'),
  'gardenia': bulba('6/62/Spr_Pt_Gardenia.png'),
  'fantina': bulba('8/8a/Spr_Pt_Fantina.png'),
  'maylene': bulba('9/9d/Spr_Pt_Maylene.png'),
  'crasher-wake': bulba('5/5d/Spr_Pt_Crasher_Wake.png'),
  'byron': bulba('9/9f/Spr_Pt_Byron.png'),
  'candice': bulba('d/d5/Spr_Pt_Candice.png'),
  'volkner': bulba('e/e9/Spr_Pt_Volkner.png'),
  'aaron': bulba('b/b3/Spr_Pt_Aaron.png'),
  'bertha': bulba('5/59/Spr_Pt_Bertha.png'),
  'flint': bulba('1/17/Spr_Pt_Flint.png'),
  'lucian': bulba('9/9a/Spr_Pt_Lucian.png'),
  'cyrus': bulba('f/f5/Spr_Pt_Cyrus.png'),
  'helio': bulba('f/f5/Spr_Pt_Cyrus.png'),
  'mars': bulba('e/e0/Spr_Pt_Mars.png'),
  'jupiter': bulba('9/99/Spr_Pt_Jupiter.png'),
  'saturn': bulba('d/dc/Spr_Pt_Saturn.png'),
  'barry': bulba('3/3e/Spr_Pt_Barry.png'),
  'cheren': bulba('9/90/Spr_B2W2_Leader_Cheren.png'),
};

function getTrainerPortraitManifest() {
  return window.TRAINER_PORTRAIT_MANIFEST || { identity: {}, class: {}, classId: {} };
}

function normalizeTrainerPortraitKey(value = '') {
  return normalizeLookupKey(value).replace(/\s+/g, '-');
}

function getTrainerPortraitGame(trainer) {
  return inferTrainerOverrideGame(
    trainer?._vanillaMeta?.game || ROM_RUNTIME_LOOKUPS?.meta?.game || '',
    detectedVersionInfo
  );
}

const LEGACY_BATTLE_SPRITE_GAMES = new Set([
  'diamond', 'pearl', 'platinum',
  'heartgold', 'soulsilver',
  'black', 'white', 'black2', 'white2',
]);

function getPortraitEntrySourceName(entry) {
  const raw = String(entry?.src || '');
  if (!raw) return '';
  const clean = raw.split(/[?#]/, 1)[0];
  const parts = clean.split(/[\\/]/);
  return String(parts[parts.length - 1] || '').toLowerCase();
}

function getPortraitEntryScore(entry, game = '') {
  const normalizedGame = String(game || '').toLowerCase();
  const sourceName = getPortraitEntrySourceName(entry);
  const games = Array.isArray(entry?.games) ? entry.games : [];
  const isVs = /(?:^|[-_ ])vs(?:[a-z0-9]|$)/.test(sourceName) || sourceName.includes('challenge');
  const isSpr = /(?:^|[-_ ])spr(?:[-_ ]|$)/.test(sourceName);
  const isMasters = sourceName.includes('masters');
  const isLeagueCard = sourceName.includes('league_card');
  const isBulbapediaPages = sourceName.includes('bulbapedia-pages');
  const isManualLocal =
    sourceName.includes('manual-overrides') ||
    sourceName.includes('platinum-vs-local');
  const isBack = /(?:^|[-_ ])back(?:[-_ ]|$)/.test(sourceName);
  const isOpening = sourceName.includes('opening');
  const isIntro = /(?:^|[-_ ])intro(?:[-_ ]|$)/.test(sourceName);
  const isCasual = sourceName.includes('casual');
  const isAnimeOrPromo =
    sourceName.includes('evolutions') ||
    sourceName.includes('twilight') ||
    sourceName.includes('_tw') ||
    sourceName.includes('adventures') ||
    sourceName.includes('mindscape');

  let score = 0;
  if (isBulbapediaPages) score -= 30;
  if (isManualLocal) score += 10;
  if (LEGACY_BATTLE_SPRITE_GAMES.has(normalizedGame)) {
    if (isSpr) score -= 40;
    if (isVs) score += 40;
  } else {
    if (isVs) score -= 20;
    if (isSpr) score += 5;
  }
  if (isBack) score += 200;
  if (isOpening) score += 120;
  if (isCasual) score += 80;
  if (isIntro) score += 20;
  if (isLeagueCard) score += 20;
  if (isMasters) score += 80;
  if (isAnimeOrPromo) score += 60;
  score += games.length * 2;
  return score;
}

function getBestPortraitEntry(entries = [], game = '') {
  const normalizedGame = String(game || '').toLowerCase();
  if (!Array.isArray(entries) || !entries.length) return null;
  if (normalizedGame) {
    const exactMatches = entries
      .filter(entry => Array.isArray(entry?.games) && entry.games.includes(normalizedGame) && entry?.src)
      .sort((a, b) => {
        const scoreDelta = getPortraitEntryScore(a, normalizedGame) - getPortraitEntryScore(b, normalizedGame);
        if (scoreDelta !== 0) return scoreDelta;
        const aLen = Array.isArray(a?.games) ? a.games.length : Number.MAX_SAFE_INTEGER;
        const bLen = Array.isArray(b?.games) ? b.games.length : Number.MAX_SAFE_INTEGER;
        return aLen - bLen;
      });
    if (exactMatches[0]?.src) return exactMatches[0];
    const generic = entries.find(entry => entry?.src && (!Array.isArray(entry?.games) || !entry.games.length));
    if (generic?.src) return generic;
    return null;
  }
  return entries.find(entry => entry?.src) || null;
}

function getLocalTrainerPortraitUrl(trainer) {
  const manifest = getTrainerPortraitManifest();
  const game = getTrainerPortraitGame(trainer);
  const trainerClassId = Number(
    trainer?.readOnly?.trainerClassID ??
    trainer?.readOnly?.trainerClassId ??
    trainer?.trainerClassID ??
    trainer?.trainerClassId ??
    0
  );
  if (trainerClassId > 0) {
    const classIdKey = `${String(game || '').toLowerCase()}:${trainerClassId}`;
    const classIdMatch = getBestPortraitEntry(manifest.classId?.[classIdKey], game);
    if (classIdMatch?.src) return classIdMatch.src;
  }
  const rawName = cleanTrainerName(trainer?.readOnly?.name || trainer?.name || '');
  const englishName = getTrainerDisplayNameEn(trainer, rawName);
  const frenchName = getTrainerNameFr(trainer, rawName) || '';
  const labels = getTrainerClassLabels(trainer, englishName || rawName);
  const identityCandidates = uniqueNonEmpty([
    englishName,
    frenchName,
    rawName,
    stripTrainerClassPrefix(englishName, labels.en || labels.key || ''),
    stripTrainerClassPrefix(frenchName, labels.fr || ''),
    stripTrainerClassPrefix(rawName, labels.en || labels.key || ''),
  ]).map(normalizeTrainerPortraitKey);
  for (const key of identityCandidates) {
    const match = getBestPortraitEntry(manifest.identity?.[key], game);
    if (match?.src) return match.src;
  }
  const classCandidates = uniqueNonEmpty([
    normalizeTrainerPortraitKey(trainer?.trainerClass || ''),
    normalizeTrainerPortraitKey(trainer?.readOnly?.trainerClass || ''),
    TRAINER_PORTRAIT_CLASS_KEYS[labels.key] || '',
    TRAINER_PORTRAIT_CLASS_KEYS[labels.en] || '',
    TRAINER_PORTRAIT_CLASS_KEYS[labels.fr] || '',
    normalizeTrainerPortraitKey(labels.key),
    normalizeTrainerPortraitKey(labels.en),
    normalizeTrainerPortraitKey(labels.fr),
  ]);
  for (const key of classCandidates) {
    const match = getBestPortraitEntry(manifest.class?.[key], game);
    if (match?.src) return match.src;
  }
  return null;
}

function getPortraitUrl(trainer) {
  const localPortrait = getLocalTrainerPortraitUrl(trainer);
  if (localPortrait) return localPortrait;
  const rawName = cleanTrainerName(trainer?.readOnly?.name || trainer?.name || '');
  const englishName = getTrainerDisplayNameEn(trainer, rawName);
  for (const key of uniqueNonEmpty([
    normalizeTrainerPortraitKey(englishName),
    normalizeTrainerPortraitKey(rawName),
  ])) {
    if (TRAINER_IDENTITY_PORTRAITS[key]) return TRAINER_IDENTITY_PORTRAITS[key];
  }
  const label = trainer.nameLabel || '';
  for (const [key, url] of Object.entries(TRAINER_PORTRAITS)) { if (label.includes(key)) return url; }
  let cls = trainer.trainerClass || trainer.readOnly?.trainerClass || '';
  // For log format trainers, extract class from name
  if (!cls && trainer._logFullName) cls = parseTrainerClass(trainer._logFullName);
  if (!cls && trainer.readOnly?.name) cls = parseTrainerClass(trainer.readOnly.name);
  cls = normalizeTrainerClassKey(cls) || cls;
  const gen = detectedVersionInfo?.gen || 4;
  if (gen === 5) {
    const g5url = getGen5Portrait(cls);
    if (g5url) return g5url;
    for (const key of Object.keys(TRAINER_CLASS_PORTRAITS)) {
      if (cls && cls.toLowerCase().includes(key.toLowerCase())) { const u=getGen5Portrait(key); if(u) return u; }
    }
  }
  if (cls && TRAINER_CLASS_PORTRAITS[cls]) return TRAINER_CLASS_PORTRAITS[cls];
  for (const [key, url] of Object.entries(TRAINER_CLASS_PORTRAITS)) {
    if (cls && cls.toLowerCase().includes(key.toLowerCase())) return url;
  }
  return null;
}

function isUnknownTrainerName(name) {
  return /\bUNKNOWN\b/i.test(String(name || ''));
}

function getTrainerClassName(trainer, englishName = '') {
  return getTrainerClassLabels(trainer, englishName).key || '';
}

function getUnknownTrainerFallback(trainer, englishName = '') {
  const labels = getTrainerClassLabels(trainer, englishName);
  const cls = labels.key || '';
  const trainerId = trainer?.readOnly?.trainerID;
  const SPECIAL = {
    'Leader': { fr: 'Champion d\'Arène', en: 'Gym Leader' },
    'Champion': { fr: 'Champion d\'Arène', en: 'Gym Leader' },
    'Battle Chatelaine': { fr: 'Châtelaine de Combat', en: 'Battle Chatelaine' },
    'Elite Four': { fr: 'Membre du Conseil 4', en: 'Elite Four' },
    'Team Flare': { fr: 'Sbire Team Flare', en: 'Team Flare Grunt' },
    'Pokémon Trainer': { fr: 'Dresseur Pokémon', en: 'Pokémon Trainer' },
    'Pokemon Trainer': { fr: 'Dresseur Pokémon', en: 'Pokémon Trainer' },
    'Poké Fan Family': { fr: 'Famille Poké Fan', en: 'Poké Fan Family' },
    'Poké Fan': { fr: 'Poké Fan', en: 'Poké Fan' },
  };
  if (cls && SPECIAL[cls]) return SPECIAL[cls];
  if (cls) return {
    fr: labels.fr || TRAINER_CLASS_FR[cls] || cls,
    en: labels.en || cls,
  };
  return { fr: trainerId ? `Dresseur #${trainerId}` : 'Dresseur', en: trainerId ? `Trainer #${trainerId}` : 'Trainer' };
}

function getTrainerDisplayNameEn(trainer, englishName) {
  const override = getTrainerRuntimeOverride(trainer);
  const labels = getTrainerClassLabels(trainer, englishName);
  const overrideName = getTrainerOverrideFullName(override, 'en');
  const overrideBase = getTrainerOverrideBaseName(override, 'en');
  if (shouldHideGenericTrainerPrefix(labels.key, labels.fr, labels.en)) {
    const baseOnly = cleanTrainerName(
      overrideBase ||
      stripTrainerClassPrefix(overrideName, labels.en || labels.key || ''),
    );
    if (baseOnly) return baseOnly;
  }
  if (overrideName) return overrideName;
  const cleanName = cleanTrainerName(englishName || trainer?.readOnly?.name || '');
  if (!cleanName) return getUnknownTrainerFallback(trainer, englishName).en;
  if (isUnknownTrainerName(cleanName)) return getUnknownTrainerFallback(trainer, cleanName).en;
  if (shouldHideGenericTrainerPrefix(labels.key, labels.fr, labels.en)) {
    const baseOnly = stripTrainerClassPrefix(cleanName, labels.en || labels.key || '');
    if (baseOnly) return baseOnly;
  }
  return cleanName;
}

function getTrainerRoleLabels(trainer, englishName = '') {
  const cls = getTrainerClassName(trainer, englishName);
  const cleanName = getTrainerDisplayNameEn(trainer, englishName);
  const leagueChampions = new Set(['Cynthia','Diantha','Alder','Leon','Geeta','Blue','Wallace','Steven','Iris','Mustard']);
  if (leagueChampions.has(cleanName)) return { fr: 'Maître de la Ligue', en: 'League Champion' };
  if (cls === 'Champion' || cls === 'Leader') return { fr: 'Champion d\'Arène', en: 'Gym Leader' };
  if (cls === 'Elite Four') return { fr: 'Conseil 4', en: 'Elite Four' };
  if (cls === 'Battle Chatelaine') return { fr: 'Châtelaine de Combat', en: 'Battle Chatelaine' };
  if (cls === 'Kahuna' || cls === 'Island Kahuna') return { fr: 'Kahuna', en: 'Kahuna' };
  if (cls === 'Trial Captain' || cls === 'Captain') return { fr: 'Capitaine d\'Épreuve', en: 'Trial Captain' };
  const bossMap = {
    'Team Plasma': { fr: 'Team Plasma', en: 'Team Plasma' },
    'Galactic Grunt': { fr: 'Team Galaxie', en: 'Team Galactic' },
    'Team Skull Boss': { fr: 'Boss Team Skull', en: 'Team Skull Boss' },
    'Aether President': { fr: 'Présidente Aether', en: 'Aether President' },
  };
  if (cls && bossMap[cls]) return bossMap[cls];
  return { fr: '', en: '' };
}

function shouldPrefixTrainerRole(trainer, englishName = '') {
  const role = getTrainerRoleLabels(trainer, englishName);
  return !!(role.fr || role.en);
}

function buildTrainerDisplayName(trainer, englishName, lang = currentLang) {
  const baseFr = getTrainerNameFr(trainer, englishName) || getTrainerDisplayNameEn(trainer, englishName);
  const baseEn = getTrainerDisplayNameEn(trainer, englishName);
  const role = getTrainerRoleLabels(trainer, englishName);
  const shouldPrefix = shouldPrefixTrainerRole(trainer, englishName);
  const labels = getTrainerClassLabels(trainer, englishName);
  const cls = labels.key || '';
  const classFr = labels.fr || (cls ? (TRAINER_CLASS_FR[cls] || cls) : '');
  const classEn = labels.en || cls;
  const hideGenericPrefix = shouldHideGenericTrainerPrefix(cls, classFr, classEn);
  const useClassPrefix = !!(cls && !shouldPrefix && !hideGenericPrefix);
  const baseFrKey = normalizeLookupKey(baseFr);
  const baseEnKey = normalizeLookupKey(baseEn);
  const classFrKey = normalizeLookupKey(classFr);
  const classEnKey = normalizeLookupKey(classEn);
  const genericNameKeys = new Set(['grunt','sbire','admin','boss','leader','captain','kahuna','trainer']);
  if (lang === 'fr') {
    if (shouldPrefix && role.fr && baseFr && !baseFr.toLowerCase().startsWith(role.fr.toLowerCase())) return `${role.fr} : ${baseFr}`;
    if (useClassPrefix && classFr && (!baseFr || genericNameKeys.has(baseFrKey) || baseFrKey === classFrKey)) return classFr;
    if (useClassPrefix && classFr && baseFr && !baseFr.toLowerCase().startsWith(classFr.toLowerCase())) return `${classFr} ${baseFr}`;
    return baseFr;
  }
  if (shouldPrefix && role.en && baseEn && !baseEn.toLowerCase().startsWith(role.en.toLowerCase())) return `${role.en}: ${baseEn}`;
  if (useClassPrefix && classEn && (!baseEn || genericNameKeys.has(baseEnKey) || baseEnKey === classEnKey)) return classEn;
  if (useClassPrefix && classEn && baseEn && !baseEn.toLowerCase().startsWith(classEn.toLowerCase())) return `${classEn} ${baseEn}`;
  return baseEn;
}

function shouldShowTrainerAltSubtitle(trainer, displayNameFr = '', displayNameEn = '') {
  const frName = cleanTrainerName(displayNameFr);
  const enName = cleanTrainerName(displayNameEn);
  if (!frName || !enName || frName === enName) return false;
  const labels = getTrainerClassLabels(trainer, enName);
  const strippedFr = normalizeLookupKey(stripTrainerClassPrefix(frName, labels.fr || ''));
  const strippedEn = normalizeLookupKey(stripTrainerClassPrefix(enName, labels.en || labels.key || ''));
  if (strippedFr && strippedEn && strippedFr === strippedEn && !shouldPrefixTrainerRole(trainer, enName)) {
    return false;
  }
  return true;
}

function getTrainerDisplayNameCached(trainer, englishName, lang = currentLang) {
  const trainerId = String(trainer?.readOnly?.trainerID ?? '');
  const cacheKey = `${trainerDisplayCacheVersion}|${lang}|${trainerId}|${englishName}`;
  if (trainerDisplayCache.has(cacheKey)) return trainerDisplayCache.get(cacheKey);
  const value = buildTrainerDisplayName(trainer, englishName, lang);
  trainerDisplayCache.set(cacheKey, value);
  return value;
}

// Strip [PK][MN] and similar escape sequences from trainer names
function cleanTrainerName(name) {
  return String(name || '')
    .replace(/\\?\[PK\]\\?\[MN\]/gi, '')
    .replace(/\[PK\]\[MN\]/gi, '')
    .replace(/[_]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/^\s*[:\-–—•;,./]+\s*/, '')
    .replace(/\s*[:\-–—•;,./]+\s*$/, '')
    .trim();
}

// Parse trainer class from full name string (e.g. "Youngster Joey" → "Youngster")
function parseTrainerClass(fullName) {
  const classes = Object.keys(TRAINER_CLASS_FR).concat(Object.keys(TRAINER_CLASS_PORTRAITS));
  // Sort by length descending to match longest class name first
  classes.sort((a,b)=>b.length-a.length);
  for (const cls of classes) {
    if (fullName.startsWith(cls+' ') || fullName === cls) return cls;
  }
  const normalized = normalizeTrainerClassKey(fullName);
  if (normalized) return normalized;
  // Fallback: first word
  return fullName.split(' ')[0] || '';
}

// Translate a full trainer name from English to French
// Input: "Youngster Joey", Output: "Gamin Joey"
function translateTrainerName(fullName) {
  if (!fullName) return null;
  const trainerClass = parseTrainerClass(fullName);
  if (!trainerClass) return null;
  const frClass = TRAINER_CLASS_FR[trainerClass];
  if (!frClass) return null;
  const personalName = fullName.slice(trainerClass.length).trim();
  return personalName ? `${frClass} ${personalName}` : frClass;
}

function getTrainerNameFr(trainer, englishName) {
  const override = getTrainerRuntimeOverride(trainer);
  const labels = getTrainerClassLabels(trainer, englishName);
  const overrideName = getTrainerOverrideFullName(override, 'fr');
  const overrideBase = getTrainerOverrideBaseName(override, 'fr');
  if (shouldHideGenericTrainerPrefix(labels.key, labels.fr, labels.en)) {
    const baseOnly = cleanTrainerName(
      overrideBase ||
      stripTrainerClassPrefix(overrideName, labels.fr || TRAINER_CLASS_FR[labels.key || ''] || ''),
    );
    if (baseOnly) return baseOnly;
  }
  if (overrideName) return overrideName;
  if (isUnknownTrainerName(englishName)) return getUnknownTrainerFallback(trainer, englishName).fr;
  const label = trainer.nameLabel || '';
  for (const [key, frName] of Object.entries(TRAINER_LABEL_FR)) { if (label.includes(key)) return frName; }
  const TRAINER_NAMES_FR = {
    'Barry':'Pierrick','Roark':'Pierre','Gardenia':'Germaine','Fantina':'Fantina',
    'Maylene':'Mélina','Crasher Wake':'Corsèque','Byron':'Gabin','Candice':'Gladys',
    'Volkner':'Tanguy','Aaron':'Adrien','Bertha':'Bertha','Flint':'Victor','Lucian':'Lucio',
    'Cynthia':'Cynthia','Cyrus':'Hélio','Mars':'Mars','Jupiter':'Jupiter','Saturn':'Saturne',
    // Gen5 leaders
    'Chili':'Flachy','Cilan':'Rachid','Cress':'Clim','Lenora':'Aloe','Burgh':'Artie',
    'Elesa':'Camilla','Clay':'Laurent','Skyla':'Skyla','Brycen':'Bryan','Iris':'Iris',
    'Drayden':'Drayden','Roxie':'Roxie','Marlon':'Amana','Cheren':'Cheren','Colress':'Achrome',
    'Ghetsis':'Ghetis','N':'N','Bianca':'Bianca','Hugh':'Hugo',
    // Gen6 leaders / elite four
    'Viola':'Violette','Grant':'Lino','Korrina':'Cornélia','Ramos':'Amaro',
    'Clemont':'Lem','Valerie':'Valériane','Olympia':'Astera','Wulfric':'Urup',
    'Wikstrom':'Thyméo','Siebold':'Narcisse','Diantha':'Dianthéa',
    // Gen7
    'Hau':'Hala','Gladion':'Gladio','Lusamine':'Lusamine','Faba':'Faba',
    'Nanu':'Nanu','Olivia':'Olivia','Lana':'Lana','Kiawe':'Kiawe',
    'Mallow':'Mallow','Sophocles':'Sophocles','Acerola':'Acerola','Ilima':'Ilima',
  };
  if (TRAINER_NAMES_FR[englishName]) return TRAINER_NAMES_FR[englishName];
  // For log format trainers, try to translate the full "Class Name" string
  const translated = translateTrainerName(englishName);
  if (translated) {
    if (shouldHideGenericTrainerPrefix(labels.key, labels.fr, labels.en)) {
      const baseOnly = stripTrainerClassPrefix(translated, labels.fr || TRAINER_CLASS_FR[labels.key || ''] || '');
      return baseOnly || translated;
    }
    return translated;
  }
  return null;
}

function groupKeyToName(groupKey) {
  const sep = groupKey.indexOf('__'); return sep >= 0 ? groupKey.substring(sep + 2) : groupKey;
}

function normalizeLookupKey(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/œ/g, 'oe')
    .replace(/Œ/g, 'oe')
    .replace(/♀/g, ' female ')
    .replace(/♂/g, ' male ')
    .replace(/['’.]/g, ' ')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

function buildLooseLookupKeys(value) {
  const raw = String(value || '').trim();
  const spaced = raw
    .replace(/([a-zà-ÿ])([A-ZÀ-Ÿ])/g, '$1 $2')
    .replace(/([A-ZÀ-Ÿ])([A-ZÀ-Ÿ][a-zà-ÿ])/g, '$1 $2');
  const normalizedRaw = normalizeLookupKey(raw);
  const normalizedSpaced = normalizeLookupKey(spaced);
  const slugRaw = moveSlug(raw);
  const slugSpaced = moveSlug(spaced);
  return [...new Set([
    raw.toLowerCase(),
    normalizedRaw,
    normalizedSpaced,
    normalizedRaw.replace(/\s+/g, ''),
    normalizedSpaced.replace(/\s+/g, ''),
    slugRaw,
    slugSpaced,
    String(slugRaw || '').replace(/-/g, ''),
    String(slugSpaced || '').replace(/-/g, ''),
  ].filter(Boolean))];
}

async function searchWikiTitle(baseUrl, query) {
  const clean = String(query || '').trim();
  if (!clean) return null;
  const cacheKey = `${baseUrl}::${normalizeLookupKey(clean)}`;
  if (translationCache.wikiSearches[cacheKey] !== undefined) return translationCache.wikiSearches[cacheKey];
  translationCache.wikiSearches[cacheKey] = (async () => {
    try {
      const url = `${baseUrl}?action=opensearch&search=${encodeURIComponent(clean)}&limit=1&namespace=0&format=json&origin=*`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      return data?.[1]?.[0] || null;
    } catch (e) {
      return null;
    }
  })();
  return translationCache.wikiSearches[cacheKey];
}

async function resolveWikiLabels(kind, rawName) {
  const clean = String(rawName || '').trim();
  if (!clean || isLumiRom) return null;
  const candidates = uniqueNonEmpty([
    kind === 'pokemon' ? sanitizePokemonSourceName(clean) : clean,
    cleanMoveDisplayName(clean),
    formatPokemonDisplayName(clean),
    stripDiacritics(clean),
    ...buildLooseLookupKeys(clean).map(v => String(v || '').replace(/-/g, ' ')),
  ]);
  for (const candidate of candidates) {
    const [frTitle, enTitle] = await Promise.all([
      searchWikiTitle('https://www.pokepedia.fr/api.php', candidate),
      searchWikiTitle('https://bulbapedia.bulbagarden.net/w/api.php', candidate),
    ]);
    if (frTitle || enTitle) return { fr: sanitizeWikiTitle(frTitle || clean, kind), en: sanitizeWikiTitle(enTitle || candidate, kind), source: 'wiki' };
  }
  return null;
}

function sanitizeWikiTitle(title, kind = '') {
  const raw = String(title || '').replace(/_/g, ' ').trim();
  if (!raw) return '';
  let cleaned = raw
    .replace(/\s*\((Pokémon|Pokemon|move|attaque|Ability|Talent|Item|Objet)\)\s*$/i, '')
    .replace(/\s*\((game|anime|manga)\)\s*$/i, '')
    .trim();
  if (kind === 'pokemon') cleaned = cleaned.replace(/\s*\([^)]*\)\s*$/i, '').trim();
  return cleaned;
}

function sanitizePokemonSourceName(name) {
  const raw = String(name || '').replace(/\s+/g, ' ').trim();
  if (!raw) return '';
  return raw
    .replace(/\s*\((?:Pokémon|Pokemon)[^)]*\)\s*$/i, '')
    .replace(/\s*\((?:EX|SV|Promo|Base Set|Team|Trading Card Game|TCG|Deck)[^)]*\)\s*$/i, '')
    .replace(/\s*\([^)]*\d+\)\s*$/i, '')
    .trim();
}

const TYPE_FR = {
  Normal:'Normal', Fire:'Feu', Water:'Eau', Electric:'Électrik', Grass:'Plante', Ice:'Glace',
  Fighting:'Combat', Poison:'Poison', Ground:'Sol', Flying:'Vol', Psychic:'Psy',
  Bug:'Insecte', Rock:'Roche', Ghost:'Spectre', Dragon:'Dragon', Dark:'Ténèbres',
  Steel:'Acier', Fairy:'Fée'
};

const TYPE_BY_ID = {
  0: 'Normal',
  1: 'Fighting',
  2: 'Flying',
  3: 'Poison',
  4: 'Ground',
  5: 'Rock',
  6: 'Bug',
  7: 'Ghost',
  8: 'Steel',
  9: 'Fire',
  10: 'Water',
  11: 'Grass',
  12: 'Electric',
  13: 'Psychic',
  14: 'Ice',
  15: 'Dragon',
  16: 'Dark',
  17: 'Fairy',
};

const TYPE_EN_BY_LOCALIZED = Object.fromEntries(Object.entries(TYPE_FR).map(([en, fr]) => [fr, en]));

const TYPE_FR_LONG = {
  ...TYPE_FR,
  Electric:'Électrik',
  Psychic:'Psy',
};

function formatTypeLabelFr(typeName) {
  return TYPE_FR[typeName] || typeName;
}

function normalizeTypeNameToEnglish(typeName) {
  const raw = String(typeName || '').trim();
  if (!raw) return '';
  const normalized = raw.charAt(0).toUpperCase() + raw.slice(1);
  return TYPE_EN_BY_LOCALIZED[normalized] || normalized;
}

function resolveCanonicalTypeNames(typeNames, typeIds) {
  const names = [...new Set((typeNames || []).map(normalizeTypeNameToEnglish).filter(Boolean))];
  if (names.length) return names;
  const ids = Array.isArray(typeIds) ? typeIds.map(id => Number(id)).filter(id => Number.isInteger(id) && TYPE_BY_ID[id]) : [];
  if (ids.length) {
    return [...new Set(ids.map(id => TYPE_BY_ID[id]).filter(Boolean))];
  }
  return [];
}

const POKEMON_FR_MANUAL = {
  "abomasnow":"Blizzaroi",
  "abra":"Abra",
  "absol":"Absol",
  "accelgor":"Limaspeed",
  "aegislash":"Exagide",
  "aerodactyl":"Ptéra",
  "aggron":"Galeking",
  "aipom":"Capumain",
  "alakazam":"Alakazam",
  "alcremie":"Charmilly",
  "alomomola":"Mamanbo",
  "altaria":"Altaria",
  "amaura":"Amagara",
  "ambipom":"Capidextre",
  "amoonguss":"Gaulet",
  "ampharos":"Pharamp",
  "anorith":"Anorith",
  "appletun":"Dratatin",
  "applin":"Verpom",
  "araquanid":"Tarenbulle",
  "arbok":"Arbok",
  "arcanine":"Arcanin",
  "arceus":"Arceus",
  "archen":"Arkéapti",
  "archeops":"Aéroptéryx",
  "arctovish":"Hydragla",
  "arctozolt":"Galvagla",
  "ariados":"Migalos",
  "armaldo":"Armaldo",
  "aromatisse":"Cocotine",
  "aron":"Galekid",
  "arrokuda":"Embrochet",
  "articuno":"Artikodin",
  "audino":"Nanméouïe",
  "aurorus":"Dragmara",
  "avalugg":"Séracrawl",
  "axew":"Coupenotte",
  "azelf":"Créfadet",
  "azumarill":"Azumarill",
  "azurill":"Azurill",
  "bagon":"Draby",
  "baltoy":"Balbuto",
  "banette":"Branette",
  "barbaracle":"Golgopathe",
  "barboach":"Barloche",
  "barraskewda":"Hastacuda",
  "basculin":"Bargantua",
  "bastiodon":"Bastiodon",
  "bayleef":"Macronium",
  "beartic":"Polagriffe",
  "beautifly":"Charmillon",
  "beedrill":"Dardargnan",
  "beheeyem":"Neitram",
  "beldum":"Terhal",
  "bellossom":"Joliflor",
  "bellsprout":"Chétiflor",
  "bergmite":"Grelaçon",
  "bewear":"Chelours",
  "bibarel":"Castorno",
  "bidoof":"Keunotor",
  "binacle":"Opermine",
  "bisharp":"Scalproie",
  "blacephalon":"Pierroteknik",
  "blastoise":"Tortank",
  "blaziken":"Braségali",
  "blipbug":"Larvadar",
  "blissey":"Leuphorie",
  "blitzle":"Zébibron",
  "boldore":"Géolithe",
  "boltund":"Fulgudog",
  "bonsly":"Manzaï",
  "bouffalant":"Frison",
  "bounsweet":"Croquine",
  "braixen":"Roussil",
  "braviary":"Gueriaigle",
  "breloom":"Chapignon",
  "brionne":"Otarlette",
  "bronzong":"Archéodong",
  "bronzor":"Archéomire",
  "bruxish":"Denticrisse",
  "budew":"Rozbouton",
  "buizel":"Mustébouée",
  "bulbasaur":"Bulbizarre",
  "buneary":"Laporeille",
  "bunnelby":"Sapereau",
  "burmy":"Cheniti",
  "butterfree":"Papilusion",
  "buzzwole":"Mouscoto",
  "cacnea":"Cacnea",
  "cacturne":"Cacturne",
  "calyrex":"Sylveroy",
  "camerupt":"Camérupt",
  "carbink":"Strassie",
  "carkol":"Wagomine",
  "carnivine":"Vortente",
  "carracosta":"Mégapagos",
  "carvanha":"Carvanha",
  "cascoon":"Blindalys",
  "castform":"Morphéo",
  "caterpie":"Chenipan",
  "celebi":"Celebi",
  "celesteela":"Bamboiselle",
  "centiskorch":"Scolocendre",
  "chandelure":"Lugulabre",
  "chansey":"Leveinard",
  "charizard":"Dracaufeu",
  "charjabug":"Chrysapile",
  "charmander":"Salamèche",
  "charmeleon":"Reptincel",
  "chatot":"Pijako",
  "cherrim":"Ceriflor",
  "cherubi":"Ceribou",
  "chesnaught":"Blindépique",
  "chespin":"Marisson",
  "chewtle":"Khélocrok",
  "chikorita":"Germignon",
  "chimchar":"Ouisticram",
  "chimecho":"Éoko",
  "chinchou":"Loupio",
  "chingling":"Korillon",
  "cinccino":"Pashmilla",
  "cinderace":"Pyrobut",
  "clamperl":"Coquiperl",
  "clauncher":"Flingouste",
  "clawitzer":"Gamblast",
  "claydol":"Kaorine",
  "clefable":"Mélodelfe",
  "clefairy":"Mélofée",
  "cleffa":"Mélo",
  "clobbopus":"Poulpaf",
  "cloyster":"Crustabri",
  "coalossal":"Monthracite",
  "cobalion":"Cobaltium",
  "cofagrigus":"Tutankafer",
  "combee":"Apitrini",
  "combusken":"Galifeu",
  "comfey":"Guérilande",
  "conkeldurr":"Bétochef",
  "copperajah":"Pachyradjah",
  "corphish":"Écrapince",
  "corsola":"Corayon",
  "corviknight":"Corvaillus",
  "corvisquire":"Bleuseille",
  "cosmoem":"Cosmovum",
  "cosmog":"Cosmog",
  "cottonee":"Doudouvet",
  "crabominable":"Crabominable",
  "crabrawler":"Crabagarre",
  "cradily":"Vacilys",
  "cramorant":"Nigosier",
  "cranidos":"Kranidos",
  "crawdaunt":"Colhomard",
  "cresselia":"Cresselia",
  "croagunk":"Cradopaud",
  "crobat":"Nostenfer",
  "croconaw":"Crocrodil",
  "crustle":"Crabaraque",
  "cryogonal":"Hexagel",
  "cubchoo":"Polarhume",
  "cubone":"Osselait",
  "cufant":"Charibari",
  "cursola":"Corayôme",
  "cutiefly":"Bombydou",
  "cyndaquil":"Héricendre",
  "darkrai":"Darkrai",
  "darmanitan":"Darumacho",
  "dartrix":"Efflèche",
  "darumaka":"Darumarond",
  "decidueye":"Archéduc",
  "dedenne":"Dedenne",
  "deerling":"Vivaldaim",
  "deino":"Solochi",
  "delcatty":"Delcatty",
  "delibird":"Cadoizo",
  "delphox":"Goupelin",
  "deoxys":"Deoxys",
  "dewgong":"Lamantine",
  "dewott":"Mateloutre",
  "dewpider":"Araqua",
  "dhelmise":"Sinistrail",
  "dialga":"Dialga",
  "diancie":"Diancie",
  "diggersby":"Excavarenne",
  "diglett":"Taupiqueur",
  "ditto":"Métamorph",
  "dodrio":"Dodrio",
  "doduo":"Doduo",
  "donphan":"Donphan",
  "dottler":"Coléodôme",
  "doublade":"Dimoclès",
  "dracovish":"Hydragon",
  "dracozolt":"Galvagon",
  "dragalge":"Kravarech",
  "dragapult":"Lanssorien",
  "dragonair":"Draco",
  "dragonite":"Dracolosse",
  "drakloak":"Dispareptil",
  "drampa":"Draïeul",
  "drapion":"Drascore",
  "dratini":"Minidraco",
  "drednaw":"Torgamord",
  "dreepy":"Fantyrm",
  "drifblim":"Grodrive",
  "drifloon":"Baudrive",
  "drilbur":"Rototaupe",
  "drizzile":"Arrozard",
  "drowzee":"Soporifik",
  "druddigon":"Drakkarmin",
  "dubwool":"Moumouflon",
  "ducklett":"Couaneton",
  "dugtrio":"Triopikeur",
  "dunsparce":"Insolourdo",
  "duosion":"Méios",
  "duraludon":"Duralugon",
  "durant":"Fermite",
  "dusclops":"Téraclope",
  "dusknoir":"Noctunoir",
  "duskull":"Skelénox",
  "dustox":"Papinox",
  "dwebble":"Crabicoque",
  "eelektrik":"Lampéroie",
  "eelektross":"Ohmassacre",
  "eevee":"Évoli",
  "eiscue":"Bekaglaçon",
  "ekans":"Abo",
  "eldegoss":"Blancoton",
  "electabuzz":"Élektek",
  "electivire":"Élekable",
  "electrike":"Dynavolt",
  "electrode":"Électrode",
  "elekid":"Élekid",
  "elgyem":"Lewsor",
  "emboar":"Roitiflam",
  "emolga":"Emolga",
  "empoleon":"Pingoléon",
  "entei":"Entei",
  "escavalier":"Lançargot",
  "espeon":"Mentali",
  "espurr":"Psystigri",
  "eternatus":"Éthernatos",
  "excadrill":"Minotaupe",
  "exeggcute":"Noeunoeuf",
  "exeggutor":"Noadkoko",
  "exploud":"Brouhabam",
  "falinks":"Hexadron",
  "farfetchd":"Canarticho",
  "fearow":"Rapasdepic",
  "feebas":"Barpau",
  "fennekin":"Feunnec",
  "feraligatr":"Aligatueur",
  "ferroseed":"Grindur",
  "ferrothorn":"Noacier",
  "finneon":"Écayon",
  "flaaffy":"Lainergie",
  "flabebe":"Flabébé",
  "flapple":"Pomdrapi",
  "flareon":"Pyroli",
  "fletchinder":"Braisillon",
  "fletchling":"Passerouge",
  "floatzel":"Mustéflott",
  "floette":"Floette",
  "florges":"Florges",
  "flygon":"Libégon",
  "fomantis":"Mimantis",
  "foongus":"Trompignon",
  "forretress":"Foretress",
  "fraxure":"Incisache",
  "frillish":"Viskuse",
  "froakie":"Grenousse",
  "frogadier":"Croâporal",
  "froslass":"Momartik",
  "frosmoth":"Beldeneige",
  "furfrou":"Couafarel",
  "furret":"Fouinar",
  "gabite":"Carmache",
  "gallade":"Gallame",
  "galvantula":"Mygavolt",
  "garbodor":"Miasmax",
  "garchomp":"Carchacrok",
  "gardevoir":"Gardevoir",
  "gastly":"Fantominus",
  "gastrodon":"Tritosor",
  "genesect":"Genesect",
  "gengar":"Ectoplasma",
  "geodude":"Racaillou",
  "gible":"Griknot",
  "gigalith":"Gigalithe",
  "girafarig":"Girafarig",
  "giratina":"Giratina",
  "glaceon":"Givrali",
  "glalie":"Oniglali",
  "glameow":"Chaglam",
  "glastrier":"Blizzeval",
  "gligar":"Scorplane",
  "gliscor":"Scorvol",
  "gloom":"Ortide",
  "gogoat":"Chevroum",
  "golbat":"Nosferalto",
  "goldeen":"Poissirène",
  "golduck":"Akwakwak",
  "golem":"Grolem",
  "golett":"Gringolem",
  "golisopod":"Sarmuraï",
  "golurk":"Golemastoc",
  "goodra":"Muplodocus",
  "goomy":"Mucuscule",
  "gorebyss":"Rosabyss",
  "gossifleur":"Tournicoton",
  "gothita":"Scrutella",
  "gothitelle":"Sidérella",
  "gothorita":"Mesmérella",
  "gourgeist":"Banshitrouye",
  "granbull":"Granbull",
  "grapploct":"Krakos",
  "graveler":"Gravalanch",
  "greedent":"Rongrigou",
  "greninja":"Amphinobi",
  "grimer":"Tadmorv",
  "grimmsnarl":"Angoliath",
  "grookey":"Ouistempo",
  "grotle":"Boskara",
  "groudon":"Groudon",
  "grovyle":"Massko",
  "growlithe":"Caninos",
  "grubbin":"Larvibule",
  "grumpig":"Groret",
  "gulpin":"Gloupti",
  "gumshoos":"Argouste",
  "gurdurr":"Ouvrifier",
  "guzzlord":"Engloutyran",
  "gyarados":"Léviator",
  "hakamo-o":"Écaïd",
  "happiny":"Ptiravi",
  "hariyama":"Hariyama",
  "hatenna":"Bibichut",
  "hatterene":"Sorcilence",
  "hattrem":"Chapotus",
  "haunter":"Spectrum",
  "hawlucha":"Brutalibré",
  "haxorus":"Tranchodon",
  "heatmor":"Aflamanoir",
  "heatran":"Heatran",
  "heliolisk":"Iguolta",
  "helioptile":"Galvaran",
  "heracross":"Scarhino",
  "herdier":"Ponchien",
  "hippopotas":"Hippopotas",
  "hippowdon":"Hippodocus",
  "hitmonchan":"Tygnon",
  "hitmonlee":"Kicklee",
  "hitmontop":"Kapoera",
  "ho-oh":"Ho-Oh",
  "honchkrow":"Corboss",
  "honedge":"Monorpale",
  "hoopa":"Hoopa",
  "hoothoot":"Hoothoot",
  "hoppip":"Granivol",
  "horsea":"Hypotrempe",
  "houndoom":"Démolosse",
  "houndour":"Malosse",
  "huntail":"Serpang",
  "hydreigon":"Trioxhydre",
  "hypno":"Hypnomade",
  "igglybuff":"Toudoudou",
  "illumise":"Lumivole",
  "impidimp":"Grimalin",
  "incineroar":"Félinferno",
  "indeedee":"Wimessir",
  "infernape":"Simiabraz",
  "inkay":"Sepiatop",
  "inteleon":"Lézargus",
  "ivysaur":"Herbizarre",
  "jangmo-o":"Bébécaille",
  "jellicent":"Moyade",
  "jigglypuff":"Rondoudou",
  "jirachi":"Jirachi",
  "jolteon":"Voltali",
  "joltik":"Statitik",
  "jumpluff":"Cotovol",
  "jynx":"Lippoutou",
  "kabuto":"Kabuto",
  "kabutops":"Kabutops",
  "kadabra":"Kadabra",
  "kakuna":"Coconfort",
  "kangaskhan":"Kangourex",
  "karrablast":"Carabing",
  "kartana":"Katagami",
  "kecleon":"Kecleon",
  "keldeo":"Keldeo",
  "kingdra":"Hyporoi",
  "kingler":"Krabboss",
  "kirlia":"Kirlia",
  "klang":"Clic",
  "klefki":"Trousselin",
  "klink":"Tic",
  "klinklang":"Cliticlic",
  "koffing":"Smogo",
  "komala":"Dodoala",
  "kommo-o":"Ékaïser",
  "krabby":"Krabby",
  "kricketot":"Crikzik",
  "kricketune":"Mélokrik",
  "krokorok":"Escroco",
  "krookodile":"Crocorible",
  "kubfu":"Wushours",
  "kyogre":"Kyogre",
  "kyurem":"Kyurem",
  "lairon":"Galegon",
  "lampent":"Mélancolux",
  "landorus":"Démétéros",
  "lanturn":"Lanturn",
  "lapras":"Lokhlass",
  "larvesta":"Pyronille",
  "larvitar":"Embrylex",
  "latias":"Latias",
  "latios":"Latios",
  "leafeon":"Phyllali",
  "leavanny":"Manternel",
  "ledian":"Coxyclaque",
  "ledyba":"Coxy",
  "lickilicky":"Coudlangue",
  "lickitung":"Excelangue",
  "liepard":"Léopardus",
  "lileep":"Lilia",
  "lilligant":"Fragilady",
  "lillipup":"Ponchiot",
  "linoone":"Linéon",
  "litleo":"Hélionceau",
  "litten":"Flamiaou",
  "litwick":"Funécire",
  "lombre":"Lombre",
  "lopunny":"Lockpin",
  "lotad":"Nénupiot",
  "loudred":"Ramboum",
  "lucario":"Lucario",
  "ludicolo":"Ludicolo",
  "lugia":"Lugia",
  "lumineon":"Luminéon",
  "lunala":"Lunala",
  "lunatone":"Séléroc",
  "lurantis":"Floramantis",
  "luvdisc":"Lovdisc",
  "luxio":"Luxio",
  "luxray":"Luxray",
  "lycanroc":"Lougaroc",
  "machamp":"Mackogneur",
  "machoke":"Machopeur",
  "machop":"Machoc",
  "magby":"Magby",
  "magcargo":"Volcaropod",
  "magearna":"Magearna",
  "magikarp":"Magicarpe",
  "magmar":"Magmar",
  "magmortar":"Maganon",
  "magnemite":"Magnéti",
  "magneton":"Magnéton",
  "magnezone":"Magnézone",
  "makuhita":"Makuhita",
  "malamar":"Sepiatroce",
  "mamoswine":"Mammochon",
  "manaphy":"Manaphy",
  "mandibuzz":"Vaututrice",
  "manectric":"Élecsprint",
  "mankey":"Férosinge",
  "mantine":"Démanta",
  "mantyke":"Babimanta",
  "maractus":"Maracachi",
  "mareanie":"Vorastérie",
  "mareep":"Wattouat",
  "marill":"Marill",
  "marowak":"Ossatueur",
  "marshadow":"Marshadow",
  "marshtomp":"Flobio",
  "masquerain":"Maskadra",
  "mawile":"Mysdibule",
  "medicham":"Charmina",
  "meditite":"Méditikka",
  "meganium":"Méganium",
  "melmetal":"Melmetal",
  "meloetta":"Meloetta",
  "meltan":"Meltan",
  "meowstic":"Mistigrix",
  "meowth":"Miaouss",
  "mesprit":"Créfollet",
  "metagross":"Métalosse",
  "metang":"Métang",
  "metapod":"Chrysacier",
  "mew":"Mew",
  "mewtwo":"Mewtwo",
  "mienfoo":"Kungfouine",
  "mienshao":"Shaofouine",
  "mightyena":"Grahyèna",
  "milcery":"Crèmy",
  "milotic":"Milobellus",
  "miltank":"Écrémeuh",
  "mime-jr":"Mime Jr.",
  "mimikyu":"Mimiqui",
  "minccino":"Chinchidou",
  "minior":"Météno",
  "minun":"Négapi",
  "misdreavus":"Feuforêve",
  "mismagius":"Magirêve",
  "moltres":"Sulfura",
  "monferno":"Chimpenfeu",
  "morelull":"Spododo",
  "morgrem":"Fourbelin",
  "morpeko":"Morpeko",
  "mothim":"Papilord",
  "mr-mime":"M. Mime",
  "mr-rime":"M. Glaquette",
  "mudbray":"Tiboudet",
  "mudkip":"Gobou",
  "mudsdale":"Bourrinos",
  "muk":"Grotadmorv",
  "munchlax":"Goinfrex",
  "munna":"Munna",
  "murkrow":"Cornèbre",
  "musharna":"Mushana",
  "naganadel":"Mandrillon",
  "natu":"Natu",
  "necrozma":"Necrozma",
  "nickit":"Goupilou",
  "nidoking":"Nidoking",
  "nidoqueen":"Nidoqueen",
  "nidoran-f":"Nidoran♀",
  "nidoran-m":"Nidoran♂",
  "nidorina":"Nidorina",
  "nidorino":"Nidorino",
  "nihilego":"Zéroïd",
  "nincada":"Ningale",
  "ninetales":"Feunard",
  "ninjask":"Ninjask",
  "noctowl":"Noarfang",
  "noibat":"Sonistrelle",
  "noivern":"Bruyverne",
  "nosepass":"Tarinor",
  "numel":"Chamallot",
  "nuzleaf":"Pifeuil",
  "obstagoon":"Ixon",
  "octillery":"Octillery",
  "oddish":"Mystherbe",
  "omanyte":"Amonita",
  "omastar":"Amonistar",
  "onix":"Onix",
  "oranguru":"Gouroutan",
  "orbeetle":"Astronelle",
  "oricorio":"Plumeline",
  "oshawott":"Moustillon",
  "pachirisu":"Pachirisu",
  "palkia":"Palkia",
  "palossand":"Trépassable",
  "palpitoad":"Batracné",
  "pancham":"Pandespiègle",
  "pangoro":"Pandarbare",
  "panpour":"Flotajou",
  "pansage":"Feuillajou",
  "pansear":"Flamajou",
  "paras":"Paras",
  "parasect":"Parasect",
  "passimian":"Quartermac",
  "patrat":"Ratentif",
  "pawniard":"Scalpion",
  "pelipper":"Bekipan",
  "perrserker":"Berserkatt",
  "persian":"Persian",
  "petilil":"Chlorobule",
  "phanpy":"Phanpy",
  "phantump":"Brocélôme",
  "pheromosa":"Cancrelove",
  "phione":"Phione",
  "pichu":"Pichu",
  "pidgeot":"Roucarnage",
  "pidgeotto":"Roucoups",
  "pidgey":"Roucool",
  "pidove":"Poichigeon",
  "pignite":"Grotichon",
  "pikachu":"Pikachu",
  "pikipek":"Picassaut",
  "piloswine":"Cochignon",
  "pincurchin":"Wattapik",
  "pineco":"Pomdepik",
  "pinsir":"Scarabrute",
  "piplup":"Tiplouf",
  "plusle":"Posipi",
  "poipole":"Vémini",
  "politoed":"Tarpaud",
  "poliwag":"Ptitard",
  "poliwhirl":"Têtarte",
  "poliwrath":"Tartard",
  "polteageist":"Polthégeist",
  "ponyta":"Ponyta",
  "poochyena":"Medhyèna",
  "popplio":"Otaquin",
  "porygon":"Porygon",
  "porygon-z":"Porygon-Z",
  "porygon2":"Porygon2",
  "primarina":"Oratoria",
  "primeape":"Colossinge",
  "prinplup":"Prinplouf",
  "probopass":"Tarinorme",
  "psyduck":"Psykokwak",
  "pumpkaboo":"Pitrouille",
  "pupitar":"Ymphect",
  "purrloin":"Chacripan",
  "purugly":"Chaffreux",
  "pyroar":"Némélios",
  "pyukumuku":"Concombaffe",
  "quagsire":"Maraiste",
  "quilava":"Feurisson",
  "quilladin":"Boguérisse",
  "qwilfish":"Qwilfish",
  "raboot":"Lapyro",
  "raichu":"Raichu",
  "raikou":"Raikou",
  "ralts":"Tarsal",
  "rampardos":"Charkos",
  "rapidash":"Galopa",
  "raticate":"Rattatac",
  "rattata":"Rattata",
  "rayquaza":"Rayquaza",
  "regice":"Regice",
  "regidrago":"Regidrago",
  "regieleki":"Regieleki",
  "regigigas":"Regigigas",
  "regirock":"Regirock",
  "registeel":"Registeel",
  "relicanth":"Relicanth",
  "remoraid":"Rémoraid",
  "reshiram":"Reshiram",
  "reuniclus":"Symbios",
  "rhydon":"Rhinoféros",
  "rhyhorn":"Rhinocorne",
  "rhyperior":"Rhinastoc",
  "ribombee":"Rubombelle",
  "rillaboom":"Gorythmic",
  "riolu":"Riolu",
  "rockruff":"Rocabot",
  "roggenrola":"Nodulithe",
  "rolycoly":"Charbi",
  "rookidee":"Minisange",
  "roselia":"Rosélia",
  "roserade":"Roserade",
  "rotom":"Motisma",
  "rowlet":"Brindibou",
  "rufflet":"Furaiglon",
  "runerigus":"Tutétékri",
  "sableye":"Ténéfix",
  "salamence":"Drattak",
  "salandit":"Tritox",
  "salazzle":"Malamandre",
  "samurott":"Clamiral",
  "sandaconda":"Dunaconda",
  "sandile":"Mascaïman",
  "sandshrew":"Sabelette",
  "sandslash":"Sablaireau",
  "sandygast":"Bacabouh",
  "sawk":"Karaclée",
  "sawsbuck":"Haydaim",
  "scatterbug":"Lépidonille",
  "sceptile":"Jungko",
  "scizor":"Cizayox",
  "scolipede":"Brutapode",
  "scorbunny":"Flambino",
  "scrafty":"Baggaïd",
  "scraggy":"Baggiguane",
  "scyther":"Insécateur",
  "seadra":"Hypocéan",
  "seaking":"Poissoroy",
  "sealeo":"Phogleur",
  "seedot":"Grainipiot",
  "seel":"Otaria",
  "seismitoad":"Crapustule",
  "sentret":"Fouinette",
  "serperior":"Majaspic",
  "servine":"Lianaja",
  "seviper":"Séviper",
  "sewaddle":"Larveyette",
  "sharpedo":"Sharpedo",
  "shaymin":"Shaymin",
  "shedinja":"Munja",
  "shelgon":"Drackhaus",
  "shellder":"Kokiyas",
  "shellos":"Sancoki",
  "shelmet":"Escargaume",
  "shieldon":"Dinoclier",
  "shiftry":"Tengalice",
  "shiinotic":"Lampignon",
  "shinx":"Lixy",
  "shroomish":"Balignon",
  "shuckle":"Caratroc",
  "shuppet":"Polichombr",
  "sigilyph":"Cryptéro",
  "silcoon":"Armulys",
  "silicobra":"Dunaja",
  "silvally":"Silvallié",
  "simipour":"Flotoutan",
  "simisage":"Feuiloutan",
  "simisear":"Flamoutan",
  "sinistea":"Théffroi",
  "sirfetchd":"Palarticho",
  "sizzlipede":"Grillepattes",
  "skarmory":"Airmure",
  "skiddo":"Cabriolaine",
  "skiploom":"Floravol",
  "skitty":"Skitty",
  "skorupi":"Rapion",
  "skrelp":"Venalgue",
  "skuntank":"Moufflair",
  "skwovet":"Rongourmand",
  "slaking":"Monaflèmit",
  "slakoth":"Parecool",
  "sliggoo":"Colimucus",
  "slowbro":"Flagadoss",
  "slowking":"Roigada",
  "slowpoke":"Ramoloss",
  "slugma":"Limagma",
  "slurpuff":"Cupcanaille",
  "smeargle":"Queulorior",
  "smoochum":"Lippouti",
  "sneasel":"Farfuret",
  "snivy":"Vipélierre",
  "snom":"Frissonille",
  "snorlax":"Ronflex",
  "snorunt":"Stalgamin",
  "snover":"Blizzi",
  "snubbull":"Snubbull",
  "sobble":"Larméléon",
  "solgaleo":"Solgaleo",
  "solosis":"Nucléos",
  "solrock":"Solaroc",
  "spearow":"Piafabec",
  "spectrier":"Spectreval",
  "spewpa":"Pérégrain",
  "spheal":"Obalie",
  "spinarak":"Mimigal",
  "spinda":"Spinda",
  "spiritomb":"Spiritomb",
  "spoink":"Spoink",
  "spritzee":"Fluvetin",
  "squirtle":"Carapuce",
  "stakataka":"Ama-Ama",
  "stantler":"Cerfrousse",
  "staraptor":"Étouraptor",
  "staravia":"Étourvol",
  "starly":"Étourmi",
  "starmie":"Staross",
  "staryu":"Stari",
  "steelix":"Steelix",
  "steenee":"Candine",
  "stonjourner":"Dolman",
  "stoutland":"Mastouffe",
  "stufful":"Nounourson",
  "stunfisk":"Limonde",
  "stunky":"Moufouette",
  "sudowoodo":"Simularbre",
  "suicune":"Suicune",
  "sunflora":"Héliatronc",
  "sunkern":"Tournegrin",
  "surskit":"Arakdo",
  "swablu":"Tylton",
  "swadloon":"Couverdure",
  "swalot":"Avaltout",
  "swampert":"Laggron",
  "swanna":"Lakmécygne",
  "swellow":"Hélédelle",
  "swinub":"Marcacrin",
  "swirlix":"Sucroquin",
  "swoobat":"Rhinolove",
  "sylveon":"Nymphali",
  "taillow":"Nirondelle",
  "talonflame":"Flambusard",
  "tangela":"Saquedeneu",
  "tangrowth":"Bouldeneu",
  "tapu-bulu":"Tokotoro",
  "tapu-fini":"Tokopisco",
  "tapu-koko":"Tokorico",
  "tapu-lele":"Tokopiyon",
  "tauros":"Tauros",
  "teddiursa":"Teddiursa",
  "tentacool":"Tentacool",
  "tentacruel":"Tentacruel",
  "tepig":"Gruikui",
  "terrakion":"Terrakium",
  "thievul":"Roublenard",
  "throh":"Judokrak",
  "thundurus":"Fulguris",
  "thwackey":"Badabouin",
  "timburr":"Charpenti",
  "tirtouga":"Carapagos",
  "togedemaru":"Togedemaru",
  "togekiss":"Togekiss",
  "togepi":"Togepi",
  "togetic":"Togetic",
  "torchic":"Poussifeu",
  "torkoal":"Chartor",
  "tornadus":"Boréas",
  "torracat":"Matoufeu",
  "torterra":"Torterra",
  "totodile":"Kaiminus",
  "toucannon":"Bazoucan",
  "toxapex":"Prédastérie",
  "toxel":"Toxizap",
  "toxicroak":"Coatox",
  "toxtricity":"Salarsen",
  "tranquill":"Colombeau",
  "trapinch":"Kraknoix",
  "treecko":"Arcko",
  "trevenant":"Desséliande",
  "tropius":"Tropius",
  "trubbish":"Miamiasme",
  "trumbeak":"Piclairon",
  "tsareena":"Sucreine",
  "turtonator":"Boumata",
  "turtwig":"Tortipouss",
  "tympole":"Tritonde",
  "tynamo":"Anchwatt",
  "type-null":"Type:0",
  "typhlosion":"Typhlosion",
  "tyranitar":"Tyranocif",
  "tyrantrum":"Rexillius",
  "tyrogue":"Debugant",
  "tyrunt":"Ptyranidur",
  "umbreon":"Noctali",
  "unfezant":"Déflaisan",
  "unown":"Zarbi",
  "ursaring":"Ursaring",
  "urshifu":"Shifours",
  "uxie":"Créhelf",
  "vanillish":"Sorboul",
  "vanillite":"Sorbébé",
  "vanilluxe":"Sorbouboul",
  "vaporeon":"Aquali",
  "venipede":"Venipatte",
  "venomoth":"Aéromite",
  "venonat":"Mimitoss",
  "venusaur":"Florizarre",
  "vespiquen":"Apireine",
  "vibrava":"Vibraninf",
  "victini":"Victini",
  "victreebel":"Empiflor",
  "vigoroth":"Vigoroth",
  "vikavolt":"Lucanon",
  "vileplume":"Rafflesia",
  "virizion":"Viridium",
  "vivillon":"Prismillon",
  "volbeat":"Muciole",
  "volcanion":"Volcanion",
  "volcarona":"Pyrax",
  "voltorb":"Voltorbe",
  "vullaby":"Vostourno",
  "vulpix":"Goupix",
  "wailmer":"Wailmer",
  "wailord":"Wailord",
  "walrein":"Kaimorse",
  "wartortle":"Carabaffe",
  "watchog":"Miradar",
  "weavile":"Dimoret",
  "weedle":"Aspicot",
  "weepinbell":"Boustiflor",
  "weezing":"Smogogo",
  "whimsicott":"Farfaduvet",
  "whirlipede":"Scobolide",
  "whiscash":"Barbicha",
  "whismur":"Chuchmur",
  "wigglytuff":"Grodoudou",
  "wimpod":"Sovkipou",
  "wingull":"Goélise",
  "wishiwashi":"Froussardine",
  "wobbuffet":"Qulbutoké",
  "woobat":"Chovsourir",
  "wooloo":"Moumouton",
  "wooper":"Axoloto",
  "wormadam":"Cheniselle",
  "wurmple":"Chenipotte",
  "wynaut":"Okéoké",
  "xatu":"Xatu",
  "xerneas":"Xerneas",
  "xurkitree":"Câblifère",
  "yamask":"Tutafeh",
  "yamper":"Voltoutou",
  "yanma":"Yanma",
  "yanmega":"Yanmega",
  "yungoos":"Manglouton",
  "yveltal":"Yveltal",
  "zacian":"Zacian",
  "zamazenta":"Zamazenta",
  "zangoose":"Mangriff",
  "zapdos":"Électhor",
  "zarude":"Zarude",
  "zebstrika":"Zéblitz",
  "zekrom":"Zekrom",
  "zeraora":"Zeraora",
  "zigzagoon":"Zigzaton",
  "zoroark":"Zoroark",
  "zorua":"Zorua",
  "zubat":"Nosferapti",
  "zweilous":"Diamat",
  "zygarde":"Zygarde"
};

const POKEMON_EN_MANUAL = {
  "abomasnow":"Abomasnow",
  "abra":"Abra",
  "absol":"Absol",
  "accelgor":"Accelgor",
  "aegislash":"Aegislash",
  "aerodactyl":"Aerodactyl",
  "aggron":"Aggron",
  "aipom":"Aipom",
  "alakazam":"Alakazam",
  "alcremie":"Alcremie",
  "alomomola":"Alomomola",
  "altaria":"Altaria",
  "amaura":"Amaura",
  "ambipom":"Ambipom",
  "amoonguss":"Amoonguss",
  "ampharos":"Ampharos",
  "anorith":"Anorith",
  "appletun":"Appletun",
  "applin":"Applin",
  "araquanid":"Araquanid",
  "arbok":"Arbok",
  "arcanine":"Arcanine",
  "arceus":"Arceus",
  "archen":"Archen",
  "archeops":"Archeops",
  "arctovish":"Arctovish",
  "arctozolt":"Arctozolt",
  "ariados":"Ariados",
  "armaldo":"Armaldo",
  "aromatisse":"Aromatisse",
  "aron":"Aron",
  "arrokuda":"Arrokuda",
  "articuno":"Articuno",
  "audino":"Audino",
  "aurorus":"Aurorus",
  "avalugg":"Avalugg",
  "axew":"Axew",
  "azelf":"Azelf",
  "azumarill":"Azumarill",
  "azurill":"Azurill",
  "bagon":"Bagon",
  "baltoy":"Baltoy",
  "banette":"Banette",
  "barbaracle":"Barbaracle",
  "barboach":"Barboach",
  "barraskewda":"Barraskewda",
  "basculin":"Basculin",
  "bastiodon":"Bastiodon",
  "bayleef":"Bayleef",
  "beartic":"Beartic",
  "beautifly":"Beautifly",
  "beedrill":"Beedrill",
  "beheeyem":"Beheeyem",
  "beldum":"Beldum",
  "bellossom":"Bellossom",
  "bellsprout":"Bellsprout",
  "bergmite":"Bergmite",
  "bewear":"Bewear",
  "bibarel":"Bibarel",
  "bidoof":"Bidoof",
  "binacle":"Binacle",
  "bisharp":"Bisharp",
  "blacephalon":"Blacephalon",
  "blastoise":"Blastoise",
  "blaziken":"Blaziken",
  "blipbug":"Blipbug",
  "blissey":"Blissey",
  "blitzle":"Blitzle",
  "boldore":"Boldore",
  "boltund":"Boltund",
  "bonsly":"Bonsly",
  "bouffalant":"Bouffalant",
  "bounsweet":"Bounsweet",
  "braixen":"Braixen",
  "braviary":"Braviary",
  "breloom":"Breloom",
  "brionne":"Brionne",
  "bronzong":"Bronzong",
  "bronzor":"Bronzor",
  "bruxish":"Bruxish",
  "budew":"Budew",
  "buizel":"Buizel",
  "bulbasaur":"Bulbasaur",
  "buneary":"Buneary",
  "bunnelby":"Bunnelby",
  "burmy":"Burmy",
  "butterfree":"Butterfree",
  "buzzwole":"Buzzwole",
  "cacnea":"Cacnea",
  "cacturne":"Cacturne",
  "calyrex":"Calyrex",
  "camerupt":"Camerupt",
  "carbink":"Carbink",
  "carkol":"Carkol",
  "carnivine":"Carnivine",
  "carracosta":"Carracosta",
  "carvanha":"Carvanha",
  "cascoon":"Cascoon",
  "castform":"Castform",
  "caterpie":"Caterpie",
  "celebi":"Celebi",
  "celesteela":"Celesteela",
  "centiskorch":"Centiskorch",
  "chandelure":"Chandelure",
  "chansey":"Chansey",
  "charizard":"Charizard",
  "charjabug":"Charjabug",
  "charmander":"Charmander",
  "charmeleon":"Charmeleon",
  "chatot":"Chatot",
  "cherrim":"Cherrim",
  "cherubi":"Cherubi",
  "chesnaught":"Chesnaught",
  "chespin":"Chespin",
  "chewtle":"Chewtle",
  "chikorita":"Chikorita",
  "chimchar":"Chimchar",
  "chimecho":"Chimecho",
  "chinchou":"Chinchou",
  "chingling":"Chingling",
  "cinccino":"Cinccino",
  "cinderace":"Cinderace",
  "clamperl":"Clamperl",
  "clauncher":"Clauncher",
  "clawitzer":"Clawitzer",
  "claydol":"Claydol",
  "clefable":"Clefable",
  "clefairy":"Clefairy",
  "cleffa":"Cleffa",
  "clobbopus":"Clobbopus",
  "cloyster":"Cloyster",
  "coalossal":"Coalossal",
  "cobalion":"Cobalion",
  "cofagrigus":"Cofagrigus",
  "combee":"Combee",
  "combusken":"Combusken",
  "comfey":"Comfey",
  "conkeldurr":"Conkeldurr",
  "copperajah":"Copperajah",
  "corphish":"Corphish",
  "corsola":"Corsola",
  "corviknight":"Corviknight",
  "corvisquire":"Corvisquire",
  "cosmoem":"Cosmoem",
  "cosmog":"Cosmog",
  "cottonee":"Cottonee",
  "crabominable":"Crabominable",
  "crabrawler":"Crabrawler",
  "cradily":"Cradily",
  "cramorant":"Cramorant",
  "cranidos":"Cranidos",
  "crawdaunt":"Crawdaunt",
  "cresselia":"Cresselia",
  "croagunk":"Croagunk",
  "crobat":"Crobat",
  "croconaw":"Croconaw",
  "crustle":"Crustle",
  "cryogonal":"Cryogonal",
  "cubchoo":"Cubchoo",
  "cubone":"Cubone",
  "cufant":"Cufant",
  "cursola":"Cursola",
  "cutiefly":"Cutiefly",
  "cyndaquil":"Cyndaquil",
  "darkrai":"Darkrai",
  "darmanitan":"Darmanitan",
  "dartrix":"Dartrix",
  "darumaka":"Darumaka",
  "decidueye":"Decidueye",
  "dedenne":"Dedenne",
  "deerling":"Deerling",
  "deino":"Deino",
  "delcatty":"Delcatty",
  "delibird":"Delibird",
  "delphox":"Delphox",
  "deoxys":"Deoxys",
  "dewgong":"Dewgong",
  "dewott":"Dewott",
  "dewpider":"Dewpider",
  "dhelmise":"Dhelmise",
  "dialga":"Dialga",
  "diancie":"Diancie",
  "diggersby":"Diggersby",
  "diglett":"Diglett",
  "ditto":"Ditto",
  "dodrio":"Dodrio",
  "doduo":"Doduo",
  "donphan":"Donphan",
  "dottler":"Dottler",
  "doublade":"Doublade",
  "dracovish":"Dracovish",
  "dracozolt":"Dracozolt",
  "dragalge":"Dragalge",
  "dragapult":"Dragapult",
  "dragonair":"Dragonair",
  "dragonite":"Dragonite",
  "drakloak":"Drakloak",
  "drampa":"Drampa",
  "drapion":"Drapion",
  "dratini":"Dratini",
  "drednaw":"Drednaw",
  "dreepy":"Dreepy",
  "drifblim":"Drifblim",
  "drifloon":"Drifloon",
  "drilbur":"Drilbur",
  "drizzile":"Drizzile",
  "drowzee":"Drowzee",
  "druddigon":"Druddigon",
  "dubwool":"Dubwool",
  "ducklett":"Ducklett",
  "dugtrio":"Dugtrio",
  "dunsparce":"Dunsparce",
  "duosion":"Duosion",
  "duraludon":"Duraludon",
  "durant":"Durant",
  "dusclops":"Dusclops",
  "dusknoir":"Dusknoir",
  "duskull":"Duskull",
  "dustox":"Dustox",
  "dwebble":"Dwebble",
  "eelektrik":"Eelektrik",
  "eelektross":"Eelektross",
  "eevee":"Eevee",
  "eiscue":"Eiscue",
  "ekans":"Ekans",
  "eldegoss":"Eldegoss",
  "electabuzz":"Electabuzz",
  "electivire":"Electivire",
  "electrike":"Electrike",
  "electrode":"Electrode",
  "elekid":"Elekid",
  "elgyem":"Elgyem",
  "emboar":"Emboar",
  "emolga":"Emolga",
  "empoleon":"Empoleon",
  "entei":"Entei",
  "escavalier":"Escavalier",
  "espeon":"Espeon",
  "espurr":"Espurr",
  "eternatus":"Eternatus",
  "excadrill":"Excadrill",
  "exeggcute":"Exeggcute",
  "exeggutor":"Exeggutor",
  "exploud":"Exploud",
  "falinks":"Falinks",
  "farfetchd":"Farfetch’d",
  "fearow":"Fearow",
  "feebas":"Feebas",
  "fennekin":"Fennekin",
  "feraligatr":"Feraligatr",
  "ferroseed":"Ferroseed",
  "ferrothorn":"Ferrothorn",
  "finneon":"Finneon",
  "flaaffy":"Flaaffy",
  "flabebe":"Flabébé",
  "flapple":"Flapple",
  "flareon":"Flareon",
  "fletchinder":"Fletchinder",
  "fletchling":"Fletchling",
  "floatzel":"Floatzel",
  "floette":"Floette",
  "florges":"Florges",
  "flygon":"Flygon",
  "fomantis":"Fomantis",
  "foongus":"Foongus",
  "forretress":"Forretress",
  "fraxure":"Fraxure",
  "frillish":"Frillish",
  "froakie":"Froakie",
  "frogadier":"Frogadier",
  "froslass":"Froslass",
  "frosmoth":"Frosmoth",
  "furfrou":"Furfrou",
  "furret":"Furret",
  "gabite":"Gabite",
  "gallade":"Gallade",
  "galvantula":"Galvantula",
  "garbodor":"Garbodor",
  "garchomp":"Garchomp",
  "gardevoir":"Gardevoir",
  "gastly":"Gastly",
  "gastrodon":"Gastrodon",
  "genesect":"Genesect",
  "gengar":"Gengar",
  "geodude":"Geodude",
  "gible":"Gible",
  "gigalith":"Gigalith",
  "girafarig":"Girafarig",
  "giratina":"Giratina",
  "glaceon":"Glaceon",
  "glalie":"Glalie",
  "glameow":"Glameow",
  "glastrier":"Glastrier",
  "gligar":"Gligar",
  "gliscor":"Gliscor",
  "gloom":"Gloom",
  "gogoat":"Gogoat",
  "golbat":"Golbat",
  "goldeen":"Goldeen",
  "golduck":"Golduck",
  "golem":"Golem",
  "golett":"Golett",
  "golisopod":"Golisopod",
  "golurk":"Golurk",
  "goodra":"Goodra",
  "goomy":"Goomy",
  "gorebyss":"Gorebyss",
  "gossifleur":"Gossifleur",
  "gothita":"Gothita",
  "gothitelle":"Gothitelle",
  "gothorita":"Gothorita",
  "gourgeist":"Gourgeist",
  "granbull":"Granbull",
  "grapploct":"Grapploct",
  "graveler":"Graveler",
  "greedent":"Greedent",
  "greninja":"Greninja",
  "grimer":"Grimer",
  "grimmsnarl":"Grimmsnarl",
  "grookey":"Grookey",
  "grotle":"Grotle",
  "groudon":"Groudon",
  "grovyle":"Grovyle",
  "growlithe":"Growlithe",
  "grubbin":"Grubbin",
  "grumpig":"Grumpig",
  "gulpin":"Gulpin",
  "gumshoos":"Gumshoos",
  "gurdurr":"Gurdurr",
  "guzzlord":"Guzzlord",
  "gyarados":"Gyarados",
  "hakamo-o":"Hakamo-o",
  "happiny":"Happiny",
  "hariyama":"Hariyama",
  "hatenna":"Hatenna",
  "hatterene":"Hatterene",
  "hattrem":"Hattrem",
  "haunter":"Haunter",
  "hawlucha":"Hawlucha",
  "haxorus":"Haxorus",
  "heatmor":"Heatmor",
  "heatran":"Heatran",
  "heliolisk":"Heliolisk",
  "helioptile":"Helioptile",
  "heracross":"Heracross",
  "herdier":"Herdier",
  "hippopotas":"Hippopotas",
  "hippowdon":"Hippowdon",
  "hitmonchan":"Hitmonchan",
  "hitmonlee":"Hitmonlee",
  "hitmontop":"Hitmontop",
  "ho-oh":"Ho-Oh",
  "honchkrow":"Honchkrow",
  "honedge":"Honedge",
  "hoopa":"Hoopa",
  "hoothoot":"Hoothoot",
  "hoppip":"Hoppip",
  "horsea":"Horsea",
  "houndoom":"Houndoom",
  "houndour":"Houndour",
  "huntail":"Huntail",
  "hydreigon":"Hydreigon",
  "hypno":"Hypno",
  "igglybuff":"Igglybuff",
  "illumise":"Illumise",
  "impidimp":"Impidimp",
  "incineroar":"Incineroar",
  "indeedee":"Indeedee",
  "infernape":"Infernape",
  "inkay":"Inkay",
  "inteleon":"Inteleon",
  "ivysaur":"Ivysaur",
  "jangmo-o":"Jangmo-o",
  "jellicent":"Jellicent",
  "jigglypuff":"Jigglypuff",
  "jirachi":"Jirachi",
  "jolteon":"Jolteon",
  "joltik":"Joltik",
  "jumpluff":"Jumpluff",
  "jynx":"Jynx",
  "kabuto":"Kabuto",
  "kabutops":"Kabutops",
  "kadabra":"Kadabra",
  "kakuna":"Kakuna",
  "kangaskhan":"Kangaskhan",
  "karrablast":"Karrablast",
  "kartana":"Kartana",
  "kecleon":"Kecleon",
  "keldeo":"Keldeo",
  "kingdra":"Kingdra",
  "kingler":"Kingler",
  "kirlia":"Kirlia",
  "klang":"Klang",
  "klefki":"Klefki",
  "klink":"Klink",
  "klinklang":"Klinklang",
  "koffing":"Koffing",
  "komala":"Komala",
  "kommo-o":"Kommo-o",
  "krabby":"Krabby",
  "kricketot":"Kricketot",
  "kricketune":"Kricketune",
  "krokorok":"Krokorok",
  "krookodile":"Krookodile",
  "kubfu":"Kubfu",
  "kyogre":"Kyogre",
  "kyurem":"Kyurem",
  "lairon":"Lairon",
  "lampent":"Lampent",
  "landorus":"Landorus",
  "lanturn":"Lanturn",
  "lapras":"Lapras",
  "larvesta":"Larvesta",
  "larvitar":"Larvitar",
  "latias":"Latias",
  "latios":"Latios",
  "leafeon":"Leafeon",
  "leavanny":"Leavanny",
  "ledian":"Ledian",
  "ledyba":"Ledyba",
  "lickilicky":"Lickilicky",
  "lickitung":"Lickitung",
  "liepard":"Liepard",
  "lileep":"Lileep",
  "lilligant":"Lilligant",
  "lillipup":"Lillipup",
  "linoone":"Linoone",
  "litleo":"Litleo",
  "litten":"Litten",
  "litwick":"Litwick",
  "lombre":"Lombre",
  "lopunny":"Lopunny",
  "lotad":"Lotad",
  "loudred":"Loudred",
  "lucario":"Lucario",
  "ludicolo":"Ludicolo",
  "lugia":"Lugia",
  "lumineon":"Lumineon",
  "lunala":"Lunala",
  "lunatone":"Lunatone",
  "lurantis":"Lurantis",
  "luvdisc":"Luvdisc",
  "luxio":"Luxio",
  "luxray":"Luxray",
  "lycanroc":"Lycanroc",
  "machamp":"Machamp",
  "machoke":"Machoke",
  "machop":"Machop",
  "magby":"Magby",
  "magcargo":"Magcargo",
  "magearna":"Magearna",
  "magikarp":"Magikarp",
  "magmar":"Magmar",
  "magmortar":"Magmortar",
  "magnemite":"Magnemite",
  "magneton":"Magneton",
  "magnezone":"Magnezone",
  "makuhita":"Makuhita",
  "malamar":"Malamar",
  "mamoswine":"Mamoswine",
  "manaphy":"Manaphy",
  "mandibuzz":"Mandibuzz",
  "manectric":"Manectric",
  "mankey":"Mankey",
  "mantine":"Mantine",
  "mantyke":"Mantyke",
  "maractus":"Maractus",
  "mareanie":"Mareanie",
  "mareep":"Mareep",
  "marill":"Marill",
  "marowak":"Marowak",
  "marshadow":"Marshadow",
  "marshtomp":"Marshtomp",
  "masquerain":"Masquerain",
  "mawile":"Mawile",
  "medicham":"Medicham",
  "meditite":"Meditite",
  "meganium":"Meganium",
  "melmetal":"Melmetal",
  "meloetta":"Meloetta",
  "meltan":"Meltan",
  "meowstic":"Meowstic",
  "meowth":"Meowth",
  "mesprit":"Mesprit",
  "metagross":"Metagross",
  "metang":"Metang",
  "metapod":"Metapod",
  "mew":"Mew",
  "mewtwo":"Mewtwo",
  "mienfoo":"Mienfoo",
  "mienshao":"Mienshao",
  "mightyena":"Mightyena",
  "milcery":"Milcery",
  "milotic":"Milotic",
  "miltank":"Miltank",
  "mime-jr":"Mime Jr.",
  "mimikyu":"Mimikyu",
  "minccino":"Minccino",
  "minior":"Minior",
  "minun":"Minun",
  "misdreavus":"Misdreavus",
  "mismagius":"Mismagius",
  "moltres":"Moltres",
  "monferno":"Monferno",
  "morelull":"Morelull",
  "morgrem":"Morgrem",
  "morpeko":"Morpeko",
  "mothim":"Mothim",
  "mr-mime":"Mr. Mime",
  "mr-rime":"Mr. Rime",
  "mudbray":"Mudbray",
  "mudkip":"Mudkip",
  "mudsdale":"Mudsdale",
  "muk":"Muk",
  "munchlax":"Munchlax",
  "munna":"Munna",
  "murkrow":"Murkrow",
  "musharna":"Musharna",
  "naganadel":"Naganadel",
  "natu":"Natu",
  "necrozma":"Necrozma",
  "nickit":"Nickit",
  "nidoking":"Nidoking",
  "nidoqueen":"Nidoqueen",
  "nidoran-f":"Nidoran♀",
  "nidoran-m":"Nidoran♂",
  "nidorina":"Nidorina",
  "nidorino":"Nidorino",
  "nihilego":"Nihilego",
  "nincada":"Nincada",
  "ninetales":"Ninetales",
  "ninjask":"Ninjask",
  "noctowl":"Noctowl",
  "noibat":"Noibat",
  "noivern":"Noivern",
  "nosepass":"Nosepass",
  "numel":"Numel",
  "nuzleaf":"Nuzleaf",
  "obstagoon":"Obstagoon",
  "octillery":"Octillery",
  "oddish":"Oddish",
  "omanyte":"Omanyte",
  "omastar":"Omastar",
  "onix":"Onix",
  "oranguru":"Oranguru",
  "orbeetle":"Orbeetle",
  "oricorio":"Oricorio",
  "oshawott":"Oshawott",
  "pachirisu":"Pachirisu",
  "palkia":"Palkia",
  "palossand":"Palossand",
  "palpitoad":"Palpitoad",
  "pancham":"Pancham",
  "pangoro":"Pangoro",
  "panpour":"Panpour",
  "pansage":"Pansage",
  "pansear":"Pansear",
  "paras":"Paras",
  "parasect":"Parasect",
  "passimian":"Passimian",
  "patrat":"Patrat",
  "pawniard":"Pawniard",
  "pelipper":"Pelipper",
  "perrserker":"Perrserker",
  "persian":"Persian",
  "petilil":"Petilil",
  "phanpy":"Phanpy",
  "phantump":"Phantump",
  "pheromosa":"Pheromosa",
  "phione":"Phione",
  "pichu":"Pichu",
  "pidgeot":"Pidgeot",
  "pidgeotto":"Pidgeotto",
  "pidgey":"Pidgey",
  "pidove":"Pidove",
  "pignite":"Pignite",
  "pikachu":"Pikachu",
  "pikipek":"Pikipek",
  "piloswine":"Piloswine",
  "pincurchin":"Pincurchin",
  "pineco":"Pineco",
  "pinsir":"Pinsir",
  "piplup":"Piplup",
  "plusle":"Plusle",
  "poipole":"Poipole",
  "politoed":"Politoed",
  "poliwag":"Poliwag",
  "poliwhirl":"Poliwhirl",
  "poliwrath":"Poliwrath",
  "polteageist":"Polteageist",
  "ponyta":"Ponyta",
  "poochyena":"Poochyena",
  "popplio":"Popplio",
  "porygon":"Porygon",
  "porygon-z":"Porygon-Z",
  "porygon2":"Porygon2",
  "primarina":"Primarina",
  "primeape":"Primeape",
  "prinplup":"Prinplup",
  "probopass":"Probopass",
  "psyduck":"Psyduck",
  "pumpkaboo":"Pumpkaboo",
  "pupitar":"Pupitar",
  "purrloin":"Purrloin",
  "purugly":"Purugly",
  "pyroar":"Pyroar",
  "pyukumuku":"Pyukumuku",
  "quagsire":"Quagsire",
  "quilava":"Quilava",
  "quilladin":"Quilladin",
  "qwilfish":"Qwilfish",
  "raboot":"Raboot",
  "raichu":"Raichu",
  "raikou":"Raikou",
  "ralts":"Ralts",
  "rampardos":"Rampardos",
  "rapidash":"Rapidash",
  "raticate":"Raticate",
  "rattata":"Rattata",
  "rayquaza":"Rayquaza",
  "regice":"Regice",
  "regidrago":"Regidrago",
  "regieleki":"Regieleki",
  "regigigas":"Regigigas",
  "regirock":"Regirock",
  "registeel":"Registeel",
  "relicanth":"Relicanth",
  "remoraid":"Remoraid",
  "reshiram":"Reshiram",
  "reuniclus":"Reuniclus",
  "rhydon":"Rhydon",
  "rhyhorn":"Rhyhorn",
  "rhyperior":"Rhyperior",
  "ribombee":"Ribombee",
  "rillaboom":"Rillaboom",
  "riolu":"Riolu",
  "rockruff":"Rockruff",
  "roggenrola":"Roggenrola",
  "rolycoly":"Rolycoly",
  "rookidee":"Rookidee",
  "roselia":"Roselia",
  "roserade":"Roserade",
  "rotom":"Rotom",
  "rowlet":"Rowlet",
  "rufflet":"Rufflet",
  "runerigus":"Runerigus",
  "sableye":"Sableye",
  "salamence":"Salamence",
  "salandit":"Salandit",
  "salazzle":"Salazzle",
  "samurott":"Samurott",
  "sandaconda":"Sandaconda",
  "sandile":"Sandile",
  "sandshrew":"Sandshrew",
  "sandslash":"Sandslash",
  "sandygast":"Sandygast",
  "sawk":"Sawk",
  "sawsbuck":"Sawsbuck",
  "scatterbug":"Scatterbug",
  "sceptile":"Sceptile",
  "scizor":"Scizor",
  "scolipede":"Scolipede",
  "scorbunny":"Scorbunny",
  "scrafty":"Scrafty",
  "scraggy":"Scraggy",
  "scyther":"Scyther",
  "seadra":"Seadra",
  "seaking":"Seaking",
  "sealeo":"Sealeo",
  "seedot":"Seedot",
  "seel":"Seel",
  "seismitoad":"Seismitoad",
  "sentret":"Sentret",
  "serperior":"Serperior",
  "servine":"Servine",
  "seviper":"Seviper",
  "sewaddle":"Sewaddle",
  "sharpedo":"Sharpedo",
  "shaymin":"Shaymin",
  "shedinja":"Shedinja",
  "shelgon":"Shelgon",
  "shellder":"Shellder",
  "shellos":"Shellos",
  "shelmet":"Shelmet",
  "shieldon":"Shieldon",
  "shiftry":"Shiftry",
  "shiinotic":"Shiinotic",
  "shinx":"Shinx",
  "shroomish":"Shroomish",
  "shuckle":"Shuckle",
  "shuppet":"Shuppet",
  "sigilyph":"Sigilyph",
  "silcoon":"Silcoon",
  "silicobra":"Silicobra",
  "silvally":"Silvally",
  "simipour":"Simipour",
  "simisage":"Simisage",
  "simisear":"Simisear",
  "sinistea":"Sinistea",
  "sirfetchd":"Sirfetch’d",
  "sizzlipede":"Sizzlipede",
  "skarmory":"Skarmory",
  "skiddo":"Skiddo",
  "skiploom":"Skiploom",
  "skitty":"Skitty",
  "skorupi":"Skorupi",
  "skrelp":"Skrelp",
  "skuntank":"Skuntank",
  "skwovet":"Skwovet",
  "slaking":"Slaking",
  "slakoth":"Slakoth",
  "sliggoo":"Sliggoo",
  "slowbro":"Slowbro",
  "slowking":"Slowking",
  "slowpoke":"Slowpoke",
  "slugma":"Slugma",
  "slurpuff":"Slurpuff",
  "smeargle":"Smeargle",
  "smoochum":"Smoochum",
  "sneasel":"Sneasel",
  "snivy":"Snivy",
  "snom":"Snom",
  "snorlax":"Snorlax",
  "snorunt":"Snorunt",
  "snover":"Snover",
  "snubbull":"Snubbull",
  "sobble":"Sobble",
  "solgaleo":"Solgaleo",
  "solosis":"Solosis",
  "solrock":"Solrock",
  "spearow":"Spearow",
  "spectrier":"Spectrier",
  "spewpa":"Spewpa",
  "spheal":"Spheal",
  "spinarak":"Spinarak",
  "spinda":"Spinda",
  "spiritomb":"Spiritomb",
  "spoink":"Spoink",
  "spritzee":"Spritzee",
  "squirtle":"Squirtle",
  "stakataka":"Stakataka",
  "stantler":"Stantler",
  "staraptor":"Staraptor",
  "staravia":"Staravia",
  "starly":"Starly",
  "starmie":"Starmie",
  "staryu":"Staryu",
  "steelix":"Steelix",
  "steenee":"Steenee",
  "stonjourner":"Stonjourner",
  "stoutland":"Stoutland",
  "stufful":"Stufful",
  "stunfisk":"Stunfisk",
  "stunky":"Stunky",
  "sudowoodo":"Sudowoodo",
  "suicune":"Suicune",
  "sunflora":"Sunflora",
  "sunkern":"Sunkern",
  "surskit":"Surskit",
  "swablu":"Swablu",
  "swadloon":"Swadloon",
  "swalot":"Swalot",
  "swampert":"Swampert",
  "swanna":"Swanna",
  "swellow":"Swellow",
  "swinub":"Swinub",
  "swirlix":"Swirlix",
  "swoobat":"Swoobat",
  "sylveon":"Sylveon",
  "taillow":"Taillow",
  "talonflame":"Talonflame",
  "tangela":"Tangela",
  "tangrowth":"Tangrowth",
  "tapu-bulu":"Tapu Bulu",
  "tapu-fini":"Tapu Fini",
  "tapu-koko":"Tapu Koko",
  "tapu-lele":"Tapu Lele",
  "tauros":"Tauros",
  "teddiursa":"Teddiursa",
  "tentacool":"Tentacool",
  "tentacruel":"Tentacruel",
  "tepig":"Tepig",
  "terrakion":"Terrakion",
  "thievul":"Thievul",
  "throh":"Throh",
  "thundurus":"Thundurus",
  "thwackey":"Thwackey",
  "timburr":"Timburr",
  "tirtouga":"Tirtouga",
  "togedemaru":"Togedemaru",
  "togekiss":"Togekiss",
  "togepi":"Togepi",
  "togetic":"Togetic",
  "torchic":"Torchic",
  "torkoal":"Torkoal",
  "tornadus":"Tornadus",
  "torracat":"Torracat",
  "torterra":"Torterra",
  "totodile":"Totodile",
  "toucannon":"Toucannon",
  "toxapex":"Toxapex",
  "toxel":"Toxel",
  "toxicroak":"Toxicroak",
  "toxtricity":"Toxtricity",
  "tranquill":"Tranquill",
  "trapinch":"Trapinch",
  "treecko":"Treecko",
  "trevenant":"Trevenant",
  "tropius":"Tropius",
  "trubbish":"Trubbish",
  "trumbeak":"Trumbeak",
  "tsareena":"Tsareena",
  "turtonator":"Turtonator",
  "turtwig":"Turtwig",
  "tympole":"Tympole",
  "tynamo":"Tynamo",
  "type-null":"Type: Null",
  "typhlosion":"Typhlosion",
  "tyranitar":"Tyranitar",
  "tyrantrum":"Tyrantrum",
  "tyrogue":"Tyrogue",
  "tyrunt":"Tyrunt",
  "umbreon":"Umbreon",
  "unfezant":"Unfezant",
  "unown":"Unown",
  "ursaring":"Ursaring",
  "urshifu":"Urshifu",
  "uxie":"Uxie",
  "vanillish":"Vanillish",
  "vanillite":"Vanillite",
  "vanilluxe":"Vanilluxe",
  "vaporeon":"Vaporeon",
  "venipede":"Venipede",
  "venomoth":"Venomoth",
  "venonat":"Venonat",
  "venusaur":"Venusaur",
  "vespiquen":"Vespiquen",
  "vibrava":"Vibrava",
  "victini":"Victini",
  "victreebel":"Victreebel",
  "vigoroth":"Vigoroth",
  "vikavolt":"Vikavolt",
  "vileplume":"Vileplume",
  "virizion":"Virizion",
  "vivillon":"Vivillon",
  "volbeat":"Volbeat",
  "volcanion":"Volcanion",
  "volcarona":"Volcarona",
  "voltorb":"Voltorb",
  "vullaby":"Vullaby",
  "vulpix":"Vulpix",
  "wailmer":"Wailmer",
  "wailord":"Wailord",
  "walrein":"Walrein",
  "wartortle":"Wartortle",
  "watchog":"Watchog",
  "weavile":"Weavile",
  "weedle":"Weedle",
  "weepinbell":"Weepinbell",
  "weezing":"Weezing",
  "whimsicott":"Whimsicott",
  "whirlipede":"Whirlipede",
  "whiscash":"Whiscash",
  "whismur":"Whismur",
  "wigglytuff":"Wigglytuff",
  "wimpod":"Wimpod",
  "wingull":"Wingull",
  "wishiwashi":"Wishiwashi",
  "wobbuffet":"Wobbuffet",
  "woobat":"Woobat",
  "wooloo":"Wooloo",
  "wooper":"Wooper",
  "wormadam":"Wormadam",
  "wurmple":"Wurmple",
  "wynaut":"Wynaut",
  "xatu":"Xatu",
  "xerneas":"Xerneas",
  "xurkitree":"Xurkitree",
  "yamask":"Yamask",
  "yamper":"Yamper",
  "yanma":"Yanma",
  "yanmega":"Yanmega",
  "yungoos":"Yungoos",
  "yveltal":"Yveltal",
  "zacian":"Zacian",
  "zamazenta":"Zamazenta",
  "zangoose":"Zangoose",
  "zapdos":"Zapdos",
  "zarude":"Zarude",
  "zebstrika":"Zebstrika",
  "zekrom":"Zekrom",
  "zeraora":"Zeraora",
  "zigzagoon":"Zigzagoon",
  "zoroark":"Zoroark",
  "zorua":"Zorua",
  "zubat":"Zubat",
  "zweilous":"Zweilous",
  "zygarde":"Zygarde"
};

const MOVE_FR_MANUAL = {
  "10-000-000-volt-thunderbolt":"Giga-Tonnerre",
  "absorb":"Vole-Vie",
  "accelerock":"Vif Roc",
  "acid":"Acide",
  "acid-armor":"Acidarmure",
  "acid-downpour--physical":"Déluge Causti-Toxique",
  "acid-downpour--special":"Déluge Causti-Toxique",
  "acid-spray":"Bombe Acide",
  "acrobatics":"Acrobatie",
  "acupressure":"Acupression",
  "aerial-ace":"Aéropique",
  "aeroblast":"Aéroblast",
  "after-you":"Après Vous",
  "agility":"Hâte",
  "air-cutter":"Tranch’Air",
  "air-slash":"Lame d’Air",
  "all-out-pummeling--physical":"Combo Hyper-Furie",
  "all-out-pummeling--special":"Combo Hyper-Furie",
  "ally-switch":"Interversion",
  "amnesia":"Amnésie",
  "anchor-shot":"Ancrage",
  "ancient-power":"Pouvoir Antique",
  "apple-acid":"Acide Malique",
  "aqua-jet":"Aqua-Jet",
  "aqua-ring":"Anneau Hydro",
  "aqua-tail":"Hydro-Queue",
  "arm-thrust":"Cogne",
  "aromatherapy":"Aromathérapie",
  "aromatic-mist":"Brume Capiteuse",
  "assist":"Assistance",
  "assurance":"Assurance",
  "astonish":"Étonnement",
  "astral-barrage":"Éclat Spectral",
  "attack-order":"Appel Attaque",
  "attract":"Attraction",
  "aura-sphere":"Aurasphère",
  "aura-wheel":"Roue Libre",
  "aurora-beam":"Onde Boréale",
  "aurora-veil":"Voile Aurore",
  "autotomize":"Allègement",
  "avalanche":"Avalanche",
  "baby-doll-eyes":"Regard Touchant",
  "baddy-bad":"Évo-Ténébro",
  "baneful-bunker":"Blockhaus",
  "barrage":"Pilonnage",
  "barrier":"Bouclier",
  "baton-pass":"Relais",
  "beak-blast":"Bec-Canon",
  "beat-up":"Baston",
  "behemoth-bash":"Aegis Maxima",
  "behemoth-blade":"Gladius Maximus",
  "belch":"Éructation",
  "belly-drum":"Cognobidon",
  "bestow":"Passe-Cadeau",
  "bide":"Patience",
  "bind":"Étreinte",
  "bite":"Morsure",
  "black-hole-eclipse--physical":"Trou Noir des Ombres",
  "black-hole-eclipse--special":"Trou Noir des Ombres",
  "blast-burn":"Rafale Feu",
  "blaze-kick":"Pied Brûleur",
  "blizzard":"Blizzard",
  "block":"Barrage",
  "bloom-doom--physical":"Pétalexplosion Éblouissante",
  "bloom-doom--special":"Pétalexplosion Éblouissante",
  "blue-flare":"Flamme Bleue",
  "body-press":"Big Splash",
  "body-slam":"Plaquage",
  "bolt-beak":"Prise de Bec",
  "bolt-strike":"Charge Foudre",
  "bone-club":"Massd’Os",
  "bone-rush":"Charge Os",
  "bonemerang":"Osmerang",
  "boomburst":"Bang Sonique",
  "bounce":"Rebond",
  "bouncy-bubble":"Évo-Thalasso",
  "branch-poke":"Tapotige",
  "brave-bird":"Rapace",
  "breaking-swipe":"Abattage",
  "breakneck-blitz--physical":"Turbo-Charge Bulldozer",
  "breakneck-blitz--special":"Turbo-Charge Bulldozer",
  "brick-break":"Casse-Brique",
  "brine":"Saumure",
  "brutal-swing":"Centrifugifle",
  "bubble":"Écume",
  "bubble-beam":"Bulles d’O",
  "bug-bite":"Piqûre",
  "bug-buzz":"Bourdon",
  "bulk-up":"Gonflette",
  "bulldoze":"Piétisol",
  "bullet-punch":"Pisto-Poing",
  "bullet-seed":"Balle Graine",
  "burn-up":"Flamme Ultime",
  "burning-jealousy":"Feu Envieux",
  "buzzy-buzz":"Évo-Dynamo",
  "calm-mind":"Plénitude",
  "camouflage":"Camouflage",
  "captivate":"Séduction",
  "catastropika":"Pikachute Foudroyante",
  "celebrate":"Célébration",
  "charge":"Chargeur",
  "charge-beam":"Rayon Chargé",
  "charm":"Charme",
  "chatter":"Babil",
  "chip-away":"Attrition",
  "circle-throw":"Projection",
  "clamp":"Claquoir",
  "clanging-scales":"Vibrécaille",
  "clangorous-soul":"Dracacophonie",
  "clangorous-soulblaze":"Dracacophonie Flamboyante",
  "clear-smog":"Bain de Smog",
  "close-combat":"Close Combat",
  "coaching":"Coaching",
  "coil":"Enroulement",
  "comet-punch":"Poing Comète",
  "confide":"Confidence",
  "confuse-ray":"Onde Folie",
  "confusion":"Choc Mental",
  "constrict":"Constriction",
  "continental-crush--physical":"Apocalypse Gigalithique",
  "continental-crush--special":"Apocalypse Gigalithique",
  "conversion":"Conversion",
  "conversion-2":"Conversion 2",
  "copycat":"Photocopie",
  "core-enforcer":"Sanction Suprême",
  "corkscrew-crash--physical":"Vrille Maximum",
  "corkscrew-crash--special":"Vrille Maximum",
  "corrosive-gas":"Gaz Corrosif",
  "cosmic-power":"Force Cosmique",
  "cotton-guard":"Cotogarde",
  "cotton-spore":"Spore Coton",
  "counter":"Riposte",
  "court-change":"Change-Côté",
  "covet":"Implore",
  "crabhammer":"Pince-Masse",
  "crafty-shield":"Vigilance",
  "cross-chop":"Coup Croix",
  "cross-poison":"Poison Croix",
  "crunch":"Mâchouille",
  "crush-claw":"Éclate Griffe",
  "crush-grip":"Presse",
  "curse":"Malédiction",
  "cut":"Coupe",
  "dark-pulse":"Vibrobscur",
  "dark-void":"Trou Noir",
  "darkest-lariat":"Dark Lariat",
  "dazzling-gleam":"Éclat Magique",
  "decorate":"Nappage",
  "defend-order":"Appel Défense",
  "defense-curl":"Boul’Armure",
  "defog":"Anti-Brume",
  "destiny-bond":"Lien du Destin",
  "detect":"Détection",
  "devastating-drake--physical":"Chaos Draconique",
  "devastating-drake--special":"Chaos Draconique",
  "diamond-storm":"Orage Adamantin",
  "dig":"Tunnel",
  "disable":"Entrave",
  "disarming-voice":"Voix Enjôleuse",
  "discharge":"Coup d’Jus",
  "dive":"Plongée",
  "dizzy-punch":"Uppercut",
  "doom-desire":"Vœu Destructeur",
  "double-edge":"Damoclès",
  "double-hit":"Coup Double",
  "double-iron-bash":"Écrous d’Poing",
  "double-kick":"Double Pied",
  "double-slap":"Torgnoles",
  "double-team":"Reflet",
  "draco-meteor":"Draco-Météore",
  "dragon-ascent":"Draco-Ascension",
  "dragon-breath":"Draco-Souffle",
  "dragon-claw":"Draco-Griffe",
  "dragon-dance":"Danse Draco",
  "dragon-darts":"Draco-Flèches",
  "dragon-energy":"Draco-Énergie",
  "dragon-hammer":"Draco-Marteau",
  "dragon-pulse":"Draco-Choc",
  "dragon-rage":"Draco-Rage",
  "dragon-rush":"Draco-Charge",
  "dragon-tail":"Draco-Queue",
  "drain-punch":"Vampi-Poing",
  "draining-kiss":"Vampibaiser",
  "dream-eater":"Dévorêve",
  "drill-peck":"Bec Vrille",
  "drill-run":"Tunnelier",
  "drum-beating":"Tambour Battant",
  "dual-chop":"Double Baffe",
  "dual-wingbeat":"Double Volée",
  "dynamax-cannon":"Canon Dynamax",
  "dynamic-punch":"Dynamo-Poing",
  "earth-power":"Telluriforce",
  "earthquake":"Séisme",
  "echoed-voice":"Écho",
  "eerie-impulse":"Ondes Étranges",
  "eerie-spell":"Sort Sinistre",
  "egg-bomb":"Bombe Œuf",
  "electric-terrain":"Champ Électrifié",
  "electrify":"Électrisation",
  "electro-ball":"Boule Élek",
  "electroweb":"Toile Élek",
  "embargo":"Embargo",
  "ember":"Flammèche",
  "encore":"Encore",
  "endeavor":"Effort",
  "endure":"Ténacité",
  "energy-ball":"Éco-Sphère",
  "entrainment":"Ten-Danse",
  "eruption":"Éruption",
  "eternabeam":"Laser Infinimax",
  "expanding-force":"Vaste Pouvoir",
  "explosion":"Explosion",
  "extrasensory":"Extrasenseur",
  "extreme-evoboost":"Neuf pour Un",
  "extreme-speed":"Vitesse Extrême",
  "facade":"Façade",
  "fairy-lock":"Verrou Enchanté",
  "fairy-wind":"Vent Féérique",
  "fake-out":"Bluff",
  "fake-tears":"Croco Larme",
  "false-surrender":"Fourbette",
  "false-swipe":"Faux-Chage",
  "feather-dance":"Danse Plumes",
  "feint":"Ruse",
  "feint-attack":"Feinte",
  "fell-stinger":"Dard Mortel",
  "fiery-dance":"Danse du Feu",
  "fiery-wrath":"Fureur Ardente",
  "final-gambit":"Tout ou Rien",
  "fire-blast":"Déflagration",
  "fire-fang":"Crocs Feu",
  "fire-lash":"Fouet de Feu",
  "fire-pledge":"Aire de Feu",
  "fire-punch":"Poing Feu",
  "fire-spin":"Danse Flammes",
  "first-impression":"Escarmouche",
  "fishious-rend":"Branchicrok",
  "fissure":"Abîme",
  "flail":"Gigotage",
  "flame-burst":"Rebondifeu",
  "flame-charge":"Nitrocharge",
  "flame-wheel":"Roue de Feu",
  "flamethrower":"Lance-Flammes",
  "flare-blitz":"Boutefeu",
  "flash":"Flash",
  "flash-cannon":"Luminocanon",
  "flatter":"Flatterie",
  "fleur-cannon":"Canon Floral",
  "fling":"Dégommage",
  "flip-turn":"Eau Revoir",
  "floaty-fall":"Pika-Piqué",
  "floral-healing":"Soin Floral",
  "flower-shield":"Garde Florale",
  "fly":"Vol",
  "flying-press":"Flying Press",
  "focus-blast":"Exploforce",
  "focus-energy":"Puissance",
  "focus-punch":"Mitra-Poing",
  "follow-me":"Par Ici",
  "force-palm":"Forte-Paume",
  "foresight":"Clairvoyance",
  "forests-curse":"Maléfice Sylvain",
  "foul-play":"Tricherie",
  "freeze-dry":"Lyophilisation",
  "freeze-shock":"Éclair Gelé",
  "freezing-glare":"Regard Glaçant",
  "freezy-frost":"Évo-Congélo",
  "frenzy-plant":"Végé-Attaque",
  "frost-breath":"Souffle Glacé",
  "frustration":"Frustration",
  "fury-attack":"Furie",
  "fury-cutter":"Taillade",
  "fury-swipes":"Combo-Griffe",
  "fusion-bolt":"Éclair Croix",
  "fusion-flare":"Flamme Croix",
  "future-sight":"Prescience",
  "gastro-acid":"Suc Digestif",
  "gear-grind":"Lancécrou",
  "gear-up":"Engrenage",
  "genesis-supernova":"Supernova Originelle",
  "geomancy":"Géo-Contrôle",
  "giga-drain":"Giga-Sangsue",
  "giga-impact":"Giga Impact",
  "gigavolt-havoc--physical":"Fulguro-Lance Gigavolt",
  "gigavolt-havoc--special":"Fulguro-Lance Gigavolt",
  "glacial-lance":"Lance de Glace",
  "glaciate":"Ère Glaciaire",
  "glare":"Regard Médusant",
  "glitzy-glow":"Évo-Psycho",
  "grass-knot":"Nœud Herbe",
  "grass-pledge":"Aire d’Herbe",
  "grass-whistle":"Siffl’Herbe",
  "grassy-glide":"Gliss’Herbe",
  "grassy-terrain":"Champ Herbu",
  "grav-apple":"Force G",
  "gravity":"Gravité",
  "growl":"Rugissement",
  "growth":"Croissance",
  "grudge":"Rancune",
  "guard-split":"Partage Garde",
  "guard-swap":"Permugarde",
  "guardian-of-alola":"Colère du Gardien d’Alola",
  "guillotine":"Guillotine",
  "gunk-shot":"Détricanon",
  "gust":"Tornade",
  "gyro-ball":"Gyroballe",
  "hail":"Grêle",
  "hammer-arm":"Marto-Poing",
  "happy-hour":"Étrennes",
  "harden":"Armure",
  "haze":"Buée Noire",
  "head-charge":"Peignée",
  "head-smash":"Fracass’Tête",
  "headbutt":"Coup d’Boule",
  "heal-bell":"Glas de Soin",
  "heal-block":"Anti-Soin",
  "heal-order":"Appel Soins",
  "heal-pulse":"Vibra Soin",
  "healing-wish":"Vœu Soin",
  "heart-stamp":"Crève-Cœur",
  "heart-swap":"Permucœur",
  "heat-crash":"Tacle Feu",
  "heat-wave":"Canicule",
  "heavy-slam":"Tacle Lourd",
  "helping-hand":"Coup d’Main",
  "hex":"Châtiment",
  "hidden-power":"Puissance Cachée",
  "high-horsepower":"Cavalerie Lourde",
  "high-jump-kick":"Pied Voltige",
  "hold-back":"Retenue",
  "hold-hands":"Mains Jointes",
  "hone-claws":"Aiguisage",
  "horn-attack":"Koud’Korne",
  "horn-drill":"Empal’Korne",
  "horn-leech":"Encornebois",
  "howl":"Grondement",
  "hurricane":"Vent Violent",
  "hydro-cannon":"Hydroblast",
  "hydro-pump":"Hydrocanon",
  "hydro-vortex--physical":"Super Tourbillon Abyssal",
  "hydro-vortex--special":"Super Tourbillon Abyssal",
  "hyper-beam":"Ultralaser",
  "hyper-fang":"Croc de Mort",
  "hyper-voice":"Mégaphone",
  "hyperspace-fury":"Furie Dimension",
  "hyperspace-hole":"TrouDimensionnel",
  "hypnosis":"Hypnose",
  "ice-ball":"Ball’Glace",
  "ice-beam":"Laser Glace",
  "ice-burn":"Feu Glacé",
  "ice-fang":"Crocs Givre",
  "ice-hammer":"Marteau de Glace",
  "ice-punch":"Poing Glace",
  "ice-shard":"Éclats Glace",
  "icicle-crash":"Chute Glace",
  "icicle-spear":"Stalactite",
  "icy-wind":"Vent Glace",
  "imprison":"Possessif",
  "incinerate":"Calcination",
  "inferno":"Feu d’Enfer",
  "inferno-overdrive--physical":"Pyro-Explosion Cataclysmique",
  "inferno-overdrive--special":"Pyro-Explosion Cataclysmique",
  "infestation":"Harcèlement",
  "ingrain":"Racines",
  "instruct":"Sommation",
  "ion-deluge":"Déluge Plasmique",
  "iron-defense":"Mur de Fer",
  "iron-head":"Tête de Fer",
  "iron-tail":"Queue de Fer",
  "jaw-lock":"Croque Fort",
  "judgment":"Jugement",
  "jump-kick":"Pied Sauté",
  "jungle-healing":"Selve Salvatrice",
  "karate-chop":"Poing Karaté",
  "kinesis":"Télékinésie",
  "kings-shield":"Bouclier Royal",
  "knock-off":"Sabotage",
  "lands-wrath":"Force Chtonienne",
  "laser-focus":"Affilage",
  "lash-out":"Cent Rancunes",
  "last-resort":"Dernier Recours",
  "lava-plume":"Ébullilave",
  "leaf-blade":"Lame Feuille",
  "leaf-storm":"Tempête Verte",
  "leaf-tornado":"Phytomixeur",
  "leafage":"Feuillage",
  "leech-life":"Vampirisme",
  "leech-seed":"Vampigraine",
  "leer":"Groz’Yeux",
  "lets-snuggle-forever":"Patati-Patattrape",
  "lick":"Léchouille",
  "life-dew":"Fontaine de Vie",
  "light-of-ruin":"Lumière du Néant",
  "light-screen":"Mur Lumière",
  "light-that-burns-the-sky":"Apocalypsis Luminis",
  "liquidation":"Aqua-Brèche",
  "lock-on":"Verrouillage",
  "lovely-kiss":"Grobisou",
  "low-kick":"Balayage",
  "low-sweep":"Balayette",
  "lucky-chant":"Air Veinard",
  "lunar-dance":"Danse Lune",
  "lunge":"Furie-Bond",
  "luster-purge":"Lumi-Éclat",
  "mach-punch":"Mach Punch",
  "magic-coat":"Reflet Magik",
  "magic-powder":"Poudre Magique",
  "magic-room":"Zone Magique",
  "magical-leaf":"Feuille Magik",
  "magma-storm":"Vortex Magma",
  "magnet-bomb":"Bombe Aimant",
  "magnet-rise":"Vol Magnétik",
  "magnetic-flux":"Magné-Contrôle",
  "magnitude":"Ampleur",
  "malicious-moonsault":"Dark Body Press",
  "mat-block":"Tatamigaeshi",
  "max-airstream":"Aéromax",
  "max-darkness":"Sinistromax",
  "max-flare":"Pyromax",
  "max-flutterby":"Insectomax",
  "max-geyser":"Hydromax",
  "max-guard":"Gardomax",
  "max-hailstorm":"Cryomax",
  "max-knuckle":"Pugilomax",
  "max-lightning":"Fulguromax",
  "max-mindstorm":"Psychomax",
  "max-ooze":"Toxinomax",
  "max-overgrowth":"Phytomax",
  "max-phantasm":"Spectromax",
  "max-quake":"Sismomax",
  "max-rockfall":"Lithomax",
  "max-starfall":"Enchantomax",
  "max-steelspike":"Métallomax",
  "max-strike":"Normalomax",
  "max-wyrmwind":"Dracomax",
  "me-first":"Moi d’Abord",
  "mean-look":"Regard Noir",
  "meditate":"Yoga",
  "mega-drain":"Méga-Sangsue",
  "mega-kick":"Ultimawashi",
  "mega-punch":"Ultimapoing",
  "megahorn":"Mégacorne",
  "memento":"Souvenir",
  "menacing-moonraze-maelstrom":"Rayons Séléno-Explosifs",
  "metal-burst":"Fulmifer",
  "metal-claw":"Griffe Acier",
  "metal-sound":"Strido-Son",
  "meteor-assault":"Joute Astrale",
  "meteor-beam":"Laser Météore",
  "meteor-mash":"Poing Météore",
  "metronome":"Métronome",
  "milk-drink":"Lait à Boire",
  "mimic":"Copie",
  "mind-blown":"Caboche-Kaboum",
  "mind-reader":"Lire-Esprit",
  "minimize":"Lilliput",
  "miracle-eye":"Œil Miracle",
  "mirror-coat":"Voile Miroir",
  "mirror-move":"Mimique",
  "mirror-shot":"Miroi-Tir",
  "mist":"Brume",
  "mist-ball":"Ball’Brume",
  "misty-explosion":"Explo-Brume",
  "misty-terrain":"Champ Brumeux",
  "moonblast":"Pouvoir Lunaire",
  "moongeist-beam":"Rayon Spectral",
  "moonlight":"Rayon Lune",
  "morning-sun":"Aurore",
  "mud-bomb":"Boue-Bombe",
  "mud-shot":"Tir de Boue",
  "mud-slap":"Coud’Boue",
  "mud-sport":"Lance-Boue",
  "muddy-water":"Ocroupi",
  "multi-attack":"Coup Varia-Type",
  "mystical-fire":"Feu Ensorcelé",
  "nasty-plot":"Machination",
  "natural-gift":"Don Naturel",
  "nature-power":"Force Nature",
  "natures-madness":"Ire de la Nature",
  "needle-arm":"Poing Dard",
  "never-ending-nightmare--physical":"Appel des Ombres Éternelles",
  "never-ending-nightmare--special":"Appel des Ombres Éternelles",
  "night-daze":"Explonuit",
  "night-shade":"Ombre Nocturne",
  "night-slash":"Tranche-Nuit",
  "nightmare":"Cauchemar",
  "no-retreat":"Ultime Bastion",
  "noble-roar":"Râle Mâle",
  "nuzzle":"Frotte-Frimousse",
  "oblivion-wing":"Mort’Ailes",
  "obstruct":"Blocage",
  "oceanic-operetta":"Symphonie des Ondines",
  "octazooka":"Octazooka",
  "octolock":"Octoprise",
  "odor-sleuth":"Flair",
  "ominous-wind":"Vent Mauvais",
  "origin-pulse":"Onde Originelle",
  "outrage":"Colère",
  "overdrive":"Overdrive",
  "overheat":"Surchauffe",
  "pain-split":"Balance",
  "parabolic-charge":"Parabocharge",
  "parting-shot":"Dernier Mot",
  "pay-day":"Jackpot",
  "payback":"Représailles",
  "peck":"Picpic",
  "perish-song":"Requiem",
  "petal-blizzard":"Tempête Florale",
  "petal-dance":"Danse Fleurs",
  "phantom-force":"Hantise",
  "photon-geyser":"Photo-Geyser",
  "pika-papow":"Pika-Fracas",
  "pin-missile":"Dard-Nuée",
  "plasma-fists":"Plasma Punch",
  "play-nice":"Camaraderie",
  "play-rough":"Câlinerie",
  "pluck":"Picore",
  "poison-fang":"Crochet Venin",
  "poison-gas":"Gaz Toxik",
  "poison-jab":"Direct Toxik",
  "poison-powder":"Poudre Toxik",
  "poison-sting":"Dard-Venin",
  "poison-tail":"Queue-Poison",
  "pollen-puff":"Boule Pollen",
  "poltergeist":"Esprit Frappeur",
  "pound":"Écras’Face",
  "powder":"Nuée de Poudre",
  "powder-snow":"Poudreuse",
  "power-gem":"Rayon Gemme",
  "power-split":"Partage Force",
  "power-swap":"Permuforce",
  "power-trick":"Astuce Force",
  "power-trip":"Arrogance",
  "power-up-punch":"Poing Boost",
  "power-whip":"Mégafouet",
  "precipice-blades":"Lame Pangéenne",
  "present":"Cadeau",
  "prismatic-laser":"Laser Prisme",
  "protect":"Abri",
  "psybeam":"Rafale Psy",
  "psych-up":"Boost",
  "psychic":"Psyko",
  "psychic-fangs":"Psycho-Croc",
  "psychic-terrain":"Champ Psychique",
  "psycho-boost":"Psycho-Boost",
  "psycho-cut":"Coupe Psycho",
  "psycho-shift":"Échange Psy",
  "psyshock":"Choc Psy",
  "psystrike":"Frappe Psy",
  "psywave":"Vague Psy",
  "pulverizing-pancake":"Gare au Ronflex",
  "punishment":"Punition",
  "purify":"Purification",
  "pursuit":"Poursuite",
  "pyro-ball":"Ballon Brûlant",
  "quash":"À la Queue",
  "quick-attack":"Vive-Attaque",
  "quick-guard":"Prévention",
  "quiver-dance":"Papillodanse",
  "rage":"Frénésie",
  "rage-powder":"Poudre Fureur",
  "rain-dance":"Danse Pluie",
  "rapid-spin":"Tour Rapide",
  "razor-leaf":"Tranch’Herbe",
  "razor-shell":"Coqui-Lame",
  "razor-wind":"Coupe-Vent",
  "recover":"Soin",
  "recycle":"Recyclage",
  "reflect":"Protection",
  "reflect-type":"Copie-Type",
  "refresh":"Régénération",
  "relic-song":"Chant Antique",
  "rest":"Repos",
  "retaliate":"Vengeance",
  "return":"Retour",
  "revelation-dance":"Danse Éveil",
  "revenge":"Vendetta",
  "reversal":"Contre",
  "rising-voltage":"Monte-Tension",
  "roar":"Hurlement",
  "roar-of-time":"Hurle-Temps",
  "rock-blast":"Boule Roc",
  "rock-climb":"Escalade",
  "rock-polish":"Poliroche",
  "rock-slide":"Éboulement",
  "rock-smash":"Éclate-Roc",
  "rock-throw":"Jet-Pierres",
  "rock-tomb":"Tomberoche",
  "rock-wrecker":"Roc-Boulet",
  "role-play":"Imitation",
  "rolling-kick":"Mawashi Geri",
  "rollout":"Roulade",
  "roost":"Atterrissage",
  "rototiller":"Fertilisation",
  "round":"Chant Canon",
  "sacred-fire":"Feu Sacré",
  "sacred-sword":"Lame Sainte",
  "safeguard":"Rune Protect",
  "sand-attack":"Jet de Sable",
  "sand-tomb":"Tourbi-Sable",
  "sandstorm":"Tempête de Sable",
  "sappy-seed":"Évo-Écolo",
  "savage-spin-out--physical":"Cocon Fatal",
  "savage-spin-out--special":"Cocon Fatal",
  "scald":"Ébullition",
  "scale-shot":"Rafale Écailles",
  "scary-face":"Grimace",
  "scorching-sands":"Sable Ardent",
  "scratch":"Griffe",
  "screech":"Grincement",
  "searing-shot":"Incendie",
  "searing-sunraze-smash":"Hélio-Choc Dévastateur",
  "secret-power":"Force Cachée",
  "secret-sword":"Lame Ointe",
  "seed-bomb":"Canon Graine",
  "seed-flare":"Fulmigraine",
  "seismic-toss":"Frappe Atlas",
  "self-destruct":"Destruction",
  "shadow-ball":"Ball’Ombre",
  "shadow-blast":"Aéro Noir",
  "shadow-blitz":"Assaut Noir",
  "shadow-bolt":"Éclair Noir",
  "shadow-bone":"Os Ombre",
  "shadow-break":"Bélier Noir",
  "shadow-chill":"Froid Noir",
  "shadow-claw":"Griffe Ombre",
  "shadow-down":"Souffle Noir",
  "shadow-end":"Retour Noir",
  "shadow-fire":"Ardeur Noir",
  "shadow-force":"Revenant",
  "shadow-half":"Chute Noire",
  "shadow-hold":"Blocage Noir",
  "shadow-mist":"Brume Noire",
  "shadow-panic":"Folie Noire",
  "shadow-punch":"Poing Ombre",
  "shadow-rave":"Rage Noire",
  "shadow-rush":"Charge Noire",
  "shadow-shed":"Percée Noire",
  "shadow-sky":"Ciel Noir",
  "shadow-sneak":"Ombre Portée",
  "shadow-storm":"Typhon Noir",
  "shadow-wave":"Ondo Noire",
  "sharpen":"Affûtage",
  "shattered-psyche--physical":"Psycho-Pulvérisation EX",
  "shattered-psyche--special":"Psycho-Pulvérisation EX",
  "sheer-cold":"Glaciation",
  "shell-side-arm":"Kokiyarme",
  "shell-smash":"Exuviation",
  "shell-trap":"Carapiège",
  "shift-gear":"Chgt Vitesse",
  "shock-wave":"Onde de Choc",
  "shore-up":"Amass’Sable",
  "signal-beam":"Rayon Signal",
  "silver-wind":"Vent Argenté",
  "simple-beam":"Rayon Simple",
  "sing":"Berceuse",
  "sinister-arrow-raid":"Fureur des Plumes Spectrales",
  "sizzly-slide":"Évo-Flambo",
  "sketch":"Gribouille",
  "skill-swap":"Échange",
  "skitter-smack":"Ravage Rampant",
  "skull-bash":"Coud’Krâne",
  "sky-attack":"Piqué",
  "sky-drop":"Chute Libre",
  "sky-uppercut":"Stratopercut",
  "slack-off":"Paresse",
  "slam":"Souplesse",
  "slash":"Tranche",
  "sleep-powder":"Poudre Dodo",
  "sleep-talk":"Blabla Dodo",
  "sludge":"Détritus",
  "sludge-bomb":"Bombe Beurk",
  "sludge-wave":"Cradovague",
  "smack-down":"Anti-Air",
  "smart-strike":"Estocorne",
  "smelling-salts":"Stimulant",
  "smog":"Purédpois",
  "smokescreen":"Brouillard",
  "snap-trap":"Troquenard",
  "snarl":"Aboiement",
  "snatch":"Saisie",
  "snipe-shot":"Tir de Précision",
  "snore":"Ronflement",
  "soak":"Détrempage",
  "soft-boiled":"E-Coque",
  "solar-beam":"Lance-Soleil",
  "solar-blade":"Lame Solaire",
  "sonic-boom":"Sonic Boom",
  "soul-stealing-7-star-strike":"Fauche-Âme des Sept Étoiles",
  "spacial-rend":"Spatio-Rift",
  "spark":"Étincelle",
  "sparkling-aria":"Aria de l’Écume",
  "sparkly-swirl":"Évo-Fabulo",
  "spectral-thief":"Clepto-Mânes",
  "speed-swap":"Permuvitesse",
  "spider-web":"Toile",
  "spike-cannon":"Picanon",
  "spikes":"Picots",
  "spiky-shield":"Pico-Défense",
  "spirit-break":"Choc Émotionnel",
  "spirit-shackle":"Tisse Ombre",
  "spit-up":"Relâche",
  "spite":"Dépit",
  "splash":"Trempette",
  "splintered-stormshards":"Hurlement des Roches-Lames",
  "splishy-splash":"Pika-Splash",
  "spore":"Spore",
  "spotlight":"Projecteur",
  "stealth-rock":"Piège de Roc",
  "steam-eruption":"Jet de Vapeur",
  "steamroller":"Bulldoboule",
  "steel-beam":"Métalaser",
  "steel-roller":"Métalliroue",
  "steel-wing":"Ailes d’Acier",
  "sticky-web":"Toile Gluante",
  "stockpile":"Stockage",
  "stoked-sparksurfer":"Électro-Surf Survolté",
  "stomp":"Écrasement",
  "stomping-tantrum":"Trépignement",
  "stone-edge":"Lame de Roc",
  "stored-power":"Force Ajoutée",
  "storm-throw":"Yama Arashi",
  "strange-steam":"Vapeur Féérique",
  "strength":"Force",
  "strength-sap":"Vole-Force",
  "string-shot":"Sécrétion",
  "struggle":"Lutte",
  "struggle-bug":"Survinsecte",
  "stuff-cheeks":"Garde-à-Joues",
  "stun-spore":"Para-Spore",
  "submission":"Sacrifice",
  "substitute":"Clonage",
  "subzero-slammer--physical":"Laser Cryogénique",
  "subzero-slammer--special":"Laser Cryogénique",
  "sucker-punch":"Coup Bas",
  "sunny-day":"Zénith",
  "sunsteel-strike":"Choc Météore",
  "super-fang":"Croc Fatal",
  "superpower":"Surpuissance",
  "supersonic":"Ultrason",
  "supersonic-skystrike--physical":"Piqué Supersonique",
  "supersonic-skystrike--special":"Piqué Supersonique",
  "surf":"Surf",
  "surging-strikes":"Torrent de Coups",
  "swagger":"Vantardise",
  "swallow":"Avale",
  "sweet-kiss":"Doux Baiser",
  "sweet-scent":"Doux Parfum",
  "swift":"Météores",
  "switcheroo":"Passe-Passe",
  "swords-dance":"Danse Lames",
  "synchronoise":"Synchropeine",
  "synthesis":"Synthèse",
  "tackle":"Charge",
  "tail-glow":"Lumi-Queue",
  "tail-slap":"Plumo-Queue",
  "tail-whip":"Mimi-Queue",
  "tailwind":"Vent Arrière",
  "take-down":"Bélier",
  "tar-shot":"Goudronnage",
  "taunt":"Provoc",
  "tearful-look":"Larme à l’Œil",
  "teatime":"Thérémonie",
  "techno-blast":"Techno-Buster",
  "tectonic-rage--physical":"Éruption Géo-Sismique",
  "tectonic-rage--special":"Éruption Géo-Sismique",
  "teeter-dance":"Danse Folle",
  "telekinesis":"Lévikinésie",
  "teleport":"Téléport",
  "terrain-pulse":"Champlification",
  "thief":"Larcin",
  "thousand-arrows":"Myria-Flèches",
  "thousand-waves":"Myria-Vagues",
  "thrash":"Mania",
  "throat-chop":"Exécu-Son",
  "thunder":"Fatal-Foudre",
  "thunder-cage":"Voltageôle",
  "thunder-fang":"Crocs Éclair",
  "thunder-punch":"Poing Éclair",
  "thunder-shock":"Éclair",
  "thunder-wave":"Cage Éclair",
  "thunderbolt":"Tonnerre",
  "thunderous-kick":"Coup Fulgurant",
  "tickle":"Chatouille",
  "topsy-turvy":"Renversement",
  "torment":"Tourmente",
  "toxic":"Toxik",
  "toxic-spikes":"Pics Toxik",
  "toxic-thread":"Fil Toxique",
  "transform":"Morphing",
  "tri-attack":"Triplattaque",
  "trick":"Tour de Magie",
  "trick-or-treat":"Halloween",
  "trick-room":"Distorsion",
  "triple-axel":"Triple Axel",
  "triple-kick":"Triple Pied",
  "trop-kick":"Botte Sucrette",
  "trump-card":"Atout",
  "twineedle":"Double Dard",
  "twinkle-tackle--physical":"Impact Choupinova",
  "twinkle-tackle--special":"Impact Choupinova",
  "twister":"Ouragan",
  "u-turn":"Demi-Tour",
  "uproar":"Brouhaha",
  "v-create":"Coup Victoire",
  "vacuum-wave":"Onde Vide",
  "veevee-volley":"Évo-Chardasso",
  "venom-drench":"Piège de Venin",
  "venoshock":"Choc Venin",
  "vice-grip":"Force Poigne",
  "vine-whip":"Fouet Lianes",
  "vital-throw":"Corps Perdu",
  "volt-switch":"Change Éclair",
  "volt-tackle":"Électacle",
  "wake-up-slap":"Réveil Forcé",
  "water-gun":"Pistolet à O",
  "water-pledge":"Aire d’Eau",
  "water-pulse":"Vibraqua",
  "water-shuriken":"Sheauriken",
  "water-sport":"Tourniquet",
  "water-spout":"Giclédo",
  "waterfall":"Cascade",
  "weather-ball":"Ball’Météo",
  "whirlpool":"Siphon",
  "whirlwind":"Cyclone",
  "wicked-blow":"Poing Obscur",
  "wide-guard":"Garde Large",
  "wild-charge":"Éclair Fou",
  "will-o-wisp":"Feu Follet",
  "wing-attack":"Cru-Ailes",
  "wish":"Vœu",
  "withdraw":"Repli",
  "wonder-room":"Zone Étrange",
  "wood-hammer":"Martobois",
  "work-up":"Rengorgement",
  "worry-seed":"Soucigraine",
  "wrap":"Ligotage",
  "wring-out":"Essorage",
  "x-scissor":"Plaie Croix",
  "yawn":"Bâillement",
  "zap-cannon":"Élecanon",
  "zen-headbutt":"Psykoud’Boul",
  "zing-zap":"Électrikipik",
  "zippy-zap":"Pika-Sprint"
};

const MOVE_EN_MANUAL = {
  "10-000-000-volt-thunderbolt":"10,000,000 Volt Thunderbolt",
  "absorb":"Absorb",
  "accelerock":"Accelerock",
  "acid":"Acid",
  "acid-armor":"Acid Armor",
  "acid-downpour--physical":"Acid Downpour",
  "acid-downpour--special":"Acid Downpour",
  "acid-spray":"Acid Spray",
  "acrobatics":"Acrobatics",
  "acupressure":"Acupressure",
  "aerial-ace":"Aerial Ace",
  "aeroblast":"Aeroblast",
  "after-you":"After You",
  "agility":"Agility",
  "air-cutter":"Air Cutter",
  "air-slash":"Air Slash",
  "all-out-pummeling--physical":"All-Out Pummeling",
  "all-out-pummeling--special":"All-Out Pummeling",
  "ally-switch":"Ally Switch",
  "amnesia":"Amnesia",
  "anchor-shot":"Anchor Shot",
  "ancient-power":"Ancient Power",
  "apple-acid":"Apple Acid",
  "aqua-jet":"Aqua Jet",
  "aqua-ring":"Aqua Ring",
  "aqua-tail":"Aqua Tail",
  "arm-thrust":"Arm Thrust",
  "aromatherapy":"Aromatherapy",
  "aromatic-mist":"Aromatic Mist",
  "assist":"Assist",
  "assurance":"Assurance",
  "astonish":"Astonish",
  "astral-barrage":"Astral Barrage",
  "attack-order":"Attack Order",
  "attract":"Attract",
  "aura-sphere":"Aura Sphere",
  "aura-wheel":"Aura Wheel",
  "aurora-beam":"Aurora Beam",
  "aurora-veil":"Aurora Veil",
  "autotomize":"Autotomize",
  "avalanche":"Avalanche",
  "baby-doll-eyes":"Baby-Doll Eyes",
  "baddy-bad":"Baddy Bad",
  "baneful-bunker":"Baneful Bunker",
  "barrage":"Barrage",
  "barrier":"Barrier",
  "baton-pass":"Baton Pass",
  "beak-blast":"Beak Blast",
  "beat-up":"Beat Up",
  "behemoth-bash":"Behemoth Bash",
  "behemoth-blade":"Behemoth Blade",
  "belch":"Belch",
  "belly-drum":"Belly Drum",
  "bestow":"Bestow",
  "bide":"Bide",
  "bind":"Bind",
  "bite":"Bite",
  "black-hole-eclipse--physical":"Black Hole Eclipse",
  "black-hole-eclipse--special":"Black Hole Eclipse",
  "blast-burn":"Blast Burn",
  "blaze-kick":"Blaze Kick",
  "blizzard":"Blizzard",
  "block":"Block",
  "bloom-doom--physical":"Bloom Doom",
  "bloom-doom--special":"Bloom Doom",
  "blue-flare":"Blue Flare",
  "body-press":"Body Press",
  "body-slam":"Body Slam",
  "bolt-beak":"Bolt Beak",
  "bolt-strike":"Bolt Strike",
  "bone-club":"Bone Club",
  "bone-rush":"Bone Rush",
  "bonemerang":"Bonemerang",
  "boomburst":"Boomburst",
  "bounce":"Bounce",
  "bouncy-bubble":"Bouncy Bubble",
  "branch-poke":"Branch Poke",
  "brave-bird":"Brave Bird",
  "breaking-swipe":"Breaking Swipe",
  "breakneck-blitz--physical":"Breakneck Blitz",
  "breakneck-blitz--special":"Breakneck Blitz",
  "brick-break":"Brick Break",
  "brine":"Brine",
  "brutal-swing":"Brutal Swing",
  "bubble":"Bubble",
  "bubble-beam":"Bubble Beam",
  "bug-bite":"Bug Bite",
  "bug-buzz":"Bug Buzz",
  "bulk-up":"Bulk Up",
  "bulldoze":"Bulldoze",
  "bullet-punch":"Bullet Punch",
  "bullet-seed":"Bullet Seed",
  "burn-up":"Burn Up",
  "burning-jealousy":"Burning Jealousy",
  "buzzy-buzz":"Buzzy Buzz",
  "calm-mind":"Calm Mind",
  "camouflage":"Camouflage",
  "captivate":"Captivate",
  "catastropika":"Catastropika",
  "celebrate":"Celebrate",
  "charge":"Charge",
  "charge-beam":"Charge Beam",
  "charm":"Charm",
  "chatter":"Chatter",
  "chip-away":"Chip Away",
  "circle-throw":"Circle Throw",
  "clamp":"Clamp",
  "clanging-scales":"Clanging Scales",
  "clangorous-soul":"Clangorous Soul",
  "clangorous-soulblaze":"Clangorous Soulblaze",
  "clear-smog":"Clear Smog",
  "close-combat":"Close Combat",
  "coaching":"Coaching",
  "coil":"Coil",
  "comet-punch":"Comet Punch",
  "confide":"Confide",
  "confuse-ray":"Confuse Ray",
  "confusion":"Confusion",
  "constrict":"Constrict",
  "continental-crush--physical":"Continental Crush",
  "continental-crush--special":"Continental Crush",
  "conversion":"Conversion",
  "conversion-2":"Conversion 2",
  "copycat":"Copycat",
  "core-enforcer":"Core Enforcer",
  "corkscrew-crash--physical":"Corkscrew Crash",
  "corkscrew-crash--special":"Corkscrew Crash",
  "corrosive-gas":"Corrosive Gas",
  "cosmic-power":"Cosmic Power",
  "cotton-guard":"Cotton Guard",
  "cotton-spore":"Cotton Spore",
  "counter":"Counter",
  "court-change":"Court Change",
  "covet":"Covet",
  "crabhammer":"Crabhammer",
  "crafty-shield":"Crafty Shield",
  "cross-chop":"Cross Chop",
  "cross-poison":"Cross Poison",
  "crunch":"Crunch",
  "crush-claw":"Crush Claw",
  "crush-grip":"Crush Grip",
  "curse":"Curse",
  "cut":"Cut",
  "dark-pulse":"Dark Pulse",
  "dark-void":"Dark Void",
  "darkest-lariat":"Darkest Lariat",
  "dazzling-gleam":"Dazzling Gleam",
  "decorate":"Decorate",
  "defend-order":"Defend Order",
  "defense-curl":"Defense Curl",
  "defog":"Defog",
  "destiny-bond":"Destiny Bond",
  "detect":"Detect",
  "devastating-drake--physical":"Devastating Drake",
  "devastating-drake--special":"Devastating Drake",
  "diamond-storm":"Diamond Storm",
  "dig":"Dig",
  "disable":"Disable",
  "disarming-voice":"Disarming Voice",
  "discharge":"Discharge",
  "dive":"Dive",
  "dizzy-punch":"Dizzy Punch",
  "doom-desire":"Doom Desire",
  "double-edge":"Double-Edge",
  "double-hit":"Double Hit",
  "double-iron-bash":"Double Iron Bash",
  "double-kick":"Double Kick",
  "double-slap":"Double Slap",
  "double-team":"Double Team",
  "draco-meteor":"Draco Meteor",
  "dragon-ascent":"Dragon Ascent",
  "dragon-breath":"Dragon Breath",
  "dragon-claw":"Dragon Claw",
  "dragon-dance":"Dragon Dance",
  "dragon-darts":"Dragon Darts",
  "dragon-energy":"Dragon Energy",
  "dragon-hammer":"Dragon Hammer",
  "dragon-pulse":"Dragon Pulse",
  "dragon-rage":"Dragon Rage",
  "dragon-rush":"Dragon Rush",
  "dragon-tail":"Dragon Tail",
  "drain-punch":"Drain Punch",
  "draining-kiss":"Draining Kiss",
  "dream-eater":"Dream Eater",
  "drill-peck":"Drill Peck",
  "drill-run":"Drill Run",
  "drum-beating":"Drum Beating",
  "dual-chop":"Dual Chop",
  "dual-wingbeat":"Dual Wingbeat",
  "dynamax-cannon":"Dynamax Cannon",
  "dynamic-punch":"Dynamic Punch",
  "earth-power":"Earth Power",
  "earthquake":"Earthquake",
  "echoed-voice":"Echoed Voice",
  "eerie-impulse":"Eerie Impulse",
  "eerie-spell":"Eerie Spell",
  "egg-bomb":"Egg Bomb",
  "electric-terrain":"Electric Terrain",
  "electrify":"Electrify",
  "electro-ball":"Electro Ball",
  "electroweb":"Electroweb",
  "embargo":"Embargo",
  "ember":"Ember",
  "encore":"Encore",
  "endeavor":"Endeavor",
  "endure":"Endure",
  "energy-ball":"Energy Ball",
  "entrainment":"Entrainment",
  "eruption":"Eruption",
  "eternabeam":"Eternabeam",
  "expanding-force":"Expanding Force",
  "explosion":"Explosion",
  "extrasensory":"Extrasensory",
  "extreme-evoboost":"Extreme Evoboost",
  "extreme-speed":"Extreme Speed",
  "facade":"Facade",
  "fairy-lock":"Fairy Lock",
  "fairy-wind":"Fairy Wind",
  "fake-out":"Fake Out",
  "fake-tears":"Fake Tears",
  "false-surrender":"False Surrender",
  "false-swipe":"False Swipe",
  "feather-dance":"Feather Dance",
  "feint":"Feint",
  "feint-attack":"Feint Attack",
  "fell-stinger":"Fell Stinger",
  "fiery-dance":"Fiery Dance",
  "fiery-wrath":"Fiery Wrath",
  "final-gambit":"Final Gambit",
  "fire-blast":"Fire Blast",
  "fire-fang":"Fire Fang",
  "fire-lash":"Fire Lash",
  "fire-pledge":"Fire Pledge",
  "fire-punch":"Fire Punch",
  "fire-spin":"Fire Spin",
  "first-impression":"First Impression",
  "fishious-rend":"Fishious Rend",
  "fissure":"Fissure",
  "flail":"Flail",
  "flame-burst":"Flame Burst",
  "flame-charge":"Flame Charge",
  "flame-wheel":"Flame Wheel",
  "flamethrower":"Flamethrower",
  "flare-blitz":"Flare Blitz",
  "flash":"Flash",
  "flash-cannon":"Flash Cannon",
  "flatter":"Flatter",
  "fleur-cannon":"Fleur Cannon",
  "fling":"Fling",
  "flip-turn":"Flip Turn",
  "floaty-fall":"Floaty Fall",
  "floral-healing":"Floral Healing",
  "flower-shield":"Flower Shield",
  "fly":"Fly",
  "flying-press":"Flying Press",
  "focus-blast":"Focus Blast",
  "focus-energy":"Focus Energy",
  "focus-punch":"Focus Punch",
  "follow-me":"Follow Me",
  "force-palm":"Force Palm",
  "foresight":"Foresight",
  "forests-curse":"Forest’s Curse",
  "foul-play":"Foul Play",
  "freeze-dry":"Freeze-Dry",
  "freeze-shock":"Freeze Shock",
  "freezing-glare":"Freezing Glare",
  "freezy-frost":"Freezy Frost",
  "frenzy-plant":"Frenzy Plant",
  "frost-breath":"Frost Breath",
  "frustration":"Frustration",
  "fury-attack":"Fury Attack",
  "fury-cutter":"Fury Cutter",
  "fury-swipes":"Fury Swipes",
  "fusion-bolt":"Fusion Bolt",
  "fusion-flare":"Fusion Flare",
  "future-sight":"Future Sight",
  "gastro-acid":"Gastro Acid",
  "gear-grind":"Gear Grind",
  "gear-up":"Gear Up",
  "genesis-supernova":"Genesis Supernova",
  "geomancy":"Geomancy",
  "giga-drain":"Giga Drain",
  "giga-impact":"Giga Impact",
  "gigavolt-havoc--physical":"Gigavolt Havoc",
  "gigavolt-havoc--special":"Gigavolt Havoc",
  "glacial-lance":"Glacial Lance",
  "glaciate":"Glaciate",
  "glare":"Glare",
  "glitzy-glow":"Glitzy Glow",
  "grass-knot":"Grass Knot",
  "grass-pledge":"Grass Pledge",
  "grass-whistle":"Grass Whistle",
  "grassy-glide":"Grassy Glide",
  "grassy-terrain":"Grassy Terrain",
  "grav-apple":"Grav Apple",
  "gravity":"Gravity",
  "growl":"Growl",
  "growth":"Growth",
  "grudge":"Grudge",
  "guard-split":"Guard Split",
  "guard-swap":"Guard Swap",
  "guardian-of-alola":"Guardian of Alola",
  "guillotine":"Guillotine",
  "gunk-shot":"Gunk Shot",
  "gust":"Gust",
  "gyro-ball":"Gyro Ball",
  "hail":"Hail",
  "hammer-arm":"Hammer Arm",
  "happy-hour":"Happy Hour",
  "harden":"Harden",
  "haze":"Haze",
  "head-charge":"Head Charge",
  "head-smash":"Head Smash",
  "headbutt":"Headbutt",
  "heal-bell":"Heal Bell",
  "heal-block":"Heal Block",
  "heal-order":"Heal Order",
  "heal-pulse":"Heal Pulse",
  "healing-wish":"Healing Wish",
  "heart-stamp":"Heart Stamp",
  "heart-swap":"Heart Swap",
  "heat-crash":"Heat Crash",
  "heat-wave":"Heat Wave",
  "heavy-slam":"Heavy Slam",
  "helping-hand":"Helping Hand",
  "hex":"Hex",
  "hidden-power":"Hidden Power",
  "high-horsepower":"High Horsepower",
  "high-jump-kick":"High Jump Kick",
  "hold-back":"Hold Back",
  "hold-hands":"Hold Hands",
  "hone-claws":"Hone Claws",
  "horn-attack":"Horn Attack",
  "horn-drill":"Horn Drill",
  "horn-leech":"Horn Leech",
  "howl":"Howl",
  "hurricane":"Hurricane",
  "hydro-cannon":"Hydro Cannon",
  "hydro-pump":"Hydro Pump",
  "hydro-vortex--physical":"Hydro Vortex",
  "hydro-vortex--special":"Hydro Vortex",
  "hyper-beam":"Hyper Beam",
  "hyper-fang":"Hyper Fang",
  "hyper-voice":"Hyper Voice",
  "hyperspace-fury":"Hyperspace Fury",
  "hyperspace-hole":"Hyperspace Hole",
  "hypnosis":"Hypnosis",
  "ice-ball":"Ice Ball",
  "ice-beam":"Ice Beam",
  "ice-burn":"Ice Burn",
  "ice-fang":"Ice Fang",
  "ice-hammer":"Ice Hammer",
  "ice-punch":"Ice Punch",
  "ice-shard":"Ice Shard",
  "icicle-crash":"Icicle Crash",
  "icicle-spear":"Icicle Spear",
  "icy-wind":"Icy Wind",
  "imprison":"Imprison",
  "incinerate":"Incinerate",
  "inferno":"Inferno",
  "inferno-overdrive--physical":"Inferno Overdrive",
  "inferno-overdrive--special":"Inferno Overdrive",
  "infestation":"Infestation",
  "ingrain":"Ingrain",
  "instruct":"Instruct",
  "ion-deluge":"Ion Deluge",
  "iron-defense":"Iron Defense",
  "iron-head":"Iron Head",
  "iron-tail":"Iron Tail",
  "jaw-lock":"Jaw Lock",
  "judgment":"Judgment",
  "jump-kick":"Jump Kick",
  "jungle-healing":"Jungle Healing",
  "karate-chop":"Karate Chop",
  "kinesis":"Kinesis",
  "kings-shield":"King’s Shield",
  "knock-off":"Knock Off",
  "lands-wrath":"Land’s Wrath",
  "laser-focus":"Laser Focus",
  "lash-out":"Lash Out",
  "last-resort":"Last Resort",
  "lava-plume":"Lava Plume",
  "leaf-blade":"Leaf Blade",
  "leaf-storm":"Leaf Storm",
  "leaf-tornado":"Leaf Tornado",
  "leafage":"Leafage",
  "leech-life":"Leech Life",
  "leech-seed":"Leech Seed",
  "leer":"Leer",
  "lets-snuggle-forever":"Let’s Snuggle Forever",
  "lick":"Lick",
  "life-dew":"Life Dew",
  "light-of-ruin":"Light of Ruin",
  "light-screen":"Light Screen",
  "light-that-burns-the-sky":"Light That Burns the Sky",
  "liquidation":"Liquidation",
  "lock-on":"Lock-On",
  "lovely-kiss":"Lovely Kiss",
  "low-kick":"Low Kick",
  "low-sweep":"Low Sweep",
  "lucky-chant":"Lucky Chant",
  "lunar-dance":"Lunar Dance",
  "lunge":"Lunge",
  "luster-purge":"Luster Purge",
  "mach-punch":"Mach Punch",
  "magic-coat":"Magic Coat",
  "magic-powder":"Magic Powder",
  "magic-room":"Magic Room",
  "magical-leaf":"Magical Leaf",
  "magma-storm":"Magma Storm",
  "magnet-bomb":"Magnet Bomb",
  "magnet-rise":"Magnet Rise",
  "magnetic-flux":"Magnetic Flux",
  "magnitude":"Magnitude",
  "malicious-moonsault":"Malicious Moonsault",
  "mat-block":"Mat Block",
  "max-airstream":"Max Airstream",
  "max-darkness":"Max Darkness",
  "max-flare":"Max Flare",
  "max-flutterby":"Max Flutterby",
  "max-geyser":"Max Geyser",
  "max-guard":"Max Guard",
  "max-hailstorm":"Max Hailstorm",
  "max-knuckle":"Max Knuckle",
  "max-lightning":"Max Lightning",
  "max-mindstorm":"Max Mindstorm",
  "max-ooze":"Max Ooze",
  "max-overgrowth":"Max Overgrowth",
  "max-phantasm":"Max Phantasm",
  "max-quake":"Max Quake",
  "max-rockfall":"Max Rockfall",
  "max-starfall":"Max Starfall",
  "max-steelspike":"Max Steelspike",
  "max-strike":"Max Strike",
  "max-wyrmwind":"Max Wyrmwind",
  "me-first":"Me First",
  "mean-look":"Mean Look",
  "meditate":"Meditate",
  "mega-drain":"Mega Drain",
  "mega-kick":"Mega Kick",
  "mega-punch":"Mega Punch",
  "megahorn":"Megahorn",
  "memento":"Memento",
  "menacing-moonraze-maelstrom":"Menacing Moonraze Maelstrom",
  "metal-burst":"Metal Burst",
  "metal-claw":"Metal Claw",
  "metal-sound":"Metal Sound",
  "meteor-assault":"Meteor Assault",
  "meteor-beam":"Meteor Beam",
  "meteor-mash":"Meteor Mash",
  "metronome":"Metronome",
  "milk-drink":"Milk Drink",
  "mimic":"Mimic",
  "mind-blown":"Mind Blown",
  "mind-reader":"Mind Reader",
  "minimize":"Minimize",
  "miracle-eye":"Miracle Eye",
  "mirror-coat":"Mirror Coat",
  "mirror-move":"Mirror Move",
  "mirror-shot":"Mirror Shot",
  "mist":"Mist",
  "mist-ball":"Mist Ball",
  "misty-explosion":"Misty Explosion",
  "misty-terrain":"Misty Terrain",
  "moonblast":"Moonblast",
  "moongeist-beam":"Moongeist Beam",
  "moonlight":"Moonlight",
  "morning-sun":"Morning Sun",
  "mud-bomb":"Mud Bomb",
  "mud-shot":"Mud Shot",
  "mud-slap":"Mud-Slap",
  "mud-sport":"Mud Sport",
  "muddy-water":"Muddy Water",
  "multi-attack":"Multi-Attack",
  "mystical-fire":"Mystical Fire",
  "nasty-plot":"Nasty Plot",
  "natural-gift":"Natural Gift",
  "nature-power":"Nature Power",
  "natures-madness":"Nature’s Madness",
  "needle-arm":"Needle Arm",
  "never-ending-nightmare--physical":"Never-Ending Nightmare",
  "never-ending-nightmare--special":"Never-Ending Nightmare",
  "night-daze":"Night Daze",
  "night-shade":"Night Shade",
  "night-slash":"Night Slash",
  "nightmare":"Nightmare",
  "no-retreat":"No Retreat",
  "noble-roar":"Noble Roar",
  "nuzzle":"Nuzzle",
  "oblivion-wing":"Oblivion Wing",
  "obstruct":"Obstruct",
  "oceanic-operetta":"Oceanic Operetta",
  "octazooka":"Octazooka",
  "octolock":"Octolock",
  "odor-sleuth":"Odor Sleuth",
  "ominous-wind":"Ominous Wind",
  "origin-pulse":"Origin Pulse",
  "outrage":"Outrage",
  "overdrive":"Overdrive",
  "overheat":"Overheat",
  "pain-split":"Pain Split",
  "parabolic-charge":"Parabolic Charge",
  "parting-shot":"Parting Shot",
  "pay-day":"Pay Day",
  "payback":"Payback",
  "peck":"Peck",
  "perish-song":"Perish Song",
  "petal-blizzard":"Petal Blizzard",
  "petal-dance":"Petal Dance",
  "phantom-force":"Phantom Force",
  "photon-geyser":"Photon Geyser",
  "pika-papow":"Pika Papow",
  "pin-missile":"Pin Missile",
  "plasma-fists":"Plasma Fists",
  "play-nice":"Play Nice",
  "play-rough":"Play Rough",
  "pluck":"Pluck",
  "poison-fang":"Poison Fang",
  "poison-gas":"Poison Gas",
  "poison-jab":"Poison Jab",
  "poison-powder":"Poison Powder",
  "poison-sting":"Poison Sting",
  "poison-tail":"Poison Tail",
  "pollen-puff":"Pollen Puff",
  "poltergeist":"Poltergeist",
  "pound":"Pound",
  "powder":"Powder",
  "powder-snow":"Powder Snow",
  "power-gem":"Power Gem",
  "power-split":"Power Split",
  "power-swap":"Power Swap",
  "power-trick":"Power Trick",
  "power-trip":"Power Trip",
  "power-up-punch":"Power-Up Punch",
  "power-whip":"Power Whip",
  "precipice-blades":"Precipice Blades",
  "present":"Present",
  "prismatic-laser":"Prismatic Laser",
  "protect":"Protect",
  "psybeam":"Psybeam",
  "psych-up":"Psych Up",
  "psychic":"Psychic",
  "psychic-fangs":"Psychic Fangs",
  "psychic-terrain":"Psychic Terrain",
  "psycho-boost":"Psycho Boost",
  "psycho-cut":"Psycho Cut",
  "psycho-shift":"Psycho Shift",
  "psyshock":"Psyshock",
  "psystrike":"Psystrike",
  "psywave":"Psywave",
  "pulverizing-pancake":"Pulverizing Pancake",
  "punishment":"Punishment",
  "purify":"Purify",
  "pursuit":"Pursuit",
  "pyro-ball":"Pyro Ball",
  "quash":"Quash",
  "quick-attack":"Quick Attack",
  "quick-guard":"Quick Guard",
  "quiver-dance":"Quiver Dance",
  "rage":"Rage",
  "rage-powder":"Rage Powder",
  "rain-dance":"Rain Dance",
  "rapid-spin":"Rapid Spin",
  "razor-leaf":"Razor Leaf",
  "razor-shell":"Razor Shell",
  "razor-wind":"Razor Wind",
  "recover":"Recover",
  "recycle":"Recycle",
  "reflect":"Reflect",
  "reflect-type":"Reflect Type",
  "refresh":"Refresh",
  "relic-song":"Relic Song",
  "rest":"Rest",
  "retaliate":"Retaliate",
  "return":"Return",
  "revelation-dance":"Revelation Dance",
  "revenge":"Revenge",
  "reversal":"Reversal",
  "rising-voltage":"Rising Voltage",
  "roar":"Roar",
  "roar-of-time":"Roar of Time",
  "rock-blast":"Rock Blast",
  "rock-climb":"Rock Climb",
  "rock-polish":"Rock Polish",
  "rock-slide":"Rock Slide",
  "rock-smash":"Rock Smash",
  "rock-throw":"Rock Throw",
  "rock-tomb":"Rock Tomb",
  "rock-wrecker":"Rock Wrecker",
  "role-play":"Role Play",
  "rolling-kick":"Rolling Kick",
  "rollout":"Rollout",
  "roost":"Roost",
  "rototiller":"Rototiller",
  "round":"Round",
  "sacred-fire":"Sacred Fire",
  "sacred-sword":"Sacred Sword",
  "safeguard":"Safeguard",
  "sand-attack":"Sand Attack",
  "sand-tomb":"Sand Tomb",
  "sandstorm":"Sandstorm",
  "sappy-seed":"Sappy Seed",
  "savage-spin-out--physical":"Savage Spin-Out",
  "savage-spin-out--special":"Savage Spin-Out",
  "scald":"Scald",
  "scale-shot":"Scale Shot",
  "scary-face":"Scary Face",
  "scorching-sands":"Scorching Sands",
  "scratch":"Scratch",
  "screech":"Screech",
  "searing-shot":"Searing Shot",
  "searing-sunraze-smash":"Searing Sunraze Smash",
  "secret-power":"Secret Power",
  "secret-sword":"Secret Sword",
  "seed-bomb":"Seed Bomb",
  "seed-flare":"Seed Flare",
  "seismic-toss":"Seismic Toss",
  "self-destruct":"Self-Destruct",
  "shadow-ball":"Shadow Ball",
  "shadow-blast":"Shadow Blast",
  "shadow-blitz":"Shadow Blitz",
  "shadow-bolt":"Shadow Bolt",
  "shadow-bone":"Shadow Bone",
  "shadow-break":"Shadow Break",
  "shadow-chill":"Shadow Chill",
  "shadow-claw":"Shadow Claw",
  "shadow-down":"Shadow Down",
  "shadow-end":"Shadow End",
  "shadow-fire":"Shadow Fire",
  "shadow-force":"Shadow Force",
  "shadow-half":"Shadow Half",
  "shadow-hold":"Shadow Hold",
  "shadow-mist":"Shadow Mist",
  "shadow-panic":"Shadow Panic",
  "shadow-punch":"Shadow Punch",
  "shadow-rave":"Shadow Rave",
  "shadow-rush":"Shadow Rush",
  "shadow-shed":"Shadow Shed",
  "shadow-sky":"Shadow Sky",
  "shadow-sneak":"Shadow Sneak",
  "shadow-storm":"Shadow Storm",
  "shadow-wave":"Shadow Wave",
  "sharpen":"Sharpen",
  "shattered-psyche--physical":"Shattered Psyche",
  "shattered-psyche--special":"Shattered Psyche",
  "sheer-cold":"Sheer Cold",
  "shell-side-arm":"Shell Side Arm",
  "shell-smash":"Shell Smash",
  "shell-trap":"Shell Trap",
  "shift-gear":"Shift Gear",
  "shock-wave":"Shock Wave",
  "shore-up":"Shore Up",
  "signal-beam":"Signal Beam",
  "silver-wind":"Silver Wind",
  "simple-beam":"Simple Beam",
  "sing":"Sing",
  "sinister-arrow-raid":"Sinister Arrow Raid",
  "sizzly-slide":"Sizzly Slide",
  "sketch":"Sketch",
  "skill-swap":"Skill Swap",
  "skitter-smack":"Skitter Smack",
  "skull-bash":"Skull Bash",
  "sky-attack":"Sky Attack",
  "sky-drop":"Sky Drop",
  "sky-uppercut":"Sky Uppercut",
  "slack-off":"Slack Off",
  "slam":"Slam",
  "slash":"Slash",
  "sleep-powder":"Sleep Powder",
  "sleep-talk":"Sleep Talk",
  "sludge":"Sludge",
  "sludge-bomb":"Sludge Bomb",
  "sludge-wave":"Sludge Wave",
  "smack-down":"Smack Down",
  "smart-strike":"Smart Strike",
  "smelling-salts":"Smelling Salts",
  "smog":"Smog",
  "smokescreen":"Smokescreen",
  "snap-trap":"Snap Trap",
  "snarl":"Snarl",
  "snatch":"Snatch",
  "snipe-shot":"Snipe Shot",
  "snore":"Snore",
  "soak":"Soak",
  "soft-boiled":"Soft-Boiled",
  "solar-beam":"Solar Beam",
  "solar-blade":"Solar Blade",
  "sonic-boom":"Sonic Boom",
  "soul-stealing-7-star-strike":"Soul-Stealing 7-Star Strike",
  "spacial-rend":"Spacial Rend",
  "spark":"Spark",
  "sparkling-aria":"Sparkling Aria",
  "sparkly-swirl":"Sparkly Swirl",
  "spectral-thief":"Spectral Thief",
  "speed-swap":"Speed Swap",
  "spider-web":"Spider Web",
  "spike-cannon":"Spike Cannon",
  "spikes":"Spikes",
  "spiky-shield":"Spiky Shield",
  "spirit-break":"Spirit Break",
  "spirit-shackle":"Spirit Shackle",
  "spit-up":"Spit Up",
  "spite":"Spite",
  "splash":"Splash",
  "splintered-stormshards":"Splintered Stormshards",
  "splishy-splash":"Splishy Splash",
  "spore":"Spore",
  "spotlight":"Spotlight",
  "stealth-rock":"Stealth Rock",
  "steam-eruption":"Steam Eruption",
  "steamroller":"Steamroller",
  "steel-beam":"Steel Beam",
  "steel-roller":"Steel Roller",
  "steel-wing":"Steel Wing",
  "sticky-web":"Sticky Web",
  "stockpile":"Stockpile",
  "stoked-sparksurfer":"Stoked Sparksurfer",
  "stomp":"Stomp",
  "stomping-tantrum":"Stomping Tantrum",
  "stone-edge":"Stone Edge",
  "stored-power":"Stored Power",
  "storm-throw":"Storm Throw",
  "strange-steam":"Strange Steam",
  "strength":"Strength",
  "strength-sap":"Strength Sap",
  "string-shot":"String Shot",
  "struggle":"Struggle",
  "struggle-bug":"Struggle Bug",
  "stuff-cheeks":"Stuff Cheeks",
  "stun-spore":"Stun Spore",
  "submission":"Submission",
  "substitute":"Substitute",
  "subzero-slammer--physical":"Subzero Slammer",
  "subzero-slammer--special":"Subzero Slammer",
  "sucker-punch":"Sucker Punch",
  "sunny-day":"Sunny Day",
  "sunsteel-strike":"Sunsteel Strike",
  "super-fang":"Super Fang",
  "superpower":"Superpower",
  "supersonic":"Supersonic",
  "supersonic-skystrike--physical":"Supersonic Skystrike",
  "supersonic-skystrike--special":"Supersonic Skystrike",
  "surf":"Surf",
  "surging-strikes":"Surging Strikes",
  "swagger":"Swagger",
  "swallow":"Swallow",
  "sweet-kiss":"Sweet Kiss",
  "sweet-scent":"Sweet Scent",
  "swift":"Swift",
  "switcheroo":"Switcheroo",
  "swords-dance":"Swords Dance",
  "synchronoise":"Synchronoise",
  "synthesis":"Synthesis",
  "tackle":"Tackle",
  "tail-glow":"Tail Glow",
  "tail-slap":"Tail Slap",
  "tail-whip":"Tail Whip",
  "tailwind":"Tailwind",
  "take-down":"Take Down",
  "tar-shot":"Tar Shot",
  "taunt":"Taunt",
  "tearful-look":"Tearful Look",
  "teatime":"Teatime",
  "techno-blast":"Techno Blast",
  "tectonic-rage--physical":"Tectonic Rage",
  "tectonic-rage--special":"Tectonic Rage",
  "teeter-dance":"Teeter Dance",
  "telekinesis":"Telekinesis",
  "teleport":"Teleport",
  "terrain-pulse":"Terrain Pulse",
  "thief":"Thief",
  "thousand-arrows":"Thousand Arrows",
  "thousand-waves":"Thousand Waves",
  "thrash":"Thrash",
  "throat-chop":"Throat Chop",
  "thunder":"Thunder",
  "thunder-cage":"Thunder Cage",
  "thunder-fang":"Thunder Fang",
  "thunder-punch":"Thunder Punch",
  "thunder-shock":"Thunder Shock",
  "thunder-wave":"Thunder Wave",
  "thunderbolt":"Thunderbolt",
  "thunderous-kick":"Thunderous Kick",
  "tickle":"Tickle",
  "topsy-turvy":"Topsy-Turvy",
  "torment":"Torment",
  "toxic":"Toxic",
  "toxic-spikes":"Toxic Spikes",
  "toxic-thread":"Toxic Thread",
  "transform":"Transform",
  "tri-attack":"Tri Attack",
  "trick":"Trick",
  "trick-or-treat":"Trick-or-Treat",
  "trick-room":"Trick Room",
  "triple-axel":"Triple Axel",
  "triple-kick":"Triple Kick",
  "trop-kick":"Trop Kick",
  "trump-card":"Trump Card",
  "twineedle":"Twineedle",
  "twinkle-tackle--physical":"Twinkle Tackle",
  "twinkle-tackle--special":"Twinkle Tackle",
  "twister":"Twister",
  "u-turn":"U-turn",
  "uproar":"Uproar",
  "v-create":"V-create",
  "vacuum-wave":"Vacuum Wave",
  "veevee-volley":"Veevee Volley",
  "venom-drench":"Venom Drench",
  "venoshock":"Venoshock",
  "vice-grip":"Vise Grip",
  "vine-whip":"Vine Whip",
  "vital-throw":"Vital Throw",
  "volt-switch":"Volt Switch",
  "volt-tackle":"Volt Tackle",
  "wake-up-slap":"Wake-Up Slap",
  "water-gun":"Water Gun",
  "water-pledge":"Water Pledge",
  "water-pulse":"Water Pulse",
  "water-shuriken":"Water Shuriken",
  "water-sport":"Water Sport",
  "water-spout":"Water Spout",
  "waterfall":"Waterfall",
  "weather-ball":"Weather Ball",
  "whirlpool":"Whirlpool",
  "whirlwind":"Whirlwind",
  "wicked-blow":"Wicked Blow",
  "wide-guard":"Wide Guard",
  "wild-charge":"Wild Charge",
  "will-o-wisp":"Will-O-Wisp",
  "wing-attack":"Wing Attack",
  "wish":"Wish",
  "withdraw":"Withdraw",
  "wonder-room":"Wonder Room",
  "wood-hammer":"Wood Hammer",
  "work-up":"Work Up",
  "worry-seed":"Worry Seed",
  "wrap":"Wrap",
  "wring-out":"Wring Out",
  "x-scissor":"X-Scissor",
  "yawn":"Yawn",
  "zap-cannon":"Zap Cannon",
  "zen-headbutt":"Zen Headbutt",
  "zing-zap":"Zing Zap",
  "zippy-zap":"Zippy Zap"
};

const ABILITY_FR_MANUAL = {
  "adaptability":"Adaptabilité",
  "aerilate":"Peau Céleste",
  "aftermath":"Boom Final",
  "air-lock":"Air Lock",
  "analytic":"Analyste",
  "anger-point":"Colérique",
  "anticipation":"Anticipation",
  "arena-trap":"Piège Sable",
  "aroma-veil":"Aroma-Voile",
  "as-one-glastrier":"Osmose Équine",
  "as-one-spectrier":"Osmose Équine",
  "aura-break":"Aura Inversée",
  "bad-dreams":"Mauvais Rêve",
  "ball-fetch":"Ramasse Ball",
  "battery":"Batterie",
  "battle-armor":"Armurbaston",
  "battle-bond":"Synergie",
  "beast-boost":"Boost Chimère",
  "berserk":"Dracolère",
  "big-pecks":"Cœur de Coq",
  "blaze":"Brasier",
  "bulletproof":"Pare-Balles",
  "cheek-pouch":"Bajoues",
  "chilling-neigh":"Blanche Ruade",
  "chlorophyll":"Chlorophylle",
  "clear-body":"Corps Sain",
  "cloud-nine":"Ciel Gris",
  "color-change":"Homochromie",
  "comatose":"Hypersommeil",
  "competitive":"Battant",
  "compound-eyes":"Œil Composé",
  "contrary":"Contestation",
  "corrosion":"Corrosion",
  "cotton-down":"Effilochage",
  "curious-medicine":"Breuvage Suspect",
  "cursed-body":"Corps Maudit",
  "cute-charm":"Joli Sourire",
  "damp":"Moiteur",
  "dancer":"Danseuse",
  "dark-aura":"Aura Ténébreuse",
  "dauntless-shield":"Égide Inflexible",
  "dazzling":"Corps Coloré",
  "defeatist":"Défaitiste",
  "defiant":"Acharné",
  "delta-stream":"Souffle Delta",
  "desolate-land":"Terre Finale",
  "disguise":"Fantômasque",
  "download":"Télécharge",
  "dragons-maw":"Dent de Dragon",
  "drizzle":"Crachin",
  "drought":"Sécheresse",
  "dry-skin":"Peau Sèche",
  "early-bird":"Matinal",
  "effect-spore":"Pose Spore",
  "electric-surge":"Créa-Élec",
  "emergency-exit":"Repli Tactique",
  "fairy-aura":"Aura Féérique",
  "filter":"Filtre",
  "flame-body":"Corps Ardent",
  "flare-boost":"Rage Brûlure",
  "flash-fire":"Torche",
  "flower-gift":"Don Floral",
  "flower-veil":"Flora-Voile",
  "fluffy":"Boule de Poils",
  "forecast":"Météo",
  "forewarn":"Prédiction",
  "friend-guard":"Garde-Ami",
  "frisk":"Fouille",
  "full-metal-body":"Métallo-Garde",
  "fur-coat":"Toison Épaisse",
  "gale-wings":"Ailes Bourrasque",
  "galvanize":"Peau Électrique",
  "gluttony":"Gloutonnerie",
  "gooey":"Poisseux",
  "gorilla-tactics":"Entêtement",
  "grass-pelt":"Toison Herbue",
  "grassy-surge":"Créa-Herbe",
  "grim-neigh":"Sombre Ruade",
  "gulp-missile":"Dégobage",
  "guts":"Cran",
  "harvest":"Récolte",
  "healer":"Cœur Soin",
  "heatproof":"Ignifugé",
  "heavy-metal":"Heavy Metal",
  "honey-gather":"Cherche Miel",
  "huge-power":"Coloforce",
  "hunger-switch":"Déclic Fringale",
  "hustle":"Agitation",
  "hydration":"Hydratation",
  "hyper-cutter":"Hyper Cutter",
  "ice-body":"Corps Gel",
  "ice-face":"Tête de Gel",
  "ice-scales":"Écailles Glacées",
  "illuminate":"Lumiattirance",
  "illusion":"Illusion",
  "immunity":"Vaccin",
  "imposter":"Imposteur",
  "infiltrator":"Infiltration",
  "innards-out":"Expuls’Organes",
  "inner-focus":"Attention",
  "insomnia":"Insomnia",
  "intimidate":"Intimidation",
  "intrepid-sword":"Lame Indomptable",
  "iron-barbs":"Épine de Fer",
  "iron-fist":"Poing de Fer",
  "justified":"Cœur Noble",
  "keen-eye":"Regard Vif",
  "klutz":"Maladresse",
  "leaf-guard":"Feuille Garde",
  "levitate":"Lévitation",
  "libero":"Libéro",
  "light-metal":"Light Metal",
  "lightning-rod":"Paratonnerre",
  "limber":"Échauffement",
  "liquid-ooze":"Suintement",
  "liquid-voice":"Hydrata-Son",
  "long-reach":"Longue Portée",
  "magic-bounce":"Miroir Magik",
  "magic-guard":"Garde Magik",
  "magician":"Magicien",
  "magma-armor":"Armumagma",
  "magnet-pull":"Magnépiège",
  "marvel-scale":"Écaille Spéciale",
  "mega-launcher":"Méga Blaster",
  "merciless":"Cruauté",
  "mimicry":"Mimétisme",
  "minus":"Moins",
  "mirror-armor":"Armure Miroir",
  "misty-surge":"Créa-Brume",
  "mold-breaker":"Brise Moule",
  "moody":"Lunatique",
  "motor-drive":"Motorisé",
  "moxie":"Impudence",
  "multiscale":"Multiécaille",
  "multitype":"Multi-Type",
  "mummy":"Momie",
  "natural-cure":"Médic Nature",
  "neuroforce":"Cérébro-Force",
  "neutralizing-gas":"Gaz Inhibiteur",
  "no-guard":"Annule Garde",
  "normalize":"Normalise",
  "oblivious":"Benêt",
  "overcoat":"Envelocape",
  "overgrow":"Engrais",
  "own-tempo":"Tempo Perso",
  "parental-bond":"Amour Filial",
  "pastel-veil":"Voile Pastel",
  "perish-body":"Corps Condamné",
  "pickpocket":"Pickpocket",
  "pickup":"Ramassage",
  "pixilate":"Peau Féérique",
  "plus":"Plus",
  "poison-heal":"Soin Poison",
  "poison-point":"Point Poison",
  "poison-touch":"Toxitouche",
  "power-construct":"Rassemblement",
  "power-of-alchemy":"Osmose",
  "power-spot":"Cercle d’Énergie",
  "prankster":"Farceur",
  "pressure":"Pression",
  "primordial-sea":"Mer Primaire",
  "prism-armor":"Prisme-Armure",
  "propeller-tail":"Propulseur",
  "protean":"Protéen",
  "psychic-surge":"Créa-Psy",
  "punk-rock":"Punk Rock",
  "pure-power":"Force Pure",
  "queenly-majesty":"Prestance Royale",
  "quick-draw":"Tir Vif",
  "quick-feet":"Pied Véloce",
  "rain-dish":"Cuvette",
  "rattled":"Phobique",
  "receiver":"Receveur",
  "reckless":"Téméraire",
  "refrigerate":"Peau Gelée",
  "regenerator":"Régé-Force",
  "ripen":"Mûrissement",
  "rivalry":"Rivalité",
  "rks-system":"Système Alpha",
  "rock-head":"Tête de Roc",
  "rough-skin":"Peau Dure",
  "run-away":"Fuite",
  "sand-force":"Force Sable",
  "sand-rush":"Baigne Sable",
  "sand-spit":"Expul’Sable",
  "sand-stream":"Sable Volant",
  "sand-veil":"Voile Sable",
  "sap-sipper":"Herbivore",
  "schooling":"Banc",
  "scrappy":"Querelleur",
  "screen-cleaner":"Brise-Barrière",
  "serene-grace":"Sérénité",
  "shadow-shield":"Spectro-Bouclier",
  "shadow-tag":"Marque Ombre",
  "shed-skin":"Mue",
  "sheer-force":"Sans Limite",
  "shell-armor":"Coque Armure",
  "shield-dust":"Écran Poudre",
  "shields-down":"Bouclier-Carcan",
  "simple":"Simple",
  "skill-link":"Multi-Coups",
  "slow-start":"Début Calme",
  "slush-rush":"Chasse-Neige",
  "sniper":"Sniper",
  "snow-cloak":"Rideau Neige",
  "snow-warning":"Alerte Neige",
  "solar-power":"Force Soleil",
  "solid-rock":"Solide Roc",
  "soul-heart":"Animacœur",
  "soundproof":"Anti-Bruit",
  "speed-boost":"Turbo",
  "stakeout":"Filature",
  "stall":"Frein",
  "stalwart":"Nerfs d’Acier",
  "stamina":"Endurance",
  "stance-change":"Déclic Tactique",
  "static":"Statik",
  "steadfast":"Impassible",
  "steam-engine":"Turbine",
  "steelworker":"Expert Acier",
  "steely-spirit":"Boost Acier",
  "stench":"Puanteur",
  "sticky-hold":"Glu",
  "storm-drain":"Lavabo",
  "strong-jaw":"Prognathe",
  "sturdy":"Fermeté",
  "suction-cups":"Ventouse",
  "super-luck":"Chanceux",
  "surge-surfer":"Surf Caudal",
  "swarm":"Essaim",
  "sweet-veil":"Gluco-Voile",
  "swift-swim":"Glissade",
  "symbiosis":"Symbiose",
  "synchronize":"Synchro",
  "tangled-feet":"Pieds Confus",
  "tangling-hair":"Mèche Rebelle",
  "technician":"Technicien",
  "telepathy":"Télépathe",
  "teravolt":"Téra-Voltage",
  "thick-fat":"Isograisse",
  "tinted-lens":"Lentiteintée",
  "torrent":"Torrent",
  "tough-claws":"Griffe Dure",
  "toxic-boost":"Rage Poison",
  "trace":"Calque",
  "transistor":"Transistor",
  "triage":"Prioguérison",
  "truant":"Absentéisme",
  "turboblaze":"Turbo Brasier",
  "unaware":"Inconscient",
  "unburden":"Délestage",
  "unnerve":"Tension",
  "unseen-fist":"Poing Invisible",
  "victory-star":"Victorieux",
  "vital-spirit":"Esprit Vital",
  "volt-absorb":"Absorbe-Volt",
  "wandering-spirit":"Âme Vagabonde",
  "water-absorb":"Absorbe-Eau",
  "water-bubble":"Aquabulle",
  "water-compaction":"Sable Humide",
  "water-veil":"Ignifu-Voile",
  "weak-armor":"Armurouillée",
  "white-smoke":"Écran Fumée",
  "wimp-out":"Escampette",
  "wonder-guard":"Garde Mystik",
  "wonder-skin":"Peau Miracle",
  "zen-mode":"Mode Transe"
};

const ABILITY_EN_MANUAL = {
  "adaptability":"Adaptability",
  "aerilate":"Aerilate",
  "aftermath":"Aftermath",
  "air-lock":"Air Lock",
  "analytic":"Analytic",
  "anger-point":"Anger Point",
  "anticipation":"Anticipation",
  "aqua-boost":"Aqua Boost",
  "arena-trap":"Arena Trap",
  "aroma-veil":"Aroma Veil",
  "as-one-glastrier":"As One",
  "as-one-spectrier":"As One",
  "aura-break":"Aura Break",
  "bad-dreams":"Bad Dreams",
  "ball-fetch":"Ball Fetch",
  "battery":"Battery",
  "battle-armor":"Battle Armor",
  "battle-bond":"Battle Bond",
  "beast-boost":"Beast Boost",
  "berserk":"Berserk",
  "big-pecks":"Big Pecks",
  "black-hole":"Black Hole",
  "blaze":"Blaze",
  "bodyguard":"Bodyguard",
  "bonanza":"Bonanza",
  "bulletproof":"Bulletproof",
  "calming":"Calming",
  "celebrate":"Celebrate",
  "cheek-pouch":"Cheek Pouch",
  "chilling-neigh":"Chilling Neigh",
  "chlorophyll":"Chlorophyll",
  "clear-body":"Clear Body",
  "climber":"Climber",
  "cloud-nine":"Cloud Nine",
  "color-change":"Color Change",
  "comatose":"Comatose",
  "competitive":"Competitive",
  "compound-eyes":"Compound Eyes",
  "confidence":"Confidence",
  "conqueror":"Conqueror",
  "contrary":"Contrary",
  "corrosion":"Corrosion",
  "cotton-down":"Cotton Down",
  "curious-medicine":"Curious Medicine",
  "cursed-body":"Cursed Body",
  "cute-charm":"Cute Charm",
  "damp":"Damp",
  "dancer":"Dancer",
  "dark-aura":"Dark Aura",
  "dauntless-shield":"Dauntless Shield",
  "daze":"Daze",
  "dazzling":"Dazzling",
  "decoy":"Decoy",
  "deep-sleep":"Deep Sleep",
  "defeatist":"Defeatist",
  "defiant":"Defiant",
  "delta-stream":"Delta Stream",
  "desolate-land":"Desolate Land",
  "disguise":"Disguise",
  "disgust":"Disgust",
  "dodge":"Dodge",
  "download":"Download",
  "dragons-maw":"Dragon’s Maw",
  "drizzle":"Drizzle",
  "drought":"Drought",
  "dry-skin":"Dry Skin",
  "early-bird":"Early Bird",
  "effect-spore":"Effect Spore",
  "electric-surge":"Electric Surge",
  "emergency-exit":"Emergency Exit",
  "explode":"Explode",
  "fairy-aura":"Fairy Aura",
  "filter":"Filter",
  "flame-body":"Flame Body",
  "flame-boost":"Flame Boost",
  "flare-boost":"Flare Boost",
  "flash-fire":"Flash Fire",
  "flower-gift":"Flower Gift",
  "flower-veil":"Flower Veil",
  "fluffy":"Fluffy",
  "forecast":"Forecast",
  "forewarn":"Forewarn",
  "fortune":"Fortune",
  "friend-guard":"Friend Guard",
  "frighten":"Frighten",
  "frisk":"Frisk",
  "frostbite":"Frostbite",
  "full-metal-body":"Full Metal Body",
  "fur-coat":"Fur Coat",
  "gale-wings":"Gale Wings",
  "galvanize":"Galvanize",
  "gluttony":"Gluttony",
  "gooey":"Gooey",
  "gorilla-tactics":"Gorilla Tactics",
  "grass-cloak":"Grass Cloak",
  "grass-pelt":"Grass Pelt",
  "grassy-surge":"Grassy Surge",
  "grim-neigh":"Grim Neigh",
  "gulp":"Gulp",
  "gulp-missile":"Gulp Missile",
  "guts":"Guts",
  "harvest":"Harvest",
  "healer":"Healer",
  "heatproof":"Heatproof",
  "heavy-metal":"Heavy Metal",
  "herbivore":"Herbivore",
  "hero":"Hero",
  "high-rise":"High-rise",
  "honey-gather":"Honey Gather",
  "hot-blooded":"Hot Blooded",
  "huge-power":"Huge Power",
  "hunger-switch":"Hunger Switch",
  "hustle":"Hustle",
  "hydration":"Hydration",
  "hyper-cutter":"Hyper Cutter",
  "ice-body":"Ice Body",
  "ice-face":"Ice Face",
  "ice-scales":"Ice Scales",
  "illuminate":"Illuminate",
  "illusion":"Illusion",
  "immunity":"Immunity",
  "imposter":"Imposter",
  "infiltrator":"Infiltrator",
  "innards-out":"Innards Out",
  "inner-focus":"Inner Focus",
  "insomnia":"Insomnia",
  "instinct":"Instinct",
  "interference":"Interference",
  "intimidate":"Intimidate",
  "intrepid-sword":"Intrepid Sword",
  "iron-barbs":"Iron Barbs",
  "iron-fist":"Iron Fist",
  "jagged-edge":"Jagged Edge",
  "justified":"Justified",
  "keen-eye":"Keen Eye",
  "klutz":"Klutz",
  "last-bastion":"Last Bastion",
  "leaf-guard":"Leaf Guard",
  "levitate":"Levitate",
  "libero":"Libero",
  "life-force":"Life Force",
  "light-metal":"Light Metal",
  "lightning-rod":"Lightning Rod",
  "limber":"Limber",
  "liquid-ooze":"Liquid Ooze",
  "liquid-voice":"Liquid Voice",
  "long-reach":"Long Reach",
  "lullaby":"Lullaby",
  "lunchbox":"Lunchbox",
  "magic-bounce":"Magic Bounce",
  "magic-guard":"Magic Guard",
  "magician":"Magician",
  "magma-armor":"Magma Armor",
  "magnet-pull":"Magnet Pull",
  "marvel-scale":"Marvel Scale",
  "medic":"Medic",
  "mega-launcher":"Mega Launcher",
  "melee":"Melee",
  "merciless":"Merciless",
  "mimicry":"Mimicry",
  "minus":"Minus",
  "mirror-armor":"Mirror Armor",
  "misty-surge":"Misty Surge",
  "mold-breaker":"Mold Breaker",
  "mood-maker":"Mood Maker",
  "moody":"Moody",
  "motor-drive":"Motor Drive",
  "mountaineer":"Mountaineer",
  "moxie":"Moxie",
  "multiscale":"Multiscale",
  "multitype":"Multitype",
  "mummy":"Mummy",
  "natural-cure":"Natural Cure",
  "neuroforce":"Neuroforce",
  "neutralizing-gas":"Neutralizing Gas",
  "no-guard":"No Guard",
  "nomad":"Nomad",
  "normalize":"Normalize",
  "nurse":"Nurse",
  "oblivious":"Oblivious",
  "omnipotent":"Omnipotent",
  "overcoat":"Overcoat",
  "overgrow":"Overgrow",
  "own-tempo":"Own Tempo",
  "parental-bond":"Parental Bond",
  "parry":"Parry",
  "pastel-veil":"Pastel Veil",
  "perception":"Perception",
  "perish-body":"Perish Body",
  "pickpocket":"Pickpocket",
  "pickup":"Pickup",
  "pixilate":"Pixilate",
  "plus":"Plus",
  "poison-heal":"Poison Heal",
  "poison-point":"Poison Point",
  "poison-touch":"Poison Touch",
  "power-construct":"Power Construct",
  "power-nap":"Power Nap",
  "power-of-alchemy":"Power of Alchemy",
  "power-spot":"Power Spot",
  "prankster":"Prankster",
  "pressure":"Pressure",
  "pride":"Pride",
  "primordial-sea":"Primordial Sea",
  "prism-armor":"Prism Armor",
  "propeller-tail":"Propeller Tail",
  "protean":"Protean",
  "psychic-surge":"Psychic Surge",
  "punk-rock":"Punk Rock",
  "pure-power":"Pure Power",
  "queenly-majesty":"Queenly Majesty",
  "quick-draw":"Quick Draw",
  "quick-feet":"Quick Feet",
  "rain-dish":"Rain Dish",
  "rattled":"Rattled",
  "receiver":"Receiver",
  "reckless":"Reckless",
  "refrigerate":"Refrigerate",
  "regenerator":"Regenerator",
  "ripen":"Ripen",
  "rivalry":"Rivalry",
  "rks-system":"RKS System",
  "rock-head":"Rock Head",
  "rough-skin":"Rough Skin",
  "run-away":"Run Away",
  "run-up":"Run Up",
  "sand-force":"Sand Force",
  "sand-rush":"Sand Rush",
  "sand-spit":"Sand Spit",
  "sand-stream":"Sand Stream",
  "sand-veil":"Sand Veil",
  "sandpit":"Sandpit",
  "sap-sipper":"Sap Sipper",
  "schooling":"Schooling",
  "scrappy":"Scrappy",
  "screen-cleaner":"Screen Cleaner",
  "sequence":"Sequence",
  "serene-grace":"Serene Grace",
  "shackle":"Shackle",
  "shadow-dash":"Shadow Dash",
  "shadow-shield":"Shadow Shield",
  "shadow-tag":"Shadow Tag",
  "share":"Share",
  "shed-skin":"Shed Skin",
  "sheer-force":"Sheer Force",
  "shell-armor":"Shell Armor",
  "shield":"Shield",
  "shield-dust":"Shield Dust",
  "shields-down":"Shields Down",
  "simple":"Simple",
  "skater":"Skater",
  "skill-link":"Skill Link",
  "slow-start":"Slow Start",
  "slush-rush":"Slush Rush",
  "sniper":"Sniper",
  "snow-cloak":"Snow Cloak",
  "snow-warning":"Snow Warning",
  "solar-power":"Solar Power",
  "solid-rock":"Solid Rock",
  "soul-heart":"Soul-Heart",
  "soundproof":"Soundproof",
  "speed-boost":"Speed Boost",
  "spirit":"Spirit",
  "sponge":"Sponge",
  "sprint":"Sprint",
  "stakeout":"Stakeout",
  "stall":"Stall",
  "stalwart":"Stalwart",
  "stamina":"Stamina",
  "stance-change":"Stance Change",
  "static":"Static",
  "steadfast":"Steadfast",
  "stealth":"Stealth",
  "steam-engine":"Steam Engine",
  "steelworker":"Steelworker",
  "steely-spirit":"Steely Spirit",
  "stench":"Stench",
  "sticky-hold":"Sticky Hold",
  "storm-drain":"Storm Drain",
  "strong-jaw":"Strong Jaw",
  "sturdy":"Sturdy",
  "suction-cups":"Suction Cups",
  "super-luck":"Super Luck",
  "surge-surfer":"Surge Surfer",
  "swarm":"Swarm",
  "sweet-veil":"Sweet Veil",
  "swift-swim":"Swift Swim",
  "symbiosis":"Symbiosis",
  "synchronize":"Synchronize",
  "tangled-feet":"Tangled Feet",
  "tangling-hair":"Tangling Hair",
  "technician":"Technician",
  "telepathy":"Telepathy",
  "tenacity":"Tenacity",
  "teravolt":"Teravolt",
  "thick-fat":"Thick Fat",
  "thrust":"Thrust",
  "tinted-lens":"Tinted Lens",
  "torrent":"Torrent",
  "tough-claws":"Tough Claws",
  "toxic-boost":"Toxic Boost",
  "trace":"Trace",
  "transistor":"Transistor",
  "triage":"Triage",
  "truant":"Truant",
  "turboblaze":"Turboblaze",
  "unaware":"Unaware",
  "unburden":"Unburden",
  "unnerve":"Unnerve",
  "unseen-fist":"Unseen Fist",
  "vanguard":"Vanguard",
  "victory-star":"Victory Star",
  "vital-spirit":"Vital Spirit",
  "volt-absorb":"Volt Absorb",
  "wandering-spirit":"Wandering Spirit",
  "warm-blanket":"Warm Blanket",
  "water-absorb":"Water Absorb",
  "water-bubble":"Water Bubble",
  "water-compaction":"Water Compaction",
  "water-veil":"Water Veil",
  "wave-rider":"Wave Rider",
  "weak-armor":"Weak Armor",
  "white-smoke":"White Smoke",
  "wimp-out":"Wimp Out",
  "wonder-guard":"Wonder Guard",
  "wonder-skin":"Wonder Skin",
  "zen-mode":"Zen Mode"
};

const ITEM_FR_MANUAL = {
  "ability-capsule":"Pilule Talent",
  "ability-patch":"Patch Talent",
  "ability-urge":"Appel Talent",
  "abomasite":"Blizzarite",
  "abra-candy":"Bonbon Abra",
  "absolite":"Absolite",
  "absorb-bulb":"Bulbe",
  "acro-bike":"Vélo Cross",
  "adamant-mint":"Aromate Rigide",
  "adamant-orb":"Orbe Adamant",
  "adrenaline-orb":"Orbe Frousse",
  "adventure-rules":"ABC Aventure",
  "aerodactyl-candy":"Bonbon Ptéra",
  "aerodactylite":"Ptéraïte",
  "aggronite":"Galekingite",
  "aguav-berry":"Baie Gowav",
  "air-balloon":"Ballon",
  "air-mail":"Lettre Avion",
  "alakazite":"Alakazamite",
  "aloraichium-z--bag":"Aloraïzélite",
  "aloraichium-z--held":"Aloraïzélite",
  "altarianite":"Altarite",
  "amaze-mulch":"Fertiprodige",
  "ampharosite":"Pharampite",
  "amulet-coin":"Pièce Rune",
  "antidote":"Antidote",
  "apicot-berry":"Baie Abriko",
  "apricorn-box":"Boîte Noigrume",
  "aqua-suit":"Scaphandre Aqua",
  "armor-fossil":"Fossile Armure",
  "armor-pass":"Pass Isolarmure",
  "armorite-ore":"Armurium",
  "articuno-candy":"Bonbon Artikodin",
  "aspear-berry":"Baie Willia",
  "assault-vest":"Veste de Combat",
  "audinite":"Nanméouïte",
  "auroraticket":"Ticketaurora",
  "autograph":"Dédicace de Bob",
  "awakening":"Réveil",
  "azure-flute":"Flûte Azur",
  "babiri-berry":"Baie Babiri",
  "bachs-food-tin":"Conserve de Bach",
  "balm-mushroom":"Champi Suave",
  "band-autograph":"Dédicace",
  "banettite":"Branettite",
  "basement-key":"Clé Sous-Sol",
  "basement-key--goldenrod":"Clé Sous-Sol",
  "basement-key--new-mauville":"Clé Sous-Sol",
  "battle-pocket":"Poche de Combat",
  "beach-glass":"Galet de Verre",
  "bead-mail":"Lettre Bulle",
  "beast-ball":"Ultra Ball",
  "beedrillite":"Dardargnite",
  "bellsprout-candy":"Bonbon Chétiflor",
  "belue-berry":"Baie Myrte",
  "berry-juice":"Jus de Baie",
  "berry-pots":"Plante-Baies",
  "berry-pouch":"Sac à Baies",
  "berry-sweet":"Baie en Sucre",
  "bicycle":"Bicyclette",
  "big-malasada":"Malasada Maxi",
  "big-mushroom":"Gros Champi",
  "big-nugget":"Maxi Pépite",
  "big-pearl":"Grande Perle",
  "big-root":"Grosse Racine",
  "bike--green":"Bicyclette",
  "bike--yellow":"Bicyclette",
  "bike-voucher":"Bon Commande",
  "binding-band":"Bande Étreinte",
  "black-apricorn":"Noigrume Noir",
  "black-belt":"Ceinture Noire",
  "black-flute":"Flûte Noire",
  "black-glasses":"Lunettes Noires",
  "black-mane-hair":"Crins Sombres",
  "black-sludge":"Boue Noire",
  "blastoisinite":"Tortankite",
  "blazikenite":"Braségalite",
  "bloom-mail":"Lett. Pétale",
  "blue-apricorn":"Noigrume Bleu",
  "blue-card":"Carte Bleue",
  "blue-flute":"Flûte Bleue",
  "blue-orb":"Gemme Bleue",
  "blue-petal":"Pétale Bleu",
  "blue-scarf":"Foulard Bleu",
  "blue-shard":"Tesson Bleu",
  "bluk-berry":"Baie Remu",
  "blunder-policy":"Assurance Échec",
  "bobs-food-tin":"Conserve de Bob",
  "boiled-egg":"Œuf Dur",
  "bold-mint":"Aromate Assuré",
  "boost-mulch":"Fertibérance",
  "bottle-cap":"Capsule d’Argent",
  "brave-mint":"Aromate Brave",
  "bread":"Pain de Mie",
  "brick-mail":"Lettre Brik",
  "bridge-mail-d":"Lettre Pont Y",
  "bridge-mail-m":"Lettre Pont I",
  "bridge-mail-s":"Lettre Pont S",
  "bridge-mail-t":"Lettre Pont F",
  "bridge-mail-v":"Lettre Pont H",
  "bright-powder":"Poudre Claire",
  "brittle-bones":"Os à Moelle",
  "bubble-mail":"Lettre Mer",
  "bug-gem":"Joyau Insecte",
  "bug-memory":"ROM Insecte",
  "buginium-z--bag":"Insectozélite",
  "buginium-z--held":"Insectozélite",
  "bulbasaur-candy":"Bonbon Bulbizarre",
  "burn-drive":"Module Pyro",
  "burn-heal":"Anti-Brûle",
  "calcium":"Calcium",
  "calm-mint":"Aromate Calme",
  "cameruptite":"Caméruptite",
  "camping-gear":"Kit de Camping",
  "candy-jar":"Bonbonnière",
  "carbos":"Carbone",
  "card-key":"Carte Magnétique",
  "card-key--letsgo":"Carte Magnétique",
  "careful-mint":"Aromate Prudent",
  "carrot-seeds":"Graines Carotte",
  "casteliacone":"Glace Volute",
  "catching-charm":"Charme Stabilité",
  "catching-pocket":"Poche de Capture",
  "caterpie-candy":"Bonbon Chenipan",
  "cell-battery":"Pile",
  "chalky-stone":"Craie",
  "chansey-candy":"Bonbon Leveinard",
  "charcoal":"Charbon",
  "charizardite-x":"Dracaufite X",
  "charizardite-y":"Dracaufite Y",
  "charmander-candy":"Bonbon Salamèche",
  "charti-berry":"Baie Charti",
  "cheri-berry":"Baie Ceriz",
  "cherish-ball":"Mémoire Ball",
  "chesto-berry":"Baie Maron",
  "chilan-berry":"Baie Zalis",
  "chill-drive":"Module Cryo",
  "chipped-pot":"Théière Ébréchée",
  "choice-band":"Bandeau Choix",
  "choice-scarf":"Mouchoir Choix",
  "choice-specs":"Lunettes Choix",
  "chople-berry":"Baie Pomroz",
  "claw-fossil":"Fossile Griffe",
  "cleanse-tag":"Rune Purifiante",
  "clear-bell":"Glas Transparent",
  "clefairy-candy":"Bonbon Mélofée",
  "clever-wing":"Plume Mental",
  "clothing-trunk":"Malle à Costumes",
  "clover-sweet":"Trèfle en Sucre",
  "coba-berry":"Baie Cobaba",
  "coconut-milk":"Lait de Coco",
  "coin-case":"Boîte Jetons",
  "colbur-berry":"Baie Lampou",
  "colress-machine":"Nikodule",
  "comet-shard":"Morceau Comète",
  "common-stone":"Pierre Ordinaire",
  "contest-costume--dress":"Robe Live",
  "contest-costume--jacket":"Costume Live",
  "contest-pass":"Passe Concours",
  "cornn-berry":"Baie Siam",
  "coupon-1":"Bon 1",
  "coupon-2":"Bon 2",
  "coupon-3":"Bon 3",
  "courage-candy":"Bonbon Mental S",
  "courage-candy-l":"Bonbon Mental M",
  "courage-candy-xl":"Bonbon Mental L",
  "cover-fossil":"Fossile Plaque",
  "cracked-pot":"Théière Fêlée",
  "crown-pass":"Pass Couronneige",
  "cubone-candy":"Bonbon Osselait",
  "custap-berry":"Baie Chérim",
  "damp-mulch":"Fertihumide",
  "damp-rock":"Roche Humide",
  "dark-gem":"Joyau Ténèbres",
  "dark-memory":"ROM Ténèbres",
  "dark-stone":"Galet Noir",
  "darkinium-z--bag":"Ténébrozélite",
  "darkinium-z--held":"Ténébrozélite",
  "data-card-01":"Carte Mémo01",
  "data-card-02":"Carte Mémo02",
  "data-card-03":"Carte Mémo03",
  "data-card-04":"Carte Mémo04",
  "data-card-05":"Carte Mémo05",
  "data-card-06":"Carte Mémo06",
  "data-card-07":"Carte Mémo07",
  "data-card-08":"Carte Mémo08",
  "data-card-09":"Carte Mémo09",
  "data-card-10":"Carte Mémo10",
  "data-card-11":"Carte Mémo11",
  "data-card-12":"Carte Mémo12",
  "data-card-13":"Carte Mémo13",
  "data-card-14":"Carte Mémo14",
  "data-card-15":"Carte Mémo15",
  "data-card-16":"Carte Mémo16",
  "data-card-17":"Carte Mémo17",
  "data-card-18":"Carte Mémo18",
  "data-card-19":"Carte Mémo19",
  "data-card-20":"Carte Mémo20",
  "data-card-21":"Carte Mémo21",
  "data-card-22":"Carte Mémo22",
  "data-card-23":"Carte Mémo23",
  "data-card-24":"Carte Mémo24",
  "data-card-25":"Carte Mémo25",
  "data-card-26":"Carte Mémo26",
  "data-card-27":"Carte Mémo27",
  "dawn-stone":"Pierre Aube",
  "decidium-z--bag":"Archézélite",
  "decidium-z--held":"Archézélite",
  "deep-sea-scale":"Écaille Océan",
  "deep-sea-tooth":"Dent Océan",
  "destiny-knot":"Nœud Destin",
  "devon-goods":"Pack Devon",
  "devon-parts":"Pack Devon",
  "devon-scope":"Devon Scope",
  "devon-scuba-gear":"Plongeur Devon",
  "diancite":"Diancite",
  "diglett-candy":"Bonbon Taupiqueur",
  "dire-hit":"Muscle +",
  "dire-hit-2":"Muscle 2",
  "dire-hit-3":"Muscle 3",
  "discount-coupon":"Bon Réduction",
  "ditto-candy":"Bonbon Métamorph",
  "dive-ball":"Scuba Ball",
  "dna-splicers":"Pointeau ADN",
  "dna-splicers--merge":"Pointeau ADN",
  "dna-splicers--split":"Pointeau ADN",
  "doduo-candy":"Bonbon Doduo",
  "dome-fossil":"Fossile Dôme",
  "douse-drive":"Module Aqua",
  "dowsing-machine":"Cherch’Objet",
  "draco-plate":"Plaque Draco",
  "dragon-fang":"Croc Dragon",
  "dragon-gem":"Joyau Dragon",
  "dragon-memory":"ROM Dragon",
  "dragon-scale":"Écaille Draco",
  "dragon-skull":"Crâne Dragon",
  "dragonium-z--bag":"Dracozélite",
  "dragonium-z--held":"Dracozélite",
  "dratini-candy":"Bonbon Minidraco",
  "dread-plate":"Plaque Ombre",
  "dream-ball":"Rêve Ball",
  "dream-mail":"Lettre Songe",
  "dropped-item":"Objet Trouvé",
  "dropped-item--red":"Objet Trouvé",
  "dropped-item--yellow":"Objet Trouvé",
  "drowzee-candy":"Bonbon Soporifik",
  "dubious-disc":"CD Douteux",
  "durin-berry":"Baie Durin",
  "dusk-ball":"Sombre Ball",
  "dusk-stone":"Pierre Nuit",
  "dynamax-band":"Poignet Dynamax",
  "dynamax-candy":"Bonbon Dynamax",
  "dynamax-crystal-and15":"★And15",
  "dynamax-crystal-and337":"★And337",
  "dynamax-crystal-and390":"★And390",
  "dynamax-crystal-and458":"★And458",
  "dynamax-crystal-and603":"★And603",
  "dynamax-crystal-aql7235":"★Aql7235",
  "dynamax-crystal-aql7525":"★Aql7525",
  "dynamax-crystal-aql7557":"★Aql7557",
  "dynamax-crystal-aql7595":"★Aql7595",
  "dynamax-crystal-aql7602":"★Aql7602",
  "dynamax-crystal-aqr7950":"★Aqr7950",
  "dynamax-crystal-aqr8232":"★Aqr8232",
  "dynamax-crystal-aqr8264":"★Aqr8264",
  "dynamax-crystal-aqr8414":"★Aqr8414",
  "dynamax-crystal-aqr8499":"★Aqr8499",
  "dynamax-crystal-aqr8518":"★Aqr8518",
  "dynamax-crystal-aqr8610":"★Aqr8610",
  "dynamax-crystal-aqr8709":"★Aqr8709",
  "dynamax-crystal-ara6585":"★Ara6585",
  "dynamax-crystal-ari546":"★Ari546",
  "dynamax-crystal-ari553":"★Ari553",
  "dynamax-crystal-ari617":"★Ari617",
  "dynamax-crystal-ari951":"★Ari951",
  "dynamax-crystal-aur1577":"★Aur1577",
  "dynamax-crystal-aur1605":"★Aur1605",
  "dynamax-crystal-aur1612":"★Aur1612",
  "dynamax-crystal-aur1641":"★Aur1641",
  "dynamax-crystal-aur1708":"★Aur1708",
  "dynamax-crystal-aur2088":"★Aur2088",
  "dynamax-crystal-aur2095":"★Aur2095",
  "dynamax-crystal-boo5235":"★Boo5235",
  "dynamax-crystal-boo5340":"★Boo5340",
  "dynamax-crystal-boo5351":"★Boo5351",
  "dynamax-crystal-boo5435":"★Boo5435",
  "dynamax-crystal-boo5506":"★Boo5506",
  "dynamax-crystal-boo5602":"★Boo5602",
  "dynamax-crystal-boo5733":"★Boo5733",
  "dynamax-crystal-cap7754":"★Cap7754",
  "dynamax-crystal-cap7773":"★Cap7773",
  "dynamax-crystal-cap7776":"★Cap7776",
  "dynamax-crystal-cap8278":"★Cap8278",
  "dynamax-crystal-cap8322":"★Cap8322",
  "dynamax-crystal-car2326":"★Car2326",
  "dynamax-crystal-car3307":"★Car3307",
  "dynamax-crystal-car3685":"★Car3685",
  "dynamax-crystal-car3699":"★Car3699",
  "dynamax-crystal-cas153":"★Cas153",
  "dynamax-crystal-cas168":"★Cas168",
  "dynamax-crystal-cas21":"★Cas21",
  "dynamax-crystal-cas219":"★Cas219",
  "dynamax-crystal-cas265":"★Cas265",
  "dynamax-crystal-cas403":"★Cas403",
  "dynamax-crystal-cas542":"★Cas542",
  "dynamax-crystal-cen5267":"★Cen5267",
  "dynamax-crystal-cen5288":"★Cen5288",
  "dynamax-crystal-cen5459":"★Cen5459",
  "dynamax-crystal-cen5460":"★Cen5460",
  "dynamax-crystal-cen551":"★Cen551",
  "dynamax-crystal-cep8162":"★Cep8162",
  "dynamax-crystal-cep8238":"★Cep8238",
  "dynamax-crystal-cep8417":"★Cep8417",
  "dynamax-crystal-cep8974":"★Cep8974",
  "dynamax-crystal-cet188":"★Cet188",
  "dynamax-crystal-cet539":"★Cet539",
  "dynamax-crystal-cet681":"★Cet681",
  "dynamax-crystal-cet804":"★Cet804",
  "dynamax-crystal-cet911":"★Cet911",
  "dynamax-crystal-cma2282":"★CMa2282",
  "dynamax-crystal-cma2294":"★CMa2294",
  "dynamax-crystal-cma2491":"★CMa2491",
  "dynamax-crystal-cma2618":"★CMa2618",
  "dynamax-crystal-cma2646":"★CMa2646",
  "dynamax-crystal-cma2657":"★CMa2657",
  "dynamax-crystal-cma2693":"★CMa2693",
  "dynamax-crystal-cma2827":"★CMa2827",
  "dynamax-crystal-cmi2845":"★CMi2845",
  "dynamax-crystal-cmi2943":"★CMi2943",
  "dynamax-crystal-cnc3208":"★Cnc3208",
  "dynamax-crystal-cnc3249":"★Cnc3249",
  "dynamax-crystal-cnc3268":"★Cnc3268",
  "dynamax-crystal-cnc3429":"★Cnc3429",
  "dynamax-crystal-cnc3449":"★Cnc3449",
  "dynamax-crystal-cnc3461":"★Cnc3461",
  "dynamax-crystal-cnc3572":"★Cnc3572",
  "dynamax-crystal-cnc3627":"★Cnc3627",
  "dynamax-crystal-col1956":"★Col1956",
  "dynamax-crystal-col2040":"★Col2040",
  "dynamax-crystal-col2177":"★Col2177",
  "dynamax-crystal-com4968":"★Com4968",
  "dynamax-crystal-crt4287":"★Crt4287",
  "dynamax-crystal-cru4656":"★Cru4656",
  "dynamax-crystal-cru4700":"★Cru4700",
  "dynamax-crystal-cru4730":"★Cru4730",
  "dynamax-crystal-cru4763":"★Cru4763",
  "dynamax-crystal-cru4853":"★Cru4853",
  "dynamax-crystal-crv4623":"★Crv4623",
  "dynamax-crystal-crv4662":"★Crv4662",
  "dynamax-crystal-crv4757":"★Crv4757",
  "dynamax-crystal-crv4786":"★Crv4786",
  "dynamax-crystal-cvn4785":"★CVn4785",
  "dynamax-crystal-cvn4846":"★CVn4846",
  "dynamax-crystal-cvn4915":"★CVn4915",
  "dynamax-crystal-cyg7417":"★Cyg7417",
  "dynamax-crystal-cyg7528":"★Cyg7528",
  "dynamax-crystal-cyg7796":"★Cyg7796",
  "dynamax-crystal-cyg7924":"★Cyg7924",
  "dynamax-crystal-cyg7949":"★Cyg7949",
  "dynamax-crystal-cyg8301":"★Cyg8301",
  "dynamax-crystal-del7852":"★Del7852",
  "dynamax-crystal-del7882":"★Del7882",
  "dynamax-crystal-del7906":"★Del7906",
  "dynamax-crystal-dra4434":"★Dra4434",
  "dynamax-crystal-dra5291":"★Dra5291",
  "dynamax-crystal-dra5744":"★Dra5744",
  "dynamax-crystal-dra6132":"★Dra6132",
  "dynamax-crystal-dra6370":"★Dra6370",
  "dynamax-crystal-dra6396":"★Dra6396",
  "dynamax-crystal-dra6536":"★Dra6536",
  "dynamax-crystal-dra6636":"★Dra6636",
  "dynamax-crystal-dra6688":"★Dra6688",
  "dynamax-crystal-dra6705":"★Dra6705",
  "dynamax-crystal-dra7310":"★Dra7310",
  "dynamax-crystal-dra7462":"★Dra7462",
  "dynamax-crystal-equ8131":"★Equ8131",
  "dynamax-crystal-eri1084":"★Eri1084",
  "dynamax-crystal-eri1231":"★Eri1231",
  "dynamax-crystal-eri1298":"★Eri1298",
  "dynamax-crystal-eri1325":"★Eri1325",
  "dynamax-crystal-eri1393":"★Eri1393",
  "dynamax-crystal-eri1464":"★Eri1464",
  "dynamax-crystal-eri1666":"★Eri1666",
  "dynamax-crystal-eri472":"★Eri472",
  "dynamax-crystal-eri850":"★Eri850",
  "dynamax-crystal-eri874":"★Eri874",
  "dynamax-crystal-eri897":"★Eri897",
  "dynamax-crystal-eri984":"★Eri984",
  "dynamax-crystal-gem2216":"★Gem2216",
  "dynamax-crystal-gem2286":"★Gem2286",
  "dynamax-crystal-gem2421":"★Gem2421",
  "dynamax-crystal-gem2473":"★Gem2473",
  "dynamax-crystal-gem2484":"★Gem2484",
  "dynamax-crystal-gem2650":"★Gem2650",
  "dynamax-crystal-gem2777":"★Gem2777",
  "dynamax-crystal-gem2891":"★Gem2891",
  "dynamax-crystal-gem2930":"★Gem2930",
  "dynamax-crystal-gem2990":"★Gem2990",
  "dynamax-crystal-gru8353":"★Gru8353",
  "dynamax-crystal-gru8425":"★Gru8425",
  "dynamax-crystal-gru8636":"★Gru8636",
  "dynamax-crystal-her6008":"★Her6008",
  "dynamax-crystal-her6117":"★Her6117",
  "dynamax-crystal-her6148":"★Her6148",
  "dynamax-crystal-her6406":"★Her6406",
  "dynamax-crystal-her6410":"★Her6410",
  "dynamax-crystal-her6526":"★Her6526",
  "dynamax-crystal-hya3418":"★Hya3418",
  "dynamax-crystal-hya3482":"★Hya3482",
  "dynamax-crystal-hya3748":"★Hya3748",
  "dynamax-crystal-hya3845":"★Hya3845",
  "dynamax-crystal-hya3903":"★Hya3903",
  "dynamax-crystal-leo3773":"★Leo3773",
  "dynamax-crystal-leo3852":"★Leo3852",
  "dynamax-crystal-leo3905":"★Leo3905",
  "dynamax-crystal-leo3982":"★Leo3982",
  "dynamax-crystal-leo4031":"★Leo4031",
  "dynamax-crystal-leo4057":"★Leo4057",
  "dynamax-crystal-leo4357":"★Leo4357",
  "dynamax-crystal-leo4359":"★Leo4359",
  "dynamax-crystal-leo4534":"★Leo4534",
  "dynamax-crystal-lep1829":"★Lep1829",
  "dynamax-crystal-lep1865":"★Lep1865",
  "dynamax-crystal-lib5531":"★Lib5531",
  "dynamax-crystal-lib5603":"★Lib5603",
  "dynamax-crystal-lib5685":"★Lib5685",
  "dynamax-crystal-lib5787":"★Lib5787",
  "dynamax-crystal-lyr7001":"★Lyr7001",
  "dynamax-crystal-lyr7106":"★Lyr7106",
  "dynamax-crystal-lyr7178":"★Lyr7178",
  "dynamax-crystal-lyr7298":"★Lyr7298",
  "dynamax-crystal-oct7228":"★Oct7228",
  "dynamax-crystal-oph6056":"★Oph6056",
  "dynamax-crystal-oph6075":"★Oph6075",
  "dynamax-crystal-oph6149":"★Oph6149",
  "dynamax-crystal-oph6378":"★Oph6378",
  "dynamax-crystal-oph6556":"★Oph6556",
  "dynamax-crystal-oph6603":"★Oph6603",
  "dynamax-crystal-ori1543":"★Ori1543",
  "dynamax-crystal-ori1713":"★Ori1713",
  "dynamax-crystal-ori1790":"★Ori1790",
  "dynamax-crystal-ori1852":"★Ori1852",
  "dynamax-crystal-ori1879":"★Ori1879",
  "dynamax-crystal-ori1899":"★Ori1899",
  "dynamax-crystal-ori1903":"★Ori1903",
  "dynamax-crystal-ori1948":"★Ori1948",
  "dynamax-crystal-ori2004":"★Ori2004",
  "dynamax-crystal-ori2061":"★Ori2061",
  "dynamax-crystal-pav7790":"★Pav7790",
  "dynamax-crystal-peg39":"★Peg39",
  "dynamax-crystal-peg8308":"★Peg8308",
  "dynamax-crystal-peg8450":"★Peg8450",
  "dynamax-crystal-peg8634":"★Peg8634",
  "dynamax-crystal-peg8650":"★Peg8650",
  "dynamax-crystal-peg8684":"★Peg8684",
  "dynamax-crystal-peg8775":"★Peg8775",
  "dynamax-crystal-peg8781":"★Peg8781",
  "dynamax-crystal-peg8880":"★Peg8880",
  "dynamax-crystal-peg8905":"★Peg8905",
  "dynamax-crystal-per1017":"★Per1017",
  "dynamax-crystal-per1131":"★Per1131",
  "dynamax-crystal-per1228":"★Per1228",
  "dynamax-crystal-per834":"★Per834",
  "dynamax-crystal-per936":"★Per936",
  "dynamax-crystal-per941":"★Per941",
  "dynamax-crystal-phe338":"★Phe338",
  "dynamax-crystal-phe99":"★Phe99",
  "dynamax-crystal-psa8728":"★PsA8728",
  "dynamax-crystal-psc361":"★Psc361",
  "dynamax-crystal-psc437":"★Psc437",
  "dynamax-crystal-psc510":"★Psc510",
  "dynamax-crystal-psc596":"★Psc596",
  "dynamax-crystal-psc8773":"★Psc8773",
  "dynamax-crystal-pup3045":"★Pup3045",
  "dynamax-crystal-pup3165":"★Pup3165",
  "dynamax-crystal-pup3185":"★Pup3185",
  "dynamax-crystal-sco5928":"★Sco5928",
  "dynamax-crystal-sco5944":"★Sco5944",
  "dynamax-crystal-sco5953":"★Sco5953",
  "dynamax-crystal-sco5984":"★Sco5984",
  "dynamax-crystal-sco6027":"★Sco6027",
  "dynamax-crystal-sco6084":"★Sco6084",
  "dynamax-crystal-sco6134":"★Sco6134",
  "dynamax-crystal-sco6165":"★Sco6165",
  "dynamax-crystal-sco6241":"★Sco6241",
  "dynamax-crystal-sco6247":"★Sco6247",
  "dynamax-crystal-sco6252":"★Sco6252",
  "dynamax-crystal-sco6508":"★Sco6508",
  "dynamax-crystal-sco6527":"★Sco6527",
  "dynamax-crystal-sco6553":"★Sco6553",
  "dynamax-crystal-sco6630":"★Sco6630",
  "dynamax-crystal-ser5854":"★Ser5854",
  "dynamax-crystal-ser5879":"★Ser5879",
  "dynamax-crystal-ser7141":"★Ser7141",
  "dynamax-crystal-sge7479":"★Sge7479",
  "dynamax-crystal-sgr6746":"★Sgr6746",
  "dynamax-crystal-sgr6812":"★Sgr6812",
  "dynamax-crystal-sgr6859":"★Sgr6859",
  "dynamax-crystal-sgr6879":"★Sgr6879",
  "dynamax-crystal-sgr6913":"★Sgr6913",
  "dynamax-crystal-sgr7116":"★Sgr7116",
  "dynamax-crystal-sgr7121":"★Sgr7121",
  "dynamax-crystal-sgr7194":"★Sgr7194",
  "dynamax-crystal-sgr7264":"★Sgr7264",
  "dynamax-crystal-sgr7337":"★Sgr7337",
  "dynamax-crystal-sgr7343":"★Sgr7343",
  "dynamax-crystal-sgr7348":"★Sgr7348",
  "dynamax-crystal-sgr7597":"★Sgr7597",
  "dynamax-crystal-tau1165":"★Tau1165",
  "dynamax-crystal-tau1346":"★Tau1346",
  "dynamax-crystal-tau1373":"★Tau1373",
  "dynamax-crystal-tau1409":"★Tau1409",
  "dynamax-crystal-tau1412":"★Tau1412",
  "dynamax-crystal-tau1457":"★Tau1457",
  "dynamax-crystal-tau1791":"★Tau1791",
  "dynamax-crystal-tau1910":"★Tau1910",
  "dynamax-crystal-tra6217":"★TrA6217",
  "dynamax-crystal-tri544":"★Tri544",
  "dynamax-crystal-uma3323":"★UMa3323",
  "dynamax-crystal-uma3569":"★UMa3569",
  "dynamax-crystal-uma3594":"★UMa3594",
  "dynamax-crystal-uma4033":"★UMa4033",
  "dynamax-crystal-uma4069":"★UMa4069",
  "dynamax-crystal-uma4295":"★UMa4295",
  "dynamax-crystal-uma4301":"★UMa4301",
  "dynamax-crystal-uma4375":"★UMa4375",
  "dynamax-crystal-uma4377":"★UMa4377",
  "dynamax-crystal-uma4518":"★UMa4518",
  "dynamax-crystal-uma4554":"★UMa4554",
  "dynamax-crystal-uma4660":"★UMa4660",
  "dynamax-crystal-uma4905":"★UMa4905",
  "dynamax-crystal-uma5054":"★UMa5054",
  "dynamax-crystal-uma5191":"★UMa5191",
  "dynamax-crystal-umi424":"★UMi424",
  "dynamax-crystal-umi5563":"★UMi5563",
  "dynamax-crystal-umi5735":"★UMi5735",
  "dynamax-crystal-umi6789":"★UMi6789",
  "dynamax-crystal-vel3485":"★Vel3485",
  "dynamax-crystal-vel3634":"★Vel3634",
  "dynamax-crystal-vel3734":"★Vel3734",
  "dynamax-crystal-vir4540":"★Vir4540",
  "dynamax-crystal-vir4689":"★Vir4689",
  "dynamax-crystal-vir4825":"★Vir4825",
  "dynamax-crystal-vir4910":"★Vir4910",
  "dynamax-crystal-vir4932":"★Vir4932",
  "dynamax-crystal-vir5056":"★Vir5056",
  "dynamax-crystal-vir5107":"★Vir5107",
  "dynamax-crystal-vir5315":"★Vir5315",
  "dynamax-crystal-vir5338":"★Vir5338",
  "dynamax-crystal-vir5359":"★Vir5359",
  "dynamax-crystal-vir5409":"★Vir5409",
  "dynamax-crystal-vul7405":"★Vul7405",
  "dynite-ore":"Dynamaxium",
  "earth-plate":"Plaque Terre",
  "eevee-candy":"Bonbon Évoli",
  "eevium-z--bag":"Évolizélite",
  "eevium-z--held":"Évolizélite",
  "eject-button":"Bouton Fuite",
  "eject-pack":"Sac Fuite",
  "ekans-candy":"Bonbon Abo",
  "electabuzz-candy":"Bonbon Élektek",
  "electirizer":"Électriseur",
  "electric-gem":"Joyau Électrik",
  "electric-memory":"ROM Électrik",
  "electric-seed":"Graine Électrik",
  "electrium-z--bag":"Voltazélite",
  "electrium-z--held":"Voltazélite",
  "elevator-key":"Clé Ascenseur",
  "elixir":"Élixir",
  "endorsement":"Recommandation",
  "energy-powder":"Poudrénergie",
  "energy-root":"Racinénergie",
  "enigma-berry":"Baie Enigma",
  "enigma-stone":"Mystécristal",
  "enigmatic-card":"Message Mystère",
  "eon-flute":"Flûte Éon",
  "eon-ticket":"Passe Éon",
  "escape-rope":"Corde Sortie",
  "ether":"Huile",
  "everstone":"Pierre Stase",
  "eviolite":"Évoluroc",
  "exeggcute-candy":"Bonbon Noeunoeuf",
  "exp-candy-l":"Bonbon Exp. L",
  "exp-candy-m":"Bonbon Exp. M",
  "exp-candy-s":"Bonbon Exp. S",
  "exp-candy-xl":"Bonbon Exp. XL",
  "exp-candy-xs":"Bonbon Exp. XS",
  "exp-charm":"Charme Exp",
  "exp-share":"Multi Exp",
  "expert-belt":"Ceinture Pro",
  "explorer-kit":"Explorakit",
  "fab-mail":"Lettre Cool",
  "fairium-z--bag":"Nymphézélite",
  "fairium-z--held":"Nymphézélite",
  "fairy-gem":"Joyau Fée",
  "fairy-memory":"ROM Fée",
  "fame-checker":"Memorydex",
  "fancy-apple":"Pomme Juteuse",
  "farfetchd-candy":"Bonbon Canarticho",
  "fashion-case":"Coffret Mode",
  "fast-ball":"Speed Ball",
  "favored-mail":"Lettre Fan",
  "festival-ticket":"Festicket",
  "fighting-gem":"Joyau Combat",
  "fighting-memory":"ROM Combat",
  "fightinium-z--bag":"Combazélite",
  "fightinium-z--held":"Combazélite",
  "figy-berry":"Baie Figuy",
  "fire-gem":"Joyau Feu",
  "fire-memory":"ROM Feu",
  "fire-stone":"Pierre Feu",
  "firium-z--bag":"Pyrozélite",
  "firium-z--held":"Pyrozélite",
  "fishing-rod":"Canne à Pêche",
  "fishing-rod--galar":"Canne à Pêche",
  "fist-plate":"Plaque Poing",
  "flame-mail":"Lettre Feu",
  "flame-orb":"Orbe Flamme",
  "flame-plate":"Plaque Flamme",
  "float-stone":"Pierrallégée",
  "flower-sweet":"Fleur en Sucre",
  "fluffy-tail":"Queue Skitty",
  "flying-gem":"Joyau Vol",
  "flying-memory":"ROM Vol",
  "flyinium-z--bag":"Aérozélite",
  "flyinium-z--held":"Aérozélite",
  "focus-band":"Bandeau",
  "focus-sash":"Ceinture Force",
  "forage-bag":"Sac Ingrédients",
  "fossilized-bird":"Fossile Oiseau",
  "fossilized-dino":"Fossile Aileron",
  "fossilized-drake":"Fossile Dragon",
  "fossilized-fish":"Fossile Poisson",
  "fresh-cream":"Crème Fraîche",
  "fresh-water":"Eau Fraîche",
  "fried-food":"Fritures",
  "friend-ball":"Copain Ball",
  "fruit-bunch":"Fruits",
  "full-heal":"Total Soin",
  "full-incense":"Encens Plein",
  "full-restore":"Guérison",
  "galactic-key":"Clé Galaxie",
  "galarica-cuff":"Bracelet Galanoa",
  "galarica-twig":"Branche Galanoa",
  "galarica-wreath":"Couronne Galanoa",
  "galladite":"Gallamite",
  "ganlon-berry":"Baie Lingan",
  "garchompite":"Carchacrokite",
  "gardevoirite":"Gardevoirite",
  "gastly-candy":"Bonbon Fantominus",
  "gb-sounds":"Lecteur GB",
  "gengarite":"Ectoplasmite",
  "genius-wing":"Plume Esprit",
  "gentle-mint":"Aromate Gentil",
  "geodude-candy":"Bonbon Racaillou",
  "ghost-gem":"Joyau Spectre",
  "ghost-memory":"ROM Spectre",
  "ghostium-z--bag":"Spectrozélite",
  "ghostium-z--held":"Spectrozélite",
  "gigantamix":"Poudre Gigamax",
  "glalitite":"Oniglalite",
  "glitter-mail":"Lettre Brill",
  "go-goggles":"Lunettes Sable",
  "gold-bottle-cap":"Capsule d’Or",
  "gold-leaf":"Feuille Dorée",
  "gold-teeth":"Dentier en Or",
  "goldeen-candy":"Bonbon Poissirène",
  "golden-nanab-berry":"Baie Nanab dorée",
  "golden-pinap-berry":"Baie Nanana dorée",
  "golden-razz-berry":"Baie Framby dorée",
  "good-rod":"Super Canne",
  "gooey-mulch":"Fertiglu",
  "gracidea":"Gracidée",
  "gram-1":"Courrier 1",
  "gram-2":"Courrier 2",
  "gram-3":"Courrier 3",
  "grass-gem":"Joyau Plante",
  "grass-mail":"Lettre Herbe",
  "grass-memory":"ROM Plante",
  "grassium-z--bag":"Florazélite",
  "grassium-z--held":"Florazélite",
  "grassy-seed":"Graine Herbe",
  "great-ball":"Super Ball",
  "green-apricorn":"Noigrume Vert",
  "green-petal":"Pétale Vert",
  "green-scarf":"Foulard Vert",
  "green-shard":"Tesson Vert",
  "greet-mail":"Lettre Salut",
  "grepa-berry":"Baie Résin",
  "grimer-candy":"Bonbon Tadmorv",
  "grip-claw":"Accro Griffe",
  "griseous-orb":"Orbe Platiné",
  "ground-gem":"Joyau Sol",
  "ground-memory":"ROM Sol",
  "groundium-z--bag":"Terrazélite",
  "groundium-z--held":"Terrazélite",
  "growlithe-candy":"Bonbon Caninos",
  "growth-mulch":"Fertipousse",
  "grubby-hanky":"Mouchoir Sale",
  "guard-spec":"Garde-Stats",
  "gyaradosite":"Léviatorite",
  "haban-berry":"Baie Fraigo",
  "harbor-mail":"Lettre Port",
  "hard-stone":"Pierre Dure",
  "hasty-mint":"Aromate Pressé",
  "heal-ball":"Soin Ball",
  "heal-powder":"Poudre Soin",
  "health-candy":"Bonbon Santé S",
  "health-candy-l":"Bonbon Santé M",
  "health-candy-xl":"Bonbon Santé L",
  "health-wing":"Plume Santé",
  "heart-mail":"Lettre Coeur",
  "heart-scale":"Écaille Cœur",
  "heat-rock":"Roche Chaude",
  "heavy-ball":"Masse Ball",
  "heavy-duty-boots":"Grosses Bottes",
  "helix-fossil":"Nautile",
  "heracronite":"Scarhinoïte",
  "hi-tech-earbuds":"Bouchons Audio",
  "hitmonchan-candy":"Bonbon Tygnon",
  "hitmonlee-candy":"Bonbon Kicklee",
  "hm01":"CS01",
  "hm02":"CS02",
  "hm03":"CS03",
  "hm04":"CS04",
  "hm05":"CS05",
  "hm06":"CS06",
  "hm07":"CS07",
  "hm08":"CS08",
  "holo-caster":"Holokit",
  "holo-caster--green":"Holokit",
  "holo-caster--red":"Holokit",
  "hondew-berry":"Baie Lonme",
  "honey":"Miel",
  "honor-of-kalos":"Insigne de Kalos",
  "horsea-candy":"Bonbon Hypotrempe",
  "houndoominite":"Démolossite",
  "hp-up":"PV Plus",
  "hyper-potion":"Hyper Potion",
  "iapapa-berry":"Baie Papaya",
  "ice-gem":"Joyau Glace",
  "ice-heal":"Antigel",
  "ice-memory":"ROM Glace",
  "ice-stone":"Pierre Glace",
  "iceroot-carrot":"Carotte Gelée",
  "icicle-plate":"Plaque Glace",
  "icium-z--bag":"Cryozélite",
  "icium-z--held":"Cryozélite",
  "icy-rock":"Roche Glace",
  "ilimas-normalium-z":"Cristal Z Althéo",
  "impish-mint":"Aromate Malin",
  "incinium-z--bag":"Félinozélite",
  "incinium-z--held":"Félinozélite",
  "inquiry-mail":"Lettre Demande",
  "insect-plate":"Plaque Insecte",
  "instant-noodles":"Nouilles",
  "intriguing-stone":"Pierre Insolite",
  "iron":"Fer",
  "iron-ball":"Balle Fer",
  "iron-plate":"Plaque Fer",
  "item-drop":"Jette Objet",
  "item-urge":"Appel Objet",
  "jaboca-berry":"Baie Jaboca",
  "jade-orb":"Orbe Vert",
  "jaw-fossil":"Fossile Mâchoire",
  "jigglypuff-candy":"Bonbon Rondoudou",
  "jolly-mint":"Aromate Jovial",
  "journal":"Journal",
  "jynx-candy":"Bonbon Lippoutou",
  "kabuto-candy":"Bonbon Kabuto",
  "kangaskhan-candy":"Bonbon Kangourex",
  "kangaskhanite":"Kangourexite",
  "kasib-berry":"Baie Sédra",
  "kebia-berry":"Baie Kébia",
  "kee-berry":"Baie Éka",
  "kelpsy-berry":"Baie Alga",
  "key-stone":"Gemme Sésame",
  "key-to-room-1":"Clé Salle 1",
  "key-to-room-2":"Clé Salle 2",
  "key-to-room-4":"Clé Salle 4",
  "key-to-room-6":"Clé Salle 6",
  "kings-rock":"Roche Royale",
  "koffing-candy":"Bonbon Smogo",
  "kommonium-z--bag":"Ékaïzélite",
  "kommonium-z--held":"Ékaïzélite",
  "krabby-candy":"Bonbon Krabby",
  "lagging-tail":"Ralentiqueue",
  "lansat-berry":"Baie Lansat",
  "lapras-candy":"Bonbon Lokhlass",
  "large-leek":"Gros Poireau",
  "latiasite":"Latiasite",
  "latiosite":"Latiosite",
  "lava-cookie":"Lava Cookie",
  "lax-incense":"Encens Doux",
  "lax-mint":"Aromate Lâche",
  "leaf-letter--eevee":"Lettre Végétale",
  "leaf-letter--pikachu":"Lettre Végétale",
  "leaf-stone":"Pierre Plante",
  "left-poke-ball":"Poké Ball donnée",
  "leftovers":"Restes",
  "legendary-clue-1":"Note Légende 1",
  "legendary-clue-2":"Note Légende 2",
  "legendary-clue-3":"Note Légende 3",
  "legendary-clue-question":"Note Légende (?)",
  "lemonade":"Limonade",
  "lens-case":"Boîte Lentilles",
  "leppa-berry":"Baie Mepo",
  "letter":"Lettre à Pierre",
  "level-ball":"Niveau Ball",
  "liberty-pass":"Passe Liberté",
  "lickitung-candy":"Bonbon Excelangue",
  "liechi-berry":"Baie Lichii",
  "life-orb":"Orbe Vie",
  "lift-key":"Clé Ascenseur",
  "light-ball":"Balle Lumière",
  "light-clay":"Lumargile",
  "light-stone":"Galet Blanc",
  "like-mail":"Lettre Avis",
  "lock-capsule":"Poké Écrin",
  "lone-earring":"Boucle d’Oreille",
  "lonely-mint":"Aromate Solo",
  "looker-ticket":"Ticket Beladonis",
  "loot-sack":"Sac Butin",
  "lopunnite":"Lockpinite",
  "lost-item":"Objet perdu",
  "love-ball":"Love Ball",
  "love-sweet":"Cœur en Sucre",
  "lucarionite":"Lucarite",
  "luck-incense":"Encens Veine",
  "lucky-egg":"Œuf Chance",
  "lucky-punch":"Poing Chance",
  "lum-berry":"Baie Prine",
  "luminous-moss":"Lichen Lumineux",
  "lumiose-galette":"Galette Illumis",
  "lunalium-z--bag":"Lunazélite",
  "lunalium-z--held":"Lunazélite",
  "lunar-wing":"Lun’Aile",
  "lure":"Parfum",
  "lure-ball":"Appât Ball",
  "lustrous-orb":"Orbe Perlé",
  "luxury-ball":"Luxe Ball",
  "lycanium-z--bag":"Lougarozélite",
  "lycanium-z--held":"Lougarozélite",
  "mach-bike":"Vélo de Course",
  "machine-part":"Partie Machine",
  "macho-brace":"Bracelet Macho",
  "machop-candy":"Bonbon Machoc",
  "magikarp-candy":"Bonbon Magicarpe",
  "magma-emblem":"Sceau Magma",
  "magma-stone":"Pierre Magma",
  "magma-suit":"Scaph. Magma",
  "magmar-candy":"Bonbon Magmar",
  "magmarizer":"Magmariseur",
  "magnemite-candy":"Bonbon Magnéti",
  "magnet":"Aimant",
  "mago-berry":"Baie Mago",
  "magost-berry":"Baie Mangou",
  "makeup-bag":"Trousse Beauté",
  "manectite":"Élecsprintite",
  "mankey-candy":"Bonbon Férosinge",
  "maranga-berry":"Baie Rangma",
  "marble":"Bille",
  "mark-charm":"Charme Insigne",
  "marshadium-z--bag":"Marshadozélite",
  "marshadium-z--held":"Marshadozélite",
  "master-ball":"Master Ball",
  "mawilite":"Mysdibulite",
  "max-elixir":"Élixir Max",
  "max-ether":"Huile Max",
  "max-honey":"Maxi Miel",
  "max-lure":"Parfum Max",
  "max-mushrooms":"Maxi Champi",
  "max-potion":"Potion Max",
  "max-repel":"Repousse Max",
  "max-revive":"Rappel Max",
  "meadow-plate":"Plaque Herbe",
  "mech-mail":"Lettre Méca",
  "medal-box":"Boîte Médailles",
  "medichamite":"Charminite",
  "medicine-pocket":"Trousse de Soins",
  "mega-anchor":"Méga-Ancre",
  "mega-anklet":"Méga-Grève",
  "mega-bracelet":"Méga-Bracelet",
  "mega-charm":"Méga-Charme",
  "mega-cuff":"Méga-Manchette",
  "mega-glasses":"Méga-Lunettes",
  "mega-glove":"Méga-Gant",
  "mega-pendant":"Méga-Pendentif",
  "mega-ring":"Méga-Anneau",
  "mega-stickpin":"Méga-Pin’s",
  "mega-tiara":"Méga-Tiare",
  "meltan-candy":"Bonbon Meltan",
  "member-card":"Carte Membre",
  "mental-herb":"Herbe Mental",
  "meowth-candy":"Bonbon Miaouss",
  "metagrossite":"Métalossite",
  "metal-coat":"Peau Métal",
  "metal-powder":"Poudre Métal",
  "meteorite":"Météorite",
  "meteorite--2":"Météorite",
  "meteorite--3":"Météorite",
  "meteorite--4":"Météorite",
  "meteorite-shard":"Éclat Météorite",
  "metronome":"Métronome",
  "mew-candy":"Bonbon Mew",
  "mewnium-z--bag":"Mewzélite",
  "mewnium-z--held":"Mewzélite",
  "mewtwo-candy":"Bonbon Mewtwo",
  "mewtwonite-x":"Mewtwoïte X",
  "mewtwonite-y":"Mewtwoïte Y",
  "micle-berry":"Baie Micle",
  "mighty-candy":"Bonbon Force S",
  "mighty-candy-l":"Bonbon Force M",
  "mighty-candy-xl":"Bonbon Force L",
  "mild-mint":"Aromate Doux",
  "mimikium-z--bag":"Mimiquizélite",
  "mimikium-z--held":"Mimiquizélite",
  "mind-plate":"Plaque Esprit",
  "miracle-seed":"Graine Miracle",
  "misty-seed":"Graine Brume",
  "mixed-mushrooms":"Champignons",
  "modest-mint":"Aromate Modeste",
  "moltres-candy":"Bonbon Sulfura",
  "moomoo-cheese":"Fromage Meumeu",
  "moomoo-milk":"Lait Meumeu",
  "moon-ball":"Lune Ball",
  "moon-flute":"Flûte de la Lune",
  "moon-stone":"Pierre Lune",
  "mosaic-mail":"Lettremosaïk",
  "mr-mime-candy":"Bonbon M. Mime",
  "muscle-band":"Bandeau Muscle",
  "muscle-wing":"Plume Force",
  "mystery-egg":"Œuf Mystère",
  "mystic-water":"Eau Mystique",
  "mysticticket":"Ticketmystik",
  "n-lunarizer--merge":"Necroluna",
  "n-lunarizer--split":"Necroluna",
  "n-solarizer--merge":"Necrosol",
  "n-solarizer--split":"Necrosol",
  "naive-mint":"Aromate Naïf",
  "nanab-berry":"Baie Nanab",
  "naughty-mint":"Aromate Mauvais",
  "nest-ball":"Faiblo Ball",
  "net-ball":"Filet Ball",
  "never-melt-ice":"Glace Éternelle",
  "nidoran-f-candy":"Bonbon Nidoran♀",
  "nidoran-m-candy":"Bonbon Nidoran♂",
  "nomel-berry":"Baie Tronci",
  "normal-gem":"Joyau Normal",
  "normalium-z--bag":"Normazélite",
  "normalium-z--held":"Normazélite",
  "nugget":"Pépite",
  "oaks-letter":"Lettre Chen",
  "oaks-parcel":"Colis Chen",
  "occa-berry":"Baie Chocco",
  "odd-incense":"Encens Bizarre",
  "odd-keystone":"Clé de Voûte",
  "oddish-candy":"Bonbon Mystherbe",
  "old-amber":"Vieil Ambre",
  "old-charm":"Vieux Grigri",
  "old-gateau":"Vieux Gâteau",
  "old-letter":"Lettre Jaunie",
  "old-rod":"Canne",
  "old-sea-map":"Vieillecarte",
  "omanyte-candy":"Bonbon Amonita",
  "onix-candy":"Bonbon Onix",
  "oran-berry":"Baie Oran",
  "orange-mail":"Lettre Oranj",
  "orange-petal":"Pétale Orange",
  "oval-charm":"Charme Ovale",
  "oval-stone":"Pierre Ovale",
  "pack-of-potatoes":"Pommes de Terre",
  "packaged-curry":"Curry Instantané",
  "pair-of-tickets":"Ticket Duo",
  "pal-pad":"Registre Ami",
  "pamtre-berry":"Baie Palma",
  "paralyze-heal":"Anti-Para",
  "paras-candy":"Bonbon Paras",
  "parcel":"Colis",
  "parcel--letsgo":"Colis",
  "park-ball":"Parc Ball",
  "pass":"Passe Train",
  "pass-orb":"Offrisphère",
  "passho-berry":"Baie Pocpoc",
  "pasta":"Pâtes",
  "payapa-berry":"Baie Yapap",
  "pearl":"Perle",
  "pearl-string":"Perle Triple",
  "pecha-berry":"Baie Pêcha",
  "permit":"Permis",
  "persim-berry":"Baie Kika",
  "petaya-berry":"Baie Pitaye",
  "pewter-crunchies":"Crok’Argenta",
  "photo-album":"Album Photo",
  "pidgeotite":"Roucarnagite",
  "pidgey-candy":"Bonbon Roucool",
  "pikachu-candy":"Bonbon Pikachu",
  "pikanium-z--bag":"Pikazélite",
  "pikanium-z--held":"Pikazélite",
  "pikashunium-z--bag":"Pikachazélite",
  "pikashunium-z--held":"Pikachazélite",
  "pinap-berry":"Baie Nanana",
  "pink-apricorn":"Noigrume Rose",
  "pink-nectar":"Nectar Rose",
  "pink-petal":"Pétale Rose",
  "pink-scarf":"Foulard Rose",
  "pinsir-candy":"Bonbon Scarabrute",
  "pinsirite":"Scarabruite",
  "pixie-plate":"Plaque Pixie",
  "plasma-card":"Carte Plasma",
  "plume-fossil":"Fossile Plume",
  "poffin-case":"Boîte Poffin",
  "point-card":"Carte Points",
  "poison-barb":"Pic Venin",
  "poison-gem":"Joyau Poison",
  "poison-memory":"ROM Poison",
  "poisonium-z--bag":"Toxizélite",
  "poisonium-z--held":"Toxizélite",
  "poke-ball":"Poké Ball",
  "poke-doll":"Poké Poupée",
  "poke-flute":"Poké Flûte",
  "poke-radar":"Poké Radar",
  "poke-toy":"Poké Plumet",
  "pokeblock-case":"Boîte Pokéblocs",
  "pokeblock-kit":"Kit Pokébloc",
  "pokemon-box":"Boîte Pokémon",
  "pokemon-box-link":"Boîte Pokémon",
  "polished-mud-ball":"Boulette de Boue",
  "poliwag-candy":"Bonbon Ptitard",
  "pomeg-berry":"Baie Grena",
  "ponyta-candy":"Bonbon Ponyta",
  "porygon-candy":"Bonbon Porygon",
  "potion":"Potion",
  "powder-jar":"Pot Poudre",
  "power-anklet":"Chaîne Pouvoir",
  "power-band":"Bandeau Pouvoir",
  "power-belt":"Ceinture Pouvoir",
  "power-bracer":"Poignet Pouvoir",
  "power-herb":"Herbe Pouvoir",
  "power-lens":"Lentille Pouvoir",
  "power-plant-pass":"Passe Centrale",
  "power-up-pocket":"Poche à Renforts",
  "power-weight":"Poids Pouvoir",
  "pp-max":"PP Max",
  "pp-up":"PP Plus",
  "precooked-burger":"Steak Haché",
  "premier-ball":"Honor Ball",
  "pretty-wing":"Jolie Plume",
  "primarium-z--bag":"Oratozélite",
  "primarium-z--held":"Oratozélite",
  "prism-scale":"Bel’Écaille",
  "prison-bottle":"Vase Scellé",
  "professors-mask":"Masque du Prof",
  "profs-letter":"Lettre du Prof",
  "prop-case":"Boîte Parure",
  "protective-pads":"Pare-Effet",
  "protector":"Protecteur",
  "protein":"Protéine",
  "psychic-gem":"Joyau Psy",
  "psychic-memory":"ROM Psy",
  "psychic-seed":"Graine Psychique",
  "psychium-z--bag":"Psychézélite",
  "psychium-z--held":"Psychézélite",
  "psyduck-candy":"Bonbon Psykokwak",
  "pungent-root":"Tubercule",
  "pure-incense":"Encens Pur",
  "purple-nectar":"Nectar Mauve",
  "purple-petal":"Pétale Violet",
  "qualot-berry":"Baie Qualot",
  "quick-ball":"Rapide Ball",
  "quick-candy":"Bonbon Sprint S",
  "quick-candy-l":"Bonbon Sprint M",
  "quick-candy-xl":"Bonbon Sprint L",
  "quick-claw":"Vive Griffe",
  "quick-powder":"Poudre Vite",
  "quiet-mint":"Aromate Discret",
  "rabuta-berry":"Baie Rabuta",
  "radiant-petal":"Pétale Brillant",
  "rage-candy-bar":"Bonbon Rage",
  "rainbow-flower":"Fleur 7 Couleurs",
  "rainbow-pass":"Passe Prisme",
  "rainbow-wing":"Arc-en-Ci’Aile",
  "rare-bone":"Os Rare",
  "rare-candy":"Super Bonbon",
  "rash-mint":"Aromate Foufou",
  "rattata-candy":"Bonbon Rattata",
  "rawst-berry":"Baie Fraive",
  "razor-claw":"Griffe Rasoir",
  "razor-fang":"Croc Rasoir",
  "razz-berry":"Baie Framby",
  "reaper-cloth":"Tissu Fauche",
  "red-apricorn":"Noigrume Rouge",
  "red-card":"Carton Rouge",
  "red-chain":"Chaîne Rouge",
  "red-flute":"Flûte Rouge",
  "red-nectar":"Nectar Rouge",
  "red-orb":"Gemme Rouge",
  "red-petal":"Pétale Rouge",
  "red-scale":"Écaille Rouge",
  "red-scarf":"Foulard Rouge",
  "red-shard":"Tesson Rouge",
  "reins-of-unity":"Rênes de l’Unité",
  "reins-of-unity--merge":"Rênes de l’Unité",
  "reins-of-unity--split":"Rênes de l’Unité",
  "relaxed-mint":"Aromate Relax",
  "relic-band":"Vieux Bijou",
  "relic-copper":"Vieux Sou",
  "relic-crown":"Vieux Tortil",
  "relic-gold":"Vieux Ducat",
  "relic-silver":"Vieil Écu",
  "relic-statue":"Vieux Santon",
  "relic-vase":"Vieux Vase",
  "repeat-ball":"Bis Ball",
  "repel":"Repousse",
  "reply-mail":"Lettre Réponse",
  "reset-urge":"Réamorçage",
  "resist-wing":"Plume Armure",
  "retro-mail":"Lettre Retro",
  "reveal-glass":"Miroir Sacré",
  "revival-herb":"Herbe Rappel",
  "revive":"Rappel",
  "rhyhorn-candy":"Bonbon Rhinocorne",
  "ribbon-sweet":"Ruban en Sucre",
  "rich-mulch":"Fertibondance",
  "ride-pager":"Appel-Monture",
  "rindo-berry":"Baie Ratam",
  "ring-target":"Point de Mire",
  "rm-1-key":"Clé Salle 1",
  "rm-2-key":"Clé Salle 2",
  "rm-4-key":"Clé Salle 4",
  "rm-6-key":"Clé Salle 6",
  "rock-gem":"Joyau Roche",
  "rock-incense":"Encens Roc",
  "rock-memory":"ROM Roche",
  "rockium-z--bag":"Rocazélite",
  "rockium-z--held":"Rocazélite",
  "rocky-helmet":"Casque Brut",
  "roller-skates":"Rollers",
  "room-service":"Chariot Distordu",
  "root-fossil":"Fossile Racine",
  "rose-incense":"Encens Fleur",
  "roseli-berry":"Baie Selro",
  "roto-bargain":"Moti-Promo",
  "roto-boost":"Moti-Soutien",
  "roto-catch":"Moti-Capture",
  "roto-encounter":"Moti-Appât",
  "roto-exp-points":"Moti-Exp",
  "roto-friendship":"Moti-Cœur",
  "roto-hatch":"Moti-Couveuse",
  "roto-hp-restore":"Moti-Récup’ PV",
  "roto-pp-restore":"Moti-Récup’ PP",
  "roto-prize-money":"Moti-Magot",
  "roto-stealth":"Moti-Camouflage",
  "rotom-bike":"Moticyclette",
  "rotom-bike--glistening-black":"Moticyclette",
  "rotom-bike--sparkling-white":"Moticyclette",
  "rotom-bike--water-mode":"Moticyclette",
  "rotom-catalog":"Moti-Catalogue",
  "rowap-berry":"Baie Pommo",
  "rsvp-mail":"Lettre Invit",
  "ruby":"Rubis",
  "rule-book":"Livre Règles",
  "rusted-shield":"Bouclier Rouillé",
  "rusted-sword":"Épée Rouillée",
  "sablenite":"Ténéfixite",
  "sachet":"Sachet Senteur",
  "sacred-ash":"Cendre Sacrée",
  "safari-ball":"Safari Ball",
  "safety-goggles":"Lunettes Filtre",
  "sail-fossil":"Fossile Nageoire",
  "salac-berry":"Baie Sailak",
  "salad-mix":"Légumes",
  "salamencite":"Drattakite",
  "sandshrew-candy":"Bonbon Sabelette",
  "sapphire":"Saphir",
  "sassy-mint":"Aromate Malpoli",
  "sausages":"Saucisses",
  "scanner":"Scanner",
  "sceptilite":"Jungkite",
  "scizorite":"Cizayoxite",
  "scope-lens":"Lentilscope",
  "scyther-candy":"Bonbon Insécateur",
  "sea-incense":"Encens Mer",
  "seal-bag":"Sac Sceaux",
  "seal-case":"Boîte Sceaux",
  "secret-key":"Clé Secrète",
  "secret-key--letsgo":"Clé Secrète",
  "secret-potion":"Potion Secrète",
  "seel-candy":"Bonbon Otaria",
  "serious-mint":"Aromate Sérieux",
  "shaderoot-carrot":"Carotte Sombre",
  "shadow-mail":"Lettre Ombre",
  "shalour-sable":"Sablé Yantreizh",
  "sharp-beak":"Bec Pointu",
  "sharpedonite":"Sharpedite",
  "shed-shell":"Carapace Mue",
  "shell-bell":"Grelot Coque",
  "shellder-candy":"Bonbon Kokiyas",
  "shiny-charm":"Charme Chroma",
  "shiny-stone":"Pierre Éclat",
  "shoal-salt":"Sel Tréfonds",
  "shoal-shell":"CoquilleTréfonds",
  "shock-drive":"Module Choc",
  "shuca-berry":"Baie Jouca",
  "silk-scarf":"Mouchoir Soie",
  "silph-scope":"Scope Sylphe",
  "silver-leaf":"Feuille Argentée",
  "silver-nanab-berry":"Baie Nanab argentée",
  "silver-pinap-berry":"Baie Nanana argentée",
  "silver-powder":"Poudre Argentée",
  "silver-razz-berry":"Baie Framby argentée",
  "silver-wing":"Argent’Aile",
  "sitrus-berry":"Baie Sitrus",
  "skull-fossil":"Fossile Crâne",
  "sky-plate":"Plaque Ciel",
  "slowbronite":"Flagadossite",
  "slowpoke-candy":"Bonbon Ramoloss",
  "slowpoke-tail":"Queue Ramoloss",
  "small-bouquet":"Petit Bouquet",
  "smart-candy":"Bonbon Esprit S",
  "smart-candy-l":"Bonbon Esprit M",
  "smart-candy-xl":"Bonbon Esprit L",
  "smoke-ball":"Boule Fumée",
  "smoke-poke-tail":"Queue Fumée",
  "smooth-rock":"Roche Lisse",
  "snorlax-candy":"Bonbon Ronflex",
  "snorlium-z--bag":"Ronflézélite",
  "snorlium-z--held":"Ronflézélite",
  "snow-mail":"Lettre Neige",
  "snowball":"Boule de Neige",
  "soda-pop":"Soda Cool",
  "soft-sand":"Sable Doux",
  "solganium-z--bag":"Solgazélite",
  "solganium-z--held":"Solgazélite",
  "sonias-book":"Livre de Sonya",
  "soot-sack":"Sac à Suie",
  "soothe-bell":"Grelot Zen",
  "soul-dew":"Rosée Âme",
  "space-mail":"Lettre Cosmo",
  "sparkling-stone":"Gemme Lumière",
  "spearow-candy":"Bonbon Piafabec",
  "spell-tag":"Rune Sort",
  "spelon-berry":"Baie Kiwan",
  "spice-mix":"Épices",
  "splash-plate":"Plaque Hydro",
  "spooky-plate":"Plaque Fantôme",
  "sport-ball":"Compét’Ball",
  "sprayduck":"Kwakarrosoir",
  "sprinklotad":"Nénurrosoir",
  "squirt-bottle":"Carapuce à O",
  "squirtle-candy":"Bonbon Carapuce",
  "ss-ticket":"Passe Bateau",
  "ss-ticket--hoenn":"Passe Bateau",
  "ss-ticket--letsgo":"Passe Bateau",
  "stable-mulch":"Fertistable",
  "star-piece":"Morceau d’Étoile",
  "star-sweet":"Étoile en Sucre",
  "stardust":"Poussière Étoile",
  "starf-berry":"Baie Frista",
  "staryu-candy":"Bonbon Stari",
  "steel-gem":"Joyau Acier",
  "steel-mail":"Lettre Acier",
  "steel-memory":"ROM Acier",
  "steelium-z--bag":"Métallozélite",
  "steelium-z--held":"Métallozélite",
  "steelixite":"Steelixite",
  "stick":"Poireau",
  "sticky-barb":"Piquants",
  "stone-plate":"Plaque Roc",
  "storage-key":"Clé Stockage",
  "storage-key--galactic-warehouse":"Clé Stockage",
  "storage-key--sea-mauville":"Clé Stockage",
  "strange-souvenir":"Bibelot Bizarre",
  "strawberry-sweet":"Fraise en Sucre",
  "stretchy-spring":"Ressort Détendu",
  "style-card":"Carte Élégance",
  "suite-key":"Clé Chambre",
  "sun-flute":"Flûte du Soleil",
  "sun-stone":"Pierre Soleil",
  "super-lure":"Super Parfum",
  "super-potion":"Super Potion",
  "super-repel":"Super Repousse",
  "super-rod":"Méga Canne",
  "surge-badge":"Fulguro-Badge",
  "surprise-mulch":"Fertistantané",
  "swampertite":"Laggronite",
  "sweet-apple":"Pomme Sucrée",
  "sweet-heart":"Chococœur",
  "swift-wing":"Plume Sprint",
  "tamato-berry":"Baie Tamato",
  "tanga-berry":"Baie Panga",
  "tangela-candy":"Bonbon Saquedeneu",
  "tapunium-z--bag":"Tokozélite",
  "tapunium-z--held":"Tokozélite",
  "tart-apple":"Pomme Acidulée",
  "tauros-candy":"Bonbon Tauros",
  "tea":"Thé",
  "teachy-tv":"TV ABC",
  "tentacool-candy":"Bonbon Tentacool",
  "terrain-extender":"Champ’Duit",
  "thanks-mail":"Lettre Merci",
  "thick-club":"Masse Os",
  "throat-spray":"Spray Gorge",
  "thunder-stone":"Pierre Foudre",
  "tidal-bell":"Glas Tempête",
  "timer-ball":"Chrono Ball",
  "timid-mint":"Aromate Timide",
  "tin-of-beans":"Haricots",
  "tiny-mushroom":"Petit Champi",
  "tm-case":"Boîte CT",
  "tm00":"CT00",
  "tm01":"CT01",
  "tm02":"CT02",
  "tm03":"CT03",
  "tm04":"CT04",
  "tm05":"CT05",
  "tm06":"CT06",
  "tm07":"CT07",
  "tm08":"CT08",
  "tm09":"CT09",
  "tm10":"CT10",
  "tm100":"CT100",
  "tm11":"CT11",
  "tm12":"CT12",
  "tm13":"CT13",
  "tm14":"CT14",
  "tm15":"CT15",
  "tm16":"CT16",
  "tm17":"CT17",
  "tm18":"CT18",
  "tm19":"CT19",
  "tm20":"CT20",
  "tm21":"CT21",
  "tm22":"CT22",
  "tm23":"CT23",
  "tm24":"CT24",
  "tm25":"CT25",
  "tm26":"CT26",
  "tm27":"CT27",
  "tm28":"CT28",
  "tm29":"CT29",
  "tm30":"CT30",
  "tm31":"CT31",
  "tm32":"CT32",
  "tm33":"CT33",
  "tm34":"CT34",
  "tm35":"CT35",
  "tm36":"CT36",
  "tm37":"CT37",
  "tm38":"CT38",
  "tm39":"CT39",
  "tm40":"CT40",
  "tm41":"CT41",
  "tm42":"CT42",
  "tm43":"CT43",
  "tm44":"CT44",
  "tm45":"CT45",
  "tm46":"CT46",
  "tm47":"CT47",
  "tm48":"CT48",
  "tm49":"CT49",
  "tm50":"CT50",
  "tm51":"CT51",
  "tm52":"CT52",
  "tm53":"CT53",
  "tm54":"CT54",
  "tm55":"CT55",
  "tm56":"CT56",
  "tm57":"CT57",
  "tm58":"CT58",
  "tm59":"CT59",
  "tm60":"CT60",
  "tm61":"CT61",
  "tm62":"CT62",
  "tm63":"CT63",
  "tm64":"CT64",
  "tm65":"CT65",
  "tm66":"CT66",
  "tm67":"CT67",
  "tm68":"CT68",
  "tm69":"CT69",
  "tm70":"CT70",
  "tm71":"CT71",
  "tm72":"CT72",
  "tm73":"CT73",
  "tm74":"CT74",
  "tm75":"CT75",
  "tm76":"CT76",
  "tm77":"CT77",
  "tm78":"CT78",
  "tm79":"CT79",
  "tm80":"CT80",
  "tm81":"CT81",
  "tm82":"CT82",
  "tm83":"CT83",
  "tm84":"CT84",
  "tm85":"CT85",
  "tm86":"CT86",
  "tm87":"CT87",
  "tm88":"CT88",
  "tm89":"CT89",
  "tm90":"CT90",
  "tm91":"CT91",
  "tm92":"CT92",
  "tm93":"CT93",
  "tm94":"CT94",
  "tm95":"CT95",
  "tm96":"CT96",
  "tm97":"CT97",
  "tm98":"CT98",
  "tm99":"CT99",
  "tmv-pass":"Passe TMV",
  "tough-candy":"Bonbon Armure S",
  "tough-candy-l":"Bonbon Armure M",
  "tough-candy-xl":"Bonbon Armure L",
  "town-map":"Carte",
  "toxic-orb":"Orbe Toxique",
  "toxic-plate":"Plaque Toxicité",
  "tr00":"DT00",
  "tr01":"DT01",
  "tr02":"DT02",
  "tr03":"DT03",
  "tr04":"DT04",
  "tr05":"DT05",
  "tr06":"DT06",
  "tr07":"DT07",
  "tr08":"DT08",
  "tr09":"DT09",
  "tr10":"DT10",
  "tr11":"DT11",
  "tr12":"DT12",
  "tr13":"DT13",
  "tr14":"DT14",
  "tr15":"DT15",
  "tr16":"DT16",
  "tr17":"DT17",
  "tr18":"DT18",
  "tr19":"DT19",
  "tr20":"DT20",
  "tr21":"DT21",
  "tr22":"DT22",
  "tr23":"DT23",
  "tr24":"DT24",
  "tr25":"DT25",
  "tr26":"DT26",
  "tr27":"DT27",
  "tr28":"DT28",
  "tr29":"DT29",
  "tr30":"DT30",
  "tr31":"DT31",
  "tr32":"DT32",
  "tr33":"DT33",
  "tr34":"DT34",
  "tr35":"DT35",
  "tr36":"DT36",
  "tr37":"DT37",
  "tr38":"DT38",
  "tr39":"DT39",
  "tr40":"DT40",
  "tr41":"DT41",
  "tr42":"DT42",
  "tr43":"DT43",
  "tr44":"DT44",
  "tr45":"DT45",
  "tr46":"DT46",
  "tr47":"DT47",
  "tr48":"DT48",
  "tr49":"DT49",
  "tr50":"DT50",
  "tr51":"DT51",
  "tr52":"DT52",
  "tr53":"DT53",
  "tr54":"DT54",
  "tr55":"DT55",
  "tr56":"DT56",
  "tr57":"DT57",
  "tr58":"DT58",
  "tr59":"DT59",
  "tr60":"DT60",
  "tr61":"DT61",
  "tr62":"DT62",
  "tr63":"DT63",
  "tr64":"DT64",
  "tr65":"DT65",
  "tr66":"DT66",
  "tr67":"DT67",
  "tr68":"DT68",
  "tr69":"DT69",
  "tr70":"DT70",
  "tr71":"DT71",
  "tr72":"DT72",
  "tr73":"DT73",
  "tr74":"DT74",
  "tr75":"DT75",
  "tr76":"DT76",
  "tr77":"DT77",
  "tr78":"DT78",
  "tr79":"DT79",
  "tr80":"DT80",
  "tr81":"DT81",
  "tr82":"DT82",
  "tr83":"DT83",
  "tr84":"DT84",
  "tr85":"DT85",
  "tr86":"DT86",
  "tr87":"DT87",
  "tr88":"DT88",
  "tr89":"DT89",
  "tr90":"DT90",
  "tr91":"DT91",
  "tr92":"DT92",
  "tr93":"DT93",
  "tr94":"DT94",
  "tr95":"DT95",
  "tr96":"DT96",
  "tr97":"DT97",
  "tr98":"DT98",
  "tr99":"DT99",
  "travel-trunk":"Malle Penderie",
  "tri-pass":"Tri-Passe",
  "tropic-mail":"Lettre Tropi",
  "tropical-shell":"Coquille du Sud",
  "tunnel-mail":"Lettre Mine",
  "twisted-spoon":"Cuillère Tordue",
  "tyranitarite":"Tyranocivite",
  "ultra-ball":"Hyper Ball",
  "ultranecrozium-z--bag":"Ultranécrozélite",
  "ultranecrozium-z--held":"Ultranécrozélite",
  "unown-report":"Carnet Zarbi",
  "up-grade":"Améliorator",
  "utility-umbrella":"Parapluie Solide",
  "venonat-candy":"Bonbon Mimitoss",
  "venusaurite":"Florizarrite",
  "voltorb-candy":"Bonbon Voltorbe",
  "vs-recorder":"Magnéto VS",
  "vs-seeker":"Cherch’Combat",
  "vulpix-candy":"Bonbon Goupix",
  "wacan-berry":"Baie Parma",
  "wailmer-pail":"Wailmerrosoir",
  "water-gem":"Joyau Eau",
  "water-memory":"ROM Eau",
  "water-stone":"Pierre Eau",
  "waterium-z--bag":"Aquazélite",
  "waterium-z--held":"Aquazélite",
  "watmel-berry":"Baie Stekpa",
  "wave-incense":"Encens Vague",
  "wave-mail":"Lettre Vague",
  "weakness-policy":"Vulné-Assurance",
  "weedle-candy":"Bonbon Aspicot",
  "wepear-berry":"Baie Repoi",
  "whipped-dream":"Chantibonbon",
  "white-apricorn":"Noigrume Blanc",
  "white-flute":"Flûte Blanche",
  "white-herb":"Herbe Blanche",
  "white-mane-hair":"Crins Blancs",
  "wide-lens":"Loupe",
  "wiki-berry":"Baie Wiki",
  "wise-glasses":"Lunettes Sages",
  "wishing-chip":"Fragment Vœu",
  "wishing-piece":"Morceau Vœu",
  "wishing-star":"Étoile Vœu",
  "wood-mail":"Lettre Bois",
  "wooden-crown":"Couronne en Bois",
  "works-key":"Clé Centrale",
  "x-accuracy":"Précision +",
  "x-accuracy-2":"Précision 2",
  "x-accuracy-3":"Précision 3",
  "x-accuracy-6":"Précision 6",
  "x-attack":"Attaque +",
  "x-attack-2":"Attaque 2",
  "x-attack-3":"Attaque 3",
  "x-attack-6":"Attaque 6",
  "x-defense":"Défense +",
  "x-defense-2":"Défense 2",
  "x-defense-3":"Défense 3",
  "x-defense-6":"Défense 6",
  "x-sp-atk":"Atq. Spé. +",
  "x-sp-atk-2":"Atq. Spé. 2",
  "x-sp-atk-3":"Atq. Spé. 3",
  "x-sp-atk-6":"Atq. Spé. 6",
  "x-sp-def":"Déf. Spé. +",
  "x-sp-def-2":"Déf. Spé. 2",
  "x-sp-def-3":"Déf. Spé. 3",
  "x-sp-def-6":"Déf. Spé. 6",
  "x-speed":"Vitesse +",
  "x-speed-2":"Vitesse 2",
  "x-speed-3":"Vitesse 3",
  "x-speed-6":"Vitesse 6",
  "xtransceiver":"Vokit",
  "xtransceiver--red":"Vokit",
  "xtransceiver--yellow":"Vokit",
  "yache-berry":"Baie Nanone",
  "yellow-apricorn":"Noigrume Jaune",
  "yellow-flute":"Flûte Jaune",
  "yellow-nectar":"Nectar Jaune",
  "yellow-petal":"Pétale Jaune",
  "yellow-scarf":"Foulard Jaune",
  "yellow-shard":"Tesson Jaune",
  "z-power-ring":"Super Bracelet Z",
  "z-ring":"Bracelet Z",
  "zap-plate":"Plaque Volt",
  "zapdos-candy":"Bonbon Électhor",
  "zinc":"Zinc",
  "zoom-lens":"Lentille Zoom",
  "zubat-candy":"Bonbon Nosferapti",
  "zygarde-cube":"Boîte Zygarde"
};

const ITEM_EN_MANUAL = {
  "ability-capsule":"Ability Capsule",
  "ability-patch":"Ability Patch",
  "ability-urge":"Ability Urge",
  "abomasite":"Abomasite",
  "abra-candy":"Abra Candy",
  "absolite":"Absolite",
  "absorb-bulb":"Absorb Bulb",
  "acro-bike":"Acro Bike",
  "adamant-mint":"Adamant Mint",
  "adamant-orb":"Adamant Orb",
  "adrenaline-orb":"Adrenaline Orb",
  "adventure-rules":"Adventure Guide",
  "aerodactyl-candy":"Aerodactyl Candy",
  "aerodactylite":"Aerodactylite",
  "aggronite":"Aggronite",
  "aguav-berry":"Aguav Berry",
  "air-balloon":"Air Balloon",
  "air-mail":"Air Mail",
  "alakazite":"Alakazite",
  "aloraichium-z--bag":"Aloraichium Z",
  "aloraichium-z--held":"Aloraichium Z",
  "altarianite":"Altarianite",
  "amaze-mulch":"Amaze Mulch",
  "ampharosite":"Ampharosite",
  "amulet-coin":"Amulet Coin",
  "antidote":"Antidote",
  "apicot-berry":"Apicot Berry",
  "apricorn-box":"Apricorn Box",
  "aqua-suit":"Aqua Suit",
  "armor-fossil":"Armor Fossil",
  "armor-pass":"Armor Pass",
  "armorite-ore":"Armorite Ore",
  "articuno-candy":"Articuno Candy",
  "aspear-berry":"Aspear Berry",
  "assault-vest":"Assault Vest",
  "audinite":"Audinite",
  "auroraticket":"AuroraTicket",
  "autograph":"Autograph",
  "awakening":"Awakening",
  "azure-flute":"Azure Flute",
  "babiri-berry":"Babiri Berry",
  "bachs-food-tin":"Bach’s Food Tin",
  "balm-mushroom":"Balm Mushroom",
  "band-autograph":"Band Autograph",
  "banettite":"Banettite",
  "basement-key":"Basement Key",
  "basement-key--goldenrod":"Basement Key",
  "basement-key--new-mauville":"Basement Key",
  "battle-pocket":"Battle Pocket",
  "beach-glass":"Beach Glass",
  "bead-mail":"Bead Mail",
  "beast-ball":"Beast Ball",
  "beedrillite":"Beedrillite",
  "bellsprout-candy":"Bellsprout Candy",
  "belue-berry":"Belue Berry",
  "berry-juice":"Berry Juice",
  "berry-pots":"Berry Pots",
  "berry-pouch":"Berry Pouch",
  "berry-sweet":"Berry Sweet",
  "bicycle":"Bicycle",
  "big-malasada":"Big Malasada",
  "big-mushroom":"Big Mushroom",
  "big-nugget":"Big Nugget",
  "big-pearl":"Big Pearl",
  "big-root":"Big Root",
  "bike--green":"Bike",
  "bike--yellow":"Bike",
  "bike-voucher":"Bike Voucher",
  "binding-band":"Binding Band",
  "black-apricorn":"Black Apricorn",
  "black-belt":"Black Belt",
  "black-flute":"Black Flute",
  "black-glasses":"Black Glasses",
  "black-mane-hair":"Black Mane Hair",
  "black-sludge":"Black Sludge",
  "blastoisinite":"Blastoisinite",
  "blazikenite":"Blazikenite",
  "bloom-mail":"Bloom Mail",
  "blue-apricorn":"Blue Apricorn",
  "blue-card":"Blue Card",
  "blue-flute":"Blue Flute",
  "blue-orb":"Blue Orb",
  "blue-petal":"Blue Petal",
  "blue-scarf":"Blue Scarf",
  "blue-shard":"Blue Shard",
  "bluk-berry":"Bluk Berry",
  "blunder-policy":"Blunder Policy",
  "bobs-food-tin":"Bob’s Food Tin",
  "boiled-egg":"Boiled Egg",
  "bold-mint":"Bold Mint",
  "boost-mulch":"Boost Mulch",
  "bottle-cap":"Bottle Cap",
  "brave-mint":"Brave Mint",
  "bread":"Bread",
  "brick-mail":"Brick Mail",
  "bridge-mail-d":"Bridge Mail D",
  "bridge-mail-m":"Bridge Mail M",
  "bridge-mail-s":"Bridge Mail S",
  "bridge-mail-t":"Bridge Mail T",
  "bridge-mail-v":"Bridge Mail V",
  "bright-powder":"Bright Powder",
  "brittle-bones":"Brittle Bones",
  "bubble-mail":"Bubble Mail",
  "bug-gem":"Bug Gem",
  "bug-memory":"Bug Memory",
  "buginium-z--bag":"Buginium Z",
  "buginium-z--held":"Buginium Z",
  "bulbasaur-candy":"Bulbasaur Candy",
  "burn-drive":"Burn Drive",
  "burn-heal":"Burn Heal",
  "calcium":"Calcium",
  "calm-mint":"Calm Mint",
  "cameruptite":"Cameruptite",
  "camping-gear":"Camping Gear",
  "candy-jar":"Candy Jar",
  "carbos":"Carbos",
  "card-key":"Card Key",
  "card-key--letsgo":"Card Key",
  "careful-mint":"Careful Mint",
  "carrot-seeds":"Carrot Seeds",
  "casteliacone":"Casteliacone",
  "catching-charm":"Catching Charm",
  "catching-pocket":"Catching Pocket",
  "caterpie-candy":"Caterpie Candy",
  "cell-battery":"Cell Battery",
  "chalky-stone":"Chalky Stone",
  "chansey-candy":"Chansey Candy",
  "charcoal":"Charcoal",
  "charizardite-x":"Charizardite X",
  "charizardite-y":"Charizardite Y",
  "charmander-candy":"Charmander Candy",
  "charti-berry":"Charti Berry",
  "cheri-berry":"Cheri Berry",
  "cherish-ball":"Cherish Ball",
  "chesto-berry":"Chesto Berry",
  "chilan-berry":"Chilan Berry",
  "chill-drive":"Chill Drive",
  "chipped-pot":"Chipped Pot",
  "choice-band":"Choice Band",
  "choice-scarf":"Choice Scarf",
  "choice-specs":"Choice Specs",
  "chople-berry":"Chople Berry",
  "claw-fossil":"Claw Fossil",
  "cleanse-tag":"Cleanse Tag",
  "clear-bell":"Clear Bell",
  "clefairy-candy":"Clefairy Candy",
  "clever-wing":"Clever Feather",
  "clothing-trunk":"Clothing Trunk",
  "clover-sweet":"Clover Sweet",
  "coba-berry":"Coba Berry",
  "coconut-milk":"Coconut Milk",
  "coin-case":"Coin Case",
  "colbur-berry":"Colbur Berry",
  "colress-machine":"Colress Machine",
  "comet-shard":"Comet Shard",
  "common-stone":"Common Stone",
  "contest-costume--dress":"Contest Costume",
  "contest-costume--jacket":"Contest Costume",
  "contest-pass":"Contest Pass",
  "cornn-berry":"Cornn Berry",
  "coupon-1":"Coupon 1",
  "coupon-2":"Coupon 2",
  "coupon-3":"Coupon 3",
  "courage-candy":"Courage Candy",
  "courage-candy-l":"Courage Candy L",
  "courage-candy-xl":"Courage Candy XL",
  "cover-fossil":"Cover Fossil",
  "cracked-pot":"Cracked Pot",
  "crown-pass":"Crown Pass",
  "cubone-candy":"Cubone Candy",
  "custap-berry":"Custap Berry",
  "damp-mulch":"Damp Mulch",
  "damp-rock":"Damp Rock",
  "dark-gem":"Dark Gem",
  "dark-memory":"Dark Memory",
  "dark-stone":"Dark Stone",
  "darkinium-z--bag":"Darkinium Z",
  "darkinium-z--held":"Darkinium Z",
  "data-card-01":"Data Card 01",
  "data-card-02":"Data Card 02",
  "data-card-03":"Data Card 03",
  "data-card-04":"Data Card 04",
  "data-card-05":"Data Card 05",
  "data-card-06":"Data Card 06",
  "data-card-07":"Data Card 07",
  "data-card-08":"Data Card 08",
  "data-card-09":"Data Card 09",
  "data-card-10":"Data Card 10",
  "data-card-11":"Data Card 11",
  "data-card-12":"Data Card 12",
  "data-card-13":"Data Card 13",
  "data-card-14":"Data Card 14",
  "data-card-15":"Data Card 15",
  "data-card-16":"Data Card 16",
  "data-card-17":"Data Card 17",
  "data-card-18":"Data Card 18",
  "data-card-19":"Data Card 19",
  "data-card-20":"Data Card 20",
  "data-card-21":"Data Card 21",
  "data-card-22":"Data Card 22",
  "data-card-23":"Data Card 23",
  "data-card-24":"Data Card 24",
  "data-card-25":"Data Card 25",
  "data-card-26":"Data Card 26",
  "data-card-27":"Data Card 27",
  "dawn-stone":"Dawn Stone",
  "decidium-z--bag":"Decidium Z",
  "decidium-z--held":"Decidium Z",
  "deep-sea-scale":"Deep Sea Scale",
  "deep-sea-tooth":"Deep Sea Tooth",
  "destiny-knot":"Destiny Knot",
  "devon-goods":"Devon Goods",
  "devon-parts":"Devon Parts",
  "devon-scope":"Devon Scope",
  "devon-scuba-gear":"Devon Scuba Gear",
  "diancite":"Diancite",
  "diglett-candy":"Diglett Candy",
  "dire-hit":"Dire Hit",
  "dire-hit-2":"Dire Hit 2",
  "dire-hit-3":"Dire Hit 3",
  "discount-coupon":"Discount Coupon",
  "ditto-candy":"Ditto Candy",
  "dive-ball":"Dive Ball",
  "dna-splicers":"DNA Splicers",
  "dna-splicers--merge":"DNA Splicers",
  "dna-splicers--split":"DNA Splicers",
  "doduo-candy":"Doduo Candy",
  "dome-fossil":"Dome Fossil",
  "douse-drive":"Douse Drive",
  "dowsing-machine":"Dowsing Machine",
  "draco-plate":"Draco Plate",
  "dragon-fang":"Dragon Fang",
  "dragon-gem":"Dragon Gem",
  "dragon-memory":"Dragon Memory",
  "dragon-scale":"Dragon Scale",
  "dragon-skull":"Dragon Skull",
  "dragonium-z--bag":"Dragonium Z",
  "dragonium-z--held":"Dragonium Z",
  "dratini-candy":"Dratini Candy",
  "dread-plate":"Dread Plate",
  "dream-ball":"Dream Ball",
  "dream-mail":"Dream Mail",
  "dropped-item":"Dropped Item",
  "dropped-item--red":"Dropped Item",
  "dropped-item--yellow":"Dropped Item",
  "drowzee-candy":"Drowzee Candy",
  "dubious-disc":"Dubious Disc",
  "durin-berry":"Durin Berry",
  "dusk-ball":"Dusk Ball",
  "dusk-stone":"Dusk Stone",
  "dynamax-band":"Dynamax Band",
  "dynamax-candy":"Dynamax Candy",
  "dynamax-crystal-and15":"★And15",
  "dynamax-crystal-and337":"★And337",
  "dynamax-crystal-and390":"★And390",
  "dynamax-crystal-and458":"★And458",
  "dynamax-crystal-and603":"★And603",
  "dynamax-crystal-aql7235":"★Aql7235",
  "dynamax-crystal-aql7525":"★Aql7525",
  "dynamax-crystal-aql7557":"★Aql7557",
  "dynamax-crystal-aql7595":"★Aql7595",
  "dynamax-crystal-aql7602":"★Aql7602",
  "dynamax-crystal-aqr7950":"★Aqr7950",
  "dynamax-crystal-aqr8232":"★Aqr8232",
  "dynamax-crystal-aqr8264":"★Aqr8264",
  "dynamax-crystal-aqr8414":"★Aqr8414",
  "dynamax-crystal-aqr8499":"★Aqr8499",
  "dynamax-crystal-aqr8518":"★Aqr8518",
  "dynamax-crystal-aqr8610":"★Aqr8610",
  "dynamax-crystal-aqr8709":"★Aqr8709",
  "dynamax-crystal-ara6585":"★Ara6585",
  "dynamax-crystal-ari546":"★Ari546",
  "dynamax-crystal-ari553":"★Ari553",
  "dynamax-crystal-ari617":"★Ari617",
  "dynamax-crystal-ari951":"★Ari951",
  "dynamax-crystal-aur1577":"★Aur1577",
  "dynamax-crystal-aur1605":"★Aur1605",
  "dynamax-crystal-aur1612":"★Aur1612",
  "dynamax-crystal-aur1641":"★Aur1641",
  "dynamax-crystal-aur1708":"★Aur1708",
  "dynamax-crystal-aur2088":"★Aur2088",
  "dynamax-crystal-aur2095":"★Aur2095",
  "dynamax-crystal-boo5235":"★Boo5235",
  "dynamax-crystal-boo5340":"★Boo5340",
  "dynamax-crystal-boo5351":"★Boo5351",
  "dynamax-crystal-boo5435":"★Boo5435",
  "dynamax-crystal-boo5506":"★Boo5506",
  "dynamax-crystal-boo5602":"★Boo5602",
  "dynamax-crystal-boo5733":"★Boo5733",
  "dynamax-crystal-cap7754":"★Cap7754",
  "dynamax-crystal-cap7773":"★Cap7773",
  "dynamax-crystal-cap7776":"★Cap7776",
  "dynamax-crystal-cap8278":"★Cap8278",
  "dynamax-crystal-cap8322":"★Cap8322",
  "dynamax-crystal-car2326":"★Car2326",
  "dynamax-crystal-car3307":"★Car3307",
  "dynamax-crystal-car3685":"★Car3685",
  "dynamax-crystal-car3699":"★Car3699",
  "dynamax-crystal-cas153":"★Cas153",
  "dynamax-crystal-cas168":"★Cas168",
  "dynamax-crystal-cas21":"★Cas21",
  "dynamax-crystal-cas219":"★Cas219",
  "dynamax-crystal-cas265":"★Cas265",
  "dynamax-crystal-cas403":"★Cas403",
  "dynamax-crystal-cas542":"★Cas542",
  "dynamax-crystal-cen5267":"★Cen5267",
  "dynamax-crystal-cen5288":"★Cen5288",
  "dynamax-crystal-cen5459":"★Cen5459",
  "dynamax-crystal-cen5460":"★Cen5460",
  "dynamax-crystal-cen551":"★Cen551",
  "dynamax-crystal-cep8162":"★Cep8162",
  "dynamax-crystal-cep8238":"★Cep8238",
  "dynamax-crystal-cep8417":"★Cep8417",
  "dynamax-crystal-cep8974":"★Cep8974",
  "dynamax-crystal-cet188":"★Cet188",
  "dynamax-crystal-cet539":"★Cet539",
  "dynamax-crystal-cet681":"★Cet681",
  "dynamax-crystal-cet804":"★Cet804",
  "dynamax-crystal-cet911":"★Cet911",
  "dynamax-crystal-cma2282":"★CMa2282",
  "dynamax-crystal-cma2294":"★CMa2294",
  "dynamax-crystal-cma2491":"★CMa2491",
  "dynamax-crystal-cma2618":"★CMa2618",
  "dynamax-crystal-cma2646":"★CMa2646",
  "dynamax-crystal-cma2657":"★CMa2657",
  "dynamax-crystal-cma2693":"★CMa2693",
  "dynamax-crystal-cma2827":"★CMa2827",
  "dynamax-crystal-cmi2845":"★CMi2845",
  "dynamax-crystal-cmi2943":"★CMi2943",
  "dynamax-crystal-cnc3208":"★Cnc3208",
  "dynamax-crystal-cnc3249":"★Cnc3249",
  "dynamax-crystal-cnc3268":"★Cnc3268",
  "dynamax-crystal-cnc3429":"★Cnc3429",
  "dynamax-crystal-cnc3449":"★Cnc3449",
  "dynamax-crystal-cnc3461":"★Cnc3461",
  "dynamax-crystal-cnc3572":"★Cnc3572",
  "dynamax-crystal-cnc3627":"★Cnc3627",
  "dynamax-crystal-col1956":"★Col1956",
  "dynamax-crystal-col2040":"★Col2040",
  "dynamax-crystal-col2177":"★Col2177",
  "dynamax-crystal-com4968":"★Com4968",
  "dynamax-crystal-crt4287":"★Crt4287",
  "dynamax-crystal-cru4656":"★Cru4656",
  "dynamax-crystal-cru4700":"★Cru4700",
  "dynamax-crystal-cru4730":"★Cru4730",
  "dynamax-crystal-cru4763":"★Cru4763",
  "dynamax-crystal-cru4853":"★Cru4853",
  "dynamax-crystal-crv4623":"★Crv4623",
  "dynamax-crystal-crv4662":"★Crv4662",
  "dynamax-crystal-crv4757":"★Crv4757",
  "dynamax-crystal-crv4786":"★Crv4786",
  "dynamax-crystal-cvn4785":"★CVn4785",
  "dynamax-crystal-cvn4846":"★CVn4846",
  "dynamax-crystal-cvn4915":"★CVn4915",
  "dynamax-crystal-cyg7417":"★Cyg7417",
  "dynamax-crystal-cyg7528":"★Cyg7528",
  "dynamax-crystal-cyg7796":"★Cyg7796",
  "dynamax-crystal-cyg7924":"★Cyg7924",
  "dynamax-crystal-cyg7949":"★Cyg7949",
  "dynamax-crystal-cyg8301":"★Cyg8301",
  "dynamax-crystal-del7852":"★Del7852",
  "dynamax-crystal-del7882":"★Del7882",
  "dynamax-crystal-del7906":"★Del7906",
  "dynamax-crystal-dra4434":"★Dra4434",
  "dynamax-crystal-dra5291":"★Dra5291",
  "dynamax-crystal-dra5744":"★Dra5744",
  "dynamax-crystal-dra6132":"★Dra6132",
  "dynamax-crystal-dra6370":"★Dra6370",
  "dynamax-crystal-dra6396":"★Dra6396",
  "dynamax-crystal-dra6536":"★Dra6536",
  "dynamax-crystal-dra6636":"★Dra6636",
  "dynamax-crystal-dra6688":"★Dra6688",
  "dynamax-crystal-dra6705":"★Dra6705",
  "dynamax-crystal-dra7310":"★Dra7310",
  "dynamax-crystal-dra7462":"★Dra7462",
  "dynamax-crystal-equ8131":"★Equ8131",
  "dynamax-crystal-eri1084":"★Eri1084",
  "dynamax-crystal-eri1231":"★Eri1231",
  "dynamax-crystal-eri1298":"★Eri1298",
  "dynamax-crystal-eri1325":"★Eri1325",
  "dynamax-crystal-eri1393":"★Eri1393",
  "dynamax-crystal-eri1464":"★Eri1464",
  "dynamax-crystal-eri1666":"★Eri1666",
  "dynamax-crystal-eri472":"★Eri472",
  "dynamax-crystal-eri850":"★Eri850",
  "dynamax-crystal-eri874":"★Eri874",
  "dynamax-crystal-eri897":"★Eri897",
  "dynamax-crystal-eri984":"★Eri984",
  "dynamax-crystal-gem2216":"★Gem2216",
  "dynamax-crystal-gem2286":"★Gem2286",
  "dynamax-crystal-gem2421":"★Gem2421",
  "dynamax-crystal-gem2473":"★Gem2473",
  "dynamax-crystal-gem2484":"★Gem2484",
  "dynamax-crystal-gem2650":"★Gem2650",
  "dynamax-crystal-gem2777":"★Gem2777",
  "dynamax-crystal-gem2891":"★Gem2891",
  "dynamax-crystal-gem2930":"★Gem2930",
  "dynamax-crystal-gem2990":"★Gem2990",
  "dynamax-crystal-gru8353":"★Gru8353",
  "dynamax-crystal-gru8425":"★Gru8425",
  "dynamax-crystal-gru8636":"★Gru8636",
  "dynamax-crystal-her6008":"★Her6008",
  "dynamax-crystal-her6117":"★Her6117",
  "dynamax-crystal-her6148":"★Her6148",
  "dynamax-crystal-her6406":"★Her6406",
  "dynamax-crystal-her6410":"★Her6410",
  "dynamax-crystal-her6526":"★Her6526",
  "dynamax-crystal-hya3418":"★Hya3418",
  "dynamax-crystal-hya3482":"★Hya3482",
  "dynamax-crystal-hya3748":"★Hya3748",
  "dynamax-crystal-hya3845":"★Hya3845",
  "dynamax-crystal-hya3903":"★Hya3903",
  "dynamax-crystal-leo3773":"★Leo3773",
  "dynamax-crystal-leo3852":"★Leo3852",
  "dynamax-crystal-leo3905":"★Leo3905",
  "dynamax-crystal-leo3982":"★Leo3982",
  "dynamax-crystal-leo4031":"★Leo4031",
  "dynamax-crystal-leo4057":"★Leo4057",
  "dynamax-crystal-leo4357":"★Leo4357",
  "dynamax-crystal-leo4359":"★Leo4359",
  "dynamax-crystal-leo4534":"★Leo4534",
  "dynamax-crystal-lep1829":"★Lep1829",
  "dynamax-crystal-lep1865":"★Lep1865",
  "dynamax-crystal-lib5531":"★Lib5531",
  "dynamax-crystal-lib5603":"★Lib5603",
  "dynamax-crystal-lib5685":"★Lib5685",
  "dynamax-crystal-lib5787":"★Lib5787",
  "dynamax-crystal-lyr7001":"★Lyr7001",
  "dynamax-crystal-lyr7106":"★Lyr7106",
  "dynamax-crystal-lyr7178":"★Lyr7178",
  "dynamax-crystal-lyr7298":"★Lyr7298",
  "dynamax-crystal-oct7228":"★Oct7228",
  "dynamax-crystal-oph6056":"★Oph6056",
  "dynamax-crystal-oph6075":"★Oph6075",
  "dynamax-crystal-oph6149":"★Oph6149",
  "dynamax-crystal-oph6378":"★Oph6378",
  "dynamax-crystal-oph6556":"★Oph6556",
  "dynamax-crystal-oph6603":"★Oph6603",
  "dynamax-crystal-ori1543":"★Ori1543",
  "dynamax-crystal-ori1713":"★Ori1713",
  "dynamax-crystal-ori1790":"★Ori1790",
  "dynamax-crystal-ori1852":"★Ori1852",
  "dynamax-crystal-ori1879":"★Ori1879",
  "dynamax-crystal-ori1899":"★Ori1899",
  "dynamax-crystal-ori1903":"★Ori1903",
  "dynamax-crystal-ori1948":"★Ori1948",
  "dynamax-crystal-ori2004":"★Ori2004",
  "dynamax-crystal-ori2061":"★Ori2061",
  "dynamax-crystal-pav7790":"★Pav7790",
  "dynamax-crystal-peg39":"★Peg39",
  "dynamax-crystal-peg8308":"★Peg8308",
  "dynamax-crystal-peg8450":"★Peg8450",
  "dynamax-crystal-peg8634":"★Peg8634",
  "dynamax-crystal-peg8650":"★Peg8650",
  "dynamax-crystal-peg8684":"★Peg8684",
  "dynamax-crystal-peg8775":"★Peg8775",
  "dynamax-crystal-peg8781":"★Peg8781",
  "dynamax-crystal-peg8880":"★Peg8880",
  "dynamax-crystal-peg8905":"★Peg8905",
  "dynamax-crystal-per1017":"★Per1017",
  "dynamax-crystal-per1131":"★Per1131",
  "dynamax-crystal-per1228":"★Per1228",
  "dynamax-crystal-per834":"★Per834",
  "dynamax-crystal-per936":"★Per936",
  "dynamax-crystal-per941":"★Per941",
  "dynamax-crystal-phe338":"★Phe338",
  "dynamax-crystal-phe99":"★Phe99",
  "dynamax-crystal-psa8728":"★PsA8728",
  "dynamax-crystal-psc361":"★Psc361",
  "dynamax-crystal-psc437":"★Psc437",
  "dynamax-crystal-psc510":"★Psc510",
  "dynamax-crystal-psc596":"★Psc596",
  "dynamax-crystal-psc8773":"★Psc8773",
  "dynamax-crystal-pup3045":"★Pup3045",
  "dynamax-crystal-pup3165":"★Pup3165",
  "dynamax-crystal-pup3185":"★Pup3185",
  "dynamax-crystal-sco5928":"★Sco5928",
  "dynamax-crystal-sco5944":"★Sco5944",
  "dynamax-crystal-sco5953":"★Sco5953",
  "dynamax-crystal-sco5984":"★Sco5984",
  "dynamax-crystal-sco6027":"★Sco6027",
  "dynamax-crystal-sco6084":"★Sco6084",
  "dynamax-crystal-sco6134":"★Sco6134",
  "dynamax-crystal-sco6165":"★Sco6165",
  "dynamax-crystal-sco6241":"★Sco6241",
  "dynamax-crystal-sco6247":"★Sco6247",
  "dynamax-crystal-sco6252":"★Sco6252",
  "dynamax-crystal-sco6508":"★Sco6508",
  "dynamax-crystal-sco6527":"★Sco6527",
  "dynamax-crystal-sco6553":"★Sco6553",
  "dynamax-crystal-sco6630":"★Sco6630",
  "dynamax-crystal-ser5854":"★Ser5854",
  "dynamax-crystal-ser5879":"★Ser5879",
  "dynamax-crystal-ser7141":"★Ser7141",
  "dynamax-crystal-sge7479":"★Sge7479",
  "dynamax-crystal-sgr6746":"★Sgr6746",
  "dynamax-crystal-sgr6812":"★Sgr6812",
  "dynamax-crystal-sgr6859":"★Sgr6859",
  "dynamax-crystal-sgr6879":"★Sgr6879",
  "dynamax-crystal-sgr6913":"★Sgr6913",
  "dynamax-crystal-sgr7116":"★Sgr7116",
  "dynamax-crystal-sgr7121":"★Sgr7121",
  "dynamax-crystal-sgr7194":"★Sgr7194",
  "dynamax-crystal-sgr7264":"★Sgr7264",
  "dynamax-crystal-sgr7337":"★Sgr7337",
  "dynamax-crystal-sgr7343":"★Sgr7343",
  "dynamax-crystal-sgr7348":"★Sgr7348",
  "dynamax-crystal-sgr7597":"★Sgr7597",
  "dynamax-crystal-tau1165":"★Tau1165",
  "dynamax-crystal-tau1346":"★Tau1346",
  "dynamax-crystal-tau1373":"★Tau1373",
  "dynamax-crystal-tau1409":"★Tau1409",
  "dynamax-crystal-tau1412":"★Tau1412",
  "dynamax-crystal-tau1457":"★Tau1457",
  "dynamax-crystal-tau1791":"★Tau1791",
  "dynamax-crystal-tau1910":"★Tau1910",
  "dynamax-crystal-tra6217":"★TrA6217",
  "dynamax-crystal-tri544":"★Tri544",
  "dynamax-crystal-uma3323":"★UMa3323",
  "dynamax-crystal-uma3569":"★UMa3569",
  "dynamax-crystal-uma3594":"★UMa3594",
  "dynamax-crystal-uma4033":"★UMa4033",
  "dynamax-crystal-uma4069":"★UMa4069",
  "dynamax-crystal-uma4295":"★UMa4295",
  "dynamax-crystal-uma4301":"★UMa4301",
  "dynamax-crystal-uma4375":"★UMa4375",
  "dynamax-crystal-uma4377":"★UMa4377",
  "dynamax-crystal-uma4518":"★UMa4518",
  "dynamax-crystal-uma4554":"★UMa4554",
  "dynamax-crystal-uma4660":"★UMa4660",
  "dynamax-crystal-uma4905":"★UMa4905",
  "dynamax-crystal-uma5054":"★UMa5054",
  "dynamax-crystal-uma5191":"★UMa5191",
  "dynamax-crystal-umi424":"★UMi424",
  "dynamax-crystal-umi5563":"★UMi5563",
  "dynamax-crystal-umi5735":"★UMi5735",
  "dynamax-crystal-umi6789":"★UMi6789",
  "dynamax-crystal-vel3485":"★Vel3485",
  "dynamax-crystal-vel3634":"★Vel3634",
  "dynamax-crystal-vel3734":"★Vel3734",
  "dynamax-crystal-vir4540":"★Vir4540",
  "dynamax-crystal-vir4689":"★Vir4689",
  "dynamax-crystal-vir4825":"★Vir4825",
  "dynamax-crystal-vir4910":"★Vir4910",
  "dynamax-crystal-vir4932":"★Vir4932",
  "dynamax-crystal-vir5056":"★Vir5056",
  "dynamax-crystal-vir5107":"★Vir5107",
  "dynamax-crystal-vir5315":"★Vir5315",
  "dynamax-crystal-vir5338":"★Vir5338",
  "dynamax-crystal-vir5359":"★Vir5359",
  "dynamax-crystal-vir5409":"★Vir5409",
  "dynamax-crystal-vul7405":"★Vul7405",
  "dynite-ore":"Dynite Ore",
  "earth-plate":"Earth Plate",
  "eevee-candy":"Eevee Candy",
  "eevium-z--bag":"Eevium Z",
  "eevium-z--held":"Eevium Z",
  "eject-button":"Eject Button",
  "eject-pack":"Eject Pack",
  "ekans-candy":"Ekans Candy",
  "electabuzz-candy":"Electabuzz Candy",
  "electirizer":"Electirizer",
  "electric-gem":"Electric Gem",
  "electric-memory":"Electric Memory",
  "electric-seed":"Electric Seed",
  "electrium-z--bag":"Electrium Z",
  "electrium-z--held":"Electrium Z",
  "elevator-key":"Elevator Key",
  "elixir":"Elixir",
  "endorsement":"Endorsement",
  "energy-powder":"Energy Powder",
  "energy-root":"Energy Root",
  "enigma-berry":"Enigma Berry",
  "enigma-stone":"Enigma Stone",
  "enigmatic-card":"Enigmatic Card",
  "eon-flute":"Eon Flute",
  "eon-ticket":"Eon Ticket",
  "escape-rope":"Escape Rope",
  "ether":"Ether",
  "everstone":"Everstone",
  "eviolite":"Eviolite",
  "exeggcute-candy":"Exeggcute Candy",
  "exp-candy-l":"Exp. Candy L",
  "exp-candy-m":"Exp. Candy M",
  "exp-candy-s":"Exp. Candy S",
  "exp-candy-xl":"Exp. Candy XL",
  "exp-candy-xs":"Exp. Candy XS",
  "exp-charm":"Exp. Charm",
  "exp-share":"Exp. Share",
  "expert-belt":"Expert Belt",
  "explorer-kit":"Explorer Kit",
  "fab-mail":"Fab Mail",
  "fairium-z--bag":"Fairium Z",
  "fairium-z--held":"Fairium Z",
  "fairy-gem":"Fairy Gem",
  "fairy-memory":"Fairy Memory",
  "fame-checker":"Fame Checker",
  "fancy-apple":"Fancy Apple",
  "farfetchd-candy":"Farfetch’d Candy",
  "fashion-case":"Fashion Case",
  "fast-ball":"Fast Ball",
  "favored-mail":"Favored Mail",
  "festival-ticket":"Festival Ticket",
  "fighting-gem":"Fighting Gem",
  "fighting-memory":"Fighting Memory",
  "fightinium-z--bag":"Fightinium Z",
  "fightinium-z--held":"Fightinium Z",
  "figy-berry":"Figy Berry",
  "fire-gem":"Fire Gem",
  "fire-memory":"Fire Memory",
  "fire-stone":"Fire Stone",
  "firium-z--bag":"Firium Z",
  "firium-z--held":"Firium Z",
  "fishing-rod":"Fishing Rod",
  "fishing-rod--galar":"Fishing Rod",
  "fist-plate":"Fist Plate",
  "flame-mail":"Flame Mail",
  "flame-orb":"Flame Orb",
  "flame-plate":"Flame Plate",
  "float-stone":"Float Stone",
  "flower-sweet":"Flower Sweet",
  "fluffy-tail":"Fluffy Tail",
  "flying-gem":"Flying Gem",
  "flying-memory":"Flying Memory",
  "flyinium-z--bag":"Flyinium Z",
  "flyinium-z--held":"Flyinium Z",
  "focus-band":"Focus Band",
  "focus-sash":"Focus Sash",
  "forage-bag":"Forage Bag",
  "fossilized-bird":"Fossilized Bird",
  "fossilized-dino":"Fossilized Dino",
  "fossilized-drake":"Fossilized Drake",
  "fossilized-fish":"Fossilized Fish",
  "fresh-cream":"Fresh Cream",
  "fresh-water":"Fresh Water",
  "fried-food":"Fried Food",
  "friend-ball":"Friend Ball",
  "fruit-bunch":"Fruit Bunch",
  "full-heal":"Full Heal",
  "full-incense":"Full Incense",
  "full-restore":"Full Restore",
  "galactic-key":"Galactic Key",
  "galarica-cuff":"Galarica Cuff",
  "galarica-twig":"Galarica Twig",
  "galarica-wreath":"Galarica Wreath",
  "galladite":"Galladite",
  "ganlon-berry":"Ganlon Berry",
  "garchompite":"Garchompite",
  "gardevoirite":"Gardevoirite",
  "gastly-candy":"Gastly Candy",
  "gb-sounds":"GB Sounds",
  "gengarite":"Gengarite",
  "genius-wing":"Genius Feather",
  "gentle-mint":"Gentle Mint",
  "geodude-candy":"Geodude Candy",
  "ghost-gem":"Ghost Gem",
  "ghost-memory":"Ghost Memory",
  "ghostium-z--bag":"Ghostium Z",
  "ghostium-z--held":"Ghostium Z",
  "gigantamix":"Gigantamix",
  "glalitite":"Glalitite",
  "glitter-mail":"Glitter Mail",
  "go-goggles":"Go-Goggles",
  "god-stone":"god stone",
  "gold-bottle-cap":"Gold Bottle Cap",
  "gold-leaf":"Gold Leaf",
  "gold-teeth":"Gold Teeth",
  "goldeen-candy":"Goldeen Candy",
  "golden-nanab-berry":"Golden Nanab Berry",
  "golden-pinap-berry":"Golden Pinap Berry",
  "golden-razz-berry":"Golden Razz Berry",
  "good-rod":"Good Rod",
  "gooey-mulch":"Gooey Mulch",
  "gracidea":"Gracidea",
  "gram-1":"Gram 1",
  "gram-2":"Gram 2",
  "gram-3":"Gram 3",
  "grass-gem":"Grass Gem",
  "grass-mail":"Grass Mail",
  "grass-memory":"Grass Memory",
  "grassium-z--bag":"Grassium Z",
  "grassium-z--held":"Grassium Z",
  "grassy-seed":"Grassy Seed",
  "great-ball":"Great Ball",
  "green-apricorn":"Green Apricorn",
  "green-petal":"Green Petal",
  "green-scarf":"Green Scarf",
  "green-shard":"Green Shard",
  "greet-mail":"Greet Mail",
  "grepa-berry":"Grepa Berry",
  "grimer-candy":"Grimer Candy",
  "grip-claw":"Grip Claw",
  "griseous-orb":"Griseous Orb",
  "ground-gem":"Ground Gem",
  "ground-memory":"Ground Memory",
  "groundium-z--bag":"Groundium Z",
  "groundium-z--held":"Groundium Z",
  "growlithe-candy":"Growlithe Candy",
  "growth-mulch":"Growth Mulch",
  "grubby-hanky":"Grubby Hanky",
  "guard-spec":"Guard Spec.",
  "gyaradosite":"Gyaradosite",
  "haban-berry":"Haban Berry",
  "harbor-mail":"Harbor Mail",
  "hard-stone":"Hard Stone",
  "hasty-mint":"Hasty Mint",
  "heal-ball":"Heal Ball",
  "heal-powder":"Heal Powder",
  "health-candy":"Health Candy",
  "health-candy-l":"Health Candy L",
  "health-candy-xl":"Health Candy XL",
  "health-wing":"Health Feather",
  "heart-mail":"Heart Mail",
  "heart-scale":"Heart Scale",
  "heat-rock":"Heat Rock",
  "heavy-ball":"Heavy Ball",
  "heavy-duty-boots":"Heavy-Duty Boots",
  "helix-fossil":"Helix Fossil",
  "heracronite":"Heracronite",
  "hi-tech-earbuds":"Hi-tech Earbuds",
  "hitmonchan-candy":"Hitmonchan Candy",
  "hitmonlee-candy":"Hitmonlee Candy",
  "hm01":"HM01",
  "hm02":"HM02",
  "hm03":"HM03",
  "hm04":"HM04",
  "hm05":"HM05",
  "hm06":"HM06",
  "hm07":"HM07",
  "hm08":"HM08",
  "holo-caster":"Holo Caster",
  "holo-caster--green":"Holo Caster",
  "holo-caster--red":"Holo Caster",
  "hondew-berry":"Hondew Berry",
  "honey":"Honey",
  "honor-of-kalos":"Honor of Kalos",
  "horsea-candy":"Horsea Candy",
  "houndoominite":"Houndoominite",
  "hp-up":"HP Up",
  "hyper-potion":"Hyper Potion",
  "iapapa-berry":"Iapapa Berry",
  "ice-gem":"Ice Gem",
  "ice-heal":"Ice Heal",
  "ice-memory":"Ice Memory",
  "ice-stone":"Ice Stone",
  "iceroot-carrot":"Iceroot Carrot",
  "icicle-plate":"Icicle Plate",
  "icium-z--bag":"Icium Z",
  "icium-z--held":"Icium Z",
  "icy-rock":"Icy Rock",
  "ilimas-normalium-z":"Ilima Normalium Z",
  "impish-mint":"Impish Mint",
  "incinium-z--bag":"Incinium Z",
  "incinium-z--held":"Incinium Z",
  "inquiry-mail":"Inquiry Mail",
  "insect-plate":"Insect Plate",
  "instant-noodles":"Instant Noodles",
  "intriguing-stone":"Intriguing Stone",
  "iron":"Iron",
  "iron-ball":"Iron Ball",
  "iron-plate":"Iron Plate",
  "item-drop":"Item Drop",
  "item-urge":"Item Urge",
  "jaboca-berry":"Jaboca Berry",
  "jade-orb":"Jade Orb",
  "jaw-fossil":"Jaw Fossil",
  "jigglypuff-candy":"Jigglypuff Candy",
  "jolly-mint":"Jolly Mint",
  "journal":"Journal",
  "jynx-candy":"Jynx Candy",
  "kabuto-candy":"Kabuto Candy",
  "kangaskhan-candy":"Kangaskhan Candy",
  "kangaskhanite":"Kangaskhanite",
  "kasib-berry":"Kasib Berry",
  "kebia-berry":"Kebia Berry",
  "kee-berry":"Kee Berry",
  "kelpsy-berry":"Kelpsy Berry",
  "key-stone":"Key Stone",
  "key-to-room-1":"Key to Room 1",
  "key-to-room-2":"Key to Room 2",
  "key-to-room-4":"Key to Room 4",
  "key-to-room-6":"Key to Room 6",
  "kings-rock":"King’s Rock",
  "koffing-candy":"Koffing Candy",
  "kommonium-z--bag":"Kommonium Z",
  "kommonium-z--held":"Kommonium Z",
  "krabby-candy":"Krabby Candy",
  "lagging-tail":"Lagging Tail",
  "lansat-berry":"Lansat Berry",
  "lapras-candy":"Lapras Candy",
  "large-leek":"Large Leek",
  "latiasite":"Latiasite",
  "latiosite":"Latiosite",
  "lava-cookie":"Lava Cookie",
  "lax-incense":"Lax Incense",
  "lax-mint":"Lax Mint",
  "leaf-letter--eevee":"Leaf Letter",
  "leaf-letter--pikachu":"Leaf Letter",
  "leaf-stone":"Leaf Stone",
  "left-poke-ball":"Left Poké Ball",
  "leftovers":"Leftovers",
  "legendary-clue-1":"Legendary Clue 1",
  "legendary-clue-2":"Legendary Clue 2",
  "legendary-clue-3":"Legendary Clue 3",
  "legendary-clue-question":"Legendary Clue?",
  "lemonade":"Lemonade",
  "lens-case":"Lens Case",
  "leppa-berry":"Leppa Berry",
  "letter":"Letter",
  "level-ball":"Level Ball",
  "liberty-pass":"Liberty Pass",
  "lickitung-candy":"Lickitung Candy",
  "liechi-berry":"Liechi Berry",
  "life-orb":"Life Orb",
  "lift-key":"Lift Key",
  "light-ball":"Light Ball",
  "light-clay":"Light Clay",
  "light-stone":"Light Stone",
  "like-mail":"Like Mail",
  "lock-capsule":"Lock Capsule",
  "lone-earring":"Lone Earring",
  "lonely-mint":"Lonely Mint",
  "looker-ticket":"Looker Ticket",
  "loot-sack":"Loot Sack",
  "lopunnite":"Lopunnite",
  "lost-item":"Lost Item",
  "love-ball":"Love Ball",
  "love-sweet":"Love Sweet",
  "lucarionite":"Lucarionite",
  "luck-incense":"Luck Incense",
  "lucky-egg":"Lucky Egg",
  "lucky-punch":"Lucky Punch",
  "lum-berry":"Lum Berry",
  "luminous-moss":"Luminous Moss",
  "lumiose-galette":"Lumiose Galette",
  "lunalium-z--bag":"Lunalium Z",
  "lunalium-z--held":"Lunalium Z",
  "lunar-wing":"Lunar Wing",
  "lure":"Lure",
  "lure-ball":"Lure Ball",
  "lustrous-orb":"Lustrous Orb",
  "luxury-ball":"Luxury Ball",
  "lycanium-z--bag":"Lycanium Z",
  "lycanium-z--held":"Lycanium Z",
  "mach-bike":"Mach Bike",
  "machine-part":"Machine Part",
  "macho-brace":"Macho Brace",
  "machop-candy":"Machop Candy",
  "magikarp-candy":"Magikarp Candy",
  "magma-emblem":"Magma Emblem",
  "magma-stone":"Magma Stone",
  "magma-suit":"Magma Suit",
  "magmar-candy":"Magmar Candy",
  "magmarizer":"Magmarizer",
  "magnemite-candy":"Magnemite Candy",
  "magnet":"Magnet",
  "mago-berry":"Mago Berry",
  "magost-berry":"Magost Berry",
  "makeup-bag":"Makeup Bag",
  "manectite":"Manectite",
  "mankey-candy":"Mankey Candy",
  "maranga-berry":"Maranga Berry",
  "marble":"Marble",
  "mark-charm":"Mark Charm",
  "marshadium-z--bag":"Marshadium Z",
  "marshadium-z--held":"Marshadium Z",
  "master-ball":"Master Ball",
  "mawilite":"Mawilite",
  "max-elixir":"Max Elixir",
  "max-ether":"Max Ether",
  "max-honey":"Max Honey",
  "max-lure":"Max Lure",
  "max-mushrooms":"Max Mushrooms",
  "max-potion":"Max Potion",
  "max-repel":"Max Repel",
  "max-revive":"Max Revive",
  "meadow-plate":"Meadow Plate",
  "mech-mail":"Mech Mail",
  "medal-box":"Medal Box",
  "medichamite":"Medichamite",
  "medicine-pocket":"Medicine Pocket",
  "mega-anchor":"Mega Anchor",
  "mega-anklet":"Mega Anklet",
  "mega-bracelet":"Mega Bracelet",
  "mega-charm":"Mega Charm",
  "mega-cuff":"Mega Cuff",
  "mega-glasses":"Mega Glasses",
  "mega-glove":"Mega Glove",
  "mega-pendant":"Mega Pendant",
  "mega-ring":"Mega Ring",
  "mega-stickpin":"Mega Stickpin",
  "mega-tiara":"Mega Tiara",
  "meltan-candy":"Meltan Candy",
  "member-card":"Member Card",
  "mental-herb":"Mental Herb",
  "meowth-candy":"Meowth Candy",
  "metagrossite":"Metagrossite",
  "metal-coat":"Metal Coat",
  "metal-powder":"Metal Powder",
  "meteorite":"Meteorite",
  "meteorite--2":"Meteorite",
  "meteorite--3":"Meteorite",
  "meteorite--4":"Meteorite",
  "meteorite-shard":"Meteorite Shard",
  "metronome":"Metronome",
  "mew-candy":"Mew Candy",
  "mewnium-z--bag":"Mewnium Z",
  "mewnium-z--held":"Mewnium Z",
  "mewtwo-candy":"Mewtwo Candy",
  "mewtwonite-x":"Mewtwonite X",
  "mewtwonite-y":"Mewtwonite Y",
  "micle-berry":"Micle Berry",
  "mighty-candy":"Mighty Candy",
  "mighty-candy-l":"Mighty Candy L",
  "mighty-candy-xl":"Mighty Candy XL",
  "mild-mint":"Mild Mint",
  "mimikium-z--bag":"Mimikium Z",
  "mimikium-z--held":"Mimikium Z",
  "mind-plate":"Mind Plate",
  "miracle-seed":"Miracle Seed",
  "misty-seed":"Misty Seed",
  "mixed-mushrooms":"Mixed Mushrooms",
  "modest-mint":"Modest Mint",
  "moltres-candy":"Moltres Candy",
  "moomoo-cheese":"Moomoo Cheese",
  "moomoo-milk":"Moomoo Milk",
  "moon-ball":"Moon Ball",
  "moon-flute":"Moon Flute",
  "moon-stone":"Moon Stone",
  "mosaic-mail":"Mosaic Mail",
  "mr-mime-candy":"Mr. Mime Candy",
  "muscle-band":"Muscle Band",
  "muscle-wing":"Muscle Feather",
  "mystery-egg":"Mystery Egg",
  "mystic-water":"Mystic Water",
  "mysticticket":"MysticTicket",
  "n-lunarizer--merge":"N-Lunarizer",
  "n-lunarizer--split":"N-Lunarizer",
  "n-solarizer--merge":"N-Solarizer",
  "n-solarizer--split":"N-Solarizer",
  "naive-mint":"Naive Mint",
  "nanab-berry":"Nanab Berry",
  "naughty-mint":"Naughty Mint",
  "nest-ball":"Nest Ball",
  "net-ball":"Net Ball",
  "never-melt-ice":"Never-Melt Ice",
  "nidoran-f-candy":"Nidoran♀ Candy",
  "nidoran-m-candy":"Nidoran♂ Candy",
  "nomel-berry":"Nomel Berry",
  "normal-gem":"Normal Gem",
  "normalium-z--bag":"Normalium Z",
  "normalium-z--held":"Normalium Z",
  "nugget":"Nugget",
  "oaks-letter":"Oak’s Letter",
  "oaks-parcel":"Oak's Parcel",
  "occa-berry":"Occa Berry",
  "odd-incense":"Odd Incense",
  "odd-keystone":"Odd Keystone",
  "oddish-candy":"Oddish Candy",
  "old-amber":"Old Amber",
  "old-charm":"Old Charm",
  "old-gateau":"Old Gateau",
  "old-letter":"Old Letter",
  "old-rod":"Old Rod",
  "old-sea-map":"Old Sea Map",
  "omanyte-candy":"Omanyte Candy",
  "onix-candy":"Onix Candy",
  "oran-berry":"Oran Berry",
  "orange-mail":"Orange Mail",
  "orange-petal":"Orange Petal",
  "oval-charm":"Oval Charm",
  "oval-stone":"Oval Stone",
  "pack-of-potatoes":"Pack of Potatoes",
  "packaged-curry":"Packaged Curry",
  "pair-of-tickets":"Pair of Tickets",
  "pal-pad":"Pal Pad",
  "pamtre-berry":"Pamtre Berry",
  "paralyze-heal":"Paralyze Heal",
  "paras-candy":"Paras Candy",
  "parcel":"Parcel",
  "parcel--letsgo":"Parcel",
  "park-ball":"Park Ball",
  "pass":"Pass",
  "pass-orb":"Pass Orb",
  "passho-berry":"Passho Berry",
  "pasta":"Pasta",
  "payapa-berry":"Payapa Berry",
  "pearl":"Pearl",
  "pearl-string":"Pearl String",
  "pecha-berry":"Pecha Berry",
  "permit":"Permit",
  "persim-berry":"Persim Berry",
  "petaya-berry":"Petaya Berry",
  "pewter-crunchies":"Pewter Crunchies",
  "photo-album":"Photo Album",
  "pidgeotite":"Pidgeotite",
  "pidgey-candy":"Pidgey Candy",
  "pikachu-candy":"Pikachu Candy",
  "pikanium-z--bag":"Pikanium Z",
  "pikanium-z--held":"Pikanium Z",
  "pikashunium-z--bag":"Pikashunium Z",
  "pikashunium-z--held":"Pikashunium Z",
  "pinap-berry":"Pinap Berry",
  "pink-apricorn":"Pink Apricorn",
  "pink-nectar":"Pink Nectar",
  "pink-petal":"Pink Petal",
  "pink-scarf":"Pink Scarf",
  "pinsir-candy":"Pinsir Candy",
  "pinsirite":"Pinsirite",
  "pixie-plate":"Pixie Plate",
  "plasma-card":"Plasma Card",
  "plume-fossil":"Plume Fossil",
  "poffin-case":"Poffin Case",
  "point-card":"Point Card",
  "poison-barb":"Poison Barb",
  "poison-gem":"Poison Gem",
  "poison-memory":"Poison Memory",
  "poisonium-z--bag":"Poisonium Z",
  "poisonium-z--held":"Poisonium Z",
  "poke-ball":"Poké Ball",
  "poke-doll":"Poké Doll",
  "poke-flute":"Poké Flute",
  "poke-radar":"Poké Radar",
  "poke-toy":"Poké Toy",
  "pokeblock-case":"Pokéblock Case",
  "pokeblock-kit":"Pokéblock Kit",
  "pokemon-box":"Pokémon Box Link",
  "pokemon-box-link":"Pokémon Box Link",
  "polished-mud-ball":"Polished Mud Ball",
  "poliwag-candy":"Poliwag Candy",
  "pomeg-berry":"Pomeg Berry",
  "ponyta-candy":"Ponyta Candy",
  "porygon-candy":"Porygon Candy",
  "potion":"Potion",
  "powder-jar":"Powder Jar",
  "power-anklet":"Power Anklet",
  "power-band":"Power Band",
  "power-belt":"Power Belt",
  "power-bracer":"Power Bracer",
  "power-herb":"Power Herb",
  "power-lens":"Power Lens",
  "power-plant-pass":"Power Plant Pass",
  "power-up-pocket":"Power-Up Pocket",
  "power-weight":"Power Weight",
  "pp-max":"PP Max",
  "pp-up":"PP Up",
  "precooked-burger":"Precooked Burger",
  "premier-ball":"Premier Ball",
  "pretty-wing":"Pretty Feather",
  "primarium-z--bag":"Primarium Z",
  "primarium-z--held":"Primarium Z",
  "prism-scale":"Prism Scale",
  "prison-bottle":"Prison Bottle",
  "professors-mask":"Professor’s Mask",
  "profs-letter":"Prof’s Letter",
  "prop-case":"Prop Case",
  "protective-pads":"Protective Pads",
  "protector":"Protector",
  "protein":"Protein",
  "psychic-gem":"Psychic Gem",
  "psychic-memory":"Psychic Memory",
  "psychic-seed":"Psychic Seed",
  "psychium-z--bag":"Psychium Z",
  "psychium-z--held":"Psychium Z",
  "psyduck-candy":"Psyduck Candy",
  "pungent-root":"Pungent Root",
  "pure-incense":"Pure Incense",
  "purple-nectar":"Purple Nectar",
  "purple-petal":"Purple Petal",
  "qualot-berry":"Qualot Berry",
  "quick-ball":"Quick Ball",
  "quick-candy":"Quick Candy",
  "quick-candy-l":"Quick Candy L",
  "quick-candy-xl":"Quick Candy XL",
  "quick-claw":"Quick Claw",
  "quick-powder":"Quick Powder",
  "quiet-mint":"Quiet Mint",
  "rabuta-berry":"Rabuta Berry",
  "radiant-petal":"Radiant Petal",
  "rage-candy-bar":"Rage Candy Bar",
  "rainbow-flower":"Rainbow Flower",
  "rainbow-pass":"Rainbow Pass",
  "rainbow-wing":"Rainbow Wing",
  "rare-bone":"Rare Bone",
  "rare-candy":"Rare Candy",
  "rash-mint":"Rash Mint",
  "rattata-candy":"Rattata Candy",
  "rawst-berry":"Rawst Berry",
  "razor-claw":"Razor Claw",
  "razor-fang":"Razor Fang",
  "razz-berry":"Razz Berry",
  "reaper-cloth":"Reaper Cloth",
  "red-apricorn":"Red Apricorn",
  "red-card":"Red Card",
  "red-chain":"Red Chain",
  "red-flute":"Red Flute",
  "red-nectar":"Red Nectar",
  "red-orb":"Red Orb",
  "red-petal":"Red Petal",
  "red-scale":"Red Scale",
  "red-scarf":"Red Scarf",
  "red-shard":"Red Shard",
  "reins-of-unity":"Reins of Unity",
  "reins-of-unity--merge":"Reins of Unity",
  "reins-of-unity--split":"Reins of Unity",
  "relaxed-mint":"Relaxed Mint",
  "relic-band":"Relic Band",
  "relic-copper":"Relic Copper",
  "relic-crown":"Relic Crown",
  "relic-gold":"Relic Gold",
  "relic-silver":"Relic Silver",
  "relic-statue":"Relic Statue",
  "relic-vase":"Relic Vase",
  "repeat-ball":"Repeat Ball",
  "repel":"Repel",
  "reply-mail":"Reply Mail",
  "reset-urge":"Reset Urge",
  "resist-wing":"Resist Feather",
  "retro-mail":"Retro Mail",
  "reveal-glass":"Reveal Glass",
  "revival-herb":"Revival Herb",
  "revive":"Revive",
  "rhyhorn-candy":"Rhyhorn Candy",
  "ribbon-sweet":"Ribbon Sweet",
  "rich-mulch":"Rich Mulch",
  "ride-pager":"Ride Pager",
  "rindo-berry":"Rindo Berry",
  "ring-target":"Ring Target",
  "rm-1-key":"Rm. 1 Key",
  "rm-2-key":"Rm. 2 Key",
  "rm-4-key":"Rm. 4 Key",
  "rm-6-key":"Rm. 6 Key",
  "rock-gem":"Rock Gem",
  "rock-incense":"Rock Incense",
  "rock-memory":"Rock Memory",
  "rockium-z--bag":"Rockium Z",
  "rockium-z--held":"Rockium Z",
  "rocky-helmet":"Rocky Helmet",
  "roller-skates":"Roller Skates",
  "room-service":"Room Service",
  "root-fossil":"Root Fossil",
  "rose-incense":"Rose Incense",
  "roseli-berry":"Roseli Berry",
  "roto-bargain":"Roto Bargain",
  "roto-boost":"Roto Boost",
  "roto-catch":"Roto Catch",
  "roto-encounter":"Roto Encounter",
  "roto-exp-points":"Roto Exp. Points",
  "roto-friendship":"Roto Friendship",
  "roto-hatch":"Roto Hatch",
  "roto-hp-restore":"Roto HP Restore",
  "roto-pp-restore":"Roto PP Restore",
  "roto-prize-money":"Roto Prize Money",
  "roto-stealth":"Roto Stealth",
  "rotom-bike":"Rotom Bike",
  "rotom-bike--glistening-black":"Rotom Bike",
  "rotom-bike--sparkling-white":"Rotom Bike",
  "rotom-bike--water-mode":"Rotom Bike",
  "rotom-catalog":"Rotom Catalog",
  "rowap-berry":"Rowap Berry",
  "rsvp-mail":"RSVP Mail",
  "ruby":"Ruby",
  "rule-book":"Rule Book",
  "rusted-shield":"Rusted Shield",
  "rusted-sword":"Rusted Sword",
  "sablenite":"Sablenite",
  "sachet":"Sachet",
  "sacred-ash":"Sacred Ash",
  "safari-ball":"Safari Ball",
  "safety-goggles":"Safety Goggles",
  "sail-fossil":"Sail Fossil",
  "salac-berry":"Salac Berry",
  "salad-mix":"Salad Mix",
  "salamencite":"Salamencite",
  "sandshrew-candy":"Sandshrew Candy",
  "sapphire":"Sapphire",
  "sassy-mint":"Sassy Mint",
  "sausages":"Sausages",
  "scanner":"Scanner",
  "sceptilite":"Sceptilite",
  "scizorite":"Scizorite",
  "scope-lens":"Scope Lens",
  "scyther-candy":"Scyther Candy",
  "sea-incense":"Sea Incense",
  "seal-bag":"Seal Bag",
  "seal-case":"Seal Case",
  "secret-key":"Secret Key",
  "secret-key--letsgo":"Secret Key",
  "secret-potion":"Secret Potion",
  "seel-candy":"Seel Candy",
  "serious-mint":"Serious Mint",
  "shaderoot-carrot":"Shaderoot Carrot",
  "shadow-mail":"Shadow Mail",
  "shalour-sable":"Shalour Sable",
  "sharp-beak":"Sharp Beak",
  "sharpedonite":"Sharpedonite",
  "shed-shell":"Shed Shell",
  "shell-bell":"Shell Bell",
  "shellder-candy":"Shellder Candy",
  "shiny-charm":"Shiny Charm",
  "shiny-stone":"Shiny Stone",
  "shoal-salt":"Shoal Salt",
  "shoal-shell":"Shoal Shell",
  "shock-drive":"Shock Drive",
  "shuca-berry":"Shuca Berry",
  "silk-scarf":"Silk Scarf",
  "silph-scope":"Silph Scope",
  "silver-leaf":"Silver Leaf",
  "silver-nanab-berry":"Silver Nanab Berry",
  "silver-pinap-berry":"Silver Pinap Berry",
  "silver-powder":"Silver Powder",
  "silver-razz-berry":"Silver Razz Berry",
  "silver-wing":"Silver Wing",
  "sitrus-berry":"Sitrus Berry",
  "skull-fossil":"Skull Fossil",
  "sky-plate":"Sky Plate",
  "slowbronite":"Slowbronite",
  "slowpoke-candy":"Slowpoke Candy",
  "slowpoke-tail":"Slowpoke Tail",
  "small-bouquet":"Small Bouquet",
  "smart-candy":"Smart Candy",
  "smart-candy-l":"Smart Candy L",
  "smart-candy-xl":"Smart Candy XL",
  "smoke-ball":"Smoke Ball",
  "smoke-poke-tail":"Smoke-Poke Tail",
  "smooth-rock":"Smooth Rock",
  "snorlax-candy":"Snorlax Candy",
  "snorlium-z--bag":"Snorlium Z",
  "snorlium-z--held":"Snorlium Z",
  "snow-mail":"Snow Mail",
  "snowball":"Snowball",
  "soda-pop":"Soda Pop",
  "soft-sand":"Soft Sand",
  "solganium-z--bag":"Solganium Z",
  "solganium-z--held":"Solganium Z",
  "sonias-book":"Sonia’s Book",
  "soot-sack":"Soot Sack",
  "soothe-bell":"Soothe Bell",
  "soul-dew":"Soul Dew",
  "space-mail":"Space Mail",
  "sparkling-stone":"Sparkling Stone",
  "spearow-candy":"Spearow Candy",
  "spell-tag":"Spell Tag",
  "spelon-berry":"Spelon Berry",
  "spice-mix":"Spice Mix",
  "splash-plate":"Splash Plate",
  "spooky-plate":"Spooky Plate",
  "sport-ball":"Sport Ball",
  "sprayduck":"Sprayduck",
  "sprinklotad":"Sprinklotad",
  "squirt-bottle":"Squirt Bottle",
  "squirtle-candy":"Squirtle Candy",
  "ss-ticket":"S.S. Ticket",
  "ss-ticket--hoenn":"S.S. Ticket",
  "ss-ticket--letsgo":"S.S. Ticket",
  "stable-mulch":"Stable Mulch",
  "star-piece":"Star Piece",
  "star-sweet":"Star Sweet",
  "stardust":"Stardust",
  "starf-berry":"Starf Berry",
  "staryu-candy":"Staryu Candy",
  "steel-gem":"Steel Gem",
  "steel-mail":"Steel Mail",
  "steel-memory":"Steel Memory",
  "steelium-z--bag":"Steelium Z",
  "steelium-z--held":"Steelium Z",
  "steelixite":"Steelixite",
  "stick":"Leek",
  "sticky-barb":"Sticky Barb",
  "stone-plate":"Stone Plate",
  "storage-key":"Storage Key",
  "storage-key--galactic-warehouse":"Storage Key",
  "storage-key--sea-mauville":"Storage Key",
  "strange-souvenir":"Strange Souvenir",
  "strawberry-sweet":"Strawberry Sweet",
  "stretchy-spring":"Stretchy Spring",
  "style-card":"Style Card",
  "suite-key":"Suite Key",
  "sun-flute":"Sun Flute",
  "sun-stone":"Sun Stone",
  "super-lure":"Super Lure",
  "super-potion":"Super Potion",
  "super-repel":"Super Repel",
  "super-rod":"Super Rod",
  "surge-badge":"Surge Badge",
  "surprise-mulch":"Surprise Mulch",
  "swampertite":"Swampertite",
  "sweet-apple":"Sweet Apple",
  "sweet-heart":"Sweet Heart",
  "swift-wing":"Swift Feather",
  "tamato-berry":"Tamato Berry",
  "tanga-berry":"Tanga Berry",
  "tangela-candy":"Tangela Candy",
  "tapunium-z--bag":"Tapunium Z",
  "tapunium-z--held":"Tapunium Z",
  "tart-apple":"Tart Apple",
  "tauros-candy":"Tauros Candy",
  "tea":"Tea",
  "teachy-tv":"Teachy TV",
  "tentacool-candy":"Tentacool Candy",
  "terrain-extender":"Terrain Extender",
  "thanks-mail":"Thanks Mail",
  "thick-club":"Thick Club",
  "throat-spray":"Throat Spray",
  "thunder-stone":"Thunder Stone",
  "tidal-bell":"Tidal Bell",
  "timer-ball":"Timer Ball",
  "timid-mint":"Timid Mint",
  "tin-of-beans":"Tin of Beans",
  "tiny-mushroom":"Tiny Mushroom",
  "tm-case":"TM Case",
  "tm00":"TM00",
  "tm01":"TM01",
  "tm02":"TM02",
  "tm03":"TM03",
  "tm04":"TM04",
  "tm05":"TM05",
  "tm06":"TM06",
  "tm07":"TM07",
  "tm08":"TM08",
  "tm09":"TM09",
  "tm10":"TM10",
  "tm100":"TM100",
  "tm11":"TM11",
  "tm12":"TM12",
  "tm13":"TM13",
  "tm14":"TM14",
  "tm15":"TM15",
  "tm16":"TM16",
  "tm17":"TM17",
  "tm18":"TM18",
  "tm19":"TM19",
  "tm20":"TM20",
  "tm21":"TM21",
  "tm22":"TM22",
  "tm23":"TM23",
  "tm24":"TM24",
  "tm25":"TM25",
  "tm26":"TM26",
  "tm27":"TM27",
  "tm28":"TM28",
  "tm29":"TM29",
  "tm30":"TM30",
  "tm31":"TM31",
  "tm32":"TM32",
  "tm33":"TM33",
  "tm34":"TM34",
  "tm35":"TM35",
  "tm36":"TM36",
  "tm37":"TM37",
  "tm38":"TM38",
  "tm39":"TM39",
  "tm40":"TM40",
  "tm41":"TM41",
  "tm42":"TM42",
  "tm43":"TM43",
  "tm44":"TM44",
  "tm45":"TM45",
  "tm46":"TM46",
  "tm47":"TM47",
  "tm48":"TM48",
  "tm49":"TM49",
  "tm50":"TM50",
  "tm51":"TM51",
  "tm52":"TM52",
  "tm53":"TM53",
  "tm54":"TM54",
  "tm55":"TM55",
  "tm56":"TM56",
  "tm57":"TM57",
  "tm58":"TM58",
  "tm59":"TM59",
  "tm60":"TM60",
  "tm61":"TM61",
  "tm62":"TM62",
  "tm63":"TM63",
  "tm64":"TM64",
  "tm65":"TM65",
  "tm66":"TM66",
  "tm67":"TM67",
  "tm68":"TM68",
  "tm69":"TM69",
  "tm70":"TM70",
  "tm71":"TM71",
  "tm72":"TM72",
  "tm73":"TM73",
  "tm74":"TM74",
  "tm75":"TM75",
  "tm76":"TM76",
  "tm77":"TM77",
  "tm78":"TM78",
  "tm79":"TM79",
  "tm80":"TM80",
  "tm81":"TM81",
  "tm82":"TM82",
  "tm83":"TM83",
  "tm84":"TM84",
  "tm85":"TM85",
  "tm86":"TM86",
  "tm87":"TM87",
  "tm88":"TM88",
  "tm89":"TM89",
  "tm90":"TM90",
  "tm91":"TM91",
  "tm92":"TM92",
  "tm93":"TM93",
  "tm94":"TM94",
  "tm95":"TM95",
  "tm96":"TM96",
  "tm97":"TM97",
  "tm98":"TM98",
  "tm99":"TM99",
  "tmv-pass":"TMV Pass",
  "tough-candy":"Tough Candy",
  "tough-candy-l":"Tough Candy L",
  "tough-candy-xl":"Tough Candy XL",
  "town-map":"Town Map",
  "toxic-orb":"Toxic Orb",
  "toxic-plate":"Toxic Plate",
  "tr00":"TR00",
  "tr01":"TR01",
  "tr02":"TR02",
  "tr03":"TR03",
  "tr04":"TR04",
  "tr05":"TR05",
  "tr06":"TR06",
  "tr07":"TR07",
  "tr08":"TR08",
  "tr09":"TR09",
  "tr10":"TR10",
  "tr11":"TR11",
  "tr12":"TR12",
  "tr13":"TR13",
  "tr14":"TR14",
  "tr15":"TR15",
  "tr16":"TR16",
  "tr17":"TR17",
  "tr18":"TR18",
  "tr19":"TR19",
  "tr20":"TR20",
  "tr21":"TR21",
  "tr22":"TR22",
  "tr23":"TR23",
  "tr24":"TR24",
  "tr25":"TR25",
  "tr26":"TR26",
  "tr27":"TR27",
  "tr28":"TR28",
  "tr29":"TR29",
  "tr30":"TR30",
  "tr31":"TR31",
  "tr32":"TR32",
  "tr33":"TR33",
  "tr34":"TR34",
  "tr35":"TR35",
  "tr36":"TR36",
  "tr37":"TR37",
  "tr38":"TR38",
  "tr39":"TR39",
  "tr40":"TR40",
  "tr41":"TR41",
  "tr42":"TR42",
  "tr43":"TR43",
  "tr44":"TR44",
  "tr45":"TR45",
  "tr46":"TR46",
  "tr47":"TR47",
  "tr48":"TR48",
  "tr49":"TR49",
  "tr50":"TR50",
  "tr51":"TR51",
  "tr52":"TR52",
  "tr53":"TR53",
  "tr54":"TR54",
  "tr55":"TR55",
  "tr56":"TR56",
  "tr57":"TR57",
  "tr58":"TR58",
  "tr59":"TR59",
  "tr60":"TR60",
  "tr61":"TR61",
  "tr62":"TR62",
  "tr63":"TR63",
  "tr64":"TR64",
  "tr65":"TR65",
  "tr66":"TR66",
  "tr67":"TR67",
  "tr68":"TR68",
  "tr69":"TR69",
  "tr70":"TR70",
  "tr71":"TR71",
  "tr72":"TR72",
  "tr73":"TR73",
  "tr74":"TR74",
  "tr75":"TR75",
  "tr76":"TR76",
  "tr77":"TR77",
  "tr78":"TR78",
  "tr79":"TR79",
  "tr80":"TR80",
  "tr81":"TR81",
  "tr82":"TR82",
  "tr83":"TR83",
  "tr84":"TR84",
  "tr85":"TR85",
  "tr86":"TR86",
  "tr87":"TR87",
  "tr88":"TR88",
  "tr89":"TR89",
  "tr90":"TR90",
  "tr91":"TR91",
  "tr92":"TR92",
  "tr93":"TR93",
  "tr94":"TR94",
  "tr95":"TR95",
  "tr96":"TR96",
  "tr97":"TR97",
  "tr98":"TR98",
  "tr99":"TR99",
  "travel-trunk":"Travel Trunk",
  "tri-pass":"Tri-Pass",
  "tropic-mail":"Tropic Mail",
  "tropical-shell":"Tropical Shell",
  "tunnel-mail":"Tunnel Mail",
  "twisted-spoon":"Twisted Spoon",
  "tyranitarite":"Tyranitarite",
  "ultra-ball":"Ultra Ball",
  "ultranecrozium-z--bag":"Ultranecrozium Z",
  "ultranecrozium-z--held":"Ultranecrozium Z",
  "unown-report":"Unown Report",
  "up-grade":"Upgrade",
  "utility-umbrella":"Utility Umbrella",
  "venonat-candy":"Venonat Candy",
  "venusaurite":"Venusaurite",
  "voltorb-candy":"Voltorb Candy",
  "vs-recorder":"Vs. Recorder",
  "vs-seeker":"Vs. Seeker",
  "vulpix-candy":"Vulpix Candy",
  "wacan-berry":"Wacan Berry",
  "wailmer-pail":"Wailmer Pail",
  "water-gem":"Water Gem",
  "water-memory":"Water Memory",
  "water-stone":"Water Stone",
  "waterium-z--bag":"Waterium Z",
  "waterium-z--held":"Waterium Z",
  "watmel-berry":"Watmel Berry",
  "wave-incense":"Wave Incense",
  "wave-mail":"Wave Mail",
  "weakness-policy":"Weakness Policy",
  "weedle-candy":"Weedle Candy",
  "wepear-berry":"Wepear Berry",
  "whipped-dream":"Whipped Dream",
  "white-apricorn":"White Apricorn",
  "white-flute":"White Flute",
  "white-herb":"White Herb",
  "white-mane-hair":"White Mane Hair",
  "wide-lens":"Wide Lens",
  "wiki-berry":"Wiki Berry",
  "wise-glasses":"Wise Glasses",
  "wishing-chip":"Wishing Chip",
  "wishing-piece":"Wishing Piece",
  "wishing-star":"Wishing Star",
  "wood-mail":"Wood Mail",
  "wooden-crown":"Wooden Crown",
  "works-key":"Works Key",
  "x-accuracy":"X Accuracy",
  "x-accuracy-2":"X Accuracy 2",
  "x-accuracy-3":"X Accuracy 3",
  "x-accuracy-6":"X Accuracy 6",
  "x-attack":"X Attack",
  "x-attack-2":"X Attack 2",
  "x-attack-3":"X Attack 3",
  "x-attack-6":"X Attack 6",
  "x-defense":"X Defense",
  "x-defense-2":"X Defense 2",
  "x-defense-3":"X Defense 3",
  "x-defense-6":"X Defense 6",
  "x-sp-atk":"X Sp. Atk",
  "x-sp-atk-2":"X Sp. Atk 2",
  "x-sp-atk-3":"X Sp. Atk 3",
  "x-sp-atk-6":"X Sp. Atk 6",
  "x-sp-def":"X Sp. Def",
  "x-sp-def-2":"X Sp. Def 2",
  "x-sp-def-3":"X Sp. Def 3",
  "x-sp-def-6":"X Sp. Def 6",
  "x-speed":"X Speed",
  "x-speed-2":"X Speed 2",
  "x-speed-3":"X Speed 3",
  "x-speed-6":"X Speed 6",
  "xtransceiver":"Xtransceiver",
  "xtransceiver--red":"Xtransceiver",
  "xtransceiver--yellow":"Xtransceiver",
  "yache-berry":"Yache Berry",
  "yellow-apricorn":"Yellow Apricorn",
  "yellow-flute":"Yellow Flute",
  "yellow-nectar":"Yellow Nectar",
  "yellow-petal":"Yellow Petal",
  "yellow-scarf":"Yellow Scarf",
  "yellow-shard":"Yellow Shard",
  "z-power-ring":"Z-Power Ring",
  "z-ring":"Z-Ring",
  "zap-plate":"Zap Plate",
  "zapdos-candy":"Zapdos Candy",
  "zinc":"Zinc",
  "zoom-lens":"Zoom Lens",
  "zubat-candy":"Zubat Candy",
  "zygarde-cube":"Zygarde Cube"
};

const POKEMON_TYPES_MANUAL = {
  'purrloin':['Dark'],
  'liepard':['Dark'],
  'wailord':['Water'],
  'vileplume':['Grass','Poison'],
  'pikachu':['Electric'],
  'ducklett':['Water','Flying'],
  'tranquill':['Normal','Flying'],
  'tynamo':['Electric'],
  'cryogonal':['Ice'],
  'piloswine':['Ice','Ground'],
  'jynx':['Ice','Psychic'],
  'medicham':['Fighting','Psychic'],
  'gallade':['Psychic','Fighting'],
  'emolga':['Electric','Flying'],
  'magneton':['Electric','Steel'],
  'heliolisk':['Electric','Normal'],
  'krokorok':['Ground','Dark'],
  'metapod':['Bug'],
  'pidgey':['Normal','Flying'],
  'azumarill':['Water','Fairy'],
  'oddish':['Grass','Poison'],
  'vanillish':['Ice'],
  'haunter':['Ghost','Poison'],
  'wishiwashi':['Water'],
  'petilil':['Grass'],
  'honchkrow':['Dark','Flying'],
  'slowking':['Water','Psychic'],
  'buneary':['Normal'],
  'kleavor':['Bug','Rock'],
  'omastar':['Rock','Water'],
  'magnezone':['Electric','Steel'],
  'corboss':['Dark','Flying'],
  'roigada':['Water','Psychic'],
  'laporeille':['Normal'],
  'amonistar':['Rock','Water'],
  'couaneton':['Water','Flying'],
  'colombeau':['Normal','Flying'],
  'chacripan':['Dark'],
  'escroco':['Ground','Dark'],
  'cochignon':['Ice','Ground'],
  'hexagel':['Ice'],
  'charmina':['Fighting','Psychic'],
  'gallame':['Psychic','Fighting'],
  'iguolta':['Electric','Normal'],
  'magneton':['Electric','Steel'],
};

const MANUAL_MOVE_DATA = {
  'sludge-bomb': { nameFr: 'Bomb-Beurk', nameEn: 'sludge-bomb', type: 'poison', damageClass: 'special', power: 90, accuracy: 100, accuracyKnown: true },
  'aqua-tail': { nameFr: 'Hydroqueue', nameEn: 'aqua-tail', type: 'water', damageClass: 'physical', power: 90, accuracy: 90, accuracyKnown: true },
  'sonic-boom': { nameFr: 'Sonicboom', nameEn: 'sonic-boom', type: 'normal', damageClass: 'special', power: 1, accuracy: 90, accuracyKnown: true },
  'ancient-power': { nameFr: 'Pouv.Antique', nameEn: 'ancient-power', type: 'rock', damageClass: 'special', power: 60, accuracy: 100, accuracyKnown: true },
  'defend-order': { nameFr: 'Appel Défens', nameEn: 'defend-order', type: 'bug', damageClass: 'status', power: null, accuracy: null, accuracyKnown: true },
  'attack-order': { nameFr: 'Appel Attak', nameEn: 'attack-order', type: 'bug', damageClass: 'physical', power: 90, accuracy: 100, accuracyKnown: true },
  'heal-order': { nameFr: 'Appel Soins', nameEn: 'heal-order', type: 'bug', damageClass: 'status', power: null, accuracy: null, accuracyKnown: true },
  'energy-ball': { nameFr: 'Éco-Sphère', nameEn: 'energy-ball', type: 'grass', damageClass: 'special', power: 90, accuracy: 100, accuracyKnown: true },
  'uproar': { nameFr: 'Brouhaha', nameEn: 'uproar', type: 'normal', damageClass: 'special', power: 90, accuracy: 100, accuracyKnown: true },
  'thief': { nameFr: 'Larcin', nameEn: 'thief', type: 'dark', damageClass: 'physical', power: 60, accuracy: 100, accuracyKnown: true },
  'psychic': { nameFr: 'Psyko', nameEn: 'psychic', type: 'psychic', damageClass: 'special', power: 90, accuracy: 100, accuracyKnown: true },
  'hidden-power': { nameFr: 'Puissance Cachée', nameEn: 'hidden-power', type: 'normal', damageClass: 'special', power: 60, accuracy: 100, accuracyKnown: true },
  'extreme-speed': { nameFr: 'Vit.Extrême', nameEn: 'extreme-speed', type: 'normal', damageClass: 'physical', power: 80, accuracy: 100, accuracyKnown: true },
};

function titleCaseFrench(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/(^|[\s'’\-])([a-zàâçéèêëîïôûùüÿœæ])/g, (_, p1, p2) => `${p1}${p2.toUpperCase()}`);
}

function getDictionaryValue(dict, candidates) {
  for (const candidate of candidates) {
    const key = String(candidate || '').toLowerCase();
    if (key && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  }
  return '';
}

function compactLookupKey(value) {
  return normalizeLookupKey(value).replace(/\s+/g, '');
}

function levenshteinDistance(a, b) {
  const s = String(a || '');
  const t = String(b || '');
  const m = s.length;
  const n = t.length;
  if (!m) return n;
  if (!n) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function findApproxDictionaryKey(identifier, dict) {
  const entries = Object.entries(dict || {});
  if (!entries.length) return '';
  const rawKeys = buildLooseLookupKeys(identifier);
  const compactKeys = uniqueNonEmpty(rawKeys.map(compactLookupKey));
  for (const [key, value] of entries) {
    const entryKeys = uniqueNonEmpty([
      ...buildLooseLookupKeys(key),
      ...buildLooseLookupKeys(value),
    ]);
    if (entryKeys.some(entryKey => rawKeys.includes(entryKey))) return key;
  }
  let best = '';
  let bestScore = Infinity;
  for (const [key, value] of entries) {
    const entryCompacts = uniqueNonEmpty([
      compactLookupKey(key),
      compactLookupKey(value),
    ]);
    for (const input of compactKeys) {
      for (const entry of entryCompacts) {
        if (!input || !entry) continue;
        if (input === entry) return key;
        if (input.includes(entry) || entry.includes(input)) {
          const score = Math.abs(input.length - entry.length);
          if (score < bestScore) {
            bestScore = score;
            best = key;
          }
          continue;
        }
        const distance = levenshteinDistance(input, entry);
        const threshold = Math.max(2, Math.floor(Math.max(input.length, entry.length) * 0.28));
        if (distance <= threshold && distance < bestScore) {
          bestScore = distance;
          best = key;
        }
      }
    }
  }
  return best;
}

let EMBEDDED_POKEMON_FR_MAP = null;
let SUPPLEMENTAL_SPECIES_MAPS = null;
let ROM_RUNTIME_LOOKUPS = {
  moves: new Map(),
  abilities: new Map(),
  items: new Map(),
  species: new Map(),
  meta: null,
};

function resetRomRuntimeLookups() {
  translationCache.pokemonNamesPromise = null;
  translationCache.pokemonDisplayPromise = null;
  ROM_RUNTIME_LOOKUPS = {
    moves: new Map(),
    abilities: new Map(),
    items: new Map(),
    species: new Map(),
    trainerOverrides: new Map(),
    trainerTypes: new Map(),
    meta: null,
  };
}

function getSupplementalSpeciesMaps() {
  const speciesEntries = Object.values(window.SV_BROWSER_SUPPORT_DATA?.speciesEntries || {});
  if (SUPPLEMENTAL_SPECIES_MAPS && (SUPPLEMENTAL_SPECIES_MAPS.byId.size || !speciesEntries.length)) {
    return SUPPLEMENTAL_SPECIES_MAPS;
  }
  const byId = new Map();
  const entryByAnyKey = new Map();
  speciesEntries.forEach(entry => {
    const id = Number(entry?.id || 0);
    const nameEn = formatPokemonDisplayName(entry?.nameEn || '');
    const nameFr = titleCaseFrench(entry?.nameFr || '');
    const slug = slugify(nameEn || entry?.nameEn || '');
    if (!nameEn || !nameFr) return;
    const record = { id, slug, nameEn, nameFr };
    if (id > 0) byId.set(String(id), record);
    uniqueNonEmpty([
      id > 0 ? String(id) : '',
      slug,
      nameEn,
      nameFr,
      normalizeLookupKey(nameEn),
      normalizeLookupKey(nameFr),
      compactLookupKey(nameEn),
      compactLookupKey(nameFr),
      slugify(nameFr),
    ]).forEach(key => {
      const normalizedKey = String(key || '').toLowerCase();
      if (normalizedKey && !entryByAnyKey.has(normalizedKey)) entryByAnyKey.set(normalizedKey, record);
    });
  });
  SUPPLEMENTAL_SPECIES_MAPS = { byId, entryByAnyKey };
  return SUPPLEMENTAL_SPECIES_MAPS;
}

function findSupplementalSpeciesEntry(identifier) {
  const maps = getSupplementalSpeciesMaps();
  const candidates = uniqueNonEmpty([
    String(identifier || ''),
    normalizeLookupKey(identifier),
    compactLookupKey(identifier),
    slugify(identifier),
  ]).map(value => String(value || '').toLowerCase());
  for (const candidate of candidates) {
    if (maps.byId.has(candidate)) return maps.byId.get(candidate);
    if (maps.entryByAnyKey.has(candidate)) return maps.entryByAnyKey.get(candidate);
  }
  return null;
}

function normalizeRuntimeSpeciesEntry(entry = {}) {
  const rawId = Number(entry?.id || entry?.speciesId || 0);
  const speciesId = Number.isFinite(rawId) && rawId > 0 ? rawId : null;
  const supplemental = speciesId ? findSupplementalSpeciesEntry(String(speciesId)) : null;
  let localPokemon = null;
  for (const candidate of uniqueNonEmpty([
    speciesId ? String(speciesId) : '',
    entry?.slug,
    entry?.nameEn,
    entry?.nameFr,
    entry?.name,
    supplemental?.slug,
    supplemental?.nameEn,
    supplemental?.nameFr,
  ])) {
    localPokemon = getLocalPokemonEntry(candidate);
    if (localPokemon) break;
  }
  const nameEn = formatPokemonDisplayName(
    supplemental?.nameEn
    || localPokemon?.nameEn
    || getManualEnglishPokemonName(entry?.nameFr || entry?.name || entry?.nameEn || '')
    || entry?.nameEn
    || entry?.name
    || entry?.nameFr
    || ''
  );
  const slug = localPokemon?.slug
    || supplemental?.slug
    || slugify(nameEn || entry?.nameEn || entry?.name || entry?.nameFr || '');
  const localFrench = localPokemon?.nameFr && normalizeLookupKey(localPokemon.nameFr) !== normalizeLookupKey(nameEn)
    ? localPokemon.nameFr
    : '';
  const nameFr = titleCaseFrench(
    supplemental?.nameFr
    || localFrench
    || getManualFrenchPokemonName(slug)
    || getManualFrenchPokemonName(nameEn)
    || entry?.nameFr
    || entry?.name
    || nameEn
  );
  return {
    ...entry,
    id: speciesId || entry?.id || entry?.speciesId || null,
    slug,
    nameEn,
    nameFr,
    name: nameEn || nameFr || entry?.name || '',
  };
}

function getNormalizedRomRuntimeSpeciesEntries() {
  const uniqueEntries = [];
  const seen = new Set();
  for (const entry of ROM_RUNTIME_LOOKUPS.species.values()) {
    const normalizedEntry = normalizeRuntimeSpeciesEntry(entry);
    const key = [
      normalizedEntry?.id || '',
      normalizedEntry?.slug || '',
      normalizeLookupKey(normalizedEntry?.nameEn || ''),
      normalizeLookupKey(normalizedEntry?.nameFr || ''),
    ].join('::');
    if (!seen.has(key)) {
      seen.add(key);
      uniqueEntries.push(normalizedEntry);
    }
  }
  return uniqueEntries;
}

function applySupplementalTrainerOverrides(lookups = {}, meta = null) {
  if (meta) ROM_RUNTIME_LOOKUPS.meta = { ...(ROM_RUNTIME_LOOKUPS.meta || {}), ...meta };
  const trainerOverrides = lookups?.trainerNameOverrides || {};
  Object.entries(trainerOverrides).forEach(([trainerId, entry]) => {
    if (trainerId != null && entry) {
      const normalizedEntry = { ...entry };
      const normalizedClassEn = normalizeTrainerClassKey(
        normalizedEntry?.trainerClassEn ||
        normalizedEntry?.trainerClassFr ||
        '',
      );
      if (normalizedClassEn) {
        normalizedEntry.trainerClassEn = normalizedClassEn;
        if (!normalizedEntry.trainerClassFr) {
          normalizedEntry.trainerClassFr = TRAINER_CLASS_FR[normalizedClassEn] || normalizedClassEn;
        }
      } else {
        normalizedEntry.trainerClassEn = cleanTrainerName(normalizedEntry?.trainerClassEn || '');
        normalizedEntry.trainerClassFr = cleanTrainerName(normalizedEntry?.trainerClassFr || '');
      }
      ROM_RUNTIME_LOOKUPS.trainerOverrides.set(String(trainerId), normalizedEntry);
    }
  });
  const trainerTypes = lookups?.trainerTypes || {};
  Object.entries(trainerTypes).forEach(([typeId, entry]) => {
    if (typeId != null && entry) {
      ROM_RUNTIME_LOOKUPS.trainerTypes.set(String(typeId), entry);
    }
  });
}

function setRomRuntimeLookups(lookups, meta = null) {
  resetRomRuntimeLookups();
  ROM_RUNTIME_LOOKUPS.meta = meta || null;
  const moveEntries = Array.isArray(lookups?.moveEntries) ? lookups.moveEntries : [];
  const abilityEntries = Array.isArray(lookups?.abilityEntries) ? lookups.abilityEntries : [];
  const itemEntries = Array.isArray(lookups?.itemEntries) ? lookups.itemEntries : [];
  const speciesEntries = Array.isArray(lookups?.speciesEntries) ? lookups.speciesEntries : [];

  moveEntries.forEach(entry => {
    const moveName = entry?.name || '';
    const canonicalSlug = sanitizeMoveName(moveName) || moveSlug(moveName);
    const moveKeys = uniqueNonEmpty([
      ...buildLooseLookupKeys(moveName),
      ...buildLooseLookupKeys(canonicalSlug),
      ...buildLooseLookupKeys(getManualFrenchMoveName(canonicalSlug)),
      ...buildLooseLookupKeys(getManualEnglishMoveName(canonicalSlug)),
      ...buildLooseLookupKeys(formatFrenchMoveFallback(canonicalSlug)),
    ]);
    moveKeys.forEach(key => {
      if (!ROM_RUNTIME_LOOKUPS.moves.has(key)) ROM_RUNTIME_LOOKUPS.moves.set(key, { ...entry, _canonicalSlug: canonicalSlug });
    });
  });
  abilityEntries.forEach(entry => {
    buildLooseLookupKeys(entry?.name).forEach(key => {
      if (!ROM_RUNTIME_LOOKUPS.abilities.has(key)) ROM_RUNTIME_LOOKUPS.abilities.set(key, entry);
    });
  });
  itemEntries.forEach(entry => {
    buildLooseLookupKeys(entry?.name).forEach(key => {
      if (!ROM_RUNTIME_LOOKUPS.items.has(key)) ROM_RUNTIME_LOOKUPS.items.set(key, entry);
    });
  });
  speciesEntries.forEach(rawEntry => {
    const entry = normalizeRuntimeSpeciesEntry(rawEntry);
    uniqueNonEmpty([
      entry?.id ? String(entry.id) : '',
      entry?.slug,
      entry?.name,
      entry?.nameFr,
      entry?.nameEn,
      getManualFrenchPokemonName(entry?.slug || entry?.nameEn || entry?.nameFr || ''),
      getManualEnglishPokemonName(entry?.nameFr || entry?.nameEn || entry?.slug || ''),
    ]).flatMap(value => buildLooseLookupKeys(value)).forEach(key => {
      if (!ROM_RUNTIME_LOOKUPS.species.has(key)) ROM_RUNTIME_LOOKUPS.species.set(key, entry);
    });
  });
  applySupplementalTrainerOverrides(lookups, meta);
}

function getTrainerRuntimeOverride(trainer) {
  const trainerId = trainer?.readOnly?.trainerID;
  if (trainerId == null) return null;
  return ROM_RUNTIME_LOOKUPS?.trainerOverrides?.get(String(trainerId)) || null;
}

function normalizeTrainerClassKey(rawLabel = '') {
  const clean = cleanTrainerName(String(rawLabel || '').trim());
  if (!clean) return '';
  const normalized = normalizeLookupKey(clean);
  if (!normalized) return '';
  if (TRAINER_CLASS_ALIASES[normalized]) return TRAINER_CLASS_ALIASES[normalized];
  for (const key of Object.keys(TRAINER_CLASS_FR || {})) {
    const keyNorm = normalizeLookupKey(key);
    const frNorm = normalizeLookupKey(TRAINER_CLASS_FR[key] || '');
    if (normalized === keyNorm || (frNorm && normalized === frNorm)) return key;
  }
  return clean;
}

function getTrainerClassLabels(trainer, englishName = '') {
  const override = getTrainerRuntimeOverride(trainer);
  const labelIdentity = getBdspTrainerIdentityFromLabel(trainer);
  const rawEn = cleanTrainerName(override?.trainerClassEn || '');
  const rawFr = cleanTrainerName(override?.trainerClassFr || '');
  let canonicalEn = normalizeTrainerClassKey(rawEn || rawFr);
  let displayEn = rawEn || canonicalEn || '';
  let displayFr = rawFr || (canonicalEn ? (TRAINER_CLASS_FR[canonicalEn] || canonicalEn) : '');

  if (!canonicalEn) {
    let rawClass = cleanTrainerName(trainer?.trainerClass || trainer?.readOnly?.trainerClass || '');
    if (!rawClass && trainer?._logFullName) rawClass = parseTrainerClass(trainer._logFullName);
    if (!rawClass && englishName) rawClass = parseTrainerClass(cleanTrainerName(englishName));
    if (!rawClass && trainer?.readOnly?.name) rawClass = parseTrainerClass(cleanTrainerName(trainer.readOnly.name));
    if (!rawClass && labelIdentity?.trainerClassEn) rawClass = labelIdentity.trainerClassEn;
    canonicalEn = normalizeTrainerClassKey(rawClass);
    displayEn = canonicalEn || rawClass || labelIdentity?.trainerClassEn || '';
    displayFr = canonicalEn
      ? (TRAINER_CLASS_FR[canonicalEn] || labelIdentity?.trainerClassFr || rawClass || canonicalEn)
      : (labelIdentity?.trainerClassFr || rawClass || '');
  }

  return {
    key: canonicalEn || '',
    en: cleanTrainerName(displayEn || ''),
    fr: cleanTrainerName(displayFr || ''),
  };
}

function shouldHideGenericTrainerPrefix(classKey = '', classFr = '', classEn = '') {
  const key = normalizeTrainerClassKey(classKey || classEn || classFr);
  if (TRAINER_GENERIC_CLASS_KEYS.has(key)) return true;
  const frNorm = normalizeLookupKey(classFr);
  const enNorm = normalizeLookupKey(classEn);
  return frNorm === 'dresseur pokemon' || frNorm === 'dresseuse pokemon' || enNorm === 'pokemon trainer';
}

function escapeRegexLiteral(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function stripTrainerClassPrefix(name = '', trainerClass = '') {
  const cleanName = cleanTrainerName(String(name || ''));
  const cleanClass = cleanTrainerName(String(trainerClass || ''));
  if (!cleanName) return '';
  if (cleanClass) {
    const rx = new RegExp(`^${escapeRegexLiteral(cleanClass)}\\s+`, 'i');
    if (rx.test(cleanName)) return cleanName.replace(rx, '').trim();
    if (cleanName.toLowerCase().startsWith(cleanClass.toLowerCase()) && cleanName.length > cleanClass.length) {
      return cleanName.slice(cleanClass.length).replace(/^[\s:-]+/, '').trim();
    }
  }
  const parsedClass = parseTrainerClass(cleanName);
  if (parsedClass && parsedClass !== cleanName) {
    const rx = new RegExp(`^${escapeRegexLiteral(parsedClass)}\\s+`, 'i');
    if (rx.test(cleanName)) return cleanName.replace(rx, '').trim();
    if (cleanName.toLowerCase().startsWith(parsedClass.toLowerCase()) && cleanName.length > parsedClass.length) {
      return cleanName.slice(parsedClass.length).replace(/^[\s:-]+/, '').trim();
    }
  }
  return cleanName;
}

function getTrainerOverrideFullName(override, lang = 'en') {
  if (!override) return '';
  if (lang === 'fr') return cleanTrainerName(override?.fullNameFr || override?.nameFr || '');
  return cleanTrainerName(override?.fullNameEn || override?.nameEn || '');
}

function getTrainerOverrideBaseName(override, lang = 'en') {
  if (!override) return '';
  if (lang === 'fr') {
    return cleanTrainerName(
      override?.baseNameFr ||
      stripTrainerClassPrefix(
        getTrainerOverrideFullName(override, 'fr'),
        override?.trainerClassFr || TRAINER_CLASS_FR[override?.trainerClassEn || ''] || '',
      ),
    );
  }
  return cleanTrainerName(
    override?.baseNameEn ||
    stripTrainerClassPrefix(
      getTrainerOverrideFullName(override, 'en'),
      override?.trainerClassEn || '',
    ),
  );
}

function trainerNameLooksPlaceholder(rawName = '') {
  const clean = cleanTrainerName(String(rawName || '').trim());
  if (!clean) return true;
  const normalized = normalizeLookupKey(clean);
  if (!normalized) return true;
  if (isUnknownTrainerName(clean)) return true;
  if (/^(trainer|dresseur|beauty|beaute|veteran|veteranne|captain|trial guide)\s*\[-?\d+\]$/i.test(clean)) return true;
  if (/^(tr|trainer|dresseur|npc|character|enemy|opponent|test|debug)[\s._-]*\d+$/i.test(clean)) return true;
  if (/^(tr|npc|character|enemy|opponent)_[a-z0-9_]+$/i.test(clean)) return true;
  if (/^(area|zone|route|road|field|trainer|battle)[\s._-]*\d+(?:[\s._-]*[a-z0-9]+)*$/i.test(clean)) return true;
  if (/^\[-?\d+\]$/.test(clean) || /^#?\d+$/.test(clean)) return true;
  return false;
}

function applyRuntimeTrainerIdentityOverrides(data, { forceNames = false } = {}) {
  if (!Array.isArray(data) || !data.length) return;
  for (const trainer of data) {
    const override = getTrainerRuntimeOverride(trainer);
    const labelIdentity = getBdspTrainerIdentityFromLabel(trainer);
    if (!override && !labelIdentity) continue;

    const originalName = cleanTrainerName(trainer?.readOnly?.name || trainer?.name || '');
    const overrideNameEn = getTrainerOverrideFullName(override, 'en') || labelIdentity?.fullNameEn || '';
    const overrideNameFr = getTrainerOverrideFullName(override, 'fr') || labelIdentity?.fullNameFr || '';
    const overrideBaseNameEn = getTrainerOverrideBaseName(override, 'en') || labelIdentity?.baseNameEn || '';
    const overrideBaseNameFr = getTrainerOverrideBaseName(override, 'fr') || labelIdentity?.baseNameFr || '';
    const canonicalName = overrideNameFr || overrideNameEn || '';
    const normalizedOriginal = normalizeLookupKey(originalName);
    const normalizedOverrideEn = normalizeLookupKey(overrideNameEn);
    const normalizedOverrideFr = normalizeLookupKey(overrideNameFr);
    const normalizedBaseEn = normalizeLookupKey(overrideBaseNameEn);
    const normalizedBaseFr = normalizeLookupKey(overrideBaseNameFr);
    const safeToReplaceName = forceNames ||
      trainerNameLooksPlaceholder(originalName) ||
      (!!canonicalName && (
        (normalizedBaseEn && normalizedBaseEn === normalizedOriginal) ||
        (normalizedBaseFr && normalizedBaseFr === normalizedOriginal)
      )) ||
      (!!canonicalName && (
        (normalizedOverrideEn && normalizedOverrideEn === normalizedOriginal) ||
        (normalizedOverrideFr && normalizedOverrideFr === normalizedOriginal)
      ));

    if (trainer?.readOnly && trainer._originalReadOnlyName == null) {
      trainer._originalReadOnlyName = trainer.readOnly.name || '';
    }
    if (trainer._originalTrainerClass == null) {
      trainer._originalTrainerClass = trainer?.trainerClass || trainer?.readOnly?.trainerClass || '';
    }

    if (canonicalName && safeToReplaceName) {
      if (trainer?.readOnly) trainer.readOnly.name = canonicalName;
      trainer.name = canonicalName;
    }

    const canonicalClassEn = cleanTrainerName(override?.trainerClassEn || labelIdentity?.trainerClassEn || '');
    const canonicalClassFr = cleanTrainerName(override?.trainerClassFr || labelIdentity?.trainerClassFr || '');
    const canonicalClass = canonicalClassEn || canonicalClassFr || '';
    if (canonicalClass) {
      trainer.trainerClass = canonicalClass;
      if (trainer?.readOnly) trainer.readOnly.trainerClass = canonicalClass;
    }
  }
}

function getTrainerClassKeyFromLocalizedName(rawLabel = '') {
  return normalizeTrainerClassKey(rawLabel || '');
}

function buildTrainerOverridesFromVanillaDatasets(datasets = [], meta = null) {
  const trainerNameOverrides = {};
  for (const raw of datasets) {
    const trainers = Array.isArray(raw?.trainers) ? raw.trainers : [];
    const lang = String(raw?.meta?.language || '').toLowerCase();
    for (const trainer of trainers) {
      const trainerId = trainer?.trainerId;
      if (trainerId == null) continue;
      const key = String(trainerId);
      const existing = trainerNameOverrides[key] || {};
      const fullDisplayName = cleanTrainerName(
        trainer?.fullDisplayName ||
        [trainer?.trainerClassName || '', trainer?.name || ''].filter(Boolean).join(' ').trim() ||
        trainer?.name,
      );
      let localizedClass = cleanTrainerName(trainer?.trainerClassName || '');
      if (!localizedClass && fullDisplayName) {
        const parsedClass = parseTrainerClass(fullDisplayName);
        if (parsedClass && parsedClass !== fullDisplayName) localizedClass = cleanTrainerName(parsedClass);
      }
      let baseName = cleanTrainerName(trainer?.name || '');
      if ((!baseName || baseName === fullDisplayName) && localizedClass && fullDisplayName) {
        const stripped = stripTrainerClassPrefix(fullDisplayName, localizedClass);
        if (stripped) baseName = stripped;
      }
      if (!baseName) baseName = fullDisplayName;
      const classEn = getTrainerClassKeyFromLocalizedName(localizedClass);
      if (lang === 'fr') {
        if (fullDisplayName) {
          existing.fullNameFr = fullDisplayName;
          if (!existing.nameFr) existing.nameFr = fullDisplayName;
        }
        if (baseName) existing.baseNameFr = baseName;
        if (localizedClass) existing.trainerClassFr = localizedClass;
      } else {
        if (fullDisplayName) {
          existing.fullNameEn = fullDisplayName;
          if (!existing.nameEn) existing.nameEn = fullDisplayName;
        }
        if (baseName) existing.baseNameEn = baseName;
      }
      if (classEn) {
        existing.trainerClassEn = classEn;
        if (!existing.trainerClassFr) existing.trainerClassFr = TRAINER_CLASS_FR[classEn] || localizedClass || classEn;
      }
      if (!existing.fullNameFr && fullDisplayName && lang !== 'fr') {
        const translated = translateTrainerName(fullDisplayName);
        if (translated) {
          existing.fullNameFr = translated;
          if (!existing.nameFr) existing.nameFr = translated;
        }
      }
      if (!existing.fullNameEn && fullDisplayName && lang === 'fr') {
        existing.fullNameEn = fullDisplayName;
        if (!existing.nameEn) existing.nameEn = fullDisplayName;
      }
      if (!existing.baseNameFr && existing.fullNameFr) {
        existing.baseNameFr = stripTrainerClassPrefix(existing.fullNameFr, existing.trainerClassFr || '');
      }
      if (!existing.baseNameEn && existing.fullNameEn) {
        existing.baseNameEn = stripTrainerClassPrefix(existing.fullNameEn, existing.trainerClassEn || '');
      }
      trainerNameOverrides[key] = existing;
    }
  }
  return {
    trainerNameOverrides,
    meta: {
      ...(meta || {}),
      source: meta?.source || 'bdsp-vanilla-overrides',
      game: meta?.game || 'brilliantdiamond',
    },
  };
}

let bdspTrainerOverridesPromise = null;
async function ensureBdspTrainerOverridesLoaded() {
  if (window.BDSP_TRAINER_OVERRIDES) {
    applySupplementalTrainerOverrides(window.BDSP_TRAINER_OVERRIDES, window.BDSP_TRAINER_OVERRIDES?.meta || null);
    return window.BDSP_TRAINER_OVERRIDES;
  }
  if (bdspTrainerOverridesPromise) return bdspTrainerOverridesPromise;
  bdspTrainerOverridesPromise = (async () => {
    const slugs = ['bdsp_diamond_fr', 'bdsp_diamond_en', 'bdsp_pearl_fr', 'bdsp_pearl_en'];
    const raws = (await Promise.all(slugs.map(slug => ensureVanillaScriptLoaded(slug).catch(() => null)))).filter(Boolean);
    if (!raws.length) throw new Error('BDSP trainer overrides unavailable');
    const overrides = buildTrainerOverridesFromVanillaDatasets(raws, {
      source: 'bdsp-vanilla-overrides',
      game: 'brilliantdiamond',
    });
    window.BDSP_TRAINER_OVERRIDES = overrides;
    applySupplementalTrainerOverrides(overrides, overrides.meta || null);
    return overrides;
  })();
  return bdspTrainerOverridesPromise;
}

const vanillaTrainerOverridesPromiseByGame = new Map();

function inferTrainerOverrideGame(rawGame = '', versionInfo = detectedVersionInfo) {
  const direct = String(rawGame || '').toLowerCase().trim();
  if (direct) {
    if (direct === 'luminescent' || direct === 'luminescentdiamond' || direct === 'luminescentpearl') return 'brilliantdiamond';
    return direct;
  }
  const key = String(versionInfo?.key || '').toLowerCase();
  const name = String(versionInfo?.name || '').toLowerCase();
  const haystack = `${key} ${name}`.trim();
  if (!haystack) return '';
  const mappings = [
    ['scarlet', /\bscarlet|ecarlate\b/],
    ['violet', /\bviolet\b/],
    ['brilliantdiamond', /\bbrilliant diamond|diamant etincelant|bdsp|luminescent\b/],
    ['shiningpearl', /\bshining pearl|perle scintillante\b/],
    ['diamond', /\bdiamond|diamant\b/],
    ['pearl', /\bpearl|perle\b/],
    ['platinum', /\bplatinum|platine\b/],
    ['heartgold', /\bheartgold|or\b/],
    ['soulsilver', /\bsoulsilver|argent\b/],
    ['black2', /\bblack 2|noire 2|noir 2\b/],
    ['white2', /\bwhite 2|blanche 2|blanc 2\b/],
    ['black', /\bblack|noire|noir\b/],
    ['white', /\bwhite|blanche|blanc\b/],
    ['x', /\bpokemon x\b|\bx\b/],
    ['y', /\bpokemon y\b|\by\b/],
    ['omegaruby', /\bomega ruby|rubis omega\b/],
    ['alphasapphire', /\balpha sapphire|saphir alpha\b/],
    ['sun', /\bsun|soleil\b/],
    ['moon', /\bmoon|lune\b/],
    ['ultrasun', /\bultra sun|ultra soleil\b/],
    ['ultramoon', /\bultra moon|ultra lune\b/],
    ['sword', /\bsword|epee\b/],
    ['shield', /\bshield|bouclier\b/],
  ];
  for (const [game, rx] of mappings) {
    if (rx.test(haystack)) return game;
  }
  return '';
}

async function ensureVanillaTrainerOverridesLoaded(game = '') {
  const normalizedGame = inferTrainerOverrideGame(game);
  if (!normalizedGame) return null;
  if (normalizedGame === 'brilliantdiamond') return ensureBdspTrainerOverridesLoaded();
  if (vanillaTrainerOverridesPromiseByGame.has(normalizedGame)) {
    return vanillaTrainerOverridesPromiseByGame.get(normalizedGame);
  }
  const promise = (async () => {
    const rows = getVanillaManifest().filter(row => String(row?.game || '').toLowerCase() === normalizedGame);
    if (!rows.length) throw new Error(`Vanilla trainer overrides unavailable for ${normalizedGame}`);
    const preferred = [];
    const langs = ['fr', 'en'];
    langs.forEach(lang => {
      const sameLang = rows.filter(row => String(row?.language || '').toLowerCase() === lang);
      if (sameLang.length) preferred.push(sameLang[0]);
    });
    const fallbackRows = rows.filter(row => !preferred.includes(row));
    const selectedRows = [...preferred, ...fallbackRows.slice(0, 2)];
    const raws = (await Promise.all(selectedRows.map(row => ensureVanillaScriptLoaded(row.slug).catch(() => null)))).filter(Boolean);
    if (!raws.length) throw new Error(`Vanilla trainer overrides unavailable for ${normalizedGame}`);
    const overrides = buildTrainerOverridesFromVanillaDatasets(raws, {
      source: 'vanilla-trainer-overrides',
      game: normalizedGame,
    });
    applySupplementalTrainerOverrides(overrides, overrides.meta || null);
    return overrides;
  })();
  vanillaTrainerOverridesPromiseByGame.set(normalizedGame, promise);
  return promise;
}

function isLikelyBdspIoTrainersDataset(data, filename = '') {
  const lowerName = String(filename || '').toLowerCase();
  if (/iotrainers\.json$/i.test(lowerName)) return true;
  if (!Array.isArray(data) || !data.length) return false;
  const sample = data.slice(0, Math.min(80, data.length));
  const dpLabelCount = sample.filter(trainer => /^dp_/i.test(String(trainer?.nameLabel || ''))).length;
  const hasTrainerIds = sample.filter(trainer => Number.isFinite(Number(trainer?.readOnly?.trainerID))).length;
  return dpLabelCount >= 6 || (dpLabelCount >= 2 && hasTrainerIds >= 10);
}

async function ensureLumiModOverridesLoaded() {
  if (window.LUMI_MOD_OVERRIDES) {
    applySupplementalTrainerOverrides(window.LUMI_MOD_OVERRIDES, window.LUMI_MOD_OVERRIDES?.meta || null);
    return window.LUMI_MOD_OVERRIDES;
  }
  const existing = document.querySelector('script[data-lumi-mod-overrides="1"]');
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => {
        if (window.LUMI_MOD_OVERRIDES) {
          applySupplementalTrainerOverrides(window.LUMI_MOD_OVERRIDES, window.LUMI_MOD_OVERRIDES?.meta || null);
          resolve(window.LUMI_MOD_OVERRIDES);
        } else {
          reject(new Error('Lumi mod overrides missing after script load'));
        }
      }, { once: true });
      existing.addEventListener('error', reject, { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = './vanilla_exports/luminescent_platinum_mod_overrides.js';
    script.dataset.lumiModOverrides = '1';
    script.onload = () => {
      if (window.LUMI_MOD_OVERRIDES) {
        applySupplementalTrainerOverrides(window.LUMI_MOD_OVERRIDES, window.LUMI_MOD_OVERRIDES?.meta || null);
        resolve(window.LUMI_MOD_OVERRIDES);
      } else {
        reject(new Error('Lumi mod overrides unavailable'));
      }
    };
    script.onerror = () => reject(new Error('Unable to load Lumi mod overrides'));
    document.head.appendChild(script);
  });
}

function romLookupsMatchCurrentContext() {
  const romGame = String(ROM_RUNTIME_LOOKUPS.meta?.game || '').toLowerCase();
  const current = String(detectedVersionInfo?.name || detectedGen || '').toLowerCase();
  if (!romGame || !current) return false;
  if (romGame === 'diamond') return /diamant|diamond/.test(current);
  if (romGame === 'pearl') return /perle|pearl/.test(current);
  if (romGame === 'platinum') return /platine|platinum/.test(current);
  if (romGame === 'heartgold') return /heartgold|or/.test(current);
  if (romGame === 'soulsilver') return /soulsilver|argent/.test(current);
  if (romGame === 'black2') return /noir 2|black 2/.test(current);
  if (romGame === 'white2') return /blanc 2|white 2/.test(current);
  if (romGame === 'black') return /noir|black/.test(current) && !/noir 2|black 2/.test(current);
  if (romGame === 'white') return /blanc|white/.test(current) && !/blanc 2|white 2/.test(current);
  if (romGame === 'moon') return /lune|moon/.test(current) && !/ultra/.test(current);
  if (romGame === 'sun') return /soleil|sun/.test(current) && !/ultra/.test(current);
  if (romGame === 'ultramoon') return /ultra lune|ultra moon/.test(current);
  if (romGame === 'ultrasun') return /ultra soleil|ultra sun/.test(current);
  return false;
}

function getVersionSpeciesTypeOverride(identifier) {
  const gen = detectedVersionInfo?.gen || 4;
  const helper = window.VERSION_DATA_RULES?.getSpeciesTypeOverrideForGen;
  if (typeof helper !== 'function') return null;
  const candidates = uniqueNonEmpty([
    identifier,
    sanitizePokemonSourceName(identifier),
    slugify(identifier),
    getPokemonQuickAlias(identifier),
  ]);
  for (const candidate of candidates) {
    const override = helper(candidate, gen);
    if (override?.length) return override;
  }
  return null;
}

function applyVersionAccurateTypes(identifier, types) {
  const normalized = [...new Set((types || []).filter(Boolean).map(t => String(t || '').charAt(0).toUpperCase() + String(t || '').slice(1)).filter(Boolean))];
  const override = getVersionSpeciesTypeOverride(identifier);
  return override?.length ? override : normalized;
}

function getRomMoveData(identifier) {
  if (!romLookupsMatchCurrentContext()) return null;
  const canonical = getCanonicalMoveMeta(identifier);
  const candidates = uniqueNonEmpty([
    ...buildLooseLookupKeys(identifier),
    ...buildLooseLookupKeys(canonical.slug),
    ...buildLooseLookupKeys(canonical.nameFr),
    ...buildLooseLookupKeys(canonical.nameEn),
  ]);
  for (const key of candidates) {
    const entry = ROM_RUNTIME_LOOKUPS.moves.get(key);
    if (entry) return entry;
  }
  return null;
}

function getRomAbilityData(identifier) {
  if (!romLookupsMatchCurrentContext()) return null;
  for (const key of buildLooseLookupKeys(identifier)) {
    const entry = ROM_RUNTIME_LOOKUPS.abilities.get(key);
    if (entry) return entry;
  }
  return null;
}

function getRomItemData(identifier) {
  if (!romLookupsMatchCurrentContext()) return null;
  for (const key of buildLooseLookupKeys(identifier)) {
    const entry = ROM_RUNTIME_LOOKUPS.items.get(key);
    if (entry) return entry;
  }
  return null;
}

function getRomSpeciesData(identifier) {
  if (!romLookupsMatchCurrentContext()) return null;
  for (const key of buildLooseLookupKeys(identifier)) {
    const entry = ROM_RUNTIME_LOOKUPS.species.get(key);
    if (entry) return entry;
  }
  return null;
}

function loadEmbeddedPokemonFrMap() {
  if (EMBEDDED_POKEMON_FR_MAP) return EMBEDDED_POKEMON_FR_MAP;
  const map = new Map();
  try {
    const src = String(resolveFrenchPokemon);
    const match = src.match(/const QUICK = \{([\s\S]*?)\n\s*\};/);
    const body = match?.[1] || '';
    const pairRegex = /'([^']+)'\s*:\s*'([^']+)'/g;
    let m;
    while ((m = pairRegex.exec(body))) {
      const frRaw = m[1];
      const enSlug = m[2];
      const frPretty = titleCaseFrench(frRaw.replace(/_/g, ' '));
      const enKey = String(enSlug || '').toLowerCase();
      if (!enKey || !frPretty) continue;
      if (!map.has(enKey)) map.set(enKey, frPretty);
      const normalizedEn = normalizeLookupKey(enKey);
      if (normalizedEn && !map.has(normalizedEn)) map.set(normalizedEn, frPretty);
      const slugEn = slugify(enKey);
      if (slugEn && !map.has(slugEn)) map.set(slugEn, frPretty);
    }
  } catch (e) {}
  EMBEDDED_POKEMON_FR_MAP = map;
  return EMBEDDED_POKEMON_FR_MAP;
}

function getManualFrenchPokemonName(identifier) {
  const raw = sanitizePokemonSourceName(identifier);
  const alias = getPokemonQuickAlias(raw);
  const candidates = uniqueNonEmpty([
    String(identifier || ''),
    String(identifier || '').toLowerCase(),
    raw,
    normalizeLookupKey(raw),
    compactLookupKey(raw),
    slugify(raw),
    alias,
    normalizeLookupKey(alias),
    compactLookupKey(alias),
    slugify(alias),
  ]);
  const lowerCandidates = candidates.map(v => String(v || '').toLowerCase());
  const supplemental = getSupplementalSpeciesMaps();
  for (const candidate of lowerCandidates) {
    const entry = supplemental.byId.get(candidate) || supplemental.entryByAnyKey.get(candidate);
    if (entry?.nameFr) return entry.nameFr;
  }
  const local = getDictionaryValue(POKEMON_FR_MANUAL, candidates);
  if (local) return local;
  const embeddedMap = loadEmbeddedPokemonFrMap();
  for (const key of lowerCandidates) {
    if (embeddedMap.has(key)) return embeddedMap.get(key);
  }
  return '';
}

function getManualEnglishPokemonName(identifier) {
  const raw = sanitizePokemonSourceName(identifier);
  const alias = getPokemonQuickAlias(raw);
  const candidates = uniqueNonEmpty([
    String(identifier || ''),
    String(identifier || '').toLowerCase(),
    raw,
    normalizeLookupKey(raw),
    compactLookupKey(raw),
    slugify(raw),
    alias,
    normalizeLookupKey(alias),
    compactLookupKey(alias),
    slugify(alias),
  ]);
  const lowerCandidates = candidates.map(v => String(v || '').toLowerCase());
  const supplemental = getSupplementalSpeciesMaps();
  for (const candidate of lowerCandidates) {
    const entry = supplemental.byId.get(candidate) || supplemental.entryByAnyKey.get(candidate);
    if (entry?.nameEn) return entry.nameEn;
  }
  return getDictionaryValue(POKEMON_EN_MANUAL, lowerCandidates);
}

function getManualFrenchMoveName(identifier) {
  const raw = String(identifier || '')
    .replace(/^[\s\-–—•:;,]+/, '')
    .replace(/[\s\-–—•:;,]+$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const resolved = sanitizeMoveName(raw);
  const resolvedSlug = resolved || moveSlug(raw);
  const candidates = uniqueNonEmpty([
    ...buildLooseLookupKeys(identifier),
    ...buildLooseLookupKeys(raw),
    ...buildLooseLookupKeys(resolved),
    ...buildLooseLookupKeys(resolvedSlug),
  ]).map(v => String(v || '').toLowerCase());
  const direct = getDictionaryValue(MOVE_FR_MANUAL, candidates);
  if (direct) return direct;
  const approxKey = findApproxDictionaryKey(identifier, MOVE_FR_MANUAL);
  return approxKey ? MOVE_FR_MANUAL[approxKey] : '';
}

function getManualEnglishMoveName(identifier) {
  const raw = String(identifier || '')
    .replace(/^[\s\-–—•:;,]+/, '')
    .replace(/[\s\-–—•:;,]+$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const resolved = sanitizeMoveName(raw);
  const resolvedSlug = resolved || moveSlug(raw);
  const candidates = uniqueNonEmpty([
    ...buildLooseLookupKeys(identifier),
    ...buildLooseLookupKeys(raw),
    ...buildLooseLookupKeys(resolved),
    ...buildLooseLookupKeys(resolvedSlug),
  ]).map(v => String(v || '').toLowerCase());
  const direct = getDictionaryValue(MOVE_EN_MANUAL, candidates);
  if (direct) return direct;
  const approxKey = findApproxDictionaryKey(identifier, MOVE_FR_MANUAL);
  return approxKey ? (MOVE_EN_MANUAL[approxKey] || '') : '';
}

function getManualFrenchAbilityName(identifier) {
  const candidates = uniqueNonEmpty(buildLooseLookupKeys(identifier)).map(v => String(v || '').toLowerCase());
  return getDictionaryValue(ABILITY_FR_MANUAL, candidates) || ABILITY_FR_MANUAL[findApproxDictionaryKey(identifier, ABILITY_FR_MANUAL)] || '';
}

function getManualEnglishAbilityName(identifier) {
  const candidates = uniqueNonEmpty(buildLooseLookupKeys(identifier)).map(v => String(v || '').toLowerCase());
  return getDictionaryValue(ABILITY_EN_MANUAL, candidates) || ABILITY_EN_MANUAL[findApproxDictionaryKey(identifier, ABILITY_FR_MANUAL)] || '';
}

function getManualFrenchItemName(identifier) {
  const candidates = uniqueNonEmpty(buildLooseLookupKeys(identifier)).map(v => String(v || '').toLowerCase());
  return getDictionaryValue(ITEM_FR_MANUAL, candidates) || ITEM_FR_MANUAL[findApproxDictionaryKey(identifier, ITEM_FR_MANUAL)] || '';
}

function getManualEnglishItemName(identifier) {
  const candidates = uniqueNonEmpty(buildLooseLookupKeys(identifier)).map(v => String(v || '').toLowerCase());
  return getDictionaryValue(ITEM_EN_MANUAL, candidates) || ITEM_EN_MANUAL[findApproxDictionaryKey(identifier, ITEM_FR_MANUAL)] || '';
}

function getCanonicalItemMeta(name) {
  const raw = String(name || '').trim();
  const normalized = normalizeLookupKey(raw);
  const aliases = {
    'baie wiki': 'wiki-berry',
    'baiewiki': 'wiki-berry',
    'baie mago': 'mago-berry',
    'baiemago': 'mago-berry',
    'baie cherim': 'cheri-berry',
    'baiecherim': 'cheri-berry',
    'baie charti': 'charti-berry',
    'baiecharti': 'charti-berry',
    'baie maron': 'chesto-berry',
    'baiemaron': 'chesto-berry',
    'plaque toxic': 'toxic-plate',
    'plaquetoxic': 'toxic-plate',
    'nœud destin': 'destiny-knot',
    'noeud destin': 'destiny-knot',
    'noeuddestin': 'destiny-knot',
    'grif rasoir': 'razor-claw',
    'grifrasoir': 'razor-claw',
    'pilule talent': 'ability-capsule',
    'piluletalent': 'ability-capsule',
    'patch talent': 'ability-patch',
    'patchtalent': 'ability-patch',
  };
  const approxKey = findApproxDictionaryKey(raw, ITEM_FR_MANUAL);
  const slug = aliases[normalized]
    || getDictionaryValue(ITEM_EN_MANUAL, buildLooseLookupKeys(raw).map(v => String(v || '').toLowerCase()))
    || approxKey
    || moveSlug(raw);
  const nameFr = getManualFrenchItemName(slug) || getManualFrenchItemName(raw) || raw;
  const nameEn = getManualEnglishItemName(slug) || getManualEnglishItemName(raw) || formatPokemonDisplayName(slug || raw);
  const slugCandidates = uniqueNonEmpty([
    slug,
    approxKey,
    moveSlug(nameEn),
    moveSlug(nameFr),
    moveSlug(raw),
    moveSlug(raw).replace(/-/g, ''),
  ]);
  return { raw, slug, approxKey, nameFr, nameEn, slugCandidates };
}

function getManualPokemonTypes(identifier) {
  const raw = sanitizePokemonSourceName(identifier);
  const alias = getPokemonQuickAlias(raw);
  const candidates = uniqueNonEmpty([
    String(identifier || '').toLowerCase(),
    raw,
    normalizeLookupKey(raw),
    slugify(raw),
    alias,
    normalizeLookupKey(alias),
    slugify(alias),
  ]).map(v => String(v || '').toLowerCase());
  for (const key of candidates) {
    if (POKEMON_TYPES_MANUAL[key]) return POKEMON_TYPES_MANUAL[key];
  }
  return [];
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { value += '"'; i++; }
        else inQuotes = false;
      } else value += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ',') { row.push(value); value = ''; }
    else if (ch === '\n') { row.push(value); rows.push(row); row = []; value = ''; }
    else if (ch !== '\r') value += ch;
  }
  if (value.length || row.length) { row.push(value); rows.push(row); }
  return rows;
}

async function loadPokemonNameMap() {
  if (translationCache.pokemonNamesPromise) return translationCache.pokemonNamesPromise;
  translationCache.pokemonNamesPromise = Promise.resolve((() => {
    const frenchToEnglish = new Map();
    for (const [en, fr] of Object.entries(POKEMON_FR_MANUAL)) {
      if (en && fr) frenchToEnglish.set(normalizeLookupKey(fr), String(en).toLowerCase());
    }
    for (const entry of getNormalizedRomRuntimeSpeciesEntries()) {
      if (!entry?.nameFr || !entry?.slug) continue;
      const frKeys = uniqueNonEmpty([
        normalizeLookupKey(entry.nameFr),
        compactLookupKey(entry.nameFr),
        slugify(entry.nameFr),
      ]);
      frKeys.forEach(key => {
        if (key && !frenchToEnglish.has(key)) frenchToEnglish.set(key, String(entry.slug).toLowerCase());
      });
    }
    const supplemental = getSupplementalSpeciesMaps();
    for (const entry of supplemental.byId.values()) {
      const frKeys = uniqueNonEmpty([
        normalizeLookupKey(entry.nameFr),
        compactLookupKey(entry.nameFr),
        slugify(entry.nameFr),
      ]);
      frKeys.forEach(key => {
        if (key && !frenchToEnglish.has(key)) frenchToEnglish.set(key, String(entry.slug || entry.nameEn).toLowerCase());
      });
    }
    return frenchToEnglish;
  })()).catch(() => new Map());
  return translationCache.pokemonNamesPromise;
}

async function loadPokemonDisplayMap() {
  if (translationCache.pokemonDisplayPromise) return translationCache.pokemonDisplayPromise;
  translationCache.pokemonDisplayPromise = Promise.resolve((() => {
    const frenchByIdentifier = new Map();
    for (const [en, fr] of Object.entries(POKEMON_FR_MANUAL)) {
      if (en && fr) frenchByIdentifier.set(String(en).toLowerCase(), fr);
    }
    for (const [en, fr] of loadEmbeddedPokemonFrMap()) {
      if (en && fr && !frenchByIdentifier.has(String(en).toLowerCase())) frenchByIdentifier.set(String(en).toLowerCase(), fr);
    }
    for (const entry of getNormalizedRomRuntimeSpeciesEntries()) {
      if (!entry?.nameFr) continue;
      uniqueNonEmpty([
        entry.slug,
        entry.nameEn,
        entry.name,
      ]).forEach(key => {
        const normalizedKey = String(key || '').toLowerCase();
        if (normalizedKey && !frenchByIdentifier.has(normalizedKey)) frenchByIdentifier.set(normalizedKey, entry.nameFr);
      });
    }
    const supplemental = getSupplementalSpeciesMaps();
    for (const entry of supplemental.byId.values()) {
      uniqueNonEmpty([entry.slug, entry.nameEn]).forEach(key => {
        const normalizedKey = String(key || '').toLowerCase();
        if (normalizedKey && !frenchByIdentifier.has(normalizedKey)) frenchByIdentifier.set(normalizedKey, entry.nameFr);
      });
    }
    return frenchByIdentifier;
  })()).catch(() => new Map());
  return translationCache.pokemonDisplayPromise;
}

async function loadMoveNameMap() {
  if (translationCache.moveNamesPromise) return translationCache.moveNamesPromise;
  translationCache.moveNamesPromise = Promise.resolve((() => {
    const frenchToEnglish = new Map();
    for (const [en, fr] of Object.entries(MOVE_FR_MANUAL)) {
      if (en && fr) frenchToEnglish.set(normalizeLookupKey(fr), String(en).toLowerCase());
    }
    return frenchToEnglish;
  })()).catch(() => new Map());
  return translationCache.moveNamesPromise;
}

async function loadMoveDisplayMap() {
  if (translationCache.moveDisplayPromise) return translationCache.moveDisplayPromise;
  translationCache.moveDisplayPromise = Promise.resolve((() => {
    const frenchByIdentifier = new Map();
    for (const [en, fr] of Object.entries(MOVE_FR_MANUAL)) {
      if (en && fr) frenchByIdentifier.set(String(en).toLowerCase(), fr);
    }
    return frenchByIdentifier;
  })()).catch(() => new Map());
  return translationCache.moveDisplayPromise;
}

function trainerImgFallback(img) {
  const fb = window._trainerFallbacks?.[img.id];
  if (!fb) { img.onerror = null; img.outerHTML = `<span>${fb?.em||'🧑'}</span>`; return; }
  fb.idx++;
  if (fb.idx < fb.urls.length) { img.onerror = function(){trainerImgFallback(this);}; img.src = fb.urls[fb.idx]; }
  else { img.onerror = null; img.outerHTML = `<span>${fb.em}</span>`; }
}

function makeTrainerImg(urls, alt, em, id) {
  window._trainerFallbacks = window._trainerFallbacks || {};
  window._trainerFallbacks[id] = { urls, idx: 0, em };
  return `<img id="${id}" src="${urls[0]}" alt="${alt}" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:contain;object-position:center center;image-rendering:pixelated;" onerror="trainerImgFallback(this)">`;
}

function spriteImgFallback(img) {
  const fb = window._spriteFallbacks?.[img.id];
  if (!fb) { img.onerror = null; img.style.display = 'none'; return; }
  fb.idx++;
  if (fb.idx < fb.urls.length) { img.onerror = function(){spriteImgFallback(this);}; img.src = fb.urls[fb.idx]; }
  else {
    img.onerror = null;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent && !parent.querySelector('.poke-sprite-placeholder')) {
      const ph = document.createElement('div');
      ph.className = 'poke-sprite-placeholder';
      ph.textContent = '❓';
      parent.appendChild(ph);
    }
  }
}

function renderSpritePlaceholder(slotId) {
  const slot = document.getElementById(slotId);
  if (!slot) return null;
  slot.innerHTML = '';
  const ph = document.createElement('div');
  ph.className = 'poke-sprite-placeholder';
  ph.textContent = '❓';
  slot.appendChild(ph);
  return ph;
}

function ensurePokemonSpriteElement(index, alt = '') {
  let img = document.getElementById(`sprite-img-${index}`);
  if (img) {
    if (alt) img.alt = alt;
    return img;
  }
  const slot = document.getElementById(`sprite-${index}`);
  if (!slot) return null;
  img = document.createElement('img');
  img.className = 'poke-sprite';
  img.id = `sprite-img-${index}`;
  img.alt = alt || 'Pokémon';
  slot.replaceWith(img);
  return img;
}

function applyPokemonSpriteCandidates(index, urls, alt = '') {
  const uniqueUrls = uniqueNonEmpty(urls);
  const loadingSlotId = `sprite-${index}`;
  if (!uniqueUrls.length) {
    if (!document.getElementById(`sprite-img-${index}`)) renderSpritePlaceholder(loadingSlotId);
    return null;
  }
  const img = ensurePokemonSpriteElement(index, alt);
  if (!img) return null;
  if (alt) img.alt = alt;
  window._spriteFallbacks = window._spriteFallbacks || {};
  window._spriteFallbacks[img.id] = { urls: uniqueUrls, idx: 0 };
  img.onerror = function() { spriteImgFallback(this); };
  const parent = img.parentElement;
  const ph = parent?.querySelector('.poke-sprite-placeholder');
  if (ph) ph.remove();
  img.style.display = '';
  if (img.getAttribute('src') !== uniqueUrls[0]) img.src = uniqueUrls[0];
  return img;
}

// ── POKEAPI HELPERS ───────────────────────────────────────────────────────────
function slugify(name) {
  // Handle special known cases first
  const SLUG_OVERRIDES = {
    'aegislash': 'aegislash-shield',
    'zygarde': 'zygarde-50',
    'wormadam': 'wormadam-plant',
    'shaymin': 'shaymin-land',
    'giratina': 'giratina-altered',
    'deoxys': 'deoxys-normal',
    'rotom': 'rotom',
    'basculin': 'basculin-red-striped',
    'tornadus': 'tornadus-incarnate',
    'thundurus': 'thundurus-incarnate',
    'landorus': 'landorus-incarnate',
    'kyurem': 'kyurem',
    'meloetta': 'meloetta-aria',
    'keldeo': 'keldeo-ordinary',
    'darmanitan': 'darmanitan-standard',
    'jellicent': 'jellicent',
    'mime-jr': 'mime-jr',
    'mr-mime': 'mr-mime',
    'mr-rime': 'mr-rime',
    'type-null': 'type-null',
    'jangmo-o': 'jangmo-o',
    'hakamo-o': 'hakamo-o',
    'kommo-o': 'kommo-o',
    'tapu-koko': 'tapu-koko',
    'tapu-lele': 'tapu-lele',
    'tapu-bulu': 'tapu-bulu',
    'tapu-fini': 'tapu-fini',
    'porygon-z': 'porygon-z',
    'nidoran-f': 'nidoran-f',
    'nidoran-m': 'nidoran-m',
    'flabebe': 'flabebe',
    'farfetchd': 'farfetchd',
    "farfetch'd": 'farfetchd',
    'sirfetchd': 'sirfetchd',
    "sirfetch'd": 'sirfetchd',
    'ho-oh': 'ho-oh',
    'porygon2': 'porygon2',
  };
  const normalized = name.toLowerCase().replace(/[.':]/g,'').replace(/\s+/g,'-').replace(/♀/g,'-f').replace(/♂/g,'-m').replace(/é/g,'e').replace(/è/g,'e').replace(/ê/g,'e');
  if (SLUG_OVERRIDES[normalized]) return SLUG_OVERRIDES[normalized];
  // Also check partial match (e.g. 'aegislash-blade')
  for (const [k,v] of Object.entries(SLUG_OVERRIDES)) {
    if (normalized.startsWith(k)) return v;
  }
  return normalized;
}
function moveSlug(name) {
  // Handle camelCase (e.g. BubbleBeam → bubble-beam) and normal names
  name = String(name || '');
  const spaced = name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return spaced.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'').replace(/--+/g,'-');
}

function stripDiacritics(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/œ/gi, 'oe');
}

function uniqueNonEmpty(list) {
  return [...new Set((list || []).filter(Boolean))];
}

function titleCaseWords(value) {
  return String(value || '').replace(/\b([a-z])/g, ch => ch.toUpperCase());
}

function formatPokemonDisplayName(name) {
  if (!name) return '';
  const raw = String(name).trim();
  const lowered = raw.toLowerCase();
  const SPECIAL = {
    'mr-mime': 'Mr. Mime',
    'mime-jr': 'Mime Jr.',
    'mr-rime': 'Mr. Rime',
    'type-null': 'Type: Null',
    'jangmo-o': 'Jangmo-o',
    'hakamo-o': 'Hakamo-o',
    'kommo-o': 'Kommo-o',
    'porygon-z': 'Porygon-Z',
    'ho-oh': 'Ho-Oh',
    'wormadam-plant': 'Wormadam-Plant',
    'wormadam-sandy': 'Wormadam-Sandy',
    'wormadam-trash': 'Wormadam-Trash',
    'minior-red-meteor': 'Minior',
    'minior-orange-meteor': 'Minior',
    'minior-yellow-meteor': 'Minior',
    'minior-green-meteor': 'Minior',
    'minior-blue-meteor': 'Minior',
    'minior-indigo-meteor': 'Minior',
    'minior-violet-meteor': 'Minior',
    'meloetta-aria': 'Meloetta',
    'shaymin-land': 'Shaymin',
    'giratina-altered': 'Giratina',
    'deoxys-normal': 'Deoxys',
    'darmanitan-standard': 'Darmanitan',
    'basculin-red-striped': 'Basculin',
    'keldeo-ordinary': 'Keldeo',
    'tornadus-incarnate': 'Tornadus',
    'thundurus-incarnate': 'Thundurus',
    'landorus-incarnate': 'Landorus',
    'zygarde-50': 'Zygarde',
    'alolan-raichu': 'Alolan Raichu',
    'alolan-raticate': 'Alolan Raticate',
    'alolan-sandshrew': 'Alolan Sandshrew',
    'alolan-sandslash': 'Alolan Sandslash',
    'alolan-vulpix': 'Alolan Vulpix',
    'alolan-ninetales': 'Alolan Ninetales',
    'alolan-diglett': 'Alolan Diglett',
    'alolan-dugtrio': 'Alolan Dugtrio',
    'alolan-meowth': 'Alolan Meowth',
    'alolan-persian': 'Alolan Persian',
    'alolan-geodude': 'Alolan Geodude',
    'alolan-graveler': 'Alolan Graveler',
    'alolan-golem': 'Alolan Golem',
    'alolan-grimer': 'Alolan Grimer',
    'alolan-muk': 'Alolan Muk',
    'alolan-exeggutor': 'Alolan Exeggutor',
    'alolan-marowak': 'Alolan Marowak',
  };
  if (SPECIAL[lowered]) return SPECIAL[lowered];
  const regionalSuffix = lowered.match(/^(.+)-(alola|galar|hisui|paldea)$/);
  if (regionalSuffix) {
    const labels = {
      alola: 'Alolan',
      galar: 'Galarian',
      hisui: 'Hisuian',
      paldea: 'Paldean',
    };
    return `${labels[regionalSuffix[2]]} ${titleCaseWords(regionalSuffix[1].replace(/-/g, ' '))}`;
  }
  const regionalShort = raw.match(/^(.+?)[\s-]+a$/i);
  if (regionalShort) return `Alolan ${titleCaseWords(regionalShort[1].replace(/-/g, ' '))}`;
  return titleCaseWords(raw.replace(/-/g, ' '));
}

function formatPokemonFrenchFallback(rawName, resolvedSlug) {
  const slug = String(resolvedSlug || '').toLowerCase();
  const manual = getManualFrenchPokemonName(slug);
  if (manual) return manual;
  const REGIONAL_FR = {
    'raichu': `Raichu d'Alola`,
    'raticate': `Rattatac d'Alola`,
    'sandshrew': `Sabelette d'Alola`,
    'sandslash': `Sablaireau d'Alola`,
    'vulpix': `Goupix d'Alola`,
    'ninetales': `Feunard d'Alola`,
    'diglett': `Taupiqueur d'Alola`,
    'dugtrio': `Triopikeur d'Alola`,
    'meowth': `Miaouss d'Alola`,
    'persian': `Persian d'Alola`,
    'geodude': `Racaillou d'Alola`,
    'graveler': `Gravalanch d'Alola`,
    'golem': `Grolem d'Alola`,
    'grimer': `Tadmorv d'Alola`,
    'muk': `Grotadmorv d'Alola`,
    'exeggutor': `Noadkoko d'Alola`,
    'marowak': `Ossatueur d'Alola`,
  };
  const SPECIAL = {
    'purrloin': 'Chacripan',
    'cryogonal': 'Hexagel',
    'piloswine': 'Cochignon',
    'jynx': 'Lippoutou',
    'medicham': 'Charmina',
    'gallade': 'Gallame',
    'heliolisk': 'Iguolta',
    'magneton': 'Magnéton',
    'emolga': 'Emolga',
    'krokorok': 'Escroco',
    'ducklett': 'Couaneton',
    'oddish': 'Mystherbe',
    'metapod': 'Chrysacier',
    'pidgey': 'Roucool',
    'azumarill': 'Azumarill',
    'pikachu': 'Pikachu',
    'wormadam-plant': 'Cheniselle',
    'wormadam-sandy': 'Cheniselle-Sable',
    'wormadam-trash': 'Cheniselle-Déchet',
    'minior-red-meteor': 'Météno',
    'minior-orange-meteor': 'Météno',
    'minior-yellow-meteor': 'Météno',
    'minior-green-meteor': 'Météno',
    'minior-blue-meteor': 'Météno',
    'minior-indigo-meteor': 'Météno',
    'minior-violet-meteor': 'Météno',
    'mr-mime': 'M. Mime',
    'mime-jr': 'Mime Jr.',
  };
  if (SPECIAL[slug]) return SPECIAL[slug];
  const cleanedRaw = sanitizePokemonSourceName(rawName || '');
  const slugRegional = slug.match(/^(?:alolan-|)(raichu|raticate|sandshrew|sandslash|vulpix|ninetales|diglett|dugtrio|meowth|persian|geodude|graveler|golem|grimer|muk|exeggutor|marowak)(?:-alola)?$/);
  if (slugRegional && REGIONAL_FR[slugRegional[1]]) return REGIONAL_FR[slugRegional[1]];
  const rawRegional = cleanedRaw.match(/^(.+?)(?:[\s-]+A|[\s-]+Alola)$/i);
  if (rawRegional) {
    const regionalSlug = getPokemonQuickAlias(rawRegional[1]) || slugify(rawRegional[1]);
    if (REGIONAL_FR[regionalSlug]) return REGIONAL_FR[regionalSlug];
  }
  if (getManualFrenchPokemonName(cleanedRaw.toLowerCase())) return getManualFrenchPokemonName(cleanedRaw.toLowerCase());
  return titleCaseFrench(cleanedRaw || formatPokemonDisplayName(resolvedSlug || ''));
}

function getPokemonQuickAlias(name) {
  const raw = sanitizePokemonSourceName(name);
  const key = normalizeLookupKey(raw);
  const regionalMatch = raw.match(/^(.+?)(?:[\s._-]+)(a|alola|g|galar|h|hisui|p|paldea)$/i);
  if (regionalMatch) {
    const base = getPokemonQuickAlias(regionalMatch[1]) || slugify(regionalMatch[1]);
    const regionMap = { a: 'alola', alola: 'alola', g: 'galar', galar: 'galar', h: 'hisui', hisui: 'hisui', p: 'paldea', paldea: 'paldea' };
    const region = regionMap[String(regionalMatch[2] || '').toLowerCase()];
    if (base && region) return `${base.replace(/-(alola|galar|hisui|paldea)$/i, '')}-${region}`;
  }
  const QUICK = {
    'meteno': 'minior-red-meteor',
    'minior': 'minior-red-meteor',
    'wishiwashi': 'wishiwashi',
    'froussardine': 'wishiwashi',
    'cheniselle': 'wormadam-plant',
    'cheniselle s': 'wormadam-sandy',
    'cheniselle sable': 'wormadam-sandy',
    'cheniselle t': 'wormadam-trash',
    'cheniselle trash': 'wormadam-trash',
    'cheniselle ordure': 'wormadam-trash',
    'wormadam': 'wormadam-plant',
    'wormadam plant': 'wormadam-plant',
    'wormadam sandy': 'wormadam-sandy',
    'wormadam trash': 'wormadam-trash',
    'raichu a': 'raichu-alola',
    'raichu-a': 'raichu-alola',
    'raichu alola': 'raichu-alola',
    'rattata a': 'rattata-alola',
    'rattata-a': 'rattata-alola',
    'rattata alola': 'rattata-alola',
    'rattatac a': 'raticate-alola',
    'raticate a': 'raticate-alola',
    'raticate-a': 'raticate-alola',
    'raticate alola': 'raticate-alola',
    'sabelette alola': 'sandshrew-alola',
    'sandshrew alola': 'sandshrew-alola',
    'sandshrew-a': 'sandshrew-alola',
    'sablaireau alola': 'sandslash-alola',
    'sandslash alola': 'sandslash-alola',
    'sandslash-a': 'sandslash-alola',
    'goupix alola': 'vulpix-alola',
    'vulpix alola': 'vulpix-alola',
    'vulpix-a': 'vulpix-alola',
    'feunard alola': 'ninetales-alola',
    'ninetales alola': 'ninetales-alola',
    'ninetales-a': 'ninetales-alola',
    'taupiqueur alola': 'diglett-alola',
    'diglett alola': 'diglett-alola',
    'diglett-a': 'diglett-alola',
    'triopikeur alola': 'dugtrio-alola',
    'dugtrio alola': 'dugtrio-alola',
    'dugtrio-a': 'dugtrio-alola',
    'miaouss alola': 'meowth-alola',
    'meowth alola': 'meowth-alola',
    'meowth-a': 'meowth-alola',
    'persian alola': 'persian-alola',
    'persian-a': 'persian-alola',
    'racaillou alola': 'geodude-alola',
    'geodude alola': 'geodude-alola',
    'geodude-a': 'geodude-alola',
    'gravalanch alola': 'graveler-alola',
    'graveler alola': 'graveler-alola',
    'graveler-a': 'graveler-alola',
    'golem alola': 'golem-alola',
    'golem-a': 'golem-alola',
    'tadmorv alola': 'grimer-alola',
    'grimer alola': 'grimer-alola',
    'grimer-a': 'grimer-alola',
    'grotadmorv alola': 'muk-alola',
    'muk alola': 'muk-alola',
    'muk-a': 'muk-alola',
    'noadkoko alola': 'exeggutor-alola',
    'exeggutor alola': 'exeggutor-alola',
    'exeggutor-a': 'exeggutor-alola',
    'ossatueur alola': 'marowak-alola',
    'marowak alola': 'marowak-alola',
    'marowak-a': 'marowak-alola',
    'ponyta g': 'ponyta-galar',
    'ponyta-g': 'ponyta-galar',
    'ponyta galar': 'ponyta-galar',
    'galopa g': 'rapidash-galar',
    'rapidash g': 'rapidash-galar',
    'rapidash-g': 'rapidash-galar',
    'rapidash galar': 'rapidash-galar',
    'canarticho g': 'farfetchd-galar',
    'farfetchd g': 'farfetchd-galar',
    'farfetchd-g': 'farfetchd-galar',
    'smogogo g': 'weezing-galar',
    'weezing g': 'weezing-galar',
    'weezing-g': 'weezing-galar',
    'weezing galar': 'weezing-galar',
    'corayome g': 'corsola-galar',
    'corsola g': 'corsola-galar',
    'corsola-g': 'corsola-galar',
    'corsola galar': 'corsola-galar',
    'zigzaton g': 'zigzagoon-galar',
    'zigzagoon g': 'zigzagoon-galar',
    'zigzagoon-g': 'zigzagoon-galar',
    'lineon g': 'linoone-galar',
    'linoone g': 'linoone-galar',
    'linoone-g': 'linoone-galar',
    'darumarond g': 'darumaka-galar',
    'darumaka g': 'darumaka-galar',
    'darumaka-g': 'darumaka-galar',
    'darumaka galar': 'darumaka-galar',
    'sabelette h': 'sneasel-hisui',
    'sneasel h': 'sneasel-hisui',
    'sneasel-h': 'sneasel-hisui',
    'qwilfish h': 'qwilfish-hisui',
    'qwilfish-h': 'qwilfish-hisui',
    'qwilfish hisui': 'qwilfish-hisui',
    'mr mime': 'mr-mime',
    'mime jr': 'mime-jr',
  };
  if (QUICK[key]) return QUICK[key];
  if (/^cheniselle[-\s]?s$/.test(stripDiacritics(String(name || '')).toLowerCase())) return 'wormadam-sandy';
  if (/^cheniselle[-\s]?t$/.test(stripDiacritics(String(name || '')).toLowerCase())) return 'wormadam-trash';
  return '';
}

function getPokemonSlugCandidates(name) {
  const quickAlias = getPokemonQuickAlias(name);
  const approxKey = findApproxDictionaryKey(name, POKEMON_FR_MANUAL);
  const quickResolved = quickAlias || '';
  const quickFrench = quickResolved || '';
  const raw = String(name || '').trim();
  const normalized = stripDiacritics(raw).toLowerCase();
  const compact = normalized
    .replace(/[.':]/g, '')
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  const plain = compact.replace(/--+/g, '-');
  const candidates = [
    quickResolved,
    quickFrench,
    approxKey,
    slugify(raw),
    slugify(plain),
    plain,
  ];
  if (plain === 'meteno' || plain === 'minior') {
    candidates.push('minior-red-meteor', 'minior-orange-meteor');
  }
  if (plain.startsWith('cheniselle')) {
    candidates.push('wormadam-plant', 'wormadam-sandy', 'wormadam-trash');
  }
  return uniqueNonEmpty(candidates);
}

function sanitizeMoveName(name) {
  const raw = String(name || '')
    .replace(/^[\s\-–—•:;,]+/, '')
    .replace(/[\s\-–—•:;,]+$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const normalized = normalizeLookupKey(raw);
  const compact = compactLookupKey(raw);
  const QUICK = {
    'poing de feu': 'fire-punch',
    'poing feu': 'fire-punch',
    'poing glace': 'ice-punch',
    'poing de glace': 'ice-punch',
    'poing eclair': 'thunder-punch',
    'poing-eclair': 'thunder-punch',
    'poing d eclair': 'thunder-punch',
    'facade': 'facade',
    'bruit facade': 'facade',
    'dernierecour': 'last-resort',
    'derniere cour': 'last-resort',
    'derniere-cour': 'last-resort',
    'brouhaha': 'uproar',
    'brou ha ha': 'uproar',
    'eco sphere': 'energy-ball',
    'eco-sphere': 'energy-ball',
    'ecosphere': 'energy-ball',
    'vent mauvais': 'ominous-wind',
    'exploforce': 'focus-blast',
    'larcin': 'thief',
    'psyco': 'psychic',
    'psyko': 'psychic',
    'clairvoyance': 'foresight',
    'force cachee': 'hidden-power',
    'puis cachee': 'hidden-power',
    'puis. cachee': 'hidden-power',
    'puis cache': 'hidden-power',
    'puiscachee': 'hidden-power',
    'puiss cachee': 'hidden-power',
    'puissance cachee': 'hidden-power',
    'puissance cache': 'hidden-power',
    'choc mental': 'psyshock',
    'nitrocharge': 'flame-charge',
    'bomb beurk': 'sludge-bomb',
    'bomb-beurk': 'sludge-bomb',
    'hydroqueue': 'aqua-tail',
    'hydro queue': 'aqua-tail',
    'moid abord': 'me-first',
    'moi d abord': 'me-first',
    'moi dabord': 'me-first',
    'appelattak': 'attack-order',
    'appel attak': 'attack-order',
    'appeldefens': 'defend-order',
    'appel defens': 'defend-order',
    'appeldéfens': 'defend-order',
    'appel defense': 'defend-order',
    'appeldefense': 'defend-order',
    'appelsoin': 'heal-order',
    'appel soin': 'heal-order',
    'appel soins': 'heal-order',
    'appelsoins': 'heal-order',
    'mawashi geri': 'rolling-kick',
    'mawashigeri': 'rolling-kick',
    'pistolet a o': 'water-gun',
    'pistoletao': 'water-gun',
    'pistolet a eau': 'water-gun',
    'ball ombre': 'shadow-ball',
    'ballombre': 'shadow-ball',
    'pouv antique': 'ancient-power',
    'pouv antique.': 'ancient-power',
    'pouvantique': 'ancient-power',
    'pouv antique ': 'ancient-power',
    'danseflamme': 'fiery-dance',
    'danse flamme': 'fiery-dance',
    'air veinard': 'lucky-chant',
    'airveinard': 'lucky-chant',
    'frappe atlas': 'seismic-toss',
    'frappeatlas': 'seismic-toss',
    'vitesse extreme': 'extreme-speed',
    'vitesseextreme': 'extreme-speed',
    'vit extreme': 'extreme-speed',
    'vitextreme': 'extreme-speed',
  };
  if (QUICK[normalized]) return QUICK[normalized];
  if (QUICK[compact]) return QUICK[compact];
  for (const key of buildLooseLookupKeys(raw)) {
    const compactKey = compactLookupKey(key);
    if (QUICK[key]) return QUICK[key];
    if (QUICK[compactKey]) return QUICK[compactKey];
  }
  const splitParts = stripDiacritics(raw)
    .replace(/[']/g, ' ')
    .split(/[\s/|+]+|-(?=[A-ZÀ-ÿ])|-(?=[a-zA-ZÀ-ÿ]{4,})/)
    .map(s => normalizeLookupKey(s))
    .filter(Boolean);
  for (const part of splitParts) {
    if (QUICK[part]) return QUICK[part];
  }
  return '';
}

function cleanMoveDisplayName(name) {
  const raw = String(name || '')
    .replace(/^[\s\-–—•:;,]+/, '')
    .replace(/[\s\-–—•:;,]+$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const canonical = getCanonicalMoveMeta(raw);
  if (canonical.slug) return canonical.nameFr || canonical.nameEn || raw;
  return raw;
}

function formatFrenchMoveFallback(name) {
  const key = normalizeLookupKey(name);
  const QUICK = {
    'facade': 'Façade',
    'assist': 'Assistance',
    'encore': 'Encore',
    'thief': 'Larcin',
    'snarl': 'Aboiement',
    'psychic': 'Psyko',
    'ice beam': 'Laser Glace',
    'blizzard': 'Blizzard',
    'psycho cut': 'Coupe Psycho',
    'fire punch': 'Poing Feu',
    'stone edge': 'Lame de Roc',
    'brick break': 'Casse-Brique',
    'giga impact': 'Giga Impact',
    'hidden power': 'Puissance Cachée',
    'air slash': 'Lame d’Air',
    'foul play': 'Tricherie',
    'swagger': 'Vantardise',
    'dark pulse': 'Vibrobscur',
    'torment': 'Tourmente',
    'wild charge': 'Charge Folle',
    'quick attack': 'Vive-Attaque',
    'flash': 'Flash',
    'rock smash': 'Éclate-Roc',
    'roar': 'Hurlement',
    'water gun': 'Pistolet à O',
    'wing attack': 'Cru-Aile',
    'sludge bomb': 'Bomb-Beurk',
    'aqua tail': 'Hydroqueue',
    'uproar': 'Brouhaha',
    'me first': 'Moi d’Abord',
    'attack order': 'Appel Attak',
    'defend order': 'Appel Défense',
    'heal order': 'Appel Soins',
    'rolling kick': 'Mawashi Geri',
    'fiery dance': 'Danseflamme',
    'lucky chant': 'Air Veinard',
    'seismic toss': 'Frappe Atlas',
    'ancient power': 'Pouv.Antique',
    'extreme speed': 'Vit.Extrême',
  };
  return titleCaseFrench(QUICK[key] || name);
}

function resolveMoveWikiFrenchTitle(name) {
  const normalized = normalizeLookupKey(name);
  const compact = compactLookupKey(name);
  const QUICK = {
    'pouv antique': 'Pouvoir Antique',
    'pouvantique': 'Pouvoir Antique',
    'ancient power': 'Pouvoir Antique',
    'appel defens': 'Appel Défense',
    'appeldefens': 'Appel Défense',
    'defend order': 'Appel Défense',
    'appel attak': 'Appel Attak',
    'attack order': 'Appel Attak',
    'appel soins': 'Appel Soins',
    'heal order': 'Appel Soins',
    'eco sphere': 'Éco-Sphère',
    'ecosphere': 'Éco-Sphère',
    'energy ball': 'Éco-Sphère',
    'bomb beurk': 'Bomb-Beurk',
    'sludge bomb': 'Bomb-Beurk',
    'brouhaha': 'Brouhaha',
    'uproar': 'Brouhaha',
    'psyko': 'Psyko',
    'psyco': 'Psyko',
    'psychic': 'Psyko',
    'larcin': 'Larcin',
    'thief': 'Larcin',
    'puissance cachee': 'Puissance Cachée',
    'puissancecachee': 'Puissance Cachée',
    'hidden power': 'Puissance Cachée',
    'water gun': 'Pistolet à O',
    'pistoletao': 'Pistolet à O',
    'mawashigeri': 'Mawashi Geri',
    'rolling kick': 'Mawashi Geri',
  };
  return QUICK[normalized] || QUICK[compact] || formatFrenchMoveFallback(name);
}

function getMoveSlugCandidates(name) {
  const raw = String(name || '').trim();
  const quick = sanitizeMoveName(raw);
  const normalized = stripDiacritics(raw)
    .replace(/[']/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  const compact = normalized.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/--+/g, '-');
  const loose = normalized.toLowerCase().replace(/[^a-z0-9]/g, '');
  const candidates = [
    quick,
    moveSlug(raw),
    moveSlug(compact),
    compact,
    loose === 'dernierecour' ? 'last-resort' : '',
    loose === 'bruitfacade' ? 'facade' : '',
    loose === 'moidabord' ? 'me-first' : '',
    loose === 'appelattak' ? 'attack-order' : '',
    loose === 'appeldefens' || loose === 'appeldefense' ? 'defend-order' : '',
    loose === 'appelsoin' || loose === 'appelsoins' ? 'heal-order' : '',
    loose === 'mawashigeri' ? 'rolling-kick' : '',
    loose === 'pistoletao' || loose === 'pistoletaeau' ? 'water-gun' : '',
    loose === 'ballombre' ? 'shadow-ball' : '',
    loose === 'pouvantique' ? 'ancient-power' : '',
    loose === 'brouhaha' ? 'uproar' : '',
    loose === 'bombbeurk' ? 'sludge-bomb' : '',
    loose === 'psyco' || loose === 'psyko' ? 'psychic' : '',
    loose === 'larcin' ? 'thief' : '',
    loose === 'puiscachee' || loose === 'puissancecachee' || loose === 'puissancecache' ? 'hidden-power' : '',
  ];
  return uniqueNonEmpty(candidates);
}

function getCanonicalMoveMeta(name) {
  const raw = String(name || '').trim();
  const slugCandidates = getMoveSlugCandidates(raw);
  const slug = slugCandidates.find(Boolean) || moveSlug(raw);
  const manual = MANUAL_MOVE_DATA[slug] || null;
  const approxKey = findApproxDictionaryKey(raw, MOVE_FR_MANUAL);
  const nameFr = manual?.nameFr
    || MOVE_FR_MANUAL[slug]
    || (approxKey ? MOVE_FR_MANUAL[approxKey] : '')
    || titleCaseFrench(String(raw || '').replace(/\s+/g, ' ').trim());
  const nameEn = manual?.nameEn
    || MOVE_EN_MANUAL[slug]
    || (approxKey ? (MOVE_EN_MANUAL[approxKey] || '') : '')
    || formatPokemonDisplayName(slug || raw);
  return { raw, slug, slugCandidates, manual, nameFr, nameEn };
}

async function resolvePokemonIdentifier(name) {
  if (!name) return '';
  const cleanName = sanitizePokemonSourceName(name);
  const quick = await resolveFrenchPokemon(cleanName);
  const approxKey = findApproxDictionaryKey(cleanName, POKEMON_FR_MANUAL);
  const quickSlug = getPokemonQuickAlias(cleanName) || approxKey || slugify(quick || cleanName);
  if (quickSlug && quickSlug !== slugify(cleanName)) return quickSlug;
  const map = await loadPokemonNameMap();
  return map.get(normalizeLookupKey(cleanName)) || approxKey || quickSlug || slugify(cleanName);
}

async function resolveMoveIdentifier(name) {
  if (!name) return '';
  const canonical = getCanonicalMoveMeta(name);
  const quick = canonical.slug || sanitizeMoveName(name);
  const approx = findApproxDictionaryKey(name, MOVE_FR_MANUAL);
  const direct = quick || moveSlug(name);
  const map = await loadMoveNameMap();
  return map.get(normalizeLookupKey(name))
    || map.get(normalizeLookupKey(canonical.nameFr))
    || map.get(normalizeLookupKey(canonical.nameEn))
    || approx
    || direct;
}

async function fetchPokemonData(englishName) {
  const cleanedInput = sanitizePokemonSourceName(englishName);
  const resolvedName = await resolvePokemonIdentifier(cleanedInput);
  const key = (resolvedName || cleanedInput || englishName).toLowerCase();
  const romSpecies = getRomSpeciesData(cleanedInput) || getRomSpeciesData(resolvedName) || getRomSpeciesData(englishName);
  const localPokemon = getLocalPokemonEntry(resolvedName) || getLocalPokemonEntry(cleanedInput) || getLocalPokemonEntry(englishName);
  if (cache.pokemon[key]?._fetched) return cache.pokemon[key];
  if (pendingCache.pokemon[key]) return pendingCache.pokemon[key];
  cache.pokemon[key] = cache.pokemon[key] || {};
  pendingCache.pokemon[key] = (async () => {
    try {
      const slugCandidates = getPokemonSlugCandidates(resolvedName || cleanedInput || englishName);
      let pr = null, sr = null, slug = slugCandidates[0] || slugify(resolvedName || cleanedInput || englishName), speciesUrl = '';
      let pokemonPayload = null;
      const localOnlyTypes = applyVersionAccurateTypes(
        resolvedName || cleanedInput || englishName,
        romSpecies?.types || localPokemon?.types || getManualPokemonTypes(resolvedName) || getManualPokemonTypes(cleanedInput) || getManualPokemonTypes(englishName) || []
      );
      const localOnlyBaseStats = romSpecies?.baseStats && Object.keys(romSpecies.baseStats).length
        ? { ...romSpecies.baseStats }
        : (localPokemon?.baseStats || {});
      const localAbilityNames = (romSpecies?.abilities?.length ? romSpecies.abilities : (localPokemon?.abilities || []));
      const localOnlyAbilities = localAbilityNames.filter(Boolean).map(name => ({
        slug: moveSlug(name),
        nameFr: getManualFrenchAbilityName(name) || titleCaseFrench(String(name || '').replace(/-/g, ' ')),
        nameEn: getManualEnglishAbilityName(name) || formatPokemonDisplayName(name),
      }));
      const hasLocalPokemonPayload = !!(
        localOnlyTypes.length ||
        Object.keys(localOnlyBaseStats).length ||
        localOnlyAbilities.length
      );
      if (hasLocalPokemonPayload) {
        const localSlug = slugCandidates[0] || slugify(resolvedName || cleanedInput || englishName);
        const localFr = formatPokemonFrenchFallback(
          sanitizePokemonSourceName(localPokemon?.nameFr || getManualFrenchPokemonName(localSlug) || romSpecies?.name || cleanedInput || englishName),
          localSlug
        );
        const localEn = formatPokemonDisplayName(
          localPokemon?.nameEn || getManualEnglishPokemonName(localSlug) || romSpecies?.name || resolvedName || cleanedInput || englishName
        );
        cache.pokemon[key] = {
          nameFr: localFr,
          nameEn: localEn,
          sprite: null,
          spriteShiny: null,
          sprite3d: null,
          sprite3dShiny: null,
          types: localOnlyTypes,
          baseStats: localOnlyBaseStats,
          possibleAbilities: localOnlyAbilities,
          _fetched: true,
          _resolvedSlug: localSlug,
          _spriteId: Number(localPokemon?.id || 0) || null,
          _source: 'local-rom'
        };
        return cache.pokemon[key];
      }
      for (const candidate of slugCandidates) {
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${candidate}`);
          if (res.ok) { pr = res; slug = candidate; break; }
        } catch(e) {}
      }
      if (!pr) throw new Error('pokemon-not-found');
      let sprite=null, spriteShiny=null, sprite3d=null, sprite3dShiny=null,
        nameFr=localPokemon?.nameFr || getManualFrenchPokemonName(resolvedName || cleanedInput || englishName) || romSpecies?.name || cleanedInput || englishName,
          nameEn=localPokemon?.nameEn || getManualEnglishPokemonName(resolvedName || cleanedInput || englishName) || formatPokemonDisplayName(resolvedName || cleanedInput || englishName),
          types=((romSpecies?.types?.length ? romSpecies.types : (localPokemon?.types || []))).map(t=>String(t || '').charAt(0).toUpperCase()+String(t || '').slice(1)),
          baseStats={...(romSpecies?.baseStats || localPokemon?.baseStats || {})}, pokeapiId=Number(localPokemon?.id || 0) || null,
          possibleAbilities=((romSpecies?.abilities?.length ? romSpecies.abilities : (localPokemon?.abilities || []))).filter(Boolean).map(name => ({
            slug: moveSlug(name),
            nameFr: getManualFrenchAbilityName(name) || titleCaseFrench(String(name || '').replace(/-/g, ' ')),
            nameEn: getManualEnglishAbilityName(name) || formatPokemonDisplayName(name),
          }));
      const pokemonDisplayMap = await loadPokemonDisplayMap();
      if (pr.ok) {
        const d = await pr.json();
        pokemonPayload = d;
        speciesUrl = d.species?.url || '';
        sprite = d.sprites?.other?.showdown?.front_default || d.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default || d.sprites?.versions?.['generation-iv']?.['diamond-pearl']?.front_default || d.sprites?.front_default;
        spriteShiny = d.sprites?.other?.showdown?.front_shiny || d.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_shiny || d.sprites?.front_shiny;
        sprite3d = d.sprites?.other?.home?.front_default || d.sprites?.other?.['official-artwork']?.front_default || d.sprites?.front_default;
        sprite3dShiny = d.sprites?.other?.home?.front_shiny || d.sprites?.other?.['official-artwork']?.front_shiny || d.sprites?.front_shiny || sprite3d;
        types = applyVersionAccurateTypes(
          d.species?.name || d.name || resolvedName || cleanedInput || englishName,
          (d.types||[]).sort((a,b)=>a.slot-b.slot).map(t=>{const n=t.type.name;return n.charAt(0).toUpperCase()+n.slice(1);})
        );
        const sm = {hp:'hp','attack':'atk',defense:'def','special-attack':'spAtk','special-defense':'spDef',speed:'spd'};
        if (!romSpecies?.baseStats || !Object.keys(romSpecies.baseStats).length) {
          for (const s of (d.stats||[])) { const k=sm[s.stat.name]; if(k) baseStats[k]=s.base_stat; }
        }
        nameEn = getManualEnglishPokemonName(d.species?.name || d.name || resolvedName || cleanedInput || englishName) || formatPokemonDisplayName(d.name || resolvedName || cleanedInput || englishName);
        pokeapiId = d.id;
        if (!possibleAbilities.length) {
          possibleAbilities = (d.abilities || [])
            .sort((a,b)=>(a.slot||0)-(b.slot||0))
            .map(a => a.ability?.name)
            .filter(Boolean)
            .map(name => ({
              slug: name,
              nameFr: getManualFrenchAbilityName(name) || titleCaseFrench(name.replace(/-/g, ' ')),
              nameEn: getManualEnglishAbilityName(name) || formatPokemonDisplayName(name),
            }));
        }
        VANILLA_STATS[(d.name || resolvedName || cleanedInput || englishName || '').toLowerCase()] = { ...baseStats };
        if (pokemonDisplayMap.has((d.species?.name || d.name || '').toLowerCase())) {
          nameFr = pokemonDisplayMap.get((d.species?.name || d.name || '').toLowerCase());
        }
      }
      try {
        sr = speciesUrl ? await fetch(speciesUrl) : await fetch(`https://pokeapi.co/api/v2/pokemon-species/${slug}`);
      } catch(e) {}
      if (sr?.ok) {
        const d = await sr.json();
        const fr = d.names?.find(n=>n.language.name==='fr');
        if (fr && !pokemonDisplayMap.has((pokemonPayload?.species?.name || pokemonPayload?.name || slug || '').toLowerCase())) nameFr = fr.name;
        if (!nameEn || nameEn === englishName) {
          const en = d.names?.find(n=>n.language.name==='en');
          if (en?.name) nameEn = en.name;
        }
      }
      const speciesIdentifier = pokemonPayload?.species?.name || pokemonPayload?.name || slug || cleanedInput || englishName;
      const strictFr = getManualFrenchPokemonName(speciesIdentifier) || getManualFrenchPokemonName(cleanedInput) || getManualFrenchPokemonName(englishName);
      const strictEn = getManualEnglishPokemonName(speciesIdentifier) || getManualEnglishPokemonName(cleanedInput) || getManualEnglishPokemonName(englishName);
      if (!types.length) {
        const manualTypes = getManualPokemonTypes(speciesIdentifier) || getManualPokemonTypes(cleanedInput) || getManualPokemonTypes(englishName);
        if (manualTypes?.length) types = applyVersionAccurateTypes(speciesIdentifier, manualTypes.map(t => t.charAt(0).toUpperCase() + t.slice(1)));
      }
      if (romSpecies?.types?.length) {
        types = applyVersionAccurateTypes(speciesIdentifier, romSpecies.types.map(t => String(t || '').charAt(0).toUpperCase() + String(t || '').slice(1)));
      }
      if (romSpecies?.baseStats && Object.keys(romSpecies.baseStats).length) {
        baseStats = { ...romSpecies.baseStats };
      }
      if (strictFr) nameFr = strictFr;
      else if (pokemonDisplayMap.has(String(speciesIdentifier || '').toLowerCase())) nameFr = pokemonDisplayMap.get(String(speciesIdentifier || '').toLowerCase());
      else if (!nameFr || nameFr === cleanedInput || /^(?:[a-z-]+)$/i.test(nameFr)) {
        const wikiLabels = await resolveWikiLabels('pokemon', englishName);
        if (wikiLabels?.fr) nameFr = wikiLabels.fr;
      }
      nameFr = formatPokemonFrenchFallback(sanitizePokemonSourceName(nameFr || speciesIdentifier), speciesIdentifier);
      if (strictEn) nameEn = strictEn;
      else if (!nameEn || nameEn === cleanedInput) {
        const wikiLabels = await resolveWikiLabels('pokemon', englishName);
        if (wikiLabels?.en) nameEn = wikiLabels.en;
      }
        cache.pokemon[key] = { nameFr, nameEn: formatPokemonDisplayName(nameEn), sprite, spriteShiny, sprite3d, sprite3dShiny, types, baseStats, possibleAbilities, _fetched: true, _pokeapiId: pokeapiId, _spriteId: Number(localPokemon?.id || pokeapiId || 0) || null, _resolvedSlug: slug };
    } catch(e) {
      const fallbackSlug = getPokemonSlugCandidates(resolvedName || cleanedInput || englishName)[0] || slugify(resolvedName || cleanedInput || englishName);
      const pokemonDisplayMap = await loadPokemonDisplayMap();
      const fallbackTypes = applyVersionAccurateTypes(
        resolvedName || cleanedInput || englishName,
        (romSpecies?.types && romSpecies.types.length)
        ? romSpecies.types
        : (getManualPokemonTypes(fallbackSlug) || getManualPokemonTypes(cleanedInput) || getManualPokemonTypes(englishName) || [])
      );
      const wikiLabels = await resolveWikiLabels('pokemon', englishName);
      cache.pokemon[key] = {
        nameFr: formatPokemonFrenchFallback(sanitizePokemonSourceName(localPokemon?.nameFr || getManualFrenchPokemonName(fallbackSlug) || romSpecies?.name || pokemonDisplayMap.get(String(fallbackSlug || '').toLowerCase()) || wikiLabels?.fr || cleanedInput || englishName), fallbackSlug),
        nameEn: formatPokemonDisplayName(localPokemon?.nameEn || getManualEnglishPokemonName(fallbackSlug) || wikiLabels?.en || resolvedName || cleanedInput || englishName),
        sprite: null,
        spriteShiny: null,
        sprite3d: null,
        sprite3dShiny: null,
        types: fallbackTypes.map(t => t.charAt(0).toUpperCase() + t.slice(1)),
        baseStats: romSpecies?.baseStats || localPokemon?.baseStats || {},
        possibleAbilities: ((romSpecies?.abilities?.length ? romSpecies.abilities : (localPokemon?.abilities || []))).filter(Boolean).map(name => ({
          slug: moveSlug(name),
          nameFr: getManualFrenchAbilityName(name) || titleCaseFrench(String(name || '').replace(/-/g, ' ')),
          nameEn: getManualEnglishAbilityName(name) || formatPokemonDisplayName(name),
        })),
        _fetched: true,
        _spriteId: Number(localPokemon?.id || 0) || null,
        _resolvedSlug: fallbackSlug
      };
    } finally {
      delete pendingCache.pokemon[key];
    }
    return cache.pokemon[key];
  })();
  return pendingCache.pokemon[key];
}

async function fetchMoveData(englishName) {
  const canonical = getCanonicalMoveMeta(englishName);
  const resolvedName = await resolveMoveIdentifier(canonical.slug || englishName);
  const key = moveSlug(resolvedName || canonical.slug || englishName);
  const localMove = getLocalMoveEntry(resolvedName) || getLocalMoveEntry(canonical.slug) || getLocalMoveEntry(englishName);
  if (cache.moves[key]?._fetched) return cache.moves[key];
  if (pendingCache.moves[key]) return pendingCache.moves[key];
  pendingCache.moves[key] = (async () => {
  const localFr = localMove?.nameFr || canonical.nameFr || getManualFrenchMoveName(resolvedName || englishName);
  const localEn = localMove?.nameEn || canonical.nameEn || getManualEnglishMoveName(resolvedName || englishName) || formatPokemonDisplayName(resolvedName || englishName);
  const romMove = getRomMoveData(resolvedName || canonical.slug || englishName)
    || getRomMoveData(canonical.slug)
    || getRomMoveData(canonical.nameFr)
    || getRomMoveData(canonical.nameEn)
    || getRomMoveData(englishName);
  const resolveMoveTypeValue = (entry) => {
    if (!entry) return null;
    if (entry.type) return String(entry.type).toLowerCase();
    if (Number.isInteger(Number(entry.typeId)) && TYPE_BY_ID[Number(entry.typeId)]) {
      return TYPE_BY_ID[Number(entry.typeId)].toLowerCase();
    }
    return null;
  };
  if (romMove) {
    cache.moves[key] = {
      nameFr: localFr || formatFrenchMoveFallback(romMove.name || englishName),
      nameEn: localEn || formatPokemonDisplayName(romMove.name || resolvedName || englishName),
      power: romMove.power ?? canonical.manual?.power ?? null,
      accuracy: romMove.accuracy ?? canonical.manual?.accuracy ?? null,
      accuracyKnown: romMove.accuracyKnown !== false,
      pp: romMove.pp ?? canonical.manual?.pp ?? null,
      damageClass: romMove.damageClass || canonical.manual?.damageClass || null,
      type: resolveMoveTypeValue(romMove) || canonical.manual?.type || null,
      typeId: Number.isInteger(Number(romMove.typeId)) ? Number(romMove.typeId) : null,
      _fetched: true,
      _source: 'rom-runtime'
    };
    return cache.moves[key];
  }
  if (localMove) {
    const localAccuracy = (localMove.accuracy === null || localMove.accuracy === undefined || Number(localMove.accuracy) > 100)
      ? null
      : Number(localMove.accuracy);
    cache.moves[key] = {
      nameFr: localFr || formatFrenchMoveFallback(localMove.nameFr || englishName),
      nameEn: localEn || formatPokemonDisplayName(localMove.nameEn || resolvedName || englishName),
      power: localMove.power ?? canonical.manual?.power ?? null,
      accuracy: localAccuracy ?? canonical.manual?.accuracy ?? null,
      accuracyKnown: localAccuracy !== null,
      pp: localMove.pp ?? canonical.manual?.pp ?? null,
      damageClass: (localMove.damageClass || '').toLowerCase() || canonical.manual?.damageClass || null,
      type: resolveMoveTypeValue(localMove) || canonical.manual?.type || null,
      typeId: Number.isInteger(Number(localMove.typeId)) ? Number(localMove.typeId) : null,
      _fetched: true,
      _source: 'local-dex'
    };
    return cache.moves[key];
  }
  cache.moves[key] = { nameFr: localFr || englishName, nameEn: localEn || englishName, _fetched: false };
  const moveDisplayMap = await loadMoveDisplayMap();
  const slugs = uniqueNonEmpty([resolvedName, canonical.slug, ...(canonical.slugCandidates || []), ...getMoveSlugCandidates(resolvedName || englishName)]);
  for (const slug of slugs) {
    if (MANUAL_MOVE_DATA[slug]) {
      cache.moves[key] = { ...MANUAL_MOVE_DATA[slug], nameFr: localFr || MANUAL_MOVE_DATA[slug].nameFr, nameEn: localEn || formatPokemonDisplayName(MANUAL_MOVE_DATA[slug].nameEn || slug), _fetched: true };
      return cache.moves[key];
    }
  }
  for (const slug of slugs) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/move/${slug}`);
      if (res.ok) {
        const d = await res.json();
        const fr = d.names?.find(n=>n.language.name==='fr');
        cache.moves[key] = { nameFr: localFr || formatFrenchMoveFallback(moveDisplayMap.get(d.name) || fr?.name || englishName), power: d.power??null, accuracy: d.accuracy??null, accuracyKnown: true, pp: d.pp ?? null, damageClass: d.damage_class?.name||null, type: d.type?.name||null, _fetched: true, nameEn: localEn || formatPokemonDisplayName(d.name || resolvedName || englishName) };
        return cache.moves[key];
      }
    } catch(e) {}
  }
  const fallbackSlug = slugs.find(s => MANUAL_MOVE_DATA[s]) || '';
  if (fallbackSlug && MANUAL_MOVE_DATA[fallbackSlug]) {
    cache.moves[key] = { ...MANUAL_MOVE_DATA[fallbackSlug], nameFr: localFr || MANUAL_MOVE_DATA[fallbackSlug].nameFr, nameEn: localEn || formatPokemonDisplayName(MANUAL_MOVE_DATA[fallbackSlug].nameEn || fallbackSlug), _fetched: true };
    return cache.moves[key];
  }
  const wikiLabels = await resolveWikiLabels('move', englishName);
  cache.moves[key] = { ...cache.moves[key], nameFr: localFr || formatFrenchMoveFallback(moveDisplayMap.get(resolvedName) || wikiLabels?.fr || englishName), nameEn: localEn || formatPokemonDisplayName(resolvedName || wikiLabels?.en || englishName), _fetched: true };
  return cache.moves[key];
  })().finally(() => { delete pendingCache.moves[key]; });
  return pendingCache.moves[key];
}

async function fetchAbilityData(englishName) {
  const ABILITY_ALIASES = {
    'banc': 'schooling',
    'schooling': 'schooling',
    'intimidation': 'intimidate',
    'levitation': 'levitate',
    'esprit vital': 'vital-spirit',
    'espritvital': 'vital-spirit',
    'absorb eau': 'water-absorb',
    'absorbeau': 'water-absorb',
    'medic nature': 'natural-cure',
    'medicnature': 'natural-cure',
    'corps sain': 'clear-body',
    'corpssain': 'clear-body',
  };
  const rawKey = moveSlug(englishName);
  const key = ABILITY_ALIASES[normalizeLookupKey(englishName)] || rawKey;
  const localAbility = getLocalAbilityEntry(key) || getLocalAbilityEntry(englishName);
  if (cache.abilities[key]) return cache.abilities[key];
  if (pendingCache.abilities[key]) return pendingCache.abilities[key];
  pendingCache.abilities[key] = (async () => {
  const localFr = localAbility?.nameFr || getManualFrenchAbilityName(key) || getManualFrenchAbilityName(englishName);
  const localEn = localAbility?.nameEn || getManualEnglishAbilityName(key) || getManualEnglishAbilityName(englishName) || formatPokemonDisplayName(englishName);
  const romAbility = getRomAbilityData(englishName) || getRomAbilityData(key);
  if (romAbility?.name) {
    cache.abilities[key] = {
      nameFr: localFr || romAbility.name,
      nameEn: localEn || formatPokemonDisplayName(romAbility.name)
    };
    return cache.abilities[key];
  }
  if (localAbility) {
    cache.abilities[key] = {
      nameFr: localFr || localAbility.nameFr || englishName,
      nameEn: localEn || localAbility.nameEn || formatPokemonDisplayName(englishName)
    };
    return cache.abilities[key];
  }
  cache.abilities[key] = { nameFr: localFr || englishName, nameEn: localEn || englishName };
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${key}`);
    if (res.ok) {
      const d = await res.json();
      const fr = d.names?.find(n=>n.language.name==='fr');
      cache.abilities[key] = { nameFr: localFr || (fr?fr.name:englishName), nameEn: localEn || formatPokemonDisplayName(d.name || englishName) };
    }
  } catch(e) {}
  if (!cache.abilities[key]?.nameFr || cache.abilities[key].nameFr === englishName) {
    const wikiLabels = await resolveWikiLabels('ability', englishName);
    cache.abilities[key] = { nameFr: localFr || wikiLabels?.fr || englishName, nameEn: localEn || formatPokemonDisplayName(wikiLabels?.en || englishName) };
  }
  return cache.abilities[key];
  })().finally(() => { delete pendingCache.abilities[key]; });
  return pendingCache.abilities[key];
}

async function fetchItemData(englishName) {
  if (!englishName) return { nameFr: '', sprite: null };
  const canonical = getCanonicalItemMeta(englishName);
  const key = canonical.slug || moveSlug(englishName);
  const localItem = getLocalItemEntry(key) || getLocalItemEntry(englishName) || getLocalItemEntry(canonical.nameFr) || getLocalItemEntry(canonical.nameEn);
  if (cache.items[key]) return cache.items[key];
  if (pendingCache.items[key]) return pendingCache.items[key];
  pendingCache.items[key] = (async () => {
  const localFr = canonical.nameFr;
  const localEn = canonical.nameEn;
  const romItem = getRomItemData(englishName) || getRomItemData(key) || getRomItemData(localFr) || getRomItemData(localEn);
  const fetchItemSprite = async (variants) => {
    for (const slug of uniqueNonEmpty(variants)) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/item/${slug}`);
        if (res.ok) {
          const d = await res.json();
          return { sprite: d.sprites?.default || null, data: d };
        }
      } catch (e) {}
    }
    return { sprite: null, data: null };
  };
  if (romItem?.name) {
    const sprite = resolveLocalItemSpriteCandidates(romItem.name)[0] || resolveLocalItemSpriteCandidates(key)[0] || null;
    cache.items[key] = {
      nameFr: localFr || romItem.name,
      nameEn: localEn || formatPokemonDisplayName(romItem.name),
      sprite
    };
    return cache.items[key];
  }
  if (localItem) {
    cache.items[key] = {
      nameFr: localFr || localItem.nameFr || englishName,
      nameEn: localEn || localItem.nameEn || formatPokemonDisplayName(englishName),
      sprite: resolveLocalItemSpriteCandidates(localItem.slug || key)[0] || null
    };
    return cache.items[key];
  }
  cache.items[key] = { nameFr: localFr || englishName, nameEn: localEn || englishName, sprite: null };
  const { sprite, data } = await fetchItemSprite(canonical.slugCandidates);
  if (data) {
    const fr = data.names?.find(n=>n.language.name==='fr');
    cache.items[key] = { nameFr: localFr || (fr?fr.name:englishName), nameEn: localEn || formatPokemonDisplayName(data.name || englishName), sprite };
    return cache.items[key];
  }
  const wikiLabels = await resolveWikiLabels('item', englishName);
  cache.items[key] = { ...cache.items[key], nameFr: localFr || wikiLabels?.fr || englishName, nameEn: localEn || formatPokemonDisplayName(wikiLabels?.en || englishName) };
  return cache.items[key];
  })().finally(() => { delete pendingCache.items[key]; });
  return pendingCache.items[key];
}

function getLearnsetVersionGroups() {
  const gen = detectedVersionInfo?.gen || 4;
  if (gen >= 9) return ['scarlet-violet'];
  if (gen >= 8) return ['sword-shield','brilliant-diamond','shining-pearl'];
  if (gen >= 7) return ['sun-moon','ultra-sun-ultra-moon'];
  if (gen >= 6) return ['x-y','omega-ruby-alpha-sapphire'];
  if (gen >= 5) return ['black-white','black-2-white-2'];
  return ['diamond-pearl','platinum','brilliant-diamond','shining-pearl'];
}

function getFallbackLearnsetVersionGroups() {
  return [
    'scarlet-violet',
    'sword-shield','brilliant-diamond','shining-pearl',
    'sun-moon','ultra-sun-ultra-moon',
    'x-y','omega-ruby-alpha-sapphire',
    'black-white','black-2-white-2',
    'heartgold-soulsilver',
    'diamond-pearl','platinum',
    'firered-leafgreen','ruby-sapphire','emerald',
  ];
}

function extractLevelUpMovesFromPayload(payload, versionGroups) {
  const versionGroupSet = new Set(versionGroups || []);
  const moveMap = new Map();
  for (const mv of (payload?.moves || [])) {
    for (const vd of (mv.version_group_details || [])) {
      if (vd.move_learn_method?.name !== 'level-up') continue;
      if (versionGroupSet.size && !versionGroupSet.has(vd.version_group?.name)) continue;
      const prev = moveMap.get(mv.move.name);
      const nextLevel = Number(vd.level_learned_at || 0);
      if (!prev || nextLevel > prev.learnLevel) {
        moveMap.set(mv.move.name, { moveName: mv.move.name, learnLevel: nextLevel });
      }
    }
  }
  return [...moveMap.values()].sort((a,b)=>b.learnLevel-a.learnLevel);
}

async function fetchLearnset(slug, level) {
  const resolvedSlug = await resolvePokemonIdentifier(slug);
  const candidates = getPokemonSlugCandidates(resolvedSlug || slug);
  const cacheKey = candidates[0] || resolvedSlug || slug;
  if (cache.learnset[cacheKey]) return cache.learnset[cacheKey];
  cache.learnset[cacheKey] = [];
  try {
    for (const candidate of candidates) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${candidate}`);
      if (!res.ok) continue;
      const d = await res.json();
      const preferredGroups = getLearnsetVersionGroups();
      let lvMoves = extractLevelUpMovesFromPayload(d, preferredGroups);
      if (!lvMoves.length) {
        lvMoves = extractLevelUpMovesFromPayload(d, getFallbackLearnsetVersionGroups());
      }
      if (!lvMoves.length) {
        lvMoves = extractLevelUpMovesFromPayload(d, []);
      }
      if (lvMoves.length) {
        cache.learnset[cacheKey] = lvMoves.filter(m => Number.isFinite(m.learnLevel));
        break;
      }
    }
  } catch(e) {}
  return cache.learnset[cacheKey];
}

async function fetchLearnsetForLumiFallback(poke, speciesKey, pokeData) {
  const namesToTry = uniqueNonEmpty([
    speciesKey,
    pokeData?._resolvedSlug,
    pokeData?.nameEn,
    pokeData?.nameFr,
    poke?.species,
    poke?._frName,
    sanitizePokemonSourceName(poke?.species || ''),
    sanitizePokemonSourceName(pokeData?.nameFr || ''),
  ]);
  let best = [];
  for (const name of namesToTry) {
    try {
      const moves = await fetchLearnset(name, poke?.level || 1);
      if (moves?.length > best.length) best = moves;
      if (best.length >= 4) break;
    } catch (e) {}
  }
  return best;
}

// ── REAL STAT CALC (Gen IV) ───────────────────────────────────────────────────
function calcRealStats(baseStats, ivs, evs, nature, level) {
  const NATURE_MODS = {
    Hardy:{},Docile:{},Serious:{},Bashful:{},Quirky:{},
    Lonely:{atk:1.1,def:0.9}, Brave:{atk:1.1,spd:0.9}, Adamant:{atk:1.1,spAtk:0.9}, Naughty:{atk:1.1,spDef:0.9},
    Bold:{def:1.1,atk:0.9}, Relaxed:{def:1.1,spd:0.9}, Impish:{def:1.1,spAtk:0.9}, Lax:{def:1.1,spDef:0.9},
    Timid:{spd:1.1,atk:0.9}, Hasty:{spd:1.1,def:0.9}, Jolly:{spd:1.1,spAtk:0.9}, Naive:{spd:1.1,spDef:0.9},
    Modest:{spAtk:1.1,atk:0.9}, Mild:{spAtk:1.1,def:0.9}, Quiet:{spAtk:1.1,spd:0.9}, Rash:{spAtk:1.1,spDef:0.9},
    Calm:{spDef:1.1,atk:0.9}, Gentle:{spDef:1.1,def:0.9}, Sassy:{spDef:1.1,spd:0.9}, Careful:{spDef:1.1,spAtk:0.9},
  };
  const mods = NATURE_MODS[nature] || {};
  const result = {};
  const KEYS = ['hp','atk','def','spAtk','spDef','spd'];
  KEYS.forEach(k => {
    const base = baseStats[k] ?? 0;
    const iv = ivs[k] ?? 31;
    const ev = evs[k] ?? 0;
    if (k === 'hp') result[k] = Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+level+10;
    else result[k] = Math.floor((Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+5)*(mods[k]||1));
  });
  return result;
}

// Matches the Smogon Dex stat bar scale and color ramp.
function smogonStatWidth(stat) {
  return Math.max(Math.min((Number(stat) || 0) * 2, 400), 18) / 400 * 100;
}

function smogonStatColor(stat) {
  const value = Number(stat) || 0;
  const ramp = Math.floor(Math.min(Math.max(value - 50, 0), 100) * 2.55);
  const toHex = n => (`0${Math.max(0, Math.min(255, Math.round(n))).toString(16)}`).slice(-2);
  const red = toHex(Math.min((255 - ramp) * 2, 255));
  const green = toHex(Math.min(ramp * 2, 255));
  const blue = toHex(Math.floor(Math.min(Math.max(value - 140, 0), 60) * (255 / 60)));
  return `#${red}${green}${blue}`;
}

function smogonStatStyle(stat, widthStat = stat) {
  return `--stat-color:${smogonStatColor(stat)};--stat-width:${smogonStatWidth(widthStat).toFixed(2)}%`;
}

function renderStatBars(stats, max) {
  const LABELS = {hp:'HP',atk:'ATK',def:'DEF',spAtk:'SpA',spDef:'SpD',spd:'SPD'};
  return Object.entries(LABELS).map(([k,lbl])=>{
    const v = stats[k]??0;
    const pct = Math.round(v/max*100);
    const scaledStat = Math.round((v / max) * 100);
    return `<div class="stat-row" style="${smogonStatStyle(scaledStat, pct * 2)}"><span class="stat-name">${lbl}</span><div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${pct}%"></div></div><span class="stat-num">${v}</span></div>`;
  }).join('');
}

function renderDualStatBars(withStats, withoutStats) {
  const LABELS = {hp:'HP',atk:'ATK',def:'DEF',spAtk:'SpA',spDef:'SpD',spd:'SPD'};
  return Object.entries(LABELS).map(([k,lbl])=>{
    const applied = withStats[k]??0;
    const base = withoutStats[k]??0;
    const v = useAppliedStats ? applied : base;
    return `<div class="real-stat-row" style="${smogonStatStyle(v)}"><span class="stat-name">${lbl}</span><div class="stat-bar-bg"><div class="real-stat-bar-fill stat-bar-fill" style="width:var(--stat-width)"></div></div><span class="stat-num">${v}</span></div>`;
  }).join('');
}

function typeClass(t) {
  const map={Normal:'normal',Fire:'fire',Water:'water',Electric:'electric',Grass:'grass',Ice:'ice',Fighting:'fighting',Poison:'poison',Ground:'ground',Flying:'flying',Psychic:'psychic',Bug:'bug',Rock:'rock',Ghost:'ghost',Dragon:'dragon',Dark:'dark',Steel:'steel',Fairy:'fairy'};
  return map[t]||'normal';
}
function wikiLinkMove(fr,en){
  const frTitle = resolveMoveWikiFrenchTitle(fr);
  const enTitle = formatPokemonDisplayName(en || fr).replace(/-/g,' ');
  return {
    fr:`https://www.pokepedia.fr/${encodeURIComponent(frTitle.replace(/ /g,'_'))}`,
    en:`https://bulbapedia.bulbagarden.net/wiki/${encodeURIComponent(enTitle.replace(/ /g,'_'))}_(move)`
  };
}
function wikiLinkAbility(fr,en){return{fr:`https://www.pokepedia.fr/${encodeURIComponent(fr.replace(/ /g,'_'))}`,en:`https://bulbapedia.bulbagarden.net/wiki/${encodeURIComponent(en.replace(/ /g,'_'))}_(Ability)`};}
function wikiLinkItem(fr,en){return{fr:`https://www.pokepedia.fr/${encodeURIComponent(fr.replace(/ /g,'_'))}`,en:`https://bulbapedia.bulbagarden.net/wiki/${encodeURIComponent(en.replace(/ /g,'_'))}`};}

// ── DATA PROCESSING ───────────────────────────────────────────────────────────
function partySig(party) {
  return (party||[]).map(p=>p.species+'|'+p.level+'|'+p.nature+'|'+[...(p.moveset||[])].sort().join(',')).join(';');
}

function processData(data) {
  const valid = data.filter(t => { const n=t.readOnly.name.trim(); return n&&n!=='-'&&n!==' -'; });
  const seen = new Set(); const unique = [];
  for (const t of valid) {
    const sig = `${getTrainerGroupKey(t).toLowerCase()}:::${partySig(t.party)}`;
    if (!seen.has(sig)) { seen.add(sig); unique.push(t); }
  }
  groupedTrainers = {};
  resetTrainerDisplayCaches();
  trainerPrefetchCache.clear();
  for (const t of unique) {
    const groupKey = getTrainerGroupKey(t);
    (groupedTrainers[groupKey] = groupedTrainers[groupKey] || []).push(t);
  }
  sortTrainerVersions();
  buildSidebarTrainerIndex();
}

function getTrainerGroupKey(trainer) {
  const name = cleanTrainerName(trainer?.readOnly?.name?.trim() || '');
  const cls = cleanTrainerName(getTrainerClassName(trainer, name) || '');
  if (!name) return '';
  if (!cls || name.toLowerCase().startsWith(cls.toLowerCase())) return name;
  return `${cls}__${name}`;
}

function sortTrainerVersions() {
  Object.values(groupedTrainers).forEach(versions => {
    versions.sort((a, b) => {
      const la = (a.party || []).map(p => p.level || 0);
      const lb = (b.party || []).map(p => p.level || 0);
      const mina = la.length ? Math.min(...la) : 0;
      const minb = lb.length ? Math.min(...lb) : 0;
      if (mina !== minb) return mina - minb;
      return (a.readOnly?.trainerID || 0) - (b.readOnly?.trainerID || 0);
    });
  });
}

function buildSidebarTrainerIndex() {
  const entries = Object.keys(groupedTrainers).map(groupKey => {
    const versions = groupedTrainers[groupKey] || [];
    const first = versions[0] || {};
    const baseName = cleanTrainerName(groupKeyToName(groupKey));
    const displayEn = getTrainerDisplayNameEn(first, baseName);
    const displayFr = getTrainerNameFr(first, baseName) || '';
    const sortFr = getTrainerDisplayNameCached(first, baseName, 'fr');
    const sortEn = getTrainerDisplayNameCached(first, baseName, 'en');
    return {
      groupKey,
      versions,
      first,
      baseName,
      trainerId: String(first?.readOnly?.trainerID ?? ''),
      displayEn,
      displayFr,
      sortFr,
      sortEn,
      searchEn: normalizeLookupKey(displayEn),
      searchFr: normalizeLookupKey(displayFr),
      searchBase: normalizeLookupKey(baseName),
      searchId: normalizeLookupKey(`id ${first?.readOnly?.trainerID ?? ''}`),
    };
  });
  entries.sort((a, b) => {
    const left = currentLang === 'fr' ? a.sortFr : a.sortEn;
    const right = currentLang === 'fr' ? b.sortFr : b.sortEn;
    return String(left || '').localeCompare(String(right || ''), 'fr');
  });
  sidebarTrainerIndex = entries;
}

function scheduleRenderList(delay = 180) {
  clearTimeout(sidebarRenderDebounceTimer);
  sidebarRenderDebounceTimer = setTimeout(() => {
    renderList();
  }, delay);
}

function collectDatasetResources() {
  // Build one deduplicated resource list so we can hydrate caches once up front
  // instead of doing slow network/local lookups every time the user clicks a trainer.
  const species = new Set();
  const abilities = new Set();
  const items = new Set();
  const moves = new Set();
  const trainers = Object.values(groupedTrainers).flat();
  for (const trainer of trainers) {
    for (const poke of (trainer.party || [])) {
      const speciesName = sanitizePokemonSourceName(poke.species || poke._frName || '');
      if (speciesName) species.add(speciesName);
      if (poke.ability) abilities.add(poke.ability);
      for (const ability of (poke.abilities || [])) if (ability) abilities.add(ability);
      if (poke.heldItem) items.add(poke.heldItem);
      for (const move of (poke.moveset || [])) if (move) moves.add(move);
    }
  }
  return {
    species: [...species],
    abilities: [...abilities],
    items: [...items],
    moves: [...moves],
  };
}

async function runBatchedTasks(items, worker, progressBase, progressSpan, stageLabel, batchSize = 12) {
  if (!items.length) return;
  for (let index = 0; index < items.length; index += batchSize) {
    const batch = items.slice(index, index + batchSize);
    await Promise.allSettled(batch.map(worker));
    const done = Math.min(items.length, index + batch.length);
    const pct = progressBase + (done / items.length) * progressSpan;
    setGlobalLoadingProgress(pct, `${stageLabel} (${done}/${items.length})`);
    await waitForLoadingFrame();
  }
}

async function hydrateCurrentDatasetResources() {
  // Fully warm the dataset before first render. This makes trainer navigation
  // feel instant afterwards, which is better than lazy-loading on every click.
  const resources = collectDatasetResources();
  datasetHydrationState.loading = true;
  const totalEntries = resources.species.length + resources.abilities.length + resources.items.length + resources.moves.length;
  datasetHydrationState.total = totalEntries;
  datasetHydrationState.done = 0;
  if (!totalEntries) {
    setGlobalLoadingProgress(100, currentLang === 'fr' ? 'Dataset prêt' : 'Dataset ready');
    datasetHydrationState.loading = false;
    return;
  }
  setGlobalLoadingProgress(8, currentLang === 'fr' ? 'Préparation des ressources locales…' : 'Preparing local resources…');
  await runBatchedTasks(
    resources.species,
    name => fetchPokemonData(name),
    8,
    34,
    currentLang === 'fr' ? 'Pokémon' : 'Pokemon',
    10
  );
  await runBatchedTasks(
    resources.abilities,
    name => fetchAbilityData(name),
    42,
    12,
    currentLang === 'fr' ? 'Talents' : 'Abilities',
    18
  );
  await runBatchedTasks(
    resources.items,
    name => fetchItemData(name),
    54,
    12,
    currentLang === 'fr' ? 'Objets' : 'Items',
    18
  );
  await runBatchedTasks(
    resources.moves,
    name => fetchMoveData(name),
    66,
    28,
    currentLang === 'fr' ? 'Attaques' : 'Moves',
    18
  );
  setGlobalLoadingProgress(100, currentLang === 'fr' ? 'Chargement terminé' : 'Loading complete');
  datasetHydrationState.loading = false;
}

// ── VERSION DETECTION ─────────────────────────────────────────────────────────
const VERSION_INFO = {
  'Luminescent Platinum': { name: 'Luminescent Platinum', gen: 8, spriteGen: 'platinum' },
  'Pokemon BDSP':         { name: 'Pokémon BDSP', gen: 8, spriteGen: 'diamond-pearl' },
  'Pokemon Platinum':     { name: 'Pokémon Platine',  gen: 4, spriteGen: 'platinum' },
  'Pokemon Diamond':      { name: 'Pokémon Diamant',  gen: 4, spriteGen: 'diamond-pearl' },
  'Pokemon Pearl':        { name: 'Pokémon Perle',    gen: 4, spriteGen: 'diamond-pearl' },
  'Pokemon Brilliant Diamond': { name: 'Pokémon Diamant Étincelant', gen: 8, spriteGen: 'diamond-pearl' },
  'Pokemon Shining Pearl': { name: 'Pokémon Perle Scintillante', gen: 8, spriteGen: 'diamond-pearl' },
  'Pokemon Luminescent Diamond': { name: 'Pokémon Luminescent Diamant', gen: 8, spriteGen: 'diamond-pearl' },
  'Pokemon Luminescent Pearl': { name: 'Pokémon Luminescent Perle', gen: 8, spriteGen: 'diamond-pearl' },
  'Pokemon HeartGold':    { name: 'Pokémon Or HeartGold', gen: 4, spriteGen: 'heartgold-soulsilver' },
  'Pokemon SoulSilver':   { name: 'Pokémon Argent SoulSilver', gen: 4, spriteGen: 'heartgold-soulsilver' },
  'Pokemon Black':        { name: 'Pokémon Noir', gen: 5, spriteGen: 'black-white' },
  'Pokemon White':        { name: 'Pokémon Blanc', gen: 5, spriteGen: 'black-white' },
  'Pokemon Black 2':      { name: 'Pokémon Noir 2', gen: 5, spriteGen: 'black-white-2' },
  'Pokemon White 2':      { name: 'Pokémon Blanc 2', gen: 5, spriteGen: 'black-white-2' },
  'Pokemon X':            { name: 'Pokémon X', gen: 6, spriteGen: 'x-y' },
  'Pokemon Y':            { name: 'Pokémon Y', gen: 6, spriteGen: 'x-y' },
  'Pokemon Omega Ruby':   { name: 'Pokémon Rubis Oméga', gen: 6, spriteGen: 'omegaruby-alphasapphire' },
  'Pokemon Alpha Sapphire':{ name: 'Pokémon Saphir Alpha', gen: 6, spriteGen: 'omegaruby-alphasapphire' },
  'Pokemon Sun':          { name: 'Pokémon Soleil', gen: 7, spriteGen: 'ultra-sun-ultra-moon' },
  'Pokemon Moon':         { name: 'Pokémon Lune', gen: 7, spriteGen: 'ultra-sun-ultra-moon' },
  'Pokemon Ultra Sun':    { name: 'Pokémon Ultra-Soleil', gen: 7, spriteGen: 'ultra-sun-ultra-moon' },
  'Pokemon Ultra Moon':   { name: 'Pokémon Ultra-Lune', gen: 7, spriteGen: 'ultra-sun-ultra-moon' },
  'Pokemon Sword':        { name: 'Pokémon Épée', gen: 8, spriteGen: null },
  'Pokemon Shield':       { name: 'Pokémon Bouclier', gen: 8, spriteGen: null },
  'Pokemon Scarlet':      { name: 'Pokémon Écarlate', gen: 9, spriteGen: null },
  'Pokemon Violet':       { name: 'Pokémon Violet', gen: 9, spriteGen: null },
  'Version Noir':         { name: 'Pokémon Noir', gen: 5, spriteGen: 'black-white' },
  'Version Blanc':        { name: 'Pokémon Blanc', gen: 5, spriteGen: 'black-white' },
};

const VERSION_PATTERNS = [
  { key:'Luminescent Platinum', patterns:[/\bluminescent\s+platinum\b/i, /\bluminescent\b/i] },
  { key:'Pokemon Brilliant Diamond', patterns:[/\bbrilliant\s+diamond\b/i, /\bpokemon\s+brilliant\s+diamond\b/i, /\bdiamant\s+etincelant\b/i, /\bbdsp\b/i] },
  { key:'Pokemon Shining Pearl', patterns:[/\bshining\s+pearl\b/i, /\bpokemon\s+shining\s+pearl\b/i, /\bperle\s+scintillante\b/i] },
  { key:'Pokemon Platinum', patterns:[/\bpokemon\s+platinum\b/i, /\bpokemon\s+version\s+platine\b/i, /\bversion\s+platine\b/i, /\bpokeplatine\b/i, /\bplatinum\s+version\b/i, /\bplatine\b/i] },
  { key:'Pokemon Diamond', patterns:[/\bpokemon\s+diamond\b/i, /\bpokemon\s+version\s+diamant\b/i, /\bversion\s+diamant\b/i, /\bdiamant\b/i] },
  { key:'Pokemon Pearl', patterns:[/\bpokemon\s+pearl\b/i, /\bpokemon\s+version\s+perle\b/i, /\bversion\s+perle\b/i, /\bperle\b/i] },
  { key:'Pokemon HeartGold', patterns:[/\bpokemon\s+heartgold\b/i, /\bheartgold\b/i] },
  { key:'Pokemon SoulSilver', patterns:[/\bpokemon\s+soulsilver\b/i, /\bsoulsilver\b/i] },
  { key:'Pokemon Black 2', patterns:[/\bpokemon\s+black\s*2\b/i, /\bversion\s+noir\s*2\b/i, /\bblack\s*2\b/i, /\bnoir\s*2\b/i] },
  { key:'Pokemon White 2', patterns:[/\bpokemon\s+white\s*2\b/i, /\bversion\s+blanc\s*2\b/i, /\bwhite\s*2\b/i, /\bblanc\s*2\b/i] },
  { key:'Pokemon Black', patterns:[/\bpokemon\s+black\b/i, /\bversion\s+noir\b/i, /\bpokenoir\b/i, /\bnoir\b/i] },
  { key:'Pokemon White', patterns:[/\bpokemon\s+white\b/i, /\bversion\s+blanc\b/i, /\bblanc\b/i] },
  { key:'Pokemon X', patterns:[/\bpokemon\s+x\b/i, /\bpokex\b/i, /randomization of pokemon x completed/i] },
  { key:'Pokemon Y', patterns:[/\bpokemon\s+y\b/i, /\bpokey\b/i, /randomization of pokemon y completed/i] },
  { key:'Pokemon Omega Ruby', patterns:[/\bpokemon\s+omega\s+ruby\b/i, /\bomega\s+ruby\b/i] },
  { key:'Pokemon Alpha Sapphire', patterns:[/\bpokemon\s+alpha\s+sapphire\b/i, /\balpha\s+sapphire\b/i] },
  { key:'Pokemon Ultra Sun', patterns:[/\bpokemon\s+ultra\s+sun\b/i, /\bultra\s+sun\b/i, /\bpokemon\s+ultra\s+soleil\b/i, /\bultra\s+soleil\b/i, /\bversion\s+ultra\s+soleil\b/i] },
  { key:'Pokemon Ultra Moon', patterns:[/\bpokemon\s+ultra\s+moon\b/i, /\bultra\s+moon\b/i, /\bpokemon\s+ultra\s+lune\b/i, /\bultra\s+lune\b/i, /\bversion\s+ultra\s+lune\b/i] },
  { key:'Pokemon Sun', patterns:[/\bpokemon\s+sun\b/i, /\bpokemon\s+soleil\b/i, /\bversion\s+soleil\b/i, /\bsoleil\b/i] },
  { key:'Pokemon Moon', patterns:[/\bpokemon\s+moon\b/i, /\bpokemon\s+lune\b/i, /\bversion\s+lune\b/i, /\blune\b/i] },
  { key:'Pokemon Sword', patterns:[/\bpokemon\s+sword\b/i, /\bepee\b/i, /\bsword\b/i] },
  { key:'Pokemon Shield', patterns:[/\bpokemon\s+shield\b/i, /\bbouclier\b/i, /\bshield\b/i] },
  { key:'Pokemon Scarlet', patterns:[/\bpokemon\s+scarlet\b/i, /\becarlate\b/i, /\bscarlet\b/i] },
  { key:'Pokemon Violet', patterns:[/\bpokemon\s+violet\b/i, /\bviolet\b/i] },
];

function makeVersionResult(key, source = 'fallback', confidence = 0.5, detail = '') {
  const info = VERSION_INFO[key] || { name: key, gen: 4, spriteGen: 'platinum' };
  return { ...info, key, source, confidence, detail };
}

function tryMatchVersionInString(raw, source, confidence = 0.9) {
  if (!raw) return null;
  for (const entry of VERSION_PATTERNS) {
    if (entry.patterns.some(rx => rx.test(raw))) {
      return makeVersionResult(entry.key, source, confidence, raw.trim().slice(0, 180));
    }
  }
  return null;
}

function detectVersionByGenerationHint(raw, source = 'heuristic') {
  const combined = (raw || '').toLowerCase();
  const gen7names = ['rowlet','litten','popplio','pikipek','yungoos','grubbin','wishiwashi','morelull','salandit','stufful','bounsweet','comfey','oranguru','passimian','wimpod','sandygast','type:null','jangmo-o','tapu koko','cosmoem','cosmog','solgaleo','lunala'];
  const gen6names = ['chespin','fennekin','froakie','bunnelby','fletchling','litleo','flabebe','skiddo','pancham','espurr','honedge','inkay','helioptile','tyrunt','amaura','sylveon'];
  const gen5names = ['snivy','tepig','oshawott','victini','patrat','lillipup','purrloin','munna','pidove','blitzle','roggenrola'];
  const gen8names = ['grookey','scorbunny','sobble','wooloo','chewtle','yamper','rolycoly','applin','silicobra','cramorant','arrokuda'];
  const gen9names = ['sprigatito','fuecoco','quaxly','lechonk','pawmi','smoliv','tadbulb','nymble'];
  if (gen9names.some(n=>combined.includes(n))) return { name: 'Pokémon Écarlate/Violet', gen:9, spriteGen:null, key:'Pokemon Scarlet', source, confidence:.35, detail:'species-signature' };
  if (gen8names.some(n=>combined.includes(n))) return { name: 'Pokémon Épée/Bouclier', gen:8, spriteGen:null, key:'Pokemon Sword', source, confidence:.35, detail:'species-signature' };
  if (gen7names.some(n=>combined.includes(n))) return { name: 'Pokémon Soleil/Lune', gen:7, spriteGen:'ultra-sun-ultra-moon', key:'Pokemon Moon', source, confidence:.35, detail:'species-signature' };
  if (gen6names.some(n=>combined.includes(n))) return { name: 'Pokémon X/Y', gen:6, spriteGen:'x-y', key:'Pokemon X', source, confidence:.35, detail:'species-signature' };
  if (gen5names.some(n=>combined.includes(n))) return { name: 'Pokémon Noir/Blanc', gen:5, spriteGen:'black-white', key:'Pokemon Black', source, confidence:.35, detail:'species-signature' };
  return null;
}

function detectVersionFromText(text, filename) {
  const shortText = text.substring(0, 60000);
  const headerText = text.substring(0, 12000);
  const exactSources = [
    { value: (text.match(/Randomization of (.+?) completed\./i) || [])[1], source: 'log-summary', confidence: 1 },
    { value: (text.match(/File name:\s*(.+)/i) || [])[1], source: 'rom-diagnostics', confidence: 1 },
    { value: filename, source: 'filename', confidence: 0.8 },
    { value: headerText, source: 'log-header', confidence: 0.95 },
  ];

  for (const candidate of exactSources) {
    const match = tryMatchVersionInString(candidate.value || '', candidate.source, candidate.confidence);
    if (match) return match;
  }

  const inferred = detectVersionByGenerationHint(shortText, 'species-fallback');
  if (inferred) return inferred;
  return makeVersionResult('Pokemon Platinum', 'default', 0.1, 'fallback');
}

function detectVersionFromData(data, filename = '') {
  if (!Array.isArray(data) || !data.length) return detectVersionFromText('', filename);
  if (detectLumi(data)) return makeVersionResult('Luminescent Platinum', 'json-lumi', 1, 'luminescent-signature');

  const labels = data.slice(0, 250).map(t => t?.nameLabel || '').filter(Boolean);
  const joinedLabels = labels.join(' ');
  const labelBuckets = [
    { test: /^DP_/i, key: 'Pokemon BDSP', score: labels.filter(l => /^DP_/i.test(l)).length },
    { test: /^BW_/i, key: null, score: labels.filter(l => /^BW_/i.test(l)).length },
    { test: /^B2W2_/i, key: null, score: labels.filter(l => /^B2W2_/i.test(l)).length },
    { test: /^XY_/i, key: null, score: labels.filter(l => /^XY_/i.test(l)).length },
    { test: /^SM_/i, key: null, score: labels.filter(l => /^SM_/i.test(l)).length },
  ];
  const topBucket = labelBuckets.sort((a,b)=>b.score-a.score)[0];

  const filenameMatch = tryMatchVersionInString(filename, 'filename', 0.85);
  if (filenameMatch) {
    if (topBucket?.score && topBucket.test.test(joinedLabels)) filenameMatch.detail = `${filenameMatch.detail || ''} + labels`;
    return filenameMatch;
  }

  if (topBucket?.score >= 10) {
    if (topBucket.key) return makeVersionResult(topBucket.key, 'json-labels', 0.92, labels[0] || 'DP labels');
    if (topBucket.test.test(labels[0] || '')) {
      if (topBucket.test.toString().includes('B2W2')) return { name:'Pokémon Noir 2/Blanc 2', gen:5, spriteGen:'black-white-2', key:'Pokemon Black 2', source:'json-labels', confidence:.7, detail:'B2W2 labels' };
      if (topBucket.test.toString().includes('BW')) return { name:'Pokémon Noir/Blanc', gen:5, spriteGen:'black-white', key:'Pokemon Black', source:'json-labels', confidence:.7, detail:'BW labels' };
      if (topBucket.test.toString().includes('XY')) return { name:'Pokémon X/Y', gen:6, spriteGen:'x-y', key:'Pokemon X', source:'json-labels', confidence:.7, detail:'XY labels' };
      if (topBucket.test.toString().includes('SM')) return { name:'Pokémon Soleil/Lune', gen:7, spriteGen:'ultra-sun-ultra-moon', key:'Pokemon Moon', source:'json-labels', confidence:.7, detail:'SM labels' };
    }
  }

  const raw = JSON.stringify(data.slice(0, 50));
  return detectVersionByGenerationHint(raw, 'json-species') || detectVersionFromText(raw, filename);
}

function parseGlobalSearchQuery(query) {
  const raw = String(query || '').trim().toLowerCase();
  let level = null;
  let pokemonTerm = raw;
  const levelMatch = raw.match(/\b(?:lv|lvl|level|niveau)\.?\s*(\d{1,3})\b/) || raw.match(/\b(\d{1,3})\b$/);
  if (levelMatch) {
    level = parseInt(levelMatch[1], 10);
    pokemonTerm = raw
      .replace(levelMatch[0], ' ')
      .replace(/\b(?:lv|lvl|level|niveau)\b/gi, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
  return { raw, pokemonTerm, level };
}

function isPokemonSearchQuery(parsedQuery) {
  if (!parsedQuery?.raw) return false;
  return !!parsedQuery.pokemonTerm || (parsedQuery.level !== null && !parsedQuery.raw.match(/[a-zà-ÿ]/i));
}

function getPokemonSearchHaystack(poke) {
  const cleanSpecies = sanitizePokemonSourceName(poke?.species || '');
  const frenchFromSource = formatPokemonFrenchFallback(cleanSpecies || poke?._frName || '', cleanSpecies);
  const resolvedAlias = getPokemonQuickAlias(cleanSpecies || poke?.species || '');
  const frenchManual = formatPokemonFrenchFallback(cleanSpecies || poke?._frName || '', resolvedAlias || cleanSpecies);
  const bits = [
    cleanSpecies,
    poke?._frName,
    formatPokemonDisplayName(cleanSpecies || poke?.species || ''),
    formatPokemonDisplayName(poke?._frName || ''),
    frenchFromSource,
    frenchManual,
    resolvedAlias,
  ];
  const quickAlias = resolvedAlias;
  if (quickAlias) bits.push(quickAlias, formatPokemonDisplayName(quickAlias));
  return normalizeLookupKey(bits.filter(Boolean).join(' '));
}

function getMatchingVersionIndexes(versions, parsedQuery) {
  if (!parsedQuery?.raw) return versions.map((_, idx) => idx);
  if (!parsedQuery.pokemonTerm && parsedQuery.level === null) return [];
  const normalizedPokemon = normalizeLookupKey(parsedQuery.pokemonTerm || '');
  const matches = [];
  versions.forEach((version, idx) => {
    const party = version?.party || [];
    const found = party.some(poke => {
      const levelOk = parsedQuery.level === null || Number(poke?.level) === Number(parsedQuery.level);
      if (!levelOk) return false;
      if (!normalizedPokemon) return true;
      return getPokemonSearchHaystack(poke).includes(normalizedPokemon);
    });
    if (found) matches.push(idx);
  });
  return matches;
}

function getAnimatedSpriteCandidates(slug, shiny = false) {
  const localPokemon = getLocalPokemonEntry(slug);
  const spriteId = Number(localPokemon?.id || 0) || null;
  const localShowdown = spriteId ? resolveLocalShowdownSpriteCandidates(spriteId, shiny) : [];
  const localAnimated = spriteId ? resolveLocalPokemonSpriteCandidates(spriteId, shiny, slug).filter(url => /\.gif$/i.test(url)) : [];
  const showdownBase = `https://play.pokemonshowdown.com/sprites/${shiny ? 'ani-shiny' : 'ani'}`;
  const raw = String(slug || '').trim().toLowerCase();
  const normalized = moveSlug(raw);
  const alolanPrefixed = /^alolan-/.test(normalized) ? `${normalized.replace(/^alolan-/, '')}-alola` : '';
  const formAliases = uniqueNonEmpty([
    normalized,
    normalized.replace(/-a$/i, '-alola'),
    normalized.replace(/-g$/i, '-galar'),
    normalized.replace(/-h$/i, '-hisui'),
    normalized.replace(/-p$/i, '-paldea'),
    alolanPrefixed,
  ]).filter(name => !/-$/.test(name));
  const showdownAnimated = formAliases.map(name => `${showdownBase}/${name}.gif`);
  const animeLibrary = resolveLocalAnimeLibrarySpriteCandidates(slug, shiny);
  return [...new Set([...localShowdown, ...localAnimated, ...showdownAnimated, ...animeLibrary])];
}

function tryUpgradeToAnimatedSprite(imgId, slug, shiny = false) {
  if (!slug) return;
  const img = document.getElementById(imgId);
  if (!img) return;
  const candidates = getAnimatedSpriteCandidates(slug, shiny);
  const testNext = (idx) => {
    if (!img || idx >= candidates.length) return;
    const probe = new Image();
    probe.onload = () => {
      const live = document.getElementById(imgId);
      if (!live) return;
      live.style.display = '';
      const ph = live.parentElement?.querySelector('.poke-sprite-placeholder');
      if (ph) ph.remove();
      live.src = candidates[idx];
    };
    probe.onerror = () => testNext(idx + 1);
    probe.src = candidates[idx];
  };
  testNext(0);
}

// ── RENDER LIST ───────────────────────────────────────────────────────────────
function hl(text, q) {
  if (!q) return text;
  return text.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi'), '<mark>$1</mark>');
}

function getSidebarQueries() {
  // The sidebar now has 2 distinct filters: trainer name and Pokémon search.
  const trainerInput = document.getElementById('search-input');
  const pokemonInput = document.getElementById('search-pokemon-input');
  trainerSearchQuery = String(trainerInput?.value || '').trim();
  pokemonSearchQuery = String(pokemonInput?.value || '').trim();
  return { trainer: trainerSearchQuery, pokemon: pokemonSearchQuery };
}

function renderList() {
  const list = document.getElementById('trainer-list');
  syncSidebarLoadersVisibility();
  const queries = getSidebarQueries();
  const trainerQ = queries.trainer.toLowerCase();
  const trainerQNorm = normalizeLookupKey(queries.trainer.replace(/^id\s*#?\s*/i, '').replace(/^#/, '').trim());
  const trainerIdQuery = /^\d+$/.test(trainerQNorm) ? trainerQNorm : null;
  const parsedPokemonQuery = parseGlobalSearchQuery(queries.pokemon);
  const pokemonQL = parsedPokemonQuery.raw;
  const sourceEntries = sidebarTrainerIndex.length ? sidebarTrainerIndex : Object.keys(groupedTrainers).map(groupKey => ({
    groupKey,
    versions: groupedTrainers[groupKey] || [],
    first: groupedTrainers[groupKey]?.[0] || {},
    baseName: cleanTrainerName(groupKeyToName(groupKey)),
    displayEn: getTrainerDisplayNameEn(groupedTrainers[groupKey]?.[0], cleanTrainerName(groupKeyToName(groupKey))),
    displayFr: getTrainerNameFr(groupedTrainers[groupKey]?.[0], cleanTrainerName(groupKeyToName(groupKey))) || '',
    trainerId: String(groupedTrainers[groupKey]?.[0]?.readOnly?.trainerID ?? ''),
    searchEn: normalizeLookupKey(getTrainerDisplayNameEn(groupedTrainers[groupKey]?.[0], cleanTrainerName(groupKeyToName(groupKey)))),
    searchFr: normalizeLookupKey(getTrainerNameFr(groupedTrainers[groupKey]?.[0], cleanTrainerName(groupKeyToName(groupKey))) || ''),
    searchBase: normalizeLookupKey(cleanTrainerName(groupKeyToName(groupKey))),
    searchId: normalizeLookupKey(`id ${groupedTrainers[groupKey]?.[0]?.readOnly?.trainerID ?? ''}`),
  }));
  const matchesTrainerSearch = entry => {
    if (!trainerQNorm) return true;
    if (trainerIdQuery && entry.trainerId === trainerIdQuery) return true;
    const haystacks = [entry.searchEn, entry.searchFr, entry.searchBase, entry.searchId].map(value => String(value || ''));
    if (trainerQNorm.length <= 1) {
      return haystacks.some(value => value === trainerQNorm || value.split(/\s+/).includes(trainerQNorm));
    }
    return haystacks.some(value => value.includes(trainerQNorm));
  };
  const results = sourceEntries.map(entry => {
    const { groupKey, versions, baseName, displayEn, displayFr, trainerId } = entry;
    const nameMatch = matchesTrainerSearch(entry);
    const versionMatches = !nameMatch
      ? []
      : (pokemonQL ? getMatchingVersionIndexes(versions, parsedPokemonQuery) : versions.map((_, idx) => idx));
    const include = nameMatch && (!pokemonQL || versionMatches.length > 0);
    return { groupKey, versions, baseName, en: displayEn, fr: displayFr, trainerId, nameMatch, versionMatches, include };
  });
  const pokemonSearchMode = !!pokemonQL;
  const filteredResults = results.filter(r => r.include);
  const total = filteredResults.reduce((acc, r) => {
    if (pokemonSearchMode && r.versionMatches.length > 0) return acc + r.versionMatches.length;
    return acc + r.versions.length;
  }, 0);
  const versionLabel = detectedVersionInfo?.name ? ` · <span>${detectedVersionInfo.name}</span>` : '';
  document.getElementById('stats-text').innerHTML = `<span>${filteredResults.length}</span> ${t('trainerCount')} · <span>${total}</span> ${t('teamCount')}${versionLabel}`;
  if (!filteredResults.length) { list.innerHTML = `<div style="padding:28px;text-align:center;color:var(--muted);font-size:12px">${t('noResults')}</div>`; return; }

  let html = '';
  for (const result of filteredResults) {
    const { groupKey, versions, baseName: cleanName, fr: nameFr, en: displayNameEn, versionMatches } = result;
    const name = groupKeyToName(groupKey);
    const isMulti = versions.length > 1;
    const em = emoji(groupKey);
    const portraitUrl = getPortraitUrl(versions[0]);
    const displayName = buildTrainerDisplayName(versions[0], cleanName, currentLang);
    const safeId = groupKey.replace(/[^a-zA-Z0-9]/g,'_');
    const avatarContent = portraitUrl ? makeTrainerImg([portraitUrl], name, em, `tr-av-${safeId}`) : em;
    const selectedMatchIndex = versionMatches.length ? versionMatches[0] : 0;
    const trainerVersion = versions[selectedMatchIndex] || versions[0];
    const lvs = (trainerVersion.party||[]).map(p=>p.level);
    const rng = lvs.length ? `Lv.${Math.min(...lvs)}–${Math.max(...lvs)}` : '—';
    const resultUsesPokemonMatches = pokemonSearchMode && versionMatches.length > 0;
    const metaText = resultUsesPokemonMatches
      ? (currentLang === 'fr'
          ? `${versionMatches.length} équipe${versionMatches.length > 1 ? 's' : ''} correspondante${versionMatches.length > 1 ? 's' : ''}`
          : `${versionMatches.length} matching team${versionMatches.length > 1 ? 's' : ''}`)
      : (isMulti ? `${versions.length} ${t('teamCount')}` : `${(trainerVersion.party||[]).length} ${currentLang === 'fr' ? 'Pokémon' : 'Pokemon'} · #${trainerVersion.readOnly.trainerID}`);
    html += `<div class="t-item${selectedName===groupKey?' active':''}" data-name="${encodeURIComponent(groupKey)}" data-ver="${selectedMatchIndex}">
      <div class="t-avatar">${avatarContent}</div>
      <div class="t-info"><div class="t-name">${hl(displayName,trainerQ)}</div><div class="t-meta">${metaText}</div></div>
      ${resultUsesPokemonMatches ? `<span class="t-teams-count">${versionMatches.length}</span>` : (isMulti ? `<span class="t-teams-count">${versions.length}</span>` : `<span class="lv-badge">${rng}</span>`)}
    </div>`;
  }
  list.innerHTML = html;
}

// ── SELECT TRAINER ────────────────────────────────────────────────────────────
function selectTrainer(name, vIdx) {
  selectedName = name; selectedVersion = vIdx;
  document.querySelectorAll('.t-item').forEach(el => {
    el.classList.toggle('active', decodeURIComponent(el.dataset.name)===name && parseInt(el.dataset.ver)===vIdx);
  });
  renderDetail(name, groupedTrainers[name], vIdx);
}

function prefetchTrainerVersion(name, vIdx) {
  return;
}

function renderDetail(name, versions, vIdx) {
  const detail = document.getElementById('detail');
  const localParsedQuery = parseGlobalSearchQuery(detailPokeSearchQuery);
  const matchingVersionIndexes = versions.length > 1 ? getMatchingVersionIndexes(versions, localParsedQuery) : [vIdx];
  const effectiveVIdx = (detailPokeSearchQuery && matchingVersionIndexes.length && !matchingVersionIndexes.includes(vIdx)) ? matchingVersionIndexes[0] : vIdx;
  const trainerVersion = versions[effectiveVIdx];
  if (effectiveVIdx !== vIdx) selectedVersion = effectiveVIdx;
  const party = trainerVersion.party || [];
  const realName = cleanTrainerName(groupKeyToName(name));
  const em = emoji(name);
  const portraitUrl = getPortraitUrl(trainerVersion);
  const hasShiny = party.some(p=>p.shiny);
  const isMulti = versions.length > 1;
  const nameFr = getTrainerNameFr(trainerVersion, realName);
  const displayNameEn = getTrainerDisplayNameEn(trainerVersion, realName);
  const displayName = buildTrainerDisplayName(trainerVersion, realName, 'fr');
  const displayNameEnWithRole = buildTrainerDisplayName(trainerVersion, realName, 'en');
  const lblFr = isMulti ? ` — Équipe ${String.fromCharCode(65+effectiveVIdx)}` : '';
  const lblEn = isMulti ? ` — Team ${String.fromCharCode(65+effectiveVIdx)}` : '';

  let html = `<div class="trainer-hero">
    <div class="trainer-portrait">${portraitUrl ? makeTrainerImg([portraitUrl], realName, em, `tr-detail-${name.replace(/[^a-zA-Z0-9]/g,'_')}`) : `<span>${em}</span>`}</div>
    <div class="trainer-title">
      <h1 class="fr-only">${displayName}${lblFr}</h1>
      <h1 class="en-only">${displayNameEnWithRole}${lblEn}</h1>
      ${shouldShowTrainerAltSubtitle(trainerVersion, nameFr, displayNameEn) ? `<div class="fr-only" style="font-size:10px;color:var(--muted);font-style:italic;margin-top:-4px;margin-bottom:4px">(${displayNameEn})</div>` : ''}
      <div class="chips">
        <span class="chip chip-id">ID #${trainerVersion.readOnly.trainerID}</span>
        ${hasShiny?'<span class="chip chip-shiny">✨ Shiny</span>':''}
        ${isLumiRom?'<span class="chip chip-lumi">⭐ Lumi Stats</span>':''}
      </div>
    </div>
  </div>`;

  if (isMulti) {
    const vInfos = versions.map((v,i)=>{const ls=(v.party||[]).map(p=>p.level);return{i,r:ls.length?`Lv.${Math.min(...ls)}–${Math.max(...ls)}`:'?',min:ls.length?Math.min(...ls):0};}).sort((a,b)=>a.min-b.min);
    const groups = [];
    for (const vi of vInfos) {
      const last = groups[groups.length-1];
      if (last&&last.range===vi.r) last.items.push(vi);
      else groups.push({range:vi.r,items:[vi]});
    }
    html += `<div class="vtabs" id="vtabs-container">`;
    for (const grp of groups) {
      if (grp.items.length>1) {
        html += `<div class="vtab-group"><span class="vtab-group-label">${grp.range}</span>`;
        for (const vi of grp.items) {
          const matchesSearch = !detailPokeSearchQuery || matchingVersionIndexes.includes(vi.i);
          if (!matchesSearch) continue;
          html += `<button class="vtab${vi.i===effectiveVIdx?' active':''}" data-trainer-key="${encodeURIComponent(name)}" data-ver="${vi.i}">${currentLang === 'fr' ? 'Éq.' : 'Team'} ${String.fromCharCode(65+vi.i)}</button>`;
        }
        html += `</div>`;
      } else {
        const vi = grp.items[0];
        if (!detailPokeSearchQuery || matchingVersionIndexes.includes(vi.i)) {
          html += `<button class="vtab${vi.i===effectiveVIdx?' active':''}" data-trainer-key="${encodeURIComponent(name)}" data-ver="${vi.i}">${currentLang === 'fr' ? 'Éq.' : 'Team'} ${String.fromCharCode(65+vi.i)} · ${vi.r}</button>`;
        }
      }
    }
    html += `</div>`;
  }

  if (!party.length) { html += `<div class="no-party">${t('noParty')}</div>`; detail.innerHTML = html; return; }
  
  // Pokémon search bar across this trainer's teams
  html += `<div class="poke-search-wrap">
    <div class="poke-search-box">
      <input type="text" id="poke-search-input" value="${detailPokeSearchQuery.replace(/"/g,'&quot;')}" placeholder="${t('pokeSearchPlaceholder')}" oninput="filterPokeCards(this.value)" autocomplete="off">
      <span class="search-icon">🔍</span>
    </div>
    <div id="poke-search-noresult" style="display:${detailPokeSearchQuery && versions.length > 1 && !matchingVersionIndexes.length ? '' : 'none'};font-size:12px;color:var(--muted);padding:8px 0;">${t('pokeSearchNone')}</div>
  </div>`;
  
  const layoutClass = teamLayout === TEAM_LAYOUT_HORIZONTAL ? ' layout-horizontal' : ' layout-vertical';
  html += `<div class="section-title">${t('teamLabel')} (${party.length} Pokémon)</div><div class="poke-grid${layoutClass}" id="poke-grid">`;

  party.forEach((poke, i) => {
    const moves = (poke.moveset||[]).filter(m=>m);
    const ivs = poke.ivs||{}, evs = poke.evs||{};
    const isLogFormat = !!poke._frName;
    const natureNames = resolveNatureNames(poke.nature);
    const natureFr = natureNames.fr || poke.nature || '—';
    const natureEn = natureNames.en || poke.nature || '—';
    const rawInitName = sanitizePokemonSourceName(poke._frName || poke.species || '');
    const initName = rawInitName ? rawInitName.charAt(0).toUpperCase()+rawInitName.slice(1) : poke.species;

    html += `<div class="poke-card${poke.shiny?' shiny':''}" id="pcard-${i}" data-poke-name="${(poke._frName||poke.species||'').toLowerCase()}">
      <div class="poke-card-top"></div>
      <div class="poke-body">
        <div class="poke-sprite-col">
          <div class="poke-loading" id="sprite-${i}"><div class="football-spinner football-spinner-small" aria-hidden="true">⚽</div></div>
          <div class="poke-types poke-types-sprite" id="types-${i}"></div>
          ${poke.shiny?'<span class="shiny-star">✨</span>':''}
        </div>
        <div class="poke-info">
          <div class="poke-summary">
            <div class="poke-header">
              <div class="poke-names">
                <div class="poke-name-fr fr-only" id="name-fr-${i}">${initName}</div>
                <div class="poke-name-en-big en-only" id="name-en-big-${i}">${initName}</div>
                <div class="poke-name-en fr-only" id="name-en-${i}"></div>
                <div class="poke-name-fr-small en-only" id="name-fr-small-${i}" style="font-size:11px;color:var(--muted);font-style:italic;margin-top:1px;font-family:'Exo 2',sans-serif;"></div>
                <div class="poke-types" id="types-top-${i}"></div>
              </div>
              <span class="poke-lv">Lv.${poke.level}</span>
            </div>
            ${poke.nature?`<div class="poke-row"><span class="poke-label"><span class="fr-only">Nature</span><span class="en-only">Nature</span></span><span class="poke-val val-nature"><a class="wiki-link fr-only" href="https://www.pokepedia.fr/Nature" target="_blank">${natureFr}</a><a class="wiki-link en-only" href="https://bulbapedia.bulbagarden.net/wiki/Nature" target="_blank">${natureEn}</a></span></div>`:''}
            <div class="poke-row"><span class="poke-label fr-only">Talent</span><span class="poke-label en-only">Ability</span><span class="poke-val val-ability" id="ability-${i}">${poke.ability||'—'}</span></div>
            ${poke.heldItem?`<div class="poke-row"><span class="poke-label fr-only">Objet</span><span class="poke-label en-only">Item</span><span class="poke-val val-item" id="item-${i}"><span class="fr-only">${poke.heldItem}</span><span class="en-only">${poke.heldItem}</span></span></div>`:''}
          </div>
          <div class="moves-section">
            <div class="poke-label fr-only">${t('attacks')}</div>
            <div class="poke-label en-only">${t('attacks')}</div>
            <div class="move-grid-note-holder" id="moves-note-${i}"></div>
            <div class="moves-grid" id="moves-${i}">
              ${moves.length ? moves.map((m, moveIdx)=>`<span class="move-pill" id="move-${i}-${moveIdx}"><span class="move-fr">${m}</span><span class="move-en">${m}</span></span>`).join('') : learnsetEnabled ? '' : '<span class="move-empty">—</span>'}
            </div>
          </div>
          <div id="matchups-${i}"></div>
          ${(!isLogFormat)?`<div class="section-ivs" style="${showIVs?'':'display:none'}"><div class="stat-label-row">IVs</div>${renderStatBars({hp:ivs.hp??0,atk:ivs.atk??0,def:ivs.def??0,spAtk:ivs.spAtk??0,spDef:ivs.spDef??0,spd:ivs.spd??0},31)}</div>`:''}
          ${(!isLogFormat)?`<div class="section-evs" style="${showEVs?'':'display:none'}"><div class="stat-label-row" style="margin-top:6px">EVs</div>${renderStatBars({hp:evs.hp??0,atk:evs.atk??0,def:evs.def??0,spAtk:evs.spAtk??0,spDef:evs.spDef??0,spd:evs.spd??0},252)}</div>`:''}
          <div id="real-stats-${i}" class="real-stats-block section-stats" style="${showStats?'':'display:none'}"></div>
        </div>
      </div>
    </div>`;
  });

  html += `</div>`;
  detail.innerHTML = html;
  party.forEach((poke, i) => loadPokeData(poke, i));
}

// ── LOAD POKEMON DATA ASYNC ───────────────────────────────────────────────────
async function resolveFrenchPokemon(frName) {
  const key = frName.toUpperCase().trim();
  // Quick static map for common ones
  const QUICK = {
    'BULBIZARRE':'bulbasaur','HERBIZARRE':'ivysaur','FLORIZARRE':'venusaur','SALAMECHE':'charmander',
    'REPTINCEL':'charmeleon','DRACAUFEU':'charizard','CARAPUCE':'squirtle','CARABAFFE':'wartortle',
    'TORTANK':'blastoise','PIKACHU':'pikachu','RAICHU':'raichu','EVOLI':'eevee','AQUALI':'vaporeon',
    'VOLTALI':'jolteon','PYROLI':'flareon','MENTALI':'espeon','NOCTALI':'umbreon',
    'DRACOLOSSE':'dragonite','MINIDRACO':'dratini','DRACO':'dragonair','MEWTWO':'mewtwo','MEW':'mew',
    'TORTERRA':'torterra','TORTIPOUSS':'turtwig','TORTERREUR':'grotle','INFERNAPE':'infernape',
    'OUISTICRAM':'chimchar','CHIMPANFEU':'monferno','EMPOLEON':'empoleon','TIPLOUF':'piplup',
    'ETOURMI':'starly','ETOURNEAU':'staravia','ETOURVOL':'staraptor','LUCARIO':'lucario','RIOLU':'riolu',
    'CARCHACROK':'garchomp','GIBLE':'gible','GABITE':'gabite','DIALGA':'dialga','PALKIA':'palkia',
    'GIRATINA':'giratina','ARCEUS':'arceus','TOGEKISS':'togekiss','YANMEGA':'yanmega',
    'MISTIGRIX':'mismagius','LUXRAY':'luxray','LUXIO':'luxio','SHINX':'shinx','GARCHOMP':'garchomp',
    // Gen 1 complémentaires
    'CHENIPAN':'caterpie','CHRYSACIER':'metapod','PAPILUSION':'butterfree',
    'ASPICOT':'weedle','COCONFORT':'kakuna','DARDARGNAN':'beedrill',
    'ROUCOOL':'pidgey','ROUCOUPS':'pidgeotto','ROUCARNAGE':'pidgeot',
    'RATTATA':'rattata','RATTATAC':'raticate','PIAFABEC':'spearow','RAPASDEPIC':'fearow',
    'EBOLACHIO':'ekans','ARBOK':'arbok','SABELETTE':'sandshrew','SABLAIREAU':'sandslash',
    'NIDORAN♀':'nidoran-f','NIDORINA':'nidorina','NIDOQUEEN':'nidoqueen',
    'NIDORAN♂':'nidoran-m','NIDORINO':'nidorino','NIDOKING':'nidoking',
    'MELOFEE':'clefairy','MELODELFE':'clefable','GOUPIX':'vulpix','FEUNARD':'ninetales',
    'RONDOUDOU':'jigglypuff','GRODOUDOU':'wigglytuff','NOSFERAPTI':'zubat','NOSFERALTO':'golbat',
    'MYSTHERBE':'oddish','ORTIDE':'gloom','RAFFLESIA':'vileplume','PARAS':'paras','PARASECT':'parasect',
    'MIMITOSS':'venonat','AÉROMITE':'venomoth','TAUPIQUEUR':'diglett','TRIOPIKEUR':'dugtrio',
    'MIAOUSS':'meowth','PERSIAN':'persian','PSYKOKWAK':'psyduck','AKWAKWAK':'golduck',
    'FEROSINGE':'mankey','COLOSSINGE':'primeape','CANINOS':'growlithe','ARCANIN':'arcanine',
    'PTITARD':'poliwag','TÊTARTE':'poliwhirl','TARTARD':'poliwrath',
    'ABRA':'abra','KADABRA':'kadabra','ALAKAZAM':'alakazam',
    'MACHOC':'machop','MACHOPEUR':'machoke','MACKOGNEUR':'machamp',
    'CHETIFLOR':'bellsprout','BOUSTIFLOR':'weepinbell','EMPIFLOR':'victreebel',
    'TENTACOOL':'tentacool','TENTACRUEL':'tentacruel',
    'RACAILLOU':'geodude','GRAVALANCH':'graveler','GROLEM':'golem',
    'PONYTA':'ponyta','GALOPA':'rapidash',
    'RAMOLOSS':'slowpoke','FLAGADOSS':'slowbro',
    'MAGNETI':'magnemite','MAGNETON':'magneton',
    'CANARTICHO':'farfetchd','DODUO':'doduo','DODRIO':'dodrio',
    'OTARIA':'seel','LAMANTINE':'dewgong',
    'TADMORV':'grimer','GROTADMORV':'muk',
    'KOKIYAS':'shellder','CRUSTABRI':'cloyster',
    'FANTOMINUS':'gastly','SPECTRUM':'haunter','ECTOPLASMA':'gengar',
    'ONIX':'onix','SOPORIFIK':'drowzee','HYPNOMADE':'hypno',
    'KRABBY':'krabby','KRABBOSS':'kingler',
    'VOLTORBE':'voltorb','ELECTRODE':'electrode',
    'NOEUNOEUF':'exeggcute','NOADKOKO':'exeggutor',
    'OSSELAIT':'cubone','OSSATUEUR':'marowak',
    'KICKLEE':'hitmonlee','TYGNON':'hitmonchan',
    'LIPOUTOU':'lickitung','SMOGOGO':'koffing','WEEZING':'weezing',
    'RHINOCORNE':'rhyhorn','RHINOFÉROS':'rhydon',
    'LEVEINARD':'chansey','SAQUEDENEU':'tangela',
    'KANGOUREX':'kangaskhan','HYPOTREMPE':'horsea','HYPOCEAN':'seadra',
    'POISSON-ROUGE':'goldeen','POISSOROY':'seaking',
    'STARI':'staryu','STAROSS':'starmie',
    'MR. MIME':'mr-mime','INSECATEUR':'scyther','LIPPOUTOU':'jynx',
    'ELECTHOR':'electabuzz','MAGMAR':'magmar','SCARABRUTE':'pinsir',
    'TAUROS':'tauros','MAGICARPE':'magikarp','LEVIATOR':'gyarados',
    'LOKHLASS':'lapras','METAMORPH':'ditto',
    'KAPUTOVAM':'kabuto','KABUTOPS':'kabutops','PTÉRA':'aerodactyl',
    'RONFLEX':'snorlax','ARTIKODIN':'articuno','ÉLECTHOR':'zapdos','SULFURA':'moltres',
    // Gen 2
    'GERMIGNON':'chikorita','MACRONIUM':'bayleef','MEGANIUM':'meganium',
    'HERICENDRE':'cyndaquil','FEURISSON':'quilava','TYPHLOSION':'typhlosion',
    'KAIMINUS':'totodile','CROCRODIL':'croconaw','ALIGATUEUR':'feraligatr',
    'HOOTHOOT':'hoothoot','NOCTOWL':'noctowl','FOUINETTE':'sentret','FOUINAR':'furret',
    'COXY':'ledyba','COXYCLOPE':'ledian','ARAKDO':'spinarak','ARACHNID':'ariados',
    'NOSTENFER':'crobat','MARILL':'marill','AZUMARILL':'azumarill',
    'TOGEPI':'togepi','TOGETIC':'togetic','NATU':'natu','XATU':'xatu',
    'GRANIVOL':'hoppip','FLORAVOL':'skiploom','COTOVOL':'jumpluff',
    'GRANIPIOT':'sunkern','HÉLIATRONC':'sunflora',
    'YANMA':'yanma','AXOLOTO':'wooper','MARAISTE':'quagsire',
    'MENTALI':'espeon','NOCTALI':'umbreon','MUNJA':'murkrow',
    'ROIGADA':'slowking','FEUFORÊVE':'misdreavus',
    'QWILFISH':'qwilfish','CIZAYOX':'scizor','FACE-T.':'shuckle',
    'HERACROSS':'heracross','TEDDIURSA':'teddiursa','URSARING':'ursaring',
    'LIMAGMA':'slugma','MAGCARGO':'magcargo','SWINUB':'swinub','COCHIGNON':'piloswine',
    'CORAYON':'corsola','RÉMORAID':'remoraid','OCTILLERY':'octillery',
    'CADOIZO':'delibird','DÉMANTA':'mantine','MANTYKE':'mantyke',
    'NUKABA':'skarmory','HOUNDOUR':'houndour','HOUNDOOM':'houndoom',
    'EMBRYLEX':'larvitar','YMPHECT':'pupitar','TYRANOCIF':'tyranitar',
    'RAIKOU':'raikou','ENTEI':'entei','SUICUNE':'suicune',
    'LUGIA':'lugia','HO-OH':'ho-oh','CELEBI':'celebi',
    // Gen 3
    'ARCKO':'treecko','MASSKO':'grovyle','JUNGKO':'sceptile',
    'POUSSIFEU':'torchic','BRASÉGALI':'combusken','BRASEGALI':'blaziken',
    'GOBOU':'mudkip','FLOBIO':'marshtomp','LAGGRON':'swampert',
    'ZIGZATON':'zigzagoon','LINOON':'linoone',
    'CHENITI':'wurmple','BLINDALYS':'silcoon','BEAUTIFLY':'beautifly',
    'ARMULYS':'cascoon','DUSTOX':'dustox',
    'LOTAD':'lotad','LOMBRE':'lombre','LUDICOLO':'ludicolo',
    'GRAINIPIOT':'seedot','PIFEUIL':'nuzleaf','TENGALICE':'shiftry',
    'NIRONDELLE':'taillow','VIGUARD':'swellow',
    'PTITCHIOT':'wingull','PELIPPER':'pelipper',
    'GRAINOL':'surskit','HYDRODUKT':'masquerain',
    'MUSARINI':'shroomish','CHAPIGNON':'breloom',
    'MOUMOUTON':'slakoth','VIGOROTH':'vigoroth','MONAFLÈMIT':'slaking',
    'NINJASK':'ninjask','MUNJA':'shedinja',
    'MAKUHITA':'makuhita','HARIYAMA':'hariyama',
    'NOSEPASS':'nosepass',
    'SKITTY':'skitty','DELCATTY':'delcatty',
    'TÉNÉFIX':'sableye','MÉDITIKKA':'mawile',
    'ARON':'aron','LAGGRON':'lairon','GALEKING':'aggron',
    'MÉDITIK':'meditite','MÉDIATOR':'medicham',
    'VOLTOUTOU':'electrike','MANECTRIC':'manectric',
    'PLUSLE':'plusle','MINUN':'minun',
    'VOLBEAT':'volbeat','ILLUMISE':'illumise',
    'ROSÉLIA':'roselia','GRODOUDOU':'gulpin','AVALTOUT':'swalot',
    'SHARPEDO':'sharpedo','WAILMER':'wailmer','WAILORD':'wailord',
    'MÉLOKRIK':'numel','CAMÉRUPT':'camerupt',
    'TORKOAL':'torkoal','SPINDA':'spinda',
    'KECLEON':'kecleon','SHUPPET':'shuppet','BANETTE':'banette',
    'DUSKULL':'duskull','DUSCLOPS':'dusclops',
    'TROPIUS':'tropius','CHIMECHO':'chimecho',
    'ABSOL':'absol','SPHEAL':'spheal','SEALEO':'sealeo','WALREIN':'walrein',
    'CLAMPERL':'clamperl','HUNTAIL':'huntail','GOREBYSS':'gorebyss',
    'RELICANTH':'relicanth','LUVDISC':'luvdisc',
    'BÉBÉCAILLE':'bagon','DRACKHAUS':'shelgon','DRATTAK':'salamence',
    'BELDUR':'beldum','MÉTANG':'metang','MÉTALOSSE':'metagross',
    'REGISTEEL':'registeel','REGICE':'regice','REGIROCK':'regirock',
    'LATIAS':'latias','LATIOS':'latios',
    'KYOGRE':'kyogre','GROUDON':'groudon','RAYQUAZA':'rayquaza',
    'JIRACHI':'jirachi','DEOXYS':'deoxys',
    // Gen 4 supplémentaires
    'LIXY':'shinx','LUXIO':'luxio','LUXRAY':'luxray',
    'ROSERADE':'roserade','RAPPEL':'budew',
    'KRANIDOS':'cranidos','RAMTIPAGE':'rampardos',
    'DINOCLIER':'shieldon','BASTIODON':'bastiodon',
    'CHENITI':'burmy','PAPINOX':'wormadam','PAPINOX-SABLE':'wormadam-sandy','PAPINOX-ORDURES':'wormadam-trash',
    'CHENISELLE':'wormadam-plant','CHENISELLE-S':'wormadam-sandy','CHENISELLE-SABLE':'wormadam-sandy','CHENISELLE-T':'wormadam-trash','CHENISELLE-ORDURES':'wormadam-trash',
    'PAPILORD':'mothim','APITRINI':'combee','APIREINE':'vespiquen',
    'PACHIRISU':'pachirisu','MANAPHY':'manaphy','PHIONE':'phione',
    'MADIRAFLE':'buizel','BOUMATA':'floatzel',
    'CERIBOU':'cherubi','CERIFLOR':'cherrim',
    'COQUIPERL':'shellos','GASTRODON':'gastrodon',
    'AMBIPOM':'ambipom','DRIFTLON':'drifloon','DRIFBLIM':'drifblim',
    'BLEUSEILLE':'buneary','LOCKPIK':'lopunny',
    'FANTOMINUS':'mismagius',
    'CORBOSS':'honchkrow','LIPOUTOU':'glameow','PURUGLY':'purugly',
    'MIME-JR':'mime-jr','PTIRAVI':'happiny','CHÉTIFLOR':'chatot',
    'BAUDRIVE':'drifloon','GRODRIVE':'drifblim','SPIRITOMB':'spiritomb',
    'GIRATINAEIN':'gible',
    'HIPPOPOTAS':'hippopotas','HIPPODOCUS':'hippowdon',
    'SCORPLANE':'skorupi','DRACTRI':'drapion',
    'CRÂMANT':'croagunk','TOXICROAK':'toxicroak',
    'CROCHET':'carnivine','FINNEON':'finneon','LUMINEON':'lumineon',
    'COCHIGNON':'snover','BLIZZAROI':'abomasnow',
    'WEAVILE':'weavile','MAGNÉZONE':'magnezone','ÉLEKABLE':'electivire',
    'MAGMORTEM':'magmortar','COUDLANGUE':'togekiss','YANMEGA':'yanmega',
    'PHYLLALI':'leafeon','GIVRALI':'glaceon','PORYGON-Z':'porygon-z',
    'GALEKID':'gallade','TARINORME':'dusknoir','FROSTMOTH':'froslass',
    'MOTISMA':'rotom','UXIE':'uxie','MESPRIT':'mesprit','AZELF':'azelf',
    'HEATRAN':'heatran','REGIGIGAS':'regigigas','CRESSELIA':'cresselia',
    'DARKRAI':'darkrai','SHAYMIN':'shaymin','SHAYMIN-LAND':'shaymin-land',
    // Gen 5
    'VIPÉLIERRE':'snivy','LIANAJOU':'servine','MAJASPIC':'serperior',
    'GRUIKUI':'tepig','GROTABOUL':'pignite','FLAMAJOU':'emboar',
    'MOUSTILLON':'oshawott','LARVADAR':'dewott','CLAMIRAL':'samurott',
    'MIRADAR':'patrat','MIRAPATTES':'watchog',
    'LILLIPUP':'lillipup','HÉRICENDRE':'herdier','STOUTLAND':'stoutland',
    'CHATIPOOF':'purrloin','FÉLINFERNO':'liepard',
    'MUNNA':'munna','MUSHARNA':'musharna',
    'POICHIGEON':'pidove','COLOMBEAU':'tranquill','DÉFLAISAN':'unfezant',
    'ZÉBIBRON':'blitzle','ZÉBLITZ':'zebstrika',
    'ROGGENMASSE':'roggenrola','GÉOLITHE':'boldore','GIGALITHE':'gigalith',
    'WOOBAT':'woobat','SWOOBAT':'swoobat',
    'NODULITHE':'drilbur','EXCADRILL':'excadrill',
    'MÉPRIZARD':'audino',
    'TIMIBOUR':'timburr','BÉTOCHEF':'gurdurr','KARATPOIDS':'conkeldurr',
    'TYMPANOC':'tympole','BATRACNÉ':'palpitoad','CRAPUSTULE':'seismitoad',
    'JUDOKRAK':'throh','JUDOKNOCK':'sawk',
    'LARVEYETTE':'sewaddle','COUVERDURE':'swadloon','PRISMILLON':'leavanny',
    'VENIPÈDE':'venipede','ROUE-de-Secours':'whirlipede','SCOLIPÈDE':'scolipede',
    'COTONBEE':'cottonee','WHIMSICOTT':'whimsicott',
    'FEUILLAJOU':'petilil','FRAGILADY':'lilligant',
    'BASCULIN':'basculin',
    'MARACTUS':'maractus',
    'DWEBBLE':'dwebble','CRUSTLE':'crustle',
    'SCRAGGY':'scraggy','SCRAFTY':'scrafty',
    'SYMBIOS':'sigilyph',
    'SKELÉNOX':'yamask','RUNIQUERUS':'cofagrigus',
    'COUVERTURE':'tirtouga','CARAPAGOS':'carracosta',
    'ARCHÉOPDÉVIS':'archen','ARCHÉOPS':'archeops',
    'DODUOS':'trubbish','MIASMAX':'garbodor',
    'ZOUA':'zorua','ZOROARK':'zoroark',
    'NOUNOURSON':'minccino','PASHMILLA':'cinccino',
    'DEUSOLOURDO':'gothita','MALEFIX':'gothorita','GOTHITELLE':'gothitelle',
    'UNIPEGON':'solosis','DUPLIGON':'duosion','RÉUNION':'reuniclus',
    'CLOBOPOING':'ducklett','CYGOCHON':'swanna',
    'FRILEUX':'vanillite','SORBÉBÉ':'vanillish','VANILUXE':'vanilluxe',
    'DEERLING':'deerling','SAWSBUCK':'sawsbuck',
    'ELEC-FANTÔME':'emolga',
    'KARRABLAST':'karrablast','ESCAVALIER':'escavalier',
    'ÉTOURMENTI':'foongus','AMOONGUS':'amoonguss',
    'ALOLASSIN':'frillish','MÉDUSA':'jellicent',
    'BARGIBOUL':'alomomola',
    'JOLTIK':'joltik','MYGAVOLT':'galvantula',
    'FERROSEED':'ferroseed','FERROTHORN':'ferrothorn',
    'KELFKI':'klink','KLIKIKI':'klang','KLINKANG':'klinklang',
    'BOUYONDE':'tynamo','ÉLECTRODE':'eelektrik','AMORAK':'eelektross',
    'LITWICK':'litwick','LAMPE-FANTÔME':'lampent','LUGULABRE':'chandelure',
    'AXEW':'axew','TRANCHODANT':'fraxure','HAXORUS':'haxorus',
    'TÉTARD':'cubchoo','POLAIRE':'beartic',
    'CRYOGONAL':'cryogonal',
    'SKAVENGER':'shelmet','ESCARGAUME':'accelgor',
    'MINOTAUPE':'stunfisk',
    'KARACLÉE':'mienfoo','BÉLISSIMO':'mienshao',
    'DRACODRON':'druddigon',
    'GOLETT':'golett','GOLURK':'golurk',
    'PAWNIARD':'pawniard','BISHARP':'bisharp',
    'BŒUFON':'bouffalant',
    'VISKUSE':'rufflet','GUERIAIGLE':'braviary',
    'VOSTOURNO':'vullaby','VAUTUTRICE':'mandibuzz',
    'AFLAMANIVORE':'heatmor','CARABING':'durant',
    'DÉÏNO':'deino','ZWEILOUS':'zweilous','HYDRAGON':'hydreigon',
    'LARVINSEL':'larvesta','VOLTOUTOU':'volcarona',
    'COBALION':'cobalion','TERRAKION':'terrakion','VIRIZION':'virizion',
    'TORNADUS':'tornadus','THUNDURUS':'thundurus','LANDORUS':'landorus',
    'RESHIRAM':'reshiram','ZEKROM':'zekrom','KYUREM':'kyurem','MÉTÉNO':'minior-red-meteor','METENO':'minior-red-meteor',
    'FROUSSARDINE':'wishiwashi','WISHIWASHI':'wishiwashi',
    'KELDEO':'keldeo','MELOETTA':'meloetta','GENESECT':'genesect',
  };
  if (QUICK[key]) return QUICK[key];
  // Fallback: slugify
  const norm = frName.toLowerCase().replace(/[éèê]/g,'e').replace(/[àâ]/g,'a').replace(/[ùû]/g,'u').replace(/[îï]/g,'i').replace(/[ôö]/g,'o').replace(/[ç]/g,'c').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
  return norm || frName.toLowerCase();
}

async function loadPokeData(poke, i) {
  const rawSpecies = sanitizePokemonSourceName(poke.species);
  const provisionalSlug = getPokemonQuickAlias(rawSpecies || poke.species) || slugify(rawSpecies || poke.species || '');

  // Render a usable sprite immediately instead of waiting for all async lookups.
  const spriteCol = document.getElementById(`sprite-${i}`);
  if (spriteCol) {
    const provisionalLocal = getLocalPokemonEntry(provisionalSlug) || getLocalPokemonEntry(rawSpecies || poke.species);
    const fastUrls = buildPokemonSpriteCandidateUrls({
      spriteId: provisionalLocal?.id,
      slug: provisionalSlug,
      identifier: rawSpecies || poke.species,
      shiny: !!poke.shiny,
      formId: poke.formID || poke.formId || 0,
    });
    applyPokemonSpriteCandidates(i, fastUrls, rawSpecies || poke.species || provisionalSlug);
  }

  let speciesKey = await resolvePokemonIdentifier(rawSpecies || poke.species);

  // Get stats — use Lumi DB if this is a lumi ROM
  const lumiStats = getLumiStats(speciesKey);

  const pokeDataPromise = fetchPokemonData(speciesKey);
  const abilityDataPromise = poke.ability ? fetchAbilityData(poke.ability) : Promise.resolve({nameFr: poke.ability});
  const itemDataPromise = poke.heldItem ? fetchItemData(poke.heldItem) : Promise.resolve(null);
  const [pokeData, abilityData, itemData] = await Promise.all([pokeDataPromise, abilityDataPromise, itemDataPromise]);

  const romBaseStats = (poke._romBaseStats && Object.keys(poke._romBaseStats).length) ? poke._romBaseStats : null;
  const romTypes = resolveCanonicalTypeNames(
    Array.isArray(poke._vanillaTypes) ? poke._vanillaTypes.filter(Boolean) : [],
    Array.isArray(poke._vanillaTypeIds) ? poke._vanillaTypeIds : []
  );

  // Override with ROM data first, then Lumi when relevant, then API fallback
  const effectiveBaseStats = lumiStats
    ? { hp: lumiStats.hp, atk: lumiStats.atk, def: lumiStats.def, spAtk: lumiStats.spAtk, spDef: lumiStats.spDef, spd: lumiStats.spd }
    : (romBaseStats || pokeData.baseStats);
  const effectiveTypes = (lumiStats && lumiStats.type1)
    ? [...new Set([lumiStats.type1, lumiStats.type2].filter(Boolean))]
    : [...new Set((romTypes.length ? romTypes : (pokeData.types || [])).filter(Boolean))];
  const displayedTypes = normalizeTypesForCurrentVersion(effectiveTypes);
  const matchupAbilityNames = uniqueNonEmpty([
    poke.ability,
    ...(Array.isArray(poke.abilities) ? poke.abilities : []),
  ]);

  // Update names
  const displayFr = formatPokemonFrenchFallback(
    sanitizePokemonSourceName(pokeData.nameFr || poke._frName || poke.species),
    pokeData._resolvedSlug || speciesKey
  );
  const displayEn = formatPokemonDisplayName(pokeData.nameEn || speciesKey);
  const frEl = document.getElementById(`name-fr-${i}`);
  const enEl = document.getElementById(`name-en-${i}`);
  const enBigEl = document.getElementById(`name-en-big-${i}`);
  const frSmallEl = document.getElementById(`name-fr-small-${i}`);
  const movesNoteEl = document.getElementById(`moves-note-${i}`);
  if (frEl) frEl.textContent = displayFr;
  if (enEl) enEl.textContent = displayEn;
  if (enBigEl) enBigEl.textContent = displayEn;
  if (frSmallEl) frSmallEl.textContent = displayFr;
  if (movesNoteEl) movesNoteEl.innerHTML = '';
  // Update card's searchable name to include both FR and EN
  const card = document.getElementById(`pcard-${i}`);
  if (card) card.dataset.pokeName = `${displayFr} ${displayEn}`.toLowerCase();

  // Types (using effective types — may differ in Lumi)
  const typesEl = document.getElementById(`types-${i}`);
  const typesTopEl = document.getElementById(`types-top-${i}`);
  if (typesEl && displayedTypes?.length) {
      const typeHtml = displayedTypes.map(t => {
        const frLabel = formatTypeLabelFr(t);
        return `<span class="type-badge type-${typeClass(t)}"><span class="fr-only">${frLabel}</span><span class="en-only">${t}</span></span>`;
      }).join('');
      typesEl.innerHTML = typeHtml;
      if (typesTopEl) typesTopEl.innerHTML = '';
    }
    if (typesTopEl && (!displayedTypes || !displayedTypes.length)) typesTopEl.innerHTML = '';
  const matchupEl = document.getElementById(`matchups-${i}`);
  if (matchupEl) {
    matchupEl.style.display = displayedTypes?.length ? '' : 'none';
    matchupEl.innerHTML = displayedTypes?.length ? renderTypeMatchupSection(displayedTypes, matchupAbilityNames) : '';
  }

  // Upgrade sprite if we resolved a better slug after async lookups.
  const slug = pokeData._resolvedSlug || slugify(speciesKey);
  const spriteId = Number(poke._romSpeciesId || pokeData._spriteId || pokeData._pokeapiId || 0) || null;
  const spriteUrl = poke.shiny ? (pokeData.spriteShiny || pokeData.sprite) : pokeData.sprite;
  const resolvedSpriteUrls = buildPokemonSpriteCandidateUrls({
    spriteId,
    slug,
    identifier: rawSpecies || poke.species,
    shiny: !!poke.shiny,
    formId: poke.formID || poke.formId || 0,
    remoteSpriteUrl: spriteUrl,
  });
  applyPokemonSpriteCandidates(i, resolvedSpriteUrls, displayEn || displayFr || rawSpecies || poke.species);

  // Ability
  const abilityEl = document.getElementById(`ability-${i}`);
  if (abilityEl) {
    let resolvedAbilitySlug = poke.ability || '';
    let resolvedAbilityFr = '';
    let resolvedAbilityEn = '';
    const abilityChoice = Number.isFinite(Number(poke._abilityChoice)) ? Number(poke._abilityChoice) : null;
    if (!resolvedAbilitySlug && abilityChoice && pokeData?.possibleAbilities?.length) {
      const chosenAbility = abilityChoice === 3
        ? (pokeData.possibleAbilities[2] || pokeData.possibleAbilities[1] || pokeData.possibleAbilities[0] || null)
        : (pokeData.possibleAbilities[Math.max(0, abilityChoice - 1)] || null);
      if (chosenAbility) {
        resolvedAbilitySlug = chosenAbility.slug || '';
        resolvedAbilityFr = chosenAbility.nameFr || '';
        resolvedAbilityEn = chosenAbility.nameEn || '';
      }
    }
    if (resolvedAbilitySlug && (abilityData || resolvedAbilityFr || resolvedAbilityEn)) {
      const abilityFr = resolvedAbilityFr || abilityData?.nameFr || getManualFrenchAbilityName(resolvedAbilitySlug) || resolvedAbilitySlug;
      const abilityEn = resolvedAbilityEn || abilityData?.nameEn || getManualEnglishAbilityName(resolvedAbilitySlug) || resolvedAbilitySlug || '—';
      const aWiki = wikiLinkAbility(abilityFr, abilityEn);
      abilityEl.innerHTML = `<a class="wiki-link fr-only" href="${aWiki.fr}" target="_blank">${abilityFr}</a><a class="wiki-link en-only" href="${aWiki.en}" target="_blank">${abilityEn}</a>`;
    } else if (!isLumiRom && pokeData?.possibleAbilities?.length) {
      const probable = pokeData.possibleAbilities.slice(0, 3);
      const probableFr = probable.map(a => {
        const wiki = wikiLinkAbility(a.nameFr, a.nameEn);
        return `<a class="wiki-link" href="${wiki.fr}" target="_blank">${a.nameFr}</a>`;
      }).join(' / ');
      const probableEn = probable.map(a => {
        const wiki = wikiLinkAbility(a.nameFr, a.nameEn);
        return `<a class="wiki-link" href="${wiki.en}" target="_blank">${a.nameEn}</a>`;
      }).join(' / ');
      abilityEl.innerHTML = `<span class="fr-only">${probableFr}</span><span class="en-only">${probableEn}</span>`;
      const abilityRow = abilityEl.closest('.poke-row');
      if (abilityRow) {
        const labelEl = abilityRow.querySelector('.poke-label');
        if (labelEl) labelEl.innerHTML = `<span class="fr-only">${t('probableAbility')}</span><span class="en-only">${t('probableAbility')}</span>`;
      }
    }
  }

  // Item with image
  if (itemData && poke.heldItem) {
    const itemEl = document.getElementById(`item-${i}`);
    if (itemEl) {
      const itemFr = itemData.nameFr || poke.heldItem;
      const itemEn = itemData.nameEn || poke.heldItem;
      const iWiki = wikiLinkItem(itemFr, itemEn);
      const imgHtml = itemData.sprite ? `<img class="item-icon" src="${itemData.sprite}" alt="${itemEn}" onerror="this.style.display='none'">` : '';
      itemEl.innerHTML = `${imgHtml}<a class="wiki-link fr-only" href="${iWiki.fr}" target="_blank">${itemFr}</a><a class="wiki-link en-only" href="${iWiki.en}" target="_blank">${itemEn}</a>`;
    }
  }

  // Real stats with Lumi base stats
  const realStatsEl = document.getElementById(`real-stats-${i}`);
  if (realStatsEl && effectiveBaseStats && Object.keys(effectiveBaseStats).length) {
    const ivs = poke.ivs||{}, evs = poke.evs||{};
    const realStats = calcRealStats(effectiveBaseStats, ivs, evs, poke.nature, poke.level);
    const baseOnlyStats = calcRealStats(effectiveBaseStats, {}, {}, poke.nature, poke.level);
    const lumiNote = isLumiRom && lumiStats ? ` <span style="color:var(--purple);font-size:8px">⭐Lumi</span>` : '';
    realStatsEl.innerHTML = `<div class="stat-label-row" style="margin-top:8px;display:flex;justify-content:space-between;align-items:center"><span><span class="fr-only">${t('realStats')}${lumiNote}</span><span class="en-only">${t('realStats')}${lumiNote}</span></span></div>${renderDualStatBars(realStats, baseOnlyStats)}`;
  }

  // Moves
  const moves = (poke.moveset||[]).map(m => cleanMoveDisplayName(m)).filter(m=>m);

  async function enrichMovePill(elId, moveName, isEn, moveDataOverride = null) {
    const el = document.getElementById(elId);
    if (!el) return;
    const cleanedMoveName = cleanMoveDisplayName(moveName);
    const canonicalMove = getCanonicalMoveMeta(moveDataOverride?.name || cleanedMoveName || moveName);
    const localMoveTypeId = Number.isInteger(Number(moveDataOverride?.typeId)) ? Number(moveDataOverride.typeId) : null;
    const localMoveType = moveDataOverride?.type ? String(moveDataOverride.type) : (localMoveTypeId != null ? (TYPE_BY_ID[localMoveTypeId] || null) : null);
    const localMoveName = moveDataOverride?.name ? String(moveDataOverride.name) : cleanedMoveName;
    const baseMoveData = await fetchMoveData(canonicalMove.slug || localMoveName || cleanedMoveName);
    const moveData = moveDataOverride ? {
      ...baseMoveData,
      nameFr: canonicalMove.nameFr || baseMoveData.nameFr || localMoveName,
      nameEn: canonicalMove.nameEn || baseMoveData.nameEn || formatPokemonDisplayName(localMoveName),
      type: localMoveType ? String(localMoveType).toLowerCase() : (baseMoveData.type || canonicalMove.manual?.type || null),
      typeId: localMoveTypeId != null ? localMoveTypeId : (Number.isInteger(Number(baseMoveData.typeId)) ? Number(baseMoveData.typeId) : null),
      damageClass: moveDataOverride.damageClass || baseMoveData.damageClass || canonicalMove.manual?.damageClass || null,
      power: moveDataOverride.power ?? baseMoveData.power ?? canonicalMove.manual?.power ?? null,
      accuracy: moveDataOverride.accuracy ?? baseMoveData.accuracy ?? canonicalMove.manual?.accuracy ?? null,
      pp: moveDataOverride.pp ?? baseMoveData.pp ?? canonicalMove.manual?.pp ?? null,
      accuracyKnown: moveDataOverride.accuracyKnown !== false
        ? (baseMoveData.accuracyKnown ?? canonicalMove.manual?.accuracyKnown ?? true)
        : false,
    } : baseMoveData;
      const mFr = moveData.nameFr || cleanedMoveName;
      const mEn = moveData.nameEn || cleanedMoveName;
      const mWiki = wikiLinkMove(mFr, mEn);
      const cat = moveData.damageClass;
      const mType = moveData.type
        ? normalizeTypeNameToEnglish(moveData.type)
        : (Number.isInteger(Number(moveData.typeId)) && TYPE_BY_ID[Number(moveData.typeId)] ? TYPE_BY_ID[Number(moveData.typeId)] : null);
      const moveTypeClass = mType ? typeClass(mType) : '';
      const typeBadge = mType ? `<span class="move-type-badge type-${typeClass(mType)}"><span class="fr-only">${formatTypeLabelFr(mType)}</span><span class="en-only">${mType}</span></span>` : '';
    const catLabelFr = cat==='physical'?'Physique':cat==='special'?'Spéciale':cat==='status'?'Statut':null;
    const catLabelEn = cat==='physical'?'Physical':cat==='special'?'Special':cat==='status'?'Status':null;
  const pwrStr = moveData.power ? `<span class="ms-power"><span class="fr-only">PUI ${moveData.power}</span><span class="en-only">POW ${moveData.power}</span></span>` : '';
  const accStr = moveData.accuracyKnown
    ? (moveData.accuracy!==null
        ? `<span class="ms-acc"><span class="fr-only">PRÉ ${moveData.accuracy}%</span><span class="en-only">ACC ${moveData.accuracy}%</span></span>`
        : `<span class="ms-acc"><span class="fr-only">PRÉ —</span><span class="en-only">ACC —</span></span>`)
    : '';
  const ppStr = moveData.pp ? `<span class="ms-pp">PP ${moveData.pp}</span>` : '';
    const statsParts = [pwrStr, accStr, ppStr].filter(Boolean);
    const statsStr = statsParts.join(`<span style="color:var(--border)">·</span>`);
    const catFr = catLabelFr?`<span class="ms-cat ${cat}">${catLabelFr}</span>`:'';
    const catEn = catLabelEn?`<span class="ms-cat ${cat}">${catLabelEn}</span>`:'';
      if (moveTypeClass) {
        el.dataset.moveType = moveTypeClass;
      } else {
        delete el.dataset.moveType;
      }
  el.innerHTML = `<span class="move-head fr-only">${typeBadge}${catFr}</span><span class="move-head en-only">${typeBadge}${catEn}</span><a class="move-fr wiki-link-move" href="${mWiki.fr}" target="_blank">${mFr}</a><a class="move-en wiki-link-move" href="${mWiki.en}" target="_blank">${mEn}</a><span class="move-stats">${ppStr}${pwrStr}${accStr}</span>`;
}

  if (moves.length) {
    await Promise.all(moves.map(async (m, moveIdx) => {
      const romMoveDetail = Array.isArray(poke._romMoveDetails) ? poke._romMoveDetails[moveIdx] : null;
      await enrichMovePill(`move-${i}-${moveIdx}`, m, false, romMoveDetail);
    }));
  } else if (learnsetEnabled || poke._isPlatineFormat || !moves.length) {
    const movesEl = document.getElementById(`moves-${i}`);
    const slug = speciesKey || slugify(poke.species);
    let learnset = await fetchLearnset(slug, poke.level);
    if ((!learnset || !learnset.length) && isLumiRom && learnsetEnabled) {
      learnset = await fetchLearnsetForLumiFallback(poke, speciesKey, pokeData);
    }
    const learned = (learnset || []).filter(m=>m.learnLevel<=poke.level).sort((a,b)=>b.learnLevel-a.learnLevel).slice(0,4);
    let finalLearned = learned;
    if ((!finalLearned || !finalLearned.length) && isLumiRom && learnsetEnabled) {
      const lumiFallback = await fetchLearnsetForLumiFallback(poke, speciesKey, pokeData);
      finalLearned = (lumiFallback || []).filter(m=>m.learnLevel<=poke.level).sort((a,b)=>b.learnLevel-a.learnLevel).slice(0,4);
    }
    if (finalLearned.length && movesEl) {
      if (movesNoteEl) movesNoteEl.innerHTML = `<div class="move-grid-note">${t('estimatedMoves')}</div>`;
      movesEl.innerHTML = finalLearned.map((m, moveIdx)=>{
        const n=m.moveName.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
        return `<span class="move-pill learnset-pill" id="move-${i}-ls-${moveIdx}"><span class="move-fr">${n}</span><span class="move-en">${n}</span></span>`;
      }).join('');
      await Promise.all(finalLearned.map(async (m, moveIdx) => {
        await enrichMovePill(`move-${i}-ls-${moveIdx}`, m.moveName, false);
      }));
    } else if (movesEl && !moves.length) {
      movesEl.innerHTML = '<span class="move-empty">—</span>';
    }
  }
}

// ── LOG FILE PARSER ───────────────────────────────────────────────────────────
function parseLogFile(text, filename) {
  const lines = text.split('\n').map(l=>l.replace(/\r$/,''));
  const trainers = [];
  const trainerSectionRegex = /^--\s*trainers?\s+pokemon\s*--$/i;
  const trainerHeaderRegex = /^#\d+\s+\(/;
  const start = lines.findIndex(l => trainerSectionRegex.test(l.trim()));
  const firstTrainer = lines.findIndex(l => trainerHeaderRegex.test(l.trim()));
  const startIdx = start >= 0 ? start + 1 : (firstTrainer >= 0 ? firstTrainer : 0);

  // Detect format: Platine-style has pokemon on separate lines after trainer header
  // e.g. "HOUNDOUR Lv5, Ability: Early Bird - Howl, Ember, ..."
  const isPlatineFormat = lines.slice(startIdx, startIdx + 80).some(l =>
    /.+\s+Lv\d+,\s*Ability:/i.test(l.trim())
  );

  if (isPlatineFormat) {
    let i = startIdx;
    while (i < lines.length) {
      const headerLine = lines[i].trim();
      const hm = headerLine.match(/^#(\d+)\s+\(([^)]*)\)\s*$/);
      if (!hm) { i++; continue; }
      const id = parseInt(hm[1]);
      const fullName = hm[2].trim() || `Trainer #${hm[1]}`;
      i++;
      const party = [];
      while (i < lines.length) {
        const pline = lines[i].trim();
        if (pline === '' || trainerHeaderRegex.test(pline) || /^--/.test(pline)) break;
        i++;
        if (!pline) continue;
        // NAME[@Item] LvN, Ability: X - Move1, Move2, Move3, Move4
        const pm = pline.match(/^(.+?)(?:@(.+?))?\s+Lv(\d+),\s*Ability:\s*([^-\n]+?)\s*(?:-\s*(.+))?$/i);
        if (!pm) continue;
        const speciesRaw = pm[1].trim();
        const item = pm[2]?.trim().replace(/-/g,' ') || null;
        const level = parseInt(pm[3]);
        const ability = pm[4]?.trim() || null;
        const movesRaw = pm[5] ? pm[5].split(',').map(s=>cleanMoveDisplayName(s)).filter(Boolean) : [];
        party.push({
          species: speciesRaw,
          level, heldItem: item, moveset: movesRaw,
          ability, ivs:{}, evs:{}, nature:null, shiny:false,
          _frName: speciesRaw.charAt(0)+speciesRaw.slice(1).toLowerCase(),
          _isPlatineFormat: true
        });
      }
      if (!party.length) continue;
      trainers.push({
        readOnly: { trainerID: id, name: fullName, trainerClass: '' },
        nameLabel: `LOG_${id}_${fullName.replace(/\W/g,'_')}`,
        trainerClass: '', party, gold: 0, _logFullName: fullName,
      });
    }
  } else {
    // Format: #N (Name) - POKEMON Lv5, POKEMON@Item Lv5,...  (one line per trainer)
    for (let i = startIdx; i < lines.length; i++) {
      const line = lines[i].trim();
      const m = line.match(/^#(\d+)\s+\(([^)]*)\)\s*-\s*(.+)$/);
      if (!m) continue;
      const id = parseInt(m[1]);
      const fullName = m[2].trim() || `Trainer #${m[1]}`;
      const pokePart = m[3].trim();
      const party = [];
      for (const chunk of pokePart.split(',').map(s=>s.trim()).filter(Boolean)) {
        // Handle species names with spaces, diacritics, special chars
        const pm = chunk.match(/^(.+?)(?:@([^\s]+(?:\s[^\s]+)*))?\s+Lv(\d+)$/i);
        if (!pm) continue;
        const speciesRaw = pm[1].replace(/\\\[PK\]|\\\[MN\]/g,'').trim();
        if (!speciesRaw) continue;
        party.push({
          species: speciesRaw,
          level: parseInt(pm[3]),
          heldItem: pm[2]?.trim()||null,
          moveset:[], ivs:{}, evs:{}, nature:null, shiny:false,
          _frName: speciesRaw.charAt(0)+speciesRaw.slice(1).toLowerCase()
        });
      }
      if (!party.length) continue;
      trainers.push({
        readOnly: { trainerID: id, name: fullName, trainerClass: '' },
        nameLabel: `LOG_${id}_${fullName.replace(/\W/g,'_')}`,
        trainerClass: '', party, gold: 0, _logFullName: fullName,
      });
    }
  }
  return trainers;
}

// ── FILE LOADING ──────────────────────────────────────────────────────────────
async function loadFile(text, filename) {
  const isLog = filename.endsWith('.log') || filename.endsWith('.txt') || (text.includes('--Trainers Pokemon--') && !text.trim().startsWith('{'));
  resetRomRuntimeLookups();
  try {
    showGlobalLoading(
      currentLang === 'fr' ? 'Chargement du fichier' : 'Loading file',
      currentLang === 'fr' ? `Analyse de ${filename}…` : `Parsing ${filename}…`
    );
    await waitForLoadingFrame();
    setGlobalLoadingProgress(12, currentLang === 'fr' ? 'Lecture du fichier…' : 'Reading file…');
    if (isLog) await loadLogFile(text, filename);
    else await loadJSON(text, filename);
  } finally {
    hideGlobalLoading();
  }
}

async function loadRomArrayBuffer(buffer, filename = '') {
  const lowerName = String(filename || '').toLowerCase();
  const is3DSRom = lowerName.endsWith('.3ds') || lowerName.endsWith('.cxi');
  try {
    showGlobalLoading(
      currentLang === 'fr'
        ? (is3DSRom ? 'Chargement ROM 3DS' : 'Chargement ROM DS')
        : (is3DSRom ? 'Loading 3DS ROM' : 'Loading DS ROM'),
      currentLang === 'fr'
        ? `Analyse de ${filename || 'la ROM'} en cours…`
        : `Parsing ${filename || 'the ROM'}…`
    );
    await waitForLoadingFrame();
    setGlobalLoadingProgress(14, currentLang === 'fr' ? 'Lecture de l’en-tête ROM…' : 'Reading ROM header…');
    if (!is3DSRom && window.NDSRomParser?.parse) {
      await waitForLoadingFrame();
      setGlobalLoadingProgress(24, currentLang === 'fr' ? 'Analyse complète de la ROM DS…' : 'Parsing full DS ROM…');
      const parsed = window.NDSRomParser.parse(buffer, filename);
      if (parsed?.trainers?.length) {
        setRomRuntimeLookups(parsed?.lookups, parsed?.meta);
        setLang((parsed?.meta?.language || 'en') === 'fr' ? 'fr' : 'en');
        await applyJSONData(parsed, filename || parsed?.meta?.sourceFile || 'uploaded.nds');
        showToast(`✅ ROM parsée : ${parsed?.meta?.title || filename || 'ROM DS'}`);
        return;
      }
    }
    const bytes = new Uint8Array(buffer);
    let entry = null;
    let title = '';
    if (is3DSRom) {
      setGlobalLoadingProgress(24, currentLang === 'fr' ? 'Analyse NCSD / NCCH…' : 'Parsing NCSD / NCCH…');
      const rom3ds = read3DSRomMeta(buffer, filename);
      if (!rom3ds) throw new Error(currentLang === 'fr' ? 'ROM 3DS invalide' : 'Invalid 3DS ROM');
      entry = pickBestVanilla3DSEntryForRom(rom3ds.productCode, rom3ds.titleId, filename);
      title = rom3ds.productCode || filename;
      if (!entry) throw new Error(`ROM 3DS non prise en charge (${rom3ds.productCode || rom3ds.titleId || 'code inconnu'})`);
    } else {
      if (bytes.length < 0x10) throw new Error('ROM trop petite');
      title = asciiFromBytes(bytes.slice(0x00, 0x0C));
      const idCode = asciiFromBytes(bytes.slice(0x0C, 0x10));
      entry = pickBestVanillaEntryForRom(idCode, filename);
      if (!entry) throw new Error(`ROM DS non prise en charge (${idCode || 'code inconnu'})`);
    }
    setGlobalLoadingProgress(36, currentLang === 'fr' ? 'Chargement du dataset de version…' : 'Loading version dataset…');
    await waitForLoadingFrame();
    await loadBuiltInVanilla(entry.slug + '::' + ((entry.regions || ['unknown'])[0]), true);
    showToast(`✅ ROM reconnue : ${(entry.sourceFile || title || entry.game)} chargée`);
  } catch (e) {
    showToast('❌ ' + (e.message || e));
  } finally {
    hideGlobalLoading();
  }
}

async function loadLogFile(text, filename) {
  detectedVersionInfo = detectVersionFromText(text, filename);
  detectedVersionMeta = detectedVersionInfo;
  isLumiRom = detectedVersionInfo.name.toLowerCase().includes('luminescent');
  detectedGen = detectedVersionInfo.name;
  if (isLumiRom) {
    setGlobalLoadingProgress(10, currentLang === 'fr' ? 'Chargement des overrides du mod Lumi…' : 'Loading Lumi mod overrides…');
    try { await ensureLumiModOverridesLoaded(); } catch (e) { console.warn('Lumi overrides load failed', e); }
  }
  setGlobalLoadingProgress(16, currentLang === 'fr' ? 'Lecture des dresseurs du log…' : 'Parsing trainers from log…');
  const trainers = parseLogFile(text, filename);
  if (!trainers.length) { showToast('❌ Aucun dresseur trouvé'); return; }
  groupedTrainers = {};
  const seen = new Set();
  for (const t of trainers) {
    const sig = t.readOnly.name.toLowerCase()+':::'+t.party.map(p=>p.species+'|'+p.level).join(';');
    if (seen.has(sig)) continue;
    seen.add(sig);
    const groupKey = getTrainerGroupKey(t);
    (groupedTrainers[groupKey]=groupedTrainers[groupKey]||[]).push(t);
  }
  sortTrainerVersions();
  setGlobalLoadingProgress(28, currentLang === 'fr' ? 'Hydratation complète des ressources…' : 'Fully hydrating resources…');
  await hydrateCurrentDatasetResources();
  showToast(`✅ ${Object.values(groupedTrainers).flat().length} équipes chargées !${isLumiRom?' ⭐ Lumi ROM détectée !':''}`);
  updateGenBadge();
  renderList();
}

async function loadJSON(text, filename = '') {
  try {
    const data = JSON.parse(text);
    if (data && !Array.isArray(data) && data.trainerNameOverrides && !Array.isArray(data.trainers)) {
      applySupplementalTrainerOverrides(data, data.meta || null);
      if (Object.keys(groupedTrainers || {}).length) {
        renderList();
        if (selectedName && groupedTrainers[selectedName]) renderDetail(selectedName, groupedTrainers[selectedName], selectedVersion || 0);
      }
      showToast(currentLang === 'fr' ? '✅ Overrides de dresseurs chargés' : '✅ Trainer overrides loaded');
      return;
    }
    await applyJSONData(data, filename);
  } catch(e) { showToast('❌ Erreur: ' + e.message); }
}

async function applyJSONData(data, filename = '') {
  const rawDataset = (data && !Array.isArray(data) && Array.isArray(data.trainers)) ? data : null;
  const likelyBdspIoTrainers = !rawDataset && isLikelyBdspIoTrainersDataset(data, filename);
  if (rawDataset) {
    if (rawDataset.speciesEntries || rawDataset.moveEntries || rawDataset.itemEntries || rawDataset.abilityEntries) {
      setRomRuntimeLookups(rawDataset, rawDataset.meta || null);
    }
    data = normalizeVanillaDataset(rawDataset);
  }
  isLumiRom = detectLumi(data);
  const rawGame = String(rawDataset?.meta?.game || '').toLowerCase();
  if (rawGame === 'brilliantdiamond') detectedVersionInfo = makeVersionResult('Pokemon Brilliant Diamond', 'json-meta', 1, rawGame);
  else if (rawGame === 'shiningpearl') detectedVersionInfo = makeVersionResult('Pokemon Shining Pearl', 'json-meta', 1, rawGame);
  else if (rawGame === 'luminescentdiamond') detectedVersionInfo = makeVersionResult('Pokemon Luminescent Diamond', 'json-meta', 1, rawGame);
  else if (rawGame === 'luminescentpearl') detectedVersionInfo = makeVersionResult('Pokemon Luminescent Pearl', 'json-meta', 1, rawGame);
  else if (rawGame === 'scarlet') detectedVersionInfo = makeVersionResult('Pokemon Scarlet', 'json-meta', 1, rawGame);
  else if (rawGame === 'violet') detectedVersionInfo = makeVersionResult('Pokemon Violet', 'json-meta', 1, rawGame);
  else if (rawGame === 'luminescent') detectedVersionInfo = makeVersionResult('Luminescent Platinum', 'json-meta', 1, rawGame);
  else detectedVersionInfo = detectVersionFromData(data, filename);
  detectedVersionMeta = detectedVersionInfo;
  if (isLumiRom && !/^pokemon luminescent /i.test(String(detectedVersionInfo?.name || ''))) {
    detectedVersionInfo = makeVersionResult('Luminescent Platinum', 'json-lumi', 1, 'luminescent-signature');
    detectedVersionMeta = detectedVersionInfo;
  }
  const trainerOverrideGame = inferTrainerOverrideGame(rawGame, detectedVersionInfo);
  const shouldUseBdspTrainerMatching =
    likelyBdspIoTrainers ||
    /luminescent/i.test(String(detectedVersionInfo?.key || '')) ||
    /^pokemon (?:bdsp|brilliant diamond|shining pearl)/i.test(String(detectedVersionInfo?.key || '')) ||
    /bdsp|diamant étincelant|perle scintillante|brilliant diamond|shining pearl|luminescent/i.test(String(detectedVersionInfo?.name || ''));
  const shouldUseVanillaTrainerMatching = !!(
    trainerOverrideGame &&
    (
      rawDataset ||
      likelyBdspIoTrainers ||
      ROM_RUNTIME_LOOKUPS?.trainerOverrides?.size ||
      /custom|randomizer|romfs|mod/i.test(String(filename || ''))
    )
  );

  if (shouldUseBdspTrainerMatching) {
    setGlobalLoadingProgress(10, currentLang === 'fr' ? 'Chargement des correspondances dresseurs BDSP…' : 'Loading BDSP trainer identity map…');
    try { await ensureBdspTrainerOverridesLoaded(); } catch (e) { console.warn('BDSP trainer overrides load failed', e); }
  }
  if (shouldUseVanillaTrainerMatching && !shouldUseBdspTrainerMatching) {
    setGlobalLoadingProgress(10, currentLang === 'fr'
      ? 'Chargement des correspondances dresseurs vanilla…'
      : 'Loading vanilla trainer identity map…');
    try { await ensureVanillaTrainerOverridesLoaded(trainerOverrideGame); } catch (e) { console.warn('Vanilla trainer overrides load failed', e); }
  }
  if (isLumiRom) {
    setGlobalLoadingProgress(14, currentLang === 'fr' ? 'Chargement des overrides du mod Lumi…' : 'Loading Lumi mod overrides…');
    try { await ensureLumiModOverridesLoaded(); } catch (e) { console.warn('Lumi overrides load failed', e); }
  }
  if (shouldUseBdspTrainerMatching || shouldUseVanillaTrainerMatching) {
    setGlobalLoadingProgress(16, currentLang === 'fr' ? 'Nettoyage des noms de dresseurs…' : 'Cleaning trainer names…');
    applyRuntimeTrainerIdentityOverrides(data, {
      forceNames: isLumiRom || likelyBdspIoTrainers || !!rawDataset,
    });
  }
  detectedGen = detectedVersionInfo.name;
  setGlobalLoadingProgress(18, currentLang === 'fr' ? 'Organisation des équipes…' : 'Organizing teams…');
  processData(data);
  setGlobalLoadingProgress(28, currentLang === 'fr' ? 'Hydratation complète des ressources…' : 'Fully hydrating resources…');
  await hydrateCurrentDatasetResources();
  showToast(`✅ ${Object.values(groupedTrainers).flat().length} équipes !${isLumiRom?' ⭐ Lumi ROM détectée !':''}`);
  updateGenBadge();
  renderList();
}

function normalizeVanillaDataset(raw) {
  const meta = raw?.meta || {};
  const trainers = Array.isArray(raw?.trainers) ? raw.trainers : [];
  const ensureArray = (value) => Array.isArray(value) ? value : (value ? [value] : []);
  const deriveTrainerNames = (trainer = {}) => {
    const fullDisplayName = cleanTrainerName(
      trainer?.fullDisplayName ||
      [trainer?.trainerClassName || '', trainer?.name || ''].filter(Boolean).join(' ').trim() ||
      trainer?.name ||
      ''
    );
    let trainerClassName = cleanTrainerName(trainer?.trainerClassName || '');
    if (!trainerClassName && fullDisplayName) {
      const parsedClass = parseTrainerClass(fullDisplayName);
      if (parsedClass && parsedClass !== fullDisplayName) trainerClassName = cleanTrainerName(parsedClass);
    }
    let baseName = cleanTrainerName(trainer?.name || '');
    if ((!baseName || baseName === fullDisplayName) && trainerClassName && fullDisplayName) {
      const stripped = stripTrainerClassPrefix(fullDisplayName, trainerClassName);
      if (stripped) baseName = stripped;
    }
    if (!baseName) baseName = fullDisplayName || `Trainer ${trainer?.trainerId ?? 0}`;
    return { fullDisplayName: fullDisplayName || baseName, trainerClassName, baseName };
  };
  return trainers.map(trainer => ({
    ...(() => {
      const derivedNames = deriveTrainerNames(trainer);
      return {
    readOnly: {
      trainerID: trainer.trainerId ?? 0,
      name: derivedNames.fullDisplayName || `Trainer ${trainer.trainerId ?? 0}`,
      trainerClass: derivedNames.trainerClassName || '',
    },
    trainerClassID: trainer.trainerClassId ?? 0,
    trainerClass: derivedNames.trainerClassName || '',
    colorID: 0,
    fightType: trainer.battleType ?? 0,
    arenaID: -1,
    effectID: 0,
    gold: 0,
    useItems: trainer.trainerItems || [],
    hpRecoverFlag: false,
    giftItem: '',
    aiFlags: trainer.ai || 0,
    _vanillaMeta: {
      ...meta,
      trainerName: derivedNames.baseName || '',
      trainerClassName: derivedNames.trainerClassName || '',
      fullDisplayName: derivedNames.fullDisplayName || '',
    },
    party: (trainer.party || []).map(mon => ({
      species: mon.species || '',
      formID: mon.formId || 0,
      shiny: false,
      level: mon.level || 1,
      sex: mon.sex || 'Random',
      nature: '',
      ability: ensureArray(mon.abilities).length === 1 ? ensureArray(mon.abilities)[0] : '',
      _abilityChoice: mon.abilityChoice || 0,
      abilities: ensureArray(mon.abilities),
      moveset: mon.moveset || [],
      heldItem: mon.heldItem || '',
      ballID: mon.ball ?? -1,
      seal: -1,
      ivs: mon.ivs || {"hp":0,"atk":0,"def":0,"spAtk":0,"spDef":0,"spd":0},
      evs: mon.evs || {"hp":0,"atk":0,"def":0,"spAtk":0,"spDef":0,"spd":0},
      _speciesId: mon.speciesId || 0,
      _moveIds: mon.movesetIds || [],
      _heldItemId: mon.heldItemId || 0,
      _vanillaTypes: ensureArray(mon.types),
      _vanillaTypeIds: ensureArray(mon.typeIds),
      _romBaseStats: mon.baseStats || {},
      _romMoveDetails: mon.moveDetails || [],
      _movesSource: mon.movesSource || '',
    })),
      };
    })(),
  }));
}

function ensureVanillaScriptLoaded(slug) {
  return new Promise((resolve, reject) => {
    window.VANILLA_ROM_DATA = window.VANILLA_ROM_DATA || {};
    if (window.VANILLA_ROM_DATA[slug]) { resolve(window.VANILLA_ROM_DATA[slug]); return; }
    const existing = document.querySelector(`script[data-vanilla-slug="${slug}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(window.VANILLA_ROM_DATA[slug]));
      existing.addEventListener('error', reject);
      return;
    }
    const script = document.createElement('script');
    script.src = `./vanilla_exports/${slug}.js`;
    script.dataset.vanillaSlug = slug;
    script.onload = () => resolve(window.VANILLA_ROM_DATA[slug]);
    script.onerror = () => reject(new Error(`Unable to load ${slug}.js`));
    document.body.appendChild(script);
  });
}

function showVanillaBrowser(game = '') {
  vanillaMenuGame = getVanillaUiGameKey(game || vanillaMenuGame || VANILLA_GAME_ORDER.find(g => getVanillaCatalog()[g]?.length) || '');
  renderVanillaOptionsMenu();
  document.getElementById('trainer-list').innerHTML = renderEmptyTrainerList();
  const catalog = getVanillaCatalog();
  const games = VANILLA_GAME_ORDER.filter(g => catalog[g]?.length);
  const gameButtons = games.map(g => `<button class="dd-file-btn" style="font-size:11px;padding:10px 12px;width:100%;${g===vanillaMenuGame?'border-color:var(--accent);box-shadow:0 0 14px var(--glow);':''}" onclick="showVanillaBrowser('${g}')">${VANILLA_GAME_LABELS[g]?.icon || '📘'} ${getVanillaGameLabel(g)}</button>`).join('');
  const entries = catalog[vanillaMenuGame] || [];
  const regionButtons = entries.flatMap(row => (row.regions || ['unknown']).map(region => {
    const langLabel = row.language === 'fr' ? 'FR' : 'EN';
    return `<button class="dd-file-btn" style="font-size:12px;padding:10px 14px;min-width:220px" onclick="loadBuiltInVanilla('${row.slug}::${region}')">${getVanillaRegionLabel(region)} · ${langLabel} · ${row.trainerCount} ${currentLang === 'fr' ? 'dresseurs' : 'trainers'}</button>`;
  })).join('');
  document.getElementById('detail').innerHTML = `<div class="empty" style="gap:18px"><div class="ball">📚</div><p>${currentLang === 'fr' ? 'Choisis un jeu vanilla<br>puis une version' : 'Choose a vanilla game<br>then a version'}</p><div style="display:grid;grid-template-columns:repeat(2,minmax(180px,1fr));gap:10px;justify-content:center;align-items:stretch;max-width:760px;width:100%">${gameButtons}</div>${regionButtons ? `<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;max-width:980px">${regionButtons}</div>` : ''}</div>`;
}

async function loadBuiltInVanilla(which, skipOverlay = false) {
  const requestedKey = String(which || '').toLowerCase();
  const [rawKey, forcedRegion = ''] = requestedKey.split('::');
  const legacyMap = {
    black_fr: '5587_pokemon_version_noire_france_ndsi_enhanced',
    black_usa: 'pokemon_black_version_usa_europe_ndsi_enhanced',
    black_eu: 'pokemon_black_version_usa_europe_ndsi_enhanced',
    white_fr: '5586_pokemon_version_blanche_dsi_enhanced_f_eximius',
    white_usa: 'pokemon_white_version_usa_europe_ndsi_enhanced',
    white_eu: 'pokemon_white_version_usa_europe_ndsi_enhanced',
  };
  const slug = legacyMap[rawKey] || rawKey;
  const entry = getVanillaManifest().find(x => x.slug === slug);
  if (!entry) {
    showToast('❌ Dataset vanilla introuvable');
    return;
  }
  try {
    if (!skipOverlay) {
      showGlobalLoading(
        currentLang === 'fr' ? 'Chargement Vanilla ROM' : 'Loading Vanilla ROM',
        currentLang === 'fr'
          ? `Préparation de ${getVanillaGameLabel(entry.game)} ${getVanillaRegionLabel(forcedRegion || (entry.regions || ['unknown'])[0])}…`
          : `Preparing ${getVanillaGameLabel(entry.game)} ${getVanillaRegionLabel(forcedRegion || (entry.regions || ['unknown'])[0])}…`
      );
      await waitForLoadingFrame();
    }
    setGlobalLoadingProgress(10, currentLang === 'fr' ? 'Chargement du dataset vanilla…' : 'Loading vanilla dataset…');
    await waitForLoadingFrame();
    const raw = await ensureVanillaScriptLoaded(slug);
    if (!raw) throw new Error('Dataset vide');
    setGlobalLoadingProgress(42, currentLang === 'fr' ? 'Organisation des dresseurs…' : 'Organizing trainers…');
    await waitForLoadingFrame();
    setLang((entry.language || 'fr') === 'fr' ? 'fr' : 'en');
    vanillaMenuGame = entry.game || '';
    await applyJSONData(raw, entry.sourceFile || entry.file || `${slug}.json`);
    renderVanillaOptionsMenu();
    const region = forcedRegion || (entry.regions || ['unknown'])[0];
    showToast(`✅ ${getVanillaGameLabel(entry.game)} ${getVanillaRegionLabel(region)} chargé`);
    const dd = document.getElementById('options-dropdown');
    if (dd) dd.classList.remove('open');
  } catch (e) {
    showToast(`❌ ${e.message || e}`);
  } finally {
    if (!skipOverlay) hideGlobalLoading();
  }
}

function updateGenBadge() {
  const genBadge = document.getElementById('gen-badge');
  const genNumber = detectedVersionMeta?.gen || detectedVersionInfo?.gen || null;
  const badgeLabel = detectedGen ? `${isLumiRom ? '⭐ ' : ''}${detectedGen}${genNumber ? ` · Gen ${genNumber}` : ''}` : '';
  if (genBadge && detectedGen) {
    genBadge.textContent = badgeLabel;
    genBadge.title = detectedVersionMeta?.source ? `Détection: ${detectedVersionMeta.source}${detectedVersionMeta.confidence ? ` (${Math.round(detectedVersionMeta.confidence * 100)}%)` : ''}` : '';
    genBadge.style.display = 'inline-block';
    genBadge.style.borderColor = isLumiRom ? 'rgba(167,139,250,.4)' : 'rgba(79,195,247,.32)';
    genBadge.style.color = isLumiRom ? 'var(--purple)' : 'var(--accent)';
    genBadge.style.background = isLumiRom ? 'rgba(167,139,250,.15)' : 'rgba(79,195,247,.12)';
  }
}

// ── FILE INPUT & DRAG/DROP ────────────────────────────────────────────────────
function handlePrimaryFileInputChange(e) {
  const input = e?.target;
  const f = input?.files?.[0];
  if (!f) return;
  const lower = f.name.toLowerCase();
  const r = new FileReader();
  showGlobalLoading(
    currentLang === 'fr' ? 'Préparation du fichier' : 'Preparing file',
    currentLang === 'fr' ? `Lecture de ${f.name}…` : `Reading ${f.name}…`
  );
  setGlobalLoadingProgress(2, currentLang === 'fr' ? 'Ouverture du fichier…' : 'Opening file…');
  r.onprogress = ev => {
    if (!ev.lengthComputable) return;
    const pct = Math.max(2, Math.min(12, Math.round((ev.loaded / ev.total) * 12)));
    setGlobalLoadingProgress(pct, currentLang === 'fr' ? 'Lecture du fichier…' : 'Reading file…');
  };
  if (lower.endsWith('.nds') || lower.endsWith('.3ds') || lower.endsWith('.cxi')) {
    r.onload = ev => loadRomArrayBuffer(ev.target.result, f.name);
    r.readAsArrayBuffer(f);
  } else {
    r.onload = ev => loadFile(ev.target.result, f.name);
    r.readAsText(f);
  }
  input.value = '';
}
document.getElementById('file-input').addEventListener('change', handlePrimaryFileInputChange);
document.body.addEventListener('dragover', e => e.preventDefault());
document.body.addEventListener('drop', e => {
  e.preventDefault();
  const f = e.dataTransfer.files[0]; if (!f) return;
  const lower = f.name.toLowerCase();
  const r = new FileReader();
  showGlobalLoading(
    currentLang === 'fr' ? 'Préparation du fichier' : 'Preparing file',
    currentLang === 'fr' ? `Lecture de ${f.name}…` : `Reading ${f.name}…`
  );
  setGlobalLoadingProgress(2, currentLang === 'fr' ? 'Ouverture du fichier…' : 'Opening file…');
  r.onprogress = ev => {
    if (!ev.lengthComputable) return;
    const pct = Math.max(2, Math.min(12, Math.round((ev.loaded / ev.total) * 12)));
    setGlobalLoadingProgress(pct, currentLang === 'fr' ? 'Lecture du fichier…' : 'Reading file…');
  };
  if (lower.endsWith('.nds') || lower.endsWith('.3ds') || lower.endsWith('.cxi')) {
    r.onload = ev => loadRomArrayBuffer(ev.target.result, f.name);
    r.readAsArrayBuffer(f);
  } else {
    r.onload = ev => loadFile(ev.target.result, f.name);
    r.readAsText(f);
  }
});
document.getElementById('search-input').addEventListener('input', e => {
  trainerSearchQuery = e.target.value || '';
  scheduleRenderList(140);
});
const globalPokemonSearchInput = document.getElementById('search-pokemon-input');
if (globalPokemonSearchInput) {
  globalPokemonSearchInput.addEventListener('input', e => {
    pokemonSearchQuery = e.target.value || '';
    scheduleRenderList(140);
  });
}

// Event delegation for trainer list (handles special chars in names safely)
document.getElementById('trainer-list').addEventListener('click', e => {
  const item = e.target.closest('.t-item');
  if (!item) return;
  const name = decodeURIComponent(item.dataset.name);
  const ver = parseInt(item.dataset.ver) || 0;
  selectTrainer(name, ver);
});

// Event delegation for vtabs in detail panel
document.getElementById('detail').addEventListener('click', e => {
  const btn = e.target.closest('.vtab[data-trainer-key]');
  if (!btn) return;
  const name = decodeURIComponent(btn.dataset.trainerKey);
  const ver = parseInt(btn.dataset.ver) || 0;
  selectTrainer(name, ver);
});

// ── POKEMON SEARCH IN TRAINER ─────────────────────────────────────────────────
let pokeSearchQuery = '';
function filterPokeCards(q) {
  clearTimeout(detailPokeSearchTimer);
  detailPokeSearchTimer = setTimeout(() => applyPokeCardSearch(q), 550);
}

function applyPokeCardSearch(q) {
  pokeSearchQuery = q.toLowerCase().trim();
  detailPokeSearchQuery = q;
  if (!selectedName || !groupedTrainers[selectedName]) return;
  const versions = groupedTrainers[selectedName];
  if (versions.length > 1) {
    const parsed = parseGlobalSearchQuery(q);
    const matches = getMatchingVersionIndexes(versions, parsed);
    const nextVersion = matches.length ? matches[0] : selectedVersion;
    renderDetail(selectedName, versions, nextVersion);
    document.querySelectorAll('.t-item').forEach(el => {
      el.classList.toggle('active', decodeURIComponent(el.dataset.name)===selectedName && parseInt(el.dataset.ver)===nextVersion);
    });
    return;
  }
  const parsed = parseGlobalSearchQuery(q);
  const cards = document.querySelectorAll('.poke-card[data-poke-name]');
  let visible = 0;
  cards.forEach(card => {
    const pokeName = normalizeLookupKey(card.dataset.pokeName || '');
    const level = parseInt(card.querySelector('.poke-lv')?.textContent?.replace(/\D/g,'') || '0', 10);
    const nameOk = !parsed.pokemonTerm || pokeName.includes(normalizeLookupKey(parsed.pokemonTerm));
    const levelOk = parsed.level === null || parsed.level === level;
    const show = nameOk && levelOk;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  const noRes = document.getElementById('poke-search-noresult');
  if (noRes) noRes.style.display = (visible === 0 && pokeSearchQuery) ? '' : 'none';
}

window.addEventListener('load', () => {
  const queryLang = new URLSearchParams(window.location.search).get('lang');
  const savedLang = safeLocalStorageGet(STORAGE_KEYS.lang);
  const initialLang = (queryLang === 'fr' || queryLang === 'en')
    ? queryLang
    : (savedLang === 'fr' || savedLang === 'en' ? savedLang : null);
  if (initialLang) setLang(initialLang);
  else resetAll();
  renderVanillaOptionsMenu();
  ensureVanillaManifestHydrated().then(() => {
    renderVanillaOptionsMenu();
    if (document.body.dataset.startView === 'vanilla') {
      showVanillaBrowser(vanillaMenuGame || undefined);
    }
  }).catch(() => {});
  syncSpriteModeToggle();
  syncTeamLayoutToggle();
  if (document.body.dataset.startView === 'vanilla') {
    showVanillaBrowser();
  }
});
