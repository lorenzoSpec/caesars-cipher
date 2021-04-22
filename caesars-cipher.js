function rot13(str) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let cipher = str.split("");

  return cipher.map(item => {
    if(/[A-Z]/.test(item)){
      let calcu = alphabet.indexOf(item)+13;
      if(calcu < 26){
        return alphabet[calcu];
      } else {
        return alphabet[calcu-26];
      }
    } else if (/[\W]/.test(item)){
      return item;
    }
  }).join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
