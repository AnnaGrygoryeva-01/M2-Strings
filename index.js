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

// 3) Дан рядок: 'abcde abcde abcde abcde'. Замініть у ній перший символ кожного слова на '!'

// 4) Створіть функцію, яка приймає рядок і повертає кількість голосних літер у ньому.
// 5) Створіть функцію, яка перевіряє, чи є рядок паліндромом.

function palindrome(string) {
  const lowerString = string.toLowerCase();
  const cleanString = lowerString.split(" ").join("");
  const reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
}

console.log(palindrome("Anna"));
console.log(palindrome("Never odd or even"));

// 6) Створіть функцію, яка знаходить найдовше слово у рядку і повертає його.
