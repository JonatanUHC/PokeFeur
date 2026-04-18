// Version-specific battle data helpers.
// These overrides are only used when the loaded ROM / vanilla dataset did not
// provide a species record for the current game. ROM / dataset data always wins.
(function () {
  const PRE6_TYPE_OVERRIDES = {
    'azurill': ['Normal'],
    'marill': ['Water'],
    'azumarill': ['Water'],
    'cleffa': ['Normal'],
    'clefairy': ['Normal'],
    'clefable': ['Normal'],
    'igglybuff': ['Normal'],
    'jigglypuff': ['Normal'],
    'wigglytuff': ['Normal'],
    'mime-jr': ['Psychic'],
    'mr-mime': ['Psychic'],
    'togepi': ['Normal'],
    'togetic': ['Normal', 'Flying'],
    'togekiss': ['Normal', 'Flying'],
    'snubbull': ['Normal'],
    'granbull': ['Normal'],
    'ralts': ['Psychic'],
    'kirlia': ['Psychic'],
    'gardevoir': ['Psychic'],
    'mawile': ['Steel'],
    'cottonee': ['Grass'],
    'whimsicott': ['Grass'],
  };

  function normalizeTypeArray(types) {
    return [...new Set((types || []).filter(Boolean).map(t => {
      const s = String(t || '').trim();
      return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '';
    }).filter(Boolean))];
  }

  function getSpeciesTypeOverrideForGen(slug, gen) {
    const key = String(slug || '').trim().toLowerCase();
    if (!key) return null;
    if ((gen || 0) < 6 && PRE6_TYPE_OVERRIDES[key]) {
      return normalizeTypeArray(PRE6_TYPE_OVERRIDES[key]);
    }
    return null;
  }

  window.VERSION_DATA_RULES = {
    PRE6_TYPE_OVERRIDES,
    normalizeTypeArray,
    getSpeciesTypeOverrideForGen,
  };
})();
