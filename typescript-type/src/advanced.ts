type Engineer = {
    name: string;
    role: string;
}
type Blogger = {
    name: string;
    follower: number;
}

interface EngineerBloger extends Engineer, Blogger {}
// type EngineerBloger = Engineer & Blogger;
const quill: EngineerBloger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}
// type tmp = string & number;

type NumberBoolean = number | boolean;
type StringNumber = number | string;
type Mix = NumberBoolean & StringNumber;

function toUpperCase (x: string): string;
function toUpperCase (x: number): number;
function toUpperCase (x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
interface TmpFunc {
    (x: string): number;
    (x: number): number;
}
// const upperHello = toUpperCase('helll');
const upperHello: TmpFunc = function (x: string | number) {return 0};
interface FuncA {
    (a: number, b: string): number;
}
interface FuncB {
    (a: string): string;
}
let unionFunc: FuncA | FuncB;
// let unionFunc: FuncB & FuncA;
// unionFunc();
// interface FuncA {
//     (a: number, b: string): number;
//     (a: string, b: number): number;
// }
// interface FuncB {
//     (a: string): number;
// }
// let intersectionFunc: FuncA & FuncB;
// // let intersectionFunc: FuncB & FuncA;
// intersectionFunc = function(a: number | string, b?: number | string) {return 0};

type NomadWorker = Engineer | Blogger;
function describeProfile(NomadWorker: NomadWorker) {
    console.log(NomadWorker.name);
    // if (typeof NomadWorker === 'object') {
    if ('role' in NomadWorker) {
        console.log(NomadWorker.role)
    }
    if ('follower' in NomadWorker) {
        console.log(NomadWorker.follower)
    }
}

class Dog {
    kind: 'dog' = 'dog';
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
        pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
// havePet(new Bird());

// const input = <HTMLInputElement>document.getElementById('input');
// const input = document.getElementById('input') as HTMLInputElement;
// const input = document.getElementById('input')!;
// input.value = 'initial input value';

interface Designer {
    name: string;
    [index: string]: string; // 肩を定義する制限が崩れる
}
const designer: Designer = {
    name: 'Quill',
    role: 'web'
}
interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadedData: DownloadedData = {
    id: 1,
}
console.log(downloadedData.user?.name?.first);
const userData = downloadedData.user ?? 'no-user'; // undefied or null
// const userData = downloadedData.user || 'no-user';
type id = DownloadedData['id' | 'user'];
enum Color {
    RED,
    BLUE
}
class AdvancedPerson {
    name: string = 'Peter'
    private age: number = 34;
}
class AdvancedCar {
    name: string ='Prius'
    private age: number = 34;
}

let target = new AdvancedPerson();
let source = new AdvancedCar(); // JSは引数が多いときは余分な引数は無視する
// target = source;

// function advancedFn(...args: readonly [number, string, boolean, ...number[]]) {
//     args.push('hey');
// };
// function advancedFn(...args: [number, string, boolean, ...number[]]) {
//     args.push('hey');
// };
// advancedFn(1, 'hello', true, 1, 1, 1);

let milk = 'milk' as const;
let drink = milk;
// const array = [10, 20];
const array = [10, 20] as const;
const peter = {
    name: 'Peter',
    age: 38
} as const;
type PeterType = typeof peter;