import _ from 'lodash';
declare module 'lodash' {
    // export function shuffle<T>(arr: T[]): T[]
    interface LoDashStatic { 
        hello: string;
    }
}
