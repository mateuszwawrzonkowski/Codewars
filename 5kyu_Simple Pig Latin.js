function pigIt(str) {
    const strArray = str.split(' ');
    const firstLetter = strArray.map(strTab => strTab[0].slice());
    const restLetters = strArray.map(strTab => strTab.slice(1, strTab.length));
    let sum = "";
    for (let i = 0; i < restLetters.length; i++) {
        if (strArray[i] !== "!" && strArray[i] !== "?") {
            sum += `${restLetters[i]}${firstLetter[i]}ay`;
        } else {
            sum += `${restLetters[i]}${firstLetter[i]}`;
        }
        if (i < restLetters.length - 1) sum += ` `;
    }
    return sum;
}