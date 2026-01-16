// 1) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які починаються на http://
const stringsHref = [
  "http://example.com&quot",
  "https://openai.com&quot",
  "ftp://website.com&quot",
  "http://google.com&quot",
  "https://stackoverflow.com&quot",
  "http://github.com&quot",
  "http://youtube.com&quot",
  "https://wikipedia.org&quot",
  "ftp://server.net&quot",
  "http://facebook.com&quot",
  "https://amazon.com&quot",
  "http://twitter.com&quot",
  "https://linkedin.com&quot",
  "ftp://host.com&quot",
  "http://reddit.com&quot",
  "https://medium.com&quot",
];

const newString = stringsHref.filter((str) => str.startsWith("http://"));
console.log(newString);

// 2) Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які закінчуються на .html
const fileNames = [
  "index.html",
  "styles.css",
  "script.js",
  "about.html",
  "contact.html",
  "home.html",
  "blog-post-1.html",
  "blog-post-2.html",
  "services.html",
  "portfolio.html",
  "projects.html",
  "gallery.html",
  "faq.html",
  "terms.html",
  "privacy-policy.html",
];

const anotherString = fileNames.filter((str) => str.endsWith(".html"));
console.log(anotherString);

// 3) Дан рядок: 'abcde abcde abcde abcde'. Замініть у ній перший символ кожного слова на '!'
const string = "abcde abcde abcde abcde";
const result = string
  .split(" ")
  .map((word) => "!" + word.slice(1))
  .join(" ");
console.log(result);

// 4) Створіть функцію, яка приймає рядок і повертає кількість голосних літер у ньому.
function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const foundVowels = text
    .toLowerCase()
    .split("")
    .filter((character) => vowels.includes(character));
  return foundVowels.length;
}
console.log(countVowels("Anna"));

// 5) Створіть функцію, яка перевіряє, чи є рядок паліндромом.

// *
// 6) Створіть функцію, яка знаходить найдовше слово у рядку і повертає його.
