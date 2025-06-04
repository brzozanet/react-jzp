export function getCategoryInfo(category) {
  // for (let index = 0; index < 10000; index++) {
  //   console.log("Working simulation...");
  // }

  switch (category) {
    case "noun":
      return "W języku angielskim znajduje się ponad 80 000 rzeczowników";
    case "verb":
      return "W języku angielskim znajduje się ponad 25 000 czasowników";
    default:
      return "W języku angielskim znajduje się ponad 170 000 słów";
  }
}
