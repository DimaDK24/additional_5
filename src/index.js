module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    const brackets = bracketsConfig[i];
    const [open, close] = brackets;
    const searchBracketPair = open + close;
    while (str.includes(searchBracketPair)) {
      const openBracketPosition = str.indexOf(searchBracketPair);
      str =
        str.slice(0, openBracketPosition) + str.slice(openBracketPosition + 2);
      i = -1;
    }
  }
  return str.length === 0;
};
