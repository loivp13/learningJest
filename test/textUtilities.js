let lessImportantWords = ["the", "a"];
const titleCase = (title) => {
  return title
    .toLowerCase()
    .split(" ")
    .map((word, i, arr) => {
      if (lessImportantWords.indexOf(word) !== -1 && i !== 0) {
        return word;
      }
      return (arr[i] = word[0].toUpperCase() + word.slice(1));
    })
    .join(" ");
};

module.exports = { titleCase };
