function Logging(message: string) {
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}
function Component(template: string, selector: string) {
    return function <T extends {new(...args: any[]): { name: string }}>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1')!.textContent = instance.name
                }
            }
        }
    }
}

function PropatyLogging(target: any, propertyKey: string) {
    console.log('propertyKey');
    console.log(target);
    console.log(propertyKey);
}
function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('methodLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function enumerable (isEnumerable: boolean) {
    return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
        return {
            enumerable: isEnumerable
        }
    }
}
function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('AccessorLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function ParameterLogging(target: any, propertyKey: string, parameterIndex: number) {
    console.log('ParameterLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}

@Logging('User logging')
@Component('<h1>{{ name }}</h1>', '#app')
class User {
    @PropatyLogging
    name = 'Quill';
    constructor(private _age: number) {
        console.log('User was created!');
    }
    @AccessorLogging
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    @enumerable(false)
    @MethodLogging
    greeting (@ParameterLogging message: string) {
        console.log(message);
    }
}
