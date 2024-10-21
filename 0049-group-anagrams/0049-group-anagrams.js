/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = [];
  const maps = [];

  for (const str of strs) {
    if (maps.length === 0) {
      const newMap = new Map();

      for (const spell of str) {

        if (newMap.has(spell)) {
          newMap.set(spell, newMap.get(spell)+ 1);
        } else {
          newMap.set(spell, 1);
        }
      }

      maps.push(newMap);
    }

    for (let i = 0; i < maps.length; i++) {
      const currentMap = new Map(maps[i]);
      let isAnagram = true;

      for (const spell of str) {
        if (currentMap.has(spell)) {
          currentMap.set(spell, currentMap.get(spell) - 1);

          if (currentMap.get(spell) === 0) {
            currentMap.delete(spell);
          }
        } else {
          isAnagram = false;
          break;
        }
      }

      if (isAnagram && currentMap.size === 0) {
        result[i] = result[i] ? [...result[i], str] : [str];
        break;
      } else if (i === maps.length - 1) {
        const newMap = new Map();

        for (const spell of str) {
          if (newMap.has(spell)) {
            newMap.set(spell, newMap.get(spell) + 1);
          } else {
            newMap.set(spell, 1);
          }
        }

        maps.push(newMap);
        result.push([str]);
        break;
      }
    }
  }

  console.log(maps)

  return result;
};