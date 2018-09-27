module.exports = function check(str, bracketsConfig) {
  for (const brackets of bracketsConfig) {
    for (const brackets of bracketsConfig) {
      for (const brackets of bracketsConfig) {
        const [open, close] = brackets;
        const searchBracketPair = open + close;
        while (str.includes(searchBracketPair)) {
          const openBracketPosition = str.indexOf(searchBracketPair);
          str =
            str.slice(0, openBracketPosition) +
            str.slice(openBracketPosition + 2);
        }
      }
    }
  }
  return str.length === 0;
};
