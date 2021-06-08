/* eslint-disable */ 
export class Work {
    public fromDate: string = '';
    public toDate: string = '';
    public company: string = '';
    public jobTitle: string = '';

    constructor(init?: Partial<Work>) {
        Object.assign(this, init);
    } 
}