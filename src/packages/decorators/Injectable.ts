const container = {};

export function Injectable({ selector }: { selector: string }) {
    return function (target: any) {
        const isThereSomeone = Reflect.getMetadata(selector, container);
        if (isThereSomeone) {
            throw new Error(`Class with selector ${selector} is already injected!`);
        }

        const service = new target();
        Reflect.defineMetadata(selector, service, container);
        return target;
    }
}

export function Inject(selector: string) {
    return function (target: any, key: string) {
        const service = Reflect.getMetadata(selector, container);
        target[key] = service;
        return target;
    }
}