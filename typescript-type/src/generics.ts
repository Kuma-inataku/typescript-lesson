function copy<T extends {name: string, age: number}, U extends keyof T>(value: T, key: U): T {
    value[key];
    return value;
}
console.log(copy({ name: 'Quill', age: 38}, 'name'));

type K = keyof { name: string; age: number; }

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get () {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
    id: number;
    data: T[];
}
// type TmpDatabase<T> = {
//     id: number;
//     data: T[];
// }

const tmpDatabase: TmpDatabase<number> = {
    id: 3,
    data: [9]
}

interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
}); 

fetchData.then(data => {
    data.toUpperCase();
});

const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

interface ResponseData<T extends { message: string }> {
    data: T;
    status: number;
}
const tmp2: ResponseData<{message: string}> = {
    data: {message: 'hoge'},
    status: 1,
}
interface Vegetables {
    readonly tomato: string;
    pumpkin?: string;
}
type MappedTypes = {
    -readonly[P in keyof Vegetables]-?: string
}

type ConditionalTypes = 'tomato' extends string ? number : boolean;
type ConditionalTypesInfer = { tomato: 'tomato'} extends { tomato: infer R} ? R : boolean;
type DistributeveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let temp4: DistributeveConditionalTypes<'tomato' | 'pumpkin'> 
let tmp5: NonNullable<string | null>