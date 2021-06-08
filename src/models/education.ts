
/* eslint-disable */ 
export class Education {
    fromDate: string = '';
    toDate: string = '';
    school: string = '';
    major: string = '';
    constructor(init?: Partial<Education>) {
        Object.assign(this, init);
    }
}