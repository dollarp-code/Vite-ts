// Type Annotation and Type Inference

// let awesomeName: string = 'shakeAndBake';
// awesomeName = 'something';
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let goodies: string = 'chocolate';
// goodies = goodies.toUpperCase();
// goodies = 'chokoMilo';
// console.log(goodies);

// let valueAdd: number = 556 - 22;
// valueAdd = valueAdd - 3;
// console.log(valueAdd);

// let isAdult: boolean = valueAdd >= 18;
// isAdult = !isAdult;
// console.log(isAdult);

// goodies = 10;
// valueAdd = 'twenty';
// isAdult = 'yes';

// console.log(goodies, valueAdd, isAdult);

// Union and Any Type

// let tax: number | string = 29; // union
// tax = '$20';

// // literals
// let statusRequest: 'success' | 'pending' | 'error' = 'pending';
// statusRequest = 'success';
// statusRequest = 'error';
// // statusRequest = 'random'

// // Any
// let notSure: any = 4;
// notSure = 'maybe a string';
// notSure = false;

// // let ramdom;

// const books = ['1984', 'Brave New World', 'Farenheit 451'];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === '1984') {
//     foundBook = book;
//     foundBook.toUpperCase();
//     break;
//   }
// }
// console.log(foundBook?.length);

// Array in Typescript
let temperatures: number[] = [22, 23];
// temperatures.push(true)

let array: string[] = ['shade', 'wherghost'];
// array.push(false)

let mixed: (string | boolean)[] = ['laid', true, 'shade', false];

// Object in Typescript

let car: { brand: string; year: number } = { brand: 'toyota', year: 2024 };

car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2025 };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { title: string; cost?: number }[] = [book, pen, notebook];
items[0].title = 'notebook';

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2020 };
// bike.year = 'old'

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: 'HP'};

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };
let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: 'shoes' });
