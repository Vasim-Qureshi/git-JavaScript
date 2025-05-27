// ECMAScript 2015 (ES6) के प्रमुख फीचर्स - हिंदी में उदाहरण सहित

// 1. let और const - Block Scope वेरिएबल
let naam = 'राम';
const PI = 3.14;
console.log("नाम:", naam);
console.log("PI:", PI);

// 2. Arrow Functions (तीर वाले फ़ंक्शन)
const greet = () => "नमस्ते";
console.log(greet());

// 3. Template Literals - बैकटिक का प्रयोग
let user = 'सीता';
let msg = `नमस्ते ${user}, आप कैसे हैं?`;
console.log(msg);

// 4. Default Parameters - डिफ़ॉल्ट वैल्यू
function sayHello(name = "मित्र") {
  console.log(`नमस्ते ${name}`);
}
sayHello(); // डिफ़ॉल्ट वैल्यू
sayHello("लक्ष्मण"); // नाम दिया गया

// 5. Destructuring - ऐरे और ऑब्जेक्ट से वैल्यू निकालना
// Array Destructuring
let [a, b] = [10, 20];
console.log("a =", a, ", b =", b); // a = 10, b = 20

// Object Destructuring
let person = { naam: 'राम', age: 25 };
let { naam: pName, age } = person;
console.log("नाम:", naam, "उम्र:", age); // नाम: राम उम्र: 25
console.log("व्यक्ति का नाम:", pName, "उम्र:", age); // व्यक्ति का नाम: राम उम्र: 25

// 6. Spread और Rest ऑपरेटर

// Spread - एक ऐरे की वैल्यू को दूसरी में जोड़ना
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // Spread ऑपरेटर का उपयोग
console.log("Spread:", arr2); // [1, 2, 3, 4]

// Rest - अनगिनत वैल्यू को एक ऐरे में लेना
function sum(...nums) {
  return nums.reduce((a, b) => a + b); // ऐरे के सभी नंबरों का योग
}
console.log("Sum:", sum(1, 2, 3, 4)); // 10

// 7. Classes - क्लासेस और कंस्ट्रक्टर
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`नमस्ते ${this.name}`);
  }
}
// क्लास का उपयोग करके ऑब्जेक्ट बनाना
const p1 = new Person("भरत"); // भरत नाम का व्यक्ति
const p2 = new Person("शत्रुघ्न"); // शत्रुघ्न नाम का व्यक्ति
p1.greet(); // "नमस्ते भरत"
p2.greet(); // "नमस्ते शत्रुघ्न"


// 8. Promises - asynchronous operations के लिए
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("ऑपरेशन सफल रहा");
  } else {
    reject("ऑपरेशन असफल रहा");
  }
});

promise
  .then((msg) => console.log("प्रॉमिस:", msg))
  .catch((err) => console.log("त्रुटि:", err));

// 9. Modules (यह ब्राउज़र या Node.js में अलग फ़ाइल में काम करता है)
// File: export.js
// export const greetUser = () => "नमस्ते मित्र";

// File: import.js
// import { greetUser } from './export.js';
// console.log(greetUser());

// 10. Map और Set - नए डाटा स्ट्रक्चर

// Map
let map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log("Map 'a':", map.get('a'));

// Set - केवल यूनिक वैल्यू रखता है
let set = new Set([1, 2, 2, 3, 4]);
console.log("Set:", [...set]); // Set को Array में बदला
console.log("क्या Set में 2 है?", set.has(2)); // क्या Set में 2 है? true
console.log("क्या Set में 5 है?", set.has(5)); // क्या Set में 5 है? false

// 11. Symbol - यूनिक और इम्यूटेबल वैल्यू
let sym1 = Symbol('पहला');
let sym2 = Symbol('पहला');
console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2); // Symbol की तुलना नहीं की जा सकती
console.log("क्या sym1 === sym2?", sym1 === sym2); // क्या sym1 === sym2? false