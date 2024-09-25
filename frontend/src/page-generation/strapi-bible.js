const BOOKS = new Map([
  ["Genesis", "Genesis"],
  ["Exodus", "Exodus"],
  ["Leviticus", "Leviticus"],
  ["Numbers", "Numbers"],
  ["Deuteronomy", "Deuteronomy"],
  ["Joshua", "Joshua"],
  ["Judges", "Judges"],
  ["Ruth", "Ruth"],
  ["Samuel_1st", "1 Samuel"],
  ["Samuel_2nd", "2 Samuel"],
  ["Kings_1st", "1 Kings"],
  ["Kings_2nd", "2 Kings"],
  ["Chronicles_1st", "1 Chronicles"],
  ["Chronicles_2nd", "2 Chronicles"],
  ["Ezra", "Ezra"],
  ["Nehemiah", "Nehemiah"],
  ["Esther", "Esther"],
  ["Job", "Job"],
  ["Psalms", "Psalms"],
  ["Proverbs", "Proverbs"],
  ["Ecclesiastes", "Ecclesiastes"],
  ["Song of Solomon", "Song of Solomon"],
  ["Isaiah", "Isaiah"],
  ["Jeremiah", "Jeremiah"],
  ["Lamentations", "Lamentations"],
  ["Ezekiel", "Ezekiel"],
  ["Daniel", "Daniel"],
  ["Hosea", "Hosea"],
  ["Joel", "Joel"],
  ["Amos", "Amos"],
  ["Obadiah", "Obadiah"],
  ["Jonah", "Jonah"],
  ["Micah", "Micah"],
  ["Nahum", "Nahum"],
  ["Habakkuk", "Habakkuk"],
  ["Zephaniah", "Zephaniah"],
  ["Haggai", "Haggai"],
  ["Zechariah", "Zechariah"],
  ["Malachi", "Malachi"],
  ["Matthew", "Matthew"],
  ["Mark", "Mark"],
  ["Luke", "Luke"],
  ["John", "John"],
  ["Acts", "Acts"],
  ["Romans", "Romans"],
  ["Corinthians_1st", "1 Corinthians"],
  ["Corinthians_2nd", "2 Corinthians"],
  ["Galatians", "Galatians"],
  ["Ephesians", "Ephesians"],
  ["Philippians", "Philippians"],
  ["Colossians", "Colossians"],
  ["Thessalonians_1st", "1 Thessalonians"],
  ["Thessalonians_2nd", "2 Thessalonians"],
  ["Timothy_1st", "1 Timothy"],
  ["Timothy_2nd", "2 Timothy"],
  ["Titus", "Titus"],
  ["Philemon", "Philemon"],
  ["Hebrews", "Hebrews"],
  ["James", "James"],
  ["Peter_1st", "1 Peter"],
  ["Peter_2nd", "2 Peter"],
  ["John_1st", "1 John"],
  ["John_2nd", "2 John"],
  ["John_3rd", "3 John"],
  ["Jude", "Jude"],
  ["Revelation", "Revelation"],
]);

const unknownBook = unknown => {
  console.error("Unknown Bible book", unknown);
  return "Unknown";
};

const getBookName = strapiBook =>
  BOOKS.get(strapiBook) || unknownBook(strapiBook);

const sortBibleBooks = (a, b) => {
  if (a === b) {
    return 0;
  }
  for (const [_, v] of BOOKS) {
    if (a === v) {
      return -1;
    }
    if (b === v) {
      return 1;
    }
  }
  return 1;
};

module.exports = {
  getBookName,
  sortBibleBooks,
};
