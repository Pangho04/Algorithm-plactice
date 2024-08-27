/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let newRansom = ransomNote;

  for(let i = 0; i < magazine.length; i++){
    newRansom = newRansom.replace(magazine[i],"");
  }

  console.log(newRansom)
  if(newRansom.length > 0){
    return false;
  }

  return true;
};