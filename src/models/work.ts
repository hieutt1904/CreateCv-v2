/* eslint-disable */ 
export class Work {
    public from?: number = 0;
    public to: number = 0;
    public company: string = '';
    public jobTitle: string = '';
    
    constructor(init?: Partial<Work>) {
        Object.assign(this, init);
    } 
}