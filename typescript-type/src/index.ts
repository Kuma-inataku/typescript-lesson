const person: {
    name: string;
    age: number
} = {
    name: 'Jack',
    age: 21,
}

const fruits = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1500, false];
// book.push(21);
// console.log(book);
// book.forEach(el => console.log(el));

enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

let unionType: number | string = 10;
unionType = 'hello';
unionType.toLocaleUpperCase();
unionType = 10;
unionType.toString();
let unionTypes: (number | string)[] = [21, 'hello'];

type ClothSize = 'small' | 'medium' | 'large';
const apple = 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string;
    size: ClothSize;
} = {
    color: 'white',
    size: 'large'
}

function sayHello(): void {
    console.log('Hello!');
}
console.log(sayHello());

function add(num1: number, num2: number): number {
    return num1 + num2;
}

const anotherAdd: (n1: number, n2: number) => number = add;

// const doubleNumber = (number: number): number => number * 2;
const doubleNumber: (number: number) => number = number => number * 2;

function doubleAndHandle(num: number, cb: (num: number) => void) :void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(10, doubleNum => {
    return doubleNum * 2;
})
