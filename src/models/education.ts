export class Education {
    from: number = 0;
    to: number = 0;
    school: string = '';
    major: string = '';
    constructor(init?: Partial<Education>) {
        Object.assign(this, init);
    }
}