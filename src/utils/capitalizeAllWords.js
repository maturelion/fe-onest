const capitalizeAllWords = (string) => {
  // Split the input string into an array of words
  const words = string.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word; // Handle empty words (e.g., multiple spaces)
    }
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join("+");
};

export default capitalizeAllWords;
