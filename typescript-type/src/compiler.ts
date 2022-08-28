function echo(message: string): string | null {
    let hello = 'hello';
    return message;
}

let nullableMessage: string | null = echo('hi');
let undefinedMessage: string | undefined = undefined;
if (nullableMessage) {
    nullableMessage.toLocaleUpperCase();
}

const newFunction = echo.call(null, 'aaa')