// type addFunc = (num1: number, num2: number) => number;
// let addFunc: addFunc;
// addFunc = (n1:number, n2: number) => {
//     return n1 + n2;
// }
interface addFunc {
    (num1: number, num2: number): number
}
function addFunc(n1:number, n2: number) {
    return n1 + n2;
}

interface Nameable {
    name?: string;
    nickname?: string;
}
const nameable: Nameable = {
    name: 'Quill'
}
interface Human extends Nameable {
    age: number;
    greeting(message: string): void;
}

class Developer implements Human, Nameable {
    constructor(public age: number, public experience: number, public name?: string) {
    };
    greeting(message: string): void {
        console.log(message);
    }
}

const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string){
        console.log(message);
    }
}
const user: Human = tmpDeveloper;
// user.experience:
// const user: Human = new Developer('Quill', 38, 3);

let developer = new Developer(32, 1,'Bob');
console.log(developer)