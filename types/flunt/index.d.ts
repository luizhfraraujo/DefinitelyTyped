// Type definitions for flunt 0.0
// Project: https://github.com/andrebaltieri/flunt-js#readme
// Definitions by: Luiz Araújo <https://github.com/luizhfraraujo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 2.1

declare module 'flunt' {
    class flunt {
        constructor();

        clear(): void;

        dateIsBetween(value: any, from: any, to: any, property: any, message: any): void;

        dateIsEquals(value: any, comparer: any, property: any, message: any): void;

        dateIsGreaterOrEqualsThan(value: any, comparer: any, property: any, message: any): void;

        dateIsGreaterThan(value: any, comparer: any, property: any, message: any): void;

        dateIsLessOrEqualsThan(value: any, comparer: any, property: any, message: any): void;

        dateIsLessThan(value: any, comparer: any, property: any, message: any): void;

        errors(): any;

        hasMaxLen(value: any, max: any, property: any, message: any): void;

        hasMinLen(value: any, min: any, property: any, message: any): void;

        isDate(value: any, property: any, message: any): void;

        isEmail(value: any, property: any, message: any): void;

        isFixedLen(value: any, len: any, property: any, message: any): void;

        isNullOrUndefined(value: any, property: any, message: any): void;

        isRequired(value: any, property: any, message: any): void;

        isValid(): any;
    }

    export default flunt;
}
